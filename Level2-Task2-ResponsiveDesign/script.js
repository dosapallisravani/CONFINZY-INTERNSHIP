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

    /* ================= COMMUNITIES ================= */

    bodo: {

        type: "COMMUNITY",

        title: "Bodo Community",

        subtitle:
            "Living traditions, knowledge and heritage carried through generations.",

        region: "Assam",

        community: "Bodo",

        heritage: "Living Tradition",

        image: "images/bodo.jpg",

        secondaryImage:
            "images/storiesfromhome.png",

        heading:
            "A living heritage of Assam",

        description:
            "The Bodo community carries a rich cultural heritage expressed through traditions, everyday life, artistic practices and a strong connection with place.",

        storyTitle:
            "Traditions that continue forward",

        story:
            "Cultural knowledge is carried through families and communities through everyday practices, stories, celebrations and creative work.",

        highlightTitle:
            "Heritage carried by people",

        highlightText:
            "ROOTS brings together stories and visual records that help make living cultural traditions easier to explore and understand."
    },


    gond: {

        type: "COMMUNITY",

        title: "Gond Community",

        subtitle:
            "A cultural heritage shaped by stories, art and community knowledge.",

        region: "Central India",

        community: "Gond",

        heritage: "Living Tradition",

        image:
            "images/gond.png",

        secondaryImage:
            "images/tribaltextile.png",

        heading:
            "Stories expressed through culture",

        description:
            "The Gond community is known for a rich cultural heritage expressed through visual art, stories, traditions and knowledge passed between generations.",

        storyTitle:
            "Knowledge through generations",

        story:
            "Traditional knowledge becomes part of everyday life when stories, creative practices and community memories are shared with younger generations.",

        highlightTitle:
            "Art, memory and identity",

        highlightText:
            "The archive highlights the connection between creative expression, community memory and cultural identity."
    },


    dongria: {

        type: "COMMUNITY",

        title: "Dongria Kondh",

        subtitle:
            "Traditions shaped by community, landscape and generations of knowledge.",

        region: "Odisha",

        community: "Dongria Kondh",

        heritage: "Community Heritage",

        image:
            "images/dongria.png",

        secondaryImage:
            "images/theforestgivesuslife.png",

        heading:
            "Culture connected to landscape",

        description:
            "The Dongria Kondh community has a distinctive cultural heritage closely connected with its landscape, traditional knowledge and community life.",

        storyTitle:
            "A relationship with place",

        story:
            "The surrounding landscape can be part of memory, knowledge, work and cultural identity.",

        highlightTitle:
            "People and landscape",

        highlightText:
            "ROOTS documents the relationship between communities and the places where their traditions continue to live."
    },


    santhal: {

        type: "COMMUNITY",

        title: "Santhal Community",

        subtitle:
            "Stories, traditions and cultural practices carried across generations.",

        region: "Eastern India",

        community: "Santhal",

        heritage: "Living Tradition",

        image:
            "images/santhal.png",

        secondaryImage:
            "images/storiesfromhome.png",

        heading:
            "A heritage carried through generations",

        description:
            "The Santhal community has a rich cultural heritage expressed through language, traditions, stories, music, art and community life.",

        storyTitle:
            "Memory becomes heritage",

        story:
            "Community stories and traditions create a connection between generations.",

        highlightTitle:
            "Stories that stay alive",

        highlightText:
            "The ROOTS archive creates space for cultural stories, creative practices and memories to be explored respectfully."
    },


    konda: {

        type: "COMMUNITY",

        title: "Konda Reddi",

        subtitle:
            "Traditional knowledge and cultural practices connected with forest life.",

        region: "Andhra Pradesh",

        community: "Konda Reddi",

        heritage: "Community Heritage",

        image:
            "images/kondareddy.png",

        secondaryImage:
            "images/bamboocraft.jpg",

        heading:
            "Knowledge rooted in place",

        description:
            "The Konda Reddi community has a distinctive cultural heritage shaped by traditional knowledge, community practices and connections with the surrounding environment.",

        storyTitle:
            "Tradition in everyday life",

        story:
            "Traditional knowledge can be found in the materials people work with, objects they create, stories they share and practices they continue.",

        highlightTitle:
            "Hands, materials and memory",

        highlightText:
            "ROOTS connects community stories with the crafts and everyday practices through which heritage continues to be expressed."
    },


    /* ================= CRAFTS ================= */

    bamboo: {

        type: "CRAFT",

        title: "Bamboo Craft",

        subtitle:
            "Handwoven craft created through traditional knowledge and patient workmanship.",

        region: "Andhra Pradesh",

        community: "Konda Reddi",

        heritage: "Handwoven Craft",

        image:
            "images/bamboocraft.jpg",

        secondaryImage:
            "images/handsbehindcraft.png",

        heading:
            "Craft shaped by hand",

        description:
            "Bamboo craft transforms a natural material into useful and decorative objects through careful preparation, shaping and weaving.",

        storyTitle:
            "From material to object",

        story:
            "Traditional craft depends on knowledge of materials, tools, patterns and techniques learned through practice.",

        highlightTitle:
            "The hands behind the craft",

        highlightText:
            "Every woven object represents time, skill and attention."
    },


    weaving: {

        type: "CRAFT",

        title: "Handloom Weaving",

        subtitle:
            "Woven textiles carrying patterns, colours and knowledge from generation to generation.",

        region: "India",

        community: "Traditional Weavers",

        heritage: "Textile Craft",

        image:
            "images/handloomweaving.png",

        secondaryImage:
            "images/tribaltextile.png",

        heading:
            "Threads carrying stories",

        description:
            "Handloom weaving brings together yarn, colour, pattern and skilled movement to create textiles with distinctive visual character.",

        storyTitle:
            "A rhythm of hands and threads",

        story:
            "Weaving knowledge develops through practice and shared techniques.",

        highlightTitle:
            "Patterns that endure",

        highlightText:
            "Textiles can preserve visual traditions through colours, motifs and techniques."
    },


    metal: {

        type: "CRAFT",

        title: "Traditional Metal Craft",

        subtitle:
            "Skilled metalwork shaped by traditional techniques and artisan knowledge.",

        region: "India",

        community: "Metal Artisans",

        heritage: "Metal Craft",

        image:
            "images/metalart.png",

        secondaryImage:
            "images/handsbehindcraft.png",

        heading:
            "Shaped through skill",

        description:
            "Traditional metal craft combines material knowledge, tools and skilled workmanship.",

        storyTitle:
            "Skill passed through practice",

        story:
            "Craft techniques are often learned by observing, practicing and working alongside experienced artisans.",

        highlightTitle:
            "Material becomes heritage",

        highlightText:
            "The finished object represents both material process and artisan knowledge."
    },


    pottery: {

        type: "CRAFT",

        title: "Traditional Pottery",

        subtitle:
            "Hand-shaped vessels reflecting everyday life and artistic knowledge.",

        region: "India",

        community: "Traditional Artisans",

        heritage: "Pottery Craft",

        image:
            "images/tribalpottery.png",

        secondaryImage:
            "images/objecsweinherite.png",

        heading:
            "Earth shaped by hand",

        description:
            "Pottery transforms clay into useful and expressive objects through shaping, drying and finishing techniques.",

        storyTitle:
            "Objects made for everyday life",

        story:
            "Traditional pottery connects craft with everyday needs.",

        highlightTitle:
            "From earth to object",

        highlightText:
            "A simple vessel can preserve knowledge about materials and techniques."
    },


    textile: {

        type: "CRAFT",

        title: "Tribal Textile",

        subtitle:
            "Distinctive textiles carrying patterns, colours and traditional craft knowledge.",

        region: "India",

        community: "Traditional Weavers",

        heritage: "Textile Heritage",

        image:
            "images/tribaltextile.png",

        secondaryImage:
            "images/handloomweaving.png",

        heading:
            "Patterns with meaning",

        description:
            "Traditional textiles bring together colour, pattern, material and technique.",

        storyTitle:
            "Woven memory",

        story:
            "Textile traditions can preserve visual ideas and techniques across generations.",

        highlightTitle:
            "Colour, pattern and identity",

        highlightText:
            "Through textiles, craft knowledge can remain visible in everyday life."
    },


    hands: {

        type: "CRAFT",

        title: "The Hands Behind the Craft",

        subtitle:
            "A closer look at the people and patience behind traditional craftsmanship.",

        region: "India",

        community: "Artisan Communities",

        heritage: "Artisan Heritage",

        image:
            "images/handsbehindcraft.png",

        secondaryImage:
            "images/bamboocraft.jpg",

        heading:
            "The maker is part of the story",

        description:
            "Traditional craft is not only about the final object. It is also about the people, skills, time and knowledge behind it.",

        storyTitle:
            "Skill lives in practice",

        story:
            "Craft knowledge grows through repetition, observation and teaching.",

        highlightTitle:
            "Celebrating the maker",

        highlightText:
            "ROOTS places people and their skills at the centre of the heritage story."
    },


    /* ================= STORIES ================= */

    home: {

        type: "STORY",

        title: "Stories From Home",

        subtitle:
            "Memories and everyday stories connecting generations with cultural roots.",

        region: "Andhra Pradesh",

        community: "Konda Reddi",

        heritage: "Oral History",

        image:
            "images/storiesfromhome.png",

        secondaryImage:
            "images/kondareddy.png",

        heading:
            "Where memories become heritage",

        description:
            "Home can hold stories about family, traditions, objects, work and experiences.",

        storyTitle:
            "Stories carried through generations",

        story:
            "Oral histories help preserve memories and give communities a way to share experiences and knowledge.",

        highlightTitle:
            "Listen. Remember. Continue.",

        highlightText:
            "The ROOTS archive creates a digital space for stories that connect the past with generations of today."
    },


    forest: {

        type: "STORY",

        title: "The Forest Gives Us Life",

        subtitle:
            "A story about memory, traditional knowledge and the relationship between people and nature.",

        region: "Odisha",

        community: "Community Story",

        heritage: "Oral History",

        image:
            "images/theforestgivesuslife.png",

        secondaryImage:
            "images/dongria.png",

        heading:
            "A story rooted in nature",

        description:
            "Forests and natural surroundings can be important parts of everyday knowledge and cultural memory.",

        storyTitle:
            "Learning from the landscape",

        story:
            "Knowledge about surroundings, materials, seasons and everyday practices can be shared through stories and lived experience.",

        highlightTitle:
            "Nature and memory",

        highlightText:
            "The archive explores connections between people, place and heritage."
    },


    objects: {

        type: "STORY",

        title: "Objects We Inherit",

        subtitle:
            "Everyday objects can carry memories, identity and traditions across generations.",

        region: "India",

        community: "Heritage Communities",

        heritage: "Material Heritage",

        image:
            "images/objecsweinherite.png",

        secondaryImage:
            "images/tribalpottery.png",

        heading:
            "Objects carry stories",

        description:
            "A handmade object can hold memories of the person who created it, the family that used it and the tradition from which it came.",

        storyTitle:
            "More than an object",

        story:
            "Traditional objects can connect everyday life with cultural memory.",

        highlightTitle:
            "What we leave behind",

        highlightText:
            "Preserving objects also means preserving the stories, skills and memories connected to them."
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
