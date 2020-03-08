[exam.js]:https://github.com/Memorykill/Memorykill.github.io/blob/master/exam/exam.js "exam.js"
# 编辑考试页
网页文件结构
主要编辑的是exam.js[exam.js]文件 
<details>
<summary>展开查看</summary>
<pre><code>
├── begin.svg
├── res.svg
├── x.svg
├── 正确.svg
├── 错误.svg
├── github.svg
├── home.svg    
├── key.svg
├── logo.png
├── logo.svg
├── nav-more.svg
├── rbegin.svg//各种的svg是图片
├── index.html//网页文件
├── exam.js[exam] //存储的卷子数据    
├── README.md//现在看的当前页面
</code></pre>
</details>
 
主要编辑的是exam.js文件
# 如何编辑exam.js文件
exam.js是通过一个参数exam传递参数的
### 演变过程及复杂过程
```
var exam=[];

var exam=[
    {name:"卷子题目"},
    {name:"卷子题目"},
];

var exam=[
     {name:"卷子题目",test:[]},
     {name:"卷子题目",test:[]},
];

var exam=[
     {name:"卷子题目",test:[
         {exam:"1. 题目",is:"c",a:"A. 选项",b:"B选项 ",c:"C选项",d:"D. 选项"},
         {exam:"2. 题目",is:"c",a:"A. 选项",b:"B选项 ",c:"C选项",d:"D. 选项"},
         {exam:"3. 题目",is:"c",a:"A. 选项",b:"B选项 ",c:"C选项",d:"D. 选项"},
     ]},
     {name:"卷子题目",test:[
        {exam:"1. 题目",is:"c",a:"A. 选项",b:"B选项 ",c:"C选项",d:"D. 选项"},
         {exam:"2. 题目",is:"c",a:"A. 选项",b:"B选项 ",c:"C选项",d:"D. 选项"},
         {exam:"3. 题目",is:"c",a:"A. 选项",b:"B选项 ",c:"C选项",d:"D. 选项"},
     ]},
];
```
注意这个可以无限嵌套，但必须得是这种形式
- 里面的数据必须以key:"value"形式
- 你所见的符号都是<font color="#9ACD32"><strong>英文输入法输</strong></font>出来的，否则会出错
- 暂时还没想好，可以打开看下[exam.js]

