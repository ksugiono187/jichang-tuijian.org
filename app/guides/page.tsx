import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "机场选择指南：从零开始挑选合适的方案",
  description: "详细的机场选择指南，教您如何根据预算、用途、网络环境等因素挑选最适合的机场。",
};

export default function GuidesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">机场选择指南</h1>
      <p className="text-slate-400 mb-12 text-lg">机场推荐哪个比较好？选择并不在于最贵，而在于最适合您的个人使用场景。</p>
      
      <div className="glass-panel rounded-3xl p-8 md:p-12 prose prose-invert max-w-none text-slate-300">
         <h3>1. 根据用途选择线路类型</h3>
         <p>如果您是<strong>重度游戏玩家</strong>或者<strong>外贸商务人士</strong>，对延迟和稳定性要求极高，请务必选择带有 <strong>IPLC/IEPL 标签的专线机场</strong>。</p>
         <p>如果您只是<strong>日常刷网页、看 YouTube</strong>，对晚高峰轻微降速不敏感，那么 <strong>优质中转机场</strong> 将是性价比最高的选择。</p>

         <h3>2. 根据消耗量选择流量套餐</h3>
         <p>不要盲目追求无限流量。根据统计，普通用户的每月真实消耗往往在 30GB-100GB 之间。重度流媒体用户（每天看好几个小时的高清视频）则需要 200GB - 500GB。购买前请估算自己的需求，避免浪费。</p>

         <h3>3. 关注设备与协议兼容性</h3>
         <p>大部分主流机场都支持 Shadowsocks, Vmess, Trojan 等协议，兼容 Clash (Windows/Mac/Android) 和 Shadowrocket (iOS)。如果您有软路由 (OpenWrt) 需求，请提前确认机场节点在您的路由插件中是否能稳定运行。</p>
         
         <h3>4. 试用策略</h3>
         <p>这是防坑的终极指南：<strong>永远先买月付套餐！</strong> 无论别人怎么推荐，只有在您本地的宽带运营商环境下测试通过，才是真正的好机场。测试满意后，再去 <Link href="/coupons" className="text-brand-400">优惠券页面</Link> 找个折扣码购买年付套餐。</p>
      </div>
    </div>
  );
}
