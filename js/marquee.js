export function marquee() {
    // Left-to-Right Marquee Animation (Reference)
    gsap.to(".marquee-text", {
        x: "-100%",
        ease: "none",
        duration: 50,
        repeat: -1
    });

    // Right-to-Left Marquee Animation 
    const marqueeTextReverse = document.querySelectorAll(".marquee-text-reverse");
    const totalWidthReverse = marqueeTextReverse[0].offsetWidth + marqueeTextReverse[1].offsetWidth;

    gsap.to(marqueeTextReverse, {
        x: () => `${totalWidthReverse / 2}px`,
        ease: "none",
        duration: 50,
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidthReverse - totalWidthReverse / 2)
        }
    });
}