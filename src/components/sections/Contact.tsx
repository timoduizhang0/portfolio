import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle, Send, MapPin } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-100/30">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="联系我"
          subtitle="期待与你交流，无论是技术探讨还是合作机会"
        />

        <div className="max-w-2xl mx-auto">
          {/* 联系信息卡 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-100/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-dark-300/50 glow text-center"
          >
            {/* 头像占位或欢迎文字 */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-emerald-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-dark-100 flex items-center justify-center">
                  <span className="text-3xl font-bold font-mono text-primary">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
            <p className="text-muted mb-8">{personalInfo.title}</p>

            {/* 联系方式列表 */}
            <div className="space-y-4 mb-8">
              {/* 邮箱 */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-dark-200/50 hover:bg-dark-300/50 border border-dark-300/30 transition-all group"
              >
                <Mail size={20} className="text-primary" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {personalInfo.email}
                </span>
              </a>

              {/* GitHub */}
              {personalInfo.github !== 'https://github.com/your-username' && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-dark-200/50 hover:bg-dark-300/50 border border-dark-300/30 transition-all group"
                >
                  <Github size={20} className="text-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    GitHub
                  </span>
                </a>
              )}

              {/* Gitee */}
              {personalInfo.gitee !== 'https://gitee.com/your-username' && (
                <a
                  href={personalInfo.gitee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl bg-dark-200/50 hover:bg-dark-300/50 border border-dark-300/30 transition-all group"
                >
                  <MessageCircle size={20} className="text-primary" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    Gitee
                  </span>
                </a>
              )}

              {/* 地点 */}
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-dark-200/30 border border-dark-300/20">
                <MapPin size={20} className="text-muted" />
                <span className="text-muted">{personalInfo.location}</span>
              </div>
            </div>

            {/* CTA 按钮 */}
            <Button href={`mailto:${personalInfo.email}`} size="lg" icon={<Send size={18} />}>
              发送邮件给我
            </Button>
          </motion.div>

          {/* 底部提示 */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-muted/50 text-sm mt-8"
          >
            通常会在 24 小时内回复邮件
          </motion.p>
        </div>
      </div>
    </section>
  )
}
