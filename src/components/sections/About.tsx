import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'

// 工作经历 - 来源于简历
const experiences = [
  {
    period: '2019/05 - 至今',
    company: '北京汇美科友科技有限公司武汉分公司',
    position: 'Java 软件开发',
    location: '武汉',
    description: [
      '主导公司核心政务系统（电子证照、审批平台）的研发与运维，覆盖需求分析、架构设计、开发落地全流程',
      '设计 Spring Cloud Alibaba 微服务架构（Nacos + Sentinel），解决多租户场景下服务间调用混乱问题，故障恢复时间从 4h 缩短至 30min',
      '通过 ShardingSphere 完成 MySQL 分库分表（16 库 × 32 表），支撑电子证照数据量从 500 万增长至 2000 万+，查询响应稳定 < 1 秒',
      '主导代码审核（覆盖 90% 项目），制定 SonarQube 规范，推动单元测试覆盖率从 35% 提升至 82%，上线 BUG 率下降 40%',
      '独立开发 OFD 电子签章模块，基于 GB/T 33190-2016 标准实现文件生成/验签/水印嵌入',
      '攻克 OFD 签章性能瓶颈：MQ 削峰 + 线程池优化，签章耗时从 800ms 降至 400ms',
    ],
  },
  {
    period: '2017/11 - 2019/04',
    company: '朗新科技集团股份有限公司',
    position: 'Java 软件开发',
    location: '',
    description: [
      '负责 Java 软件系统的设计与开发工作，独立完成核心模块编码',
      '对接业务部门需求，进行需求分析和方案设计，编写技术文档和接口文档',
      '针对系统性能瓶颈进行优化，通过代码重构、数据库调优等手段提升系统响应速度 30% 以上',
    ],
  },
]

const education = {
  period: '2010/09 - 2014/06',
  school: '汉口学院',
  degree: '本科 · 电子信息工程',
  description: '主修课程：数据结构、计算机网络、操作系统、数据库原理等 | 英语四级 · 全国计算机等级二级',
}

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="关于我"
          subtitle="11 年+ 软件开发历程，从后端到 AI 的持续进化"
        />

        <div className="max-w-3xl mx-auto">
          {/* 工作经历时间线 */}
          <div className="mb-16">
            <h3 className="flex items-center gap-2 text-lg font-mono text-primary mb-8">
              <Briefcase size={18} />
              工作经历
            </h3>

            <div className="relative pl-8 border-l-2 border-dark-300/50 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* 时间节点圆点 */}
                  <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-dark border-4 border-primary shadow-lg shadow-primary/30" />

                  {/* 时间段 */}
                  <div className="flex items-center gap-3 mb-2 text-sm text-muted">
                    <Calendar size={14} />
                    {exp.period}
                    {exp.location && (
                      <>
                        <MapPin size={14} />
                        {exp.location}
                      </>
                    )}
                  </div>

                  {/* 公司与职位 */}
                  <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                  <p className="text-primary/80 font-mono text-sm mb-3">{exp.position}</p>

                  {/* 职责描述 */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
                        className="flex items-start gap-2 text-sm text-muted leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-0.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 教育背景 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-100/50 rounded-xl p-6 border border-dark-300/30"
          >
            <h3 className="flex items-center gap-2 text-lg font-mono text-primary mb-4">
              <GraduationCap size={18} />
              教育背景
            </h3>
            <div className="flex items-center gap-3 mb-2 text-sm text-muted">
              <Calendar size={14} />
              {education.period}
            </div>
            <h4 className="text-lg font-bold text-white">{education.school}</h4>
            <p className="text-primary/70 font-mono text-sm mb-2">{education.degree}</p>
            <p className="text-muted text-sm">{education.description}</p>
          </motion.div>

          {/* 核心优势亮点 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid sm:grid-cols-2 gap-4"
          >
            {[
              { label: 'AI 应用全链路', desc: 'RAG / Agent / LangChain4j / Spring AI' },
              { label: '高并发架构', desc: '日均 10W+ 订单 · 亿级分库分表' },
              { label: 'SQL 极致优化', desc: '亿级单表查询 < 1s · 6 种数据库' },
              { label: '全栈交付能力', desc: 'Spring Boot / Go / Vue3 + TypeScript' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08 }}
                className="bg-dark-100/30 rounded-lg p-4 border border-dark-300/20 hover:border-primary/20 transition-colors"
              >
                <p className="text-primary font-mono text-sm font-medium mb-1">{item.label}</p>
                <p className="text-muted text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
