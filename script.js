// 搜索引擎配置
const searchEngines = {
    google: {
        url: 'https://www.google.com/search?q=',
        name: 'Google'
    },
    bing: {
        url: 'https://www.bing.com/search?q=',
        name: '必应'
    },
    baidu: {
        url: 'https://www.baidu.com/s?wd=',
        name: '百度'
    },
    duckduckgo: {
        url: 'https://duckduckgo.com/?q=',
        name: 'DuckDuckGo'
    }
};

// 获取元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchEngineSelect = document.getElementById('searchEngine');
const hotTags = document.querySelectorAll('.tags a');

// 执行搜索
function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        searchInput.focus();
        return;
    }

    const engine = searchEngineSelect.value;
    const searchUrl = searchEngines[engine].url + encodeURIComponent(query);
    window.open(searchUrl, '_blank');
}

// 事件监听
searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// 热门搜索标签点击
hotTags.forEach(tag => {
    tag.addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = this.getAttribute('data-search');
        searchInput.value = searchTerm;
        performSearch();
    });
});

// 页面加载时聚焦搜索框
window.addEventListener('load', function() {
    searchInput.focus();

    // 从 localStorage 保存搜索引擎选择
    const savedEngine = localStorage.getItem('searchEngine');
    if (savedEngine && searchEngines[savedEngine]) {
        searchEngineSelect.value = savedEngine;
    }
});

// 搜索引擎选择变化时保存
searchEngineSelect.addEventListener('change', function() {
    localStorage.setItem('searchEngine', this.value);
});

// 广告联盟提示（获取 AdSense 后删除此注释）
// 1. 在广告位 div 中替换 <div class="ad-placeholder">...</div> 为 AdSense 代码
// 2. 确保 AdSense 代码已通过审核
// 3. 可以在 Google AdSense 控制台中监控收益

// 数据分析提示（可选）
// 可以添加 Google Analytics 来跟踪用户行为
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>