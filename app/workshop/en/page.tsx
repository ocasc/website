import type { Metadata } from "next";

const SIGNUP = "https://wj.qq.com/s2/28235369/w9ei/";

export const metadata: Metadata = {
  title: "Verifying AI Safety Commitments · 3 December, Shenzhen",
  description:
    "A small technical workshop in Shenzhen on 3 December: once a datacenter has been accepted and paid for, can anyone still check what is running in it?",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Verifying AI Safety Commitments · 3 December, Shenzhen",
    description:
      "A small technical workshop: after acceptance, how do you check the machines are still the ones you paid for?",
    images: [{ url: "/workshop/og-en.png", width: 1200, height: 630 }],
  },
};

export default function WorkshopPageEn() {
  return (
    <main className="ws">
      <header className="ws-hero">
        <div className="ws-eyebrow-row">
          <p className="ws-eyebrow">OCASC technical workshop · Shenzhen</p>
          <a className="ws-lang" href="/workshop" hrefLang="zh-CN">
            中文
          </a>
        </div>
        <h1>Verifying AI Safety Commitments</h1>
        <p className="ws-en">AI 安全承诺核验</p>
        <p className="ws-lead">
          We want to put people who work on AI safety and verification in one room for three hours to
          discuss a single question: what would a verification process look like that actually works?
        </p>
        <div className="ws-meta">
          <span>18:00–21:00, 3 December · Shenzhen</span>
          <span>OCASC × muShenzhen</span>
        </div>
      </header>

      <div className="ws-grid">
        <div className="ws-main">
          <section className="ws-section">
            <p className="ws-num">01</p>
            <h2>Why AI safety needs verification</h2>
            <p>
              Most judgements about AI safety rest on conclusions someone else supplies: how capable a
              model is, what safeguards were added, where training and inference actually run. The systems
              are closed, the machines sit in someone else&apos;s datacenter, evaluations usually come back
              as summary numbers, and nobody outside can measure any of it. Verification is what lets an
              outsider check for themselves.
            </p>
            <p>
              The most public of these conclusions are the safety documents labs publish themselves. Over
              the past three years Anthropic, OpenAI and Google DeepMind each released one, stating what a
              capability level means and which safeguards have to be in place.
            </p>
            <ul>
              <li>
                Anthropic&apos;s{" "}
                <a href="https://www.secrss.com/articles/87619" target="_blank" rel="noopener noreferrer">
                  Responsible Scaling Policy (RSP)
                </a>{" "}
                sorts capabilities into tiers and writes down the safeguards required at each tier
              </li>
              <li>
                OpenAI&apos;s{" "}
                <a href="https://www.ithome.com/0/845/524.htm" target="_blank" rel="noopener noreferrer">
                  Preparedness Framework
                </a>{" "}
                fixes the evaluation method and the launch threshold first, then reports by capability tier
              </li>
              <li>
                Google DeepMind&apos;s{" "}
                <a href="https://www.thepaper.cn/newsDetail_forward_31665820" target="_blank" rel="noopener noreferrer">
                  Frontier Safety Framework
                </a>{" "}
                maps capability thresholds to specific security measures
              </li>
            </ul>
            <p>
              The company makes the judgement and supervises its own execution; what outsiders see is the
              published document. Whether a commitment was kept cannot be answered by reading it. That takes
              material someone else can check: evaluation records, the environment training and inference
              ran in, when a configuration changed.
            </p>
            <p>
              In May 2024, 16 companies signed the{" "}
              <a href="https://www.chinanews.com.cn/cj/2024/05-23/10222198.shtml" target="_blank" rel="noopener noreferrer">
                Frontier AI Safety Commitments
              </a>{" "}
              at the Seoul summit, Zhipu AI among them. Each agreed to describe, under its own safety
              framework, how it assesses model risk. What they hand in is still their own account.
            </p>
            <p>
              Commitments also change. In February 2026 Anthropic published the third version of its RSP and{" "}
              <a href="https://www.ithome.com/0/923/451.htm" target="_blank" rel="noopener noreferrer">
                dropped the core commitment not to train or release a model whose safeguards were insufficient
              </a>
              ; in an interview with Time, its chief science officer cited rivals moving faster and
              unilateral restraint being unreasonable. Changing the policy is the company&apos;s call, but
              whether the earlier version was honoured gets harder to check with time. Verification has to
              happen then, and the material has to be kept.
            </p>
            <p>
              China takes a different route: algorithm filing, security assessment, content labelling. The
              National Technical Committee 260 (TC260) published{" "}
              <a href="https://www.cac.gov.cn/2026-09/14/c_1791137092283345.htm" target="_blank" rel="noopener noreferrer">
                version 3.0 of its AI Safety Governance Framework
              </a>{" "}
              on 14 September 2026, with more detail than the previous edition on risk classification and
              the technical measures attached to each level. Both routes end at the same question: can what
              was written down be checked afterwards?
            </p>
            <p>
              Over the past two years OCASC has been doing field building in the Chinese-language AI safety
              community: running events and connecting the people who work on it. This time we want the
              discussion to land on something concrete. One datacenter, checked item by item.
            </p>
            <ul>
              <li>
                Whether the machines are the batch that was accepted: model, serial numbers, accelerator
                count, interconnect topology, checked line by line against the acceptance record
              </li>
              <li>
                Whether the environment was touched: firmware, driver and boot configuration versions, plus
                the remote attestation report issued by the TEE
              </li>
              <li>
                Whether what runs has changed: hashes of images and weights, cluster scheduling
                configuration, whether the logs are continuous and complete
              </li>
              <li>
                Whether performance still matches: rerun the same benchmark and see how far the numbers drift
              </li>
            </ul>
          </section>

          <section className="ws-section">
            <p className="ws-num">02</p>
            <h2>What verification has to satisfy</h2>
            <p>
              Verification involves two parties: the prover and the outside verifier. The prover has trade
              secrets, so the verification runs inside its own environment; the outside party never reads
              the raw data, only the conclusion. That conclusion still has to be independently checkable,
              and what makes it checkable is hardware backing, a remote attestation report from a TEE, not
              the prover&apos;s own statement.
            </p>
            <ul>
              <li>
                The prover only produces evidence; the judgement happens outside. What the outside party
                trusts has to rest on the trusted execution environment and the vendor certificate chain
              </li>
              <li>
                Collecting evidence has to be light enough not to disturb daily operation. Which checks cost
                a fixed amount and which consume machine time has to be counted separately
              </li>
              <li>
                Checking a small part of a datacenter should say something about all of it. That holds only
                when configurations and images are consistent and a checkable inventory is kept; in a
                heterogeneous cluster under dynamic scheduling, how far a sample reaches has to be stated
              </li>
              <li>
                Someone else following the same steps has to reach the same conclusion, and a year later the
                material has to still exist and still be retrievable
              </li>
            </ul>
            <p>
              The software route is moving too. In November Anthropic open-sourced{" "}
              <a href="https://www.anthropic.com/research/provable-inference" target="_blank" rel="noopener noreferrer">
                FlashProve
              </a>
              , a prototype for provable inference: the provider attaches a zero-knowledge proof, and an
              outsider can confirm a response came from the claimed model without learning the weights.
              Producing the proof costs 70–95× the inference compute; checking it is cheap.
            </p>
          </section>

          <section className="ws-section">
            <p className="ws-num">03</p>
            <h2>How the evening runs</h2>
            <p>
              In the first hour, three engineers each speak for twenty minutes, one of them joining
              remotely: how they do it, where it gets stuck. The remaining two hours go through the four
              points above one by one. How would such a process be designed? Which one cannot be met today,
              and is that a technical limit or nobody&apos;s job?
            </p>
            <p>
              We leave with two lists: which material that exists today can support a later check, and which
              checks cannot be filled in yet. An unattributed version of both lists is published afterwards,
              methods and gaps only.
            </p>
          </section>

          <section className="ws-section">
            <p className="ws-num">04</p>
            <h2>Who it is for</h2>
            <p>
              Engineers who have worked on acceptance testing, cluster scheduling, remote attestation or log
              integrity, and colleagues on the buyer side who audit compute projects. This material ends up
              in your hands to check. People working on zero-knowledge proofs or verifiable computation are
              welcome too: letting an outsider confirm a conclusion without raw data is the step this room
              has the least practice with.
            </p>
            <p>
              Seats are limited, so please make sure you can give the full three hours. Bring a problem you
              have actually run into and the discussion goes further.
            </p>
          </section>

          <section className="ws-section">
            <p className="ws-num">05</p>
            <h2>Who runs it</h2>
            <p>
              Initiated by OCASC, the Chinese-language AI safety community, as one of the muShenzhen
              co-creation events that day; muShenzhen provides the venue. AI Safety Node (Ecomonitor), the
              group behind AI Security Day at muShanghai AI Week in May, co-organises. Convened by Sarah,
              who researches technical AI safety governance at the Oxford Martin School.
            </p>
            <p>
              If you need a written description for internal approval, say so in the sign-up form and we
              will send you one.
            </p>
          </section>
        </div>

        <aside className="ws-rail">
          <div className="ws-card">
            <dl>
              <div>
                <dt>Time</dt>
                <dd>
                  18:00–21:00, 3 December
                  <span>three hours, in the evening</span>
                </dd>
              </div>
              <div>
                <dt>Place</dt>
                <dd>
                  Shenzhen
                  <span>venue holds 40–60 people; location sent after registration</span>
                </dd>
              </div>
              <div>
                <dt>Size</dt>
                <dd>
                  about 20 attendees
                  <span>3 talks (1 remote), 6–8 in the roundtable</span>
                </dd>
              </div>
              <div>
                <dt>Language</dt>
                <dd>
                  Chinese
                  <span>technical terms kept in English</span>
                </dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>
                  in the room, one speaker remote, by registration
                  <span>no recording, no external reporting, no playback</span>
                </dd>
              </div>
              <div>
                <dt>Ticket</dt>
                <dd>
                  speakers covered by the organisers
                  <span>attendees buy the day pass</span>
                </dd>
              </div>
            </dl>
            <a className="ws-btn" href={SIGNUP} target="_blank" rel="noopener noreferrer">
              Sign up
            </a>
            <p className="ws-note">
              Registration closes 17 November, first come first served, confirmed on WeChat.
            </p>
          </div>
        </aside>
      </div>

      <footer className="ws-foot">
        <span>OCASC · muShenzhen</span>
        <a href={SIGNUP} target="_blank" rel="noopener noreferrer">
          Sign-up form ↗
        </a>
      </footer>
    </main>
  );
}
