
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
/* =========================================================
   ROOTS — PART 2/5
   Archive Filters + Search + Reveal Animations
   ========================================================= */


/* =========================================================
   ARCHIVE FILTER SYSTEM
   ========================================================= */

const archiveFilterButtons = document.querySelectorAll(".archive-filter");
const archiveItems = document.querySelectorAll(".archive-item");
const archiveSearchInput = document.querySelector("#archiveSearch");
const archiveResultCount = document.querySelector("#archiveResultCount");
const archiveNoResults = document.querySelector("#archiveNoResults");


let activeArchiveFilter = "all";


/* ---------------------------------------------------------
   FILTER BUTTONS
--------------------------------------------------------- */

archiveFilterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        archiveFilterButtons.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });


        button.classList.add("active");
        button.setAttribute("aria-selected", "true");


        activeArchiveFilter =
            button.dataset.filter || "all";


        filterArchiveItems();

    });

});



/* =========================================================
   ARCHIVE SEARCH + FILTER
   ========================================================= */

function filterArchiveItems() {

    const searchValue =
        archiveSearchInput
            ? archiveSearchInput.value.trim().toLowerCase()
            : "";


    let visibleCount = 0;


    archiveItems.forEach((item) => {

        const category =
            (item.dataset.category || "").toLowerCase();


        const searchableText =
            item.textContent.toLowerCase();


        const matchesCategory =
            activeArchiveFilter === "all" ||
            category === activeArchiveFilter;


        const matchesSearch =
            !searchValue ||
            searchableText.includes(searchValue);


        const shouldShow =
            matchesCategory && matchesSearch;


        if (shouldShow) {

            item.style.display = "";

            item.classList.remove("archive-item-hidden");

            visibleCount++;


            /*
             * Small reveal delay when filtering.
             */

            requestAnimationFrame(() => {
                item.classList.add("archive-item-visible");
            });

        } else {

            item.classList.remove("archive-item-visible");
            item.classList.add("archive-item-hidden");

            item.style.display = "none";

        }

    });


    /* -----------------------------------------------------
       RESULT COUNT
    ----------------------------------------------------- */

    if (archiveResultCount) {

        archiveResultCount.textContent =
            `${visibleCount} ${visibleCount === 1 ? "result" : "results"}`;

    }


    /* -----------------------------------------------------
       NO RESULTS MESSAGE
    ----------------------------------------------------- */

    if (archiveNoResults) {

        if (visibleCount === 0) {

            archiveNoResults.classList.add("show");

        } else {

            archiveNoResults.classList.remove("show");

        }

    }

}



/* =========================================================
   LIVE ARCHIVE SEARCH
   ========================================================= */

if (archiveSearchInput) {

    archiveSearchInput.addEventListener("input", () => {

        filterArchiveItems();

    });

}



/* =========================================================
   CLEAR SEARCH WHEN ESC IS PRESSED
   ========================================================= */

if (archiveSearchInput) {

    archiveSearchInput.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            archiveSearchInput.value = "";

            filterArchiveItems();

            archiveSearchInput.blur();

        }

    });

}



/* =========================================================
   ARCHIVE CARD HOVER / POINTER EFFECT
   ========================================================= */

archiveItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.classList.add("is-hovered");

    });


    item.addEventListener("mouseleave", () => {

        item.classList.remove("is-hovered");

    });

});



/* =========================================================
   REVEAL ANIMATION SYSTEM
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    /*
     * Fallback for older browsers.
     */

    revealElements.forEach((element) => {

        element.classList.add("revealed");

    });

}



/* =========================================================
   ARCHIVE CARD IMAGE LOADING
   ========================================================= */

const archiveImages =
    document.querySelectorAll(".archive-item-image img");


archiveImages.forEach((image) => {

    if (image.complete) {

        image.classList.add("image-loaded");

    } else {

        image.addEventListener(
            "load",
            () => {

                image.classList.add("image-loaded");

            },
            { once: true }
        );

    }


    image.addEventListener(
        "error",
        () => {

            image.classList.add("image-error");

        },
        { once: true }
    );

});



/* =========================================================
   CATEGORY CARDS — SMOOTH HOVER STATE
   ========================================================= */

const archiveCategoryCards =
    document.querySelectorAll(".archive-category-card");


archiveCategoryCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("category-hover");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("category-hover");

    });

});



/* =========================================================
   ARCHIVE "EXPLORE" LINKS
   ========================================================= */

const archiveAnchorLinks =
    document.querySelectorAll(
        'a[href^="#archive"], a[href="#crafts"], a[href="#voices"], a[href="#communities"]'
    );


archiveAnchorLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");


        if (!targetId || targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =========================================================
   FEATURED ARCHIVE IMAGE PARALLAX
   ========================================================= */

const featuredImages =
    document.querySelectorAll(
        ".craft-feature-image img, .details-hero-image img"
    );


if (
    featuredImages.length &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    window.addEventListener(
        "scroll",
        () => {

            const scrollPosition =
                window.scrollY;


            featuredImages.forEach((image) => {

                const rect =
                    image.getBoundingClientRect();


                const viewportCenter =
                    window.innerHeight / 2;


                const imageCenter =
                    rect.top + rect.height / 2;


                const distance =
                    imageCenter - viewportCenter;


                const movement =
                    distance * -0.025;


                if (
                    rect.bottom > 0 &&
                    rect.top < window.innerHeight
                ) {

                    image.style.transform =
                        `translate3d(0, ${movement}px, 0)`;

                }

            });

        },
        {
            passive: true
        }
    );

}



/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTopLinks =
    document.querySelectorAll(
        'a[href="#siteHeader"], a[href="#top"], .back-to-top'
    );


backToTopLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});



/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

let scrollProgressBar =
    document.querySelector(".scroll-progress");


if (!scrollProgressBar) {

    scrollProgressBar =
        document.createElement("div");

    scrollProgressBar.className =
        "scroll-progress";


    scrollProgressBar.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.appendChild(
        scrollProgressBar
    );

}



function updateScrollProgress() {

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        scrollProgressBar.style.width = "0%";

        return;

    }


    const currentScroll =
        window.scrollY;


    const percentage =
        Math.min(
            100,
            Math.max(
                0,
                (currentScroll / documentHeight) * 100
            )
        );


    scrollProgressBar.style.width =
        `${percentage}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
        passive: true
    }
);


updateScrollProgress();



/* =========================================================
   ARCHIVE INITIAL STATE
   ========================================================= */

if (archiveItems.length) {

    filterArchiveItems();

}


/* =========================================================
   ROOTS — PART 3/5
   DYNAMIC ARCHIVE DETAILS DATA
   ========================================================= */


/* =========================================================
   ROOTS ARCHIVE DATABASE
========================================================= */

const rootsDetails = {

    /* =====================================================
       01 — BAMBOO CRAFT
    ===================================================== */

    bamboo: {
        category: "CRAFTS / BAMBOO",
        title: "Bamboo Craft",
        subtitle: "Handwoven forms shaped from bamboo and carried through generations.",
        region: "Andhra Pradesh",
        community: "Konda Reddi",
        heritage: "Bamboo craft reflects a close relationship between forest materials, everyday life and skilled hands.",
        heading: "A craft shaped by the forest.",
        description: "Bamboo has long been transformed into useful and expressive objects through careful handwork. Each piece carries the knowledge of selecting, preparing and weaving a natural material.",
        storyTitle: "Where material becomes memory.",
        story: "For artisan communities, bamboo is more than a raw material. It becomes baskets, containers and everyday objects through techniques learned by observing and practicing alongside earlier generations.",
        highlightTitle: "Hands, material and time.",
        highlightText: "The beauty of bamboo craft comes from the relationship between a natural material and the hands that understand how it should be shaped.",
        image: "images/bamboocraft.jpg",
        secondaryImage: "images/bamboocraft.jpg",
        imageAlt: "Traditional bamboo craft",
        number: "01"
    },


    /* =====================================================
       02 — HANDLOOM WEAVING
    ===================================================== */

    weaving: {
        category: "CRAFTS / TEXTILES",
        title: "Handloom Weaving",
        subtitle: "Threads, patterns and patient hands creating textiles with cultural memory.",
        region: "India",
        community: "Artisan Weaving Communities",
        heritage: "Handloom traditions preserve patterns, techniques and knowledge through every woven textile.",
        heading: "Patterns carried through generations.",
        description: "Handloom weaving transforms individual threads into textiles through a process that combines technique, patience and visual tradition.",
        storyTitle: "The rhythm of the loom.",
        story: "A handloom carries more than thread. It carries a practiced rhythm built through repetition, observation and inherited knowledge.",
        highlightTitle: "Every thread has a place.",
        highlightText: "Traditional weaving demonstrates how technical skill and cultural expression can exist within the same textile.",
        image: "images/handloomweaving.png",
        secondaryImage: "images/tribaltextile.png",
        imageAlt: "Traditional handloom weaving",
        number: "02"
    },


    /* =====================================================
       03 — HANDS BEHIND THE CRAFT
    ===================================================== */

    hands: {
        category: "STORIES / ARTISANS",
        title: "The Hands Behind the Craft",
        subtitle: "The people, gestures and skills that keep traditional making alive.",
        region: "India",
        community: "Artisan Communities",
        heritage: "Craft survives because knowledge continues to move from one pair of hands to another.",
        heading: "Behind every object is a maker.",
        description: "Traditional objects are shaped by people who learn materials, techniques and patterns through practice and community knowledge.",
        storyTitle: "Knowledge lives in the hands.",
        story: "A finished object can look simple, but the skill behind it may represent years of observation and practice.",
        highlightTitle: "Making is remembering.",
        highlightText: "When an artisan teaches a technique to another generation, a piece of cultural knowledge continues its journey.",
        image: "images/handsbehindcraft.png",
        secondaryImage: "images/objecsweinherit.png",
        imageAlt: "Hands of a traditional artisan",
        number: "03"
    },


    /* =====================================================
       04 — METAL CRAFT
    ===================================================== */

    metal: {
        category: "CRAFTS / METAL",
        title: "Traditional Metal Craft",
        subtitle: "Metal shaped through heat, skill and inherited making traditions.",
        region: "India",
        community: "Traditional Metalworking Communities",
        heritage: "Metalworking traditions combine material knowledge with highly practiced hand skills.",
        heading: "Fire, form and skilled hands.",
        description: "Traditional metal craft involves transforming a hard material into useful or expressive forms through controlled processes and practiced techniques.",
        storyTitle: "A knowledge shaped by heat.",
        story: "Metal craft requires an understanding of material, temperature, tools and timing. Techniques are often developed through long practice.",
        highlightTitle: "Strength becomes form.",
        highlightText: "Traditional metal objects reveal how technical knowledge can become part of a community's visual and material heritage.",
        image: "images/metalart.png",
        secondaryImage: "images/metalart.png",
        imageAlt: "Traditional metal craft",
        number: "04"
    },


    /* =====================================================
       05 — POTTERY
    ===================================================== */

    pottery: {
        category: "CRAFTS / POTTERY",
        title: "Traditional Pottery",
        subtitle: "Earth, water and fire transformed into objects for everyday life.",
        region: "India",
        community: "Traditional Pottery Communities",
        heritage: "Pottery connects local earth and practical knowledge with forms used across generations.",
        heading: "From earth to everyday life.",
        description: "Traditional pottery begins with natural clay and develops through shaping, drying and firing.",
        storyTitle: "Clay remembers the hands.",
        story: "Pottery is a process of transformation. Clay gathered from the earth is prepared and shaped by hand before fire gives the final object its strength and character.",
        highlightTitle: "Earth, water and fire.",
        highlightText: "The making process demonstrates a direct relationship between natural materials and human skill.",
        image: "images/tribalpottery.png",
        secondaryImage: "images/tribalpottery.png",
        imageAlt: "Traditional pottery",
        number: "05"
    },


    /* =====================================================
       06 — TRIBAL TEXTILE
    ===================================================== */

    textile: {
        category: "CRAFTS / TEXTILES",
        title: "Tribal Textile",
        subtitle: "Colour, pattern and cloth carrying stories of place and identity.",
        region: "India",
        community: "Tribal Textile Communities",
        heritage: "Textiles can preserve visual language through colour, pattern and traditional making techniques.",
        heading: "A language written in cloth.",
        description: "Traditional textiles can carry patterns and colours that reflect the environment, customs and creative knowledge of the communities that make them.",
        storyTitle: "Patterns with a memory.",
        story: "Textile traditions are often taught through observation and repeated practice.",
        highlightTitle: "Culture woven into colour.",
        highlightText: "A textile can become both an everyday object and a visual expression of community knowledge.",
        image: "images/tribaltextile.png",
        secondaryImage: "images/handloomweaving.png",
        imageAlt: "Traditional tribal textile",
        number: "06"
    },


    /* =====================================================
       07 — BODO
    ===================================================== */

    bodo: {
        category: "COMMUNITIES / ASSAM",
        title: "Bodo Community",
        subtitle: "A cultural landscape shaped by community, craft, land and living traditions.",
        region: "Assam",
        community: "Bodo Community",
        heritage: "Bodo cultural traditions include distinctive textiles, community practices and artistic knowledge.",
        heading: "A living heritage of Assam.",
        description: "The Bodo community of Assam carries a rich cultural heritage expressed through textiles, craft traditions, social practices and relationships with the surrounding landscape.",
        storyTitle: "Heritage in everyday life.",
        story: "Cultural knowledge remains meaningful when it continues to appear in everyday life. Clothing, craft, stories and community practices can all become ways through which heritage is remembered and shared.",
        highlightTitle: "Community keeps culture moving.",
        highlightText: "Living heritage is sustained when knowledge remains connected to people, practice and community life.",
        image: "images/bodo.jpg",
        secondaryImage: "images/bodo.jpg",
        imageAlt: "Bodo Community",
        number: "07"
    },


    /* =====================================================
       08 — GOND
    ===================================================== */

    gond: {
        category: "COMMUNITIES / CENTRAL INDIA",
        title: "Gond Community",
        subtitle: "Visual traditions, stories and relationships with the natural world.",
        region: "Central India",
        community: "Gond Community",
        heritage: "Gond cultural expression is closely connected with stories, nature and artistic traditions.",
        heading: "Stories drawn from the living world.",
        description: "Gond cultural traditions include distinctive visual expression and knowledge connected with landscapes, animals, plants and community memory.",
        storyTitle: "The world becomes a story.",
        story: "Artistic traditions can become a way of recording how a community understands its surroundings.",
        highlightTitle: "Nature as memory.",
        highlightText: "The natural world can become both inspiration and a repository of cultural stories.",
        image: "images/gond.png",
        secondaryImage: "images/gond.png",
        imageAlt: "Gond Community",
        number: "08"
    },


    /* =====================================================
       09 — DONGRIA KONDH
    ===================================================== */

    dongria: {
        category: "COMMUNITIES / ODISHA",
        title: "Dongria Kondh",
        subtitle: "Community knowledge deeply connected with hills, forests and everyday life.",
        region: "Odisha",
        community: "Dongria Kondh",
        heritage: "Dongria Kondh traditions are closely associated with their landscape, community practices and material culture.",
        heading: "Life shaped by the hills.",
        description: "The Dongria Kondh community has a strong relationship with the surrounding hills and forests.",
        storyTitle: "A landscape that teaches.",
        story: "For communities closely connected with their environment, landscape is not simply a background. It can shape food, materials, work, stories and ways of understanding the world.",
        highlightTitle: "Knowledge rooted in place.",
        highlightText: "Cultural knowledge can remain strong when it is connected to the places where generations have lived and worked.",
        image: "images/dongria.png",
        secondaryImage: "images/dongria.png",
        imageAlt: "Dongria Kondh community",
        number: "09"
    },


    /* =====================================================
       10 — SANTHAL
    ===================================================== */

    santhal: {
        category: "COMMUNITIES / EASTERN INDIA",
        title: "Santhal Community",
        subtitle: "Community, landscape, music and artistic traditions carried across generations.",
        region: "Eastern India",
        community: "Santhal Community",
        heritage: "Santhal cultural heritage includes distinctive community traditions, visual expression, music and relationships with the land.",
        heading: "A culture carried through community.",
        description: "Santhal traditions continue through collective practices, artistic expression, stories and knowledge shared within communities.",
        storyTitle: "Stories that belong to everyone.",
        story: "Cultural memory can be strengthened through collective participation. Music, art, celebrations and everyday knowledge can all help connect younger generations with earlier ones.",
        highlightTitle: "Heritage is collective.",
        highlightText: "Traditions remain meaningful when they are practiced, shared and experienced together.",
        image: "images/santhal.png",
        secondaryImage: "images/santhal.png",
        imageAlt: "Santhal Community",
        number: "10"
    },


    /* =====================================================
       11 — KONDA REDDI
    ===================================================== */

    konda: {
        category: "COMMUNITIES / ANDHRA PRADESH",
        title: "Konda Reddi Community",
        subtitle: "Forest knowledge, craft traditions and everyday life connected with the landscape.",
        region: "Andhra Pradesh",
        community: "Konda Reddi",
        heritage: "Konda Reddi cultural knowledge includes relationships with forests, materials, crafts and community life.",
        heading: "Knowledge rooted in the forest.",
        description: "The Konda Reddi community has a close relationship with its surrounding landscape. Traditional materials and practical knowledge form an important part of everyday life.",
        storyTitle: "The forest as a source of knowledge.",
        story: "Natural materials can become part of everyday objects through knowledge passed between generations.",
        highlightTitle: "Material and memory.",
        highlightText: "Craft traditions can preserve knowledge about materials, tools and the landscapes from which they come.",
        image: "images/kondareddy.png",
        secondaryImage: "images/bamboocraft.jpg",
        imageAlt: "Konda Reddi Community",
        number: "11"
    },


    /* =====================================================
       12 — STORIES FROM HOME
    ===================================================== */

    home: {
        category: "STORIES / MEMORY",
        title: "Stories from Home",
        subtitle: "Personal memories and everyday voices that make heritage feel close.",
        region: "Across India",
        community: "Community Voices",
        heritage: "Heritage also lives in memories, family stories and ordinary moments shared between generations.",
        heading: "Home is where stories begin.",
        description: "Some of the most meaningful heritage is found in ordinary memories: objects kept at home, recipes remembered, songs repeated and stories told again and again.",
        storyTitle: "Memory becomes a living archive.",
        story: "A story passed from one generation to another may never appear in a museum, yet it can carry a deep understanding of family, place and identity.",
        highlightTitle: "Small stories matter.",
        highlightText: "Everyday memories can reveal how culture is experienced beyond formal collections and institutions.",
        image: "images/storiesfromhome.png",
        secondaryImage: "images/storiesfromhome.png",
        imageAlt: "Stories from home",
        number: "12"
    },


    /* =====================================================
       13 — THE FOREST GIVES LIFE
    ===================================================== */

    forest: {
        category: "STORIES / NATURE",
        title: "The Forest Gives Life",
        subtitle: "A reflection on the relationship between people, forests and traditional knowledge.",
        region: "Across India",
        community: "Forest Communities",
        heritage: "For many communities, forests provide materials, food, knowledge and connections that shape everyday life.",
        heading: "The forest is more than a landscape.",
        description: "Forests can be sources of food, materials, medicine, work and cultural knowledge.",
        storyTitle: "Learning from the living landscape.",
        story: "Knowledge of seasons, plants, materials and natural cycles can be built through generations of experience.",
        highlightTitle: "When nature becomes knowledge.",
        highlightText: "Traditional ecological knowledge connects everyday life with careful observation of the natural world.",
        image: "images/theforestgiveuslife.png",
        secondaryImage: "images/theforestgiveuslife.png",
        imageAlt: "The forest gives life",
        number: "13"
    },


    /* =====================================================
       14 — OBJECTS WE INHERIT
    ===================================================== */

    objects: {
        category: "STORIES / OBJECTS",
        title: "Objects We Inherit",
        subtitle: "Everyday objects that carry memory, meaning and stories across generations.",
        region: "Across India",
        community: "Families & Communities",
        heritage: "Objects can become vessels of memory when they remain connected to the people and stories behind them.",
        heading: "Objects can remember.",
        description: "A traditional object can hold more than material value. It can remind us of a person, a place, a practice or a moment that belongs to another generation.",
        storyTitle: "What we keep carries a story.",
        story: "Objects passed through families often become quiet records of the past.",
        highlightTitle: "Memory has a material form.",
        highlightText: "When an object is preserved and its story is remembered, it can become a bridge between generations.",
        image: "images/objecsweinherit.png",
        secondaryImage: "images/objecsweinherit.png",
        imageAlt: "Objects we inherit",
        number: "14"
    }

};



/* =========================================================
   DETAILS PAGE — READ URL ID
========================================================= */

const detailsPage =
    document.querySelector(".details-page");

const urlParams =
    new URLSearchParams(window.location.search);

const currentDetailId =
    urlParams.get("id");

const currentDetail =
    currentDetailId
        ? rootsDetails[currentDetailId]
        : null;



/* =========================================================
   DETAILS PAGE ELEMENTS
========================================================= */

const detailElements = {

    category:
        document.getElementById("detailCategory"),

    title:
        document.getElementById("detailTitle"),

    subtitle:
        document.getElementById("detailSubtitle"),

    region:
        document.getElementById("detailRegion"),

    community:
        document.getElementById("detailCommunity"),

    image:
        document.getElementById("detailImage"),

    imageNumber:
        document.getElementById("detailImageNumber"),

    heading:
        document.getElementById("detailHeading"),

    description:
        document.getElementById("detailDescription"),

    infoRegion:
        document.getElementById("infoRegion"),

    infoCommunity:
        document.getElementById("infoCommunity"),

    infoHeritage:
        document.getElementById("infoHeritage"),

    storyTitle:
        document.getElementById("detailStoryTitle"),
story:
        document.getElementById("detailStory"),

    secondaryImage:
        document.getElementById("detailSecondaryImage"),

    highlightTitle:
        document.getElementById("detailHighlightTitle"),

    highlightText:
        document.getElementById("detailHighlightText")

};



/* =========================================================
   POPULATE DETAILS PAGE
========================================================= */

function populateDetailsPage() {

    if (!detailsPage) {
        return;
    }


    if (!currentDetail) {

        showDetailsNotFound();

        return;

    }


    document.title =
        `${currentDetail.title} | ROOTS Heritage Archive`;


    if (detailElements.category) {
        detailElements.category.textContent =
            currentDetail.category;
    }


    if (detailElements.title) {
        detailElements.title.textContent =
            currentDetail.title;
    }


    if (detailElements.subtitle) {
        detailElements.subtitle.textContent =
            currentDetail.subtitle;
    }


    if (detailElements.region) {
        detailElements.region.textContent =
            currentDetail.region;
    }


    if (detailElements.community) {
        detailElements.community.textContent =
            currentDetail.community;
    }


    if (detailElements.image) {

        detailElements.image.src =
            currentDetail.image;

        detailElements.image.alt =
            currentDetail.imageAlt ||
            currentDetail.title;

    }


    if (detailElements.imageNumber) {
        detailElements.imageNumber.textContent =
            currentDetail.number;
    }


    if (detailElements.heading) {
        detailElements.heading.textContent =
            currentDetail.heading;
    }


    if (detailElements.description) {
        detailElements.description.textContent =
            currentDetail.description;
    }


    if (detailElements.infoRegion) {
        detailElements.infoRegion.textContent =
            currentDetail.region;
    }


    if (detailElements.infoCommunity) {
        detailElements.infoCommunity.textContent =
            currentDetail.community;
    }


    if (detailElements.infoHeritage) {
        detailElements.infoHeritage.textContent =
            currentDetail.heritage;
    }


    if (detailElements.storyTitle) {
        detailElements.storyTitle.textContent =
            currentDetail.storyTitle;
    }


    if (detailElements.story) {
        detailElements.story.textContent =
            currentDetail.story;
    }


    if (detailElements.secondaryImage) {

        detailElements.secondaryImage.src =
            currentDetail.secondaryImage ||
            currentDetail.image;

        detailElements.secondaryImage.alt =
            currentDetail.imageAlt ||
            currentDetail.title;

    }


    if (detailElements.highlightTitle) {
        detailElements.highlightTitle.textContent =
            currentDetail.highlightTitle;
    }


    if (detailElements.highlightText) {
        detailElements.highlightText.textContent =
            currentDetail.highlightText;
    }

}



/* =========================================================
   INVALID DETAILS ID
========================================================= */

function showDetailsNotFound() {

    if (!detailsPage) {
        return;
    }


    document.title =
        "Archive Story Not Found | ROOTS";


    if (detailElements.category) {

        detailElements.category.textContent =
            "ROOTS / ARCHIVE";

    }


    if (detailElements.title) {

        detailElements.title.textContent =
            "Story not found";

    }


    if (detailElements.subtitle) {

        detailElements.subtitle.textContent =
            "The archive entry you are looking for could not be found.";

    }


    if (detailElements.description) {

        detailElements.description.textContent =
            "Please return to the archive and choose another collection.";

    }

}



/* =========================================================
   RUN DETAILS PAGE
========================================================= */

populateDetailsPage();
   /* =========================================================
   ROOTS — PART 4/5
   Details Interactions + Voices + Living Map
   ========================================================= */


/* =========================================================
   DETAILS PAGE — IMAGE LOADING
========================================================= */

const detailsMainImage =
    document.getElementById("detailImage");

const detailsSecondaryImage =
    document.getElementById("detailSecondaryImage");


function prepareDetailImage(image) {

    if (!image) {
        return;
    }


    image.addEventListener("load", () => {

        image.classList.add("image-loaded");

    });


    image.addEventListener("error", () => {

        image.classList.add("image-error");

    });

}


prepareDetailImage(detailsMainImage);
prepareDetailImage(detailsSecondaryImage);



/* =========================================================
   DETAILS PAGE — BACK BUTTON
========================================================= */

const detailsBackLinks =
    document.querySelectorAll(
        ".details-back, .back-to-archive"
    );


detailsBackLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const href =
            link.getAttribute("href");


        /*
         * Allow normal archive navigation.
         */

        if (
            href &&
            href !== "#" &&
            !href.startsWith("#")
        ) {

            return;

        }


        event.preventDefault();


        if (document.referrer) {

            window.history.back();

        } else {

            window.location.href =
                "archive.html";

        }

    });

});



/* =========================================================
   DETAILS PAGE — IMAGE HOVER
========================================================= */

const detailImageWrappers =
    document.querySelectorAll(
        ".details-hero-image, .details-secondary-image"
    );


detailImageWrappers.forEach((wrapper) => {

    wrapper.addEventListener("mouseenter", () => {

        wrapper.classList.add("is-hovered");

    });


    wrapper.addEventListener("mouseleave", () => {

        wrapper.classList.remove("is-hovered");

    });

});



/* =========================================================
   DETAILS PAGE — REVEAL CONTENT
========================================================= */

const detailsRevealElements =
    document.querySelectorAll(
        ".details-page .reveal"
    );


if (
    detailsRevealElements.length &&
    "IntersectionObserver" in window
) {

    const detailsObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -30px 0px"
            }
        );


    detailsRevealElements.forEach((element) => {

        detailsObserver.observe(element);

    });

}



/* =========================================================
   RELATED ARCHIVE CARDS
========================================================= */

const relatedCards =
    document.querySelectorAll(
        ".related-archive-card, .related-card"
    );


relatedCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("related-hover");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("related-hover");

    });

});



/* =========================================================
   VOICE / AUDIO INTERACTION
========================================================= */

const voiceButtons =
    document.querySelectorAll(
        ".voice-play, .voice-card-play, [data-voice-play]"
    );


voiceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const isPlaying =
            button.classList.contains("playing");


        /*
         * Stop all other voice buttons.
         */

        voiceButtons.forEach((otherButton) => {

            otherButton.classList.remove(
                "playing"
            );

            otherButton.setAttribute(
                "aria-label",
                "Play story"
            );

        });


        if (!isPlaying) {

            button.classList.add("playing");

            button.setAttribute(
                "aria-label",
                "Pause story"
            );


            showRootsToast(
                "Story playback started"
            );

        } else {

            button.classList.remove(
                "playing"
            );

            button.setAttribute(
                "aria-label",
                "Play story"
            );

        }

    });

});



/* =========================================================
   VOICE WAVE ANIMATION
========================================================= */

const voicePlayers =
    document.querySelectorAll(
        ".voice-player, .voice-card"
    );


voicePlayers.forEach((player) => {

    const playButton =
        player.querySelector(
            ".voice-play, .voice-card-play, [data-voice-play]"
        );


    if (!playButton) {
        return;
    }


    playButton.addEventListener("click", () => {

        player.classList.toggle(
            "is-playing"
        );

    });

});



/* =========================================================
   LIVING MAP
========================================================= */

const mapRegionButtons =
    document.querySelectorAll(
        ".map-region, [data-region]"
    );


const mapRegionItems =
    document.querySelectorAll(
        ".region-list-item, .map-list-item"
    );


mapRegionButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const region =
            button.dataset.region ||
            button.getAttribute("data-region");


        /*
         * Remove active state.
         */

        mapRegionButtons.forEach((item) => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        /*
         * Highlight corresponding region.
         */

        mapRegionItems.forEach((item) => {

            const itemRegion =
                item.dataset.region ||
                item.getAttribute("data-region");


            if (
                region &&
                itemRegion &&
                itemRegion === region
            ) {

                item.classList.add(
                    "active"
                );

            } else {

                item.classList.remove(
                    "active"
                );

            }

        });

    });

});



/* =========================================================
   REGION LIST CLICK
========================================================= */

mapRegionItems.forEach((item) => {

    item.addEventListener("click", () => {

        const region =
            item.dataset.region ||
            item.getAttribute("data-region");


        mapRegionItems.forEach((otherItem) => {

            otherItem.classList.remove(
                "active"
            );

        });


        item.classList.add("active");


        mapRegionButtons.forEach((button) => {

            const buttonRegion =
                button.dataset.region ||
                button.getAttribute("data-region");


            if (
                region &&
                buttonRegion === region
            ) {

                button.classList.add(
                    "active"
                );

            } else {

                button.classList.remove(
                    "active"
                );

            }

        });

    });

});



/* =========================================================
   TIMELINE INTERACTION
========================================================= */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );


timelineItems.forEach((item) => {

    item.addEventListener("click", () => {

        timelineItems.forEach((otherItem) => {

            otherItem.classList.remove(
                "active"
            );

        });


        item.classList.add("active");

    });

});



/* =========================================================
   CATEGORY CARD → ARCHIVE FILTER
========================================================= */

const categoryLinks =
    document.querySelectorAll(
        "[data-archive-filter]"
    );


categoryLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const filter =
            link.dataset.archiveFilter;


        if (!filter) {
            return;
        }


        localStorage.setItem(
            "rootsArchiveFilter",
            filter
        );

    });

});



/* =========================================================
   RESTORE ARCHIVE FILTER
========================================================= */

const savedArchiveFilter =
    localStorage.getItem(
        "rootsArchiveFilter"
    );


if (
    savedArchiveFilter &&
    archiveFilterButtons.length
) {

    const matchingButton =
        document.querySelector(
            `.archive-filter[data-filter="${savedArchiveFilter}"]`
        );


    if (matchingButton) {

        archiveFilterButtons.forEach((button) => {

            button.classList.remove("active");

        });


        matchingButton.classList.add(
            "active"
        );


        activeArchiveFilter =
            savedArchiveFilter;


        filterArchiveItems();

    }

}



/* =========================================================
   HORIZONTAL SCROLL — RELATED / ARCHIVE ROWS
========================================================= */

const horizontalRows =
    document.querySelectorAll(
        ".archive-horizontal-row, .related-archive-row"
    );


horizontalRows.forEach((row) => {

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;


    row.addEventListener(
        "mousedown",
        (event) => {

            isDown = true;

            row.classList.add(
                "dragging"
            );

            startX =
                event.pageX -
                row.offsetLeft;

            scrollLeft =
                row.scrollLeft;

        }
    );


    row.addEventListener(
        "mouseleave",
        () => {

            isDown = false;

            row.classList.remove(
                "dragging"
            );

        }
    );


    row.addEventListener(
        "mouseup",
        () => {

            isDown = false;

            row.classList.remove(
                "dragging"
            );

        }
    );


    row.addEventListener(
        "mousemove",
        (event) => {

            if (!isDown) {
                return;
            }


            event.preventDefault();


            const x =
                event.pageX -
                row.offsetLeft;


            const walk =
                (x - startX) * 1.2;


            row.scrollLeft =
                scrollLeft - walk;

        }
    );

});



/* =========================================================
   TOUCH SWIPE SUPPORT
========================================================= */

document.querySelectorAll(
    ".archive-horizontal-row, .related-archive-row"
).forEach((row) => {

    let touchStartX = 0;
    let touchStartScroll = 0;


    row.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.touches[0].clientX;

            touchStartScroll =
                row.scrollLeft;

        },
        { passive: true }
    );


    row.addEventListener(
        "touchmove",
        (event) => {

            if (!touchStartX) {
                return;
            }


            const currentX =
                event.touches[0].clientX;


            const difference =
                touchStartX - currentX;


            row.scrollLeft =
                touchStartScroll + difference;

        },
        { passive: true }
    );


    row.addEventListener(
        "touchend",
        () => {

            touchStartX = 0;

        },
        { passive: true }
    );

});



/* =========================================================
   GENERIC TOAST HELPER
========================================================= */

function showRootsToast(message) {

    const toast =
        document.getElementById(
            "rootsToast"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (!toast) {
        return;
    }


    if (toastMessage) {

        toastMessage.textContent =
            message;

    }


    toast.classList.add("show");


    clearTimeout(
        window.rootsToastTimer
    );


    window.rootsToastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}



/* =========================================================
   DETAIL PAGE SHARE BUTTONS
========================================================= */

const shareButtons =
    document.querySelectorAll(
        "[data-share]"
    );


shareButtons.forEach((button) => {

    button.addEventListener("click", async () => {

        const shareTitle =
            currentDetail
                ? currentDetail.title
                : "ROOTS Heritage Archive";


        const shareUrl =
            window.location.href;


        if (
            navigator.share
        ) {

            try {

                await navigator.share({

                    title:
                        shareTitle,

                    text:
                        `Explore ${shareTitle} on ROOTS Heritage Archive.`,

                    url:
                        shareUrl

                });

            } catch (error) {

                /*
                 * User cancelled share.
                 */

            }

        } else {

            try {

                await navigator.clipboard.writeText(
                    shareUrl
                );


                showRootsToast(
                    "Archive link copied"
                );

            } catch (error) {

                showRootsToast(
                    "Unable to copy the link"
                );

            }

        }

    });

});



/* =========================================================
   IMAGE LIGHT SAFETY
========================================================= */

document.querySelectorAll(
    ".archive-item-image img, .details-hero-image img, .details-secondary-image img"
).forEach((image) => {

    image.addEventListener(
        "load",
        () => {

            image.style.opacity = "1";

        },
        { once: true }
    );

});

/* =========================================================
   ROOTS — PART 5/5
   Forms + Modal + Final Initialization
   ========================================================= */


/* =========================================================
   MESSAGE MODAL
========================================================= */

const messageModal =
    document.getElementById("messageModal");

const openMessageModal =
    document.getElementById("openMessageModal");

const closeMessageModal =
    document.getElementById("closeMessageModal");

const messageModalOverlay =
    document.getElementById("messageModalOverlay");


/* ---------------------------------------------------------
   OPEN MODAL
--------------------------------------------------------- */

function openRootsMessageModal() {

    if (!messageModal) {
        return;
    }


    messageModal.classList.add("active");

    messageModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    /*
     * Focus first input for accessibility.
     */

    const firstInput =
        messageModal.querySelector(
            "input, textarea"
        );


    if (firstInput) {

        setTimeout(() => {

            firstInput.focus();

        }, 250);

    }

}


/* ---------------------------------------------------------
   CLOSE MODAL
--------------------------------------------------------- */

function closeRootsMessageModal() {

    if (!messageModal) {
        return;
    }


    messageModal.classList.remove(
        "active"
    );


    messageModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* ---------------------------------------------------------
   OPEN BUTTON
--------------------------------------------------------- */

if (openMessageModal) {

    openMessageModal.addEventListener(
        "click",
        openRootsMessageModal
    );

}


/* ---------------------------------------------------------
   CLOSE BUTTON
--------------------------------------------------------- */

if (closeMessageModal) {

    closeMessageModal.addEventListener(
        "click",
        closeRootsMessageModal
    );

}


/* ---------------------------------------------------------
   OVERLAY CLOSE
--------------------------------------------------------- */

if (messageModalOverlay) {

    messageModalOverlay.addEventListener(
        "click",
        closeRootsMessageModal
    );

}


/* ---------------------------------------------------------
   ESC CLOSE
--------------------------------------------------------- */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            messageModal &&
            messageModal.classList.contains("active")
        ) {

            closeRootsMessageModal();

        }

    }
);



/* =========================================================
   MESSAGE FORM
========================================================= */

const messageForm =
    document.getElementById("messageForm");


if (messageForm) {

    messageForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "messageName"
                );


            const email =
                document.getElementById(
                    "messageEmail"
                );


            const subject =
                document.getElementById(
                    "messageSubject"
                );


            const message =
                document.getElementById(
                    "messageText"
                );


            /*
             * Basic validation.
             */

            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                return;

            }


            if (
                !name.value.trim() ||
                !email.value.trim() ||
                !subject.value.trim() ||
                !message.value.trim()
            ) {

                showRootsToast(
                    "Please complete all fields."
                );

                return;

            }


            /*
             * Browser email validation.
             */

            if (
                !email.checkValidity()
            ) {

                email.reportValidity();

                return;

            }


            /*
             * Demo submission.
             * No backend is connected.
             */

            messageForm.classList.add(
                "submitted"
            );


            messageForm.reset();


            closeRootsMessageModal();


            showRootsToast(
                "Thank you. Your story has been received."
            );


            setTimeout(() => {

                messageForm.classList.remove(
                    "submitted"
                );

            }, 500);

        }
    );

}



/* =========================================================
   NEWSLETTER FORM
========================================================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


const newsletterEmail =
    document.getElementById(
        "newsletterEmail"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            if (!newsletterEmail) {
                return;
            }


            const email =
                newsletterEmail.value.trim();


            if (!email) {

                showRootsToast(
                    "Please enter your email."
                );

                newsletterEmail.focus();

                return;

            }


            if (
                !newsletterEmail.checkValidity()
            ) {

                newsletterEmail.reportValidity();

                return;

            }


            /*
             * Store subscription locally.
             */

            localStorage.setItem(
                "rootsNewsletterEmail",
                email
            );


            newsletterForm.reset();


            showRootsToast(
                "You're now connected with ROOTS."
            );

        }
    );

}



/* =========================================================
   RESTORE NEWSLETTER EMAIL
========================================================= */

if (newsletterEmail) {

    const savedEmail =
        localStorage.getItem(
            "rootsNewsletterEmail"
        );


    /*
     * Don't automatically place the email
     * inside the form. We only keep the
     * subscription state locally.
     */

    if (savedEmail) {

        newsletterForm.classList.add(
            "already-subscribed"
        );

    }

}



/* =========================================================
   CONTACT EMAIL LINKS
========================================================= */

document.querySelectorAll(
    'a[href^="mailto:"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            showRootsToast(
                "Opening your email app..."
            );

        }
    );

});



/* =========================================================
   EXTERNAL / PLACEHOLDER SOCIAL LINKS
========================================================= */

document.querySelectorAll(
    '.footer-social a[href="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            showRootsToast(
                "Social link coming soon."
            );

        }
    );

});



/* =========================================================
   HERO SCROLL INDICATOR
========================================================= */

const heroScroll =
    document.querySelector(
        ".hero-scroll"
    );


if (heroScroll) {

    heroScroll.addEventListener(
        "click",
        () => {

            const nextSection =
                document.querySelector(
                    "#archive, .archive-section"
                );


            if (nextSection) {

                nextSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}



/* =========================================================
   YEAR AUTO UPDATE
========================================================= */

document.querySelectorAll(
    "[data-current-year]"
).forEach((element) => {

    element.textContent =
        new Date().getFullYear();

});



/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "visible"
        ) {

            document.body.classList.add(
                "page-visible"
            );

        }

    }
);



/* =========================================================
   REDUCED MOTION SUPPORT
========================================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reducedMotion.matches) {

    document.documentElement.classList.add(
        "reduced-motion"
    );

}



/* =========================================================
   FINAL PAGE READY STATE
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );


        /*
         * Recalculate archive state after
         * all images and elements are ready.
         */

        if (
            typeof filterArchiveItems ===
            "function"
        ) {

            filterArchiveItems();

        }


        /*
         * Final scroll progress update.
         */

        if (
            typeof updateScrollProgress ===
            "function"
        ) {

            updateScrollProgress();

        }

    }
);



/* =========================================================
   GLOBAL ERROR SAFETY
========================================================= */

window.addEventListener(
    "error",
    (event) => {

        /*
         * Prevent one non-critical image or
         * UI error from breaking the entire page.
         */

        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {

            event.target.classList.add(
                "image-error"
            );

        }

    },
    true
);



/* =========================================================
   ROOTS SCRIPT COMPLETE
========================================================= */

console.log(
    "ROOTS Heritage Archive — script.js loaded successfully."
);
