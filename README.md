# neoeditor
自己写了一个所见即所得网页文本编辑器，满足基本需求
### [点击在线查看](http://www.neove.cc/neoeditor/index.html)
目前主要是支持以下的文本编辑功能
##### 上图
![](https://github.com/neove/neoeditor/raw/master/description.png)

####
其实就这么多，可扩展的东西还有不少，因为JS中的execCommand可以用的命令太多了，以后有时间再慢慢来研究
####下面是我在写的时候遇到的问题，在这里总结下
* 首先这是属于富文本编辑器的编写，就是可以嵌入网页，所见即所得的编辑器，对于网站用户评论等其他模块来说是非常方便的
* 所幸JS提供了这样的功能，就是execCommand，这让富文本编辑器的开发变得非常容易（其实我也是刚知道0.0） 
* 整个文本编辑模块嵌入到一个iframe中，通过以下设置，可以让iframe处于可编辑状态
 ```
  iframe.contentWindow.document.designMode = 'on';
 ```
* execCommand()是document下的方法，所以要获取iframe下的document来调用execCommand从而进行文本编辑
* 如果想检测被选中的文本，设计到浏览器的兼容性问题，主要是Firefox下的不兼容，这里提供一个兼容性写法
```
function getSelectedText() {
        var txt = "";
        if (window.getSelection) {
            txt = window.getSelection();
        } else if (window.document.getSelection) {
            txt = window.document.getSelection();
        } else if (window.document.selection) {
            txt = window.document.selection.createRange().text;
        }
        return txt;
    }
```
* 还有一点就是有的操作需要让文本编辑区获取到焦点，用focus（）方法即可

###
####富文本编辑器涉及的功能模块不仅仅这些，还有很多其他有意思的强大的功能，感兴趣的同学可以一起去了解下，编写一个属于自己的编辑器 0.0


