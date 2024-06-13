export function magneticHover() {
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('[data-magnetic]');

        elements.forEach(el => {
            let isStuck = false;
            const stickyThreshold = 50; // Distance in pixels when the sticky effect should trigger
            const elementType = el.tagName.toLowerCase();
            const isImage = elementType === 'img';
            const isLink = elementType === 'a';

            el.addEventListener('mousemove', (e) => {
                if (isStuck) return;

                const { clientX, clientY } = e;
                const { left, top, width, height } = el.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                const deltaX = clientX - centerX;
                const deltaY = clientY - centerY;
                const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

                if (distance < stickyThreshold) {
                    isStuck = true;
                    document.addEventListener('mousemove', followCursor);
                    if (isImage) {
                        el.style.transition = 'transform 0.2s ease-out';
                        el.style.transform += ' scale(1.05)';
                    }
                } else {
                    const magneticEffectMultiplier = isImage ? 0.2 : (isLink ? 0.3 : 0.5);
                    el.style.transform = `translate(${deltaX * magneticEffectMultiplier}px, ${deltaY * magneticEffectMultiplier}px)`;
                }
            });

            el.addEventListener('mouseout', () => {
                isStuck = false;
                document.removeEventListener('mousemove', followCursor);
                el.style.transform = `translate(0px, 0px)${isImage ? ' scale(1)' : ''}`;
                if (isImage) {
                    el.style.transition = 'transform 0.3s ease';
                }
            });

            function followCursor(e) {
                if (!isStuck) return;
                const { clientX, clientY } = e;
                const { left, top, width, height } = el.getBoundingClientRect();
                const newX = clientX - left - width / 2;
                const newY = clientY - top - height / 2;
                el.style.transform = `translate(${newX}px, ${newY}px)`;
            }
        });
    });
}
