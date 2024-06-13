export function horizontalScrollInsights() {
    const horizontalScroll = document.querySelector('.horizontal_scroll');
    if (!horizontalScroll) return;
    const horizontalScrollLength = horizontalScroll.scrollWidth;
    gsap.to(horizontalScroll, {
        x: () => -(horizontalScrollLength - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
            trigger: '.insights_Office', scroller: '#main', pin: true, scrub: true, start: 'top top', end: () => `+=${horizontalScrollLength}`, invalidateOnRefresh: true
        }
    });
}