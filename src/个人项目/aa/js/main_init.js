var picture_shower_pic1=document.getElementById('picture_shower_pic1');
var picture_shower_pic2=document.getElementById('picture_shower_pic2');
var picture_control_pause=document.getElementById('picture_control_pause');
var picture_control_pause_span=document.getElementById('picture_control_pause_span');
var left_arrow=document.getElementById('left_arrow');
var right_arrow=document.getElementById('right_arrow');
var left_arrow_span=document.getElementById('left_arrow_span');
var right_arrow_span=document.getElementById('right_arrow_span');
var dot1=document.getElementById('dot1');
var dot2=document.getElementById('dot2');
var is_pic1=true;
var timer;

//为图片设置点击事件
picture_shower_pic1.onclick=()=>{
    window.location.href='https://www.microsoftstore.com.cn/promotion?WT.mc_id=msftcn_MSCOM_HP_HeroBanner1_CTA1';
};
picture_shower_pic2.onclick=()=>{
    window.location.href='https://www.microsoftstore.com.cn/surface/surface-pro-9?icid=mscom_marcom_H2a_SurfacePro9';
};
//图片自动轮播
function pic_preparer(pic){
    pic.style.left='100%';
    pic.style.translate='0 0';
}
function pic_turner(){
    if(is_pic1){
        new Promise((resolve,reject)=>{
            picture_shower_pic1.style.translate='-100% 0';
            picture_shower_pic2.style.left='0';
            picture_shower_pic1.style.zIndex='-1';
            picture_shower_pic2.style.zIndex='91';
            dot2.style.backgroundColor='black';
            dot1.style.backgroundColor='transparent';
            setTimeout(()=>{resolve(4)},500);
        }).then(()=>{
            pic_preparer(picture_shower_pic1);
            is_pic1=false;
        })
    }else{
        new Promise((resolve,reject)=>{
            picture_shower_pic1.style.zIndex='91';
            picture_shower_pic2.style.zIndex='-1';
            picture_shower_pic2.style.translate='-100% 0';
            picture_shower_pic1.style.left='0';
            dot1.style.backgroundColor='black';
            dot2.style.backgroundColor='transparent';
            setTimeout(()=>{resolve(4)},500);
        }).then(()=>{
            pic_preparer(picture_shower_pic2);
            is_pic1=true;
        })
    }
}
function mytimer(){
    timer=setInterval(()=>{
        pic_turner();
    },3000);
}
mytimer();
//图片控制盒子鼠标悬浮事件
picture_control_pause.isplay=true;
picture_control_pause.addEventListener('mouseover',()=>{
    if(picture_control_pause.isplay){
        picture_control_pause_span.classList.remove('icon-zanting');
        picture_control_pause_span.classList.add('icon-24gf-pauseCircle');
    }else{
        picture_control_pause_span.classList.remove('icon-yunhang');
        picture_control_pause_span.classList.add('icon-24gf-playCircle');
    }
})
picture_control_pause.addEventListener('mouseout',()=>{
    if(picture_control_pause.isplay){
        picture_control_pause_span.classList.add('icon-zanting');
        picture_control_pause_span.classList.remove('icon-24gf-pauseCircle');
    }else{
        picture_control_pause_span.classList.add('icon-yunhang');
        picture_control_pause_span.classList.remove('icon-24gf-playCircle');
    }
})
left_arrow.addEventListener('mouseover',()=>{
    left_arrow_span.style.translate='-100% 0';
})
left_arrow.addEventListener('mouseout',()=>{
    left_arrow_span.style.translate='0 0';
})
right_arrow.addEventListener('mouseover',()=>{
    right_arrow_span.style.translate='100% 0';
})
right_arrow.addEventListener('mouseout',()=>{
    right_arrow_span.style.translate='0 0';
})
//图片轮播控制功能
picture_control_pause.addEventListener('click',()=>{
    if(picture_control_pause.isplay){
        clearInterval(timer);
        picture_control_pause_span.classList='iconfont icon-24gf-playCircle';
        picture_control_pause.isplay=false;
    }else{
        mytimer();
        picture_control_pause_span.classList='iconfont icon-24gf-pauseCircle';
        picture_control_pause.isplay=true;
    }
})
left_arrow.onclick=function(){
    clearInterval(timer);
    pic_turner();
    mytimer();
};
right_arrow.onclick=function(){
    clearInterval(timer);
    pic_turner();
    mytimer();
};