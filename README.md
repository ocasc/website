# ocasc/website

AI安全开放社区（Open Community for AI Safety China）的官网：<https://aisafety-cn.com>

一个协作网络，不是研究机构。站上现在有三页、两种语言：

| 路径 | 内容 |
|---|---|
| `/` | 首页：使命、参与方式（课程 / 线下活动 / 学术研讨会）、近期活动、申请分享 |
| `/resources` | 怎么进入 AI 安全行业：01 课程与技术训练 → 02 兼职与远程 → 03 全职 fellowship |
| `/about` | 我们的故事与里程碑 |
| `/en/...` | 上面三页的英文版（同一个组件，语言由路径决定） |

中文是默认站点，不带前缀；英文一律在 `/en` 下。`/zh` 会重定向回 `/`。

## 技术栈

- Next.js 16（App Router，Turbopack 构建）+ React 19 + TypeScript
- 样式：`app/page.module.css`（三页共用一个 CSS Module）+ `app/globals.css` 里的 `--home-*` 设计令牌
  （纸白 `#F3F0EF` / 墨色 `#171719` / 唯一强调色朱红 `#A51C30`）
- 文案：`lib/i18n.ts`（zh / en 两套，字段有 TS interface 约束）
- 活动数据：不在本仓库。来自 [`ocasc/doc`](https://github.com/ocasc/doc) 的 Markdown，由 `/api/events` 读取并解析
- 语言切换：`lib/language-context.tsx` 用 `usePathname()` 推导语言，`lib/locale.ts` 负责给站内链接加 `/en` 前缀

```
app/            页面（/、/resources、/about、/en/*、/certification、/api/events）
components/     brand-mark、language-switcher
lib/            i18n、language-context、locale、github-events（事件解析）、use-events
public/         logo、合作方 logo、公众号二维码
```

## 本地开发

```bash
npm install

# 证书页需要一个 gitignored 的学生名单占位，否则 next build 会失败
echo '[]' > app/certification/_data/students.json

# 活动列表走 GitHub API；不带 token 会很快撞到匿名配额，页面就显示"暂无活动"
export GITHUB_TOKEN=$(gh auth token)

npm run dev          # http://localhost:3000
npm run build && npm run start
```

`scripts/` 下有两个小脚本（`npm run test:github` / `test:markdown`）用来单独验证 GitHub 拉取与 Markdown 解析。
GitHub token 的申请与作用域见 [`docs/github-setup.md`](docs/github-setup.md)。

## 部署

线上是两台机器、同一份代码：

- **Aliyun `47.98.228.18`** —— `aisafety-cn.com`，公众看到的
- **Azure `20.2.91.244`** —— 镜像（`gixia.org` 系域名 301 到主域）

两台都是 nginx → Node（pm2 进程名 `website`，端口 3000）。发布步骤：

```bash
# 1) 构建到旁边的目录，构建期间线上继续跑旧构建（不要直接 rm -rf .next）
mkdir -p .next-build && cp -a .next/cache .next-build/cache
NEXT_DIST_DIR=.next-build npm run build
cat .next-build/BUILD_ID                 # 有值才算成功

# 2) 原子替换 + 重启
rm -rf .next-old && mv .next .next-old && mv .next-build .next
pm2 restart website --update-env
```

回滚：`mv .next .next-broken && mv .next-old .next && pm2 restart website`。

注意：`sudo -u <user> -H bash -lc` 不一定加载 nvm/fnm，非交互式发布时先 `export PATH=…/bin:$PATH`。

### nginx / HTTPS

`/etc/nginx/sites-available/react-apps` 上面向 `aisafety-cn.com` 与 `www.aisafety-cn.com`；
www 与 80 端口都 301 到 `https://aisafety-cn.com`。证书用 certbot（`certonly --nginx`，含两个域名，
`certbot.timer` 自动续期）。

## 贡献

欢迎 issue 与 PR。写内容的人只需要改两处：

- 站上的文字 → `lib/i18n.ts`（中文与英文各一份）
- 活动 → 往 [`ocasc/doc`](https://github.com/ocasc/doc) 加一个 `talk-` / `seminar-` / `course-` / `meetup-` / `hackathon-` 开头的 Markdown

改样式前先读一眼 `app/globals.css` 的令牌与 `app/page.module.css` 的线宽约定：2px 墨线是段落边界，
1px 墨线是组件框，1px 灰线是行分隔。没有圆角卡片、渐变和阴影。
