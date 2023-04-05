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
var left_arrow_cover=document.getElementById('left_arrow_cover');
var right_arrow_cover=document.getElementById('right_arrow_cover');
var status1=true;
var status2=true;

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
function my_changer(pic1,pic2){
    new Promise((resolve,reject)=>{
        pic1.style.translate='-100% 0';
        pic2.style.left='0';
        pic1.style.opacity='0';
        pic2.style.opacity='1';
        setTimeout(()=>{resolve(4)},500);
    }).then(()=>{
        pic_preparer(pic1);
    })
}
function pic_turner(){
    if(is_pic1){
        my_changer(picture_shower_pic1,picture_shower_pic2);
        dot2.style.backgroundColor='black';
        dot1.style.backgroundColor='transparent';
        is_pic1=false;
    }else{
        my_changer(picture_shower_pic2,picture_shower_pic1);
        dot2.style.backgroundColor='transparent';
        dot1.style.backgroundColor='black';
        is_pic1=true;
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
    left_arrow_span.style.translate='-20% 0';
})
left_arrow.addEventListener('mouseout',()=>{
    left_arrow_span.style.translate='0 0';
})
right_arrow.addEventListener('mouseover',()=>{
    right_arrow_span.style.translate='20% 0';
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
    if(status1){
        new Promise((resolve,reject)=>{
            status1=false;
            clearInterval(timer);
            pic_turner();
            mytimer();
            setTimeout(()=>{resolve(4)},800);
        }).then(()=>{
            status1=true;
        })
    }
};
right_arrow.onclick=function(){
    if(status2){
        new Promise((resolve,reject)=>{
            status2=false;
            clearInterval(timer);
            pic_turner();
            mytimer();
            setTimeout(()=>{resolve(4)},800);
        }).then(()=>{
            status2=true;
        })
    }
};