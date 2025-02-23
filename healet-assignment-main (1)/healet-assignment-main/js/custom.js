// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
//BLOG SECTION - Read More
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".read-more-btn").forEach(button => {
        button.addEventListener("click", function() {
            const blogPost = this.closest(".detail-box"); // מזהה את הפוסט שבו נמצא הכפתור
            const shortText = blogPost.querySelector(".short-text");
            const fullText = blogPost.querySelector(".full-text");

            if (fullText.style.display === "none" || fullText.style.display === "") {
                fullText.style.display = "inline";
                shortText.style.display = "none";
                this.textContent = "Read Less"; // משנה את הכפתור ל-Read Less
            } else {
                fullText.style.display = "none";
                shortText.style.display = "inline";
                this.textContent = "Read More"; // מחזיר ל-Read More
            }
        });
    });
});

// menue
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector("#mobileMenu");
    const closeBtn = document.querySelector(".close-menu");

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    closeBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});
//קרוסלת תמונות
document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.querySelector(".shop_section .row");

    function autoScroll() {
        if (!scrollContainer) return; // אם האלמנט לא נמצא, לא נריץ את הפונקציה
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });

        // אם הגענו לסוף הגלילה - נחזור להתחלה
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
    }

    setInterval(autoScroll, 3000); // מעבר אוטומטי כל 3 שניות
});


document.addEventListener("DOMContentLoaded", function () {
    // Back to Top Button
    let backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight * 0.3) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Countdown Timer
    function startCountdown(duration) {
        let timerElement = document.getElementById("timer");
        let endTime = Date.now() + duration * 1000;

        function updateTimer() {
            let timeLeft = endTime - Date.now();
            if (timeLeft > 0) {
                let hours = Math.floor(timeLeft / (1000 * 60 * 60));
                let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                timerElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
            } else {
                timerElement.innerText = "Sale Ended!";
                clearInterval(timerInterval);
            }
        }

        updateTimer();
        let timerInterval = setInterval(updateTimer, 1000);
    }

    startCountdown(3600); // טיימר של שעה אחת (3600 שניות)
});

