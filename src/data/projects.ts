// 项目数据配置 - 来源于简历真实项目
export interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  category: 'backend' | 'ai' | 'fullstack' | 'tool' | 'infra'
  image: string
  githubUrl: string
  demoUrl?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    name: '武汉市卫生电子证照系统',
    description: '国家级"数字政府"重点项目，构建全国一体化电子证照共享服务体系，覆盖 50 类高频证照，实现跨省域互通互认。日均处理请求量 20W+，年签发量超 2000 万张。',
    tags: ['Spring Cloud Alibaba', 'ShardingSphere', 'MyBatis-Plus', 'OFD SDK', 'Nacos', 'Redis'],
    category: 'backend',
    image: '/images/projects/project1.png',
    githubUrl: '',
    highlights: [
      '16 库 × 32 表分库分表，支撑亿级数据查询 < 1 秒',
      'OFD 电子签章模块（GB/T 33190-2016 标准）',
      'XXL-JOB 分布式任务调度集群（30+ 节点）',
      'TPS 从 800 提升至 2500（性能提升 212%）',
      '获武汉市政务信息化优秀项目奖',
    ],
  },
  {
    id: 2,
    name: '重庆市卫生健康电子证照系统',
    description: '市级电子证照后端微服务集群，覆盖证照全生命周期（采集/签发/查询/分享/统计/归档）、政务事项分派、统一身份认证、对外共享 API 等核心能力。一次性通过等保四级测试。',
    tags: ['Spring Boot', 'Spring Cloud Hoxton', 'Zuul', 'Oracle', 'ActiveMQ', 'Nacos'],
    category: 'backend',
    image: '/images/projects/project2.png',
    githubUrl: '',
    highlights: [
      '10+ 独立微服务模块，Feign 跨服务调用',
      '300 万存量数据迁移压缩至 2 周完成',
      '等保四级测试通过（99.99% 可用性）',
      '年分区表 + Caffeine + Redis 双缓存策略',
    ],
  },
  {
    id: 3,
    name: '乡村医生绩效考核系统',
    description: '为湖北省卫健委开发的动态绩效考核系统，自研规则引擎替代 Drools，解决规则每年变化、人工统计效率低问题。绩效计算时间从 1 个月缩短至 30 分钟。',
    tags: ['Spring Boot', 'Aviator 表达式引擎', 'MyBatis-Plus', 'MySQL', 'Redis'],
    category: 'backend',
    image: '/images/projects/project3.png',
    githubUrl: '',
    highlights: [
      '自研规则引擎，执行效率提升 60%',
      '规则版本控制机制，支持历史回溯',
      '支撑全省 1000+ 卫生院实时考核（500+/s 运算）',
    ],
  },
  {
    id: 4,
    name: 'travel-helper · 旅行资料 RAG 问答助手',
    description: '面向旅游从业者的 RAG 问答助手。用户一键导入 Excel 资料，自动完成文档切片→向量化→入库，通过对话重写 + Top-K 检索 + LLM 回答实现精准问答。召回 F1 约 0.92。',
    tags: ['Spring Boot 4', 'Spring AI 2', 'SQLite', 'OpenRouter', 'RAG', 'Thymeleaf'],
    category: 'ai',
    image: '/images/projects/project4.png',
    githubUrl: '',
    highlights: [
      '独立设计 RAG 四子系统（导入/索引/检索/对话）',
      '多模型统一接入（DeepSeek/Qwen/Llama）',
      '导入 50 行 Excel 平均耗时 < 3s，问答响应 < 3s',
      '自研行级解析器保留元数据溯源',
    ],
  },
  {
    id: 5,
    name: 'approval-refactoring · 企业级审批系统重构',
    description: '将硬编码审批升级为「可视化流程定义 + 运行时节点路由」的工作流驱动架构。配套自研流程设计器，支持审批节点、条件网关、会签/或签、退回/撤回等企业级场景。',
    tags: ['Spring Boot 3', 'JDK 21', 'FlowLong', 'Vue 3', 'Vite', 'Naive UI'],
    category: 'fullstack',
    image: '/images/projects/project5.png',
    githubUrl: '',
    highlights: [
      '三层通用模型：流程定义 + 实例 + 任务',
      '自研前端流程设计器（拖拽/贝塞尔连线/撤销重做）',
      '新业务上线时间从几天降至几小时',
      'SpEL 表达式引擎动态路由',
    ],
  },
  {
    id: 6,
    name: 'java-ai-hub · 企业级大模型能力 Hub',
    description: '面向企业内部的大模型能力平台 Hub。抽象 ChatClient/EmbeddingClient/RAGService 统一接口，业务线只需引入依赖 + 配置 yml 即可接入大模型应用。支持计费审计与租户隔离。',
    tags: ['Spring Boot 3.4', 'JDK 21', 'Spring AI 1.0', 'JWT', 'Knife4j'],
    category: 'ai',
    image: '/images/projects/project6.png',
    githubUrl: '',
    highlights: [
      'Provider 模式适配 OpenAI/DeepSeek/通义/豆包/智谱/零一万物',
      'SSE 流式输出 + Function Calling 工具调用',
      '新增供应商平均开发成本约 0.5 人天',
      'tenant 三级隔离 + 限额告警',
    ],
  },
  {
    id: 7,
    name: 'pageindex-java-starter · Vectorless RAG 框架',
    description: '基于文档目录结构构建 PageNode 树的 Vectorless RAG 框架。不依赖向量数据库、不需要 Embedding、不需要分块，检索阶段让 LLM 在树上做推理式相关性判断。提供 Tree/Hybrid/Agentic 三种检索模式。',
    tags: ['Spring Boot 4', 'JDK 21', 'Spring AI 2.0', 'PostgreSQL', 'PDFBox', 'POI'],
    category: 'ai',
    image: '/images/projects/project7.png',
    githubUrl: '',
    highlights: [
      'LLM 推理替代 TopK 向量相似度匹配',
      'Tree/Hybrid/Agentic 三种检索模式',
      'PDF/Markdown/HTML/DOCX 四类解析器',
      '7 模块 Maven 工程，完全可插拔 Starter',
    ],
  },
  {
    id: 8,
    name: 'netty-web-lite · Netty 轻量级 Web 服务器',
    description: '面向前端 SPA 和静态资源服务的高性能 Web 服务器，可替代 Nginx 作为生产环境部署容器。Boss/Worker 多线程 EventLoop + 10+ ChannelHandler 职责链。另有 Go 语言重构版。',
    tags: ['Netty 4.1', 'JDK 8', 'Caffeine', 'Guava', 'Golang'],
    category: 'infra',
    image: '/images/projects/project8.png',
    githubUrl: '',
    highlights: [
      '1000 并发 QPS > 50000，P99 < 10ms',
      '多级缓存体系：Caffeine LRU + HTTP 协议缓存',
      'GZIP 智能压缩，带宽节省约 80%',
      'Go 重构版：零依赖，单二进制 15MB',
    ],
  },
]

// 项目分类标签
export const projectCategoryLabels: Record<string, string> = {
  backend: '后端项目',
  ai: 'AI 项目',
  fullstack: '全栈项目',
  tool: '工具库',
  infra: '基础设施',
}
