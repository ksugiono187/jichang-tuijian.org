import { Metadata } from "next";
import { AlertTriangle, AlertOctagon, Scale, BadgeDollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "免责声明 | 2026机场推荐指南",
  description: "机场推荐指南免责声明。本站信息仅供学习、研究与交流参考，所有第三方机场服务的稳定性及合法性风险由用户自行承担。",
  alternates: {
    canonical: "/disclaimer/",
  }
};

export default function Disclaimer() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24 animate-fade-in-up">
      <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        
        {/* 背景光效 */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <header className="mb-12 border-b border-white/10 pb-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-6 border border-yellow-500/30 mx-auto">
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">免责声明</h1>
          <p className="text-slate-400">最后更新日期：2026年10月01日</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-brand-400 prose-strong:text-brand-300 leading-loose relative z-10">
          <p>
            欢迎访问<strong>机场推荐指南</strong>。在您浏览本站内容、点击外部链接或参考我们的评测数据之前，请您务必仔细阅读以下免责申明。您继续使用本站，即表示您完全理解并同意本声明的所有条款。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
            <Scale className="w-5 h-5 mr-2 text-yellow-500" />
            1. 法律合规与使用限制
          </h2>
          <p>
            本站仅为技术交流、网络测试数据分享及评测资讯的聚合平台。我们不直接提供、不运营、也不倒卖任何形式的代理服务（即俗称的“机场”、VPN 或翻墙节点）。
          </p>
          <p>
            <strong>强烈警告：</strong> 互联网不是法外之地。请用户在访问和使用任何网络服务时，严格遵守您所在国家和地区的法律法规。切勿使用第三方代理服务从事任何危害国家安全、传播违法信息或侵犯他人合法权益的活动。对于因滥用网络服务而导致的任何法律责任，本站概不负责。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. 第三方服务的风险与不确定性</h2>
          <p>
            我们在《机场对比》、《机场选择指南》及各个品牌详情页中提供的数据（包括但不限于价格、流量、延迟、测速图及线路描述），均基于编辑撰稿时的<strong>主观真实测试环境</strong>。
          </p>
          <p>
            但是，网络代理服务受限于国际骨干网波动、政策防火墙调整以及服务商自身的运营状况，具有<strong>极高的不可控性与时效性</strong>。本站无法担保：
          </p>
          <ul>
            <li>任何一个被推荐的机场能保持永久的稳定性。</li>
            <li>文章中列出的套餐价格与实际官网的实时价格永远百分百同步。</li>
            <li>第三方商家不会发生倒闭、停止运营（跑路）或数据丢失的情况。</li>
          </ul>
          <p>
            <strong>我们强烈建议您：</strong>在购买任何第三方服务前，仔细阅读其官网协议，并坚持<strong>先购买月付套餐进行体验</strong>，切勿盲目充值大额年费，以防承担不必要的经济损失。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
            <BadgeDollarSign className="w-5 h-5 mr-2 text-yellow-500" />
            3. 利益冲突与推介披露 (Affiliate Disclosure)
          </h2>
          <p>
            为了维持本网站的高昂服务器开销以及评测所需的账号采购成本，本站内的部分外部链接（包括但不限于“前往官网”、“购买链接”）可能包含<strong>联盟推介代码（Affiliate Links）</strong>。
          </p>
          <p>
            这意味着，当您通过这些链接跳转并成功购买服务时，服务商可能会向本站支付一小笔佣金。请放心，<strong>这绝对不会增加您的购买成本</strong>，甚至在部分情况下，通过本站专属的优惠券还能让您获得更低的价格。尽管存在这种商业合作关系，我们始终坚持客观、公正的评测底线，绝不为劣质服务背书。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
            <AlertOctagon className="w-5 h-5 mr-2 text-yellow-500" />
            4. 最终解释权
          </h2>
          <p>
            本站提供的内容仅供参考，不构成任何强制性的消费建议。访客基于本站资讯所作出的任何商业决策、购买行为及可能产生的后续风险，均由访客个人独立承担。本站保留随时修改、更新或删除本站内容的权利，且不承担任何通知义务。
          </p>
          
          <hr className="my-10 border-white/10" />

          <p className="text-slate-400 italic text-base">
            如您发现本站有任何侵权内容、数据严重滞后或服务商跑路的情况，欢迎通过页脚的官方邮箱与 Telegram 账号与我们取得联系。
          </p>
        </div>
      </div>
    </div>
  );
}
