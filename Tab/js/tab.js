 var that;
 class Tab {
     constructor(id) {
             //获取元素 get element 
             that = this;
             this.main = document.querySelector(id);
             this.add = this.main.querySelector('.tabadd');
             //获取li的父元素
             this.ul = this.main.querySelector('.firstnav ul:first-child');
             //获取section的父元素
             this.fasection = this.main.querySelector('.tabscon');
             this.init();
         }
         //初始化操作 让相关的元素绑定事件 initialize 
     init() {
             this.updateNode()
                 //'+'只有一个不需要循环 所以加在外边就可以了
             this.add.onclick = this.addTab;
             for (var i = 0; i < this.lis.length; i++) { // 每个li有单独的索引号   Every li has 'index'   //给每一个li添加绑定事件  Every li add 'click'
                 this.lis[i].index = [i];
                 this.lis[i].onclick = this.toggleTab; //不需要 toggleTab（），因为是要先click才调用，加上（）就直接调用了
                 this.remove[i].onclick = this.removeTab; //当前的remove没有索引号，父亲li有
                 this.spans[i].ondblclick = this.editTab;
                 this.sections[i].ondblclick = this.editTab;

             }
         }
         //获取所有等价数量的li和section 还有删除按钮 动态添加元素，需要重新获取对应的元素
     updateNode() {
             this.lis = this.main.querySelectorAll('li');
             this.sections = this.main.querySelectorAll('section');
             this.remove = this.main.querySelectorAll('.fas');
             this.spans = this.main.querySelectorAll('.firstnav li span:first-child');

         }
         // 切换功能 toggle 

     toggleTab() {
         that.clearClass();
         this.className = 'liactive';
         that.sections[this.index].className = 'conactive';
     }

     //---------------------留下点击的操作 清除其他样式  Start---------------------
     clearClass() {
             for (var i = 0; i < this.lis.length; i++) {
                 this.lis[i].className = '';
                 this.sections[i].className = ''
             }
         }
         //---------------------留下点击的操作 清除其他样式   End---------------------
         //添加功能 add 
     addTab() {
             that.clearClass();
             var random = Math.random();
             //1.创建li元素和section元素
             var li = '<li class="liactive"><span>New Test</span><i class="fas fa-trash-alt"></i>';
             var section = '<section class="conactive">Test' + random + ' </section>';
             //2.把这两个元素追加到对应的父元素中
             that.ul.insertAdjacentHTML('afterbegin', li);
             that.fasection.insertAdjacentHTML('afterbegin', section);
             that.init();
         }
         //删除功能 remove 
     removeTab(e) {
             //阻止冒泡行为 防止触发li的的切换点击事件
             e.stopPropagation();
             var index = this.parentNode.index;
             console.log(index);
             //根据索引号删除对应的li和section
             that.lis[index].remove();
             that.sections[index].remove();
             that.init();
             //删除的不是选中状态的li的时候，原来选中的li保持不变
             if (document.querySelector('.liactive')) return;
             index--;
             that.lis[index] && that.lis[index].click();
         }
         //修改功能 edit 
     editTab() {
         //先获取文字
         var str = this.innerHTML;
         //双击禁止选定文字
         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
         this.innerHTML = '<input type = "text" />';
         var input = this.children[0];
         input.value = str;
         input.select(); //文本框的文字处于选定状态；
         //离开文本框就把里边的值给父亲span
         input.onblur = function() {
                 this.parentNode.innerHTML = this.value;
             }
             //按下回车也可以将文本框里的值给span
         input.onkeyup = function(e) {
             if (e.keyCode === 13) {
                 //手动调用表单失去焦点事件 不需要鼠标离开操作
                 this.blur();
             }
         }
     }
 }

 new Tab('#tab');