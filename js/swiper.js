export function testimonials() {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        grabCursor: true,
        clickable: true,
        speed: 700,
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            999: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
}