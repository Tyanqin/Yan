// window.onload = function(){
//
//
//     // var can=document.getElementById('canvas');
//     // var ctx=can.getContext('2d');
//     // var w=can.width=window.innerWidth;
//     // var h=can.height=window.innerHeight;
//     //
//     // var count=30;
//     // var drops=[];
//     // window.onresize=function()
//     // {
//     //     w=can.width=window.innerWidth;
//     //     h=can.height=window.innerHeight;
//     // };
//     // function Drop(){}
//     // Drop.prototype={
//     //     init: function()
//     //     {
//     //         this.x=random(0,w);
//     //         this.y=0;
//     //         this.r=1;
//     //         this.color='#0ff';
//     //         this.vy=random(4,5);
//     //         this.vr=1;
//     //         this.a=1;
//     //         this.va=0.96;
//     //         this.l=random(h*0.8,h*0.9);
//     //     },
//     //     draw:function()
//     //     {
//     //         if(this.y>this.l)
//     //         {
//     //             ctx.beginPath();
//     //             ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
//     //             ctx.strokeStyle='rgba(0,255,255,'+this.a+')';
//     //             ctx.stroke();
//     //         }
//     //         else
//     //         {
//     //             ctx.fillStyle=color(this.a);
//     //             ctx.fillRect(this.x,this.y,2,10);
//     //         }
//     //         this.update();
//     //     },
//     //     update: function()
//     //     {
//     //         if(this.y<this.l)
//     //         {
//     //             this.y+=this.vy;
//     //         }
//     //         else
//     //         {
//     //             if(this.a>0.03)
//     //             {
//     //                 this.r+=this.vr;
//     //                 if(this.r>50)
//     //                 {
//     //                     this.a*=this.va;
//     //                 }
//     //             }
//     //             else
//     //             {
//     //                 this.init();
//     //             }
//     //         }
//     //     }
//     // }
//     // function move()
//     // {
//     //     ctx.fillStyle='rgba(0,0,0,.1)';
//     //     ctx.fillRect(0,0,w,h);
//     //     for(var i=0;i<drops.length;i++)
//     //     {
//     //         drops[i].draw();
//     //     }
//     //     requestAnimationFrame(move);
//     // };
//     // function setup()
//     // {
//     //     for(var i=0;i<count;i++)
//     //     {
//     //         (function(j)
//     //         {
//     //             setTimeout(function(){
//     //                 var drop=new Drop();
//     //                 drop.init();
//     //                 drops.push(drop);
//     //             },j*200);
//     //         }(i))
//     //     }
//     // };
//     // setup();
//     // move();
//     // function random(min,max)
//     // {
//     //     return Math.random()*(max-min)+min;
//     // };
//     // function color(a)
//     // {
//     //     var r=Math.floor(Math.random()*255);
//     //     var g=Math.floor(Math.random()*255);
//     //     var b=Math.floor(Math.random()*255);
//     //     return 'rgba('+r+','+g+','+b+','+a+')';
//     // };
//
//
// //     //获取画板
// // //doccument 当前文档
// // //getElement 获取一个标签
// // //ById 通过Id名称的方式
// // //var 声明一片空间
// // //var canvas 声明一片空间的名字叫做canvas
// //     var canvas = document.getElementById("canvas");
// // //获取画板权限 上下文
// //     var ctx = canvas.getContext("2d");
// // //让画板的大小等于屏幕的大小
// //     /*
// //     思路：
// //     1.获取屏幕对象
// //     2.获取屏幕的尺寸
// //     3.屏幕的尺寸赋值给画板
// //     */
// // //获取屏幕对象
// //     var s = window.screen;
// // //获取屏幕的宽度和高度
// //     var w = s.width;
// //     var h = s.height;
// // //设置画板的大小
// //     canvas.width = w;
// //     canvas.height = h;
// //
// // //设置文字大小
// //     var fontSize = 14;
// // //计算一行有多少个文字 取整数 向下取整
// //     var clos = Math.floor(w/fontSize);
// // //思考每一个字的坐标
// // //创建数组把clos 个 0 （y坐标存储起来）
// //     var drops = [];
// //     var str = "qwertyuiopasdfghjklzxcvbnm";
// // //往数组里面添加 clos 个 0
// //     for(var i = 0;i<clos;i++) {
// //         drops.push(0);
// //     }
// //
// // //绘制文字
// //     function drawString() {
// // //给矩形设置填充色
// //         ctx.fillStyle="rgba(0,0,0,0.05)"
// // //绘制一个矩形
// //         ctx.fillRect(0,0,w,h);
// //
// // //添加文字样式
// //         ctx.font = "600 "+fontSize+"px 微软雅黑";
// // //设置文字颜色
// //         ctx.fillStyle = "#ff2d2d";
// //
// //         for(var i = 0;i<clos;i++) {
// // //x坐标
// //             var x = i*fontSize;
// // //y坐标
// //             var y = drops[i]*fontSize;
// // //设置绘制文字
// //             ctx.fillText(str[Math.floor(Math.random()*str.length)],x,y);
// //             if(y>h&&Math.random()>0.99){
// //                 drops[i] = 0;
// //             }
// //             drops[i]++;
// //         }
// //     }
// // //定义一个定时器，每隔30毫秒执行一次
// //     setInterval(drawString,30);
//
//
// //     var context;
// //     var arr = new Array();
// //     var starCount = 800;
// //     var rains = new Array();
// //     var rainCount =20;
// //     var windowWidth;
// //     //初始化画布及context
// //     function init(){
// //         //获取canvas
// //         var stars = document.getElementById("stars");
// //         windowWidth = window.innerWidth; //当前的窗口的高度
// //         stars.width=windowWidth;
// //         stars.height=window.innerHeight;
// //         //获取context
// //         context = stars.getContext("2d");
// //     }
// //     //创建一个星星对象
// //     var Star = function (){
// //         this.x = windowWidth * Math.random();//横坐标
// //         this.y = 5000 * Math.random();//纵坐标
// //         this.text=".";//文本
// //         this.color = "white";//颜色
// //         //产生随机颜色
// //         this.getColor=function(){
// //             var _r = Math.random();
// //             if(_r<0.5){
// //                 this.color = "#333";
// //             }else{
// //                 this.color = "white";
// //             }
// //         }
// //         //初始化
// //         this.init=function(){
// //             this.getColor();
// //         }
// //         //绘制
// //         this.draw=function(){
// //             context.fillStyle=this.color;
// //             context.fillText(this.text,this.x,this.y);
// //         }
// //     }
// //     //画月亮
// //     function drawMoon(){
// //         var moon = new Image();
// //         moon.src = "./images/moon.jpg"
// //         context.drawImage(moon,-5,-10);
// //     }
// //     //页面加载的时候
// //     window.onload = function() {
// //         init();
// //         //画星星
// //         for (var i=0;i<starCount;i++) {
// //             var star = new Star();
// //             star.init();
// //             star.draw();
// //             arr.push(star);
// //         }
// //         //画流星
// //         for (var i=0;i<rainCount;i++) {
// //             var rain = new MeteorRain();
// //             rain.init();
// //             rain.draw();
// //             rains.push(rain);
// //         }
// //         drawMoon();//绘制月亮
// //         playStars();//绘制闪动的星星
// //         playRains();//绘制流星
// //     }
// //     //星星闪起来
// //     function playStars(){
// //         for (var n = 0; n < starCount; n++){
// //             arr[n].getColor();
// //             arr[n].draw();
// //         }
// //         setTimeout("playStars()",100);
// //     }
// //     /*流星雨开始*/
// //     var MeteorRain = function(){
// //         this.x = -1;
// //         this.y = -1;
// //         this.length = -1;//长度
// //         this.angle = 30; //倾斜角度
// //         this.width = -1;//宽度
// //         this.height = -1;//高度
// //         this.speed = 1;//速度
// //         this.offset_x = -1;//横轴移动偏移量
// //         this.offset_y = -1;//纵轴移动偏移量
// //         this.alpha = 1; //透明度
// //         this.color1 = "";//流星的色彩
// //         this.color2 = ""; //流星的色彩
// //         /****************初始化函数********************/
// //         this.init = function () //初始化
// //         {
// //             this.getPos();
// //             this.alpha = 1;//透明度
// //             this.getRandomColor();
// //             //最小长度，最大长度
// //             var x = Math.random() * 80 + 150;
// //             this.length = Math.ceil(x);
// // //         x = Math.random()*10+30;
// //             this.angle = 30; //流星倾斜角
// //             x = Math.random()+0.5;
// //             this.speed = Math.ceil(x); //流星的速度
// //             var cos = Math.cos(this.angle*3.14/180);
// //             var sin = Math.sin(this.angle*3.14/180) ;
// //             this.width = this.length*cos ; //流星所占宽度
// //             this.height = this.length*sin ;//流星所占高度
// //             this.offset_x = this.speed*cos ;
// //             this.offset_y = this.speed*sin;
// //         }
// //         /**************获取随机颜色函数*****************/
// //         this.getRandomColor = function (){
// //             var a = Math.ceil(255-240* Math.random());
// //             //中段颜色
// //             this.color1 = "rgba("+a+","+a+","+a+",1)";
// //             //结束颜色
// //             this.color2 = "black";
// //         }
// //         /***************重新计算流星坐标的函数******************/
// //         this.countPos = function ()//
// //         {
// //             //往左下移动,x减少，y增加
// //             this.x = this.x - this.offset_x;
// //             this.y = this.y + this.offset_y;
// //         }
// //         /*****************获取随机坐标的函数*****************/
// //         this.getPos = function () //
// //         {
// //             //横坐标200--1200
// //             this.x = Math.random() * window.innerWidth; //窗口高度
// //             //纵坐标小于600
// //             this.y = Math.random() * window.innerHeight; //窗口宽度
// //         }
// //         /****绘制流星***************************/
// //         this.draw = function () //绘制一个流星的函数
// //         {
// //             context.save();
// //             context.beginPath();
// //             context.lineWidth = 1; //宽度
// //             context.globalAlpha = this.alpha; //设置透明度
// //             //创建横向渐变颜色,起点坐标至终点坐标
// //             var line = context.createLinearGradient(this.x, this.y,
// //                 this.x + this.width,
// //                 this.y - this.height);
// //             //分段设置颜色
// //             line.addColorStop(0, "white");
// //             line.addColorStop(0.3, this.color1);
// //             line.addColorStop(0.6, this.color2);
// //             context.strokeStyle = line;
// //             //起点
// //             context.moveTo(this.x, this.y);
// //             //终点
// //             context.lineTo(this.x + this.width, this.y - this.height);
// //             context.closePath();
// //             context.stroke();
// //             context.restore();
// //         }
// //         this.move = function(){
// //             //清空流星像素
// //             var x = this.x+this.width-this.offset_x;
// //             var y = this.y-this.height;
// //             context.clearRect(x-3,y-3,this.offset_x+5,this.offset_y+5);
// // //         context.strokeStyle="red";
// // //         context.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1);
// //             //重新计算位置，往左下移动
// //             this.countPos();
// //             //透明度增加
// //             this.alpha -= 0.002;
// //             //重绘
// //             this.draw();
// //         }
// //     }
// // //绘制流星
// //     function playRains(){
// //         for (var n = 0; n < rainCount; n++){
// //             var rain = rains[n];
// //             rain.move();//移动
// //             if(rain.y>window.innerHeight){//超出界限后重来
// //                 context.clearRect(rain.x,rain.y-rain.height,rain.width,rain.height);
// //                 rains[n] = new MeteorRain();
// //                 rains[n].init();
// //             }
// //         }
// //         setTimeout("playRains()",2);
// //     }
// //     /*流星雨结束*/
//
//
//
//     //获取画板
// //doccument 当前文档
// //getElement 获取一个标签
// //ById 通过Id名称的方式
// //var 声明一片空间
// //var canvas 声明一片空间的名字叫做canvas
//     var canvas = document.getElementById("canvas");
// //获取画板权限 上下文
//     var ctx = canvas.getContext("2d");
// //让画板的大小等于屏幕的大小
//     /*
//     思路：
//     1.获取屏幕对象
//     2.获取屏幕的尺寸
//     3.屏幕的尺寸赋值给画板
//     */
// //获取屏幕对象
//     var s = window.screen;
// //获取屏幕的宽度和高度
//     var w = s.width;
//     var h = s.height;
// //设置画板的大小
//     canvas.width = w;
//     canvas.height = h;
//
// //设置文字大小
//     var fontSize = 14;
// //计算一行有多少个文字 取整数 向下取整
//     var clos = Math.floor(w/fontSize);
// //思考每一个字的坐标
// //创建数组把clos 个 0 （y坐标存储起来）
//     var drops = [];
//     var str = "qwertyuiopasdfghjklzxcvbnm";
// //往数组里面添加 clos 个 0
//     for(var i = 0;i<clos;i++) {
//         drops.push(0);
//     }
//
// //绘制文字
//     function drawString() {
// //给矩形设置填充色
//         ctx.fillStyle="rgba(0,0,0,0.05)"
// //绘制一个矩形
//         ctx.fillRect(0,0,w,h);
//
// //添加文字样式
//         ctx.font = "600 "+fontSize+"px 微软雅黑";
// //设置文字颜色
//         ctx.fillStyle = "#ff2d2d";
//
//         for(var i = 0;i<clos;i++) {
// //x坐标
//             var x = i*fontSize;
// //y坐标
//             var y = drops[i]*fontSize;
// //设置绘制文字
//             ctx.fillText(str[Math.floor(Math.random()*str.length)],x,y);
//             if(y>h&&Math.random()>0.99){
//                 drops[i] = 0;
//             }
//             drops[i]++;
//         }
//     }
// //定义一个定时器，每隔30毫秒执行一次
//     setInterval(drawString,30);
//
//
//
// }window.onload = function(){
//
//
//     // var can=document.getElementById('canvas');
//     // var ctx=can.getContext('2d');
//     // var w=can.width=window.innerWidth;
//     // var h=can.height=window.innerHeight;
//     //
//     // var count=30;
//     // var drops=[];
//     // window.onresize=function()
//     // {
//     //     w=can.width=window.innerWidth;
//     //     h=can.height=window.innerHeight;
//     // };
//     // function Drop(){}
//     // Drop.prototype={
//     //     init: function()
//     //     {
//     //         this.x=random(0,w);
//     //         this.y=0;
//     //         this.r=1;
//     //         this.color='#0ff';
//     //         this.vy=random(4,5);
//     //         this.vr=1;
//     //         this.a=1;
//     //         this.va=0.96;
//     //         this.l=random(h*0.8,h*0.9);
//     //     },
//     //     draw:function()
//     //     {
//     //         if(this.y>this.l)
//     //         {
//     //             ctx.beginPath();
//     //             ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
//     //             ctx.strokeStyle='rgba(0,255,255,'+this.a+')';
//     //             ctx.stroke();
//     //         }
//     //         else
//     //         {
//     //             ctx.fillStyle=color(this.a);
//     //             ctx.fillRect(this.x,this.y,2,10);
//     //         }
//     //         this.update();
//     //     },
//     //     update: function()
//     //     {
//     //         if(this.y<this.l)
//     //         {
//     //             this.y+=this.vy;
//     //         }
//     //         else
//     //         {
//     //             if(this.a>0.03)
//     //             {
//     //                 this.r+=this.vr;
//     //                 if(this.r>50)
//     //                 {
//     //                     this.a*=this.va;
//     //                 }
//     //             }
//     //             else
//     //             {
//     //                 this.init();
//     //             }
//     //         }
//     //     }
//     // }
//     // function move()
//     // {
//     //     ctx.fillStyle='rgba(0,0,0,.1)';
//     //     ctx.fillRect(0,0,w,h);
//     //     for(var i=0;i<drops.length;i++)
//     //     {
//     //         drops[i].draw();
//     //     }
//     //     requestAnimationFrame(move);
//     // };
//     // function setup()
//     // {
//     //     for(var i=0;i<count;i++)
//     //     {
//     //         (function(j)
//     //         {
//     //             setTimeout(function(){
//     //                 var drop=new Drop();
//     //                 drop.init();
//     //                 drops.push(drop);
//     //             },j*200);
//     //         }(i))
//     //     }
//     // };
//     // setup();
//     // move();
//     // function random(min,max)
//     // {
//     //     return Math.random()*(max-min)+min;
//     // };
//     // function color(a)
//     // {
//     //     var r=Math.floor(Math.random()*255);
//     //     var g=Math.floor(Math.random()*255);
//     //     var b=Math.floor(Math.random()*255);
//     //     return 'rgba('+r+','+g+','+b+','+a+')';
//     // };
//
//
// //     //获取画板
// // //doccument 当前文档
// // //getElement 获取一个标签
// // //ById 通过Id名称的方式
// // //var 声明一片空间
// // //var canvas 声明一片空间的名字叫做canvas
// //     var canvas = document.getElementById("canvas");
// // //获取画板权限 上下文
// //     var ctx = canvas.getContext("2d");
// // //让画板的大小等于屏幕的大小
// //     /*
// //     思路：
// //     1.获取屏幕对象
// //     2.获取屏幕的尺寸
// //     3.屏幕的尺寸赋值给画板
// //     */
// // //获取屏幕对象
// //     var s = window.screen;
// // //获取屏幕的宽度和高度
// //     var w = s.width;
// //     var h = s.height;
// // //设置画板的大小
// //     canvas.width = w;
// //     canvas.height = h;
// //
// // //设置文字大小
// //     var fontSize = 14;
// // //计算一行有多少个文字 取整数 向下取整
// //     var clos = Math.floor(w/fontSize);
// // //思考每一个字的坐标
// // //创建数组把clos 个 0 （y坐标存储起来）
// //     var drops = [];
// //     var str = "qwertyuiopasdfghjklzxcvbnm";
// // //往数组里面添加 clos 个 0
// //     for(var i = 0;i<clos;i++) {
// //         drops.push(0);
// //     }
// //
// // //绘制文字
// //     function drawString() {
// // //给矩形设置填充色
// //         ctx.fillStyle="rgba(0,0,0,0.05)"
// // //绘制一个矩形
// //         ctx.fillRect(0,0,w,h);
// //
// // //添加文字样式
// //         ctx.font = "600 "+fontSize+"px 微软雅黑";
// // //设置文字颜色
// //         ctx.fillStyle = "#ff2d2d";
// //
// //         for(var i = 0;i<clos;i++) {
// // //x坐标
// //             var x = i*fontSize;
// // //y坐标
// //             var y = drops[i]*fontSize;
// // //设置绘制文字
// //             ctx.fillText(str[Math.floor(Math.random()*str.length)],x,y);
// //             if(y>h&&Math.random()>0.99){
// //                 drops[i] = 0;
// //             }
// //             drops[i]++;
// //         }
// //     }
// // //定义一个定时器，每隔30毫秒执行一次
// //     setInterval(drawString,30);
//
//
// //     var context;
// //     var arr = new Array();
// //     var starCount = 800;
// //     var rains = new Array();
// //     var rainCount =20;
// //     var windowWidth;
// //     //初始化画布及context
// //     function init(){
// //         //获取canvas
// //         var stars = document.getElementById("stars");
// //         windowWidth = window.innerWidth; //当前的窗口的高度
// //         stars.width=windowWidth;
// //         stars.height=window.innerHeight;
// //         //获取context
// //         context = stars.getContext("2d");
// //     }
// //     //创建一个星星对象
// //     var Star = function (){
// //         this.x = windowWidth * Math.random();//横坐标
// //         this.y = 5000 * Math.random();//纵坐标
// //         this.text=".";//文本
// //         this.color = "white";//颜色
// //         //产生随机颜色
// //         this.getColor=function(){
// //             var _r = Math.random();
// //             if(_r<0.5){
// //                 this.color = "#333";
// //             }else{
// //                 this.color = "white";
// //             }
// //         }
// //         //初始化
// //         this.init=function(){
// //             this.getColor();
// //         }
// //         //绘制
// //         this.draw=function(){
// //             context.fillStyle=this.color;
// //             context.fillText(this.text,this.x,this.y);
// //         }
// //     }
// //     //画月亮
// //     function drawMoon(){
// //         var moon = new Image();
// //         moon.src = "./images/moon.jpg"
// //         context.drawImage(moon,-5,-10);
// //     }
// //     //页面加载的时候
// //     window.onload = function() {
// //         init();
// //         //画星星
// //         for (var i=0;i<starCount;i++) {
// //             var star = new Star();
// //             star.init();
// //             star.draw();
// //             arr.push(star);
// //         }
// //         //画流星
// //         for (var i=0;i<rainCount;i++) {
// //             var rain = new MeteorRain();
// //             rain.init();
// //             rain.draw();
// //             rains.push(rain);
// //         }
// //         drawMoon();//绘制月亮
// //         playStars();//绘制闪动的星星
// //         playRains();//绘制流星
// //     }
// //     //星星闪起来
// //     function playStars(){
// //         for (var n = 0; n < starCount; n++){
// //             arr[n].getColor();
// //             arr[n].draw();
// //         }
// //         setTimeout("playStars()",100);
// //     }
// //     /*流星雨开始*/
// //     var MeteorRain = function(){
// //         this.x = -1;
// //         this.y = -1;
// //         this.length = -1;//长度
// //         this.angle = 30; //倾斜角度
// //         this.width = -1;//宽度
// //         this.height = -1;//高度
// //         this.speed = 1;//速度
// //         this.offset_x = -1;//横轴移动偏移量
// //         this.offset_y = -1;//纵轴移动偏移量
// //         this.alpha = 1; //透明度
// //         this.color1 = "";//流星的色彩
// //         this.color2 = ""; //流星的色彩
// //         /****************初始化函数********************/
// //         this.init = function () //初始化
// //         {
// //             this.getPos();
// //             this.alpha = 1;//透明度
// //             this.getRandomColor();
// //             //最小长度，最大长度
// //             var x = Math.random() * 80 + 150;
// //             this.length = Math.ceil(x);
// // //         x = Math.random()*10+30;
// //             this.angle = 30; //流星倾斜角
// //             x = Math.random()+0.5;
// //             this.speed = Math.ceil(x); //流星的速度
// //             var cos = Math.cos(this.angle*3.14/180);
// //             var sin = Math.sin(this.angle*3.14/180) ;
// //             this.width = this.length*cos ; //流星所占宽度
// //             this.height = this.length*sin ;//流星所占高度
// //             this.offset_x = this.speed*cos ;
// //             this.offset_y = this.speed*sin;
// //         }
// //         /**************获取随机颜色函数*****************/
// //         this.getRandomColor = function (){
// //             var a = Math.ceil(255-240* Math.random());
// //             //中段颜色
// //             this.color1 = "rgba("+a+","+a+","+a+",1)";
// //             //结束颜色
// //             this.color2 = "black";
// //         }
// //         /***************重新计算流星坐标的函数******************/
// //         this.countPos = function ()//
// //         {
// //             //往左下移动,x减少，y增加
// //             this.x = this.x - this.offset_x;
// //             this.y = this.y + this.offset_y;
// //         }
// //         /*****************获取随机坐标的函数*****************/
// //         this.getPos = function () //
// //         {
// //             //横坐标200--1200
// //             this.x = Math.random() * window.innerWidth; //窗口高度
// //             //纵坐标小于600
// //             this.y = Math.random() * window.innerHeight; //窗口宽度
// //         }
// //         /****绘制流星***************************/
// //         this.draw = function () //绘制一个流星的函数
// //         {
// //             context.save();
// //             context.beginPath();
// //             context.lineWidth = 1; //宽度
// //             context.globalAlpha = this.alpha; //设置透明度
// //             //创建横向渐变颜色,起点坐标至终点坐标
// //             var line = context.createLinearGradient(this.x, this.y,
// //                 this.x + this.width,
// //                 this.y - this.height);
// //             //分段设置颜色
// //             line.addColorStop(0, "white");
// //             line.addColorStop(0.3, this.color1);
// //             line.addColorStop(0.6, this.color2);
// //             context.strokeStyle = line;
// //             //起点
// //             context.moveTo(this.x, this.y);
// //             //终点
// //             context.lineTo(this.x + this.width, this.y - this.height);
// //             context.closePath();
// //             context.stroke();
// //             context.restore();
// //         }
// //         this.move = function(){
// //             //清空流星像素
// //             var x = this.x+this.width-this.offset_x;
// //             var y = this.y-this.height;
// //             context.clearRect(x-3,y-3,this.offset_x+5,this.offset_y+5);
// // //         context.strokeStyle="red";
// // //         context.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1);
// //             //重新计算位置，往左下移动
// //             this.countPos();
// //             //透明度增加
// //             this.alpha -= 0.002;
// //             //重绘
// //             this.draw();
// //         }
// //     }
// // //绘制流星
// //     function playRains(){
// //         for (var n = 0; n < rainCount; n++){
// //             var rain = rains[n];
// //             rain.move();//移动
// //             if(rain.y>window.innerHeight){//超出界限后重来
// //                 context.clearRect(rain.x,rain.y-rain.height,rain.width,rain.height);
// //                 rains[n] = new MeteorRain();
// //                 rains[n].init();
// //             }
// //         }
// //         setTimeout("playRains()",2);
// //     }
// //     /*流星雨结束*/
//
//
//
//     //获取画板
// //doccument 当前文档
// //getElement 获取一个标签
// //ById 通过Id名称的方式
// //var 声明一片空间
// //var canvas 声明一片空间的名字叫做canvas
//     var canvas = document.getElementById("canvas");
// //获取画板权限 上下文
//     var ctx = canvas.getContext("2d");
// //让画板的大小等于屏幕的大小
//     /*
//     思路：
//     1.获取屏幕对象
//     2.获取屏幕的尺寸
//     3.屏幕的尺寸赋值给画板
//     */
// //获取屏幕对象
//     var s = window.screen;
// //获取屏幕的宽度和高度
//     var w = s.width;
//     var h = s.height;
// //设置画板的大小
//     canvas.width = w;
//     canvas.height = h;
//
// //设置文字大小
//     var fontSize = 14;
// //计算一行有多少个文字 取整数 向下取整
//     var clos = Math.floor(w/fontSize);
// //思考每一个字的坐标
// //创建数组把clos 个 0 （y坐标存储起来）
//     var drops = [];
//     var str = "qwertyuiopasdfghjklzxcvbnm";
// //往数组里面添加 clos 个 0
//     for(var i = 0;i<clos;i++) {
//         drops.push(0);
//     }
//
// //绘制文字
//     function drawString() {
// //给矩形设置填充色
//         ctx.fillStyle="rgba(0,0,0,0.05)"
// //绘制一个矩形
//         ctx.fillRect(0,0,w,h);
//
// //添加文字样式
//         ctx.font = "600 "+fontSize+"px 微软雅黑";
// //设置文字颜色
//         ctx.fillStyle = "#ff2d2d";
//
//         for(var i = 0;i<clos;i++) {
// //x坐标
//             var x = i*fontSize;
// //y坐标
//             var y = drops[i]*fontSize;
// //设置绘制文字
//             ctx.fillText(str[Math.floor(Math.random()*str.length)],x,y);
//             if(y>h&&Math.random()>0.99){
//                 drops[i] = 0;
//             }
//             drops[i]++;
//         }
//     }
// //定义一个定时器，每隔30毫秒执行一次
//     setInterval(drawString,30);
//
//
//
// }