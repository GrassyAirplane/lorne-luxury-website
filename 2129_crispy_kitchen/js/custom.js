//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Sweet Alert
document.getElementById("book-now").addEventListener("click", function() {
    swal({
        title: "Booking Confirmation",
        text: "Your reservation has been successfully booked!",
        icon: "success",
    });
});