'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Smartphone, 
  Laptop, 
  Globe2, 
  Zap, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Activity, 
  ChevronDown, 
  ChevronUp, 
  Tag, 
  Flame, 
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Airport, AirportPlan } from '@/data/airports';

export default function BrandShowcaseRich({ airport }: { airport: Airport }) {
  const [activeTab, setActiveTab] = useState<'all' | 'cycle' | 'custom' | 'onetime'>('all');
  const [copiedCode, setCopiedCode] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);

  const plans = airport.plans || [];

  const filteredPlans = plans.filter((plan) => {
    if (activeTab === 'cycle') return plan.category === '周期订阅';
    if (activeTab === 'custom') return plan.category === '商务定制';
    if (activeTab === 'onetime') return plan.category === '一次性流量';
    return true;
  });

  const cycleCount = plans.filter((p) => p.category === '周期订阅').length;
  const customCount = plans.filter((p) => p.category === '商务定制').length;
  const onetimeCount = plans.filter((p) => p.category === '一次性流量').length;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const toggleExpandPlan = (id: string) => {
    setExpandedPlanId(expandedPlanId === id ? null : id);
  };

  return (
    <div className="space-y-12">
      {/* 1. Header Banner / Hero Section */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.06)]">
        {/* Ambient Glow & Watermark */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 -right-10 text-[200px] font-black text-amber-500/[0.03] select-none pointer-events-none z-0">
          01
        </div>

        <div className="relative z-10">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center text-xs font-bold px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.25)]">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              本站主推
            </span>
            <span className="text-xs font-mono font-medium tracking-wider bg-sky-500/10 text-sky-300 px-3 py-1 rounded-full border border-sky-500/20 uppercase">
              {airport.tagline || 'IEPL / CROSS-BORDER CONNECTION'}
            </span>
            <span className="text-xs font-medium bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">
              全节点 1x 计费
            </span>
            <span className="text-xs font-medium bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">
              多端自研 + iOS Nextin 合作
            </span>
          </div>

          {/* Logo & Brand Title */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl bg-white/90 p-1.5 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/20 shrink-0">
              <img 
                src="/invisible-logo.png" 
                alt="隐形人 Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-baseline gap-3 flex-wrap">
                {airport.name}
                <span className="text-xl md:text-2xl text-slate-400 font-semibold uppercase tracking-wider">
                  {airport.englishName}
                </span>
              </h1>
              <p className="text-sm text-slate-400 mt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                全线 IEPL 企业级专线网络已接入监控，晚高峰速率无阻断
              </p>
            </div>
          </div>

          {/* Brand Introduction */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl">
            {airport.shortDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <Link
              href={airport.affiliateUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 text-base"
            >
              进入隐形人官网 ↗
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>

            <a
              href="#plans-section"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2 text-base"
            >
              查看 9 款套餐方案 ↓
            </a>
          </div>

          {/* Commercial Promotion Note */}
          <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs sm:text-sm text-amber-200/80 flex items-center">
            <Tag className="w-4 h-4 mr-2.5 text-amber-400 shrink-0" />
            <span>推广说明：本页依据品牌方提供资料整理，为商业推广介绍。</span>
          </div>
        </div>
      </div>

      {/* 2. Key Metrics Grid (3 Stat Cards from Image 1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-amber-500/30 transition-all">
          <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-2 tracking-tight">
            60+
          </div>
          <div className="text-lg font-bold text-white mb-1">独立 IP 节点</div>
          <div className="text-xs text-slate-400">品牌方提供规格 · 覆盖香港/日本/新加坡等多地</div>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-sky-500/30 transition-all">
          <div className="text-3xl sm:text-4xl font-black text-sky-400 mb-2 tracking-tight">
            2Gbps+
          </div>
          <div className="text-lg font-bold text-white mb-1">总带宽资源</div>
          <div className="text-xs text-slate-400">非单用户保证速率 · BGP 多线冗余动态调度</div>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
          <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-2 tracking-tight">
            500Mbps级
          </div>
          <div className="text-lg font-bold text-white mb-1">高峰冗余配置</div>
          <div className="text-xs text-slate-400">品牌方提供规格 · 无视晚高峰拥堵阻断</div>
        </div>
      </div>

      {/* 3. Section: BUILT FOR EVERYDAY CONNECTION */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/5 shadow-2xl">
        <div className="mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-400 uppercase">
            BUILT FOR EVERYDAY CONNECTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            专线基础，面向实际使用场景。
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            把线路、入口与资源调度放在同一个服务方案中。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/30 border border-white/5 p-6 rounded-2xl relative group hover:border-brand-500/30 transition-all">
            <div className="text-xs font-mono font-bold text-brand-400 mb-3">
              01 / DEDICATED NETWORK
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <Server className="w-5 h-5 mr-2 text-brand-400" />
              物理级 IEPL 内网专线
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              数据出境直接经由内网物理专线传输，完全跳过拥堵且审查严苛的公网骨干网。跨国极低延迟，从物理层免疫防火墙阻断。
            </p>
          </div>

          <div className="bg-black/30 border border-white/5 p-6 rounded-2xl relative group hover:border-brand-500/30 transition-all">
            <div className="text-xs font-mono font-bold text-sky-400 mb-3">
              02 / TRAFFIC DISTRIBUTION
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-sky-400" />
              全节点 1x 真实计费
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              全节点统一标注 1x 计费，绝无高倍率暗扣套路。BGP 三网动态入口优化与智能专线调度，不限设备数，不限速稳定输出。
            </p>
          </div>

          <div className="bg-black/30 border border-white/5 p-6 rounded-2xl relative group hover:border-emerald-500/30 transition-all">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-3">
              03 / ACCESS OPTIMIZATION
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center">
              <Globe2 className="w-5 h-5 mr-2 text-emerald-400" />
              原生 IP 流媒体与 AI 解锁
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              覆盖香港、日本、新加坡及欧美原生落地 IP。深度支持 ChatGPT、Claude、Midjourney 及 Netflix、Disney+ 4K 秒开。
            </p>
          </div>
        </div>
      </section>

      {/* 4. Section: CLIENTS & PLATFORMS (Multi-Platform & Nextin iOS Guide) */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/5 shadow-2xl">
        <div className="mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
            CLIENTS & PLATFORMS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            多端自研，iOS 合作接入。
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            从官网获取后台入口，再按设备查看客户端指引。
          </p>
        </div>

        {/* 2 Platform Overviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/30 border border-white/10 p-6 rounded-2xl">
            <span className="inline-block text-xs font-medium px-2.5 py-1 bg-white/5 text-slate-300 rounded border border-white/10 mb-3">
              品牌自研客户端
            </span>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <Laptop className="w-5 h-5 mr-2 text-brand-400" />
              Windows / macOS / Android · 隐形人
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Windows、macOS和Android使用自研客户端“隐形人”。使用官网账号登录后，选择节点，再点击连接。
            </p>
          </div>

          <div className="bg-black/30 border border-white/10 p-6 rounded-2xl">
            <span className="inline-block text-xs font-medium px-2.5 py-1 bg-sky-500/10 text-sky-300 rounded border border-sky-500/20 mb-3">
              合作客户端
            </span>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-sky-400" />
              iOS · Nextin
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              iOS使用合作客户端Nextin。登录前先填写识别码 <span className="font-mono text-amber-300 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">yxr</span> ，再登录自己的账号；随后选择节点，点击连接。
            </p>
          </div>
        </div>

        {/* Highlighted iOS Step-by-Step Guide with Copy Button */}
        <div className="bg-gradient-to-r from-sky-950/40 via-black/40 to-amber-950/20 border border-sky-500/30 p-6 sm:p-8 rounded-2xl mb-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">
                NEXTIN · iOS
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                iOS: 从识别码到完成连接
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                iPhone / iPad 用户请严格按照官方顺序填写识别码与账号
              </p>
            </div>

            {/* Prominent Pairing Code Box */}
            <div className="flex items-center gap-4 bg-black/60 border border-amber-500/30 p-4 rounded-xl">
              <div>
                <div className="text-[11px] font-semibold text-slate-400 mb-0.5">登录前填写识别码</div>
                <div className="text-3xl font-black font-mono text-amber-400 tracking-wider">yxr</div>
              </div>
              <button
                onClick={() => handleCopyCode('yxr')}
                className="px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold rounded-lg border border-amber-500/40 transition-all flex items-center text-xs shrink-0"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-4 h-4 mr-1 text-emerald-400" />
                    已复制
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    一键复制
                  </>
                )}
              </button>
            </div>
          </div>

          <ol className="space-y-3.5 text-sm sm:text-base text-slate-300 mb-6">
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0 border border-sky-500/30">
                1
              </span>
              <span><strong>打开客户端：</strong>在 iOS 设备上打开 Nextin。</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0 border border-amber-500/30">
                2
              </span>
              <span>
                <strong>先填写识别码：</strong>登录前在识别码栏输入小写{' '}
                <code className="font-mono text-amber-300 font-bold bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                  yxr
                </code>
                。
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0 border border-sky-500/30">
                3
              </span>
              <span><strong>再登录账号：</strong>输入自己在隐形人官网注册的账号密码。</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0 border border-sky-500/30">
                4
              </span>
              <span><strong>选择节点：</strong>登录后选择需要使用的香港、日本或新加坡等节点。</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0 border border-emerald-500/30">
                5
              </span>
              <span><strong>点击连接：</strong>选好节点后点击连接，享受专线网络。</span>
            </li>
          </ol>

          <p className="text-xs text-slate-500 italic border-t border-white/5 pt-3">
            识别码、登录和连接顺序均由品牌方确认。具体页面和操作以当前客户端版本显示为准。
          </p>
        </div>

        {/* Windows / Mac / Android Step Guide */}
        <div className="bg-black/20 border border-white/5 p-6 rounded-2xl">
          <h4 className="text-base font-bold text-white mb-3 flex items-center">
            <Laptop className="w-4 h-4 mr-2 text-brand-400" />
            Windows / macOS / Android：获取、登录与连接
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-brand-400 font-bold block mb-1">01. 进入官网</span>
              通过官方直达链接进入隐形人后台。
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-brand-400 font-bold block mb-1">02. 下载客户端</span>
              在后台获取适用于您设备的自研客户端。
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-brand-400 font-bold block mb-1">03. 账号登录</span>
              使用官网账号一键登录，节点自动同步。
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-brand-400 font-bold block mb-1">04. 一键连接</span>
              勾选目标节点，点击开启系统代理。
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: PLANS & TRAFFIC (9 Detailed Plans from Images 3, 4, 5) */}
      <section id="plans-section" className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/5 shadow-2xl scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              PLANS & TRAFFIC
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              按使用节奏，选择你的连接方案。
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              9 款套餐：周期订阅、商务定制与一次性流量包。
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              全部套餐 {plans.length}
            </button>
            <button
              onClick={() => setActiveTab('cycle')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'cycle'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              周期订阅 {cycleCount}
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'custom'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              商务定制 {customCount}
            </button>
            <button
              onClick={() => setActiveTab('onetime')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'onetime'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              一次性流量 {onetimeCount}
            </button>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredPlans.map((plan) => {
            const isExpanded = expandedPlanId === plan.id;
            const isFeaturedPlan = plan.badge === '主推年付';
            const isOneTime = plan.category === '一次性流量';
            const isCustom = plan.category === '商务定制';

            return (
              <div
                key={plan.id}
                className={`bg-black/30 rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 ${
                  isFeaturedPlan
                    ? 'border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Card Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-semibold px-2 py-0.5 bg-white/5 text-slate-400 rounded border border-white/5">
                      {plan.category}
                    </span>
                    {plan.badge && (
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                        isFeaturedPlan
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : isOneTime
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                          : isCustom
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                          : 'bg-white/10 text-slate-300 border-white/10'
                      }`}>
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Plan Name & Intro */}
                  <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed min-h-[32px]">
                    {plan.intro}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-slate-400">¥</span>
                      <span className="text-4xl font-black text-white tracking-tight">{plan.price}</span>
                      <span className="text-sm font-medium text-slate-400">/ {plan.period}</span>
                    </div>
                    {plan.priceDetail && (
                      <p className="text-[11px] text-amber-300/80 mt-1">
                        {plan.priceDetail}
                      </p>
                    )}
                  </div>

                  {/* Traffic Box */}
                  <div className="bg-white/5 border border-white/5 p-3.5 rounded-xl mb-5">
                    <div className="text-2xl font-black text-amber-400">
                      {plan.traffic}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {plan.trafficSubtext}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {plan.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Billing Cycles */}
                  {plan.billingCycles && plan.billingCycles.length > 0 && (
                    <div className="flex items-center gap-1.5 mb-5 text-[11px] text-slate-400">
                      <span className="text-slate-500">可选周期:</span>
                      {plan.billingCycles.map((c, i) => (
                        <span key={i} className="bg-white/5 px-1.5 py-0.5 rounded text-slate-300">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description / Accordion */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  <button
                    onClick={() => toggleExpandPlan(plan.id)}
                    className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1 mb-6 transition-colors"
                  >
                    <span>{isExpanded ? '收起套餐说明' : '查看套餐说明'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>

                  {isExpanded && (
                    <div className="p-3 bg-white/5 rounded-xl text-xs text-slate-300 space-y-2 mb-6 border border-white/5 animate-fade-in-up">
                      <div className="text-slate-400 font-medium">配置细则：</div>
                      <div>• 节点协议：IEPL 企业级专线</div>
                      <div>• 设备数量：根据品牌方最新核对资料不限设备</div>
                      <div>• 速率规格：全节点 1x 计费，无突发限速</div>
                    </div>
                  )}
                </div>

                {/* Card Button */}
                <Link
                  href={airport.affiliateUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center text-sm transition-all flex items-center justify-center gap-1.5 ${
                    isFeaturedPlan
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  前往选购套餐 ↗
                </Link>
              </div>
            );
          })}
        </div>

        {/* 6. Traffic Comparison Box (先分清这两种流量口径 from Image 5) */}
        <div className="bg-black/40 border border-white/10 p-6 sm:p-8 rounded-2xl mb-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-amber-400" />
            先分清这两种流量口径
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="border-l-2 border-amber-500/60 pl-4 py-1">
              <h4 className="font-bold text-white mb-1.5">周期订阅 / 商务月付</h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                额度按套餐周期提供。星耀风暴为年付 109 元、购买日起每 30 天刷新 80GB；其他周期套餐按月给出流量，具体重置日期以后台为准。
              </p>
            </div>
            <div className="border-l-2 border-purple-500/60 pl-4 py-1">
              <h4 className="font-bold text-white mb-1.5">一次性流量包</h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                229元160GB、549元420GB、1199元1000GB，都是一次购买的总额度，不是月流量。资料标注无固定到期时间，使用时按额度扣减。
              </p>
            </div>
          </div>
        </div>

        {/* 7. Full 9-Plan Comparison Table Toggle */}
        <div className="text-center">
          <button
            onClick={() => setShowTable(!showTable)}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl border border-white/10 transition-all text-sm font-semibold inline-flex items-center gap-2"
          >
            <span>{showTable ? '收起 9 款套餐对比表' : '展开 9 款套餐对比表'}</span>
            {showTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {showTable && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 animate-fade-in-up">
            <table className="w-full text-left text-sm text-slate-300 whitespace-nowrap">
              <thead className="bg-white/5 text-slate-400 text-xs uppercase">
                <tr>
                  <th className="p-4">套餐名称</th>
                  <th className="p-4">分类</th>
                  <th className="p-4">价格</th>
                  <th className="p-4">流量配额</th>
                  <th className="p-4">线路规格</th>
                  <th className="p-4">设备限制</th>
                  <th className="p-4">推荐适用人群</th>
                  <th className="p-4 text-center">选购</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {plans.map((p) => (
                  <tr key={p.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      {p.name}
                      {p.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {p.badge}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-slate-400">{p.category}</td>
                    <td className="p-4 font-mono font-bold text-amber-400">¥{p.price}/{p.period}</td>
                    <td className="p-4 font-bold text-white">{p.traffic}</td>
                    <td className="p-4 text-slate-300">IEPL 专线 / 1x 计费</td>
                    <td className="p-4 text-emerald-400 font-medium">不限设备</td>
                    <td className="p-4 text-slate-400 max-w-xs truncate" title={p.intro}>{p.intro}</td>
                    <td className="p-4 text-center">
                      <Link
                        href={airport.affiliateUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs"
                      >
                        前往
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 8. Official Notice & Disclaimer from Image 5 */}
        <p className="text-xs text-slate-500 text-center mt-8 leading-relaxed max-w-3xl mx-auto">
          价格、额度与可选周期来自品牌方提供的套餐资料，整理日期为 2026-10-28；设备数及 IEPL 线路表述已按品牌方补充确认统一。实际在售价格、续费、共享和退款等规则以下单页面为准。
        </p>
      </section>

      {/* 9. Section: FAQ (Image & Real User Concerns) */}
      {airport.faq && airport.faq.length > 0 && (
        <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 flex items-center">
              <HelpCircle className="w-7 h-7 mr-3 text-emerald-400" />
              购买与使用常见疑问 (FAQ)
            </h2>
          </div>

          <div className="space-y-5">
            {airport.faq.map((q, i) => (
              <div
                key={i}
                className="bg-black/30 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-start">
                  <span className="text-amber-400 mr-2.5 font-mono">Q:</span>
                  <span>{q.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed flex items-start pl-5 border-l-2 border-white/10">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. Final Call-to-Action */}
      <div className="text-center py-14 px-6 bg-gradient-to-b from-transparent via-amber-950/20 to-amber-950/40 rounded-3xl border border-amber-500/20 mt-12 shadow-[0_0_50px_rgba(245,158,11,0.08)]">
        <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold mb-4 border border-amber-500/30">
          ⭐ 本站年度旗舰推荐
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          准备好体验 {airport.name} 的高速 IEPL 专线了吗？
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          全节点 1x 计费，多端自研客户端与 iOS Nextin 无缝协同，享受无视晚高峰阻断的极致网络。
        </p>
        <Link
          href={airport.affiliateUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex px-10 py-4.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-2xl transition-all shadow-[0_0_35px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:-translate-y-1 items-center justify-center text-lg w-full sm:w-auto"
        >
          立刻进入 {airport.name} 官网注册 <ExternalLink className="w-5 h-5 ml-2.5" />
        </Link>
      </div>
    </div>
  );
}
