let position_cursor={"x":0,"y":0};
function move(e){
    if(window.event){
       position_cursor.x=window.event.x+document.body.scrollLeft; 
       position_cursor.y=window.event.y+document.body.scrollTop;
    }else{
        position_cursor.x=e.clientX;
        position_cursor.y=e.clientY;
    }
    position_cursor.x/=100;
    position_cursor.y/=100;
    if (position_cursor.y<5) {
        position_cursor.y-=5
    }
    return position_cursor;
}
let visages=document.getElementsByClassName('visage');

document.body.addEventListener('mousemove',(e)=>{
    move(e);
    for (let i = 0; i < visages.length; i++) {
        const visage = visages[i];
        visage.style.left = position_cursor.x.toString()+'px';
        visage.style.top = position_cursor.y.toString()+'px';
    }
    console.log(p);
});