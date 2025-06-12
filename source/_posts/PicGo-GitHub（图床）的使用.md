---
title: PicGo+GitHub（图床）的使用
tags:
  - 问题区
  - GitHub
categories: 问题区
keywords: GitHub
abbrlink: 7b3d0544
date: 2025-06-05 19:58:19
cover: https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/PicGo.png
---

1、首先下载PicGo https://molunerfinn.com/PicGo/

2、进入PicGo-图床设置-GitHub-GitHub设置

![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250519234015830.png)

- 设置自定义域名：

  - 可加速：https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main

- 设定Token获得方法：

  - 登录 Github 后，点击<b>“右上角头像->Settings”</b>，进入用户设置界面（个人建议单独建一个库，专门用来放图片）

    ![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250519234610463.png)

  - 然后点击左侧边栏的 <b>“Developer Settings”</b> 选项，配置 Github API Key（即 token）

    ![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250519234724703.png)

  - 记得是点击Tokens(classic)，选择Generate new Token-Generate new token(classic)

    ![image-20250519234927290](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/image-20250519234927290.png)

    ![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250519235352863.png)

  - 设置 token，如下图所示：设置令牌名称（Note）、到期时间（Expiration）、可访问的权限范围（Select scopes），然后保存即可

    ![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250519235629822.png)

  - 记得点击完Generate token后立马复制生成后**立即复制保存**（关闭页面后将无法再次查看）

    ![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250520000321423.png)

3、确认后，**设置为默认图床**，然后就可以上传图片了，之后在**相册**查看即可

![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250520000532528.png)