const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control_prev')
const next_btn = document.querySelector('.control_next')

let n=0;// this determine the which img is showing
function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';

}
changeSlide()
// now add funtionality 
//to prev_btn to n--
// to next_btn to n++
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for( const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    }); 

}

const backtop = document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})


// Sidebar navigation
// const sidebarNavigationE1=document.getElementById("sidebar-container-navigation")
// const sidebarOpenNavigationE1=document.getElementById("open-nav-sidebar")

// sidebarOpenNavigationE1.addEventListener("click",()=>{
//     sidebarNavigationE1.classList.toggle(".slidebar-show")
// })
