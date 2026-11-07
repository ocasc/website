#!/usr/bin/env python3
"""Verify certificate privacy against a running build without printing student data.

Usage: python3 scripts/test-certificate-privacy.py <base-url> <students.json>
The registry stays local to the test runner and must contain at least two entries.
"""
import html.parser
import json
import sys
import urllib.parse
import urllib.request

if len(sys.argv) != 3:
    raise SystemExit('Usage: test-certificate-privacy.py <base-url> <students.json>')
base = sys.argv[1].rstrip('/')
with open(sys.argv[2], encoding='utf-8') as f:
    records = json.load(f)
assert isinstance(records, list) and len(records) >= 2, 'Need at least two fixture records'
assert len({entry['id'].lower() for entry in records}) == len(records), 'IDs must be unique'

class Scripts(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.sources = set()
    def handle_starttag(self, tag, attrs):
        if tag == 'script':
            src = dict(attrs).get('src')
            if src and src.startswith('/_next/static/'):
                self.sources.add(src)

def get(path, headers=None):
    req = urllib.request.Request(base + path, headers=headers or {})
    with urllib.request.urlopen(req, timeout=20) as response:
        return response.read().decode('utf-8', errors='strict'), response.headers

def assert_no_records(text, exceptions=()):
    allowed = set(exceptions)
    for entry in records:
        if entry['id'] not in allowed:
            assert entry['id'] not in text, 'Unexpected certificate ID in response'
            # Only check names unique enough not to be substrings of an allowed name.
            allowed_names = [e['nameZh'] for e in records if e['id'] in allowed]
            if len(entry['nameZh']) >= 2 and not any(entry['nameZh'] in n for n in allowed_names):
                assert entry['nameZh'] not in text, 'Unexpected student name in response'

no_id, headers = get('/certification')
assert_no_records(no_id)
initial_parser = Scripts()
initial_parser.feed(no_id)
assert initial_parser.sources, 'No browser scripts found'
for asset in initial_parser.sources:
    body, _ = get(asset)
    assert_no_records(body)
assert '请使用完整的个人证书链接' in no_id, 'No-ID guidance missing'
assert 'no-store' in headers.get('Cache-Control', ''), 'Certificate page must not be cached'
unknown, _ = get('/certification?id=NONEXISTENT-CERTIFICATE')
assert '未找到该证书' in unknown, 'Unknown ID must not resolve'
assert_no_records(unknown)
assets = set()
for entry in records:
    path = '/certification?id=' + urllib.parse.quote(entry['id'])
    body, headers = get(path)
    assert entry['id'] in body and entry['nameZh'] in body, 'Requested certificate did not render'
    assert 'no-store' in headers.get('Cache-Control', ''), 'Individual certificate must not be cached'
    assert_no_records(body, [entry['id']])
    parser = Scripts()
    parser.feed(body)
    assets.update(parser.sources)
assert assets, 'No browser scripts found'
for asset in assets:
    body, _ = get(asset)
    assert_no_records(body)
# Historical links without and with the trailing slash both continue to work.
entry = records[0]
body, _ = get('/certification/?id=' + urllib.parse.quote(entry['id']))
assert entry['id'] in body and entry['nameZh'] in body
assert_no_records(body, [entry['id']])
# Case-insensitive matching is retained.
body, _ = get('/certification?id=' + urllib.parse.quote(entry['id'].lower()))
assert entry['nameZh'] in body
assert_no_records(body, [entry['id']])
print(f'PASS: {len(records)} individual certificates, missing/unknown ID, trailing slash, case-insensitive lookup, {len(assets)} client scripts, and no-store headers')
