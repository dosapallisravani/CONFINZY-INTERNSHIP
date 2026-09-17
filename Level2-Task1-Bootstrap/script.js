document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       1. MOBILE NAVBAR
    ========================= */

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector("#navbarNav");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });


    /* =========================
       2. SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* =========================
       3. OPEN MY BACKPACK
    ========================= */

    const openBagBtn = document.querySelector("#openBagBtn");
    const itemsContainer = document.querySelector("#itemsContainer");
    const backpackImage = document.querySelector("#backpackImage");

    if (openBagBtn) {

        openBagBtn.addEventListener("click", () => {

            if (backpackImage) {
                backpackImage.classList.add("bag-open-animation");

                setTimeout(() => {
                    backpackImage.classList.remove("bag-open-animation");
                }, 900);
            }

            if (itemsContainer) {

                itemsContainer.classList.add("items-reveal");

                setTimeout(() => {
                    itemsContainer.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 250);

            }

        });

    }


    /* =========================
       4. PRODUCT FILTER
    ========================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".item-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            // Active button
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            // Filter products
            productCards.forEach(card => {

                const category = card.dataset.category;

                if (filter === "all" || category === filter) {

                    card.style.display = "";

                    setTimeout(() => {
                        card.classList.add("filter-show");
                    }, 20);

                } else {

                    card.classList.remove("filter-show");
                    card.style.display = "none";

                }

            });

        });

    });


    /* =========================
       5. SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".feature-card, .item-card, .routine-card, .review-card, .starter-section"
    );

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =========================
       6. ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 130;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        menuLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    });


    /* =========================
       7. CONTACT FORM
    ========================= */

    const contactForm = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const name = document.querySelector("#name")?.value.trim();
            const email = document.querySelector("#email")?.value.trim();
            const message = document.querySelector("#message")?.value.trim();

            if (!name || !email || !message) {

                if (formMessage) {
                    formMessage.textContent =
                        "Please fill in all the fields.";
                    formMessage.className =
                        "form-message error";
                }

                return;
            }


            if (formMessage) {

                formMessage.textContent =
                    `Thank you, ${name}! Your message has been received.`;

                formMessage.className =
                    "form-message success";

            }

            contactForm.reset();

        });

    }


    /* =========================
       8. BUTTON HOVER EFFECT
    ========================= */

    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .starter-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-3px)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });

    });


    /* =========================
       9. PRODUCT DETAILS
    ========================= */

    const detailLinks = document.querySelectorAll(
        'a[href^="product-details.html"]'
    );

    detailLinks.forEach(link => {

        link.addEventListener("click", () => {

            const originalText = link.innerHTML;

            link.innerHTML = "Opening...";

            setTimeout(() => {
                link.innerHTML = originalText;
            }, 700);

        });

    });


    /* =========================
       10. CURRENT YEAR
    ========================= */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });

});
