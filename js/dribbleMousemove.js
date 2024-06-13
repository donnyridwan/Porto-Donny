export function mouseMoveDribble() {
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.dribImg');

        const moveImages = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const posX = (clientX - centerX) / centerX;
            const posY = (clientY - centerY) / centerY;

            images.forEach((img, index) => {
                const intensity = (index + 1) * 8;
                const directionX = index % 2 === 0 ? 1 : -1;
                const directionY = index % 3 === 0 ? 1 : -1;

                gsap.to(img, {
                    x: posX * intensity * directionX,
                    y: posY * intensity * directionY,
                    ease: "none",
                    duration: 0.2,
                });
            });
        };

        // Add mousemove event listener to the window
        window.addEventListener('mousemove', moveImages);
    });
}