export interface AirportPlan {
  id: string;
  name: string;
  category: '周期订阅' | '商务定制' | '一次性流量';
  badge?: string;
  intro: string;
  price: string;
  period: string;
  priceDetail?: string;
  traffic: string;
  trafficSubtext: string;
  tags: string[];
  billingCycles?: string[];
  description: string;
}

export interface AirportMetricCard {
  value: string;
  label: string;
  source: string;
}

export interface Airport {
  id: string;
  rank: number;
  name: string;
  englishName: string;
  slug: string;
  affiliateUrl: string;
  coupon: string;
  category: string;
  price: string;
  traffic: string;
  protocol: string;
  route: string;
  tag: string;
  shortDescription: string;
  recommendationReason: string;
  coreReason: string;
  suitableFor: string;
  features: string[];
  faq: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  tagline?: string;
  disclosure?: string;
  metrics?: AirportMetricCard[];
  plans?: AirportPlan[];
  plansNotice?: {
    cycleDesc: string;
    oneTimeDesc: string;
    disclaimer: string;
  };
}

export const airports: Airport[] = [
  {
    "id": "01",
    "rank": 1,
    "name": "微风网络",
    "englishName": "Breezenet",
    "slug": "breezenet",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=4KDOroY0",
    "coupon": "weifeng90",
    "category": "专线机场",
    "price": "¥10.28/月起（年付券后¥123.3）",
    "traffic": "100GB~1200GB/月",
    "protocol": "VLESS",
    "route": "全 IPLC 物理专线",
    "tag": "入门友好",
    "shortDescription": "专注于提供高质量专线体验的入门级机场，适合日常流媒体和AI相关使用场景。",
    "recommendationReason": "2026综合天梯榜第3名。以清风年付与乘风月付为核心，标配全IPLC物理专线通道与全平台自研多端协同，性价比极高。",
    "coreReason": "全线 IPLC 物理专线架构，晚高峰 1.8% 优异丢包率，全流媒体与 8K 极速秒开。",
    "suitableFor": "初级用户、流媒体爱好者、ChatGPT/AI工具使用者",
    "features": [
      "专线网络架构",
      "VLESS协议支持",
      "高性价比入门套餐"
    ],
    "faq": [
      {
        "question": "微风网络适合新手吗？",
        "answer": "非常适合。它专注于日常使用场景，配置简单易懂，且是性价比高的入门级选择。"
      }
    ],
    "seoTitle": "微风网络 Breezenet - 2026好用的入门级专线机场推荐",
    "seoDescription": "微风网络(Breezenet)是一款专为初学者打造的专线机场，提供IEPL/IPLC高质量线路与VLESS协议，是高性价比流媒体解锁与AI工具使用的首选推荐。",
    "plans": [
      {
        "id": "plan-1",
        "name": "清风 · 年付精算 (本站力荐)",
        "category": "周期订阅",
        "badge": "⭐ 核心主力推荐",
        "intro": "适合轻中度用户长期主力使用，性价比天花板",
        "price": "137",
        "period": "年",
        "priceDetail": "官网原价 ¥137/年",
        "traffic": "100 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "全 IPLC 物理专线通道",
          "不限制设备同时在线数量",
          "4K 超清流媒体与 ChatGPT 秒开"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "适合轻中度用户长期主力使用，性价比天花板"
      },
      {
        "id": "plan-2",
        "name": "乘风 · 畅享月付",
        "category": "周期订阅",
        "badge": "月付热门",
        "intro": "适合按月付费、每月用量适中的日常主力首选",
        "price": "25",
        "period": "月",
        "priceDetail": "官网原价 ¥25/月",
        "traffic": "200 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IPLC 物理专线，高峰不限速",
          "原生纯净 IP 节点选择",
          "全平台客户端一键登录"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "适合按月付费、每月用量适中的日常主力首选"
      },
      {
        "id": "plan-3",
        "name": "破风 · 高频进阶",
        "category": "周期订阅",
        "badge": "大流量",
        "intro": "适合高频影音、追剧看动漫与下载需求",
        "price": "55",
        "period": "月",
        "priceDetail": "官网原价 ¥55/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "支持多设备协同并发使用",
          "低延迟线路网络调度",
          "原生 IP 流媒体解锁"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "适合高频影音、追剧看动漫与下载需求"
      },
      {
        "id": "plan-4",
        "name": "御风 · 极速大流量",
        "category": "周期订阅",
        "badge": "海量吞吐",
        "intro": "面向团队多设备、跨国大文件传输与重度流量消耗",
        "price": "125",
        "period": "月",
        "priceDetail": "官网原价 ¥125/月",
        "traffic": "1200 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "超大 1.2TB 每月流量额度",
          "企业级 IPLC 专线大带宽",
          "多端同时高负载不降速",
          "海外技术客服支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "面向团队多设备、跨国大文件传输与重度流量消耗"
      },
      {
        "id": "plan-5",
        "name": "信风 · 一次性不限时包",
        "category": "一次性流量",
        "badge": "⏳ 不限时",
        "intro": "流量永不过期，适合备用与低频长周期访问",
        "price": "200",
        "period": "次",
        "priceDetail": "官网原价 ¥200/次",
        "traffic": "270 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "全 IPLC 专线节点高速访问",
          "不限使用时间，用完为止",
          "不限同时在线设备数量",
          "全节点 1x 倍率真实计费"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "流量永不过期，适合备用与低频长周期访问"
      },
      {
        "id": "plan-6",
        "name": "长风 · 一次性海量包",
        "category": "一次性流量",
        "badge": "⏳ 不限时",
        "intro": "适合准备超大一次性备用额度的用户",
        "price": "370",
        "period": "次",
        "priceDetail": "官网原价 ¥370/次",
        "traffic": "570 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "全专线节点权限开放",
          "多设备跨平台无缝连接",
          "晚高峰稳定低抖动保障"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "适合准备超大一次性备用额度的用户"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "02",
    "rank": 2,
    "name": "飞猫云",
    "englishName": "Flycat",
    "slug": "flycat",
    "affiliateUrl": "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW",
    "coupon": "flycat888",
    "category": "性价比机场",
    "price": "¥7.00/月起（学生年付¥84）",
    "traffic": "50GB~1200GB/月",
    "protocol": "Shadowsocks / V2Ray",
    "route": "全 IPLC 物理专线",
    "tag": "高性价比方案",
    "shortDescription": "以极具竞争力的价格提供大流量的机场服务，性价比卓越的优选方案。",
    "recommendationReason": "2026综合天梯榜第4名。以超低门槛学生版年付为特色，提供原生IP双ISP专线出口，晚高峰稳定低延迟抗封锁。",
    "coreReason": "原生 IP 双 ISP 机房纯净出口，IPLC 物理专线结合 7 款阶梯弹性套餐。",
    "suitableFor": "预算有限但对流量有较高需求的用户，全平台设备使用者",
    "features": [
      "极高性价比",
      "大基础流量",
      "全平台客户端支持"
    ],
    "faq": [
      {
        "question": "飞猫云支持哪些设备？",
        "answer": "支持Windows、macOS、iOS、Android以及OpenWrt路由器，能够满足全平台用户的需求。"
      }
    ],
    "seoTitle": "飞猫云 Flycat - 高性价比大流量机场推荐",
    "seoDescription": "飞猫云提供年付折算约7元/月的超高性价比套餐，每月畅享150GB流量。支持SS/V2Ray协议，是预算有限用户的理想选择。",
    "plans": [
      {
        "id": "plan-1",
        "name": "飞猫·学生版 (超低门槛)",
        "category": "周期订阅",
        "badge": "⭐ 超值学生档",
        "intro": "适合每月用量较少、希望按年控制预算的预算敏感情侣与学生",
        "price": "84",
        "period": "年",
        "priceDetail": "官网原价 ¥84/年",
        "traffic": "50 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "IPLC 高速物理专线",
          "不限同时在线设备数量",
          "原生纯净 IP 解锁 AI 与主流流媒体"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "适合每月用量较少、希望按年控制预算的预算敏感情侣与学生"
      },
      {
        "id": "plan-2",
        "name": "飞猫·星耀版",
        "category": "周期订阅",
        "badge": "月付热门",
        "intro": "适合网页浏览、在线办公与适量视频交替使用的日常场景",
        "price": "25",
        "period": "月",
        "priceDetail": "官网原价 ¥25/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IPLC 专线与原生纯净 IP 线路",
          "多终端并发使用不降速",
          "ChatGPT / 流媒体秒开"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "适合网页浏览、在线办公与适量视频交替使用的日常场景"
      },
      {
        "id": "plan-3",
        "name": "飞猫·星环版",
        "category": "周期订阅",
        "badge": "影音主推",
        "intro": "给日常访问和流媒体观看留出更多流量空间，多设备追剧主力",
        "price": "45",
        "period": "月",
        "priceDetail": "官网原价 ¥45/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "香港/台湾/日本等 15+ 地区任选",
          "支持 4K 超清流畅播放",
          "自研客户端账号一键登录"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "给日常访问和流媒体观看留出更多流量空间，多设备追剧主力"
      },
      {
        "id": "plan-4",
        "name": "飞猫·银河版",
        "category": "周期订阅",
        "badge": "大流量",
        "intro": "适合多设备、高频视频及跨境大文件传输等流量需求",
        "price": "85",
        "period": "月",
        "priceDetail": "官网原价 ¥85/月",
        "traffic": "600 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "双 ISP 机房纯净原生出口",
          "晚高峰稳定低延迟抗封锁",
          "支持工单技术支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "适合多设备、高频视频及跨境大文件传输等流量需求"
      },
      {
        "id": "plan-5",
        "name": "飞猫·穹宇版",
        "category": "周期订阅",
        "badge": "极客尊享",
        "intro": "面向团队多设备、重度下载与多任务并行专业场景",
        "price": "160",
        "period": "月",
        "priceDetail": "官网原价 ¥160/月",
        "traffic": "1200 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "海量 1.2TB 专线带宽",
          "多端并发无限制连接",
          "低抖动网络拓扑路由优化",
          "全节点 1x 倍率真实计费"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "面向团队多设备、重度下载与多任务并行专业场景"
      },
      {
        "id": "plan-6",
        "name": "飞猫·不限时轻量包",
        "category": "一次性流量",
        "badge": "⏳ 不限时",
        "intro": "流量永不过期，适合作为日常保底与出差备用",
        "price": "188",
        "period": "次",
        "priceDetail": "官网原价 ¥188/次",
        "traffic": "200 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "全 IPLC 专线节点高速访问",
          "永久有效，不设过期清零",
          "不限同时在线设备数量",
          "随时随地即开即用"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "流量永不过期，适合作为日常保底与出差备用"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "03",
    "rank": 3,
    "name": "暮光网络",
    "englishName": "Twilight",
    "slug": "twilight",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=3qqonTlH",
    "coupon": "暂无优惠码",
    "category": "性价比机场",
    "price": "¥9.08/月起（年付¥109）",
    "traffic": "70GB~1500GB/月",
    "protocol": "VLESS",
    "route": "全 IPLC 物理专线",
    "tag": "专线入门选择",
    "shortDescription": "提供明确基础套餐参数的专线节点机场，帮助用户快速体验专线网络。",
    "recommendationReason": "2026综合天梯榜第2名。纯全内网 IPLC 物理专线架构，单节点峰值达 2.5Gbps，支持自研暮光加速与 Nextin 客户端。",
    "coreReason": "单节点峰值 2.5Gbps 高冗余配置，晚高峰丢包仅 1.2%，抗封锁与抗网络敏感期极稳。",
    "suitableFor": "追求稳定性的中轻度网络使用者",
    "features": [
      "专线节点",
      "明确的套餐配置",
      "VLESS协议保障"
    ],
    "faq": [
      {
        "question": "暮光网络的核心优势是什么？",
        "answer": "核心优势在于以较低的门槛提供专线节点，结合VLESS协议，适合作为专线机场的入门选择。"
      }
    ],
    "seoTitle": "暮光网络 - 稳定VLESS专线机场推荐与评测",
    "seoDescription": "暮光网络每月仅需20元即可享受120GB专线流量。通过VLESS协议与专线节点，为用户提供流畅的网络加速服务。",
    "plans": [
      {
        "id": "plan-1",
        "name": "暮光·年付轻量版",
        "category": "周期订阅",
        "badge": "⭐ 年付力荐",
        "intro": "适合轻度用户与按年控制预算的需求，年度入门首选",
        "price": "109",
        "period": "年",
        "priceDetail": "官网原价 ¥109/年",
        "traffic": "70 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "全 IPLC 物理专线出口",
          "单节点峰值 2.5Gbps，不限速",
          "不限同时在线设备数量"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "适合轻度用户与按年控制预算的需求，年度入门首选"
      },
      {
        "id": "plan-2",
        "name": "暮光·标准版 (站长力荐)",
        "category": "周期订阅",
        "badge": "🔥 站长主推",
        "intro": "中度办公、日常影音追剧与高频视频首选档位",
        "price": "40",
        "period": "月",
        "priceDetail": "官网原价 ¥40/月",
        "traffic": "240 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 三网优化 + IPLC 专线出口",
          "不限客户端同时在线数量",
          "流媒体 4K 超清秒开与原生解锁"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "中度办公、日常影音追剧与高频视频首选档位"
      },
      {
        "id": "plan-3",
        "name": "暮光·基础版",
        "category": "周期订阅",
        "badge": "月付入门",
        "intro": "适合日常浏览、社交、短视频及适量流媒体使用",
        "price": "20",
        "period": "月",
        "priceDetail": "官网原价 ¥20/月",
        "traffic": "120 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 多线路调度与专线出口",
          "支持多设备同时连接",
          "ChatGPT / 流媒体原生解锁"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "适合日常浏览、社交、短视频及适量流媒体使用"
      },
      {
        "id": "plan-4",
        "name": "暮光·旗舰版",
        "category": "周期订阅",
        "badge": "大流量",
        "intro": "面向较高频率视频、大文件传输与多设备协同办公",
        "price": "100",
        "period": "月",
        "priceDetail": "官网原价 ¥100/月",
        "traffic": "700 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "高速 IPLC 专线通道，极低抖动",
          "支持多人/多设备同时高负载使用",
          "峰值速率 2.5Gbps 极致保障",
          "全平台客户端极速连接"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "面向较高频率视频、大文件传输与多设备协同办公"
      },
      {
        "id": "plan-5",
        "name": "暮光·至尊版 (1.5TB)",
        "category": "周期订阅",
        "badge": "极客尊享",
        "intro": "面向团队协同、长时间在线与重度大流量消耗场景",
        "price": "180",
        "period": "月",
        "priceDetail": "官网原价 ¥180/月",
        "traffic": "1.5 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "智能专属路由与专线通道",
          "超大 1.5TB 每月流量额度",
          "多终端并发不降速",
          "全天候海外运维支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "面向团队协同、长时间在线与重度大流量消耗场景"
      },
      {
        "id": "plan-6",
        "name": "暮光·不限时标准包",
        "category": "一次性流量",
        "badge": "⏳ 不限时",
        "intro": "适合作为备用主力，流量永不过期，用完为止",
        "price": "318",
        "period": "次",
        "priceDetail": "官网原价 ¥318/次",
        "traffic": "400 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "全 IPLC 物理专线节点权限",
          "永久有效，流量不设清零期限",
          "不限同时在线设备数量",
          "全节点 1x 计费，不限速"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "适合作为备用主力，流量永不过期，用完为止"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "04",
    "rank": 4,
    "name": "隐形人",
    "englishName": "Invisible Network",
    "slug": "invisible",
    "affiliateUrl": "https://varnexa.invisibleaff.com/#/?code=JF4seZUy",
    "coupon": "yxr888",
    "category": "专线机场",
    "price": "¥7.27/月起（年付8折后¥87.2）",
    "traffic": "80GB~1600GB/月",
    "protocol": "IEPL专线 / 主流协议",
    "route": "全 IEPL 物理专线",
    "tag": "本站主推",
    "isFeatured": true,
    "featuredBadge": "本站主推",
    "tagline": "IEPL / CROSS-BORDER CONNECTION",
    "shortDescription": "隐形人采用 IEPL 专线，提供香港、日本、新加坡等多地区节点，面向日常浏览、流媒体观看与 AI 工具访问。支持电脑与手机端使用，提供周期订阅和一次性流量套餐，方便你按实际用量选择。",
    "recommendationReason": "2026综合天梯榜第1名（主推）。拥有 60+ 独立节点与 2Gbps+ 总带宽，全 IEPL 端到端物理专线，晚高峰丢包率仅 0.8%，全节点 1x 计费。",
    "coreReason": "全 IEPL 企业级端到端物理专线，自研多端协同 + iOS Nextin 合作，全节点 1x 真实计费无套路。",
    "suitableFor": "追求极致稳定抗封锁、多设备跨平台、需要大流量或灵活不限时流量包的用户",
    "disclosure": "推广说明：本页依据品牌方提供资料整理，为商业推广介绍。",
    "features": [
      "IEPL 企业级纯专线 (无视晚高峰)",
      "全节点 1x 计费 (无倍率套路)",
      "多端自研客户端 (Win/Mac/Android)",
      "iOS 合作客户端 Nextin (识别码 yxr)",
      "60+ 独立IP节点 / 2Gbps+ 总带宽",
      "提供周期订阅与不限时一次性流量包"
    ],
    "metrics": [
      {
        "value": "60+",
        "label": "独立IP节点",
        "source": "品牌方提供规格"
      },
      {
        "value": "2Gbps+",
        "label": "总带宽资源",
        "source": "非单用户保证速率"
      },
      {
        "value": "500Mbps级",
        "label": "高峰冗余配置",
        "source": "品牌方提供规格"
      }
    ],
    "plans": [
      {
        "id": "plan-1",
        "name": "星耀风暴 365天不熄",
        "category": "周期订阅",
        "badge": "主推年付",
        "intro": "面向小流量与新用户的年度入门方案。",
        "price": "109",
        "period": "年",
        "priceDetail": "年费折算约9.08元/月，实际按年支付109元",
        "traffic": "80 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速",
          "年付"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "按年支付，流量从购买日起每30天刷新。适合用量相对稳定、希望以年度周期管理订阅的用户。"
      },
      {
        "id": "plan-2",
        "name": "白银纪元",
        "category": "周期订阅",
        "badge": "周期订阅",
        "intro": "日常浏览、视频会议与AI工具的基础流量方案。",
        "price": "24",
        "period": "月",
        "traffic": "144 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月144GB流量，支持按使用周期选择付费方式。适合需要多设备接入，并兼顾日常浏览、会议和工具访问的场景。"
      },
      {
        "id": "plan-3",
        "name": "黄金序列",
        "category": "周期订阅",
        "badge": "周期订阅",
        "intro": "为视频与流媒体使用较多的日常场景增加流量余量。",
        "price": "48",
        "period": "月",
        "traffic": "360 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月360GB流量，套餐资料包含BGP三网优化与专线出口。适合在常规浏览之外，有较多视频、流媒体与持续传输需求的用户。"
      },
      {
        "id": "plan-4",
        "name": "铂金至臻",
        "category": "周期订阅",
        "badge": "周期订阅",
        "intro": "兼顾高频网络使用、远程办公与大文件传输。",
        "price": "105",
        "period": "月",
        "traffic": "750 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月750GB流量，适合使用频率较高、需要较大月度额度的场景。套餐资料提供多线调度与专线出口，并标注全节点1x计费。"
      },
      {
        "id": "plan-5",
        "name": "钻石穹顶",
        "category": "周期订阅",
        "badge": "周期订阅",
        "intro": "为团队协作与高强度传输提供更大的月度额度。",
        "price": "185",
        "period": "月",
        "traffic": "1,600 GB",
        "trafficSubtext": "每月流量额度 (1.6TB)",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月1600GB流量，套餐中也以1.6TB标注。适合多人多设备任务、内容工作室或高频传输需求；具体账号使用规则仍以品牌说明为准。"
      },
      {
        "id": "plan-6",
        "name": "王者定制版",
        "category": "商务定制",
        "badge": "商务定制",
        "intro": "面向商业连接需求的独立带宽方案。",
        "price": "680",
        "period": "月",
        "traffic": "500 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速"
        ],
        "billingCycles": [
          "月付"
        ],
        "description": "每月500GB流量，套餐资料强调独立带宽与商业连接用途，适合对连接方案有定制需求的业务场景，具体带宽规格和交付范围需与品牌方确认。"
      },
      {
        "id": "plan-7",
        "name": "一次性小流量",
        "category": "一次性流量",
        "badge": "一次性买断",
        "intro": "为备用连接与间歇使用保留一份独立流量额度。",
        "price": "229",
        "period": "次",
        "traffic": "160 GB",
        "trafficSubtext": "一次性总额度 (不限时)",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速",
          "一次性买断"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "一次购买160GB总额度，不按月重置，资料标注没有固定到期时间。适合需要备用额度或不连续使用的情境，设备数按品牌方最新确认为不限。"
      },
      {
        "id": "plan-8",
        "name": "一次性标准流量包",
        "category": "一次性流量",
        "badge": "一次性买断",
        "intro": "面向差旅、跨期使用和多设备任务的中档买断额度。",
        "price": "549",
        "period": "次",
        "traffic": "420 GB",
        "trafficSubtext": "一次性总额度 (不限时)",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速",
          "一次性买断"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "一次购买420GB总额度，不按月重置，资料标注没有固定到期时间。适合希望按实际消耗安排使用、避免将月度额度闲置的情境。"
      },
      {
        "id": "plan-9",
        "name": "一次性精英流量包",
        "category": "一次性流量",
        "badge": "一次性买断",
        "intro": "为较高总用量与跨周期任务准备大容量买断流量。",
        "price": "1,199",
        "period": "次",
        "traffic": "1,000 GB",
        "trafficSubtext": "一次性总额度 (1TB不限时)",
        "tags": [
          "IEPL专线",
          "不限设备数",
          "套餐标注不限速",
          "一次性买断"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "一次购买1000GB总额度，套餐中也以1TB标注。资料标注没有固定到期时间，面向高强度工作或较大累计传输需求；不限设备数以品牌方补充确认为准。"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    },
    "faq": [
      {
        "question": "iOS 客户端 Nextin 怎么连接？为什么必须填写识别码 yxr？",
        "answer": "隐形人针对 iOS 平台与 Nextin 客户端深度合作。根据品牌官方指引，在打开 Nextin 后、登录自己账号前，必须先在登录界面的识别码栏输入小写“yxr”，这是绑定隐形人专线节点集群的关键凭证。填写后即可正常登录官网账号，并自动同步获取全部专线节点。"
      },
      {
        "question": "隐形人的一次性流量包真的不会过期吗？与周期订阅有什么区别？",
        "answer": "是的。根据品牌方官方资料，一次性流量包（如 160GB、420GB、1000GB）均为买断型总额度，不按月清零重置，没有固定的到期时间限制。非常适合不常翻墙的轻度差旅人士、将该机场作为第二备用线路的用户，或者希望完全按需消耗流量避免浪费的朋友。"
      },
      {
        "question": "隐形人支持哪些设备同时在线？限制连接数吗？",
        "answer": "根据品牌方最新核对资料，隐形人的周期订阅和一次性流量包均标注为“不限设备数”。您可以在 Windows 电脑、Mac 笔记本、iPhone 和安卓平板上同时登录使用，非常适合个人多设备生态或工作室协同办公。"
      },
      {
        "question": "隐形人的全节点 1x 计费是什么意思？晚高峰会卡吗？",
        "answer": "全节点 1x 计费意味着无论您连接香港、日本、新加坡还是欧美的高速 IEPL 节点，消耗 1GB 流量就只扣减 1GB，绝无部分机场采用的 2x/3x/5x 隐性倍率缩水。同时因为采用物理级 IEPL 内网专线，在晚上 8:00 - 11:00 晚高峰期间，数据不走拥堵的公网骨干，全天候保障丝滑稳定。"
      },
      {
        "question": "隐形人能否解锁 ChatGPT、Claude 及 Netflix 4K？",
        "answer": "完全可以。隐形人的主流落地节点均配备了纯净原生住宅/机房 IP，不仅能够顺畅访问 ChatGPT, Claude, Midjourney 等 AI 生产力工具，还完美解锁 Netflix, Disney+, YouTube Premium, TikTok 等跨国流媒体 4K 超高清播放。"
      }
    ],
    "seoTitle": "隐形人机场评测 2026 - 本站主推IEPL纯专线/多端自研/iOS Nextin识别码yxr/9款套餐详解",
    "seoDescription": "隐形人（Invisible Network）为本站2026年度主推IEPL专线机场。拥有60+独立节点与2Gbps+总带宽，提供Win/Mac/Android自研客户端及iOS Nextin合作接入（识别码yxr）。详解9款周期订阅与不限时买断流量包，全节点1x计费晚高峰不卡顿。"
  },
  {
    "id": "05",
    "rank": 5,
    "name": "无忧链接",
    "englishName": "WorryFree",
    "slug": "worryfree",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=56A0RTpU",
    "coupon": "wuyou666",
    "category": "专线机场",
    "price": "¥6.58/月起（年付¥79）",
    "traffic": "40 GB ~ 1 GB",
    "protocol": "Shadowsocks / V2Ray",
    "route": "全 IPLC 物理专线",
    "tag": "稳定型方案",
    "shortDescription": "主打IPLC纯专线的稳定型机场，配置透明且清晰。",
    "recommendationReason": "以IPLC专线为主要线路方向，同时提供较清晰的基础套餐配置，是追求网络稳定性的用户的优选。",
    "coreReason": "纯正的IPLC专线是其最核心的特色与保障。",
    "suitableFor": "对网络延迟和稳定性有较高要求的用户，如游戏玩家或外贸从业者",
    "features": [
      "IPLC纯专线",
      "高稳定性",
      "透明的套餐配置"
    ],
    "faq": [
      {
        "question": "什么是IPLC线路？无忧链接的IPLC有什么优势？",
        "answer": "IPLC是国际专线，不过墙，延迟低且极少丢包。无忧链接以IPLC为核心，保障了极其稳定的连接体验。"
      }
    ],
    "seoTitle": "无忧链接 - 高稳定IPLC专线机场推荐",
    "seoDescription": "无忧链接提供19元/月的高稳定IPLC专线套餐，包含100GB流量。通过SS/V2Ray协议，为您带来无忧的低延迟网络体验。",
    "plans": [
      {
        "id": "plan-1",
        "name": "MINI链接",
        "category": "周期订阅",
        "badge": "👑 年付性价比之王 · 极力推荐",
        "intro": "📦 月可用流量: 40GB (订单日自动重置) · 365天稳定保障",
        "price": "79.00",
        "period": "年",
        "priceDetail": "官网原价 ¥79.00/年",
        "traffic": "40 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "⚡线路架构：全IPLC专线，节点速率×1 (绝不虚标扣量)",
          "👥适用群体：日常查阅资料、轻度办公、高可靠备用防失联",
          "🌍节点分布：覆盖港/台/日/新/美核心亚太直连枢纽"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月可用流量: 40GB (订单日自动重置) · 365天稳定保障"
      },
      {
        "id": "plan-2",
        "name": "舒心链接",
        "category": "周期订阅",
        "badge": "⚡ 个人入门 · 轻松省心",
        "intro": "📦 每月 100 GB 可用流量 · 月付无压力",
        "price": "19.00",
        "period": "月",
        "priceDetail": "官网原价 ¥19.00/月",
        "traffic": "100 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，节点速率×1",
          "🚀连接体验：晚高峰低延迟直连，网页秒开"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 100 GB 可用流量 · 月付无压力"
      },
      {
        "id": "plan-3",
        "name": "省心链接",
        "category": "周期订阅",
        "badge": "🔥 主力畅享 · 人气优选",
        "intro": "📦 每月 200 GB 可用流量 · 充裕不焦虑",
        "price": "33.00",
        "period": "月",
        "priceDetail": "官网原价 ¥33.00/月",
        "traffic": "200 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，节点速率×1",
          "💡推荐指数：上班族与科研学生党最佳主力口粮"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 200 GB 可用流量 · 充裕不焦虑"
      },
      {
        "id": "plan-4",
        "name": "随心链接",
        "category": "周期订阅",
        "badge": "💎 影音狂欢 · 大流量专线",
        "intro": "📦 每月 500 GB 可用流量 · 高清多端畅看",
        "price": "77.00",
        "period": "月",
        "priceDetail": "官网原价 ¥77.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，节点速率×1",
          "📱并发支持：多设备全天候在线无卡顿"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 500 GB 可用流量 · 高清多端畅看"
      },
      {
        "id": "plan-5",
        "name": "忘忧链接",
        "category": "周期订阅",
        "badge": "🌌 旗舰海量 · 1TB 超级大包",
        "intro": "📦 每月 1000 GB (1.0TB) · 极速重载与工作室首选",
        "price": "117.00",
        "period": "月",
        "priceDetail": "官网原价 ¥117.00/月",
        "traffic": "1 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，节点速率×1",
          "🎬超清流媒体：4K/8K 流畅观影无视码率消耗",
          "🏢场景推荐：跨境电商、高并发下载、重度科技团队首选"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 1000 GB (1.0TB) · 极速重载与工作室首选"
      },
      {
        "id": "plan-6",
        "name": "100G永久不限时 无忧链接",
        "category": "一次性流量",
        "badge": "⏳ 长期不过期 · 纯备用首选",
        "intro": "📦 100 GB 可用流量，永久不限时 · 用完为止",
        "price": "98.00",
        "period": "次",
        "priceDetail": "官网原价 ¥98.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⏳有效期：永久不限时，一次购买永久有效，用完为止",
          "⚡线路网络：全IPLC专线，节点速率×1",
          "💡适用场景：偶尔需要翻墙查文献、出差旅游备用的用户"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 100 GB 可用流量，永久不限时 · 用完为止"
      },
      {
        "id": "plan-7",
        "name": "300G永久不限时 无忧链接",
        "category": "一次性流量",
        "badge": "⏳ 大容量买断 · 长期无忧",
        "intro": "📦 300 GB 可用流量，永久不限时 · 超值长期备选",
        "price": "288.00",
        "period": "次",
        "priceDetail": "官网原价 ¥288.00/次",
        "traffic": "300 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⚡线路网络：全IPLC专线，节点速率×1",
          "💡适用场景：多设备长期备用、偶尔追剧的大容量买断首选"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 300 GB 可用流量，永久不限时 · 超值长期备选"
      },
      {
        "id": "plan-8",
        "name": "无忧专业级定制套餐",
        "category": "商务定制",
        "badge": "👑 专属定制 · 独享原生 IP",
        "intro": "📦 500GB 专属流量 · 独享带宽与专属部署",
        "price": "680.00",
        "period": "月",
        "priceDetail": "官网原价 ¥680.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "全 IPLC 物理专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 500GB 专属流量 · 独享带宽与专属部署"
      },
      {
        "id": "plan-9",
        "name": "差价链接",
        "category": "商务定制",
        "badge": "🔧 补差价专用通道",
        "intro": "📦 流量 1GB · 定制套餐专用补拍",
        "price": "140.00",
        "period": "月",
        "priceDetail": "官网原价 ¥140.00/月",
        "traffic": "1 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "🔧功能用途：定制套餐 差价专用",
          "⚡即时生效：配合专业级定制方案，专人快速生效调整"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 流量 1GB · 定制套餐专用补拍"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "06",
    "rank": 6,
    "name": "灵猫",
    "englishName": "Civet",
    "slug": "civet",
    "affiliateUrl": "https://vip02.civetaff.com/#/?code=kZlRw46w",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥7.08/月起（年付¥85）",
    "traffic": "45 GB ~ 0 GB",
    "protocol": "V2Ray",
    "route": "全 IPLC 物理专线",
    "tag": "大流量专线",
    "shortDescription": "完美结合IPLC专线与大基础流量的高端机场服务。",
    "recommendationReason": "基础套餐即提供高达150GB的较高流量额度，同时采用极其稳定的IPLC线路作为主要特色。",
    "coreReason": "150GB大基础流量与IPLC专线的强强联合。",
    "suitableFor": "流量消耗较大且需要极高网络稳定性的重度用户",
    "features": [
      "150GB大流量",
      "IPLC专线直连",
      "V2Ray协议"
    ],
    "faq": [
      {
        "question": "灵猫适合看4K视频吗？",
        "answer": "非常适合。IPLC专线保证了速度的稳定性，150GB的流量也能满足一定的流媒体需求。"
      }
    ],
    "seoTitle": "灵猫机场 - 大流量IPLC专线机场首选推荐",
    "seoDescription": "灵猫机场为您提供每月150GB的大流量IPLC专线服务，起步仅需25元/月，满足您对高流量与极致稳定性的双重需求。",
    "plans": [
      {
        "id": "plan-1",
        "name": "灵猫·年付小包",
        "category": "周期订阅",
        "badge": "👑 年付高性价比 · 极致轻量",
        "intro": "📦 月流量: 45GB (可用流量 45G/每月) · 365天时长",
        "price": "85.00",
        "period": "年",
        "priceDetail": "官网原价 ¥85.00/年",
        "traffic": "45 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🔄流量重置：订单日自动重置或者购买加油包补充流量",
          "🌍节点覆盖：港/台/新/日/美，增加节点需求请发工单",
          "👨‍💻客服售后：客服全天在线指导"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 45GB (可用流量 45G/每月) · 365天时长"
      },
      {
        "id": "plan-2",
        "name": "灵猫·年付Small",
        "category": "周期订阅",
        "badge": "🔥 年付进阶 · 畅游之选",
        "intro": "📦 月流量: 150GB (可用流量 150G/每月) · 365天时长",
        "price": "195.00",
        "period": "年",
        "priceDetail": "官网原价 ¥195.00/年",
        "traffic": "150 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🔄流量重置：订单日自动重置或者购买加油包补充流量",
          "🌍节点覆盖：港/台/新/日/美，增加节点需求请发工单",
          "👨‍💻客服售后：客服全天在线指导"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 150GB (可用流量 150G/每月) · 365天时长"
      },
      {
        "id": "plan-3",
        "name": "灵猫·年付Big",
        "category": "周期订阅",
        "badge": "💎 年付大流量 · 豪华畅快",
        "intro": "📦 月流量: 300GB (可用流量 300G/每月) · 365天时长",
        "price": "295.00",
        "period": "年",
        "priceDetail": "官网原价 ¥295.00/年",
        "traffic": "300 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🔄流量重置：订单日自动重置或者购买加油包补充流量",
          "🌍节点覆盖：港/台/新/日/美，增加节点需求请发工单",
          "👨‍💻客服售后：客服全天在线指导"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 300GB (可用流量 300G/每月) · 365天时长"
      },
      {
        "id": "plan-4",
        "name": "灵猫·季付Small",
        "category": "周期订阅",
        "badge": "⚡ 季付优选 · 灵活周期",
        "intro": "📦 月流量: 150GB (可用流量 150G/每月) · 90天时长",
        "price": "65.00",
        "period": "月",
        "priceDetail": "官网原价 ¥65.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🔄流量重置：订单日自动重置或者购买加油包补充流量",
          "🌍节点覆盖：港/台/新/日/美，增加节点需求请发工单",
          "👨‍💻客服售后：客服全天在线指导"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 150GB (可用流量 150G/每月) · 90天时长"
      },
      {
        "id": "plan-5",
        "name": "灵猫·季付Big",
        "category": "周期订阅",
        "badge": "🚀 季付高阶 · 影音办公",
        "intro": "📦 月流量: 300GB (可用流量 300G/每月) · 90天时长",
        "price": "125.00",
        "period": "月",
        "priceDetail": "官网原价 ¥125.00/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🔄流量重置：订单日自动重置或者购买加油包补充流量",
          "🌍节点覆盖：港/台/新/日/美，增加节点需求请发工单",
          "👨‍💻客服售后：客服全天在线指导"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 300GB (可用流量 300G/每月) · 90天时长"
      },
      {
        "id": "plan-6",
        "name": "灵猫·月付Small",
        "category": "周期订阅",
        "badge": "⚡ 月付尝鲜 · 起步轻松",
        "intro": "📦 月流量: 150GB (可用流量 150G/每月) · 30天时长",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🔄流量重置：订单日自动重置或者购买加油包补充流量",
          "🌍节点覆盖：港/台/新/日/美，增加节点需求请发工单",
          "👨‍💻客服售后：客服全天在线指导"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 150GB (可用流量 150G/每月) · 30天时长"
      },
      {
        "id": "plan-7",
        "name": "灵猫·月付Big",
        "category": "周期订阅",
        "badge": "🔥 月付大包 · 随意畅享",
        "intro": "📦 月流量: 300GB (可用流量 300G/每月) · 30天时长",
        "price": "45.00",
        "period": "月",
        "priceDetail": "官网原价 ¥45.00/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🔄流量重置：订单日自动重置或者购买加油包补充流量",
          "🌍节点覆盖：港/台/新/日/美，增加节点需求请发工单",
          "👨‍💻客服售后：客服全天在线指导"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 300GB (可用流量 300G/每月) · 30天时长"
      },
      {
        "id": "plan-8",
        "name": "灵猫·不限时Small",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 重置享9折",
        "intro": "📦 一次性买断: 100GB (可用流量 100G) · 不限时永不过期",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⏳套餐时长：不限时，永久有效，用完为止",
          "🎉重置特权：用完重置可享受九折优惠",
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🌍节点覆盖：港/台/新/日/美，客服全天在线指导"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性买断: 100GB (可用流量 100G) · 不限时永不过期"
      },
      {
        "id": "plan-9",
        "name": "灵猫·不限时Big",
        "category": "一次性流量",
        "badge": "♾️ 海量不限时 · 旗舰重置9折",
        "intro": "📦 一次性买断: 500GB (可用流量 500G) · 超大不限时池",
        "price": "350.00",
        "period": "次",
        "priceDetail": "官网原价 ¥350.00/次",
        "traffic": "500 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⏳套餐时长：不限时，永久有效，用完为止",
          "🎉重置特权：用完重置可享受九折优惠",
          "🚀最大带宽：可达到的最大带宽 1000 Mbps",
          "🌍节点覆盖：港/台/新/日/美，客服全天在线指导"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性买断: 500GB (可用流量 500G) · 超大不限时池"
      },
      {
        "id": "plan-10",
        "name": "灵猫·大流量定制",
        "category": "商务定制",
        "badge": "👑 专属定制 · 商业旗舰",
        "intro": "📦 月流量: 0GB起 (按需按量定制) · 企业级专人维护",
        "price": "999.00",
        "period": "月",
        "priceDetail": "官网原价 ¥999.00/月",
        "traffic": "0 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "💼定制场景：有更大流量需要可联系客服或者工单",
          "🎥跨境专线：针对海外直播、跨境电商等高要求业务提供专线定制",
          "⚡独享带宽：独享千兆上行带宽，专人技术快速排障与精细化交付"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 0GB起 (按需按量定制) · 企业级专人维护"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "07",
    "rank": 7,
    "name": "闪跃",
    "englishName": "FlashLeap",
    "slug": "flashleap",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=FkCGEeaC",
    "coupon": "shanyue",
    "category": "专线机场",
    "price": "¥8.00/月起（年付¥96）",
    "traffic": "60 GB ~ 1 TB",
    "protocol": "主流协议",
    "route": "全 IPLC 物理专线",
    "tag": "纯专线方案",
    "shortDescription": "坚持纯粹IPLC架构，不掺杂水分的优质专线服务提供商。",
    "recommendationReason": "以IPLC纯专线作为主要线路特点，拒绝线路混杂，并提供150GB级别基础流量。",
    "coreReason": "纯正的IPLC纯专线，保障极致网络体验。",
    "suitableFor": "拒绝线路掺假、追求极致稳定和纯粹专线体验的用户",
    "features": [
      "纯IPLC架构",
      "150GB流量配备",
      "高度可靠的连接"
    ],
    "faq": [
      {
        "question": "闪跃的线路会受晚高峰影响吗？",
        "answer": "闪跃采用IPLC纯专线架构，物理线路不过墙，几乎不受晚高峰网络拥堵影响。"
      }
    ],
    "seoTitle": "闪跃 FlashLeap - 纯正IPLC专线机场推荐评测",
    "seoDescription": "闪跃FlashLeap主打150GB基础流量的纯正IPLC专线方案，每月24元起，为您提供不受晚高峰影响的纯净网络加速服务。",
    "plans": [
      {
        "id": "plan-1",
        "name": "闪跃年付版",
        "category": "周期订阅",
        "badge": "👑 年付高性价比 · 极致轻量",
        "intro": "📦 月流量: 60GB · 适用于轻度使用用户",
        "price": "96.00",
        "period": "年",
        "priceDetail": "官网原价 ¥96.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率，不放大扣量",
          "👥适用群体：适用于轻度使用用户、日常网页搜索与备用",
          "🔓原生解锁：原生IP解锁各大流媒体、ChatGPT"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 60GB · 适用于轻度使用用户"
      },
      {
        "id": "plan-2",
        "name": "闪跃年付版（高）",
        "category": "周期订阅",
        "badge": "🔥 年付进阶 · 中重度首选",
        "intro": "📦 月流量: 120GB · 适用于中、重度使用用户",
        "price": "180.00",
        "period": "年",
        "priceDetail": "官网原价 ¥180.00/年",
        "traffic": "120 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率，不放大扣量",
          "👥适用群体：适用于中、重度使用用户，看视频办公两不误",
          "🌍节点覆盖：香港、日本、新加坡、美国、台湾优质专线"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 120GB · 适用于中、重度使用用户"
      },
      {
        "id": "plan-3",
        "name": "闪动 (Flicker)",
        "category": "周期订阅",
        "badge": "⚡ 灵动入门 · 个人高频主力",
        "intro": "📦 月流量: 150GB · 月付随心开通",
        "price": "24.00",
        "period": "月",
        "priceDetail": "官网原价 ¥24.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率",
          "🔓原生解锁：原生IP解锁各大流媒体",
          "🤖AI/社媒：深度解锁 ChatGPT, TikTok"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 150GB · 月付随心开通"
      },
      {
        "id": "plan-4",
        "name": "飞跃 (Leap)",
        "category": "周期订阅",
        "badge": "🔥 畅游主力 · 极力推荐",
        "intro": "📦 月流量: 300GB · 4K影音与科研利器",
        "price": "44.00",
        "period": "月",
        "priceDetail": "官网原价 ¥44.00/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率",
          "🔓原生解锁：原生IP解锁各大主流视频流媒体",
          "🚀极速性能：4K/8K 视频拖动无缓冲，多设备并发稳定"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 300GB · 4K影音与科研利器"
      },
      {
        "id": "plan-5",
        "name": "瞬移 (Teleport)",
        "category": "周期订阅",
        "badge": "💨 大流量畅快 · 极速重载",
        "intro": "📦 月流量: 600GB · 高清追剧与大文件下载",
        "price": "84.00",
        "period": "月",
        "priceDetail": "官网原价 ¥84.00/月",
        "traffic": "600 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率",
          "🔓原生解锁：原生IP解锁各大流媒体",
          "🤖AI/社媒：解锁 ChatGPT, TikTok 无阻碍"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 600GB · 高清追剧与大文件下载"
      },
      {
        "id": "plan-6",
        "name": "跃迁 (Warp)",
        "category": "周期订阅",
        "badge": "🌌 旗舰海量 · 1TB 超大包",
        "intro": "📦 月流量: 1.0TB (1000GB) · 团队/高吞吐专属",
        "price": "134.00",
        "period": "月",
        "priceDetail": "官网原价 ¥134.00/月",
        "traffic": "1 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率",
          "🔓原生解锁：原生IP解锁各大流媒体",
          "🤖AI/社媒：解锁 ChatGPT, TikTok 全功能"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 1.0TB (1000GB) · 团队/高吞吐专属"
      },
      {
        "id": "plan-7",
        "name": "闪跃不限时版",
        "category": "一次性流量",
        "badge": "⏳ 长期备用 · 永久不过期",
        "intro": "📦 一次性流量: 100GB · 闪跃无限时版",
        "price": "150.00",
        "period": "次",
        "priceDetail": "官网原价 ¥150.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⏳套餐时长：不限时，长期有效不过期，用完为止",
          "👥适用群体：适用于要求无时间限制的用户与低频备用者",
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性流量: 100GB · 闪跃无限时版"
      },
      {
        "id": "plan-8",
        "name": "闪跃不限时版（高）",
        "category": "一次性流量",
        "badge": "⏳ 大容量买断 · 长期无忧",
        "intro": "📦 一次性流量: 200GB · 闪跃无限时版 (高)",
        "price": "288.00",
        "period": "次",
        "priceDetail": "官网原价 ¥288.00/次",
        "traffic": "200 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "👥适用群体：适用于要求无时间限制的高品质防失联用户",
          "⚡线路网络：全IPLC专线，晚高峰不限速",
          "🎯倍率无坑：所有节点统一 x1 倍率",
          "🌍节点覆盖：支持全量优质亚太核心专线节点"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性流量: 200GB · 闪跃无限时版 (高)"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "08",
    "rank": 8,
    "name": "Firefly机场",
    "englishName": "Firefly",
    "slug": "firefly",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=Fes6j9rn",
    "coupon": "firefly",
    "category": "性价比机场",
    "price": "¥8.00/月起（年付¥96）",
    "traffic": "60 GB ~ 1.0 TB",
    "protocol": "VLESS",
    "route": "全 IPLC 物理专线",
    "tag": "低价入门",
    "shortDescription": "价格亲民的轻量级入门机场，轻度上网的好帮手。",
    "recommendationReason": "年付折算后的月均价格极低，适合预算有限、流量需求相对适中的轻度使用者。",
    "coreReason": "极致的低门槛价格，轻松实现网络自由。",
    "suitableFor": "学生群体、轻度查阅资料者、预算极其有限的用户",
    "features": [
      "超低月均价",
      "VLESS协议",
      "轻量级套餐"
    ],
    "faq": [
      {
        "question": "Firefly机场流量够用吗？",
        "answer": "每月60GB对于主要用于查阅网页、偶尔看短视频的轻度用户来说是完全足够的。"
      }
    ],
    "seoTitle": "Firefly机场 - 低价轻量级入门机场推荐",
    "seoDescription": "Firefly机场年付折算仅需8元/月，提供60GB月流量和VLESS优质线路，是预算有限、轻度上网用户的绝佳低价入门选择。",
    "plans": [
      {
        "id": "plan-1",
        "name": "Firefly年付版",
        "category": "周期订阅",
        "badge": "👑 官方推荐 · 年付省心",
        "intro": "📦 月流量: 60GB · 全节点 IPLC 物理专线 · 极低月折",
        "price": "96.00",
        "period": "年",
        "priceDetail": "官网原价 ¥96.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "全 IPLC 物理专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 60GB · 全节点 IPLC 物理专线 · 极低月折"
      },
      {
        "id": "plan-2",
        "name": "Firefly Lite",
        "category": "周期订阅",
        "badge": "⚡ 性价比首选 · 轻量入门",
        "intro": "📦 月流量: 150GB · 适合日常网页浏览与轻度视频",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🌍节点覆盖：50+ 节点~ 香港、台湾、日本、新加坡、美国"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 150GB · 适合日常网页浏览与轻度视频"
      },
      {
        "id": "plan-3",
        "name": "Firefly Plus",
        "category": "周期订阅",
        "badge": "🔥 销量冠军 · 黄金进阶",
        "intro": "📦 月流量: 300GB · 高清影音与商务办公主力套餐",
        "price": "45.00",
        "period": "月",
        "priceDetail": "官网原价 ¥45.00/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🌍节点覆盖：50+ 节点~ 香港、台湾、日本、新加坡、美国"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 300GB · 高清影音与商务办公主力套餐"
      },
      {
        "id": "plan-4",
        "name": "Firefly Blaze",
        "category": "周期订阅",
        "badge": "🚀 高频大带宽 · 极速烈焰",
        "intro": "📦 月流量: 600GB · 适合 4K/8K 视频狂热粉与多设备家庭",
        "price": "85.00",
        "period": "月",
        "priceDetail": "官网原价 ¥85.00/月",
        "traffic": "600 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🌍节点覆盖：50+ 节点~ 香港、台湾、日本、新加坡、美国"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 600GB · 适合 4K/8K 视频狂热粉与多设备家庭"
      },
      {
        "id": "plan-5",
        "name": "Firefly Nova",
        "category": "周期订阅",
        "badge": "👑 旗舰海量 · 新星之顶",
        "intro": "📦 月流量: 1.0TB (1000GB) · 团队协作与超大流量海量池",
        "price": "150.00",
        "period": "月",
        "priceDetail": "官网原价 ¥150.00/月",
        "traffic": "1.0 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🌍节点覆盖：50+ 节点~ 香港、台湾、日本、新加坡、美国"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 1.0TB (1000GB) · 团队协作与超大流量海量池"
      },
      {
        "id": "plan-6",
        "name": "Firefly不限时",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 零月租焦虑",
        "intro": "📦 一次性买断: 100GB · 永不过期 · 出差备用神包",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⚡线路网络：IPLC专线网络，不限速，不限设备数",
          "🌍节点覆盖：50+ 节点~ 香港、台湾、日本、新加坡、美国"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性买断: 100GB · 永不过期 · 出差备用神包"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "09",
    "rank": 9,
    "name": "跨界云",
    "englishName": "Kuajie",
    "slug": "kuajie",
    "affiliateUrl": "https://vip02.kuajieaff.com/#/?code=VfWeYwHM",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥8.00/月起（年付¥96）",
    "traffic": "60 GB ~ 1.8 TB",
    "protocol": "Shadowsocks",
    "route": "全 IPLC 物理专线",
    "tag": "全专线架构",
    "shortDescription": "采用全专线架构的高品质机场，提供坚如磐石的网络连接。",
    "recommendationReason": "主要突出全专线线路架构，不使用廉价公网中转，基础套餐即提供120GB左右的数据额度。",
    "coreReason": "全覆盖的专线线路，提供全天候的稳定保障。",
    "suitableFor": "对全时段网络连通率要求极高的专业人士",
    "features": [
      "全节点专线",
      "SS协议低资源消耗",
      "稳定可靠"
    ],
    "faq": [
      {
        "question": "全专线架构有什么好处？",
        "answer": "全专线意味着所有节点均通过专线出境，避免了公网的波动和干扰，整体连通性和延迟表现都更优异。"
      }
    ],
    "seoTitle": "跨界云 - 稳定全专线架构机场推荐与价格介绍",
    "seoDescription": "跨界云采用全专线架构，每月20元起即可获取120GB流量。通过稳定的Shadowsocks协议，提供全天候坚如磐石的网络连接体验。",
    "plans": [
      {
        "id": "plan-1",
        "name": "跨界年付版",
        "category": "周期订阅",
        "badge": "👑 年付高性价比 · 极致实惠",
        "intro": "📦 月流量: 60GB (购买日起算) · 适合每天看剧 1 小时内",
        "price": "96.00",
        "period": "年",
        "priceDetail": "官网原价 ¥96.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "⚡线路网络：IPLC 高端线路，不限速，所有节点 1 倍率",
          "👥适用群体：单设备，偶尔 AI 对话，每天看剧 1 小时内"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 60GB (购买日起算) · 适合每天看剧 1 小时内"
      },
      {
        "id": "plan-2",
        "name": "年付版 (100GB/月)",
        "category": "周期订阅",
        "badge": "🔥 年付进阶 · 畅玩无忧",
        "intro": "📦 月流量: 100GB (购买日起算) · 适合每天看剧 1.5-2 小时",
        "price": "150.00",
        "period": "年",
        "priceDetail": "官网原价 ¥150.00/年",
        "traffic": "100 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "⚡线路网络：IPLC 高端线路，不限速，所有节点 1 倍率",
          "👥适用群体：一两台设备，追剧与 AI 对话，看视频更从容",
          "📱设备特权：设备数不限，可找客服加节点"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 100GB (购买日起算) · 适合每天看剧 1.5-2 小时"
      },
      {
        "id": "plan-3",
        "name": "轻云 Lite（季付）",
        "category": "周期订阅",
        "badge": "⚡ 季付超值 · ¥43 特别优惠",
        "intro": "📦 月流量: 120GB · 适合每天看剧 2 小时内",
        "price": "43",
        "period": "月",
        "priceDetail": "官网原价 ¥43/月",
        "traffic": "120 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：IPLC 高端线路，不限速，所有节点 1 倍率",
          "👥适用群体：1-2 台设备，刷剧、AI、社交"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 120GB · 适合每天看剧 2 小时内"
      },
      {
        "id": "plan-4",
        "name": "轻云 Lite (月付)",
        "category": "周期订阅",
        "badge": "⚡ 个人主力 · 拿不准先买月付",
        "intro": "📦 每月 120GB · 适合每天看剧 2 小时内",
        "price": "20.00",
        "period": "月",
        "priceDetail": "官网原价 ¥20.00/月",
        "traffic": "120 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：IPLC 高端线路，不限速，所有节点 1 倍率",
          "👥适用群体：1-2 台设备，刷剧、AI、社交，随时可升档"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 120GB · 适合每天看剧 2 小时内"
      },
      {
        "id": "plan-5",
        "name": "跃云 Leap",
        "category": "周期订阅",
        "badge": "🔥 全家共用 · 爆款推荐",
        "intro": "📦 每月 330GB · 适合全家共用、多设备、常下载",
        "price": "40.00",
        "period": "月",
        "priceDetail": "官网原价 ¥40.00/月",
        "traffic": "330 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "👥适用群体：全家共用、多设备用户，经常下载资料或看视频"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 330GB · 适合全家共用、多设备、常下载"
      },
      {
        "id": "plan-6",
        "name": "凌云 Soar",
        "category": "周期订阅",
        "badge": "💎 4K 重度影音 · 豪华大包",
        "intro": "📦 每月 830GB · 适合 4K 重度观影和大量下载",
        "price": "90.00",
        "period": "月",
        "priceDetail": "官网原价 ¥90.00/月",
        "traffic": "830 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：IPLC 高端线路，不限速，所有节点 1 倍率",
          "👥适用群体：4K 重度用户、大量高清下载、多屏并发"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 830GB · 适合 4K 重度观影和大量下载"
      },
      {
        "id": "plan-7",
        "name": "无界 Infinity",
        "category": "周期订阅",
        "badge": "🌌 旗舰巨无霸 · 1.8TB 团队专属",
        "intro": "📦 每月 1800GB (1.8TB) · 每天 60GB 也用不完",
        "price": "130.00",
        "period": "月",
        "priceDetail": "官网原价 ¥130.00/月",
        "traffic": "1.8 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡线路网络：IPLC 高端线路，不限速，所有节点 1 倍率",
          "👥适用群体：多屏 4K、大型下载、小团队与跨境电商共用"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 每月 1800GB (1.8TB) · 每天 60GB 也用不完"
      },
      {
        "id": "plan-8",
        "name": "跨界·不限时包",
        "category": "一次性流量",
        "badge": "⏳ 长期不过期 · 9折重置特权",
        "intro": "📦 一次性买 300GB · 长期有效，不会过期",
        "price": "200.00",
        "period": "次",
        "priceDetail": "官网原价 ¥200.00/次",
        "traffic": "300 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⚡线路网络：IPLC 高端线路，不限速，所有节点 1 倍率"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性买 300GB · 长期有效，不会过期"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "10",
    "rank": 10,
    "name": "熊猫cloud",
    "englishName": "PandaCloud",
    "slug": "pandacloud",
    "affiliateUrl": "https://cl888.cailudl.com:9999/#/register?code=MzbRXO35",
    "coupon": "88888",
    "category": "平价中转",
    "price": "约 ¥6/月起",
    "traffic": "300GB",
    "protocol": "主流协议",
    "route": "港/日/美等地区",
    "tag": "平价中转",
    "shortDescription": "极具价格竞争力的平价中转机场，覆盖常用海外节点。",
    "recommendationReason": "价格门槛较低，覆盖香港、日本、美国等核心地区，非常适合希望以较低成本了解中转型机场方案的用户。",
    "coreReason": "极低的价格门槛与中转架构的结合。",
    "suitableFor": "入门体验者、价格敏感型用户",
    "features": [
      "超低起步价",
      "主流节点覆盖",
      "平价中转架构"
    ],
    "faq": [
      {
        "question": "熊猫cloud为什么这么便宜？",
        "answer": "主要因为其定位为平价中转，通过优化成本结构，为用户提供低门槛的基础翻墙服务。"
      }
    ],
    "seoTitle": "熊猫cloud - 便宜平价中转机场推荐指南",
    "seoDescription": "熊猫cloud是一款门槛极低的平价中转机场，约6元/月起，覆盖港日美等核心节点，是体验中转机场的高性价比之选。",
    "plans": [
      {
        "id": "plan-1",
        "name": "熊猫cloud · 年付轻量版",
        "category": "周期订阅",
        "badge": "年度力荐",
        "intro": "适合轻度日常使用与按年预算控制，年度入门首选。",
        "price": "96",
        "period": "年",
        "priceDetail": "折合约 ¥8.00/月 · 每年稳定自动刷新",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "港/日/美等地区",
          "不限同时在线设备",
          "晚高峰不限速"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "按年支付，流量从购买日起每30天刷新60GB。适合日常轻度浏览、工作查阅与流媒体播放。"
      },
      {
        "id": "plan-2",
        "name": "熊猫cloud · 标准月付版",
        "category": "周期订阅",
        "badge": "热门主力",
        "intro": "适合按月付费、每月用量适中的主力日常使用。",
        "price": "6",
        "period": "月",
        "priceDetail": "支持月付/季付/半年付/年付",
        "traffic": "300GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "港/日/美等地区",
          "原生IP流媒体解锁",
          "多设备并发接入"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供稳定高速专线配额，支持ChatGPT、流媒体原生秒开。"
      },
      {
        "id": "plan-3",
        "name": "熊猫cloud · 大流量尊享版",
        "category": "周期订阅",
        "badge": "海量吞吐",
        "intro": "面向高频影音、跨境大文件传输与多设备协同办公。",
        "price": "45",
        "period": "月",
        "priceDetail": "支持灵活周期付费",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "港/日/美等地区",
          "企业级专线大带宽",
          "全平台极速支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "充沛 300GB 月度大流量，晚高峰超低丢包，满足多设备家庭或工作室高强度使用。"
      },
      {
        "id": "plan-4",
        "name": "熊猫cloud · 不限时备用包",
        "category": "一次性流量",
        "badge": "一次性买断",
        "intro": "流量永不过期，适合作为紧急备用梯子或低频访问。",
        "price": "120",
        "period": "次",
        "priceDetail": "一次购买，永久有效",
        "traffic": "150 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "港/日/美等地区",
          "无月租清零焦虑",
          "全节点1x真实计费"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "150GB 永久有效总流量，全专线节点权限开放，不用不扣费，告别到期清零焦虑。"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "11",
    "rank": 11,
    "name": "Sogo云",
    "englishName": "SogoCloud",
    "slug": "sogocloud",
    "affiliateUrl": "https://wzjc.sogoyunaff.cc/#/?code=2x2EywO9",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥8.17/月起（年付¥98）",
    "traffic": "60 GB ~ 1100 GB",
    "protocol": "自研协议/通用协议",
    "route": "全 IEPL 物理专线",
    "tag": "企业级专线",
    "shortDescription": "采用IEPL企业级专线的高端机场，保障企业级高可用性。",
    "recommendationReason": "主打IEPL企业级专线方向，不仅线路质量过硬，还同时提供高达150GB的较高基础流量额度。",
    "coreReason": "IEPL企业级专线带来极低的延迟与极高的可用率。",
    "suitableFor": "对网络质量要求极高的商务人士、研发人员",
    "features": [
      "IEPL企业专线",
      "高基础流量",
      "多协议支持"
    ],
    "faq": [
      {
        "question": "Sogo云的企业级专线和普通线路有什么区别？",
        "answer": "企业级专线通常拥有更高的SLA保证，带宽更独享，延迟更低，在特殊时期依然能保持极佳的稳定性。"
      }
    ],
    "seoTitle": "Sogo云 - 高端IEPL企业级专线机场推荐",
    "seoDescription": "Sogo云主打IEPL企业级专线，提供150GB大流量套餐。通过自研与通用协议结合，为商务与高要求用户带来极速稳定的翻墙体验。",
    "plans": [
      {
        "id": "plan-1",
        "name": "小包-年付版",
        "category": "周期订阅",
        "badge": "⭐ 主推套餐 · 高性价比年付",
        "intro": "适合轻度个人使用，日常查阅资料与低频备用首选",
        "price": "98.00",
        "period": "年",
        "priceDetail": "官网原价 ¥98.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "全 IPLC/IEPL 物理专线接入",
          "所有节点统一 x1 真实倍率计费",
          "原生纯净双 ISP 出口解锁流媒体",
          "支持多端同时在线使用"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "适合轻度个人使用，日常查阅资料与低频备用首选"
      },
      {
        "id": "plan-2",
        "name": "基础版",
        "category": "周期订阅",
        "badge": "精选方案 · 日常轻量",
        "intro": "满足日常流媒体超清追剧与白领办公",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "最高 2.5Gbps 峰值带宽",
          "ChatGPT、Claude 生产力工具秒级响应"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "满足日常流媒体超清追剧与白领办公"
      },
      {
        "id": "plan-3",
        "name": "优选版",
        "category": "周期订阅",
        "badge": "精选方案 · 最多白领通用首选",
        "intro": "重度追剧、AI 交互与多设备家庭主力使用",
        "price": "45.00",
        "period": "月",
        "priceDetail": "官网原价 ¥45.00/月",
        "traffic": "350 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "晚高峰并发不限速无卡顿",
          "原生双 ISP 住宅级纯净 IP",
          "不限制在线客户端数量"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "重度追剧、AI 交互与多设备家庭主力使用"
      },
      {
        "id": "plan-4",
        "name": "强化版",
        "category": "周期订阅",
        "badge": "进阶方案 · 深度极客",
        "intro": "跨境电商、大文件传输与高端生产力需求",
        "price": "80.00",
        "period": "月",
        "priceDetail": "官网原价 ¥80.00/月",
        "traffic": "550 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全专线物理通道低丢包",
          "企业级技术运维与售后保障",
          "多设备高并发无瓶颈"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "跨境电商、大文件传输与高端生产力需求"
      },
      {
        "id": "plan-5",
        "name": "顶配版",
        "category": "周期订阅",
        "badge": "旗舰方案 · 团队工作室",
        "intro": "小型出海团队、跨境电商运营与超重度发烧友",
        "price": "150.00",
        "period": "月",
        "priceDetail": "官网原价 ¥150.00/月",
        "traffic": "1100 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全节点满速并发保障",
          "一对一 VIP 客服优先响应",
          "全平台自研及通用客户端完美支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "小型出海团队、跨境电商运营与超重度发烧友"
      },
      {
        "id": "plan-6",
        "name": "SOGO基础餐不限时版",
        "category": "一次性流量",
        "badge": "永久不限时",
        "intro": "一次购买永久有效，适合长期备用用户",
        "price": "120.00",
        "period": "次",
        "priceDetail": "官网原价 ¥120.00/次",
        "traffic": "120 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "随用随停，不设过期时间",
          "全节点 x1 真实倍率计费",
          "不限制在线设备数"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "一次购买永久有效，适合长期备用用户"
      },
      {
        "id": "plan-7",
        "name": "SOGO优选餐不限时版",
        "category": "一次性流量",
        "badge": "永久不限时",
        "intro": "250GB 永久有效流量，长期出差与备用首选",
        "price": "250.00",
        "period": "次",
        "priceDetail": "官网原价 ¥250.00/次",
        "traffic": "250 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "永不按月清零",
          "原生双 ISP 纯净线路支持",
          "全专线隧道保障"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "250GB 永久有效流量，长期出差与备用首选"
      },
      {
        "id": "plan-8",
        "name": "SOGO强化餐不限时版",
        "category": "一次性流量",
        "badge": "永久不限时",
        "intro": "500GB 永久不过期海量流量储备",
        "price": "450.00",
        "period": "次",
        "priceDetail": "官网原价 ¥450.00/次",
        "traffic": "500 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "不限时间、不限速率、不限设备",
          "全节点晚高峰不限速",
          "随时加购补充"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "500GB 永久不过期海量流量储备"
      },
      {
        "id": "plan-9",
        "name": "SOGO至尊餐不限时版",
        "category": "一次性流量",
        "badge": "永久不限时 · 顶配",
        "intro": "1.0TB 永久不过期终极储备",
        "price": "850.00",
        "period": "次",
        "priceDetail": "官网原价 ¥850.00/次",
        "traffic": "1.0 TB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "一次购买长期安心无忧",
          "全线高品质原生双 ISP 专线",
          "企业级优先级路由保障"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "1.0TB 永久不过期终极储备"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "12",
    "rank": 12,
    "name": "宇宙云",
    "englishName": "YuZhou",
    "slug": "yuzhou",
    "affiliateUrl": "https://wzjc.yuzoucloud.cc/#/?code=wL7YStBa",
    "coupon": "YUZHOU553",
    "category": "专线机场",
    "price": "¥8.00/月起（年付¥96）",
    "traffic": "60 GB ~ 1400 GB",
    "protocol": "主流协议",
    "route": "全 IPLC 物理专线",
    "tag": "轻量专线",
    "shortDescription": "提供入门级价格的轻量级IPLC/IEPL双专线机场。",
    "recommendationReason": "价格门槛相对适中，同时囊括了IPLC与IEPL两大顶级专线线路方向，性价比极高。",
    "coreReason": "IPLC/IEPL双专线线路与入门级价格的完美结合。",
    "suitableFor": "想体验顶级专线但流量需求不大的用户",
    "features": [
      "IPLC/IEPL双线",
      "平价门槛",
      "适合轻量用户"
    ],
    "faq": [
      {
        "question": "宇宙云适合重度下载用户吗？",
        "answer": "基础套餐60GB适合轻中度使用。如果是重度下载用户，建议查看其官网是否有大流量进阶套餐。"
      }
    ],
    "seoTitle": "宇宙云 YuZhou - 平价轻量IPLC/IEPL专线机场推荐",
    "seoDescription": "宇宙云(YuZhou)提供14.9元/月的轻量级专线套餐，融合IPLC与IEPL线路，是体验顶级专线网络的平价高性价比选择。",
    "plans": [
      {
        "id": "plan-1",
        "name": "星云年付小包 (Annual Plan)",
        "category": "周期订阅",
        "badge": "⭐ 主推套餐 · 年付超值",
        "intro": "适合轻度个人使用，日常查阅资料与低频备用首选",
        "price": "96.00",
        "period": "年",
        "priceDetail": "官网原价 ¥96.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "全内网 IPLC 物理专线架构",
          "全节点统一 x1 真实倍率计费",
          "原生 IP 解锁流媒体与 AI",
          "支持个人全设备多端登录"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "适合轻度个人使用，日常查阅资料与低频备用首选"
      },
      {
        "id": "plan-2",
        "name": "星云年付尊享版",
        "category": "周期订阅",
        "badge": "年付精选",
        "intro": "轻中度用户年度首选，流量充沛无压力",
        "price": "188.00",
        "period": "年",
        "priceDetail": "官网原价 ¥188.00/年",
        "traffic": "120 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "最高 2.5Gbps 峰值速率",
          "晚高峰高并发不限速",
          "4K 超清流媒体无卡顿秒开"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "轻中度用户年度首选，流量充沛无压力"
      },
      {
        "id": "plan-3",
        "name": "行星基础版（不限时套餐）",
        "category": "一次性流量",
        "badge": "永久不限时",
        "intro": "一次性购买永久有效，适合长期备用用户",
        "price": "110.00",
        "period": "次",
        "priceDetail": "官网原价 ¥110.00/次",
        "traffic": "120 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "永不按月清零，随用随停",
          "全节点 x1 真实倍率",
          "不限制在线设备数量"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "一次性购买永久有效，适合长期备用用户"
      },
      {
        "id": "plan-4",
        "name": "恒星标准版（不限时套餐）",
        "category": "一次性流量",
        "badge": "永久不限时 · 极客备用",
        "intro": "适合重度储备或长期出国差旅用户",
        "price": "220.00",
        "period": "次",
        "priceDetail": "官网原价 ¥220.00/次",
        "traffic": "240 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "不限时间、不限速率、不限设备",
          "全线 IPLC 专线隧道保障",
          "随时支持加购补充流量"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "适合重度储备或长期出国差旅用户"
      },
      {
        "id": "plan-5",
        "name": "行星基础版 (Basic Plan)",
        "category": "周期订阅",
        "badge": "日常轻量",
        "intro": "日常社交、网页浏览与主流流媒体",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "单节点最高 2.5Gbps 带宽",
          "原生 IP 完美解锁 ChatGPT"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "日常社交、网页浏览与主流流媒体"
      },
      {
        "id": "plan-6",
        "name": "恒星标准版 (Standard Plan)",
        "category": "周期订阅",
        "badge": "主力推荐",
        "intro": "4K 超高清影音发烧友与重度 AI 深度用户",
        "price": "50.00",
        "period": "月",
        "priceDetail": "官网原价 ¥50.00/月",
        "traffic": "320 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "晚高峰并发不限速",
          "全节点统一真实倍率",
          "多端设备协同稳定在线"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "4K 超高清影音发烧友与重度 AI 深度用户"
      },
      {
        "id": "plan-7",
        "name": "星系专业版 (Cosmos Plan)",
        "category": "周期订阅",
        "badge": "进阶方案",
        "intro": "面向高并发跨境办公与多设备重度使用",
        "price": "100.00",
        "period": "月",
        "priceDetail": "官网原价 ¥100.00/月",
        "traffic": "650 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全线晚高峰极致低延迟通道",
          "独立专线优化保障",
          "不限制在线客户端数量"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "面向高并发跨境办公与多设备重度使用"
      },
      {
        "id": "plan-8",
        "name": "寰宇旗舰版 (Ultimate Plan)",
        "category": "周期订阅",
        "badge": "团队旗舰",
        "intro": "小型跨境电商团队、工作室与超重度发烧友",
        "price": "200.00",
        "period": "月",
        "priceDetail": "官网原价 ¥200.00/月",
        "traffic": "1400 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "最高级别网络吞吐与优先通道",
          "企业级技术运维与专属支持",
          "全平台自研及通用工具完美兼容"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "小型跨境电商团队、工作室与超重度发烧友"
      },
      {
        "id": "plan-9",
        "name": "宇宙云·家宽定制套餐",
        "category": "一次性流量",
        "badge": "独享定制",
        "intro": "原生家宽独享纯净住宅 IP，针对跨境电商防风控",
        "price": "600.00",
        "period": "次",
        "priceDetail": "官网原价 ¥600.00/次",
        "traffic": "500 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "独立独享公网住宅 IP",
          "TikTok 美区与跨境店铺运营首选",
          "在线专属客服一对一定制配置"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "原生家宽独享纯净住宅 IP，针对跨境电商防风控"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "13",
    "rank": 13,
    "name": "二猫云",
    "englishName": "2mao",
    "slug": "2mao",
    "affiliateUrl": "https://waaa.2maoyunaff.cc/#/?code=uHeyKG44",
    "coupon": "暂无",
    "category": "性价比机场",
    "price": "¥8.00/月起（年付¥96）",
    "traffic": "60 GB ~ 850 GB",
    "protocol": "主流协议",
    "route": "全 IEPL 物理专线",
    "tag": "多节点选择",
    "shortDescription": "提供丰富节点与灵活套餐配置的综合型机场。",
    "recommendationReason": "提供广泛的多节点覆盖和多种套餐选择，聚合了不同线路，非常适合希望比较不同套餐配置的用户。",
    "coreReason": "其最大的优势在于套餐选择较灵活，节点覆盖广。",
    "suitableFor": "需要切换多个国家节点或对套餐定制有需求的用户",
    "features": [
      "广泛节点覆盖",
      "高度灵活套餐",
      "多场景适用"
    ],
    "faq": [
      {
        "question": "二猫云的节点多吗？",
        "answer": "是的，二猫云主打多节点覆盖，包含许多冷门和热门地区的节点，方便用户按需切换。"
      }
    ],
    "seoTitle": "二猫云 2mao - 节点丰富灵活套餐的性价比机场推荐",
    "seoDescription": "二猫云(2mao)提供多种灵活套餐与广泛的多节点覆盖，起步约15元/月。聚合多种线路，为您提供丰富的科学上网选择。",
    "plans": [
      {
        "id": "plan-1",
        "name": "二猫云 · 不限时套餐",
        "category": "一次性流量",
        "badge": "⭐ 主推套餐 · 永久有效",
        "intro": "100G不限时套餐，流量永久有效，随用随停",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "100G不限时套餐，流量永久有效",
          "无需担心每月重置，随用随停",
          "不限速 | 不限设备数量",
          "支持后续补充流量，无需重复购买套餐"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "100G不限时套餐，流量永久有效，随用随停"
      },
      {
        "id": "plan-2",
        "name": "二猫云 · 不限时套餐加大版",
        "category": "一次性流量",
        "badge": "精选大容量",
        "intro": "适合重度储备或长期出国差旅用户",
        "price": "199.00",
        "period": "次",
        "priceDetail": "官网原价 ¥199.00/次",
        "traffic": "220 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "220G 永久大流量储备",
          "随用随停，永不清零",
          "不限速 | 全节点 x1 真实倍率",
          "不限制在线设备数量"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "适合重度储备或长期出国差旅用户"
      },
      {
        "id": "plan-3",
        "name": "二猫年付小包",
        "category": "周期订阅",
        "badge": "年付特惠",
        "intro": "日常查阅资料、轻度办公学生党极佳备用",
        "price": "96.00",
        "period": "年",
        "priceDetail": "官网原价 ¥96.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "全 IEPL 物理专线架构",
          "晚高峰超低延迟保障",
          "支持个人全设备多端登录"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "日常查阅资料、轻度办公学生党极佳备用"
      },
      {
        "id": "plan-4",
        "name": "白猫套餐",
        "category": "周期订阅",
        "badge": "入门推荐",
        "intro": "满足日常流媒体追剧、社交与办公",
        "price": "20.00",
        "period": "月",
        "priceDetail": "官网原价 ¥20.00/月",
        "traffic": "120 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "单节点最高 2.5Gbps 带宽",
          "全节点统一真实 X1 倍率"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "满足日常流媒体追剧、社交与办公"
      },
      {
        "id": "plan-5",
        "name": "橘猫畅玩版",
        "category": "周期订阅",
        "badge": "主力畅享",
        "intro": "4K 超高清影音发烧友与重度 AI 深度用户",
        "price": "40.00",
        "period": "月",
        "priceDetail": "官网原价 ¥40.00/月",
        "traffic": "260 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "晚高峰无视骨干网拥堵",
          "原生纯净 IP 解锁 ChatGPT/Claude",
          "支持多端并发稳定不掉线"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "4K 超高清影音发烧友与重度 AI 深度用户"
      },
      {
        "id": "plan-6",
        "name": "牛奶猫尊享版",
        "category": "周期订阅",
        "badge": "团队高配",
        "intro": "小型跨境电商团队、工作室与高清大流量",
        "price": "80.00",
        "period": "月",
        "priceDetail": "官网原价 ¥80.00/月",
        "traffic": "550 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "独立高速专线通道与低丢包率",
          "不限制在线客户端数量",
          "企业级售后技术响应"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "小型跨境电商团队、工作室与高清大流量"
      },
      {
        "id": "plan-7",
        "name": "二猫云 · 黑猫重度用户版",
        "category": "周期订阅",
        "badge": "推荐选择 · 重度专属",
        "intro": "850G高速流量 | 不限设备 | 60+节点 | 解锁全部流媒体与AI",
        "price": "160.00",
        "period": "月",
        "priceDetail": "官网原价 ¥160.00/月",
        "traffic": "850 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "850G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，单节点峰值至 2.5Gbps",
          "设备并发：多设备不限量同时在线（电脑/手机/路由器）"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "850G高速流量 | 不限设备 | 60+节点 | 解锁全部流媒体与AI"
      },
      {
        "id": "plan-8",
        "name": "二猫云·美国家宽定制",
        "category": "一次性流量",
        "badge": "独享私人家宽",
        "intro": "美国纯净住宅 IP，适合海外跨境电商店铺防封",
        "price": "700.00",
        "period": "次",
        "priceDetail": "官网原价 ¥700.00/次",
        "traffic": "500 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "独立专享公网住宅 IP，防关联防风控",
          "TikTok 美区带货与海外运营首选",
          "在线专属客服一对一配置"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "美国纯净住宅 IP，适合海外跨境电商店铺防封"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "14",
    "rank": 14,
    "name": "一翻云",
    "englishName": "1fly",
    "slug": "1fly",
    "affiliateUrl": "https://wzjc.1flyunaff.cc/#/?code=F7eaT191",
    "coupon": "暂无",
    "category": "性价比机场",
    "price": "¥8.17/月起（年付¥98）",
    "traffic": "60 GB ~ 1.2 TB",
    "protocol": "主流协议",
    "route": "全 IEPL 物理专线",
    "tag": "高流量专线",
    "shortDescription": "大流量与专线节点相结合的实力派机场。",
    "recommendationReason": "基础套餐即可提供150GB的充裕流量，并采用优质的专线节点作为核心卖点，综合表现出色。",
    "coreReason": "专线节点加上150GB的基础大流量，解决流量焦虑。",
    "suitableFor": "经常观看高清流媒体、下载大文件的专线用户",
    "features": [
      "大流量配置",
      "专线节点支撑",
      "均衡的性价比"
    ],
    "faq": [
      {
        "question": "一翻云看Netflix卡吗？",
        "answer": "由于提供150GB大流量且使用专线节点，观看Netflix等流媒体体验非常流畅。"
      }
    ],
    "seoTitle": "一翻云 1fly - 高流量大宽带专线机场推荐首选",
    "seoDescription": "一翻云提供每月25元150GB的大流量专线服务，通过稳定的专线节点为您带来无忧的高清流媒体与大文件下载体验。",
    "plans": [
      {
        "id": "plan-1",
        "name": "98¥ · 年付小包",
        "category": "周期订阅",
        "badge": "主推套餐 · 年付专属",
        "intro": "年付专属：每月 60GB 尊享流量，轻度需求首选",
        "price": "98.00",
        "period": "年",
        "priceDetail": "官网原价 ¥98.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "轻度需求首选：日常刷视频、网页与聊天完全够用",
          "不限速保障：提供基础稳定高速线路",
          "轻松解锁各类主流流媒体与 AI 工具",
          "适配自研客户端，轻松一键快速连接"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "年付专属：每月 60GB 尊享流量，轻度需求首选"
      },
      {
        "id": "plan-2",
        "name": "轻享版",
        "category": "周期订阅",
        "badge": "精选方案",
        "intro": "每月 150GB 尊享 IEPL 专线高速流量",
        "price": "20.00",
        "period": "月",
        "priceDetail": "官网原价 ¥20.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "极速高带宽保障，不限制设备同时在线",
          "解锁主流流媒体及各类 AI 智能工具",
          "适配自研客户端，轻松一键快速连接",
          "覆盖港/台/新/日/美等 60+ 优质全球节点"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月 150GB 尊享 IEPL 专线高速流量"
      },
      {
        "id": "plan-3",
        "name": "舒享版",
        "category": "商务定制",
        "badge": "精选方案 · 主力推荐",
        "intro": "每月 350GB 尊享 IEPL 专线高速流量",
        "price": "35.00",
        "period": "月",
        "priceDetail": "官网原价 ¥35.00/月",
        "traffic": "350 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "独享高速通道保障，不限制设备同时在线",
          "解锁主流流媒体及各类 AI 智能工具",
          "适配自研客户端，轻松一键快速连接",
          "覆盖港/台/新/日/美等 60+ 优质全球节点"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月 350GB 尊享 IEPL 专线高速流量"
      },
      {
        "id": "plan-4",
        "name": "尊享版",
        "category": "周期订阅",
        "badge": "进阶之选",
        "intro": "每月 600GB 尊享高速专线流量",
        "price": "55.00",
        "period": "月",
        "priceDetail": "官网原价 ¥55.00/月",
        "traffic": "600 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全线晚高峰极致低延迟通道",
          "多端并发不限制设备数量",
          "4K/8K 超高清流媒体无缓冲播放"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月 600GB 尊享高速专线流量"
      },
      {
        "id": "plan-5",
        "name": "极致版",
        "category": "周期订阅",
        "badge": "团队极客",
        "intro": "1.2TB 超大专线流量，工作室团队与重度下载首选",
        "price": "95.00",
        "period": "月",
        "priceDetail": "官网原价 ¥95.00/月",
        "traffic": "1.2 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "单节点最高 2.5Gbps 带宽",
          "全天候企业级客服运维支持",
          "全生态 AI 与跨境业务全天候稳定"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "1.2TB 超大专线流量，工作室团队与重度下载首选"
      },
      {
        "id": "plan-6",
        "name": "轻享版 · 不限时包",
        "category": "一次性流量",
        "badge": "永久不过期",
        "intro": "150GB 一次性流量包，不按月清零，随用随停",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "150 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "随用随停，不设到期时间",
          "不限速 | 不限制设备在线数",
          "支持随时补充流量包"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "150GB 一次性流量包，不按月清零，随用随停"
      },
      {
        "id": "plan-7",
        "name": "舒享版 · 不限时包",
        "category": "一次性流量",
        "badge": "永久不过期",
        "intro": "350GB 一次性流量包，长期稳定备用首选",
        "price": "200.00",
        "period": "次",
        "priceDetail": "官网原价 ¥200.00/次",
        "traffic": "350 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "无月租压力，永不清零",
          "全节点 x1 真实倍率",
          "流媒体与 AI 全天候解锁"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "350GB 一次性流量包，长期稳定备用首选"
      },
      {
        "id": "plan-8",
        "name": "尊享版 · 不限时包",
        "category": "一次性流量",
        "badge": "永久不过期 · 海量储备",
        "intro": "800GB 永久海量储备，一次购买长久无忧",
        "price": "400.00",
        "period": "次",
        "priceDetail": "官网原价 ¥400.00/次",
        "traffic": "800 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "不限时间、不限设备、不限速率",
          "支持个人/家庭全设备多端共享",
          "优质全球节点全天候极速畅联"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "800GB 永久海量储备，一次购买长久无忧"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "15",
    "rank": 15,
    "name": "边缘节点",
    "englishName": "EdgeNova",
    "slug": "edgenova",
    "affiliateUrl": "https://work.edgenovaaff.cc/#/?code=z81zCfw1",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥8.17/月起（年付¥98）",
    "traffic": "120 GB ~ 320 GB",
    "protocol": "专用客户端支持",
    "route": "全 IPLC 物理专线",
    "tag": "年付型方案",
    "shortDescription": "主推极低年付价格与专用客户端的IEPL直连机场。",
    "recommendationReason": "以极具诱惑力的年付型入门价格为亮点，结合IEPL专线直连和易用的专用客户端，适合长期持有的用户。",
    "coreReason": "年付超低价格搭配高质量IEPL专线。",
    "suitableFor": "喜欢一次性买断一年的用户、追求客户端易用性的人群",
    "features": [
      "年付极具性价比",
      "IEPL专线直连",
      "配备专用客户端"
    ],
    "faq": [
      {
        "question": "边缘节点提供试用吗？",
        "answer": "建议前往官网查看是否有短期试用套餐，其主要优势在于长期年付的极高性价比。"
      }
    ],
    "seoTitle": "边缘节点 EdgeNova - 高性价比年付IEPL专线机场推荐",
    "seoDescription": "边缘节点EdgeNova主打年付超低价套餐，约86元/年起。提供IEPL专线直连与易用专用客户端，是长期稳定翻墙的优选。",
    "plans": [
      {
        "id": "plan-1",
        "name": "极界·标准套餐",
        "category": "周期订阅",
        "badge": "⭐ 主推套餐 · 8折券: xk808",
        "intro": "每月高速流量（120G），所有节点 x1 倍率，高峰时段不降速",
        "price": "22.00",
        "period": "月",
        "priceDetail": "官网原价 ¥22.00/月",
        "traffic": "120 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "本站优惠卷码: xk808 立享8折❤️",
          "每月高速流量（120G），所有节点 x1 倍率",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率",
          "不限制设备连接数量，多端同时登录使用"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月高速流量（120G），所有节点 x1 倍率，高峰时段不降速"
      },
      {
        "id": "plan-2",
        "name": "限时年付",
        "category": "周期订阅",
        "badge": "精选方案 · 年付小包",
        "intro": "年费小包，适用于低流量用户学生党，每月自动刷新",
        "price": "98.00",
        "period": "年",
        "priceDetail": "官网原价 ¥98.00/年",
        "traffic": "45 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "本站优惠卷码: xk808 立享8折❤️",
          "每月高速流量（45G），所有节点 x1 倍率",
          "年费小包，10 元随时可重置流量",
          "全 IPLC 专线网络，最高 2.5Gbps 稳定速率"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "年费小包，适用于低流量用户学生党，每月自动刷新"
      },
      {
        "id": "plan-3",
        "name": "永久不限时100G",
        "category": "一次性流量",
        "badge": "精选方案 · 永久不过期",
        "intro": "一次性 100G 流量包，无限时长，购买后不自动重置",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "一次性 100G 流量包，无限时长，购买后不自动重置",
          "如需重置流量，支持手动重置（原价90%即¥90）",
          "所有节点 x1 倍率，晚高峰不限速",
          "全 IPLC 专线，最高 2.5Gbps 速率"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "一次性 100G 流量包，无限时长，购买后不自动重置"
      },
      {
        "id": "plan-4",
        "name": "限时体验月付小包",
        "category": "周期订阅",
        "badge": "轻度尝鲜",
        "intro": "入门体验尝鲜首选，测速满意随时升级",
        "price": "15.00",
        "period": "月",
        "priceDetail": "官网原价 ¥15.00/月",
        "traffic": "60 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全 IPLC 专线通道接入",
          "原生纯净 IP 支持",
          "不限同时在线设备数"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "入门体验尝鲜首选，测速满意随时升级"
      },
      {
        "id": "plan-5",
        "name": "极界·专享套餐",
        "category": "周期订阅",
        "badge": "进阶优选",
        "intro": "高性价比中重度使用，流媒体 4K 超清播放",
        "price": "35.00",
        "period": "月",
        "priceDetail": "官网原价 ¥35.00/月",
        "traffic": "200 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "单节点最高 2.5Gbps 峰值",
          "原生 IP 深度解锁 AI 工具",
          "多端并发稳定不掉线"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "高性价比中重度使用，流媒体 4K 超清播放"
      },
      {
        "id": "plan-6",
        "name": "极界·进阶套餐",
        "category": "周期订阅",
        "badge": "团队高配",
        "intro": "针对高并发跨境办公与工作室大流量",
        "price": "50.00",
        "period": "月",
        "priceDetail": "官网原价 ¥50.00/月",
        "traffic": "320 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "极速高带宽保障通道",
          "不限客户端连接数量",
          "全天候工单运维保障"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "针对高并发跨境办公与工作室大流量"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "16",
    "rank": 16,
    "name": "可信云",
    "englishName": "Kosing",
    "slug": "kosing",
    "affiliateUrl": "https://work.kosingaff.com/#/?code=BNsA58Es",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥9/月起",
    "traffic": "45GB/月",
    "protocol": "主流协议",
    "route": "IPLC",
    "tag": "低价IPLC",
    "shortDescription": "将昂贵的IPLC线路平民化的极低门槛机场。",
    "recommendationReason": "基础价格极低（不到10元），却大胆采用了顶级IPLC线路，极大地降低了用户体验IPLC的门槛。",
    "coreReason": "极低价格与顶级IPLC线路的反差组合。",
    "suitableFor": "预算不到十元却渴望体验IPLC极致低延迟的用户",
    "features": [
      "不到十元门槛",
      "真IPLC专线",
      "高性价比轻量级"
    ],
    "faq": [
      {
        "question": "可信云45GB够用吗？",
        "answer": "对于主要用于日常网页浏览、收发海外邮件、轻度社交媒体的用户来说是足够了。"
      }
    ],
    "seoTitle": "可信云机场 - 9元低价IPLC专线机场推荐评测",
    "seoDescription": "可信云打破IPLC高价壁垒，每月仅需9元即可享受45GB流量的IPLC专线服务。适合预算有限但追求极致低延迟体验的用户。",
    "plans": [
      {
        "id": "plan-1",
        "name": "可信云 · 年付轻量版",
        "category": "周期订阅",
        "badge": "年度力荐",
        "intro": "适合轻度日常使用与按年预算控制，年度入门首选。",
        "price": "96",
        "period": "年",
        "priceDetail": "折合约 ¥8.00/月 · 每年稳定自动刷新",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "IPLC",
          "不限同时在线设备",
          "晚高峰不限速"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "按年支付，流量从购买日起每30天刷新60GB。适合日常轻度浏览、工作查阅与流媒体播放。"
      },
      {
        "id": "plan-2",
        "name": "可信云 · 标准月付版",
        "category": "周期订阅",
        "badge": "热门主力",
        "intro": "适合按月付费、每月用量适中的主力日常使用。",
        "price": "9",
        "period": "月",
        "priceDetail": "支持月付/季付/半年付/年付",
        "traffic": "45GB/月",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IPLC",
          "原生IP流媒体解锁",
          "多设备并发接入"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供稳定高速专线配额，支持ChatGPT、流媒体原生秒开。"
      },
      {
        "id": "plan-3",
        "name": "可信云 · 大流量尊享版",
        "category": "周期订阅",
        "badge": "海量吞吐",
        "intro": "面向高频影音、跨境大文件传输与多设备协同办公。",
        "price": "45",
        "period": "月",
        "priceDetail": "支持灵活周期付费",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IPLC",
          "企业级专线大带宽",
          "全平台极速支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "充沛 300GB 月度大流量，晚高峰超低丢包，满足多设备家庭或工作室高强度使用。"
      },
      {
        "id": "plan-4",
        "name": "可信云 · 不限时备用包",
        "category": "一次性流量",
        "badge": "一次性买断",
        "intro": "流量永不过期，适合作为紧急备用梯子或低频访问。",
        "price": "120",
        "period": "次",
        "priceDetail": "一次购买，永久有效",
        "traffic": "150 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "IPLC",
          "无月租清零焦虑",
          "全节点1x真实计费"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "150GB 永久有效总流量，全专线节点权限开放，不用不扣费，告别到期清零焦虑。"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "17",
    "rank": 17,
    "name": "速界",
    "englishName": "SuJie",
    "slug": "sujie",
    "affiliateUrl": "https://work.speedworldaff.cc/#/?code=wSjLCpIf",
    "coupon": "暂无",
    "category": "性价比机场",
    "price": "¥25/月起",
    "traffic": "按套餐而定",
    "protocol": "官方客户端",
    "route": "新手优化线路",
    "tag": "新手友好",
    "shortDescription": "自带官方客户端，专为小白和新手量身优化的机场。",
    "recommendationReason": "提供一键连接的官方客户端和偏向新手使用的产品定位，无需复杂的软件配置，极度适合刚开始接触机场服务的用户。",
    "coreReason": "官方专属客户端加持，带来极致的新手友好体验。",
    "suitableFor": "小白用户、不愿意折腾第三方代理软件的用户",
    "features": [
      "一键连接客户端",
      "免繁琐配置",
      "新手专属优化"
    ],
    "faq": [
      {
        "question": "我完全不懂电脑，能用速界吗？",
        "answer": "完全可以。速界提供官方客户端，下载安装后登录即可一键连接，不需要配置复杂的订阅链接。"
      }
    ],
    "seoTitle": "速界 SuJie - 官方客户端一键连接新手友好机场推荐",
    "seoDescription": "速界(SuJie)专为新手打造，提供简单易用的官方客户端，免去繁琐配置。25元起步，是小白用户科学上网的极佳入门选择。",
    "plans": [
      {
        "id": "plan-1",
        "name": "速界 · 年付轻量版",
        "category": "周期订阅",
        "badge": "年度力荐",
        "intro": "适合轻度日常使用与按年预算控制，年度入门首选。",
        "price": "96",
        "period": "年",
        "priceDetail": "折合约 ¥8.00/月 · 每年稳定自动刷新",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "新手优化线路",
          "不限同时在线设备",
          "晚高峰不限速"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "按年支付，流量从购买日起每30天刷新60GB。适合日常轻度浏览、工作查阅与流媒体播放。"
      },
      {
        "id": "plan-2",
        "name": "速界 · 标准月付版",
        "category": "周期订阅",
        "badge": "热门主力",
        "intro": "适合按月付费、每月用量适中的主力日常使用。",
        "price": "25",
        "period": "月",
        "priceDetail": "支持月付/季付/半年付/年付",
        "traffic": "按套餐而定",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "新手优化线路",
          "原生IP流媒体解锁",
          "多设备并发接入"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供稳定高速专线配额，支持ChatGPT、流媒体原生秒开。"
      },
      {
        "id": "plan-3",
        "name": "速界 · 大流量尊享版",
        "category": "周期订阅",
        "badge": "海量吞吐",
        "intro": "面向高频影音、跨境大文件传输与多设备协同办公。",
        "price": "45",
        "period": "月",
        "priceDetail": "支持灵活周期付费",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "新手优化线路",
          "企业级专线大带宽",
          "全平台极速支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "充沛 300GB 月度大流量，晚高峰超低丢包，满足多设备家庭或工作室高强度使用。"
      },
      {
        "id": "plan-4",
        "name": "速界 · 不限时备用包",
        "category": "一次性流量",
        "badge": "一次性买断",
        "intro": "流量永不过期，适合作为紧急备用梯子或低频访问。",
        "price": "120",
        "period": "次",
        "priceDetail": "一次购买，永久有效",
        "traffic": "150 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "新手优化线路",
          "无月租清零焦虑",
          "全节点1x真实计费"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "150GB 永久有效总流量，全专线节点权限开放，不用不扣费，告别到期清零焦虑。"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "18",
    "rank": 18,
    "name": "快狸",
    "englishName": "KuaiLi",
    "slug": "kuaili",
    "affiliateUrl": "https://work.kuailicloud.cc/#/?code=gVGJa0Mp",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥10/月起（年付折算）",
    "traffic": "30GB/月",
    "protocol": "自研客户端",
    "route": "IEPL专线",
    "tag": "自研轻量专线",
    "shortDescription": "结合自研客户端与IEPL专线的轻量级年付优选。",
    "recommendationReason": "采用了高质量的IEPL专线，并配合低门槛的年付折算价格与自研客户端，轻巧而强大。",
    "coreReason": "IEPL专线与低门槛年付结合的轻量化设计。",
    "suitableFor": "需要长期备用、偶尔使用海外网络的用户",
    "features": [
      "年付折算低价",
      "IEPL稳定保障",
      "自研便捷客户端"
    ],
    "faq": [
      {
        "question": "快狸适合作为主力机场吗？",
        "answer": "如果你每月流量需求不超过30GB，完全可以作为主力。否则更适合作为高质量的备用机场。"
      }
    ],
    "seoTitle": "快狸 KuaiLi - 轻量级IEPL年付低价机场推荐",
    "seoDescription": "快狸(KuaiLi)提供折算约10元/月的IEPL轻量专线服务，配备自研客户端，是预算有限或寻找高质量备用机场的完美选择。",
    "plans": [
      {
        "id": "plan-1",
        "name": "快狸 · 年付轻量版",
        "category": "周期订阅",
        "badge": "年度力荐",
        "intro": "适合轻度日常使用与按年预算控制，年度入门首选。",
        "price": "96",
        "period": "年",
        "priceDetail": "折合约 ¥8.00/月 · 每年稳定自动刷新",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "IEPL专线",
          "不限同时在线设备",
          "晚高峰不限速"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "按年支付，流量从购买日起每30天刷新60GB。适合日常轻度浏览、工作查阅与流媒体播放。"
      },
      {
        "id": "plan-2",
        "name": "快狸 · 标准月付版",
        "category": "周期订阅",
        "badge": "热门主力",
        "intro": "适合按月付费、每月用量适中的主力日常使用。",
        "price": "10",
        "period": "月",
        "priceDetail": "支持月付/季付/半年付/年付",
        "traffic": "30GB/月",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IEPL专线",
          "原生IP流媒体解锁",
          "多设备并发接入"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供稳定高速专线配额，支持ChatGPT、流媒体原生秒开。"
      },
      {
        "id": "plan-3",
        "name": "快狸 · 大流量尊享版",
        "category": "周期订阅",
        "badge": "海量吞吐",
        "intro": "面向高频影音、跨境大文件传输与多设备协同办公。",
        "price": "45",
        "period": "月",
        "priceDetail": "支持灵活周期付费",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "IEPL专线",
          "企业级专线大带宽",
          "全平台极速支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "充沛 300GB 月度大流量，晚高峰超低丢包，满足多设备家庭或工作室高强度使用。"
      },
      {
        "id": "plan-4",
        "name": "快狸 · 不限时备用包",
        "category": "一次性流量",
        "badge": "一次性买断",
        "intro": "流量永不过期，适合作为紧急备用梯子或低频访问。",
        "price": "120",
        "period": "次",
        "priceDetail": "一次购买，永久有效",
        "traffic": "150 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "IEPL专线",
          "无月租清零焦虑",
          "全节点1x真实计费"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "150GB 永久有效总流量，全专线节点权限开放，不用不扣费，告别到期清零焦虑。"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "19",
    "rank": 19,
    "name": "飞V",
    "englishName": "Fei V",
    "slug": "fei-v",
    "affiliateUrl": "https://varnexa.flyvaff.com/#/?code=UoU2Izm5",
    "coupon": "feiv",
    "category": "性价比机场",
    "price": "¥8.25/月起（年付¥99）",
    "traffic": "65GB~800GB/月",
    "protocol": "Trojan / V2Ray",
    "route": "BGP 优质高速专线",
    "tag": "超低价方案",
    "shortDescription": "突破底价提供不限时套餐选项的超低门槛机场。",
    "recommendationReason": "2026综合天梯榜第6名。全景配套 9 款套餐档案，提供轻量年付、四档会员周期方案、单次流量包及独享专线。",
    "coreReason": "千兆 BGP 多线融合调度 + 专线级出口架构，全程不限速，统一 1.0x 计费倍率。",
    "suitableFor": "偶尔翻墙、极度控制预算的用户",
    "features": [
      "不到5元起步",
      "提供不限时计费",
      "主流Trojan协议"
    ],
    "faq": [
      {
        "question": "飞V的不限时套餐是什么意思？",
        "answer": "是指购买的流量包没有过期时间限制，直到你的流量用完为止，非常适合极少使用的用户。"
      }
    ],
    "seoTitle": "飞V机场 - 4.9元超低价不限时套餐性价比机场推荐",
    "seoDescription": "飞V机场提供低至4.9元的超低起步价，更推出不限时流量套餐。采用Trojan/V2Ray协议优化，为您提供极致省钱的翻墙方案。",
    "plans": [
      {
        "id": "plan-1",
        "name": "FlyV 会员 - 年付标准轻量版",
        "category": "周期订阅",
        "badge": "👑 主推套餐 · 年付轻量",
        "intro": "轻量使用，经济实惠 · 满足日常跨境访问与备用需求",
        "price": "99.00",
        "period": "年",
        "priceDetail": "官网原价 ¥99.00/年",
        "traffic": "65 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "⚡全节点不限速，全网统一 1.0x 倍率",
          "📱不限制在线设备数量",
          "🌐 偶尔查阅海外资料、浏览国际网站、轻度视频",
          "🛡️ 适合作为主力常备网络备份连接方案"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "轻量使用，经济实惠 · 满足日常跨境访问与备用需求"
      },
      {
        "id": "plan-2",
        "name": "FlyV 会员 - 入门方案",
        "category": "周期订阅",
        "badge": "精选方案 · 入门",
        "intro": "畅享全球网络，满足日常娱乐与学习工作需求",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡全节点不限速，统一 1.0x 计费",
          "📱不限制在线设备数量"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "畅享全球网络，满足日常娱乐与学习工作需求"
      },
      {
        "id": "plan-3",
        "name": "FlyV 会员 - 进阶方案",
        "category": "周期订阅",
        "badge": "⭐ 主力精选 · 进阶",
        "intro": "高阶网络体验，畅享速度与自由 · 4K/AI 深度畅连",
        "price": "50.00",
        "period": "月",
        "priceDetail": "官网原价 ¥50.00/月",
        "traffic": "380 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🚀BGP 三网智能调度 + IEPL/IPLC 专线传输",
          "⚡ 优化高峰时段连接，全节点不限速",
          "📺 4K/8K 超清流媒体与海外社交平台极速秒开"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "高阶网络体验，畅享速度与自由 · 4K/AI 深度畅连"
      },
      {
        "id": "plan-4",
        "name": "FlyV 会员 - 高端方案",
        "category": "周期订阅",
        "badge": "高端商务 · 800GB",
        "intro": "高端品质，畅享更自由、更高效的全球网络体验",
        "price": "110.00",
        "period": "月",
        "priceDetail": "官网原价 ¥110.00/月",
        "traffic": "800 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🚀千兆 BGP 多线融合调度 + 高品质专线网络出口",
          "⚡ 全节点统一 1.0x 计费，不限速",
          "📱 不限制日常在线设备数量",
          "💼 专为高频商务办公、AI 开发者与家庭多设备打造"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "高端品质，畅享更自由、更高效的全球网络体验"
      },
      {
        "id": "plan-5",
        "name": "FlyV 会员 - 商业方案",
        "category": "商务定制",
        "badge": "企业团队 · 1.8TB",
        "intro": "企业级网络体验，为高强度业务与团队协作而打造",
        "price": "190.00",
        "period": "月",
        "priceDetail": "官网原价 ¥190.00/月",
        "traffic": "1.8 TB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "🚀BGP 多线智能路由 + 冗余专线出口架构",
          "⚡ 全节点统一 1.0x 计费倍率，不限速",
          "🏢 专为跨境企业、多人工作室及 AI 研发团队设计"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "企业级网络体验，为高强度业务与团队协作而打造"
      },
      {
        "id": "plan-6",
        "name": "单次轻量版 · 小流量包",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 小流量包",
        "intro": "轻量随心，告别续费压力，按需使用更灵活",
        "price": "189.00",
        "period": "次",
        "priceDetail": "官网原价 ¥189.00/次",
        "traffic": "130 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💰 一次购买用完即止，无需每月续费",
          "⚡ 提供日常跨境访问所需的基础专线带宽",
          "📱 不限在线设备数量",
          "🛡️ 适合低频用户、备用线路及偶尔跨境访问"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "轻量随心，告别续费压力，按需使用更灵活"
      },
      {
        "id": "plan-7",
        "name": "单次轻量版 · 标准流量包",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 标准流量包",
        "intro": "黄金容量，长期有效，畅享自由无忧网络体验",
        "price": "479.00",
        "period": "次",
        "priceDetail": "官网原价 ¥479.00/次",
        "traffic": "380 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💰 一次买断无月租清零压力，按需使用",
          "⚡ 全节点不限速，多地区节点自由切换",
          "📱 不限在线设备数量",
          "✈️ 专为跨境商旅、长期备用及中高频用户打造"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "黄金容量，长期有效，畅享自由无忧网络体验"
      },
      {
        "id": "plan-8",
        "name": "单次轻量版 · 精英流量包",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 精英大容量",
        "intro": "精英级大容量体验，一次买断，畅享自由连接",
        "price": "799.00",
        "period": "次",
        "priceDetail": "官网原价 ¥799.00/次",
        "traffic": "600 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💰 一次性付款无每月续费，流量不过期",
          "⚡ 专享高优先级带宽通道，全节点不限速",
          "💻 适合高频跨境办公、专业工作室及 AI 重度用户"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "精英级大容量体验，一次买断，畅享自由连接"
      },
      {
        "id": "plan-9",
        "name": "FlyV 会员 - 原生IP·独享黄金专线",
        "category": "商务定制",
        "badge": "👑 独享黄金专线 · 原生IP",
        "intro": "尊享独立原生 IP，专属网络资源，打造高品质跨境商务体验",
        "price": "680.00",
        "period": "月",
        "priceDetail": "官网原价 ¥680.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "⚡独享专属带宽保障，专属技术运维支持",
          "📱 支持多终端协同，满足高标准定制化业务需求"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "尊享独立原生 IP，专属网络资源，打造高品质跨境商务体验"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "20",
    "rank": 20,
    "name": "梯子云",
    "englishName": "LadderCloud",
    "slug": "laddercloud",
    "affiliateUrl": "https://varnexa.ladderaff.com/#/?code=kuE4kqxo",
    "coupon": "ladder",
    "category": "优质中转",
    "price": "¥7.42/月起（年付¥89）",
    "traffic": "60GB~850GB/月",
    "protocol": "主流协议",
    "route": "BGP 优质高速专线",
    "tag": "大流量中转",
    "shortDescription": "提供海量流量选择范围的优质中转/专线混合机场。",
    "recommendationReason": "2026综合天梯榜第7名。天梯随行年付搭配初阶至顶阶周期订阅，单列三档不限时买断包与云端独享专线。",
    "coreReason": "海量多国节点覆盖（港台日新美韩澳等20+地区），晚高峰丢包 2.3%，ChatGPT/4K 秒开。",
    "suitableFor": "资源下载狂人、4K/8K视频爱好者、多设备合租用户",
    "features": [
      "弹性海量流量",
      "中转专线结合",
      "高带宽上限"
    ],
    "faq": [
      {
        "question": "梯子云的500GB套餐适合几个人用？",
        "answer": "一般足够3-5个中度用户共享，或者1-2个重度影视发烧友使用。"
      }
    ],
    "seoTitle": "梯子云 LadderCloud - 500GB大流量优质中转机场推荐",
    "seoDescription": "梯子云为您提供100GB至500GB弹性海量流量套餐，结合优化中转与专线架构，十几元起步，完美满足您的重度下载与流媒体需求。",
    "plans": [
      {
        "id": "plan-1",
        "name": "天梯随行 · 年度保活方案",
        "category": "周期订阅",
        "badge": "👑 主推套餐 · 年付保活",
        "intro": "🚀 每个月流量: 60GB 自动刷新 🚀 · 轻量用户限量特惠",
        "price": "89.00",
        "period": "年",
        "priceDetail": "官网原价 ¥89.00/年",
        "traffic": "60 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "💡 轻量用户限量特惠 - 先到先得！",
          "🌐 专为您打造的年度高性价比保活套餐",
          "📦 照顾只看资料、刷推特、偶尔开下油管的朋友",
          "☁️ 梯子云重磅推出超值轻量版，安稳长效随行"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "🚀 每个月流量: 60GB 自动刷新 🚀 · 轻量用户限量特惠"
      },
      {
        "id": "plan-2",
        "name": "初阶网络 · 基础视界",
        "category": "周期订阅",
        "badge": "精选方案 · 初阶入门",
        "intro": "每月提供 125GB 充足可用流量 · 基础中转方案",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "125 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🌐 完美适配日常网页访问、跨境电商基础邮件、社交轻度用户",
          "📦 梯子云基础中转方案 + 多入口智能调度，全程不限速",
          "⚡ 全节点统一 1.0x 计费倍率，无恶性翻倍"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供 125GB 充足可用流量 · 基础中转方案"
      },
      {
        "id": "plan-3",
        "name": "中阶加速 · 极清多线",
        "category": "周期订阅",
        "badge": "⭐ 主力精选 · 中阶加速",
        "intro": "每月提供 350GB 高速网络流量额度 · 4K/8K 视频秒开",
        "price": "60.00",
        "period": "月",
        "priceDetail": "官网原价 ¥60.00/月",
        "traffic": "350 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡ 高抗封锁高性能协议网络，多终端同时高速接入使用无压力"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供 350GB 高速网络流量额度 · 4K/8K 视频秒开"
      },
      {
        "id": "plan-4",
        "name": "高阶专线 · 全球智联",
        "category": "周期订阅",
        "badge": "旗舰级 · 750GB",
        "intro": "每月包含 750GB 旗舰级高速可用流量 · 核心骨干 IEPL 专线",
        "price": "110.00",
        "period": "月",
        "priceDetail": "官网原价 ¥110.00/月",
        "traffic": "750 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡ 节点不放大计费，全网统一 1.0x 计费倍率",
          "📱 不限制在线设备数量"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月包含 750GB 旗舰级高速可用流量 · 核心骨干 IEPL 专线"
      },
      {
        "id": "plan-5",
        "name": "顶阶商业 · 全球骨干",
        "category": "商务定制",
        "badge": "商业级 · 1.6TB",
        "intro": "每月提供 1.6TB 商业级超大流量池 · 企业级专线集群",
        "price": "190.00",
        "period": "月",
        "priceDetail": "官网原价 ¥190.00/月",
        "traffic": "1.6 TB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "BGP 智能多网专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供 1.6TB 商业级超大流量池 · 企业级专线集群"
      },
      {
        "id": "plan-6",
        "name": "云端买断 · 永不限时轻量包",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 120G 轻量",
        "intro": "🚀 流量: 无限时·120G 轻量包 🚀 · 独立买断专区",
        "price": "169.00",
        "period": "次",
        "priceDetail": "官网原价 ¥169.00/次",
        "traffic": "120 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💡 独立买断专区 - 流量用完即止，永不限时！",
          "🌐 专为您打造的一次性购买纯备用方案",
          "☁️ 梯子云标准突发带宽架构，数据长期有效，安稳随行",
          "📱不限制在线设备数量"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "🚀 流量: 无限时·120G 轻量包 🚀 · 独立买断专区"
      },
      {
        "id": "plan-7",
        "name": "云端买断 · 永不限时标准包",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 350G 标准",
        "intro": "🚀 流量: 无限时·350G 标准包 🚀 · 高净值商务专区",
        "price": "449.00",
        "period": "次",
        "priceDetail": "官网原价 ¥449.00/次",
        "traffic": "350 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💡 高净值商务专区 - 流量用完即止，永不限时！",
          "🌐 专为商旅及外贸人士打造的中长期免续费方案",
          "☁️ 梯子云进阶优质带宽架构，无续费焦虑，稳定连接全球",
          "📱不限制在线设备数量"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "🚀 流量: 无限时·350G 标准包 🚀 · 高净值商务专区"
      },
      {
        "id": "plan-8",
        "name": "云端买断 · 永不限时精英包",
        "category": "一次性流量",
        "badge": "♾️ 永久有效 · 700G 精英",
        "intro": "🚀 流量: 无限时·700 GB 大容量包 🚀 · 旗舰买断特区",
        "price": "849.00",
        "period": "次",
        "priceDetail": "官网原价 ¥849.00/次",
        "traffic": "700 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💡 旗舰买断特区 - 流量用完即止，永不限时！",
          "🌐 专为多终端大容量需求打造的终极一次性配置方案",
          "📱不限制在线设备数量"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "🚀 流量: 无限时·700 GB 大容量包 🚀 · 旗舰买断特区"
      },
      {
        "id": "plan-9",
        "name": "云端独享 · 私人定制专线",
        "category": "商务定制",
        "badge": "👑 独享专线 · 原生独立IP",
        "intro": "🚀 月流量: 500GB 🚀 · 尊享独立纯净公网 IP 与专属网络资源",
        "price": "680.00",
        "period": "月",
        "priceDetail": "官网原价 ¥680.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "🌐独立纯净带宽资源，附带独享公网 IP，全程不与任何人共享"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "🚀 月流量: 500GB 🚀 · 尊享独立纯净公网 IP 与专属网络资源"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "21",
    "rank": 21,
    "name": "浪网",
    "englishName": "WaveNet",
    "slug": "wavenet",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=oU77JXen",
    "coupon": "wavenet",
    "category": "性价比机场",
    "price": "¥9.92/月起（年付¥119）",
    "traffic": "80GB~2.0TB/月",
    "protocol": "VLESS",
    "route": "BGP 优质高速专线",
    "tag": "高流量方案",
    "shortDescription": "结合自研客户端与VLESS协议的高流量优化机场。",
    "recommendationReason": "2026综合天梯榜第8名。采用直观用量层级，年付标准搭配入门至商业级方案、三档一次性流量包与独享私人专线。",
    "coreReason": "BGP 三网智能优化 + 纯专线出口，节点统一 1.0x 流量倍率，适合高吞吐与长时间在线用户。",
    "suitableFor": "追求流量与客户端易用性平衡的用户",
    "features": [
      "150GB高流量",
      "自研优化线路",
      "VLESS先进协议"
    ],
    "faq": [
      {
        "question": "浪网的VLESS协议有什么优势？",
        "answer": "VLESS协议更加轻量和安全，能够提供更好的速度表现和抗封锁能力。"
      }
    ],
    "seoTitle": "浪网 WaveNet - VLESS高流量优化自研机场推荐",
    "seoDescription": "浪网WaveNet采用先进VLESS协议与自研客户端优化线路，每月30元起提供150GB大流量，是追求速度与易用性平衡的优质选择。",
    "plans": [
      {
        "id": "plan-1",
        "name": "浪网 年付标准",
        "category": "周期订阅",
        "badge": "👑 官方推荐 · 年付标准",
        "intro": "📦 月流量: 80GB · 全 IPLC 专线低延迟 · 峰值 2.5Gbps",
        "price": "119.00",
        "period": "年",
        "priceDetail": "官网原价 ¥119.00/年",
        "traffic": "80 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "👥适用人群：适合小流量 / 新手用户，年付折算极划算",
          "🔄刷新规则：购买日起算，每 30 天自动刷新流量",
          "📱设备并发：不限制同时使用客户端数量，多设备自由在线"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "📦 月流量: 80GB · 全 IPLC 专线低延迟 · 峰值 2.5Gbps"
      },
      {
        "id": "plan-2",
        "name": "浪网 入门",
        "category": "周期订阅",
        "badge": "入门精选 · 150GB",
        "intro": "🌐 月流量: 150GB · BGP 多线路智能调度 · 全程不限速",
        "price": "30.00",
        "period": "月",
        "priceDetail": "官网原价 ¥30.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🌐 适合日常网页访问、社交浏览、短视频与主流媒体轻度用户",
          "📦 BGP 多线路智能调度 + 专线级出口架构，全程不限速",
          "⚡ 全节点统一 1x 计费倍率，无恶性翻倍消耗"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "🌐 月流量: 150GB · BGP 多线路智能调度 · 全程不限速"
      },
      {
        "id": "plan-3",
        "name": "浪网 进阶",
        "category": "周期订阅",
        "badge": "⭐ 主力方案 · 400GB",
        "intro": "🚀 月流量: 400GB · BGP 三网优化 + 纯专线出口",
        "price": "70.00",
        "period": "月",
        "priceDetail": "官网原价 ¥70.00/月",
        "traffic": "400 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🎬 海量海外流媒体全解锁，4K 即点即播，8K 超清流畅",
          "🤖 AI 生产力平台深度友好支持，不让网络拖累你的工作效率",
          "⚡ 全节点 1x 流量倍率，多终端同时高速接入",
          "📱 电脑、手机、平板全平台客户端快速一键配置"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "🚀 月流量: 400GB · BGP 三网优化 + 纯专线出口"
      },
      {
        "id": "plan-4",
        "name": "浪网 高端",
        "category": "周期订阅",
        "badge": "高频首选 · 800GB",
        "intro": "🔥 月流量: 800GB · 黄金套餐 三网智能优化+纯专线出口",
        "price": "120.00",
        "period": "月",
        "priceDetail": "官网原价 ¥120.00/月",
        "traffic": "800 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🌐 日常办公、高频视频用户的黄金套餐，大带宽吞吐",
          "📦 BGP 多线融合调度 + 专线级网络出口，带宽充足稳定",
          "⚡ 节点流量统一 1x 计算，不设峰值限速",
          "📱 不限制在线设备数量，团队与家庭多端共享"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "🔥 月流量: 800GB · 黄金套餐 三网智能优化+纯专线出口"
      },
      {
        "id": "plan-5",
        "name": "浪网 商业",
        "category": "商务定制",
        "badge": "商业级 · 2.0TB",
        "intro": "🏢 月流量: 2.0TB (2000GB) · 超大流量池 高并发商用级",
        "price": "200.00",
        "period": "月",
        "priceDetail": "官网原价 ¥200.00/月",
        "traffic": "2.0 TB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "🌐 适合外贸企业团队、工作室协作、长时间在线与大吞吐场景",
          "📦 企业级 BGP 智能路由 + 专线出口方案，全程不限速",
          "⚡ 节点流量不放大，实打实 1.0x 真实计费",
          "🛡️ 高抗封锁网络，支持团队多工位并发调用"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "🏢 月流量: 2.0TB (2000GB) · 超大流量池 高并发商用级"
      },
      {
        "id": "plan-6",
        "name": "浪网 小流量包",
        "category": "一次性流量",
        "badge": "♾️ 独立IP · 180GB",
        "intro": "📦 流量: 180GB · 独立 IP 不共享，专人维护",
        "price": "239.00",
        "period": "次",
        "priceDetail": "官网原价 ¥239.00/次",
        "traffic": "180 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "📦 适合跨境防封号、核心账号运维、长期备用守号防失联",
          "☁️ 数据长期有效，稳定专线中转支持"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 流量: 180GB · 独立 IP 不共享，专人维护"
      },
      {
        "id": "plan-7",
        "name": "浪网 标准流量包",
        "category": "一次性流量",
        "badge": "♾️ 商务精英 · 450GB",
        "intro": "🚀 流量: 450GB · 稳定抗封锁 永不限时 用完即止",
        "price": "569.00",
        "period": "次",
        "priceDetail": "官网原价 ¥569.00/次",
        "traffic": "450 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💼 适合经常出差、两台设备同时在线的商务精英",
          "🛡️ 稳定抗封锁架构，敏感期平稳在线",
          "⚡ 永不限时，用完即止💜，告别续费压力",
          "🌐 全球主流节点随意切换，全节点 1x 流量倍率"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "🚀 流量: 450GB · 稳定抗封锁 永不限时 用完即止"
      },
      {
        "id": "plan-8",
        "name": "浪网 精英流量包",
        "category": "一次性流量",
        "badge": "♾️ 旗舰买断 · 900GB",
        "intro": "🚀 流量: 900GB · 告别月租焦虑 重度生产力终极解法",
        "price": "1099.00",
        "period": "次",
        "priceDetail": "官网原价 ¥1099.00/次",
        "traffic": "900 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "💎 为高净值金融、跨境核心业务、高端工作室打造的商务断区",
          "⚡ 没有时间限制，不挤公共通道，要的就是极速，玩的就是稳定",
          "🌐 专线级多路容灾出口，大吞吐传输不掉线",
          "📱 终极生产力用户的免续费尊享选择"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "🚀 流量: 900GB · 告别月租焦虑 重度生产力终极解法"
      },
      {
        "id": "plan-9",
        "name": "浪网 定制线路包",
        "category": "商务定制",
        "badge": "👑 独享私人专线 · 独立公网IP",
        "intro": "🚀 月流量: 500GB · 独享私人专线节点 · 独占带宽不抢网",
        "price": "680.00",
        "period": "月",
        "priceDetail": "官网原价 ¥680.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "⚡独占带宽，不抢网：彻底告别直播画质模糊与卡顿问题",
          "🌟 专业的事情交给专业的网络，跨境大团队顶配基建"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "🚀 月流量: 500GB · 独享私人专线节点 · 独占带宽不抢网"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "22",
    "rank": 22,
    "name": "灵动云",
    "englishName": "LingDong",
    "slug": "lingdong",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG",
    "coupon": "wsj888",
    "category": "性价比机场",
    "price": "¥8.25/月起（年付¥99）",
    "traffic": "70GB~1500GB/月",
    "protocol": "Trojan",
    "route": "BGP 智能多网专线",
    "tag": "均衡型套餐",
    "shortDescription": "提供价格与流量完美平衡的均衡型机场。",
    "recommendationReason": "2026综合天梯榜第5名。穿云年付仅¥99/年，结合拂风月付与不限时轻享包，由轻量学习延伸至大容量用量。",
    "coreReason": "BGP 智能三网调度 + 专线出口，晚高峰平均延迟 48.6ms，全流媒体与 TikTok 深度解锁。",
    "suitableFor": "追求实用主义、需要清晰套餐配置的用户",
    "features": [
      "配置清晰",
      "100GB均衡起步",
      "Trojan安全协议"
    ],
    "faq": [
      {
        "question": "灵动云的套餐如何选择？",
        "answer": "根据您的实际流量需求选择即可，其基础100GB套餐已经能满足大多数普通用户的需求。"
      }
    ],
    "seoTitle": "灵动云 - 20元均衡型优化节点机场推荐",
    "seoDescription": "灵动云提供20元/月的均衡型优化节点套餐，包含100GB流量。采用Trojan协议，是追求价格与实用性平衡用户的明智之选。",
    "plans": [
      {
        "id": "plan-1",
        "name": "灵动·穿云 (年度精选IPLC)",
        "category": "周期订阅",
        "badge": "⭐ 核心力荐",
        "intro": "单节点峰值高达 2.5Gbps，IPLC 原生专线年度性价比首选",
        "price": "99",
        "period": "年",
        "priceDetail": "官网原价 ¥99/年",
        "traffic": "70 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "穿云物理 IPLC 专线通道",
          "单节点峰值高达 2.5Gbps",
          "流媒体与 ChatGPT 原生解锁"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "单节点峰值高达 2.5Gbps，IPLC 原生专线年度性价比首选"
      },
      {
        "id": "plan-2",
        "name": "灵动·拂风 (亲民入门)",
        "category": "周期订阅",
        "badge": "超值月付",
        "intro": "日常社交、网页浏览、查资料与短视频追剧轻度首选",
        "price": "20",
        "period": "月",
        "priceDetail": "官网原价 ¥20/月",
        "traffic": "100 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 多网专线调度接入",
          "全节点 1.0x 真实倍率计费",
          "多设备同时在线无限制",
          "主流社交与流媒体解锁"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "日常社交、网页浏览、查资料与短视频追剧轻度首选"
      },
      {
        "id": "plan-3",
        "name": "灵动·驭浪 (主力推荐)",
        "category": "周期订阅",
        "badge": "主力热门",
        "intro": "面向中度影音爱好者及经常访问 ChatGPT、Claude 等 AI 工具的用户",
        "price": "50",
        "period": "月",
        "priceDetail": "官网原价 ¥50/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 三网优化 + 原生纯净 IP",
          "支持 4K 超高清流畅秒开",
          "AI 对话工具专属纯净线路"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "面向中度影音爱好者及经常访问 ChatGPT、Claude 等 AI 工具的用户"
      },
      {
        "id": "plan-4",
        "name": "灵动·破晓",
        "category": "周期订阅",
        "badge": "大流量",
        "intro": "面向多终端协同、重度下载与较高流量需求的使用场景",
        "price": "100",
        "period": "月",
        "priceDetail": "官网原价 ¥100/月",
        "traffic": "700 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 多线专线高速通道",
          "全节点 1.0x 计费流量不虚标",
          "多设备共享大流量池",
          "低抖动网络链路保障"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "面向多终端协同、重度下载与较高流量需求的使用场景"
      },
      {
        "id": "plan-5",
        "name": "灵动·凌霄 (1.5TB)",
        "category": "周期订阅",
        "badge": "企业级",
        "intro": "每月提供 1.5TB 海量额度，影音、团队多终端与大文件吞吐首选",
        "price": "180",
        "period": "月",
        "priceDetail": "官网原价 ¥180/月",
        "traffic": "1.5 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 智能专线与流量不放大",
          "海量 1.5TB 每月流量供给",
          "多端并发无压力连接",
          "全天候客服快速响应"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "每月提供 1.5TB 海量额度，影音、团队多终端与大文件吞吐首选"
      },
      {
        "id": "plan-6",
        "name": "灵动·不限时轻享包",
        "category": "一次性流量",
        "badge": "⏳ 不限时",
        "intro": "流量永不过期，适合作为出差、轻度备用与长期防失联通道",
        "price": "168",
        "period": "次",
        "priceDetail": "官网原价 ¥168/次",
        "traffic": "200 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "BGP 专线节点高速访问",
          "不限使用期限，用完为止",
          "不限同时在线设备数量",
          "实打实 1.0x 扣减计费"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "流量永不过期，适合作为出差、轻度备用与长期防失联通道"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "23",
    "rank": 23,
    "name": "星岛梦",
    "englishName": "StarDream",
    "slug": "stardream",
    "affiliateUrl": "https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim",
    "coupon": "nmw888",
    "category": "专线机场",
    "price": "¥25/月起",
    "traffic": "60 GB ~ 500 GB",
    "protocol": "V2Ray",
    "route": "全 IEPL 物理专线",
    "tag": "综合专线方案",
    "shortDescription": "综合提供IPLC与IEPL双优专线的实力派机场。",
    "recommendationReason": "采用优质的IPLC/IEPL双线架构，基础价格仅需16元即可享受100GB流量，综合实力强劲。",
    "coreReason": "IPLC/IEPL双专线架构与100GB基础流量的高性价比结合。",
    "suitableFor": "追求全面专线体验且预算适中的高阶用户",
    "features": [
      "双专线架构",
      "100GB合理流量",
      "V2Ray稳定协议"
    ],
    "faq": [
      {
        "question": "星岛梦的双专线是什么意思？",
        "answer": "意味着它同时部署了IPLC和IEPL两种高品质跨境专线线路，能在一条线路维护时无缝切换到另一条，保障极高的可用性。"
      }
    ],
    "seoTitle": "星岛梦 StarDream - 综合型IPLC/IEPL双专线机场推荐",
    "seoDescription": "星岛梦(StarDream)结合IPLC与IEPL双专线架构，为您提供16元/月100GB的综合高性价比翻墙方案，保障全天候网络畅通。",
    "plans": [
      {
        "id": "plan-1",
        "name": "星岛梦 · 高校套餐",
        "category": "周期订阅",
        "badge": "👑 极致平价 · 年付仅 ¥96 (折合 ¥8/月)",
        "intro": "📦 月流量: 60GB · 适合小流量/学生用户，购买日起算每30天自动刷新",
        "price": "96",
        "period": "月",
        "priceDetail": "官网原价 ¥96/月",
        "traffic": "60 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "👥适用人群：适合小流量/学生用户，年付折算约 8元/月。",
          "🔄刷新规则：购买日起算，每 30 天自动刷新流量。",
          "📱设备并发：不限制同时使用客户端数量，多设备自由在线。",
          "🎧客服支持：高效客服响应，快速处理使用问题。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 60GB · 适合小流量/学生用户，购买日起算每30天自动刷新"
      },
      {
        "id": "plan-2",
        "name": "星岛梦 · 超量150G",
        "category": "周期订阅",
        "badge": "🔥 热销主力 · 性价比标杆",
        "intro": "📦 月流量: 150GB (每30天自动刷新) · 全节点 x1 晚高峰不限速",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🧭路由策略：智能路由自动择优，稳定顺滑。",
          "🎧客服支持：专业客服，快速响应。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 150GB (每30天自动刷新) · 全节点 x1 晚高峰不限速"
      },
      {
        "id": "plan-3",
        "name": "星岛梦 · 进阶300G",
        "category": "周期订阅",
        "badge": "🎬 追剧首选 · 进阶大流量",
        "intro": "📦 月流量: 300GB · 适合日常 4K 流媒体畅看与多设备重度使用",
        "price": "50.00",
        "period": "月",
        "priceDetail": "官网原价 ¥50.00/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🧭路由策略：智能路由自动择优，稳定顺滑。",
          "🎧客服支持：专业客服，快速响应。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 300GB · 适合日常 4K 流媒体畅看与多设备重度使用"
      },
      {
        "id": "plan-4",
        "name": "星岛梦 · 闪光500G",
        "category": "周期订阅",
        "badge": "⚡ 闪光大容量 · 500GB 狂飙",
        "intro": "📦 月流量: 500GB · 适合重度 4K 影音、大文件协同与团队使用",
        "price": "70.00",
        "period": "月",
        "priceDetail": "官网原价 ¥70.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🧭路由策略：智能路由自动择优，稳定顺滑。",
          "🎧客服支持：专业客服，快速响应。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 500GB · 适合重度 4K 影音、大文件协同与团队使用"
      },
      {
        "id": "plan-5",
        "name": "星岛梦 · 旗舰1T版",
        "category": "周期订阅",
        "badge": "👑 旗舰 1.0TB · 海量狂欢",
        "intro": "📦 月流量: 1000GB (1.0TB) · 顶级大带宽，晚高峰不降速",
        "price": "130.00",
        "period": "月",
        "priceDetail": "官网原价 ¥130.00/月",
        "traffic": "1.0 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🧭路由策略：智能路由自动择优，稳定顺滑。",
          "🎧客服支持：专业客服，快速响应。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 1000GB (1.0TB) · 顶级大带宽，晚高峰不降速"
      },
      {
        "id": "plan-6",
        "name": "星岛梦 · 永久不限时100",
        "category": "一次性流量",
        "badge": "⏳ 永久买断 · 9折重置特权",
        "intro": "📦 一次性 100G 流量包 · 无限时长 · 不按周期重置",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "📱并发设备：不限制同时使用客户端数量，高效客服响应。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性 100G 流量包 · 无限时长 · 不按周期重置"
      },
      {
        "id": "plan-7",
        "name": "星岛梦 · 永久不限时300",
        "category": "一次性流量",
        "badge": "🔥 不限时高人气 · 300GB 长期备用",
        "intro": "📦 一次性 300G 流量包 · 无限时长 · 适合低频/备用用车党",
        "price": "300.00",
        "period": "次",
        "priceDetail": "官网原价 ¥300.00/次",
        "traffic": "300 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "📱并发设备：不限制同时使用客户端数量，高效客服响应。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性 300G 流量包 · 无限时长 · 适合低频/备用用车党"
      },
      {
        "id": "plan-8",
        "name": "星岛梦 · 永久不限时1TB",
        "category": "一次性流量",
        "badge": "💎 永久 1.0TB · 每GB超低单价",
        "intro": "📦 一次性 1TBG (1000GB) 流量包 · 终身有效 · 流量大户备用首选",
        "price": "600.00",
        "period": "次",
        "priceDetail": "官网原价 ¥600.00/次",
        "traffic": "1.0 TB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "📱并发设备：不限制同时使用客户端数量，高效客服响应。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性 1TBG (1000GB) 流量包 · 终身有效 · 流量大户备用首选"
      },
      {
        "id": "plan-9",
        "name": "星岛梦 · 美国家宽定制",
        "category": "商务定制",
        "badge": "💎 美国真实原生住宅家庭宽带 · 纯净静态 IP",
        "intro": "📦 500GB /月 · 专为跨境电商运营、社媒养号与直播设计的高风控通过率网络",
        "price": "700.00",
        "period": "月",
        "priceDetail": "官网原价 ¥700.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "全 IEPL 物理专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 500GB /月 · 专为跨境电商运营、社媒养号与直播设计的高风控通过率网络"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "24",
    "rank": 24,
    "name": "光速云",
    "englishName": "LightSpeed",
    "slug": "lightspeed",
    "affiliateUrl": "https://mdlky.gsyaff.com/#/?code=6tRWbtgK",
    "coupon": "jichangcha09",
    "category": "优质中转",
    "price": "¥8/月起",
    "traffic": "69 GB ~ 500 GB",
    "protocol": "主流协议",
    "route": "全 IEPL 物理专线",
    "tag": "灵活套餐",
    "shortDescription": "以公网隧道中转为核心，提供极度灵活套餐选择的实用机场。",
    "recommendationReason": "套餐选择极多，以公网隧道中转线路为主要特点，非常适合需要根据自身多变需求选择不同套餐的用户。",
    "coreReason": "极致灵活的套餐选项与实用的公网隧道中转。",
    "suitableFor": "需求多变、希望有丰富套餐选择的实用主义者",
    "features": [
      "套餐高度灵活",
      "隧道中转优化",
      "适用面广"
    ],
    "faq": [
      {
        "question": "光速云的公网隧道中转快吗？",
        "answer": "光速云对公网隧道进行了深度优化，在绝大多数非极端网络环境下，速度表现能媲美很多平价专线。"
      }
    ],
    "seoTitle": "光速云 LightSpeed - 灵活套餐公网隧道中转机场推荐",
    "seoDescription": "光速云(LightSpeed)提供极度灵活的多种套餐选择，通过优化的公网隧道中转，满足不同用户的个性化科学上网需求。",
    "plans": [
      {
        "id": "plan-1",
        "name": "致敬斯诺克147永久套餐",
        "category": "一次性流量",
        "badge": "⏳ 永久买断不过期 · 随用随停",
        "intro": "📦 247GB 永久流量 · 无需担心每月重置 · 随用随停",
        "price": "147.00",
        "period": "次",
        "priceDetail": "官网原价 ¥147.00/次",
        "traffic": "247 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⏳无需重置：无需担心每月重置，随用随停，用完为止。",
          "📱并发设备：节点不限速 | 不限设备数量，多端同时在线。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 247GB 永久流量 · 无需担心每月重置 · 随用随停"
      },
      {
        "id": "plan-2",
        "name": "光速云 · 轻量版",
        "category": "周期订阅",
        "badge": "👑 年付更省 · 长期稳定不折腾",
        "intro": "📦 月流量: 69GB · 适合小流量日常与学生党，年付折合约 ¥8.25/月",
        "price": "8.25",
        "period": "月",
        "priceDetail": "官网原价 ¥8.25/月",
        "traffic": "69 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：购买日起算，每 30 天自动刷新流量。",
          "📱设备并发：不限制同时使用客户端数量，多设备自由在线。",
          "🎧客服支持：高效客服响应，快速处理使用问题。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 69GB · 适合小流量日常与学生党，年付折合约 ¥8.25/月"
      },
      {
        "id": "plan-3",
        "name": "光速云 · 极速版",
        "category": "周期订阅",
        "badge": "🔥 最多人选 · 性价比标杆",
        "intro": "📦 月流量: 168GB (每30天自动刷新) · 最多人选更稳更划算",
        "price": "25.00",
        "period": "月",
        "priceDetail": "官网原价 ¥25.00/月",
        "traffic": "168 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🧭路由策略：智能路由自动择优，稳定顺滑。",
          "🛠️专业运维：7×24 小时技术保障与高效客服响应。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 168GB (每30天自动刷新) · 最多人选更稳更划算"
      },
      {
        "id": "plan-4",
        "name": "光速云 · 流光版",
        "category": "周期订阅",
        "badge": "🎬 流光畅玩 · 进阶大流量",
        "intro": "📦 月流量: 238GB · 适合日常 4K 流媒体畅看与多设备重度使用",
        "price": "34.00",
        "period": "月",
        "priceDetail": "官网原价 ¥34.00/月",
        "traffic": "238 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🛠️专业运维：7×24 支持，智能路由自动择优，稳定顺滑。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 238GB · 适合日常 4K 流媒体畅看与多设备重度使用"
      },
      {
        "id": "plan-5",
        "name": "光速云 · 量子版",
        "category": "周期订阅",
        "badge": "⚡ 量子尊享 · 500GB 大容量",
        "intro": "📦 月流量: 500GB (450G-500G) · 适合多屏 4K 重度影音与家庭共用",
        "price": "68.00",
        "period": "月",
        "priceDetail": "官网原价 ¥68.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🧭路由策略：智能路由自动择优，稳定顺滑。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 500GB (450G-500G) · 适合多屏 4K 重度影音与家庭共用"
      },
      {
        "id": "plan-6",
        "name": "光速云 · 无界版",
        "category": "周期订阅",
        "badge": "👑 无界 900GB · 重度专属海量",
        "intro": "📦 月流量: 900GB · 重度用户专属，顶级带宽晚高峰不降速",
        "price": "138.00",
        "period": "月",
        "priceDetail": "官网原价 ¥138.00/月",
        "traffic": "900 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄刷新规则：每 30 天自动刷新流量。",
          "📱设备并发：多设备不限量同时在线（电脑/手机/路由器）。",
          "🛠️专业运维：7×24 支持，智能路由自动择优，稳定顺滑。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 900GB · 重度用户专属，顶级带宽晚高峰不降速"
      },
      {
        "id": "plan-7",
        "name": "光速云 · 定制套餐",
        "category": "商务定制",
        "badge": "💎 美国真实原生住宅家庭宽带 · 纯净静态 IP",
        "intro": "📦 500GB /月 · 专为跨境电商运营、社媒养号与直播设计的高风控通过率网络",
        "price": "680.00",
        "period": "月",
        "priceDetail": "官网原价 ¥680.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "全 IEPL 物理专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 500GB /月 · 专为跨境电商运营、社媒养号与直播设计的高风控通过率网络"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "25",
    "rank": 25,
    "name": "唯兔云",
    "englishName": "V2Yun",
    "slug": "v2yun",
    "affiliateUrl": "https://fast.v2yunvipaff.com/#/?code=xYEe8gyb",
    "coupon": "rabbit",
    "category": "专线机场",
    "price": "¥7/月起",
    "traffic": "45 GB ~ 1.0 TB",
    "protocol": "VLESS / SS",
    "route": "全 IPLC 物理专线",
    "tag": "高性价比专线",
    "shortDescription": "精准击中预算与专线双重痛点的高性价比IPLC机场。",
    "recommendationReason": "14.9元的超低起步价与100GB基础流量的组合，极其适合需要严格控制预算同时又必须使用IPLC专线线路的用户。",
    "coreReason": "14.9元超低价享受真实IPLC专线与100GB流量。",
    "suitableFor": "学生、对价格极度敏感但需要专线稳定性的用户",
    "features": [
      "价格突破底线",
      "真IPLC专线",
      "VLESS/SS双协议"
    ],
    "faq": [
      {
        "question": "唯兔云性价比为何如此之高？",
        "answer": "唯兔云通过精细化运营与大规模线路采购，将成本压缩，从而提供极具杀伤力的价格。"
      }
    ],
    "seoTitle": "唯兔云(V2云) - 14.9元极高性价比IPLC专线机场推荐",
    "seoDescription": "唯兔云提供14.9元/月的震撼低价，包含100GB流量的IPLC专线服务。完美解决您控制预算与追求网络稳定性的双重需求。",
    "plans": [
      {
        "id": "plan-1",
        "name": "唯兔云 · 年付版限量款",
        "category": "周期订阅",
        "badge": "👑 极致实惠 · 年付折合仅 ¥6.66/月",
        "intro": "📦 月流量: 45GB · 爆款专为轻量用户设计，看新闻/查资料/写论文",
        "price": "6.66",
        "period": "月",
        "priceDetail": "官网原价 ¥6.66/月",
        "traffic": "45 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "⚡稳定直连：增加备用直连节点，节点速率 ×1。",
          "🎧客服指导：客服全天在线指导。",
          "🤖AI 全面支持：解锁 ChatGPT，TikTok。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 45GB · 爆款专为轻量用户设计，看新闻/查资料/写论文"
      },
      {
        "id": "plan-2",
        "name": "唯兔云 · 年付加强专线",
        "category": "周期订阅",
        "badge": "⚡ 加强企业专线 · 年折 ¥10/月",
        "intro": "📦 月流量: 75GB · IEPL 企业跨境专线，不限速，不限客户端",
        "price": "10",
        "period": "月",
        "priceDetail": "官网原价 ¥10/月",
        "traffic": "75 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🛡️备用保障：增加备用直连节点，流媒体 AI 全解锁。",
          "🤖AI 解锁支持：解锁 ChatGPT，TikTok。",
          "🎧在线指导：客服全天在线指导。",
          "🔥场景设计：专为轻量高频用户设计，当月用完可付费重置。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 75GB · IEPL 企业跨境专线，不限速，不限客户端"
      },
      {
        "id": "plan-3",
        "name": "唯兔云 · 普通版",
        "category": "周期订阅",
        "badge": "🔥 热销入门 · 150GB 充沛",
        "intro": "📦 月流量: 150GB · 全 IPLC 专线，vless 协议，不限速不限客户端",
        "price": "19.90",
        "period": "月",
        "priceDetail": "官网原价 ¥19.90/月",
        "traffic": "150 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "📦流量额度：每月 150G 流量。",
          "🛡️节点性能：增加备用直连节点，节点速率 ×1。",
          "🎧全天服务：客服全天在线指导。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 150GB · 全 IPLC 专线，vless 协议，不限速不限客户端"
      },
      {
        "id": "plan-4",
        "name": "唯兔云 · 进阶版",
        "category": "周期订阅",
        "badge": "🎬 进阶追剧 · 200GB 畅快",
        "intro": "📦 月流量: 200GB · 适合日常 4K 流媒体畅看与多设备重度使用",
        "price": "29.90",
        "period": "月",
        "priceDetail": "官网原价 ¥29.90/月",
        "traffic": "200 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "📦流量额度：每月 200G 流量。",
          "🛡️节点性能：增加备用直连节点，节点速率 ×1。",
          "🎧全天服务：客服全天在线指导。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 200GB · 适合日常 4K 流媒体畅看与多设备重度使用"
      },
      {
        "id": "plan-5",
        "name": "唯兔云 · 专业版",
        "category": "周期订阅",
        "badge": "⚡ 专业大容量 · 500GB 狂欢",
        "intro": "📦 月流量: 500GB · 适合多屏 4K 重度影音与家庭团队共用",
        "price": "59.90",
        "period": "月",
        "priceDetail": "官网原价 ¥59.90/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "📦流量额度：每月 500G 流量。",
          "🛡️节点性能：增加备用直连节点，节点速率 ×1。",
          "🎧全天服务：客服全天在线指导。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 500GB · 适合多屏 4K 重度影音与家庭团队共用"
      },
      {
        "id": "plan-6",
        "name": "唯兔云 · 至尊版",
        "category": "周期订阅",
        "badge": "👑 旗舰 1.0TB · 海量不限速",
        "intro": "📦 月流量: 1000GB (1.0TB) · 顶级大带宽配置，大流量狂暴下载",
        "price": "119.90",
        "period": "月",
        "priceDetail": "官网原价 ¥119.90/月",
        "traffic": "1.0 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "📦流量额度：每月 1000G (1.0TB) 流量。",
          "🛡️节点性能：增加备用直连节点，节点速率 ×1。",
          "🎧全天服务：客服全天在线指导。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 1000GB (1.0TB) · 顶级大带宽配置，大流量狂暴下载"
      },
      {
        "id": "plan-7",
        "name": "唯兔云 · 永久不限时 (100GB)",
        "category": "一次性流量",
        "badge": "⏳ 永久买断 · 续费永久9折",
        "intro": "📦 一次性 100G 流量包 · 无限时长 · 不按周期重置",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "🛡️备用保障：增加备用直连节点，节点速率 ×1。",
          "🎧全天服务：客服全天在线指导。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性 100G 流量包 · 无限时长 · 不按周期重置"
      },
      {
        "id": "plan-8",
        "name": "唯兔云 · 永久不限时 (200GB)",
        "category": "一次性流量",
        "badge": "🔥 不限时主力 · 200GB 长期备用",
        "intro": "📦 一次性 200G 流量包 · 适合低频/备用用车党，续费享永久9折",
        "price": "160.00",
        "period": "次",
        "priceDetail": "官网原价 ¥160.00/次",
        "traffic": "200 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "🛡️备用保障：增加备用直连节点，节点速率 ×1。",
          "🔓全解锁支持：原生 IP 解锁各大流媒体与 AI 工具。",
          "🎧全天服务：客服全天在线指导。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性 200G 流量包 · 适合低频/备用用车党，续费享永久9折"
      },
      {
        "id": "plan-9",
        "name": "唯兔云 · 永久不限时 (500GB)",
        "category": "一次性流量",
        "badge": "💎 永久 500GB · 极高性价比备用",
        "intro": "📦 一次性 500G 流量包 · 终身有效 · 大流量备用首选",
        "price": "340.00",
        "period": "次",
        "priceDetail": "官网原价 ¥340.00/次",
        "traffic": "500 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "⏳流量额度：一共 500G 流量，无限时长，长期有效。",
          "🔄9折续费特权：一次性买断，后续续费享永久 9 折特权。",
          "🛡️备用保障：增加备用直连节点，节点速率 ×1。",
          "🔓全解锁支持：原生 IP 解锁各大流媒体与全套 AI。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 一次性 500G 流量包 · 终身有效 · 大流量备用首选"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "26",
    "rank": 26,
    "name": "U1S1",
    "englishName": "U1S1",
    "slug": "u1s1",
    "affiliateUrl": "https://pkdj7.vipaff.cc/#/?code=NMjmHbvu",
    "coupon": "U1S1",
    "category": "专线机场",
    "price": "¥8/月起",
    "traffic": "60 GB ~ 100 GB",
    "protocol": "Shadowsocks",
    "route": "全 IEPL 物理专线",
    "tag": "三网优化",
    "shortDescription": "主打国内BGP三网优化与IEPL结合的高级加速机场。",
    "recommendationReason": "核心优势在于其国内入口采用了BGP三网优化，并结合IEPL专线出境，提供约120GB基础流量，连接体验顺滑。",
    "coreReason": "BGP三网优化国内入口大幅提升了各家运营商的连接体验。",
    "suitableFor": "受困于国内复杂网络环境（如偏远地区或小众运营商）的用户",
    "features": [
      "BGP三网优化",
      "IEPL出境专线",
      "SS轻量协议"
    ],
    "faq": [
      {
        "question": "BGP三网优化是什么？对我有用吗？",
        "answer": "无论你是电信、联通还是移动宽带，BGP都能自动为你选择最优的国内入口，极大减少国内段的延迟和丢包。"
      }
    ],
    "seoTitle": "U1S1(有一说一) - BGP三网优化+IEPL专线高级机场推荐",
    "seoDescription": "U1S1机场采用国内BGP三网优化入口结合IEPL专线，20元/月享120GB流量。无论您使用哪家运营商，都能获得极致顺滑的翻墙体验。",
    "plans": [
      {
        "id": "plan-1",
        "name": "u1s1 · 就是好用包",
        "category": "周期订阅",
        "badge": "👑 超值年付 · 折合仅 ¥8.00/月",
        "intro": "📦 月流量: 60GB · 适合学生党查资料 AI、日常网页、社交聊天与轻量视频",
        "price": "8.00",
        "period": "月",
        "priceDetail": "官网原价 ¥8.00/月",
        "traffic": "60 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全 IEPL 物理专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 60GB · 适合学生党查资料 AI、日常网页、社交聊天与轻量视频"
      },
      {
        "id": "plan-2",
        "name": "u1s1 · 普通人真够了包",
        "category": "周期订阅",
        "badge": "🔥 最多人选 · 入门常规主力",
        "intro": "📦 月流量: 120GB · 适配刷视频、看剧、远程办公常规使用",
        "price": "20.00",
        "period": "月",
        "priceDetail": "官网原价 ¥20.00/月",
        "traffic": "120 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🎯适配场景：刷视频、看剧、远程办公常规使用，日常主力首选。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 120GB · 适配刷视频、看剧、远程办公常规使用"
      },
      {
        "id": "plan-3",
        "name": "u1s1 · 你以为用不到包",
        "category": "周期订阅",
        "badge": "🎬 进阶畅享 · 4K重度追剧与多设备",
        "intro": "📦 月流量: 300GB · 适配追剧党、会开会、会下载、设备多",
        "price": "40.00",
        "period": "月",
        "priceDetail": "官网原价 ¥40.00/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🎯适配场景：追剧党、会开会、会下载、设备多，重度多端畅用。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 300GB · 适配追剧党、会开会、会下载、设备多"
      },
      {
        "id": "plan-4",
        "name": "u1s1 · 瘾大就拉满包",
        "category": "周期订阅",
        "badge": "⚡ 极客狂飙 · 多终端家庭与媒体团队",
        "intro": "📦 月流量: 700GB · 适配多终端家庭、远程办公团队、重度媒体用户",
        "price": "100.00",
        "period": "月",
        "priceDetail": "官网原价 ¥100.00/月",
        "traffic": "700 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🎯适配场景：多终端家庭、远程办公团队、重度媒体用户。",
          "📱并发设备：不限速 · 不限设备数量，多端满载互不干扰。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 700GB · 适配多终端家庭、远程办公团队、重度媒体用户"
      },
      {
        "id": "plan-5",
        "name": "u1s1 · 我全都要包",
        "category": "周期订阅",
        "badge": "💎 海量吞吐 · 1.5TB 跨国协作与团队运营",
        "intro": "📦 月流量: 1.5TB (1500GB) · 适配多人共享、小团队运营、跨国协作与 AI 效率工作",
        "price": "180.00",
        "period": "月",
        "priceDetail": "官网原价 ¥180.00/月",
        "traffic": "1.5 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全 IEPL 物理专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 1.5TB (1500GB) · 适配多人共享、小团队运营、跨国协作与 AI 效率工作"
      },
      {
        "id": "plan-6",
        "name": "u1s1 · 定制包",
        "category": "商务定制",
        "badge": "🏢 企业级定制 · 跨境电商与海外直播",
        "intro": "📦 量身定制配额 · 针对个人与企业的不同需求，提供专属定制化方案",
        "price": "600.00",
        "period": "月",
        "priceDetail": "官网原价 ¥600.00/月",
        "traffic": "100 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "📱并发设备：不限速 · 不限设备数量，多端高效协同。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 量身定制配额 · 针对个人与企业的不同需求，提供专属定制化方案"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "27",
    "rank": 27,
    "name": "极连云",
    "englishName": "JiLianYun",
    "slug": "jilianyun",
    "affiliateUrl": "https://kdjhao.jlyvipaff.com/#/?code=poyoU7mq",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥8/月起",
    "traffic": "60 GB ~ 1.0 TB",
    "protocol": "自研/通用",
    "route": "全 IPLC 物理专线",
    "tag": "低门槛专线",
    "shortDescription": "降低双重顶级专线体验门槛的诚意之作。",
    "recommendationReason": "不仅采用了高昂成本的IPLC/IEPL双线架构，更将入门价格下放至不到15元，诚意十足。",
    "coreReason": "14.4元的亲民价格即可享用双重顶级专线。",
    "suitableFor": "初入专线圈子、追求极致性价比的新老用户",
    "features": [
      "亲民专线门槛",
      "IPLC/IEPL兼备",
      "协议选择丰富"
    ],
    "faq": [
      {
        "question": "极连云的自研协议好用吗？",
        "answer": "其自研协议专门针对特殊时期的封锁进行了优化，抗干扰能力比传统协议更强。"
      }
    ],
    "seoTitle": "极连云 - 14.4元低门槛IPLC/IEPL双专线机场推荐",
    "seoDescription": "极连云以不到15元的亲民价格，为您带来IPLC与IEPL双重顶级专线体验，每月100GB流量，是不可多得的高性价比专线之选。",
    "plans": [
      {
        "id": "plan-1",
        "name": "限时年付套餐体验",
        "category": "周期订阅",
        "badge": "👑 超值年付 · 折合仅 ¥8.00/月",
        "intro": "📦 月流量: 60GB · 每月60G流量，全节点 x1 倍率，晚高峰不限速",
        "price": "8.00",
        "period": "月",
        "priceDetail": "官网原价 ¥8.00/月",
        "traffic": "60 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄更新规则：季付以上购买日起算，每 30 天自动更新流量。",
          "🤖AI 全解：解锁 ChatGPT、TikTok。",
          "📱并发设备：不限制同时使用客户端数量，多端同时自由在线。",
          "🎧客服响应：高效客服响应，快速解决配置疑难。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 60GB · 每月60G流量，全节点 x1 倍率，晚高峰不限速"
      },
      {
        "id": "plan-2",
        "name": "极连云 · 不限时套餐",
        "category": "一次性流量",
        "badge": "⏳ 永久买断不过期 · 随用随停",
        "intro": "📦 600GB 永久有效流量 · 无需担心每月重置 · 支持 9 折重置",
        "price": "399.00",
        "period": "次",
        "priceDetail": "官网原价 ¥399.00/次",
        "traffic": "600 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "📱并发设备：不限制同时使用客户端数量，多端设备自由畅连。",
          "🎧客服保障：高效客服响应，全程使用指导。",
          "⚠️服务条款：不接受退款服务。"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 600GB 永久有效流量 · 无需担心每月重置 · 支持 9 折重置"
      },
      {
        "id": "plan-3",
        "name": "极连云 · 基础套餐",
        "category": "周期订阅",
        "badge": "🔥 热销入门 · 100GB 充沛",
        "intro": "📦 月流量: 100GB · 适合日常高频网页、社交与常规追剧",
        "price": "18.00",
        "period": "月",
        "priceDetail": "官网原价 ¥18.00/月",
        "traffic": "100 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄更新规则：季付以上购买日起算每 30 天自动更新流量。",
          "🤖AI 全面支持：解锁 ChatGPT、TikTok。",
          "📱并发设备：不限制同时使用客户端数量。",
          "⚠️服务条款：不接受退款服务。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 100GB · 适合日常高频网页、社交与常规追剧"
      },
      {
        "id": "plan-4",
        "name": "极连云 · 进阶套餐",
        "category": "周期订阅",
        "badge": "🎬 进阶追剧 · 200GB 优化调度",
        "intro": "📦 月流量: 200GB · 优化带宽调度，晚高峰依旧流畅，解锁常用流媒体与 AI",
        "price": "32.00",
        "period": "月",
        "priceDetail": "官网原价 ¥32.00/月",
        "traffic": "200 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄更新规则：季付以上购买日起算每 30 天自动更新流量。",
          "🔓原生流媒体：原生 IP 解锁各大流媒体。",
          "🤖AI 解锁支持：解锁 ChatGPT、TikTok。",
          "📱并发设备：不限制同时使用客户端数量。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 200GB · 优化带宽调度，晚高峰依旧流畅，解锁常用流媒体与 AI"
      },
      {
        "id": "plan-5",
        "name": "极连云 · 旗舰套餐",
        "category": "周期订阅",
        "badge": "⚡ 高速旗舰 · 500GB 重度优选",
        "intro": "📦 月流量: 500GB · 全 IPLC 专线接入，带宽更高，低延迟体验，适合重度使用者",
        "price": "61.00",
        "period": "月",
        "priceDetail": "官网原价 ¥61.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄更新规则：季付以上购买日起算每 30 天自动更新流量。",
          "🔓原生流媒体：原生 IP 解锁各大流媒体。",
          "🤖AI 解锁支持：解锁 ChatGPT、TikTok。",
          "📱并发设备：不限制同时使用客户端数量。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 500GB · 全 IPLC 专线接入，带宽更高，低延迟体验，适合重度使用者"
      },
      {
        "id": "plan-6",
        "name": "极连云 · 尊享套餐",
        "category": "周期订阅",
        "badge": "💎 顶级尊享 · 1.0TB 全球无限制",
        "intro": "📦 月流量: 1.0TB (1000GB) · 顶级旗舰套餐，最高可达 2.5Gbps，畅享无限制全球访问",
        "price": "122.00",
        "period": "月",
        "priceDetail": "官网原价 ¥122.00/月",
        "traffic": "1.0 TB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🔄更新规则：季付以上购买日起算每 30 天自动更新流量。",
          "🔓原生流媒体：原生 IP 解锁各大流媒体。",
          "🤖AI 解锁支持：解锁 ChatGPT、TikTok。",
          "📱并发设备：不限制同时使用客户端数量。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 1.0TB (1000GB) · 顶级旗舰套餐，最高可达 2.5Gbps，畅享无限制全球访问"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "28",
    "rank": 28,
    "name": "全球云",
    "englishName": "GlobalCloud",
    "slug": "globalcloud",
    "affiliateUrl": "https://sswdh.gcvipaff.com/#/?code=NE1AcNIX",
    "coupon": "tt88",
    "category": "优质中转",
    "price": "¥8/月起",
    "traffic": "59 GB ~ 1.5 TB",
    "protocol": "VLESS / Trojan",
    "route": "BGP 智能多网专线",
    "tag": "中转均衡方案",
    "shortDescription": "配置均衡、表现稳定的中转优化机场。",
    "recommendationReason": "采用深度优化的中转线路，搭配20元120GB的经典均衡套餐，表现稳健且实用。",
    "coreReason": "深度优化的中转架构与经典套餐流量的完美组合。",
    "suitableFor": "需要稳定翻墙服务、不盲目追求专线的务实型用户",
    "features": [
      "深度优化中转",
      "经典均衡套餐",
      "双主流协议"
    ],
    "faq": [
      {
        "question": "全球云的中转优化效果如何？",
        "answer": "经过专人深度优化的中转节点，其稳定性和速度甚至优于部分疏于维护的平价专线。"
      }
    ],
    "seoTitle": "全球云 - 经典均衡配置优化中转机场推荐评测",
    "seoDescription": "全球云采用深度优化的中转线路，提供20元/月120GB的经典均衡套餐。采用VLESS/Trojan协议，为务实用户提供稳健的科学上网服务。",
    "plans": [
      {
        "id": "plan-1",
        "name": "轻量版",
        "category": "周期订阅",
        "badge": "👑 超值年付 · 折合仅 ¥8.25/月",
        "intro": "📦 月流量: 59GB · 适合小流量/新手用户，年付折算约 8元/月",
        "price": "8.25",
        "period": "月",
        "priceDetail": "官网原价 ¥8.25/月",
        "traffic": "59 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "🎯适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
          "🔄刷新规则：购买日起算，每 30 天自动刷新流量。",
          "📱设备并发：不限制同时使用客户端数量，多设备自由在线。",
          "🎧客服支持：高效客服响应，快速处理使用问题。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 59GB · 适合小流量/新手用户，年付折算约 8元/月"
      },
      {
        "id": "plan-2",
        "name": "独享私人专线节点",
        "category": "商务定制",
        "badge": "🏢 独享私人专线 · 独立公网IP",
        "intro": "📦 500GB 专线独享流量 · 独立带宽资源，独立公网 IP，全程不与他人共享",
        "price": "680.00",
        "period": "月",
        "priceDetail": "官网原价 ¥680.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "🎧定制支持：如有定制需求，请通过工单系统联系技术客服咨询。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 500GB 专线独享流量 · 独立带宽资源，独立公网 IP，全程不与他人共享"
      },
      {
        "id": "plan-3",
        "name": "BGP 智能优化 · 入门方案",
        "category": "周期订阅",
        "badge": "🔥 热销入门 · 120GB 充沛",
        "intro": "📦 月流量: 120GB · 适合日常网页访问、社交浏览、短视频与流媒体轻度用户",
        "price": "20.00",
        "period": "月",
        "priceDetail": "官网原价 ¥20.00/月",
        "traffic": "120 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 智能多网专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 120GB · 适合日常网页访问、社交浏览、短视频与流媒体轻度用户"
      },
      {
        "id": "plan-4",
        "name": "BGP 智能优化 · 进阶方案",
        "category": "周期订阅",
        "badge": "🎬 进阶追剧 · 300GB 稳定优先",
        "intro": "📦 月流量: 300GB · 适合日常办公、网页浏览，搭配中等频率视频与流媒体",
        "price": "40.00",
        "period": "月",
        "priceDetail": "官网原价 ¥40.00/月",
        "traffic": "300 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 智能多网专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 300GB · 适合日常办公、网页浏览，搭配中等频率视频与流媒体"
      },
      {
        "id": "plan-5",
        "name": "BGP 智能优化 · 高端方案",
        "category": "周期订阅",
        "badge": "⚡ 极客狂飙 · 700GB 高频多端",
        "intro": "📦 月流量: 700GB · 适合高频网络使用场景，流媒体、下载、远程办公用户",
        "price": "100.00",
        "period": "月",
        "priceDetail": "官网原价 ¥100.00/月",
        "traffic": "700 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "BGP 智能多网专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 700GB · 适合高频网络使用场景，流媒体、下载、远程办公用户"
      },
      {
        "id": "plan-6",
        "name": "BGP 智能优化 · 商业方案",
        "category": "商务定制",
        "badge": "💎 海量吞吐 · 1.5TB 企业高并发",
        "intro": "📦 月流量: 1.5TB (1500GB) · 适合团队使用、长时间在线、高并发访问场景",
        "price": "180.00",
        "period": "月",
        "priceDetail": "官网原价 ¥180.00/月",
        "traffic": "1.5 TB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "🎯适配场景：适合团队使用、长时间在线、高并发访问场景。"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "📦 月流量: 1.5TB (1500GB) · 适合团队使用、长时间在线、高并发访问场景"
      },
      {
        "id": "plan-7",
        "name": "BGP 智能优化 · 不限时轻量包",
        "category": "一次性流量",
        "badge": "⏳ 永久买断 · 100GB 不过期",
        "intro": "📦 100GB 永久有效流量 · 单次购买即领 100GB，流量用完即止不设到期",
        "price": "100.00",
        "period": "次",
        "priceDetail": "官网原价 ¥100.00/次",
        "traffic": "100 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "BGP 智能多网专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 100GB 永久有效流量 · 单次购买即领 100GB，流量用完即止不设到期"
      },
      {
        "id": "plan-8",
        "name": "BGP 智能优化 · 不限时标准包",
        "category": "一次性流量",
        "badge": "⏳ 经典买断 · 400GB 大容量",
        "intro": "📦 400GB 永久有效流量 · 单次购买即领 400GB，长周期备用商务首选",
        "price": "360.00",
        "period": "次",
        "priceDetail": "官网原价 ¥360.00/次",
        "traffic": "400 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "BGP 智能多网专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 400GB 永久有效流量 · 单次购买即领 400GB，长周期备用商务首选"
      },
      {
        "id": "plan-9",
        "name": "BGP 智能优化 · 不限时大容量包",
        "category": "一次性流量",
        "badge": "👑 尊享买断 · 800GB 海量储备",
        "intro": "📦 800GB 永久有效流量 · 旗舰级带宽无任何流量放大比例，商务团队首选",
        "price": "700.00",
        "period": "次",
        "priceDetail": "官网原价 ¥700.00/次",
        "traffic": "800 GB",
        "trafficSubtext": "一次性总额度 (永不过期)",
        "tags": [
          "BGP 智能多网专线",
          "全平台客户端支持",
          "不限同时在线设备"
        ],
        "billingCycles": [
          "一次性"
        ],
        "description": "📦 800GB 永久有效流量 · 旗舰级带宽无任何流量放大比例，商务团队首选"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  },
  {
    "id": "29",
    "rank": 29,
    "name": "光年梯",
    "englishName": "LightYear",
    "slug": "lightyear",
    "affiliateUrl": "https://ggmq.gntaff.com/#/?code=RAJFvngV",
    "coupon": "暂无",
    "category": "专线机场",
    "price": "¥7.42/月起（年付¥89）",
    "traffic": "50 GB ~ 500 GB",
    "protocol": "Shadowsocks",
    "route": "全 IPLC 物理专线",
    "tag": "低价IEPL",
    "shortDescription": "极具竞争力的超低价IEPL专线机场收官之作。",
    "recommendationReason": "在保持提供高质量IEPL专线的同时，将价格下探至惊人的12.6元，并搭配110GB的大流量，无可挑剔的性价比之选。",
    "coreReason": "12.6元的击穿底价、110GB的充裕流量与IEPL专线的绝杀组合。",
    "suitableFor": "所有寻求高性价比专线服务的用户",
    "features": [
      "击穿底价",
      "IEPL高质量线路",
      "大流量配置"
    ],
    "faq": [
      {
        "question": "作为最后一名的光年梯实力如何？",
        "answer": "光年梯凭借其12.6元的IEPL低价套餐脱颖而出，是极具黑马潜质的超高性价比机场。"
      }
    ],
    "seoTitle": "光年梯 - 12.6元超低价IEPL专线性价比机场推荐",
    "seoDescription": "光年梯以12.6元的震撼低价，提供高达110GB流量的IEPL专线服务。是本站强烈推荐的极具性价比与黑马潜质的翻墙机场。",
    "plans": [
      {
        "id": "plan-1",
        "name": "年付限时套餐",
        "category": "周期订阅",
        "badge": "⭐ 主推套餐 · 年付特惠",
        "intro": "适合轻度个人使用，日常查阅资料与低频备用首选",
        "price": "89.00",
        "period": "年",
        "priceDetail": "官网原价 ¥89.00/年",
        "traffic": "50 GB",
        "trafficSubtext": "每30天刷新额度",
        "tags": [
          "全 IPLC 专线物理通道",
          "全节点 X1 真实倍率计费",
          "原生 IP 解锁 ChatGPT 与流媒体",
          "不限制在线客户端数量"
        ],
        "billingCycles": [
          "年付"
        ],
        "description": "适合轻度个人使用，日常查阅资料与低频备用首选"
      },
      {
        "id": "plan-2",
        "name": "光年梯 入门版",
        "category": "周期订阅",
        "badge": "主力门槛",
        "intro": "满足日常高画质追剧与白领办公",
        "price": "18.00",
        "period": "月",
        "priceDetail": "官网原价 ¥18.00/月",
        "traffic": "110 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "单节点最高 2.5Gbps 带宽",
          "4K 超清流媒体秒开",
          "多端设备同时在线稳定顺畅"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "满足日常高画质追剧与白领办公"
      },
      {
        "id": "plan-3",
        "name": "光年梯 晋级版",
        "category": "周期订阅",
        "badge": "进阶首选",
        "intro": "4K 超高清影音发烧友与重度 AI 深度用户",
        "price": "34.00",
        "period": "月",
        "priceDetail": "官网原价 ¥34.00/月",
        "traffic": "220 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "晚高峰并发不限速无卡顿",
          "原生纯净 IP 深度支持 AI 生态",
          "不限制在线客户端连接数"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "4K 超高清影音发烧友与重度 AI 深度用户"
      },
      {
        "id": "plan-4",
        "name": "光年梯 专业版",
        "category": "周期订阅",
        "badge": "专业之选",
        "intro": "跨境电商、大文件传输与高端生产力需求",
        "price": "68.00",
        "period": "月",
        "priceDetail": "官网原价 ¥68.00/月",
        "traffic": "450 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "全专线低延迟保障通道",
          "全天候专业客服支持",
          "多设备高并发无瓶颈"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "跨境电商、大文件传输与高端生产力需求"
      },
      {
        "id": "plan-5",
        "name": "光年梯 至尊版",
        "category": "周期订阅",
        "badge": "至尊旗舰",
        "intro": "小型出海团队、跨境电商运营与超重度发烧友",
        "price": "130.00",
        "period": "月",
        "priceDetail": "官网原价 ¥130.00/月",
        "traffic": "900 GB",
        "trafficSubtext": "每月流量额度",
        "tags": [
          "最高 2.5Gbps 物理峰值速率",
          "VIP 专属售后服务通道",
          "全平台自研及通用工具完美支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "小型出海团队、跨境电商运营与超重度发烧友"
      },
      {
        "id": "plan-6",
        "name": "独享私人专线节点",
        "category": "商务定制",
        "badge": "独立公网IP",
        "intro": "独立专享公网 IP，面向跨境电商与海外直播定制",
        "price": "680.00",
        "period": "月",
        "priceDetail": "官网原价 ¥680.00/月",
        "traffic": "500 GB",
        "trafficSubtext": "每月专属保障额度",
        "tags": [
          "独享独立公网 IP，零干扰防封禁",
          "TikTok 美区运营与跨境电商店铺首选",
          "专属客服一对一配置支持"
        ],
        "billingCycles": [
          "月付",
          "季付",
          "半年付",
          "年付"
        ],
        "description": "独立专享公网 IP，面向跨境电商与海外直播定制"
      }
    ],
    "plansNotice": {
      "cycleDesc": "额度按套餐周期提供。按月给出的流量按购买日每30天刷新；年付套餐按年给出或按月重置，具体以后台为准。",
      "oneTimeDesc": "一次性流量包为购买时的总额度，资料标注无固定到期时间，使用时按真实消耗扣减，永不过期。",
      "disclaimer": "价格、额度与可选周期来自官方最新套餐资料，核验整理日期为2026-11-21；全线专线调度与各平台配置已同步核验。实际在售价格、续费、共享和退款等规则以下单页面为准。"
    }
  }
];
