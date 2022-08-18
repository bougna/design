var current = 0;
let dot=document.getElementsByClassName('second-dot');
let line=document.getElementsByClassName('second-line');
let next_button = document.getElementById('next');
let prev_button = document.getElementById('prev');
//Initial state: first dot shine
dot[0].classList.add('animate-dot');
dot[0].style.opacity='1';
//
let elt_texte = document.getElementsByClassName('element-text-zone');
let elt_image = document.getElementsByClassName('image-container');
let elt_date = document.getElementsByClassName('element-date-zone');
let tab_date =[[1,9,7,7],[1,9,8,0],[1,9,8,3]];
function hide(tabEl){
    for (let i = 0; i < tabEl.length; i++) {
    tabEl[i].style.display='none';
    }
}

function showOne(tabEl,i){
    hide(tabEl);
    if(i<tabEl.length && i>=0)
    {tabEl[i].style.display='block';
    }
}
hide(elt_texte);
hide(elt_image);
showOne(elt_texte,current);
showOne(elt_image,current);
//
/**
 * 
 * @param {tableau d'elements du DOM correspondant aux dates} tab1 
 * @param {tableau de dates preenregistrer dans le fichier js} tab2 
 */
function change_date(tab1,tab2,sens){
    for (let i = 0; i < tab1.length; i++) {
        if(parseInt(tab1[i].innerHTML)!=tab2[i]){
            if(sens=='prev'){
                tab1[i].style.animation= 'come 310ms linear 0s 1 reverse';
                setTimeout(() => {
                    tab1[i].innerHTML = tab2[i];
                    tab1[i].style.animation='go 300ms linear 0s 1 reverse';
                }, 200);
            }
            if(sens=='next'){
                tab1[i].style.animation= 'go 310ms linear 0s 1 normal';
                setTimeout(() => {
                    tab1[i].innerHTML = tab2[i];
                    tab1[i].style.animation='come 300ms linear 0s 1 normal';
                }, 200);
            }
            setTimeout(() => {
                tab1[i].style.animation='';
            }, 400);
        }
    }
}
/**
 * Fonction aui gere les animation sur les element du DOM
 * Base sur le bouton prev
 * @param {la tableau contenat les elements du DOM} tab 
 * @param {le numero de l'element precedent(l'element sortant)} i 
 * @param {le sens de l'animation reverse/normal mais en reverse par defaut} sens 
 */
function smooth_move(tab,i,sens){
    if(sens=='prev'){
        tab[i].style.animation= 'come 310ms linear 0s 1 reverse';
        setTimeout(() => {
            tab[i-1].style.display='block';
            tab[i-1].style.animation='go 300ms linear 0s 1 reverse';
        }, 150);
        setTimeout(() => {
            tab[i].style.display='none';
        }, 100);
    }
    if(sens=='next'){
        tab[i].style.animation='go 310ms linear 0s 1 normal';
        setTimeout(() => {
            tab[i+1].style.display='block';
            tab[i+1].style.animation='come 300ms linear 0s 1 normal';
        }, 150);
        setTimeout(() => {
            tab[i].style.display='none';
        }, 150);
    }
}
/**
 * 
 * @param {*} i 
 */
function clean_animation(i){
    setTimeout(() => {
        elt_texte[current+i].style.animation='';
        elt_texte[current].style.animation='';
        elt_image[current+i].style.animation='';
        elt_image[current].style.animation='';
        }, 300);
}
//Click on the next button
/**
 * reception de l'evenement click sur le bouton next ou le right arrow 
 * Les modifications a faire lorsque ca se produit.
 */
next_button.addEventListener('click',function(){
    //Animation sur la barre de chargement
    if(current<elt_image.length-1){
        line[current].style.transitionDuration='250ms';
        line[current].style.transform='scaleX(1)';
        smooth_move(elt_image,current,'next');
        smooth_move(elt_texte,current,'next');
        change_date(elt_date,tab_date[current+1],'next');

        current+=1;
        setTimeout(function(){
            showOne(elt_image, current);
            dot[current].classList.add('animate-dot');
            dot[current].style.opacity='1';
            //nettoyage
            clean_animation(-1);
            },300);
    }
});
//Click on the prev button
/**
 * reception de l'evenement click sur le bouton prev ou le left arrow 
 * Les modifications a faire lorsque ca se produit.
 */
prev_button.addEventListener('click',function(){
    //Animation sur la barre de chargement
    if(current>0){
    dot[current].classList.remove('animate-dot');
    dot[current].style.opacity='0';
    smooth_move(elt_image,current,'prev');
    smooth_move(elt_texte,current,'prev');
    change_date(elt_date,tab_date[current-1],'prev');

    current-=1;
    setTimeout(function(){
        line[current].style.transform='scaleX(0)';
        //nettoyage
        clean_animation(1);
        },300);
    }
});

