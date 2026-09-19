/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


/* =========================
   PROJECT HOVER VIDEO
========================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {

        if (video) {
            video.play().catch(() => {});
        }

    });

    card.addEventListener("mouseleave", () => {

        if (video) {
            video.pause();
            video.currentTime = 0;
        }

    });

});


/* =========================
   PROJECT FILTER
========================= */

const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const selectedCategory =
            filter.dataset.filter;

        projectCards.forEach(card => {

            const category =
                card.dataset.category;

            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   PROJECT VIDEO MODAL
========================= */

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

const playButtons =
    document.querySelectorAll(".play-project");


playButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        const card =
            button.closest(".project-card");

        const video =
            card.querySelector("video");

        const source =
            video.querySelector("source");

        modalVideo.src =
            source.src;

        modal.classList.add("active");

        modalVideo.play().catch(() => {});

    });

});


/* =========================
   CLOSE MODAL
========================= */

function closeVideoModal() {

    modalVideo.pause();

    modalVideo.currentTime = 0;

    modalVideo.src = "";

    modal.classList.remove("active");

}


closeModal.addEventListener(
    "click",
    closeVideoModal
);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeVideoModal();

    }

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeVideoModal();

    }

});


/* =========================
   SHOWREEL BUTTON
========================= */

const watchReel =
    document.getElementById("watchReel");

const heroVideo =
    document.querySelector(".hero-video video");

watchReel.addEventListener("click", () => {

    const source =
        heroVideo.querySelector("source");

    modalVideo.src =
        source.src;

    modal.classList.add("active");

    modalVideo.play().catch(() => {});

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* =========================
   COPY EMAIL
========================= */

const copyEmail =
    document.getElementById("copyEmail");

const copyMessage =
    document.getElementById("copyMessage");

if (copyEmail) {

    copyEmail.addEventListener("click", async () => {

        const email =
            "sathivamsi649@gmail.com";

        try {

            await navigator.clipboard.writeText(email);

            copyMessage.textContent =
                "Email copied to clipboard.";

            copyMessage.style.color =
                "#dfff00";

            setTimeout(() => {

                copyMessage.textContent =
                    "Usually respond within 24 hours.";

                copyMessage.style.color =
                    "";

            }, 2500);

        } catch (error) {

            copyMessage.textContent =
                "Please copy the email above.";

        }

    });

}
