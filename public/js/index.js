window.onload = function(){
    let _that = this
    var timer        //取消鼠标移出的定时事件
    var timer2       //取消加载后鼠标移入后的加载移动事件
    initLoad()
    onClickMenu()
    menuOnMouseOverControl()
    menuOnMouseMoveControl()
    menuOnMouseOutControl();

    //目录初始化移动
    function initLoad(){
        clearTimeout(_that.timer)
        let fixed_nav_wrap = document.querySelector(".fixed-nav-wrap")
        move(fixed_nav_wrap,"left",0,20,10,null)
        _that.timer2 = setTimeout(function(){
            clearTimeout(_that.timer)
            move(fixed_nav_wrap,"left",-150,3,20,null)
        },2000)
    }
    //点击目录切换
    function onClickMenu() {
        let level_1_menus = document.querySelectorAll(".level_1_menu");
        let level_2_menus = document.querySelectorAll(".level_2_menu")
        //目录菜单点击触发
        menuControl(level_1_menus,"close_menu")
        menuControl(level_2_menus,"close_menu")
        //前台调用
        function menuControl(obj,cn,){
            let menuOpenUl = obj[0].parentNode
            for(let i = 0;i<obj.length;i++){
                obj[i].onclick= function(){
                    clearTimeout(_that.timer)
                    let this_parentNode = this.parentNode
                    panel(this_parentNode,cn)
                    if(menuOpenUl != this_parentNode
                        && !hasClass(menuOpenUl,cn)){
                        panel(menuOpenUl,cn)
                    }
                    menuOpenUl = this_parentNode
                }
            }
        }
        //目录树重复代码提取
        function panel(obj,cn){
            clearTimeout(_that.timer)
            let begin = obj.offsetHeight
            toggleClass(obj,cn)
            let end = obj.offsetHeight
            obj.style.height = begin+"px"
            move(obj,"height",end,10,20,function(){
                obj.style.height = ''
            })
        }
    }
    //鼠标移入触发事件
    function menuOnMouseOverControl(){
        let fixed_nav_wrap = document.querySelector(".fixed-nav-wrap")
        fixed_nav_wrap.onmouseover = function(){
            clearTimeout(_that.timer)
            clearTimeout(_that.timer2)
            move(this,"left",0,20,5,null)
        }
    }
    //鼠标移动事件
    function menuOnMouseMoveControl(){
        clearTimeout(_that.timer)
        // let fixed_nav_wrap = document.querySelector(".fixed-nav-wrap")
        // fixed_nav_wrap.onmousemove = function(){
        //     move(this,"left",0,10,1,null)
        // }
    }
     //鼠标移出事件
    function menuOnMouseOutControl(){
        let fixed_nav_wrap = document.querySelector(".fixed-nav-wrap")
        fixed_nav_wrap.onmouseout = function(){
            let _this = this
            _that.timer =  setTimeout(function () {
                move(_this,"left",-150,3,20,null)
            },3000)
        }
    }

    //Base js
    function move(obj, attr, target, speed, timeInterval, callback){
        let current = parseInt(getStyle(obj, attr))
        if (current > target) {
            speed = -speed
        }
        obj.timer = setInterval(function () {
            var oldValue = parseInt(getStyle(obj, attr))
            var newValue = oldValue + speed
            if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                newValue = target
            }
            obj.style[attr] = newValue + 'px'
            if (newValue === target) {
                clearInterval(obj.timer)
                callback && callback()
            }
        }, timeInterval)
    }
    function getStyle(obj, name){
        if (window.getComputedStyle) {
            return parseInt(getComputedStyle(obj, null)[name])
        }
        return obj.currentStyle[name]
    }
    function toggleClass(obj, cn){
        if (hasClass(obj, cn)) {
            return removeClass(obj, cn)
        } else {
            return addClass(obj, cn)
        }
    }
    function hasClass(obj, cn){
        let reg = new RegExp('\\b' + cn + '\\b')
        return reg.test(obj.className)
    }
    function addClass(obj, cn){
        if(obj.className){
            let oriName = obj.className
            let newClass = oriName+" "+cn
        }else{
            obj.className = cn
        }
    }
    function removeClass(obj, cn){
        let reg = new RegExp('\\b' + cn + '\\b')
        obj.className = obj.className.replace(reg, '')
    }
};

