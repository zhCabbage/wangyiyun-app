function remSize() {
    //获取设备得宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    // 如果屏幕宽度大于750 就不再放大
    if (deviceWidth >= 750) {
        deviceWidth = 750;
    }
    // 如果屏幕宽度小于320，就不在缩小
    if (deviceWidth <= 320) {
        deviceWidth = 320;
    }
    // 750 --> 1rem == 100px    375px --> 1rem == 50px
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + "px";
    // 设置字体大小
    document.querySelector("body").style.fontSize = 0.3 + "rem";
}
remSize()
// 当窗口发生变化得时候调用
window.onresize = function () { 
    remSize()
};
