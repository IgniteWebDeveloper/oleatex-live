gsap.registerPlugin(ScrollTrigger);

gsap.to("#lefttopleaf", {
    left: -500,
    top: -500,
    duration: 2,
    scrollTrigger: {
        trigger: "#lefttopleaf",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#sun", {
    top: 100,
    duration: 2,
    position: 'fixed',
    scrollTrigger: {
        trigger: "#sun",
        start: "bottom",
        scrub: 2,
        end: "bottom center",
        toggleActions: "play reset none none",
        markers: false
    }
})
gsap.to("#leftbottomleaf", {
    left: -500,
    bottom: -500,
    duration: 2,
    scrollTrigger: {
        trigger: "#lefttopleaf",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leftBuild", {
    left: -1,
    duration: 2,
    scrollTrigger: {
        trigger: "#leftBuild",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#rightbottomleaf", {
    right: -500,
    bottom: -500,
    duration: 2,
    scrollTrigger: {
        trigger: "#lefttopleaf",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Mountain01", {
    right: -1,
    duration: 2,
    scrollTrigger: {
        trigger: "#Mountain01",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#hut01", {
    right: 1,
    width: "20%",
    duration: 2,
    scrollTrigger: {
        trigger: "#hut01",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#bottomPot", {
    bottom: "13%",
    duration: 2,
    scrollTrigger: {
        trigger: "#bottomPot",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Mountain02", {
    left: "-5%",
    height: "25%",
    duration: 2,
    scrollTrigger: {
        trigger: "#Mountain02",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#hut02", {
    right: "25%",
    bottom: "18%",
    width: "12%",
    duration: 2,
    scrollTrigger: {
        trigger: "#hut02",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Mountain03", {
    left: "5%",
    bottom: "2%",
    duration: 2,
    scrollTrigger: {
        trigger: "#Mountain03",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#pyramid01", {
    width: "27%",
    left: "32%",
    duration: 2,
    scrollTrigger: {
        trigger: "#pyramid01",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#pyramid02", {
    width: "18%",
    left: "15%",
    duration: 2,
    scrollTrigger: {
        trigger: "#pyramid02",
        scrub: 2,
        start: "top",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leftLines", {
    left: "-40%",
    duration: 1,
    scrollTrigger: {
        trigger: "#leftLines",
        scrub: 3,
        start: "top 150%",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#rightLines", {
    right: "-20%",
    duration: 1,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 150%",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leftCloud01", {
    left: "32%",
    position: 'fixed',
    duration: 1,
    scrollTrigger: {
        trigger: "#leftCloud01",
        scrub: 2,
        start: "top 150%",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leftCloud02", {
    right: "35%",
    position: "fixed",
    duration: 1,
    scrollTrigger: {
        trigger: "#leftCloud02",
        scrub: 2,
        start: "top 150%",
        toggleActions: "play none none reset",
        markers: false
    }
}, '-=1')

// Page 3-------------------------------------------
gsap.to("#Mountain01", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#Mountain02", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#Mountain03", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#hut01", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#hut02", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#bottomPot", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#pyramid01", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#pyramid02", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#leftBuild", {
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#sun", {
    left: "55%",
    top: 150,
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#leftCloud02", {
    top: "25%",
    right:"22%",
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 5,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#homepg3", {
    position: "fixed",
    left: "10%",
    duration: .5,
    scrollTrigger: {
        trigger: "#homepg3",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#righttopleaf", {
    right: -500,
    top: -500,
    duration: 2,
    scrollTrigger: {
        trigger: "#back3",
        scrub: 2,
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})

const tl05 = gsap.timeline({
    scrollTrigger: {
        trigger: "#back3",
        scrub: 6,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
tl05.to("#head01pg3",{
    right: "3%",
    duration: 1.5
})
tl05.to("#head02pg3",{
    left: "5%",
    duration: 1.5
},'-=1.5')

gsap.to("#leftCloud01", {
    top: "13%",
    left:"14%",
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#rightbottomleafpg3", {
    right: -500,
    duration: 2,
    scrollTrigger: {
        trigger: "#back3",
        scrub: 2,
        start: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#headpg4", {
    left: "8%",
    duration: 2,
    scrollTrigger: {
        trigger: "#headpg4",
        scrub: 2,
        start: "-10% bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#homepg3", {
    top: "35%",
    width: "50%",
    duration: .5,
    scrollTrigger: {
        trigger: "#back4",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leftCloud01", {
    top: "-100%",
    duration: .5,
    scrollTrigger: {
        trigger: "#back4",
        scrub: 2,
        start: "top center",
        markers: false
    }
})
// gsap.to("#midLogo", {
//     width: "20%",
//     top:"250%",
//     ease: 'none',
//     duration: .1,
//     scrollTrigger: {
//         trigger: "#back6",
//         scrub: 2,
//         start: "top bottom",
//         toggleActions: "play none none reset",
//         markers: false
//     }
// })
// gsap.to("#bottomShirt", {
//     position: "absolute",
//     bottom: "-152%",
//     width: "15%",
//     left: "0%",
//     transform: "rotate(45deg)",
//     scrollTrigger: {
//         trigger: "#back6",
//         scrub: 2,
//         start: "top center",
//         end: "30% top",
//         toggleActions: "play none none reset",
//         markers: false
//     }
// })
// gsap.to("#drumspg5", {
//     top: "-100%",
//     position: "absolute",
//     scrollTrigger: {
//         trigger: "#back6",
//         scrub: 2,
//         start: "top center",
//         toggleActions: "play none none reset",
//         markers: false
//     }
// })


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#back5",
        scrub: 6,
        start: "bottom 40%",
        end: "120% bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
tl.to("#bigLogopg6",{
    width: "21%",
    duration: 1.5
})
.to("#Olive01pg6",{
    width: "3%",
    top: "-2%",
    left: "3%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#leaf01pg6",{
    width: "5%",
    top: "-2%",
    left: "25%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#bag01pg6",{
    width: "13%",
    top: "-4%",
    left: "45%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.2')
.to("#Olive02pg6",{
    width: "5%",
    top: "3%",
    right: "3%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.2')
.to("#pant01pg6",{
    height: "17%",
    top: "28%",
    left: "2%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.2')
.to("#Olive03pg6",{
    width: "5%",
    top: "19%",
    left: "15%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#Olive04pg6",{
    width: "4%",
    top: "16%",
    left: "44%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#leaf02pg6",{
    width: "9%",
    top: "23%",
    right: "20%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#shirt01pg6",{
    width: "8%",
    top: "36%",
    right: "5%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.2')
.to("#Olive05pg6",{
    width: "7%",
    bottom: "10%",
    left: "0%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#leaf03pg6",{
    width: "10%",
    bottom: "30%",
    left: "15%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#Olive06pg6",{
    width: "4%",
    right: "27%",
    bottom: "40%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#shirte02pg6",{
    width: "15%",
    left: "25%",
    bottom: "-5%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.2')
.to("#bage01pg6",{
    width: "8%",
    right: "29%",
    bottom: "5%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.2')
.to("#leaf04pg6",{
    width: "6%",
    right: "15%",
    bottom: "20%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.5')
.to("#pant02pg6",{
    height: "15%",
    right: "5%",
    bottom: "6%",
    duration: 1.5,
    transform: "translate(0% , 0%)"
},'-=1.2')



const tl02 = gsap.timeline({
    scrollTrigger: {
        trigger: "#back7",
        scrub: 5,
        start: "top center",
        end: "center 60%",
        toggleActions: "play none none reset",
        markers: false
    }
})

tl02.to("#toprightbranch01pg7",{
    right: "-8%",
    duration: 1.5,
})
tl02.to("#toprightbranch02pg7",{
    top: "-58%",
    duration: 1.5,
},'-=1.4')
tl02.to("#toprightbranch03pg7",{
    left: "-10%",
    duration: 1.5,
},'-=1.4')
tl02.to("#toprightbranch04pg7",{
    bottom: "-12%",
    left: "-5%",
    duration: 1.5,
},'-=1.4')
tl02.to("#Mountain01pg7",{
    height: "25%",
    right: "-10%",
    duration: 1,
},'-=1.2')
tl02.to("#Mountain02pg7",{
    height: "25%",
    left: "-5%",
    duration: 1,
},'-=1.2')
tl02.to("#Mountain03pg7",{
    height: "35%",
    right: "-10%",
    duration: 1,
},'-=1.2')
tl02.to("#logopg7",{
    top: "81%",
    left: "80%",
    duration: 1.5,
})
tl02.to("#logopg7",{
    width: "6%",
    duration: 1,
})




gsap.to("#bigTree01pg7", {
    bottom: "12%",
    height: "40%",
    duration: .5,
    scrollTrigger: {
        trigger: "#bigTree01pg7",
        scrub: 2,
        start: "top bottom",
        end: "center bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#midTree02pg7", {
    bottom: "17%",
    duration: 1,
    scrollTrigger: {
        trigger: "#midTree02pg7",
        scrub: 2,
        start: "top bottom",
        end: "center bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#smallTree03pg7", {
    bottom: "17%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#smallTree03pg7",
        scrub: 2,
        start: "top bottom",
        end: "center bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})

gsap.to("#Mountain01pg7", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#Mountain01pg7",
        scrub: 2,
        start: "bottom center",
        end: "bottom -50%",
        markers: false
    }
})
gsap.to("#Mountain02pg7", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom -50%",
        markers: false
    }
})
gsap.to("#Mountain03pg7", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom -50%",
        markers: false
    }
})
gsap.to("#bigTree01pg7", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom -50%",
        markers: false
    }
},'-=1')
gsap.to("#midTree02pg7", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom -50%",
        markers: false
    }
},'-=1')
gsap.to("#smallTree03pg7", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom -50%",
        markers: false
    }
},'-=1')

const tl03 = gsap.timeline({
    scrollTrigger: {
        trigger: "#back8",
        scrub: 5,
        start: "top bottom",
        end: "center 60%",
        toggleActions: "play none none reset",
        markers: false
    }
})

tl03.to("#backShadow01pg8",{
    left: "5%",
    duration: 1.5,
})
tl03.to("#backShadow02pg8",{
    top: "0%",
    duration: 1.5,
},'-=1.4')
tl03.to("#backShadow03pg8",{
    right: "5%",
    duration: 1.5,
},'-=1.4')
tl03.to("#pantpg8",{
    opacity: 1,
    duration: 1.5,
})
tl03.to("#shirtpg8",{
    opacity: 1,
    duration: 1.5,
})
tl03.to("#pursepg8",{
    opacity: 1,
    duration: 1.5,
})
tl03.to("#leftOlivesShadowpg8",{
    opacity: 1 ,
    duration: 1.5,
})
tl03.to("#Logopg8",{
    width: "6%" ,
    duration: 1.5,
},'-=1')



gsap.to("#logopg9", {
    top: "1%",
    duration: 1,
    scrollTrigger: {
        trigger: "#back9",
        scrub: 2,
        start: "top 0%",
        end: "center center",
        markers: false
    }
})

const tl04 = gsap.timeline({
    scrollTrigger: {
        trigger: "#back9",
        scrub: 5,
        start: "top bottom",
        end: "center 60%",
        toggleActions: "play none none reset",
        markers: false
    }
})

tl04.to("#contactus",{
    left: "3%",
    duration: 1.5,
})
tl04.to("#seeProducts",{
    right: "3%",
    duration: 1.5,
},'-=1.5')