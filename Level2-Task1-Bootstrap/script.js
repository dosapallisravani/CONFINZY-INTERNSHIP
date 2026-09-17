document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       OPEN MY BACKPACK
    ========================== */

    const openBagBtn = document.getElementById("openBagBtn");
    const backpackItems = document.getElementById("backpackItems");

    if (openBagBtn && backpackItems) {
        openBagBtn.addEventListener("click", () => {

            backpackItems.classList.toggle("show");

            if (backpackItems.classList.contains("show")) {
                openBagBtn.innerHTML =
                    '<i class="fa-solid fa-xmark"></i> Close Backpack';
            } else {
                openBagBtn.innerHTML =
                    '<i class="fa-solid fa-backpack"></i> Open My Backpack';
            }
        });
    }


    /* =========================
       PRODUCT FILTER
    ========================== */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Remove active from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add active to clicked button
            button.classList.add("active");

            const selectedCategory = button.dataset.filter;

            productCards.forEach(card => {

                const category = card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    category === selectedCategory
                ) {
                    card.style.display = "block";

                    setTimeout(() => {
                        card.classList.add("visible");
                    }, 50);

                } else {
                    card.style.display = "none";
                    card.classList.remove("visible");
                }

            });

        });

    });


    /* =========================
       PRODUCT DETAILS MODAL
    ========================== */

    const detailButtons = document.querySelectorAll(".view-details");

    const modalTitle = document.getElementById("modalProductTitle");
    const modalImage = document.getElementById("modalProductImage");
    const modalDescription = document.getElementById("modalProductDescription");
    const modalPrice = document.getElementById("modalProductPrice");

    detailButtons.forEach(button => {

        button.addEventListener("click", () => {

            const title = button.dataset.title;
            const image = button.dataset.image;
            const description = button.dataset.description;
            const price = button.dataset.price;

            if (modalTitle) {
                modalTitle.textContent = title;
            }

            if (modalImage) {
                modalImage.src = image;
                modalImage.alt = title;
            }

            if (modalDescription) {
                modalDescription.textContent = description;
            }

            if (modalPrice) {
                modalPrice.textContent = price;
            }

        });

    });


    /* =========================
       CONTACT FORM
    ========================== */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name")?.value.trim();

            const email =
                document.getElementById("email")?.value.trim();

            const message =
                document.getElementById("message")?.value.trim();

            if (!name || !email || !message) {

                if (formMessage) {
                    formMessage.textContent =
                        "Please fill in all required fields.";
                    formMessage.className =
                        "form-message error";
                }

                return;
            }

            if (formMessage) {
                formMessage.textContent =
                    "Thank you! Your message has been received.";
                formMessage.className =
                    "form-message success";
            }

            contactForm.reset();

        });

    }


    /* =========================
       NAVBAR ACTIVE LINK
    ========================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    });


    /* =========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".feature-card, .product-card, .routine-card, .review-card"
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
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


});
