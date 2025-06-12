---
title: Markdown实用语法
tags: Markdown
categories: Markdown
keywords: Markdown
cover: /img/domenico-loia-hGV2TfOh0ns-unsplash.jpg
aside: false
abbrlink: c2b5e386
date: 2023-04-05 21:51:05
---
# 【前言】

<!-- <div style="写css样式 如:display:inline;"> -->

<p align = "justify" style = "text-indent:2em">Markdown 是一种轻量级标记语言，它用简洁的语法代替排版，使我们专心于码字。它的目标是实现易读易写，成为一种适用于网络的书写语言。同时，Markdown支持嵌入html标签。</p>

<p align = "justify" style = "text-indent:2em">通过使用Github Pages + butterfly的方法也算是搭建了一个属于自己的博客，由于之后post主要都以markdown的文章发布，所以我总结了markdown一些实用的语法（结合了HTML语法），都是自己亲测的。</p>

---

# 标题

```markdown
# 这是一级标题,也就是字最大的
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

也可以使用html的 <b>h1~h6</b>标签：

```markdown
<h1>这是一级标题,也就是字最大的</h1>
<h2>这是二级标题的</h2>
<h3>这是三级标题</h3>
<h4>这是四级标题</h41>
<h5>这是五级标题</h5>
<h6>这是六级标题</h6>
```

---

# 字体

- **加粗**

  ```markdown
  **这里是要加粗的字体**
  ```

- <b>加粗</b>

  ```markdown
  <b>这里是要加粗的字体</b>
  ```

- <strong>加粗</strong>

  ```markdown
  <strong>这里是要加粗的字体</strong>
  ```

  ---

- *斜体*

  ```markdown
  *这里是要倾斜的字体*
  ```

- <i>斜体</i>

  ```markdown
  <i>这里是要倾斜的字体</i>
  ```

- <em>斜体</em>

  ```markdown
  <em>这里是要倾斜的字体</em>
  ```

  ---

- ***斜体加粗***

  ```markdown
  ***这里是要斜体并且加粗的字体***
  ```

  ---

- ~~删除线~~

  ```markdown
  ~~这里是要打删除线的字体~~
  ```

- <del>删除线</del>

  ```markdown
  <del>这里是要打删除线的字体</del>
  ```

  ---

- <u>下划线</u>

  ```markdown
  <u>这里是要加下划线的字体</u>
  ```

---

# 分割线

```markdown
---
----
***
****
```

---

# 图片

Markdown中的图片分为三个部分，分别是“图片介绍”，“图床地址”和“图片信息title”

<ul>
<li>图片介绍是在图片如果加载失败的时候，将会显示的文字内容</li>
<li>图床地址用于填写图片存放的位置</li>
<li>图片信息显示的title，为鼠标移动到图片上面的时候显示的小字内容(可有可无)</li>
</ul>

```markdown
![图片介绍](图片url "图片信息显示") # ![背景](https://lsky.halc.top/LY53bA.jpg)
![可以不写](/文件夹名字/图片名字) # ![](/风景图库/img.png)
```

---

# 超链接

### 文本超链接

超链接的语法和图片的语法很像，唯一的区别就是前面是否有那个感叹号，示例如下:

```markdown
[超链接的内容](超链接地址 "超链接的title") # [百度](http://baidu.com)
```

也可以使用html的 <b>a</b> 标签：

```markdown
<a href="超链接地址" target="规定在何处打开目标 URL；_blank：新窗口打开；_parent：在父窗口中打开链接；_self：默认，当前页面跳转；_top：在当前窗体打开链接，并替换当前的整个窗体(框架页)">超链接名</a>
# <a href="https://www.luckylyh.top/index.html" target="_blank">LUCKY的博客</a>
```

### 图片超链接

```markdown
<a href="超链接地址">
<img  border="规定图像周围的边框" src="规定显示图像的 URL" alt="规定图像的替代文本" width="规定图像的宽度" height="规定图像的高度"></a>

# <p>创建图片链接:
# <a href="https://www.luckylyh.top/index.html">
# <img  border="10" src="smiley.gif" alt="LUCKY的博客" width="32" height="32"></a></p>

# <p>无边框的图片链接:
# <a href="https://www.luckylyh.top/index.html">
# <img border="0" src="smiley.gif" alt="LUCKY的博客" width="32" height="32"></a></p>
```

---

# 列表

### 无序列表

<b>语法：</b>无序列表使用’-/+/*'的任意一种符号都可以达到效果。

```markdown
- 内容
+ 内容
* 内容
```

<strong>【效果显示】</strong>

- 内容
+ 内容
* 内容

```markdown
<li>内容</li>
<li>内容</li>
<li>内容</li>
```

<strong>【效果显示】</strong>

<li>内容</li>
<li>内容</li>
<li>内容</li>

```markdown
<p>内容:</p>
<ul>
  <li>内容</li>
  <li>内容</li>
  <li>内容</li>
</ul>
```

<strong>【效果显示】</strong>

<p>内容:</p>
<ul>
  <li>内容</li>
  <li>内容</li>
  <li>内容</li>
</ul>

---

### 有序列表

通过从无序列表进行引申，可以得到有序列表的语法内容:

```markdown
1. 内容
2. 内容
```
<strong>【效果显示】</strong>

1. 内容
2. 内容

```markdown
<ol>
  <li>内容</li>
  <li>内容</li>
  <li>内容</li>
</ol>

<ol start="一个整数值属性，指定了列表编号的起始值。如：50">
  <li>内容</li>
  <li>内容</li>
  <li>内容</li>
</ol>
```

<strong>【效果显示】</strong>

<ol>
  <li>内容</li>
  <li>内容</li>
  <li>内容</li>
</ol>

<ol start="50">
  <li>内容</li>
  <li>内容</li>
  <li>内容</li>
</ol>

---

### 嵌套列表

```markdown
- 内容
    - 内容1
    - 内容2
```

<strong>【效果显示】</strong>

- 内容
    - 内容1
    - 内容2

```markdown
<p>嵌套列表：</p>
<ul>
  <li>内容</li>
  <li>内容
    <ul>
      <li>内容</li>
      <li>内容
        <ul>
          <li>内容</li>
          <li>内容</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>内容</li>
</ul>
```

<strong>【效果显示】</strong>

<p>嵌套列表：</p>
<ul>
  <li>内容</li>
  <li>内容
    <ul>
      <li>内容</li>
      <li>内容
        <ul>
          <li>内容</li>
          <li>内容</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>内容</li>
</ul>

---

### 自定义列表

```markdown
<p>自定义列表：</p>
<dl>
  <dt>内容</dt>
  <dd>- 内容</dd>
  <dt>内容</dt>
  <dd>- 内容</dd>
</dl>
```

<strong>【效果显示】</strong>

<p>自定义列表：</p>
<dl>
  <dt>内容</dt>
  <dd>- 内容</dd>
  <dt>内容</dt>
  <dd>- 内容</dd>
</dl>

---

# 表格

```markdown
|表头|表头|表头|
|---|:--:|---:|
|内容|内容|内容|
|内容|内容|内容|

>第二行分割表头和内容。
>- 有一个就行，为了对齐，多加了几个
>文字默认居左
>-两边加：表示文字居中
>-右边加：表示文字居右
>注：原生的语法两边都要用 | 包起来。此处省略
```

<strong>【效果显示】</strong>

|表头|表头|表头|
|---|:--:|---:|
|内容|内容|内容|
|内容|内容|内容|

---

```markdown
<p>没有单元格间距:</p>
<table border="1">
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
</table>

<p>单元格间距="0":</p>
<table border="1" cellspacing="0">
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
</table>

<p>单元格间距="10":</p>
<table border="1" cellspacing="10">
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
</table>
```

<strong>【效果显示】</strong>

<h4>没有单元格间距:</h4>
<table border="1">
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
</table>

<h4>单元格间距="0":</h4>
<table border="1" cellspacing="0">
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
</table>

<h4>单元格间距="10":</h4>
<table border="1" cellspacing="10">
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
<tr>
  <td>内容</td>
  <td>内容</td>
</tr>
</table>

---

# 文章对齐与首行缩进

```markdown
<p align = " 规定段落中文本的对齐方式。left(左对齐)；right(右对齐)；center(中间对齐)；justify(两端对齐)" style = "规定元素的行内样式。text-indent:属性规定文本块中首行文本的缩进；2em：缩进两个字符">px单位名称为像素，相对长度单位，像素（px）是相对于显示器屏幕分辨率而言的国内推荐；em单位名称为相对长度单位。相对于当前对象内文本的字体尺寸，国外使用比较多；pt单位名称为点（Point），绝对长度单位一般老版本的table使用长度大小单位但是基本上没有再使用。1. 以前IE无法调整那些使用px作为单位的字体大小,但后来几乎IE都支持了 在这里也推荐使用PX作为单位;2. 国外的大部分网站能够调整的原因在于其使用了em作为字体单位;3. Firefox能够调整px和em，但是96%以上的中国网民使用IE浏览器(或内核)。px像素(Pixel)。相对长度单位。像素px是相对于显示器屏幕分辨率而言的，QQ截图也是使用PX作为长度宽度单位。em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。</p>
```

<strong>【效果显示】</strong>

<p align = "justify" style = "text-indent:2em">px单位名称为像素，相对长度单位，像素（px）是相对于显示器屏幕分辨率而言的国内推荐；em单位名称为相对长度单位。相对于当前对象内文本的字体尺寸，国外使用比较多；pt单位名称为点（Point），绝对长度单位一般老版本的table使用长度大小单位但是基本上没有再使用。1. 以前IE无法调整那些使用px作为单位的字体大小,但后来几乎IE都支持了 在这里也推荐使用PX作为单位;2. 国外的大部分网站能够调整的原因在于其使用了em作为字体单位;3. Firefox能够调整px和em，但是96%以上的中国网民使用IE浏览器(或内核)。px像素(Pixel)。相对长度单位。像素px是相对于显示器屏幕分辨率而言的，QQ截图也是使用PX作为长度宽度单位。em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。</p>

---

# 实现上标、下标

```markdown
# 可以用HTML中的<sup>xxx</sup>实现上标、<sub>xxx</sub>实现下标。

H<sub>2</sub>O

注册商标<sup>&reg;</sup>

(x<sub>1</sub>+x<sub>2</sub>)<sup>2</sup> = x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>+2x<sub>1</sub>x<sub>2</sub>
```

<strong>【效果显示】</strong>

H<sub>2</sub>O

注册商标<sup>&reg;</sup>

(x<sub>1</sub>+x<sub>2</sub>)<sup>2</sup> = x<sub>1</sub><sup>2</sup>+x<sub>2</sub><sup>2</sup>+2x<sub>1</sub>x<sub>2</sub>

---

# 高亮

```markdown
# 可以使用高亮标签<mark></mark>。

这是<mark>高亮文本</mark>
```

<strong>【效果显示】</strong>

这是<mark>高亮文本</mark>

---

# iframe标签

```markdown
# <iframe> 标签用于在网页中内嵌另一个网页。

<p>
	<iframe style="width: 100%; height: 400px;" src="https://www.luckylyh.top" frameborder="0">
		<p>您的浏览器不支持  iframe 标签。</p>
	</iframe>
</p>

```

---

# 引用

通过使用引用，可以较为美观的引用别人的内容。

```
> 引用的引用的引用引用的引用的引用引用的引用的引用.
```

<strong>【效果显示】</strong>

> 引用的引用的引用引用的引用的引用引用的引用的引用.

### 多个段落的块引用

```markdown
> 引用的引用的引用引用的.
>
> 引用的引用的引用引用的引用的引用引用的引用的引用.
```

<strong>【效果显示】</strong>

> 引用的引用的引用引用的.
>
> 引用的引用的引用引用的引用的引用引用的引用的引用.

### 嵌套块引用

```markdown
> 引用.
>> 引用的引用.
>>> 引用的引用的引用.
```

<strong>【效果显示】</strong>

> 引用.
>> 引用的引用.
>>> 引用的引用的引用.

### 带有其它元素的块引用

```markdown
> #### The quarterly results look great!
>
> - 引用的引用.
> - 引用的引用引用的引用.
>
>  *引用的引用* 引用的引用引用的引用 **引用的**.
```

<strong>【效果显示】</strong>

> #### The quarterly results look great!
>
> - 引用的引用.
> - 引用的引用引用的引用.
>
>  *引用的引用* 引用的引用引用的引用 **引用的**.

---

# 特殊字符

一些常用的特殊符号，比如 § 、→ 、® 等等，均可借助HTML语言很容易地实现，具体可参考HTML 4.01 符号实体。

```markdown
|符号|说明|对应编码|英文解释|
|:---:|:---:|:---:|:---:|
|&|AND|符号|&amp;	ampersand|
|<|小于|&lt;|little|
|>|大于|&gt;|great|
| |空格|&nbsp;|space|
|¿|倒问号|&iquest;|inverted question|
|?|问号|&quest;|question|
|«|左书名号|&laquo;|left angle quote|
|»|右书名号|&raquo;|right angle quote|
|"|引号|&quot;|quote|
|‘|左单引号|&lsquo;|left single quote|
|’|右单引号|&rsquo;|right single quote|
|“|左双引号|&ldquo;|left double quote|
|”|右双引号|&rdquo;|right double quote|
|¶|段落符号|&para;|paragraph|
|§|章节符|&sect;|section|
|×|乘号|&times;|times|
|÷|除号|&divide;|divide|
|±|加减号|&plusmn;|minus|
|ƒ|function|&fnof;|function|
|√|根号|&radic;|radic|
|∞|无穷大|&infin;|infinite|
|°|度|&deg;|degree|
|≠|不等号|&ne;|inequality sign|
|≡|恒等于|&equiv;|equivalent|
|≤|小于等于|&le;|less than or equal to|
|≥|大于等于|&ge;|great than or equal to|
|⊥|垂直符号|&perp;|perpendicular|
|←|左箭头|&larr;|left arrow|
|→|右箭头|&rarr;|right arrow|
|↑|上箭头|&uarr;|up arrow|
|↓|下箭头|&darr;|down arrow|
|↔|水平双箭头|&harr;|horizontal arrow|
|↕|竖直双箭头|&varr;|vertical arrow|
|⇐|双线左箭头|&lArr;|left arrow|
|⇒|双线右箭头|&rArr;|right arrow|
|⇑|双线上箭头|&uArr;|up arrow|
|⇓|双线下箭头|&dArr;|down arrow|
|⇔|双线水平双箭头|&hArr;|horizontal arrow|
|⇕|双线竖直双箭头|&vArr;|vertical arrow|
|♠|黑桃|&spades;|spades|
|♥|红桃|&hearts;|hearts|
|♣|梅花|&clubs;|club|
|♦|方块|&diams;|diamonds|
|©|版权|&copy;|copy right|
|®|注册商标|&reg;|registration|
|™|商标|&trade;|trade|
|¥|人民币|&yen;|RMB|
|€|欧元|&euro;|euro|
|¢|美分|&cent;|cent|
|£|英磅|&pound;|pound|
|⊕|异或|&oplus;|Exclusive OR|
|½|二分之一|&frac12;|fraction|
|¼|四分之一|&frac14;|fraction|
|‰|千分符号|&permil;|per mille|
|∴|所以|&there4;|there fore|
|π|圆周率|&pi;|pi|
|¹|商标1|&sup1;|super 1|
|α|alpha|&alpha;|alpha|
|β|beta|&beta;|beta|
|γ|gamma|&gamma;|gamma|
|δ|delta|&delta;|delta|
|θ|theta|&theta;|theta|
|λ|lambda|&lambda;|lambda|
|σ|sigma|&sigma;|sigma|
|τ|tau|&tau;|tau|
```
<strong>【效果显示】</strong>

|符号|说明|对应编码|英文解释|
|:---:|:---:|:---:|:---:|
|&|AND|符号|&amp;	ampersand|
|<|小于|&lt;|little|
|>|大于|&gt;|great|
| |空格|&nbsp;|space|
|¿|倒问号|&iquest;|inverted question|
|?|问号|&quest;|question|
|«|左书名号|&laquo;|left angle quote|
|»|右书名号|&raquo;|right angle quote|
|"|引号|&quot;|quote|
|‘|左单引号|&lsquo;|left single quote|
|’|右单引号|&rsquo;|right single quote|
|“|左双引号|&ldquo;|left double quote|
|”|右双引号|&rdquo;|right double quote|
|¶|段落符号|&para;|paragraph|
|§|章节符|&sect;|section|
|×|乘号|&times;|times|
|÷|除号|&divide;|divide|
|±|加减号|&plusmn;|minus|
|ƒ|function|&fnof;|function|
|√|根号|&radic;|radic|
|∞|无穷大|&infin;|infinite|
|°|度|&deg;|degree|
|≠|不等号|&ne;|inequality sign|
|≡|恒等于|&equiv;|equivalent|
|≤|小于等于|&le;|less than or equal to|
|≥|大于等于|&ge;|great than or equal to|
|⊥|垂直符号|&perp;|perpendicular|
|←|左箭头|&larr;|left arrow|
|→|右箭头|&rarr;|right arrow|
|↑|上箭头|&uarr;|up arrow|
|↓|下箭头|&darr;|down arrow|
|↔|水平双箭头|&harr;|horizontal arrow|
|↕|竖直双箭头|&varr;|vertical arrow|
|⇐|双线左箭头|&lArr;|left arrow|
|⇒|双线右箭头|&rArr;|right arrow|
|⇑|双线上箭头|&uArr;|up arrow|
|⇓|双线下箭头|&dArr;|down arrow|
|⇔|双线水平双箭头|&hArr;|horizontal arrow|
|⇕|双线竖直双箭头|&vArr;|vertical arrow|
|♠|黑桃|&spades;|spades|
|♥|红桃|&hearts;|hearts|
|♣|梅花|&clubs;|club|
|♦|方块|&diams;|diamonds|
|©|版权|&copy;|copy right|
|®|注册商标|&reg;|registration|
|™|商标|&trade;|trade|
|¥|人民币|&yen;|RMB|
|€|欧元|&euro;|euro|
|¢|美分|&cent;|cent|
|£|英磅|&pound;|pound|
|⊕|异或|&oplus;|Exclusive OR|
|½|二分之一|&frac12;|fraction|
|¼|四分之一|&frac14;|fraction|
|‰|千分符号|&permil;|per mille|
|∴|所以|&there4;|there fore|
|π|圆周率|&pi;|pi|
|¹|商标1|&sup1;|super 1|
|α|alpha|&alpha;|alpha|
|β|beta|&beta;|beta|
|γ|gamma|&gamma;|gamma|
|δ|delta|&delta;|delta|
|θ|theta|&theta;|theta|
|λ|lambda|&lambda;|lambda|
|σ|sigma|&sigma;|sigma|
|τ|tau|&tau;|tau|

---

后续会持续更新！！！