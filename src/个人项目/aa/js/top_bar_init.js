var theme_wrapper_box=document.getElementById('theme_wrapper_box');
var link_box_a=document.getElementById('link_box_a');
var action_box=document.getElementById('action_box');
var search=document.getElementById('search');
var search_box=document.getElementById('search_box');
var all_microsoft=document.getElementById('all_microsoft');
var all_micro_box=document.getElementById('all_micro_box');
var btn=document.getElementById('btn');
var is_open=false;

//初始获取顶部栏盒子宽度
theme_wrapper_box.style.padding=`0 ${window.getComputedStyle(theme_wrapper_box,'width')*0.05}px`;
//顶部搜索
search.onclick=function(){
    action_box.style.display='none';
    link_box_a.style.display='none';
    search_box.style.display='flex';
}
//取消按钮
btn.onclick=()=>{
    action_box.style.display='flex';
    link_box_a.style.display='block';
    search_box.style.display='none';
}
//所有microsoft
all_microsoft.onclick=function(){
    if(is_open){
        all_microsoft.style.backgroundColor='transparent';
        all_micro_box.style.display='none';
        is_open=false;
    }else{
        all_microsoft.style.backgroundColor='#f2f2f2';
        all_micro_box.style.display='flex';
        is_open=true;
    }
}