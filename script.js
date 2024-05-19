// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });

let nav = document.querySelector("#nav");
 let sticky = nav.offsetTop;

 window.addEventListener('scroll', ()=>{
  if(window.scrollY > sticky){
    nav.classList.add('sticky');
  }else{
    nav.classList.remove('sticky');
  }
 });

 let menu = document.querySelector(".navright i")
 let full = document.querySelector("#full-scr")
 let flag = 0;
 menu.addEventListener("click", function(){
  if(flag==0){
    full.style.top = 0
    flag = 1;
  }else{
    full.style.top = "-100%"
    flag = 0;
  }
    
 })


 let tl = gsap.timeline()
tl.from("#loader h2",{
    x:100,
    opacity:0,
    duration:2,
    stagger:.3,
})

tl.to("#loader h2",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:-0.1,
})

tl.to("#loader",{
    opacity:0,
    display:"none",
})
tl.to("#loader",{
    display:"none",
})



 
//  let full1 = document.querySelector("#full-scr")
//  let fulldiv = document.querySelector(".full-div1")
//  let fulldivA = document.querySelector(".full-div1 a")
//  let flag1 = 0
//  fulldivA.addEventListener("click", function(){
//    // fulldiv.style.display = "none"
//    full1.style.display = "none"

//   if(flag1==0){
//     fulldiv.style.top = 0
//     flag1 = 1;
//   }else{
//     fulldiv.style.top = "-100%"
//     flag1 = 0;
//   }
   
//  })

