---
title: Hexo Butterfly图库设置
tags:
  - Hexo
  - Butterfly
  - 问题区
categories: 问题区
keywords:
  - Hexo
  - Butterfly
cover: https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/Generate%20Picture%20with250522.png
abbrlink: 3370dee4
aside: false
date: 2025-05-21 23:34:41
---

### 新建图库页面

首先，前往你的 Hexo 博客的根目录，在 Hexo 博客根目录 [blog]下打开终端或者在vscode控制台中，输入

```markdown
hexo new page sucaiku
```
---

### 修改相关参数

找到 source/sucaiku/index.md 这个文件，并修改这个文件，记得添加 type: "sucaiku"

```markdown
---
title: 素材库
date: 2025-05-13 15:22:41
type: "sucaiku"
aside: false
---
```

然后再在该页面（文件里）添加一下代码

```markdown
<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/paper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/dailyPhoto' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
</div>
```

```markdown
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

|参数|解释|
|:--:|:--:|
|name|图库名字|
|description|图库描述|
|link|连接到相应相册的地址|
|img-url 目录名|图库封面的地址|

---

### 新建相册集详情页及修改相应参数

由于相册页面需要很多的 page，所以在写数据的时候自行写入路径link，示例数据中有两个link，所以需要再创建两个页面注意新建的页面必须与link一致

```markdown
hexo new page paper
hexo new page photo
```

找到 source/paper/index.md 和source/photo/index.md两个文件，这两个为相册集详情页

然后内容为以下内容, 需在详情页加上type: "sucaiku_detail"

```markdown
---
title: 壁纸
date: 2025-05-13 17:16:51
aside: false
type: "sucaiku_detail"
---
```

```markdown
---
title: 日常生活
date: 2025-05-13 17:16:47
aside: false
type: "sucaiku_detail"
---
```

然后就可以在source/paper/index.md 和source/photo/index.md两个文件中添加你所需要放的图片，如：

```markdown
---
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg) # 网页图片链接
{% endgallery %}
---
```

【注】：本地图片路径

```markdown
![](/dailyPhoto/index/wallhaven-1p11l9.png)
```

### 清理缓存并重建

```markdown
hexo cl && hexo g && hexo d
hexo cl && hexo g && hexo s  # 本地查看 http://localhost:4000/
```