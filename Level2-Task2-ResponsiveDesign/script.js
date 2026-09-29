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

const rootsDetails = {

    /* =========================
       COMMUNITIES
       ========================= */

    bodo: {
        type: "COMMUNITY",
        title: "Bodo Community",
        subtitle: "Discover the traditions, landscape, crafts and cultural practices of the Bodo community.",
        region: "Assam",
        community: "Bodo",
        heritage: "Community Heritage",
        roots: "India",

        image: "images/bodo.jpg",
        secondaryImage: "images/storiesfromhome.png",

        heading: "Living traditions, carried forward",
        description:
            "The Bodo community carries a rich heritage shaped by traditional knowledge, cultural practices, crafts and connections with the surrounding landscape.",

        storyTitle: "Knowledge rooted in place",
        story:
            "Community traditions are shaped by generations of knowledge, skills and practices. These living traditions continue through everyday life, craft and cultural expression.",

        highlightTitle: "Hands, materials and memory",
        highlightText:
            "ROOTS connects community stories with the crafts and everyday practices through which heritage continues to be expressed."
    },


    gond: {
        type: "COMMUNITY",
        title: "Gond Community",
        subtitle: "A cultural heritage shaped by stories, art and community knowledge.",
        region: "Central India",
        community: "Gond",
        heritage: "Community Heritage",
        roots: "India",

        image: "images/gond.png",
        secondaryImage: "images/storiesfromhome.png",

        heading: "Stories carried through generations",
        description:
            "The Gond community has a rich cultural heritage shaped by traditional knowledge, artistic expression, community practices and connections with the natural environment.",

        storyTitle: "Culture expressed through art",
        story:
            "Gond heritage is closely connected with storytelling, artistic traditions and knowledge passed through generations. Community practices continue to preserve a strong connection between people, culture and place.",

        highlightTitle: "Art, memory and identity",
        highlightText:
            "ROOTS brings together stories, creative traditions and community knowledge to document living heritage."
    },


    dongria: {
        type: "COMMUNITY",
        title: "Dongria Kondh",
        subtitle: "Traditional knowledge and cultural practices connected with community and landscape.",
        region: "Odisha",
        community: "Dongria Kondh",
        heritage: "Community Heritage",
        roots: "India",

        image: "images/dongria.png",
        secondaryImage: "images/storiesfromhome.png",

        heading: "Heritage connected to the landscape",
        description:
            "The Dongria Kondh community carries traditional knowledge, cultural practices and a strong relationship with the natural environment.",

        storyTitle: "Knowledge of place",
        story:
            "Traditional knowledge is passed through generations through everyday practices, community life and a close relationship with the surrounding landscape.",

        highlightTitle: "Living knowledge",
        highlightText:
            "ROOTS documents the stories and practices through which community heritage continues to live."
    },


    santhal: {
        type: "COMMUNITY",
        title: "Santhal Community",
        subtitle: "A living heritage shaped by community, traditions, stories and cultural expression.",
        region: "Eastern India",
        community: "Santhal",
        heritage: "Community Heritage",
        roots: "India",

        image: "images/santhal.png",
        secondaryImage: "images/storiesfromhome.png",

        heading: "A heritage carried together",
        description:
            "Santhal cultural heritage is shaped by community traditions, knowledge, stories, artistic expression and everyday practices.",

        storyTitle: "Traditions that continue",
        story:
            "Cultural knowledge is carried through generations through stories, community practices, celebrations and artistic traditions.",

        highlightTitle: "Community, story and memory",
        highlightText:
            "ROOTS preserves community voices and cultural practices as part of a living heritage archive."
    },


    konda: {
        type: "COMMUNITY",
        title: "Konda Reddi",
        subtitle: "Traditional knowledge and cultural practices connected with forest life.",
        region: "Andhra Pradesh",
        community: "Konda Reddi",
        heritage: "Community Heritage",
        roots: "India",

        image: "images/kondareddy.png",
        secondaryImage: "images/bamboocraft.jpg",

        heading: "Knowledge rooted in place",
        description:
            "The Konda Reddi community has a distinctive cultural heritage shaped by traditional knowledge, community practices and connections with the surrounding environment.",

        storyTitle: "Knowledge rooted in place",
        story:
            "Traditional knowledge is closely connected with community life and the surrounding environment. These practices continue through generations as part of everyday cultural life.",

        highlightTitle: "Hands, materials and memory",
        highlightText:
            "ROOTS connects community stories with the crafts and everyday practices through which heritage continues to be expressed."
    },


    /* =========================
       CRAFTS
       ========================= */

    bamboo: {
        type: "CRAFT",
        title: "Bamboo Craft",
        subtitle: "Handwoven bamboo craft created using traditional techniques passed through generations.",
        region: "Andhra Pradesh",
        community: "Konda Reddi",
        heritage: "Living Craft",
        roots: "India",

        image: "images/bamboocraft.jpg",
        secondaryImage: "images/handsbehindcraft.png",

        heading: "Craft shaped by the hands",
        description:
            "Bamboo craft transforms natural materials into useful and expressive objects through traditional handwork.",

        storyTitle: "Material, skill and patience",
        story:
            "Bamboo is carefully prepared and woven by hand. The knowledge behind these techniques is passed through generations.",

        highlightTitle: "Hands behind the craft",
        highlightText:
            "Every woven object carries the time, skill and knowledge of the person who made it."
    },


    pottery: {
        type: "CRAFT",
        title: "Traditional Pottery",
        subtitle: "Clay vessels shaped using traditional pottery techniques.",
        region: "India",
        community: "Artisan Communities",
        heritage: "Living Craft",
        roots: "India",

        image: "images/tribalpottery.png",
        secondaryImage: "images/objectsweinherite.png",

        heading: "Earth shaped by hand",
        description:
            "Traditional pottery transforms clay into vessels and objects through knowledge passed between generations.",

        storyTitle: "Clay, craft and continuity",
        story:
            "Pottery brings together material knowledge, hand skills and traditional techniques that continue to be practiced today.",

        highlightTitle: "Objects we inherit",
        highlightText:
            "Handmade objects preserve both practical knowledge and memories of the communities that create them."
    },


    weaving: {
        type: "CRAFT",
        title: "Handloom Weaving",
        subtitle: "Traditional weaving practices shaped by skill, rhythm and generations of knowledge.",
        region: "India",
        community: "Artisan Communities",
        heritage: "Living Craft",
        roots: "India",

        image: "images/handloomweaving.png",
        secondaryImage: "images/tribaltextile.png",

        heading: "Threads carrying tradition",
        description:
            "Handloom weaving combines material knowledge, careful technique and artistic expression.",

        storyTitle: "The rhythm of the loom",
        story:
            "Weaving knowledge is built through practice and passed from one generation to another.",

        highlightTitle: "Threads of memory",
        highlightText:
            "Every textile carries patterns, techniques and stories connected to its makers."
    },


    metal: {
        type: "CRAFT",
        title: "Traditional Metal Craft",
        subtitle: "Handcrafted metalwork shaped by traditional artisan knowledge.",
        region: "India",
        community: "Artisan Communities",
        heritage: "Living Craft",
        roots: "India",

        image: "images/metalart.png",
        secondaryImage: "images/objectsweinherite.png",

        heading: "Metal shaped by skill",
        description:
            "Traditional metal craft reflects the knowledge and techniques developed by artisan communities.",

        storyTitle: "Fire, form and craftsmanship",
        story:
            "Metalworking requires patience, precision and knowledge of traditional techniques.",

        highlightTitle: "Objects with memory",
        highlightText:
            "Crafted objects carry the knowledge and identity of the people who create them."
    },


    textile: {
        type: "CRAFT",
        title: "Tribal Textile",
        subtitle: "Textiles carrying traditional patterns, materials and cultural expression.",
        region: "India",
        community: "Artisan Communities",
        heritage: "Living Craft",
        roots: "India",

        image: "images/tribaltextile.png",
        secondaryImage: "images/handloomweaving.png",

        heading: "Patterns that remember",
        description:
            "Traditional textiles preserve patterns, techniques and cultural knowledge through generations.",

        storyTitle: "Woven identity",
        story:
            "Textile traditions connect material, design and community memory.",

        highlightTitle: "Threads of heritage",
        highlightText:
            "Traditional textiles keep cultural expression visible through colour, pattern and technique."
    },


    hands: {
        type: "CRAFT",
        title: "The Hands Behind the Craft",
        subtitle: "A closer look at the people, skills and knowledge behind traditional making.",
        region: "India",
        community: "Artisan Communities",
        heritage: "Living Craft",
        roots: "India",

        image: "images/handsbehindcraft.png",
        secondaryImage: "images/bamboocraft.jpg",

        heading: "The hands behind heritage",
        description:
            "Every traditional craft begins with people who carry skills, patience and knowledge through generations.",

        storyTitle: "Skill passed by hand",
        story:
            "Craft knowledge grows through practice, observation and learning from experienced makers.",

        highlightTitle: "Hands, materials and memory",
        highlightText:
            "The maker is at the heart of every craft tradition."
    }

};
        
    



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
