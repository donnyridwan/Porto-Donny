import { initFluid } from "./canvasCursor.js";
import { cursor } from "./customCursor.js";
import { animateNav } from "./nav.js";
import { magneticHover } from "./magnet.js";
import { horizontalScrollInsights } from "./horizontalTeam.js";
import { sticky } from "./stickyScroll.js";
import { testimonials } from "./swiper.js";
import { marquee } from "./marquee.js";
import { mouseMoveDribble } from "./dribbleMousemove.js";


window.onload = () => {
    pageReveal();
}

LocomotiveJs();
initFluid();
cursor();
animateNav();
magneticHover();
textFillanimation();
horizontalScrollInsights(); // Team Page
sticky(); // service
testimonials(); // Home page
marquee(); // Home page
mouseMoveDribble(); // Home page


function LocomotiveJs() {
    let locoScroll;
    locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smoothMobile: true,
    });

    new ResizeObserver(() => locoScroll.update()).observe(
        document.querySelector("#main")
    );

    locoScroll.on("scroll", ScrollTrigger.update); // Update ScrollTrigger on Locomotive Scroll event

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We'll just turn off pinning for mobile.
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh ScrollTrigger to make sure everything is in sync.
    ScrollTrigger.refresh();
}

function textFillanimation() {
    const fills = document.querySelectorAll(".fill");

    fills.forEach((fill) => {
        gsap.to(fill, {
            scrollTrigger: {
                trigger: fill,
                scroller: "#main",
                start: "top 70%",
                end: "top 45%",
                scrub: 1.1,
            },
            width: "100%",
            ease: "none",
        });
    });
}

function pageReveal() {
    var loader = gsap.timeline();

    loader.from('.intro_wrapper h1', {
        y: "200%",
        duration: 1,
        skewY: 10,
    })

    loader.to('.inFill', {
        width: '100%',
        duration: 2,
        delay: .2
    });

    loader.to('.intro_wrapper h1', {
        y: "-200%",
        duration: 1,
        skewY: -10,
    })

    loader.to('.intro', {
        y: "-100%",
        duration: 1.2,
        delay: -.7,
        ease: "power3.inOut",
    })

    loader.to('.intro', {
        autoAlpha: 0,
        delay: 1,
    })
}