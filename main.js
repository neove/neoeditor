/**
 * Created by Administrator on 4/28/2016.
 */
$(function(){
   (function(window,document,$){
       //设置编辑状态
        var iframe=document.getElementById('editor-text');
        var font_size=3;//font-size is from 1 to 7,default is 2
        var docu=iframe.contentWindow.document;
        iframe.contentWindow.document.designMode = 'on';//这样获取iframe的document对象
       if(getCookie('text_cookie')){
       $(docu).find('body').html(getCookie('text_cookie'));
       }
       $(docu).find('body').css({
           'width':'790',
           'word-break':'break-all'
       });
       //字体加粗
       $('.bold').click(function(){
           docu.execCommand("Bold",false,null);//这里一定要获取iframe下的window
       });
       //斜体
       $('.italic').click(function(){
           docu.execCommand("Italic",false,null);
       });
       //加字号
       $('.font-add').click(function(){
           font_size++;
           docu.execCommand("FontSize",false,font_size);
       });
       $('.font-dec').click(function(){
           font_size--;
           docu.execCommand("FontSize",false,font_size);
       });
       //color
       $('.color').click(function(){
           $('ul.color-list').toggle();
       });
       $('.color-list li').click(function () {
           var co=this.className.substring(1);
           docu.execCommand("ForeColor",false,'#'+co);
       });
       //link
       $('.link').click(function(){
          // var text=getSelectedText();
           docu.execCommand("CreateLink",false,null);//null表示对选中文本操作
       });
       //underline
       $('.underline').click(function(){
           docu.execCommand("Underline");
       });
       //Justify
       $('.r').click(function () {
           docu.execCommand('JustifyRight')
       });
       $('.l').click(function () {
           docu.execCommand('JustifyLeft')
       });
       $('.c').click(function () {
           docu.execCommand('JustifyCenter')
       });
       $('.rank').click(function () {
           docu.execCommand('InsertUnorderedList');
       });
       $('.line').click(function () {
           docu.execCommand('InsertHorizontalRule',false,'aa')//这里要用false
       });
       $('.copy').click(function () {
           docu.execCommand('Copy')
       });
       $('.delete').click(function () {
           $(iframe).focus();
           docu.execCommand('Delete')
       });
       $('.s').click(function () {
           $(iframe).focus();
           docu.execCommand('StrikeThrough')
       });
       $('.save').click(function () {
           var cont=$(docu).find('body').html();//这里用docu 不是iframe
           setCookie('text_cookie',cont,7);
       });
       $('header').click(function(){
          $(this).css({
              '-webkit-transform':'rotate3d(0,1,0,180deg)',
              '-moz-transform':   'rotate3d(0,1,0,180deg)',
              '-ms-transform':    'rotate3d(0,1,0,180deg)',
              '-o-transform':     'rotate3d(0,1,0,180deg)',
              'transform':        'rotate3d(0,1,0,180deg)',
              'opacity':'0'
          });

       $('div.wrap').fadeOut(1000);
   });
       function getCookie(key){
           var arr1=document.cookie.split('; ');/**将document的所有cookie拆分为数组存放**/
           for( var i=0;i<arr1.length;i++){
               var arr2=arr1[i].split('=');     /**将单个字符串cookie拆分为数组**/
               if(arr2[0]==key){
                   return decodeURI(arr2[1]);
               }
           }
       }
       function setCookie(key,value,t){
           var oDate=new Date();
           oDate.setDate(oDate.getDate()+t);
           document.cookie = key + '=' + encodeURI(value) + ';expires=' + oDate.toGMTString();
       }
        //封装一个检测选中文本的函数,兼容性写法
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
})(window,document,jQuery);
});
