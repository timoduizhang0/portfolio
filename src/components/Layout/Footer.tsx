import { Github, Mail, Heart } from 'lucide-react'
import { personalInfo } from '@/data/personal'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-300/50 bg-dark/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 左侧版权 */}
          <p className="text-muted text-sm flex items-center gap-1">
            &copy; {currentYear} {personalInfo.name}. Built with
            <Heart size={14} className="text-primary inline" />
          </p>

          {/* 中间社交链接 */}
          <div className="flex items-center gap-6">
            {personalInfo.github !== 'https://github.com/your-username' && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* 右侧技术栈标识 */}
          <p className="text-muted/50 text-xs font-mono hidden sm:block">
            React + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
