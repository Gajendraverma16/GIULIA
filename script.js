var tl0 = gsap.timeline()
tl0.to("#loader",{
 top:"-200vh",
  delay:1.7,
  duration:1.5,
})
tl0.to("#contant  h4",{
  opacity: 1,
  delay:.5,
  duration:1.5,
})
function loco() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco()
var tl = gsap.timeline({scrollTrigger:{
   trigger:"#page7",
   scroller:"#main",
   start:"130% 10%",
   end:"500% 10%",
   scrub:2,
   pin:true,
  //  markers:true  
}})
tl.to("#page7 #top",{
  top:"10%",
  // markers:true,
  pin:true,  
},'same')
tl.to("#page7 #bottom",{
  top:"200%",
  // markers:true , 
},'same')
tl.to("#top h1",{
  top:"100%"
},'same')
tl.to("#bottom h1",{
  top:"-40%"
},'same')
tl.to("#center1",{
  opacity:1,
  scale:1,
},'same')
tl.to("#center2",{
  opacity:1,
  top:"80%",
  duration:1
},)
tl.to("#center3",{
  opacity:1,
  top:"80%",
  duration:1
},)
tl.to("#center4",{
  opacity:1,
  top:"80%",
  duration:1
},)
tl.to("#center5",{
  opacity:1,
  top:"80%",
  duration:1
},)
tl.to("#center6",{
  opacity:1,
  top:"80%",
  duration:1
},)
tl.to("#center7",{
  opacity:1,
  top:"80%",
  duration:1
},)
tl.to("#center8",{
  opacity:1,
  top:"80%",
  duration:1
},)
var tl2 = gsap.timeline({scrollTrigger:{
  trigger:"#page4",
  scroller:"#main",
  start:"5% 10%",
  end:"40% 10%",
  scrub:2,
  pin:true,
  // markers:true  
}})
tl2.to(" #page4 #card1",{
  left:0,
  duration:2,
},'a')
tl2.to(" #page4 #card2",{
  right:0,
  duration:2,
},'a')
var tl3 = gsap.timeline({scrollTrigger:{
  trigger:"#page5",
  scroller:"#main",
  start:"20% 10%",
  end:"60% 10%",
  scrub:2,
  pin:true,
  // markers:true  
}})
tl3.to(" #page5 #card1",{
  left:0,
},'b')
tl3.to(" #page5 #card2",{
  right:0,
},'b');
