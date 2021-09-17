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
        scrub: 2,
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

