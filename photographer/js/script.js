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