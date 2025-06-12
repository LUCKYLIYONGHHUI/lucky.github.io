---
title: hexo+butterfly提交GitHub过程中出现Error：Spawn failed
tags:
  - Hexo
  - Butterfly
  - Github
  - 问题区
categories: 问题区
keywords:
  - Hexo
  - Butterfly
  - Github
cover: 'https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/Spawn.png'
abbrlink: 6fcc8ee2
aside: false
date: 2025-06-11 13:10:45
---

hexo+butterfly提交GitHub过程中出现Error：Spawn failed，该如何解决？如图所示：

![](https://cdn.jsdelivr.net/gh/LUCKYLIYONGHHUI/picture@main/20250520095530061.png)

### 使用GitHub的443端口

22端口可能被防火墙屏蔽了，可以尝试连接GitHub的443端口。

这个解决方案的思路是：给`~/.ssh/config`文件里添加如下内容，这样ssh连接GitHub的时候就会使用443端口。如果`~/.ssh`目录下没有config文件，手动新建一个即可。

```text
Host github.com
  Hostname ssh.github.com
  Port 443
```

### 验证是否成功

修改完`~/.ssh/config`文件后，使用`ssh -T git@github.com`来测试和GitHub的网络通信是否正常。

```bash
$ ssh -T git@github.com
The authenticity of host '[ssh.github.com]:443 ([20.205.243.160]:443)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:1: github.com
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

输入**yes**即可，如果提示`Hi xxxxx! You've successfully authenticated, but GitHub does not provide shell access.` 就表示一切正常了。

```bash
Warning: Permanently added '[ssh.github.com]:443' (ED25519) to the list of known hosts.
Hi LUCKYLIYONGHHUI! You've successfully authenticated, but GitHub does not provide shell access.
```

> 参考来源：[坑：ssh: connect to host github.com port 22: Connection refused - 知乎](https://zhuanlan.zhihu.com/p/521340971)