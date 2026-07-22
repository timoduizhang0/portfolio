# 个人作品集网站

基于 Vite + React + TypeScript + Tailwind CSS 构建的个人作品集与博客站点。

## 技术栈

- **框架**: React 18 + TypeScript 5.8
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 3 + PostCSS
- **状态管理**: Zustand 5
- **动画**: Framer Motion 12
- **路由**: React Router 7
- **工具库**: clsx, tailwind-merge, lucide-react

## 功能特性

- 响应式个人主页与作品展示
- 技能标签与项目卡片
- 暗色/亮色主题切换
- 平滑滚动与入场动画
- 联系表单与页脚导航

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
npm install
npm run dev
```

### 构建

```bash
npm run build
```

构建产物输出到 `dist` 目录。

### 代码检查

```bash
npm run check
npm run lint
```

## 项目结构

```
src/
├── components/       # 通用组件
│   ├── Layout/       # 布局组件（导航栏、页脚）
│   ├── sections/     # 页面区块
│   └── ui/           # 基础 UI 组件
├── data/             # 静态数据（个人信息、项目、技能）
├── hooks/            # 自定义 Hooks
├── lib/              # 工具函数
├── pages/            # 页面组件
├── App.tsx           # 根组件
├── main.tsx          # 入口文件
└── index.css         # 全局样式
```

## 配置说明

- **`vite.config.ts`**: 构建输出目录 `dist`，启用 `vite-tsconfig-paths` 路径别名
- **`tailwind.config.js`**: 主题色与暗色模式配置
- **`tsconfig.json`**: 路径别名 `@/*` 映射到 `src/*`
- **`.gitignore`**: 忽略 `dist/`、`node_modules/`、构建缓存等

## 部署

项目已适配 [IGA Pages](https://docs.volcengine.com/docs/6559/2188992?lang=zh) 静态站点托管平台，可直接上传 ZIP 包或关联 Git 仓库进行自动构建部署。
