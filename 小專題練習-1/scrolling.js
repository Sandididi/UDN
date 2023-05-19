
gsap.registerPlugin(ScrollTrigger);
let width = window.innerWidth;
let height = window.innerHeight;

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#triggerPin",
        start:"top 100%",
        //markers:true,
        scrub:1,
        pin: ".animaPin"
    },
});


tl.to(".ship",{x: width-300,duration:2,})
  .to(".hookline",{y: 430,duration:1},1)
  .to(".slide_text",{y: -32,duration:1},2)
  .to(".slide_num",{y: -78,duration:1},2)
  .to(".hook",{opacity: 1,duration:1})
  .to(".hookline",{y: -10, duration:2},4)
  .to(".naga",{y: -100, duration:0.5},4)
  .to(".chinagoods",{y: -height/3,duration:2},4)
  .to(".slide_text",{y: -68,duration:1},5)
  .to(".slide_num",{y: -156,duration:1},5);

  
  