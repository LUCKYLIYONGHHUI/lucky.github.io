---
title: Hexo Butterfly背景板透明
tags:
  - Hexo
  - Butterfly
  - 问题区
categories: 问题区
keywords:
  - Hexo
  - Butterfly
cover: 'https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/transparent.png'
abbrlink: cace3ad1
aside: false
date: 2025-05-31 10:46:12
---

### 创建css文件，书写样式

在blog根目录找到source/css（没有就新建一个），再在css文件夹中新建一个transparent.css文件，写入

```css
/*文章页面*/
.layout>#post{
	background: transparent !important; /* 页面透明 */
	background: rgba(0, 0, 0, 0.3); /* 卡片背景为白色透明度为0.3 */
	backdrop-filter: blur(3px); /* 添加毛玻璃效果 */
}

/*分类页面*/
.layout>#page{
    /* background: rgba(0, 0, 0, 0.15); */ /* 背景为白色透明度为0.15 */
    background: transparent !important;  /* 页面透明 */
}

/*侧边栏页面*/
#aside-content>.card-widget  {
	background: rgba(0, 0, 0, 0.15); 
}
```

【注】：
```css
background: rgba(255, 255, 255, 0.15);  <!--背景为黑色透明度为0.15-->
```

### 引用样式

在_config.butterfly.yml中找到inject，在head下面添加下面代码来引用之前写的样式。

```css
- <link rel="stylesheet" href="/css/transparent.css"> # 文章、目录、个人主页透明度设置
```

### 清理缓存并重建

```markdown
hexo cl && hexo g && hexo d
hexo cl && hexo g && hexo s # 本地查看 http://localhost:4000/
```

### 示例

![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250531105406389.png)