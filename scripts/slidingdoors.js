window.onload = function() {
    //容器对象
    var box = document.getElementById('container');
    //获取图片对象集合
    var imgs = box.getElementsByTagName('img');
    //单张图片的宽度
    var imgwidth = imgs[0].offsetWidth;
    //设置掩藏门体的宽度
    var exposewidth = 160;
    //设置容器总宽度
    var boxwidth = imgwidth + (imgs.length - 1) * exposewidth;
    box.style.width = boxwidth + 'px';
    //设置每到门的初始位置
    function setimgesposi() {
        for (var i = 1; i < imgs.length; i++) {
            imgs[i].style.left = imgwidth + exposewidth * (i - 1) + 'px';
        }
    }
    setimgesposi();
    //计算每到门打开时应该移动的距离
    var translate = imgwidth - exposewidth;
    for (var i = 1; i <= imgs.length; i++) {
        (function(i) {
            imgs[i].onmouseover = function() {
                //现将每到门复位
                setimgesposi();
                //开门滑动
                for (var j = 1; j <= i; j++) {
                    imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + 'px';
                };
            }
        })(i);
    }

};