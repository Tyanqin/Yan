window.onresize=function () {

    var winHeight = window.innerHeight;

    var winWidth = window.innerWidth;

    console.log("winHeight====>   ",winHeight);
    console.log("winWidth====>   ",winWidth);

    if (winWidth < 1000 || winHeight < 1000) {

        window.resizeTo(1000,   1000);

    }

}