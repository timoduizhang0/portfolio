# 徐武 - 个人作品网站

基于 React + TypeScript + Vite 构建的个人作品网站，聚焦 AI 应用开发、Java 后端架构与全栈工程能力展示。

## 技术栈

- **框架**：React 18 + TypeScript 5
- **构建工具**：Vite 6
- **样式**：Tailwind CSS 3
- **动画**：Framer Motion
- **路由**：React Router 7
- **状态管理**：Zustand
- **图标**：Lucide React
- **部署**：Wasmer（静态站点）

## 功能特性

- 首页 Hero 区域：打字机效果动态展示个人介绍
- 技能、项目、关于、联系等多分区单页导航
- 响应式布局，适配桌面端与移动端
- 暗色主题与流畅的入场 / 滚动动画
- 集成 Trae Solo Badge 推广组件

## 快速开始

### 环境要求

- Node.js >= 20
- npm >= 10

### 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产产物
npm run build

# 预览生产产物
npm run preview

# 代码检查
npm run lint

# 类型检查
npm run check
```

## 项目结构

```
.
├── public/                 # 静态资源（favicon 等）
├── src/
│   ├── assets/             # 图片等源资源
│   ├── components/
│   │   ├── Layout/         # 导航栏、页脚
│   │   ├── sections/       # 首页各分区（Hero/Skills/Projects/About/Contact）
│   │   └── ui/             # 通用 UI 组件（Button/Card/Tag/SectionTitle）
│   ├── data/               # 个人介绍、项目、技能数据
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具函数
│   ├── pages/              # 页面级组件
│   ├── App.tsx             # 应用入口
│   ├── main.tsx            # React 根节点
│   └── index.css           # 全局样式（含 Tailwind）
├── index.html              # HTML 入口
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind 配置
├── shipit.yaml             # Wasmer 部署配置
├── tsconfig.json           # TypeScript 配置
├── eslint.config.js        # ESLint 配置
└── package.json
```

## 配置说明

- **Vite 基础路径**（`vite.config.ts` → `base`）：部署到 Wasmer / Vercel / Netlify 等平台时使用根路径 `/`。
- **Wasmer 部署**（`shipit.yaml`）：使用 `node-static` preset，输出目录 `dist`，构建命令 `npm run build`。Build Config 配置参考下图：

  ![Wasmer Build Settings](docs/wasmer.png)

  - Preset name：`node-static`
  - Root directory：`./`
  - Start command：`static-web-server --root=/opt/static_app --log-level=info --port=8080`
  - Build command：`npm run build`
  - Install command：`npm install`
- **Tailwind 自定义颜色**（`tailwind.config.js`）：定义了 `primary`、`dark`、`muted` 等主题色变量。
- **路径别名**：`@/` 指向 `src/` 目录，通过 `vite-tsconfig-paths` 实现。
