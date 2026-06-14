// 技能数据配置 - 来源于简历
export interface Skill {
  name: string
  level: number
  category: 'backend' | 'ai' | 'database' | 'frontend' | 'devops' | 'infra'
}

export const skills: Skill[] = [
  // 后端核心
  { name: 'Java', level: 95, category: 'backend' },
  { name: 'Spring Boot', level: 95, category: 'backend' },
  { name: 'Spring Cloud Alibaba', level: 92, category: 'backend' },
  { name: 'MyBatis-Plus', level: 93, category: 'backend' },
  { name: 'Go (Gin)', level: 75, category: 'backend' },
  { name: 'Quarkus', level: 70, category: 'backend' },

  // AI 相关
  { name: 'LangChain4j / Spring AI', level: 90, category: 'ai' },
  { name: 'RAG 向量检索', level: 90, category: 'ai' },
  { name: 'Ollama / 百炼平台', level: 85, category: 'ai' },
  { name: 'Milvus / PGVector', level: 82, category: 'ai' },
  { name: 'OpenRouter 多模型接入', level: 88, category: 'ai' },
  { name: 'FlowLong 流程引擎', level: 85, category: 'ai' },

  // 数据库
  { name: 'MySQL', level: 93, category: 'database' },
  { name: 'Oracle', level: 88, category: 'database' },
  { name: 'PostgreSQL', level: 82, category: 'database' },
  { name: 'SQLite', level: 88, category: 'database' },
  { name: 'ClickHouse', level: 72, category: 'database' },
  { name: '达梦数据库', level: 78, category: 'database' },

  // 前端基础
  { name: 'Vue 3 + TypeScript', level: 80, category: 'frontend' },
  { name: 'Naive UI / Vite', level: 78, category: 'frontend' },
  { name: 'Thymeleaf', level: 75, category: 'frontend' },

  // 基础设施 & DevOps
  { name: 'Redis', level: 88, category: 'devops' },
  { name: 'Nacos / Sentinel', level: 90, category: 'devops' },
  { name: 'ShardingSphere', level: 88, category: 'devops' },
  { name: 'Docker / Linux', level: 80, category: 'devops' },
  { name: 'Git / Maven', level: 90, category: 'devops' },
  { name: 'Netty', level: 80, category: 'infra' },
]

// 分类标签映射
export const categoryLabels: Record<string, string> = {
  backend: '后端核心',
  ai: 'AI 大模型',
  database: '数据库',
  frontend: '前端开发',
  devops: '微服务 & DevOps',
  infra: '基础设施',
}
