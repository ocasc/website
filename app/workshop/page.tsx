const SIGNUP = "https://wj.qq.com/s2/28235369/w9ei/";

export default function WorkshopPage() {
  return (
    <main className="ws">
      <header className="ws-head">
        <p className="ws-eyebrow">闭门技术讨论 · 嘉宾招募</p>
        <h1>
          AI 安全承诺核验
          <span>12 月 3 日下午 · 深圳 · 二十人左右</span>
        </h1>
        <p className="ws-lead">
          一次闭门技术讨论，三个小时，只谈一个具体问题：机房验收合格、钱也付完之后，还有没有办法核对机器是不是当初那批。
        </p>
        <div className="ws-cta">
          <a className="ws-btn" href={SIGNUP} target="_blank" rel="noopener noreferrer">
            报名分享或圆桌（截止 11 月 17 日）
          </a>
          <span className="ws-note">分享嘉宾 6–8 位，门票由主办方承担</span>
        </div>
      </header>

      <section className="ws-section">
        <h2>问题是什么</h2>
        <p>
          现在的做法是验收报告签字、尾款付清。一年后要回头核对，能拿出来的通常是验收报告、设备清单和几张截图——报告上有签字，签字之后的设备状态没有再对过一次。
        </p>
      </section>

      <section className="ws-section">
        <h2>这三个小时谈什么</h2>
        <p>
          先由几位做验收测试、集群运维、远程证明（用机器启动时留下的记录做核对）的工程师各讲十几分钟，讲他们实际怎么做、哪一步会卡住。剩下时间一起讨论三件事：
        </p>
        <ul>
          <li>验收当天留下的材料，一年后还剩多少、在谁手里</li>
          <li>哪些检查现在做不到，是卡在技术上还是卡在流程上</li>
          <li>同一套基准隔几个月重跑，性能数字一般差多少</li>
        </ul>
      </section>

      <section className="ws-section">
        <h2>结束后带走什么</h2>
        <p>
          我们会整理出两张清单：一张记下哪些现有材料能支撑事后核对，一张写下哪些检查现在补不上。会后公开发布的是不指名的版本：哪些材料够用、哪些检查缺。
        </p>
      </section>

      <section className="ws-section">
        <h2>谁办的</h2>
        <p>
          由 AI 安全中文社区 OCASC 发起，muShenzhen 提供场地。我们想把「AI 承诺核验」做成几个能落地的检查，这次先从机房这一层谈。
        </p>
      </section>

      <section className="ws-section">
        <h2>参加</h2>
        <p>
          二十人左右，闭门讨论，不做公开传播，也不涉及具体项目、客户或产品评价。座位有限，报名截止 11 月 17 日。
          如果单位内部需要一份活动说明用于报备，可以联系我们。
        </p>
        <p>
          发起人 Sarah，牛津大学马丁学院 AI 安全技术治理方向。
        </p>
      </section>

      <section className="ws-poster">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/workshop/poster.jpg" alt="AI 安全承诺核验 · 12 月 3 日 深圳 嘉宾招募海报" width={900} height={1660} />
      </section>

      <footer className="ws-foot">
        <a href={SIGNUP} target="_blank" rel="noopener noreferrer">
          报名表 ↗
        </a>
        <span>muShenzhen · 深圳</span>
      </footer>
    </main>
  );
}
