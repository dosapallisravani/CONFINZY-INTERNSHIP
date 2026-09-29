/* =========================================================
   ROOTS — Heritage & Artisan Archive
   COMPLETE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    document.querySelectorAll(".mobile-menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (mobileMenu) {
                mobileMenu.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                const navbar = document.querySelector(".navbar");

                const offset = navbar
                    ? navbar.offsetHeight + 20
                    : 20;

                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    offset;

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });
            }

        });

    });


    /* =====================================================
       NAVBAR
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(250,247,240,0.96)";

            navbar.style.boxShadow =
                "0 12px 35px rgba(0,0,0,0.12)";

        } else {

            navbar.style.background =
                "rgba(250,247,240,0.82)";

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.08)";
        }
    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       ARCHIVE FILTER
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const archiveItems =
        document.querySelectorAll(".archive-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const category =
                button.getAttribute("data-category");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            archiveItems.forEach(function (item) {

                const itemCategory =
                    item.getAttribute("data-category");

                if (
                    category === "all" ||
                    itemCategory === category
                ) {

                    item.style.display = "";

                    setTimeout(function () {
                        item.style.opacity = "1";
                        item.style.transform = "translateY(0)";
                    }, 30);

                } else {

                    item.style.opacity = "0";
                    item.style.transform = "translateY(15px)";

                    setTimeout(function () {
                        item.style.display = "none";
                    }, 200);
                }

            });

        });

    });


    /* =====================================================
       ARCHIVE CATEGORY FROM URL
       ===================================================== */

    const archiveParams =
        new URLSearchParams(window.location.search);

    const archiveCategory =
        archiveParams.get("category");

    if (archiveCategory) {

        const selectedButton =
            document.querySelector(
                `.filter-btn[data-category="${archiveCategory}"]`
            );

        if (selectedButton) {
            selectedButton.click();
        }
    }


    /* =====================================================
       DETAILS BUTTONS
       ===================================================== */

    document.querySelectorAll(".details-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            const href =
                button.getAttribute("href");

            if (!href) return;

            console.log(
                "ROOTS Details:",
                href
            );

        });

    });


    /* =====================================================
       IMAGE CHECK
       ===================================================== */

    document.querySelectorAll("img").forEach(function (image) {

        image.addEventListener("error", function () {

            console.error(
                "ROOTS IMAGE FAILED:",
                image.src
            );

        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".archive-item, .community-card, .craft-story, .artisans, .voices, .living-map, .timeline-item, .journal-card, .about"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );

        revealElements.forEach(function (element) {

            element.classList.add(
                "reveal-hidden"
            );

            observer.observe(element);

        });

    }


    /* =====================================================
       VOICE PLAY BUTTON
       ===================================================== */

    const playButton =
        document.querySelector(".play-btn");

    let playing = false;

    if (playButton) {

        playButton.addEventListener("click", function () {

            playing = !playing;

            if (playing) {

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
       REGION BUTTONS
       ===================================================== */

    document.querySelectorAll(
        ".region-list button"
    ).forEach(function (button) {

        button.addEventListener("click", function () {

            const region =
                button.querySelector("b");

            const name =
                region
                    ? region.textContent.trim()
                    : "selected region";

            showToast(
                `Exploring ${name} traditions`
            );

        });

    });


    /* =====================================================
       NEWSLETTER
       ===================================================== */

    const newsletter =
        document.querySelector(
            ".footer-newsletter form"
        );

    if (newsletter) {

        newsletter.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                const input =
                    newsletter.querySelector("input");

                const email =
                    input
                        ? input.value.trim()
                        : "";

                if (!email) {

                    showToast(
                        "Please enter your email."
                    );

                    return;
                }

                const pattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!pattern.test(email)) {

                    showToast(
                        "Please enter a valid email."
                    );

                    return;
                }

                showToast(
                    "Thank you for joining ROOTS."
                );

                newsletter.reset();

            }
        );
    }


    /* =====================================================
       SEARCH
       ===================================================== */

    const searchButton =
        document.querySelector(".search-btn");

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                const searchTerm =
                    prompt(
                        "Search ROOTS — communities, crafts, voices..."
                    );

                if (!searchTerm) return;

                const term =
                    searchTerm.toLowerCase().trim();

                const searchable =
                    document.querySelectorAll(
                        ".archive-item, .community-card, .journal-card, .artisan-profile"
                    );

                let found = false;

                searchable.forEach(function (item) {

                    const text =
                        item.textContent.toLowerCase();

                    if (text.includes(term)) {

                        found = true;

                        item.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        item.style.outline =
                            "2px solid #b97858";

                        item.style.outlineOffset =
                            "5px";

                        setTimeout(function () {

                            item.style.outline = "";

                        }, 2500);

                    }

                });

                if (!found) {

                    showToast(
                        `No results found for "${searchTerm}".`
                    );

                }

            }
        );

    }


    /* =====================================================
       TOAST
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
            setTimeout(function () {

                toast.classList.remove("show");

            }, 2600);
    }

    window.showToast = showToast;

});


/* =========================================================
   ROOTS DETAILS DATA
   ========================================================= */


         



/* =========================================================
   LOAD DETAILS PAGE
   ========================================================= */

function loadRootsDetails() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    console.log("ROOTS detail ID:", id);

    if (!id) {
        console.warn("No detail ID found.");
        return;
    }

    const data = rootsDetails[id];

    if (!data) {
        console.error("No data found for ID:", id);
        return;
    }

    console.log("Loaded detail:", data.title);

    function setText(elementId, value) {
        const element = document.getElementById(elementId);

        if (element && value !== undefined) {
            element.textContent = value;
        }
    }

    /* TEXT */

    setText("detailCategory", data.type);
    setText("detailTitle", data.title);
    setText("detailSubtitle", data.subtitle);
    setText("detailRegion", data.region);
    setText("detailCommunity", data.community);

    setText("detailHeading", data.heading);
    setText("detailDescription", data.description);

    setText("detailStoryTitle", data.storyTitle);
    setText("detailStory", data.story);

    setText("detailHighlightTitle", data.highlightTitle);
    setText("detailHighlightText", data.highlightText);

    setText("infoRegion", data.region);
    setText("infoCommunity", data.community);
    setText("infoHeritage", data.heritage);
    setText("infoRoots", data.roots);

    /* MAIN IMAGE */

    const mainImage = document.getElementById("detailImage");

    if (mainImage && data.image) {

        mainImage.src = data.image;

        mainImage.onerror = function () {
            console.error("Main image not found:", data.image);
        };
    }

    /* SECONDARY IMAGE */

    const secondaryImage =
        document.getElementById("detailSecondaryImage");

    if (secondaryImage && data.secondaryImage) {

        secondaryImage.src = data.secondaryImage;

        secondaryImage.onerror = function () {
            console.error(
                "Secondary image not found:",
                data.secondaryImage
            );
        };
    }

    /* PAGE TITLE */

    document.title = `${data.title} | ROOTS`;

}

    /* ================= HERO ================= */

    setText(
        "detailCategory",
        data.type
    );

    setText(
        "detailTitle",
        data.title
    );

    setText(
        "detailSubtitle",
        data.subtitle
    );

    setText(
        "detailRegion",
        data.region
    );

    setText(
        "detailCommunity",
        data.community
    );


    /* ================= MAIN IMAGE ================= */

    detailImage.src =
        data.image;

    detailImage.alt =
        data.title;


    /* ================= CONTENT ================= */

    setText(
        "detailHeading",
        data.heading
    );

    setText(
        "detailDescription",
        data.description
    );

    setText(
        "infoRegion",
        data.region
    );

    setText(
        "infoCommunity",
        data.community
    );

    setText(
        "infoHeritage",
        data.heritage
    );

    setText(
        "detailStoryTitle",
        data.storyTitle
    );

    setText(
        "detailStory",
        data.story
    );


    /* ================= SECONDARY IMAGE ================= */

    const secondaryImage =
        document.getElementById(
            "detailSecondaryImage"
        );

    if (secondaryImage) {

        secondaryImage.src =
            data.secondaryImage;

        secondaryImage.alt =
            data.title;
    }


    /* ================= HIGHLIGHT ================= */

    setText(
        "detailHighlightTitle",
        data.highlightTitle
    );

    setText(
        "detailHighlightText",
        data.highlightText
    );


    /* ================= PAGE TITLE ================= */

    document.title =
        data.title + " | ROOTS";


    /* ================= DEBUG ================= */

    console.log(
        "ROOTS Details Loaded:",
        id
    );

    console.log(
        "Main Image:",
        data.image
    );

    console.log(
        "Secondary Image:",
        data.secondaryImage
    );

}


/* =========================================================
   SAFE TEXT FUNCTION
   ========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value || "";
    }
}


/* =========================================================
   START DETAILS
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        loadRootsDetails
    );

} else {

    loadRootsDetails();

}
