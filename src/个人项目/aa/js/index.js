window.onload=function(){
    let add_border=document.getElementsByClassName('add_border');
    let temp;
    let select_one=false;
    let fixer=document.getElementById('fixer');
    let a_tag=document.getElementsByTagName('a');
    document.addEventListener('click',event=>{
        if([...add_border].includes(event.target)||[...a_tag].includes(event.target)){
            event.target.style.border='1px dashed black';
            if(temp!=event.target&&select_one){
                temp.style.border='1px dashed transparent';
                select_one=false;
            }
            temp=event.target;
            select_one=true;
        }else{
            if(temp!==undefined){
                temp.style.border='1px dashed transparent';
                select_one=false;
            }
        }
    })
    //滚动事件
    window.onscroll=function(){
        if(window.pageYOffset>=500&&window.pageYOffset<=2000){
            fixer.classList.remove('back_top');
            fixer.classList.add('back_top_fix');
        }else{
            fixer.classList.remove('back_top_fix');
            fixer.classList.add('back_top');
        }
    }
}