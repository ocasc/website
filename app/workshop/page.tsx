const SIGNUP = "https://wj.qq.com/s2/28235369/w9ei/";

export default function WorkshopPage() {
  return (
    <main className="ws">
      <header className="ws-head">
        <p className="ws-eyebrow">OCASC 小范围技术讨论 · 深圳</p>
        <h1>一年后还能证明，机房里的机器还是当初那批吗？</h1>
        <div className="ws-meta">
          <span><b>时间</b>12 月 3 日下午</span>
          <span><b>地点</b>深圳，具体场地报名后告知</span>
          <span><b>规模</b>二十人左右，分享嘉宾 6–8 位</span>
          <span><b>形式</b>凭报名入场，不录像、不公开转述</span>
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
          过去三年，几家海外实验室陆续把「能力到什么水平、必须先加什么防护」写成公开文件：Anthropic 的
          <a href="https://www.secrss.com/articles/87619" target="_blank" rel="noopener noreferrer">负责任扩展政策（Responsible Scaling Policy）</a>，2023 年 9 月第一版，现在到 3.4 版（2026 年 7 月生效）；OpenAI 的
          <a href="https://www.ithome.com/0/845/524.htm" target="_blank" rel="noopener noreferrer">准备框架（Preparedness Framework）</a>，2025 年 4 月的第二版；Google DeepMind 的
          <a href="https://www.thepaper.cn/newsDetail_forward_31665820" target="_blank" rel="noopener noreferrer">前沿安全框架（Frontier Safety Framework）</a>，2025 年 9 月第三版，2026 年 4 月升到 3.1。
        </p>
        <p>
          2026 年 5 月，OpenAI 又单独发了一份面向监管的
          <a href="https://www.secrss.com/articles/90937" target="_blank" rel="noopener noreferrer">前沿治理框架（Frontier Governance Framework）</a>，用来说明自己的做法怎么对齐加州和欧盟的新规。再往前，2024 年 5 月首尔峰会上，
          <a href="https://www.chinanews.com.cn/cj/2024/05-23/10222198.shtml" target="_blank" rel="noopener noreferrer">16 家公司联署「前沿 AI 安全承诺」</a>，中国的智谱 AI 也在内；承诺里有一条是：基于安全框架，说明自己怎么衡量模型风险。
        </p>
        <p>
          这些文件一直在改。2026 年 2 月，Anthropic 把 RSP 从第二版改到第三版，同时
          <a href="https://www.ithome.com/0/923/451.htm" target="_blank" rel="noopener noreferrer">取消了「没有足够防护就不训练、不发布模型」这条核心承诺</a>，理由是对手推进太快、单方面约束不合理。改与不改是它自己的判断，但这件事说明：承诺本身会变。那变之前那一版有没有兑现，过一段时间就更难查了。
        </p>
        <p>
          国内走的是另一条路：算法备案、安全评估、内容标识。全国网安标委 2026 年 9 月 14 日发布
          <a href="https://www.cac.gov.cn/2026-09/14/c_1791137092283345.htm" target="_blank" rel="noopener noreferrer">《人工智能安全治理框架》3.0</a>，把风险的分类分级和对应的技术措施写得更细。路径不同，最后都要落到同一个问题：写下来的东西，一年后怎么核对。
        </p>
        <p>
          承诺里说的都是可核对的事：不使用某类数据、训练不超过某个算力、评测结果要能复现。可谁来核、拿什么核？OCASC 这两年在中文社区办过评测复现和算力核查的讨论，每次都卡在同一处——材料在谁手里，一年后还拿不拿得出来。所以这次不再泛泛地谈，挑最小的一层开始：一间机房，验收合格、钱也付完之后，怎么核对里面的机器还是当初验收的那批。
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
          二十人左右，凭报名入场。更适合做过验收测试、跑过集群调度、做远程证明和日志完整的工程师，也包括买方那边负责算力项目审核的人——你要拿材料去举证，这件事跟你直接有关。
        </p>
        <p>
          名额有限，请确认那天下午真的能腾出三个小时。带着一个具体的卡点来，讨论会更值。
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
        <span className="ws-note">截止 11 月 17 日 · 二十人左右，凭报名入场；不录像，不做公开转述</span>
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
