import { airports } from "@/data/airports";
import AirportCard from "@/components/AirportCard";

export default function Home() {
  return (
    <>
      <section className="mb-16 mt-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          2026 最新<span className="text-blue-600 dark:text-blue-400">机场推荐</span>与评测对比
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          为您精心整理和对比29款主流及高性价比机场。无论是专线、中转，还是追求极致性价比与大流量，都能在这里找到最适合您的“机场推荐哪个比较好”的答案。提供最新机场价格、机场流量分析及机场优惠券。
        </p>
      </section>

      <section id="ranking" className="mb-20">
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            精选机场推荐榜单 (Top 29)
          </h2>
          <span className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            共 {airports.length} 款
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airports.map((airport) => (
            <AirportCard key={airport.id} airport={airport} />
          ))}
        </div>
      </section>

      <section id="guide" className="mb-20 bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-700">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">机场选择指南：机场推荐哪个比较好？</h2>
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <p className="text-lg">
            在寻找合适的机场服务时，很多人都会产生“机场推荐哪个比较好”的疑问。选择机场并不在于最贵，而在于最适合您的个人使用场景。以下是几个关键维度的机场选择指南与机场对比策略：
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                根据线路选择 (专线 vs 中转)
              </h3>
              <p>
                <strong>专线机场（如IPLC/IEPL）：</strong>这类机场价格相对较高，但优点是不受防火墙干扰，延迟极低，晚高峰不拥堵。适合对延迟要求高的游戏玩家、金融外贸从业者，以及追求极致稳定性的用户。<br/><br/>
                <strong>中转机场（如公网隧道/优化中转）：</strong>这类机场价格较亲民，能提供海量的机场流量，速度表现也不错。适合预算有限、日常追剧、下载大文件的普通用户。
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                关注机场价格与机场流量
              </h3>
              <p>
                在进行机场对比时，基础套餐的<strong>机场价格</strong>和包含的<strong>机场流量</strong>是核心指标。如果您是重度视频创作者或流媒体发烧友，应优先选择大流量（100GB以上）的套餐；如果是轻度查阅资料，10-50GB的低价入门套餐（几元至十几元）即可满足需求。
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                善用机场优惠券
              </h3>
              <p>
                很多机场会在节假日或推广期提供<strong>机场优惠券</strong>和专属折扣码。在购买年付套餐时输入优惠码，往往能省下一大笔费用。本站已为您搜集并整理了上述机场推荐列表中最新的可用优惠码，请在下单时注意查收。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                参考真实机场评测
              </h3>
              <p>
                不要只看商家的宣传，应多参考第三方的<strong>机场评测</strong>。本站列出的29家机场均经过了长期稳定的市场考验。您可以从小流量月付套餐开始试用，亲自测试您所在网络环境（电信/联通/移动）下的实际表现，满意后再考虑季度或年度订阅。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mb-20">
         <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
            机场使用教程与常见问题(FAQ)
         </h2>
         <div className="space-y-6 max-w-4xl">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700">
               <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Q: 什么是机场？为什么要使用机场推荐服务？</h3>
               <p className="text-slate-600 dark:text-slate-300">A: “机场”是提供代理节点服务提供商的俗称，通常使用SS、V2Ray、Trojan、VLESS等协议。由于市场上机场良莠不齐，我们的“机场推荐”服务通过机场对比和机场评测，帮您筛选出稳定、高性价比的优质商家，避免您踩坑和遭受财产损失。</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700">
               <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Q: 如何使用机场？有机场使用教程吗？</h3>
               <p className="text-slate-600 dark:text-slate-300">A: 机场使用非常简单：1. 在推荐列表中挑选一个机场并注册购买；2. 在机场后台找到“一键订阅”或获取订阅链接；3. 下载对应的客户端软件（如Clash, V2rayN, Shadowrocket等）；4. 将订阅链接导入软件并更新，选择节点后开启系统代理即可。</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700">
               <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Q: 机场会跑路吗？如何防范风险？</h3>
               <p className="text-slate-600 dark:text-slate-300">A: 任何网络服务都有一定风险。为防范风险：首先，参考我们经过筛选的机场推荐列表；其次，对于新接触的机场，强烈建议先购买“月付”套餐进行尝试；最后，不要在同一家机场一次性投入过多资金购买长达数年的套餐。</p>
            </div>
         </div>
      </section>
    </>
  );
}
