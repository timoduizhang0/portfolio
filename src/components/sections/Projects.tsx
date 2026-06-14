import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { projects, projectCategoryLabels, type Project } from '@/data/projects'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { SectionTitle } from '@/components/ui/SectionTitle'

const categories = ['all', ...Object.keys(projectCategoryLabels)] as const

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-dark-100/30">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="项目作品"
          subtitle="精选项目展示，每一个都凝聚了心血与思考"
        />

        {/* 分类筛选器 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                flex items-center gap-2
                ${activeCategory === cat
                  ? 'bg-primary text-dark shadow-lg shadow-primary/20'
                  : 'bg-dark-200/50 text-muted hover:text-white hover:bg-dark-300/50 border border-dark-300/30'
                }
              `}
            >
              {activeCategory === cat && <Filter size={14} />}
              {cat === 'all' ? '全部' : projectCategoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* 项目卡片网格 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {filteredProjects.map((project: Project, index: number) => (
              <Card key={project.id} glow>
                {/* 项目封面区域 */}
                <div className="relative h-48 bg-gradient-to-br from-dark-300 to-dark-100 overflow-hidden group">
                  {/* 装饰性渐变 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-4xl font-bold text-dark-400/30 group-hover:text-primary/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* 悬浮遮罩层 */}
                  <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-dark-200/80 text-white hover:text-primary hover:bg-dark-200 transition-all"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-dark-200/80 text-white hover:text-primary hover:bg-dark-200 transition-all"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* 项目信息 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  {/* 核心亮点 */}
                  <div className="space-y-1.5 pt-4 border-t border-dark-300/30">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-muted">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
