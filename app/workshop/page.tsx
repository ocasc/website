const SIGNUP = "https://wj.qq.com/s2/28235369/w9ei/";

export default function WorkshopPage() {
  return (
    <main className="ws">
      <header className="ws-hero">
        <p className="ws-eyebrow">OCASC 小范围技术讨论 · 深圳</p>
        <h1>AI 安全承诺核验</h1>
        <p className="ws-en">Verifying AI Safety Commitments</p>
        <p className="ws-lead">
          一次三小时的小范围技术讨论。训练和推理跑在别人的机房里，安全承诺由公司自己执行、自己报告，外部能做的只有事后核对留下的材料。那天下午只看一间机房。验收合格、钱付完之后，当初留下的材料一年后还核不核得动。
        </p>
        <div className="ws-meta">
          <span>12 月 3 日下午 · 深圳</span>
          <span>OCASC × muShenzhen</span>
        </div>
      </header>

      <div className="ws-grid">
        <div className="ws-main">
          <section className="ws-section">
            <p className="ws-num">01</p>
            <h2>为什么 AI 安全需要核验（verification）技术</h2>
            <p>AI 安全上的判断，大多建立在别人给出的结论上：模型能力有多强、加了哪些防护、训练和推理跑在什么环境里。系统闭源，机器在别人的机房，评测往往只给汇总数字，外面的人没法自己量一遍。核验（verification）技术要做的就是这件事：把「相信你说的」换成「我能自己查一遍」。</p>
            <p>最公开的一类结论，是各家自己发布的安全文件。过去三年，Anthropic、OpenAI、Google DeepMind 各发了一份，写清能力到什么水平、必须先做到哪些防护：</p>
            <ul>
              <li>
                Anthropic 的
                <a href="https://www.secrss.com/articles/87619" target="_blank" rel="noopener noreferrer">负责任扩展政策（RSP）</a>
                ：能力分档，每一档写明必须做到的防护
              </li>
              <li>
                OpenAI 的
                <a href="https://www.ithome.com/0/845/524.htm" target="_blank" rel="noopener noreferrer">准备框架（Preparedness Framework）</a>
                ：先定评估方法和上线门槛，再按能力分档报告
              </li>
              <li>
                Google DeepMind 的
                <a href="https://www.thepaper.cn/newsDetail_forward_31665820" target="_blank" rel="noopener noreferrer">前沿安全框架（Frontier Safety Framework）</a>
                ：能力阈值对应到具体的安全措施
              </li>
            </ul>
            <p>
              这些文件有一个共同点：判断由公司自己做，执行由公司自己监督，外部能看到的只有公开发出来的文件。所以「承诺有没有兑现」，读文件回答不了，要看能不能拿到可以核对的东西：评测记录、训练和推理跑在什么环境里、配置什么时候改过。
            </p>
            <p>
              2024 年 5 月首尔峰会上，首批
              <a href="https://www.chinanews.com.cn/cj/2024/05-23/10222198.shtml" target="_blank" rel="noopener noreferrer">16 家公司签署「前沿 AI 安全承诺」</a>
              ，智谱 AI 也在内；承诺要求各家公司按自己的安全框架说明如何评估模型风险，交的仍然是自己的说明。
            </p>
            <p>
              承诺本身还会改。2026 年 2 月，Anthropic 发布 RSP 第三版，
              <a href="https://www.ithome.com/0/923/451.htm" target="_blank" rel="noopener noreferrer">删去了「防护不足就不训练、不发布模型」这条核心承诺</a>；据《时代》对该公司首席科学官的采访，理由是对手推进太快、单方面约束不合理。怎么改是它自己的判断，但改之前那一版有没有兑现，时间一长就更难查，核验要在当时做，而且要留下材料。
            </p>
            <p>
              国内走的是另一条路：算法备案、安全评估、内容标识。全国网络安全标准化技术委员会（全国网安标委）2026 年 9 月 14 日发布的
              <a href="https://www.cac.gov.cn/2026-09/14/c_1791137092283345.htm" target="_blank" rel="noopener noreferrer">《人工智能安全治理框架》3.0</a>
              ，比上一版更细地写了风险分类分级和对应技术措施。路径不同，落到同一件事：写下来的要求，事后能不能核对。
            </p>
            <p>
              OCASC 这两年在中文社区办过评测复现和算力核查的讨论，每次卡在同一处：材料在谁手里，一年后还拿不拿得出来。这次就从一间机房开始，核的是四样东西：
            </p>
            <ul>
              <li>机器是不是验收时那一批：型号、序列号、加速卡数量、卡间互联的拓扑，和验收记录逐项对</li>
              <li>环境有没有被动过：固件、驱动、启动配置的版本，以及 TEE 出的远程证明（remote attestation）报告</li>
              <li>跑的东西有没有换：镜像和权重的哈希、集群调度配置、日志是否连续完整</li>
              <li>性能还是不是当初那个水平：同一套基准重跑，偏差落在什么范围</li>
            </ul>
          </section>

          <section className="ws-section">
            <p className="ws-num">02</p>
            <h2>那天下午怎么过</h2>
            <p>
              第一个小时，请三到四位做过验收测试、集群运维、远程证明（remote attestation）的工程师各讲十分钟上下，说自己怎么做、哪一步会卡住。后面两个小时一起讨论三件事：
            </p>
            <ul>
              <li>验收当天留下的材料，一年后还剩多少，在谁手里</li>
              <li>哪些检查现在做不到，是技术上做不了，还是没人负责做</li>
              <li>同一套基准隔几个月重跑，性能数字一般会差多少</li>
            </ul>
            <p>全程以讨论为主，不安排动手环节，不用带电脑。</p>
            <p>
              结束时我们带走两张清单：一张记下现有材料里哪些能支撑事后核对，一张记下哪些检查现在补不上。会后公开这两张清单的不指名版本，只写方法和缺口。
            </p>
          </section>

          <section className="ws-section">
            <p className="ws-num">03</p>
            <h2>适合谁来</h2>
            <p>
              更适合做过验收测试、集群调度、远程证明（remote attestation）、日志完整性的工程师，也欢迎买方负责算力项目审核的同行，这些材料最后要由你们拿去核对。
            </p>
            <p>名额有限，请确认那天下午真的能腾出三个小时。带着一个你实际遇到的卡点来，讨论会更有收获。</p>
          </section>

          <section className="ws-section">
            <p className="ws-num">04</p>
            <h2>谁办的</h2>
            <p>
              由 AI 安全中文社区 OCASC 发起，是 muShenzhen 当天的共创活动之一，场地由 muShenzhen 提供。发起人 Sarah，在牛津大学马丁学院做 AI 安全技术治理方向的研究。
            </p>
            <p>需要一份活动说明用于单位内部报备的，在报名表里注明，我们单独发给你。</p>
          </section>
        </div>

        <aside className="ws-rail">
          <div className="ws-card">
            <dl>
              <div>
                <dt>时间</dt>
                <dd>
                  12 月 3 日下午，三小时
                  <span>起止时间报名后告知</span>
                </dd>
              </div>
              <div>
                <dt>地点</dt>
                <dd>
                  深圳
                  <span>具体场地报名后告知</span>
                </dd>
              </div>
              <div>
                <dt>规模</dt>
                <dd>
                  听众二十人左右
                  <span>分享 3–4 位，圆桌共 6–8 位</span>
                </dd>
              </div>
              <div>
                <dt>语言</dt>
                <dd>
                  中文进行
                  <span>专有名词用英文原词</span>
                </dd>
              </div>
              <div>
                <dt>形式</dt>
                <dd>
                  只做现场，凭报名入场
                  <span>不录像、不对外转述、不设回放</span>
                </dd>
              </div>
              <div>
                <dt>门票</dt>
                <dd>
                  嘉宾由主办方承担
                  <span>听众自购当天通行证</span>
                </dd>
              </div>
            </dl>
            <a className="ws-btn" href={SIGNUP} target="_blank" rel="noopener noreferrer">
              填写报名表
            </a>
            <p className="ws-note">报名截止 11 月 17 日，坐满即止。我们会用微信跟你确认。</p>
          </div>

        </aside>
      </div>

      <section className="ws-forward">
        <div className="ws-forward-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/workshop/poster.jpg"
            alt="AI 安全承诺核验 · 12 月 3 日 深圳 嘉宾招募海报"
            width={900}
            height={1660}
          />
        </div>
        <div className="ws-forward-txt">
          <p className="ws-num">05</p>
          <h2>想转给同事</h2>
          <p>把这张图转给相关的工程师就行，上面有二维码和报名地址；转发时不用另外解释。</p>
          <a className="ws-dl" href="/workshop/poster.jpg" download="ai-verification-1203-poster.jpg">
            下载海报原图 ↗
          </a>
        </div>
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
