window.onload=function(){
    let fixer=document.getElementById('fixer');
    //滚动事件
    fixer.classList.remove('back_top');
    fixer.classList.add('back_top_fix');
    window.onscroll=function(){
        if(window.pageYOffset<=0.162*document.body.scrollHeight){
            fixer.classList.remove('back_top');
            fixer.classList.add('back_top_fix');
        }else{
            fixer.classList.remove('back_top_fix');
            fixer.classList.add('back_top');
        }
    }
}