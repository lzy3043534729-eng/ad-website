# QuickSearch - 搜索聚合网站

一个简洁、稳定的搜索聚合网站，支持 Google AdSense 广告变现。

## 功能特点

- 多搜索引擎切换（Google、必应、百度、DuckDuckGo）
- 热门搜索词推荐
- 分类网站导航
- 完整的广告位支持
- 响应式设计，支持移动端
- 预留 AdSense 代码位置

## 快速开始

### 本地预览

直接用浏览器打开 `index.html` 即可。

### 免费部署

#### Vercel 部署（推荐）

1. 将代码上传到 GitHub 仓库
2. 访问 [vercel.com](https://vercel.com)
3. 导入 GitHub 仓库
4. 点击 Deploy

#### Netlify 部署

1. 将代码上传到 GitHub 仓库
2. 访问 [netlify.com](https://netlify.com)
3. 导入 GitHub 仓库
4. 点击 Deploy site

## AdSense 配置指南

### 1. 申请 AdSense

访问 [adsense.google.com](https://adsense.google.com) 申请账号。

### 2. 添加广告代码

在 `index.html` 中找到以下广告位：

```html
<!-- 顶部广告位 (728x90) -->
<div class="ad-banner top-ad">
    <!-- 替换为 AdSense 代码 -->
</div>

<!-- 侧边广告位 (300x250) -->
<div class="ad-sidebar">
    <!-- 替换为 AdSense 代码 -->
</div>

<!-- 底部广告位 (728x90) -->
<div class="ad-banner bottom-ad">
    <!-- 替换为 AdSense 代码 -->
</div>
```

替换 `<div class="ad-placeholder">...</div>` 为您的 AdSense 广告代码。

### 3. 添加搜索广告（可选）

在搜索框下方添加搜索广告：

```html
<div class="ad-search">
    <!-- 搜索广告代码 -->
</div>
```

## 自定义配置

### 修改热门搜索词

编辑 `index.html` 中的 `hotTags` 区域：

```html
<div class="tags" id="hotTags">
    <a href="#" data-search="您的搜索词">搜索词</a>
    <!-- 添加更多 -->
</div>
```

### 添加分类链接

在 `index.html` 的 `categories` 区域添加新分类：

```html
<div class="category">
    <h4>分类名称</h4>
    <a href="网站链接" target="_blank">网站名称</a>
</div>
```

### 修改配色

编辑 `styles.css` 中的渐变色：

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

替换为您喜欢的颜色。

## 文件结构

```
ad-website/
├── index.html      # 主页
├── privacy.html    # 隐私政策
├── terms.html      # 使用条款
├── styles.css      # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 常见问题

### AdSense 审核要点

1. 确保有足够的原创内容
2. 隐私政策和使用条款页面必需
3. 网站需要有一定访问量
4. 避免诱导点击广告

### 提高收益建议

1. 定期更新热门搜索词
2. 添加更多分类和链接
3. 优化 SEO，提高搜索排名
4. 分享到社交媒体获取流量
5. 考虑添加博客内容

## 许可证

MIT License

## 联系方式

如有问题，请提交 Issue 或联系 support@quicksearch.example.com