const scroll = new LocomotiveScroll({
    el: document.querySelector('#min'),
    smooth: true
});







gsap.from("#navright", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3
})
gsap.from("#page1-right", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3
})

gsap.from("#page1-left", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.3
})

gsap.from(".elem",{
    y:-100,
    opacity:0,
    delay:0.10,
    duration:0.9,
    stagger:0.4,
    
})