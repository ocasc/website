const SIGNUP = "https://wj.qq.com/s2/28235369/w9ei/";

export default function WorkshopPage() {
  return (
    <main className="ws">
      <header className="ws-hero">
        <p className="ws-eyebrow">OCASC 小范围技术讨论 · 深圳</p>
        <h1>AI 安全承诺核验</h1>
        <p className="ws-en">Verifying AI Safety Commitments</p>
        <p className="ws-lead">
          我们想请一批对 AI 安全和验证技术感兴趣的人，用三个小时讨论一件事：怎么设计一套真能用起来的验证流程。
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
            <h2>为什么 AI 安全需要验证（verification）技术</h2>
            <p>AI 安全上的判断，大多建立在别人给出的结论上：模型能力有多强、加了哪些防护、训练和推理跑在什么环境里。系统闭源，机器在别人的机房，评测往往只给汇总数字，外面的人没法自己量一遍。验证（verification）技术要做的，就是让外面的人能自己查一遍。</p>
            <p>最公开的一类结论，是各家自己发布的安全文件。过去三年，Anthropic、OpenAI、Google DeepMind 各发了一份，写清能力到什么水平、必须先做到哪些防护。</p>
            <ul>
              <li>
                Anthropic 的
                <a href="https://www.secrss.com/articles/87619" target="_blank" rel="noopener noreferrer">负责任扩展政策（RSP）</a>
                按能力分档，每一档写明要做的防护
              </li>
              <li>
                OpenAI 的
                <a href="https://www.ithome.com/0/845/524.htm" target="_blank" rel="noopener noreferrer">准备框架（Preparedness Framework）</a>
                先定评估方法和上线门槛，再按能力分档写报告
              </li>
              <li>
                Google DeepMind 的
                <a href="https://www.thepaper.cn/newsDetail_forward_31665820" target="_blank" rel="noopener noreferrer">前沿安全框架（Frontier Safety Framework）</a>
                把能力阈值对应到具体的安全措施
              </li>
            </ul>
            <p>
              这些判断由公司自己做，执行也由自己监督，外部能看到的只有公开发出来的文件。所以「承诺有没有兑现」，读文件回答不了，要看能不能拿到可核对的东西，比如评测记录、训练和推理在什么环境里、配置什么时候改过。
            </p>
            <p>
              2024 年 5 月首尔峰会上，首批
              <a href="https://www.chinanews.com.cn/cj/2024/05-23/10222198.shtml" target="_blank" rel="noopener noreferrer">16 家公司签署「前沿 AI 安全承诺」</a>
              ，智谱 AI 也在内；承诺要求各家公司按自己的安全框架说明如何评估模型风险，交的仍然是自己的说明。
            </p>
            <p>
              承诺本身还会改。2026 年 2 月，Anthropic 发布 RSP 第三版，
              <a href="https://www.ithome.com/0/923/451.htm" target="_blank" rel="noopener noreferrer">删去了「防护不足就不训练、不发布模型」这条核心承诺</a>；据《时代》对该公司首席科学官的采访，理由是对手推进太快、单方面约束不合理。怎么改是它自己的判断，但改之前那一版有没有兑现，时间一长就更难查，验证要在当时做，而且要留下材料。
            </p>
            <p>
              国内走的是另一条路，算法备案、安全评估、内容标识。全国网络安全标准化技术委员会（全国网安标委）2026 年 9 月 14 日发布的
              <a href="https://www.cac.gov.cn/2026-09/14/c_1791137092283345.htm" target="_blank" rel="noopener noreferrer">《人工智能安全治理框架》3.0</a>
              ，比上一版更细地写了风险分类分级和对应技术措施。两条路最后卡在同一个问题上：写下来的要求，事后能不能核对。
            </p>
            <p>
              OCASC 这两年在中文社区办过评测复现和算力核查的讨论，每次卡在同一处，材料在谁手里，一年后还拿不拿得出来。这次从一间机房开始，一样一样核。
            </p>
            <ul>
              <li>机器是不是验收时那一批，型号、序列号、加速卡数量、卡间互联的拓扑，和验收记录逐项对</li>
              <li>环境有没有被动过，固件、驱动、启动配置的版本，以及 TEE 出的远程证明（remote attestation）报告</li>
              <li>跑的东西有没有换，镜像和权重的哈希、集群调度配置、日志是否连续完整</li>
              <li>性能还是不是当初那个水平，同一套基准重跑，偏差落在什么范围</li>
            </ul>
          </section>

          <section className="ws-section">
            <p className="ws-num">02</p>
            <h2>验证要满足什么</h2>
            <p>
              验证有两方，证明方和外部验证方。证明方有商业机密，所以验证要在自己的环境里完成，外部读不到原始数据，只拿到结论。但结论必须能被外部独立复核，靠的是硬件背书（TEE 出的远程证明报告），不是证明方自己的声明。
            </p>
            <ul>
              <li>证明方只负责生成证据，判定在外部做。外部凭什么信这个判定，要落到可信执行环境和厂商证书链上</li>
              <li>取证要轻到不影响日常运转。哪些检查是固定开销、哪些要占机时，得分开算</li>
              <li>抽查数据中心一小部分，就要能对整个数据中心给出保证。前提是配置和镜像一致，而且留了一份可核对的清单。异构集群和动态调度下，抽样能覆盖到哪里要说清楚</li>
              <li>别人按同样步骤要能重算出同样结论。一年后材料还在，还得取得回来</li>
            </ul>
            <p>
              软件这条路也在往前走。Anthropic 11 月开源了一个可验证推理（provable inference）的原型{" "}
              <a href="https://www.anthropic.com/research/provable-inference" target="_blank" rel="noopener noreferrer">FlashProve</a>
              。模型方附一份零知识证明，外部只拿结论就能确认这条回复出自所声称的模型，证明不泄露权重。代价是生成证明要用 70–95 倍的推理算力，验证那一端很便宜。
            </p>
          </section>

          <section className="ws-section">
            <p className="ws-num">03</p>
            <h2>那天下午怎么过</h2>
            <p>
              第一个小时，请三到四位做过验收测试、集群运维、远程证明（remote attestation）的工程师各讲十分钟上下，说自己怎么做、哪一步会卡住。后面两个小时按上面四条逐条讨论，这套流程在技术上怎么设计，哪一条现在做不到，是技术上做不了，还是没人负责做。
            </p>
            <p>
              结束时带走两张清单，一张记下现有材料里哪些能支撑事后核对，一张记下哪些检查现在补不上。会后公开这两张清单的不指名版本，只写方法和缺口。
            </p>
          </section>

          <section className="ws-section">
            <p className="ws-num">04</p>
            <h2>适合谁来</h2>
            <p>
              更适合做过验收测试、集群调度、远程证明（remote attestation）、日志完整性的工程师，也欢迎买方负责算力项目审核的同行，这些材料最后要由你们拿去核对。
            </p>
            <p>名额有限，请确认那天下午真的能腾出三个小时。带着一个你实际遇到的卡点来，讨论会更有收获。</p>
          </section>

          <section className="ws-section">
            <p className="ws-num">05</p>
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
          <p className="ws-num">06</p>
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
