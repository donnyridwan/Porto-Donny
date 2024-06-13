export function sticky() {
    // Check if the current window width is greater than 768 pixels
    if (window.innerWidth > 1000) {
        if (document.querySelectorAll('.sticky_scroll').length > 0) {
            gsap.utils.toArray('.sticky_scroll').forEach((stick) => {
                let serviceScroll = document.querySelector('.sticky_scrolling');
                let endValue = serviceScroll.offsetHeight + serviceScroll.offsetTop - stick.offsetHeight;

                gsap.timeline({
                    scrollTrigger: {
                        trigger: stick,
                        start: "top 5%",
                        end: () => `+=${endValue}`,
                        scrub: true,
                        pin: true,
                        scroller: '#main', // Make sure this matches your scrolling container's ID
                        toggleActions: "restart complete reverse resume",
                    },
                });
            });
        } else {
            console.log('No .sticky_scroll elements found on the page.');
        }
    } else {
        // Optionally, you can log a message or handle the mobile case differently here
        console.log('Sticky scroll animations disabled on mobile devices.');
    }
}
