/* =========================================================
   ROOTS — Heritage & Artisan Archive
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    }


    /* =====================================================
       MOBILE MENU LINKS
       ===================================================== */

    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const navLinks = document.querySelectorAll(
        'a[href^="#"], .mobile-menu a[href^="#"]'
    );

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                const navbar = document.querySelector(".navbar");

                const navbarHeight = navbar
                    ? navbar.offsetHeight + 20
                    : 20;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }

        });

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(250, 247, 240, 0.95)";

            navbar.style.boxShadow =
                "0 12px 35px rgba(0,0,0,0.12)";

        } else {

            navbar.style.background =
                "rgba(250, 247, 240, 0.82)";

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.08)";
        }
    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       HERO EXPLORE BUTTONS
       ===================================================== */

    const exploreButtons =
        document.querySelectorAll(".hero .btn");

    exploreButtons.forEach(button => {

        button.addEventListener("click", () => {

            const text = button.textContent.toLowerCase();

            if (text.includes("community")) {

                const section =
                    document.querySelector("#communities");

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }

            } else if (text.includes("craft")) {

                const section =
                    document.querySelector("#craft");

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }

            }

        });

    });


    /* =====================================================
       COMMUNITY CARDS
       ===================================================== */

    const communityCards =
        document.querySelectorAll(".community-card");

    communityCards.forEach(card => {

        const button = card.querySelector("button");

        if (!button) return;

        button.addEventListener("click", () => {

            const title =
                card.querySelector("h3");

            const communityName =
                title
                    ? title.textContent.trim()
                    : "this community";

            showToast(
                `Exploring ${communityName} heritage`
            );

        });

    });


    /* =====================================================
       CRAFT STORY BUTTON
       ===================================================== */

    const craftButton =
        document.querySelector(".craft-content .btn");

    if (craftButton) {

        craftButton.addEventListener("click", () => {

            showToast(
                "Bamboo Craft story opening soon."
            );

        });

    }


    /* =====================================================
       ARTISAN PROFILE BUTTON
       ===================================================== */

    const artisanButton =
        document.querySelector(".artisan-profile > button");

    if (artisanButton) {

        artisanButton.addEventListener("click", () => {

            showToast(
                "Opening artisan profile..."
            );

        });

    }


    /* =====================================================
       VOICE PLAY BUTTON
       ===================================================== */

    const playButton =
        document.querySelector(".play-btn");

    let isPlaying = false;

    if (playButton) {

        playButton.addEventListener("click", () => {

            isPlaying = !isPlaying;

            if (isPlaying) {

                playButton.textContent = "❚❚";

                showToast(
                    "Playing Living Stories..."
                );

            } else {

                playButton.textContent = "▶";

                showToast(
                    "Story paused."
                );

            }

        });

    }


    /* =====================================================
       REGION / MAP BUTTONS
       ===================================================== */

    const regionButtons =
        document.querySelectorAll(".region-list button");

    regionButtons.forEach(button => {

        button.addEventListener("click", () => {

            const region =
                button.querySelector("b");

            const regionName =
                region
                    ? region.textContent.trim()
                    : "selected region";

            showToast(
                `Exploring ${regionName} traditions`
            );

        });

    });


    /* =====================================================
       JOURNAL CARDS
       ===================================================== */

    const journalCards =
        document.querySelectorAll(".journal-card");

    journalCards.forEach(card => {

        const link = card.querySelector("a");

        if (!link) return;

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const heading =
                card.querySelector("h3");

            const title =
                heading
                    ? heading.textContent.trim()
                    : "this story";

            showToast(
                `Opening "${title}"...`
            );

        });

    });


    /* =====================================================
       FOOTER NEWSLETTER
       ===================================================== */

    const newsletterForm =
        document.querySelector(".footer-newsletter form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const input =
                newsletterForm.querySelector("input");

            const email =
                input ? input.value.trim() : "";

            if (!email) {

                showToast(
                    "Please enter your email."
                );

                return;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                showToast(
                    "Please enter a valid email."
                );

                return;
            }

            showToast(
                "Thank you for joining ROOTS."
            );

            newsletterForm.reset();

        });

    }


    /* =====================================================
       SEARCH BUTTON
       ===================================================== */

    const searchButton =
        document.querySelector(".search-btn");

    if (searchButton) {

        searchButton.addEventListener("click", () => {

            const searchTerm =
                prompt(
                    "Search ROOTS — communities, crafts, voices..."
                );

            if (!searchTerm) return;

            const term =
                searchTerm.toLowerCase().trim();

            let found = false;

            const searchableItems = [
                ...document.querySelectorAll(
                    ".community-card, .journal-card, .artisan-profile"
                )
            ];

            searchableItems.forEach(item => {

                const content =
                    item.textContent.toLowerCase();

                if (content.includes(term)) {

                    found = true;

                    item.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    item.style.outline =
                        "2px solid #b97858";

                    item.style.outlineOffset =
                        "5px";

                    setTimeout(() => {

                        item.style.outline = "";

                    }, 2500);

                }

            });

            if (!found) {

                showToast(
                    `No results found for "${searchTerm}".`
                );

            }

        });

    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".community-card, .craft-story, .artisans, .voices, .living-map, .timeline-item, .journal-card, .about"
    );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {

        element.classList.add("reveal-hidden");

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const desktopLinks =
        document.querySelectorAll(
            ".desktop-nav a"
        );

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        desktopLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href &&
                href === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    /* =====================================================
       HERO SCROLL INDICATOR
       ===================================================== */

    const heroScroll =
        document.querySelector(".hero-scroll");

    if (heroScroll) {

        heroScroll.addEventListener("click", () => {

            const communities =
                document.querySelector("#communities");

            if (communities) {

                communities.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

        heroScroll.style.cursor = "pointer";
    }


    /* =====================================================
       TOAST FUNCTION
       ===================================================== */

    function showToast(message) {

        let toast =
            document.querySelector(".toast");

        if (!toast) {

            toast =
                document.createElement("div");

            toast.className = "toast";

            document.body.appendChild(toast);
        }

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(
            window.rootsToastTimer
        );

        window.rootsToastTimer =
            setTimeout(() => {

                toast.classList.remove("show");

            }, 2600);

    }

});
