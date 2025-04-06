---
title: 认识Matplotlib
abbrlink: d55b2e97
date: 2025-03-12 23:23:36
tags: [机器学习 ,Matplotlib]
categories: 机器学习
keywords: [机器学习 ,Matplotlib]
cover: /img/Matplotlibtu.png
---

## Matplotlib的介绍

- 是专门用于开发2D图表(包括3D图表)
- 以渐进、交互式方式实现数据可视化

---

## Matplotlib的优势

可视化是在整个数据挖掘的关键辅助工具，可以清晰的理解数据，从而调整我们的分析方法。

- 能将数据进行可视化，更直观的呈现

- 使数据更加客观、更具说服力

---

## 实现一个简单的Matplotlib画图 --- 以折线图为例

### matplotlib.pyplot模块

matplotlib.pytplot包含了一系列类似于matlab的画图函数。

```matplotlib
import matplotlib.pyplot as plt
```

### 图形绘制流程：

- 1、创建画布 --- plt.figure()

```matplotlib
plt.figure(figsize=(), dpi=)
    figsize: 指定图的长宽
    dpi: 图像的清晰度
    返回fig对象
```

- 2、绘制图像 --- plt.plot()

以折线图为例

- 3、显示图像 --- plt.show()

### 折线图绘制与显示

```matplotlib
import matplotlib.pyplot as plt

# 1.创建画布
plt.figure(figsize=(20, 8), dpi=100)

# 2.绘制图像
plt.plot([1, 2, 3, 4, 5, 6, 7], [10, 15, 13, 18, 16, 20, 10])

# 3.图像显示
plt.show()
```

如下：

![](./认识matplotlib/Snipaste_01.png)