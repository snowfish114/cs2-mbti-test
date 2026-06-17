# 🎯 CS2 选手 MBTI 人格测试

基于 CS2 游戏场景设计的 MBTI 人格测试，匹配最适合你的职业选手。

👉 **[在线体验](https://snowfish114.github.io/cs2-mbti-test/)**

---

## 功能特色

- **29 道原创题目** — 25 道 MBTI 维度题 + 4 道选手区分题，覆盖 EI/SN/TF/JP 四个维度
- **每题带追问** — 深层揭示偏好，权重 1.5 倍，结果更精准
- **20 位职业选手** — 涵盖 device、s1mple、ZywOo、donk、m0NESY 等一线选手
- **16 种 MBTI 类型** — 完整覆盖，每道题配有洞察提示
- **电竞视觉风格** — 粒子背景、暗色主题、LED 风格界面

## 技术栈

纯静态前端，无后端依赖。

| 层 | 技术 |
|----|------|
| 结构 | HTML5 |
| 样式 | CSS3（粒子背景 Canvas） |
| 逻辑 | Vanilla JavaScript |
| 部署 | Netlify / GitHub Pages / EdgeOne Pages |

## 本地运行

直接双击打开 `index.html`，或者用任意静态服务器：

```bash
npx serve .
```

## 目录结构

```
├── index.html          # 主页面
├── css/
│   └── style.css       # 电竞风格样式
├── js/
│   ├── data.js         # 题库 + 选手数据 + MBTI 定义
│   └── app.js          # 答题流程 + 匹配算法
├── images/
│   └── players/        # 20 位选手照片
└── README.md
```

## 部署

本项目已部署到 **Netlify**，每次 `git push` 自动更新。

如需自行部署：

1. Fork 本仓库
2. 在 [Netlify](https://netlify.com) 导入仓库
3. 发布目录填 `mbti-deploy`，其余默认
4. 部署完成

## 许可证

MIT
