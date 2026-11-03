const SIGNUP = "https://wj.qq.com/s2/28235369/w9ei/";

export default function WorkshopPage() {
  return (
    <main className="ws">
      <header className="ws-head">
        <p className="ws-eyebrow">OCASC 闭门技术讨论 · 深圳</p>
        <h1>一年后还能证明，机房里的机器还是当初那批吗？</h1>
        <div className="ws-meta">
          <span><b>时间</b>12 月 3 日下午</span>
          <span><b>地点</b>深圳，具体场地报名后告知</span>
          <span><b>规模</b>二十人左右，分享嘉宾 6–8 位</span>
          <span><b>形式</b>闭门，不做公开传播</span>
        </div>
        <div className="ws-cta">
          <a className="ws-btn" href={SIGNUP} target="_blank" rel="noopener noreferrer">
            报名来做分享或圆桌
          </a>
          <span className="ws-note">分享嘉宾名额 6–8 位，11 月 17 日截止；听众报名同日截止。</span>
        </div>
      </header>

      <section className="ws-section">
        <h2>为什么会有这场讨论</h2>
        <p>
          这几年 AI 安全的承诺写得越来越多：不用某类数据、训练不超过某个算力、评测结果要能复现。承诺写下来容易，难的是过一段时间，谁来核对它有没有被兑现。
        </p>
        <p>
          OCASC 这两年在中文社区做讲座和课程，也办过评测复现和算力核查的讨论。每次聊到最后都会卡在同一处：材料在谁手里，一年后还拿不拿得出来。所以我们不再泛泛地谈，挑最小的一层开始——一间机房，验收合格、钱也付完之后，怎么核对里面的机器还是当初验收的那批。
        </p>
      </section>

      <section className="ws-section">
        <h2>那天下午怎么过</h2>
        <p>
          第一个小时，请三到四位做过验收测试、集群运维、远程证明的工程师各讲十几分钟，讲他们实际怎么做、哪一步会卡住。后面两个小时一起讨论三件事：
        </p>
        <ul>
          <li>验收当天留下的材料，一年后还剩多少，在谁手里</li>
          <li>哪些检查现在做不到，是技术上做不了，还是没人负责做</li>
          <li>同一套基准隔几个月重跑，性能数字一般会差多少</li>
        </ul>
        <p>
          结束时我们带走两张清单：一张记下现有材料里哪些能支撑事后核对，一张记下哪些检查现在补不上。会后公开的版本不指名，只写方法和缺口。
        </p>
      </section>

      <section className="ws-section">
        <h2>适合谁来</h2>
        <p>
          二十人左右，闭门讨论。适合做过验收测试、跑过集群调度、做远程证明和日志完整的工程师，也包括买方那边负责算力项目审核的人——你要拿材料去举证，这件事跟你直接有关。
        </p>
        <p>
          不适合想找合作、想招人、或者只想听一遍 AI 安全概览的朋友。名额有限，请确认那天下午真的能腾出三个小时再报名。
        </p>
      </section>

      <section className="ws-section">
        <h2>谁办的</h2>
        <p>
          由 AI 安全中文社区 OCASC 发起，muShenzhen 提供场地，这场讨论也是 muShenzhen 当天的共创活动之一。发起人 Sarah，在牛津大学马丁学院做 AI 安全技术治理方向的研究。
        </p>
        <p>
          如果单位内部需要一份活动说明用于报备，跟我们说一声，我们单独发给你。
        </p>
      </section>

      <section className="ws-cta ws-cta-bottom">
        <a className="ws-btn" href={SIGNUP} target="_blank" rel="noopener noreferrer">
          填写报名表
        </a>
        <span className="ws-note">截止 11 月 17 日 · 我们会通过微信跟你确认</span>
      </section>

      <section className="ws-poster">
        <p className="ws-poster-cap">想转给同事，把这张图转出去就行。</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/workshop/poster.jpg"
          alt="AI 安全承诺核验 · 12 月 3 日 深圳 嘉宾招募海报"
          width={900}
          height={1660}
        />
      </section>

      <footer className="ws-foot">
        <span>AI 安全中文社区 OCASC · muShenzhen</span>
        <a href={SIGNUP} target="_blank" rel="noopener noreferrer">
          报名表 ↗
        </a>
      </footer>
    </main>
  );
}
