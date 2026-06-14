import { motion } from 'framer-motion'
import { skills, categoryLabels } from '@/data/skills'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Skills() {
  // 按分类分组
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="技术栈"
          subtitle="持续学习，不断精进，以下是我熟练掌握的技术领域"
        />

        {/* 技能标签云 - 浮动效果 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              animate={{
                y: [0, -8, 0],
              }}
              className={`
                px-4 py-2 rounded-lg font-mono text-sm border
                cursor-default select-none
                ${skill.level >= 85
                  ? 'bg-primary/10 text-primary border-primary/30 shadow-lg shadow-primary/5'
                  : skill.level >= 75
                    ? 'bg-dark-200 text-white border-dark-400/50'
                    : 'bg-dark-100 text-muted border-dark-300/30'
                }
              `}
              style={{
                animationDuration: `${4 + Math.random() * 3}s`,
                animationDelay: `${index * 0.2}s`,
                fontSize: `${0.8 + (skill.level / 100) * 0.25}rem`,
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        {/* 技能进度条详情 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: category === 'backend' || category === 'database' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-100/50 rounded-xl p-6 border border-dark-300/30"
            >
              <h3 className="text-primary font-mono text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {categoryLabels[category]}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs font-mono text-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-dark-300 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          skill.level >= 85 ? 'bg-primary' : skill.level >= 75 ? 'bg-emerald-500' : 'bg-dark-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
