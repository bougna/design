let elt_btn = document.getElementsByClassName('elt-btn');
for (let i = 0; i < elt_btn.length; i++) {
    elt_btn[i].addEventListener('mouseover',()=>{
        let arrow_body = elt_btn[i].getElementsByClassName('arrow-body')[0];
        let arrow_head = elt_btn[i].getElementsByClassName('arrow-head-first')[0];
        arrow_body.classList.add('reduce');
        arrow_head.classList.add('move');
        arrow_body.classList.add('move');
    })
    elt_btn[i].addEventListener('mouseout',()=>{
        let arrow_body = elt_btn[i].getElementsByClassName('arrow-body')[0];
        let arrow_head = elt_btn[i].getElementsByClassName('arrow-head-first')[0];
        arrow_body.classList.remove('reduce');
        arrow_head.classList.remove('move');
        arrow_body.classList.remove('move');
    })
    
}

let detail_point = document.getElementsByClassName('detail-point');
for (let i = 0; i < detail_point.length; i++) {
    let infinite_clin_circle = detail_point[i].getElementsByClassName('infinite-clin-circle')[0];
    infinite_clin_circle.addEventListener('click',()=>{
        let card_point_line = detail_point[i].getElementsByClassName('card-point-liner')[0];
        let detail_card = detail_point[i].getElementsByClassName('detail-card')[0];

        card_point_line.style.height = '80px';
        detail_card.style.marginBottom = '0px';
        setTimeout(() => {
            detail_card.style.visibility = 'visible';
            detail_card.style.opacity = '1';
        }, 300);
    });
    ['mouseout', 'scroll'].forEach(function(e){ 
    infinite_clin_circle.addEventListener(e,()=>{
        let card_point_line = detail_point[i].getElementsByClassName('card-point-liner')[0];
        let detail_card = detail_point[i].getElementsByClassName('detail-card')[0];

        detail_card.style.visibility = 'hidden';
        detail_card.style.opacity = '0';
        setTimeout(() => {
            card_point_line.style.height = '0px';
            detail_card.style.marginBottom = '80px';
        }, 250);
    })
});
}
function shuffle(array){
    let currentIndex = array.length, randomIndex;
    while(currentIndex != 0){
        randomIndex =  Math.floor(Math.random()*currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]];
    }
    return array;
}
let letter = 'abcdefghijklmnopqrstuvwxyz1234567890 ';
let rand = [...letter];
shuffle(rand);
let word = [...'welcome'];
console.log(rand);
