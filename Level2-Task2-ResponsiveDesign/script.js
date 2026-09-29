
/* =========================================================
   ROOTS — HERITAGE & ARTISAN ARCHIVE
   SCRIPT.JS — PART 1 / 5
   ========================================================= */


/* =========================================================
   GLOBAL ROOTS SETUP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("roots-ready");



    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const loader = document.getElementById("pageLoader");

    if (loader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                loader.classList.add("is-hidden");

                setTimeout(() => {
                    loader.remove();
                }, 700);

            }, 450);

        });

    }



    /* =====================================================
       HEADER / NAVIGATION
    ===================================================== */

    const header = document.getElementById("siteHeader");

    if (header) {

        let lastScroll = 0;

        window.addEventListener("scroll", () => {

            const currentScroll = window.scrollY;

            if (currentScroll > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }


            /*
             * Hide header slightly while scrolling down.
             * Bring it back while scrolling up.
             */

            if (currentScroll > lastScroll && currentScroll > 180) {

                header.classList.add("nav-hidden");

            } else {

                header.classList.remove("nav-hidden");

            }

            lastScroll = currentScroll;

        }, { passive: true });

    }



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileNav =
        document.getElementById("mobileNav");

    const mobileOverlay =
        document.getElementById("mobileNavOverlay");

    const mobileClose =
        document.getElementById("mobileNavClose");


    function openMobileMenu() {

        if (!mobileNav) return;

        mobileNav.classList.add("active");

        if (mobileOverlay) {
            mobileOverlay.classList.add("active");
        }

        document.body.classList.add("menu-open");

        if (menuToggle) {
            menuToggle.classList.add("active");
            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );
        }

    }


    function closeMobileMenu() {

        if (!mobileNav) return;

        mobileNav.classList.remove("active");

        if (mobileOverlay) {
            mobileOverlay.classList.remove("active");
        }

        document.body.classList.remove("menu-open");

        if (menuToggle) {
            menuToggle.classList.remove("active");
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            openMobileMenu
        );

    }


    if (mobileClose) {

        mobileClose.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    if (mobileOverlay) {

        mobileOverlay.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    /*
     * Close mobile menu when a navigation link
     * is selected.
     */

    if (mobileNav) {

        const mobileLinks =
            mobileNav.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });

    }


    /*
     * ESC key closes mobile menu.
     */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    });



    /* =====================================================
       SEARCH OVERLAY
    ===================================================== */

    const searchTrigger =
        document.getElementById("searchTrigger");

    const searchOverlay =
        document.getElementById("searchOverlay");

    const searchClose =
        document.getElementById("searchClose");

    const searchInput =
        document.getElementById("globalSearch");


    function openSearch() {

        if (!searchOverlay) return;

        searchOverlay.classList.add("active");

        document.body.classList.add("search-open");

        if (searchInput) {

            setTimeout(() => {

                searchInput.focus();

            }, 250);

        }

    }


    function closeSearch() {

        if (!searchOverlay) return;

        searchOverlay.classList.remove("active");

        document.body.classList.remove("search-open");

    }


    if (searchTrigger) {

        searchTrigger.addEventListener(
            "click",
            openSearch
        );

    }


    if (searchClose) {

        searchClose.addEventListener(
            "click",
            closeSearch
        );

    }


    if (searchOverlay) {

        searchOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === searchOverlay
                ) {

                    closeSearch();

                }

            }
        );

    }


    /*
     * ESC closes search.
     */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            searchOverlay &&
            searchOverlay.classList.contains("active")
        ) {

            closeSearch();

        }

    });



    /* =====================================================
       HERO EXPLORE BUTTON
    ===================================================== */

    const heroExplore =
        document.querySelector(
            ".hero .primary-btn[href*='archive']"
        );


    if (heroExplore) {

        heroExplore.addEventListener(
            "click",
            event => {

                const href =
                    heroExplore.getAttribute("href");

                if (
                    href &&
                    href.startsWith("#")
                ) {

                    event.preventDefault();

                    const target =
                        document.querySelector(href);

                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    }



    /* =====================================================
       ANCHOR LINK SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");

                if (
                    !href ||
                    href === "#" ||
                    href === "#!"
                ) {
                    return;
                }


                const target =
                    document.querySelector(href);

                if (!target) {
                    return;
                }


                event.preventDefault();


                /*
                 * Close overlays before scrolling.
                 */

                closeMobileMenu();
                closeSearch();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    15;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });



    /* =====================================================
       ACTIVE NAVIGATION LINK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".desktop-nav a, .mobile-nav a"
        );


    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (!href) return;


        const cleanHref =
            href
                .split("#")[0]
                .split("?")[0]
                .toLowerCase();


        if (
            cleanHref &&
            cleanHref === currentPage
        ) {

            link.classList.add("active");

        }

    });



    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backTop) {

        backTop.addEventListener(
            "click",
            event => {

                event.preventDefault();

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =====================================================
       IMAGE LOAD SAFETY
    ===================================================== */

    document.querySelectorAll(
        "img"
    ).forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-load-error"
                );

            }
        );

    });



});
