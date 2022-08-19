let part_boxes = document.getElementsByClassName('part-box')
for (let i = 0; i < part_boxes.length; i++) {
    const part = part_boxes[i];
    part.addEventListener('mouseover',(e)=>{
      let img = part.getElementsByClassName('image-box')[0]
      img.style.transform="translateY(0vh)"
      part.style.fontFamily="Nexa Bold" 
      part.style.fontSize="2.2em"  
    })
    part.addEventListener('mouseout',(e)=>{
        let img = part.getElementsByClassName('image-box')[0]
        img.style.transform="translateY(100vh)"  
        part.style.fontFamily="Nexa Light"
        part.style.fontSize="2em"  
    })
}

// Js for cursor
const rounded_cursor=document.querySelector('.rounded-cursor')
const pointed_cursor=document.querySelector('.pointed-cursor')
const moveCursor=(e)=>{
  const mouseY= e.clientY
  const mouseX= e.clientX
  rounded_cursor.style.transform="translate3d("+mouseX+"px,"+mouseY+"px,0)"
}
document.addEventListener('mousemove',moveCursor)
function c(){
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
console.log('nintendo')
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
}
c()