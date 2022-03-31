 var that;
 class Tab {
     constructor(id) {
             //获取元素 get element 
             that = this;
             this.main = document.querySelector(id);
             this.lis = this.main.querySelectorAll('li');
             this.sections = this.main.querySelectorAll('section');
             this.init();
         }
         //初始化操作 让相关的元素绑定事件 initialize 
     init() {
             // 每个li有单独的索引号   Every li has 'index'
             //给每一个li添加绑定事件  Every li add 'click'
             for (var i = 0; i < this.lis.length; i++) {
                 this.lis[i].index = [i];
                 this.lis[i].onclick = this.toggleTab; //不需要 toggleTab（），因为是要先click才调用，加上（）就直接调用了

             }
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
             }
         }
         //---------------------留下点击的操作 清除其他样式   End---------------------
         //添加功能 add 
     addTab() {}
         //删除功能 remove 
     removeTab() {}
         //修改功能 edit 
     editTab() {}
 }

 new Tab('#tab');