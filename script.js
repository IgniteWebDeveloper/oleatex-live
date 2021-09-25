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
    right: "-2%",
    duration: 2,
    scrollTrigger: {
        trigger: "#Mountain01",
        scrub: 2,
        start: "top bottom",
        end: "bottom",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#hut01", {
    right: '0%',
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
    right: "-25%",
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
    top: "30%",
    right: "22%",
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
    right: "100%",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#Mountain02", {
    left: "100%",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#Mountain03", {
    left: "100%",
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#hut01", {
    bottom: "-100%",
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#hut02", {
    bottom: '-100%',
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#bottomPot", {
    bottom: '-100%',
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        end: "top 50%",
        markers: false
    }
})
gsap.to("#pyramid01", {
    bottom: '-100%',
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#pyramid02", {
    bottom: '-100%',
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#leftBuild", {
    left: '-100%',
    opacity: 0,
    display: "none",
    duration: 3,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#sun", {
    left: "55%",
    top: 150,
    scrollTrigger: {
        trigger: "#headpg2",
        scrub: 2,
        start: "top 20%",
        markers: false
    }
})
gsap.to("#leftCloud02", {
    top: "25%",
    duration: 1,
    scrollTrigger: {
        trigger: "#headpg2",
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

gsap.to("#head01pg3", {
    right: "3%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back3",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#head02pg3", {
    left: "5%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back3",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#head01pg3", {
    bottom: "-100%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back4",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#head02pg3", {
    bottom: "-100%",
    duration: 1.5,
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
    top: "13%",
    position: "fixed",
    scrollTrigger: {
        trigger: "#rightLines",
        scrub: 2,
        start: "top 20%",
        end: "top 40%",
        markers: false
    }
})
gsap.to("#rightbottomleafpg3", {
    right: -500,
    duration: 2,
    scrollTrigger: {
        trigger: "#back3",
        scrub: 2,
        start: "center center",
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
gsap.to("#treepeople01", {
    right: "41%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back4",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#treepeople02", {
    right: "19%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back4",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#treepeople01", {
    bottom: "-100%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back5",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#treepeople02", {
    bottom: "-100%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back5",
        scrub: 2,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
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


gsap.to("#midLogo", {
    position: 'fixed',
    width: '15%',
    left: "50%",
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 0.5,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#drumspg5", {
    position: 'fixed',
    top:"-100%",
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 0.5,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#rightRolls", {
    position: 'fixed',
    right:"-100%",
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 0.5,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#curveText", {
    transform: "translate(0% , 0%)",
    left: "100%",
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 0.5,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#roundArrows", {
    left: "100%",
    opacity: -1,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 0.5,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to(".leftOlivespg5", {
    left: "-100%",
    opacity: -1,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to(".rightOlivespg5", {
    right: "-100%",
    opacity: -1,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leftOlive", {
    position: 'fixed',
    left: "-100%",
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "bottom bottom",
        end: "bottom top",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#bottomShirt", {
    position: 'fixed',
    width: "10%",
    top: "92%",
    left: "22%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Olive01pg6", {
    position: 'fixed',
    width: "3%",
    top: "-2%",
    left: "3%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leaf01pg6", {
    position: 'fixed',
    width: "5%",
    top: "-2%",
    left: "25%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#bag01pg6", {
    position: 'fixed',
    width: "13%",
    top: "-4%",
    left: "45%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Olive02pg6", {
    position: 'fixed',
    width: "5%",
    top: "3%",
    right: "3%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#pant01pg6", {
    position: 'fixed',
    height: "17%",
    top: "28%",
    left: "2%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Olive03pg6", {
    position: 'fixed',
    width: "5%",
    top: "19%",
    left: "15%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Olive04pg6", {
    position: 'fixed',
    width: "4%",
    top: "16%",
    left: "44%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leaf02pg6", {
    position: 'fixed',
    width: "9%",
    top: "23%",
    right: "20%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#shirt01pg6", {
    position: 'fixed',
    width: "8%",
    top: "36%",
    right: "5%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Olive05pg6", {
    position: 'fixed',
    width: "7%",
    bottom: "10%",
    left: "0%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leaf03pg6", {
    position: 'fixed',
    width: "10%",
    bottom: "30%",
    left: "15%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Olive06pg6", {
    position: 'fixed',
    width: "4%",
    right: "27%",
    bottom: "40%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})

gsap.to("#bage01pg6", {
    position: 'fixed',
    width: "8%",
    right: "29%",
    bottom: "5%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#leaf04pg6", {
    position: 'fixed',
    width: "6%",
    right: "15%",
    bottom: "20%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#pant02pg6", {
    position: 'fixed',
    height: "15%",
    right: "5%",
    bottom: "6%",
    transform: "translate(0% , 0%)",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#backtop",
        scrub: 1,
        start: "110% bottom",
        end: "bottom center",
        toggleActions: "play none none reset",
        markers: false
    }
})


//---------------------- page 7 ---------------------------- 
 
gsap.to("#toprightbranch01pg7", {
    right: "-8%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#toprightbranch02pg7", {
    top: "-58%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#toprightbranch03pg7", {
    left: "-10%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#toprightbranch04pg7", {
    bottom: "-12%",
    left: "-5%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Mountain01pg7", {
    height: "25%",
    right: "-10%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})

gsap.to("#Mountain02pg7", {
    height: "25%",
    left: "-5%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})

gsap.to("#Mountain03pg7", {
    height: "35%",
    right: "-10%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#logopg7", {
    top: "81%",
    left: "80%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#logopg7", {
    width: "6%",
    duration: 1.5,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 1,
        start: "top bottom",
        end: "center center",
        toggleActions: "play none none reset",
        markers: false
    }
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
    bottom: "14%",
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
    right: "100%",
    duration: 1,
    scrollTrigger: {
        trigger: "#Mountain01pg7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom 0%",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Mountain02pg7", {
    left: "100%",
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom 0%",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#Mountain03pg7", {
    right: "100%",
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom 0%",
        toggleActions: "play none none reset",
        markers: false
    }
})
gsap.to("#bigTree01pg7", {
    left: "-100%",
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom 0%",
        markers: false
    }
},'-=1')
gsap.to("#midTree02pg7", {
    right: "-100%",
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom 0%",
        markers: false
    }
},'-=1')
gsap.to("#smallTree03pg7", {
    right: "-100%",
    duration: 1,
    scrollTrigger: {
        trigger: "#back7",
        scrub: 2,
        start: "bottom bottom",
        end: "bottom 0%",
        markers: false
    }
},'-=1')

// -------------------- page 8 --------------------------

const tl03 = gsap.timeline({
    scrollTrigger: {
        trigger: "#back8",
        scrub: 6,
        start: "top 80%",
        end: "center bottom",
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