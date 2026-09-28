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
/* =========================================================
   ROOTS — DETAILS PAGE DATA
   ========================================================= */

const rootsDetails = {

    /* =========================
       COMMUNITIES
       ========================= */

    bodo: {
        type: "COMMUNITY",
        title: "Bodo Community",
        subtitle: "Living traditions, knowledge and heritage carried through generations.",
        region: "Assam",
        community: "Bodo",
        heritage: "Living Tradition",
        image: "images/bodo.png",
        secondaryImage: "images/storiesfromhome.png",
        heading: "A living heritage of Assam",
        description:
            "The Bodo community carries a rich cultural heritage expressed through traditions, everyday life, artistic practices and a strong connection with place.",
        storyTitle: "Traditions that continue forward",
        story:
            "Cultural knowledge is carried through families and communities through everyday practices, stories, celebrations and creative work.",
        highlightTitle: "Heritage carried by people",
        highlightText:
            "ROOTS brings together stories and visual records that help make living cultural traditions easier to explore and understand."
    },


    gond: {
        type: "COMMUNITY",
        title: "Gond Community",
        subtitle: "A cultural heritage shaped by stories, art and community knowledge.",
        region: "Central India",
        community: "Gond",
        heritage: "Living Tradition",
        image: "images/gond.png",
        secondaryImage: "images/tribaltextile.png",
        heading: "Stories expressed through culture",
        description:
            "The Gond community is known for a rich cultural heritage expressed through visual art, stories, traditions and knowledge passed between generations.",
        storyTitle: "Knowledge through generations",
        story:
            "Traditional knowledge becomes part of everyday life when stories, creative practices and community memories are shared with younger generations.",
        highlightTitle: "Art, memory and identity",
        highlightText:
            "The archive highlights the connection between creative expression, community memory and cultural identity."
    },


    dongria: {
        type: "COMMUNITY",
        title: "Dongria Kondh",
        subtitle: "Traditions shaped by community, landscape and generations of knowledge.",
        region: "Odisha",
        community: "Dongria Kondh",
        heritage: "Community Heritage",
        image: "images/dongria.png",
        secondaryImage: "images/theforestgivesulife.png",
        heading: "Culture connected to landscape",
        description:
            "The Dongria Kondh community has a distinctive cultural heritage closely connected with its landscape, traditional knowledge and community life.",
        storyTitle: "A relationship with place",
        story:
            "For many communities, the surrounding landscape is more than a location. It can be part of memory, knowledge, work and cultural identity.",
        highlightTitle: "People and landscape",
        highlightText:
            "ROOTS documents the relationship between communities and the places where their traditions continue to live."
    },


    santhal: {
        type: "COMMUNITY",
        title: "Santhal Community",
        subtitle: "Stories, traditions and cultural practices carried across generations.",
        region: "Eastern India",
        community: "Santhal",
        heritage: "Living Tradition",
        image: "images/santhal.png",
        secondaryImage: "images/storiesfromhome.png",
        heading: "A heritage carried through generations",
        description:
            "The Santhal community has a rich cultural heritage expressed through language, traditions, stories, music, art and community life.",
        storyTitle: "Memory becomes heritage",
        story:
            "Community stories and traditions create a connection between generations, allowing cultural knowledge to continue while the world around it changes.",
        highlightTitle: "Stories that stay alive",
        highlightText:
            "The ROOTS archive creates space for cultural stories, creative practices and memories to be explored respectfully."
    },


    konda: {
        type: "COMMUNITY",
        title: "Konda Reddi",
        subtitle: "Traditional knowledge and cultural practices connected with forest life.",
        region: "Andhra Pradesh",
        community: "Konda Reddi",
        heritage: "Community Heritage",
        image: "images/kondareddy.png",
        secondaryImage: "images/bamboocraft.jpg",
        heading: "Knowledge rooted in place",
        description:
            "The Konda Reddi community has a distinctive cultural heritage shaped by traditional knowledge, community practices and connections with the surrounding environment.",
        storyTitle: "Tradition in everyday life",
        story:
            "Traditional knowledge can be found in the materials people work with, the objects they create, the stories they share and the practices they continue.",
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
        subtitle: "Handwoven craft created through traditional knowledge and patient workmanship.",
        region: "Andhra Pradesh",
        community: "Konda Reddi",
        heritage: "Handwoven Craft",
        image: "images/bamboocraft.jpg",
        secondaryImage: "images/handsbehindcraft.png",
        heading: "Craft shaped by hand",
        description:
            "Bamboo craft transforms a natural material into useful and decorative objects through careful preparation, shaping and weaving.",
        storyTitle: "From material to object",
        story:
            "Traditional craft depends on knowledge of materials, tools, patterns and techniques that are learned through practice and shared across generations.",
        highlightTitle: "The hands behind the craft",
        highlightText:
            "Every woven object represents time, skill and attention — connecting the finished piece with the person who made it."
    },


    weaving: {
        type: "CRAFT",
        title: "Handloom Weaving",
        subtitle: "Woven textiles carrying patterns, colours and knowledge from generation to generation.",
        region: "India",
        community: "Traditional Weavers",
        heritage: "Textile Craft",
        image: "images/handloomweaving.png",
        secondaryImage: "images/tribaltextile.png",
        heading: "Threads carrying stories",
        description:
            "Handloom weaving brings together yarn, colour, pattern and skilled movement to create textiles with distinctive visual character.",
        storyTitle: "A rhythm of hands and threads",
        story:
            "Weaving knowledge develops through practice. Patterns and techniques can become part of a community's visual language and craft identity.",
        highlightTitle: "Patterns that endure",
        highlightText:
            "Textiles can preserve visual traditions through colours, motifs and techniques that continue to be practiced."
    },


    metal: {
        type: "CRAFT",
        title: "Traditional Metal Craft",
        subtitle: "Skilled metalwork shaped by traditional techniques and artisan knowledge.",
        region: "India",
        community: "Metal Artisans",
        heritage: "Metal Craft",
        image: "images/metalart.png",
        secondaryImage: "images/handsbehindcraft.png",
        heading: "Shaped through skill",
        description:
            "Traditional metal craft combines material knowledge, tools and skilled workmanship to create objects with functional and cultural value.",
        storyTitle: "Skill passed through practice",
        story:
            "Craft techniques are often learned by observing, practicing and working alongside experienced artisans.",
        highlightTitle: "Material becomes heritage",
        highlightText:
            "The finished object represents not only a material process but also the knowledge and skill behind its creation."
    },


    pottery: {
        type: "CRAFT",
        title: "Traditional Pottery",
        subtitle: "Hand-shaped vessels reflecting everyday life and artistic knowledge.",
        region: "India",
        community: "Traditional Artisans",
        heritage: "Pottery Craft",
        image: "images/tribalpottery.png",
        secondaryImage: "images/objectsweinherite.png",
        heading: "Earth shaped by hand",
        description:
            "Pottery transforms clay into useful and expressive objects through shaping, drying and finishing techniques.",
        storyTitle: "Objects made for everyday life",
        story:
            "Traditional pottery often connects craft with everyday needs, creating objects that carry both practical and cultural meaning.",
        highlightTitle: "From earth to object",
        highlightText:
            "A simple vessel can preserve knowledge about materials, techniques and the hands that shaped it."
    },


    textile: {
        type: "CRAFT",
        title: "Tribal Textile",
        subtitle: "Distinctive textiles carrying patterns, colours and traditional craft knowledge.",
        region: "India",
        community: "Traditional Weavers",
        heritage: "Textile Heritage",
        image: "images/tribaltextile.png",
        secondaryImage: "images/handloomweaving.png",
        heading: "Patterns with meaning",
        description:
            "Traditional textiles bring together colour, pattern, material and technique to create distinctive forms of cultural expression.",
        storyTitle: "Woven memory",
        story:
            "Textile traditions can preserve visual ideas and techniques by passing them from one generation of makers to the next.",
        highlightTitle: "Colour, pattern and identity",
        highlightText:
            "Through textiles, craft knowledge can remain visible in everyday life and continue to evolve."
    },


    hands: {
        type: "CRAFT",
        title: "The Hands Behind the Craft",
        subtitle: "A closer look at the people and patience behind traditional craftsmanship.",
        region: "India",
        community: "Artisan Communities",
        heritage: "Artisan Heritage",
        image: "images/handsbehindcraft.png",
        secondaryImage: "images/bamboocraft.jpg",
        heading: "The maker is part of the story",
        description:
            "Traditional craft is not only about the final object. It is also about the people, skills, time and knowledge behind it.",
        storyTitle: "Skill lives in practice",
        story:
            "Craft knowledge grows through repetition, observation and teaching. Each maker contributes to the continuation of that knowledge.",
        highlightTitle: "Celebrating the maker",
        highlightText:
            "ROOTS places people and their skills at the centre of the heritage story."
    },


    /* =========================
       STORIES
       ========================= */

    home: {
        type: "STORY",
        title: "Stories From Home",
        subtitle: "Memories and everyday stories connecting generations with cultural roots.",
        region: "Andhra Pradesh",
        community: "Konda Reddi",
        heritage: "Oral History",
        image: "images/storiesfromhome.png",
        secondaryImage: "images/kondareddy.png",
        heading: "Where memories become heritage",
        description:
            "Home can hold stories about family, traditions, objects, work and the experiences that shape cultural identity.",
        storyTitle: "Stories carried through generations",
        story:
            "Oral histories help preserve memories that may not appear in written records. They give communities a way to share experiences and knowledge.",
        highlightTitle: "Listen. Remember. Continue.",
        highlightText:
            "The ROOTS archive creates a digital space for stories that connect the past with the generations of today."
    },


    forest: {
        type: "STORY",
        title: "The Forest Gives Us Life",
        subtitle: "A story about memory, traditional knowledge and the relationship between people and nature.",
        region: "Odisha",
        community: "Gadaba",
        heritage: "Oral History",
        image: "images/theforestgivesulife.png",
        secondaryImage: "images/dongria.png",
        heading: "A story rooted in nature",
        description:
            "For communities connected closely with their landscapes, forests and natural surroundings can be important parts of everyday knowledge and cultural memory.",
        storyTitle: "Learning from the landscape",
        story:
            "Knowledge about surroundings, materials, seasons and everyday practices can be shared through stories and lived experience.",
        highlightTitle: "Nature and memory",
        highlightText:
            "The archive explores how stories can help us understand the connections between people, place and heritage."
    },


    objects: {
        type: "STORY",
        title: "Objects We Inherit",
        subtitle: "Everyday objects can carry memories, identity and traditions across generations.",
        region: "India",
        community: "Heritage Communities",
        heritage: "Material Heritage",
        image: "images/objectsweinherite.png",
        secondaryImage: "images/tribalpottery.png",
        heading: "Objects carry stories",
        description:
            "A handmade object can hold memories of the person who created it, the family that used it and the tradition from which it came.",
        storyTitle: "More than an object",
        story:
            "Traditional objects can connect everyday life with cultural memory. Their materials, forms and uses can reveal stories about the people who made and used them.",
        highlightTitle: "What we leave behind",
        highlightText:
            "Preserving objects also means preserving the stories, skills and memories connected to them."
    }

};



/* =========================================================
   LOAD DETAILS PAGE
   ========================================================= */

function loadRootsDetails() {

    const detailImage =
        document.getElementById("detailImage");

    /*
       If this is not details.html,
       stop here so the main website JS
       continues normally.
    */

    if (!detailImage) {
        return;
    }


    const params =
        new URLSearchParams(window.location.search);


    const id =
        params.get("id");


    const data =
        rootsDetails[id];


    /*
       If ID is invalid
    */

    if (!data) {

        document.getElementById("detailCategory").textContent =
            "ROOTS / ARCHIVE";

        document.getElementById("detailTitle").textContent =
            "Story not found";

        document.getElementById("detailSubtitle").textContent =
            "The requested archive entry could not be found.";

        return;
    }



    /* =========================
       HERO
       ========================= */

    document.getElementById("detailCategory").textContent =
        data.type;


    document.getElementById("detailTitle").textContent =
        data.title;


    document.getElementById("detailSubtitle").textContent =
        data.subtitle;


    document.getElementById("detailRegion").textContent =
        data.region;


    document.getElementById("detailCommunity").textContent =
        data.community;


    detailImage.src =
        data.image;


    detailImage.alt =
        data.title;



    /* =========================
       STORY CONTENT
       ========================= */

    document.getElementById("detailHeading").textContent =
        data.heading;


    document.getElementById("detailDescription").textContent =
        data.description;


    document.getElementById("infoRegion").textContent =
        data.region;


    document.getElementById("infoCommunity").textContent =
        data.community;


    document.getElementById("infoHeritage").textContent =
        data.heritage;


    document.getElementById("detailStoryTitle").textContent =
        data.storyTitle;


    document.getElementById("detailStory").textContent =
        data.story;



    /* =========================
       SECONDARY SECTION
       ========================= */

    const secondaryImage =
        document.getElementById("detailSecondaryImage");


    if (secondaryImage) {

        secondaryImage.src =
            data.secondaryImage;

        secondaryImage.alt =
            data.title;

    }


    document.getElementById("detailHighlightTitle").textContent =
        data.highlightTitle;


    document.getElementById("detailHighlightText").textContent =
        data.highlightText;



    /* =========================
       PAGE TITLE
       ========================= */

    document.title =
        data.title + " | ROOTS";

}



/* =========================================================
   RUN DETAILS PAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    loadRootsDetails
);
