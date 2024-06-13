export const cursor = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const cursor = document.querySelector('.cursor');
        const moveCursor = e => gsap.to(cursor, { duration: 0.3, x: e.clientX, y: e.clientY, ease: 'Power1.out' });

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', () => gsap.to(cursor, { duration: 0.3, scale: 1, ease: 'Power1.out' }));
        document.addEventListener('mouseleave', () => gsap.to(cursor, { duration: 0.3, scale: 0, ease: 'Power1.out' }));

        const applyCursorEffect = (elements, scale, filter = 'blur(0px)') => {
            elements.forEach(el => {
                el.addEventListener('mouseenter', () => gsap.to(cursor, { duration: 0.3, scale, ease: 'Power1.out', filter: 'blur(2px)' }));
                el.addEventListener('mouseleave', () => gsap.to(cursor, { duration: 0.3, scale: 1, ease: 'Power1.out', filter }));
            });
        };

        const links = document.querySelectorAll('.focus');
        const headings = document.querySelectorAll('.focus2');

        applyCursorEffect(links, 5);
        applyCursorEffect(headings, 15);
    });
};
