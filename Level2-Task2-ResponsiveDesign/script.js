/* =========================================================
   ROOTS — Heritage & Artisan Archive
   COMPLETE JAVASCRIPT
   PART 1 / 2
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

    /* Close mobile menu when a link is clicked */

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu?.classList.remove("active");
            document.body.style.overflow = "";
        });
    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            const navbar = document.querySelector(".navbar");
            const navbarHeight = navbar
                ? navbar.offsetHeight + 20
                : 20;

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

            navbar.style.background =
                "rgba(250,247,240,0.96)";

            navbar.style.boxShadow =
                "0 12px 35px rgba(0,0,0,0.12)";

        } else {

            navbar.classList.remove("scrolled");

            navbar.style.background =
                "rgba(250,247,240,0.82)";

            navbar.style.boxShadow =
                "0 10px 35px rgba(0,0,0,0.08)";
        }

    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    /* =====================================================
       HERO BUTTONS
       ===================================================== */

    document.querySelectorAll(".hero .btn").forEach(button => {

        button.addEventListener("click", () => {

            const text =
                button.textContent.toLowerCase();

            if (text.includes("community")) {

                const section =
                    document.querySelector("#communities");

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }

            }

            else if (text.includes("craft")) {

                const section =
                    document.querySelector("#crafts") ||
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

    document.querySelectorAll(".community-card").forEach(card => {

        const button = card.querySelector("button");

        if (!button) return;

        button.addEventListener("click", () => {

            const title =
                card.querySelector("h3");

            const name =
                title
                    ? title.textContent.trim()
                    : "this community";

            showToast(
                `Exploring ${name} heritage`
            );

        });

    });


    /* =====================================================
       CRAFT STORY
       ===================================================== */

    const craftButton =
        document.querySelector(".craft-content .btn");

    if (craftButton) {

        craftButton.addEventListener("click", () => {

            showToast(
                "Opening Bamboo Craft story..."
            );

        });

    }


    /* =====================================================
       ARTISAN PROFILE
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
       VOICE PLAYER
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
       MAP / REGION BUTTONS
       ===================================================== */

    document.querySelectorAll(".region-list button")
        .forEach(button => {

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

    document.querySelectorAll(".journal-card")
        .forEach(card => {

            const link = card.querySelector("a");

            if (!link) return;

            link.addEventListener("click", e => {

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
       NEWSLETTER
       ===================================================== */

    const newsletterForm =
        document.querySelector(".footer-newsletter form");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", e => {

            e.preventDefault();

            const input =
                newsletterForm.querySelector("input");

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
       SEARCH
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

            const items = document.querySelectorAll(
                ".community-card, .journal-card, .artisan-profile, .archive-item"
            );

            items.forEach(item => {

                const content =
                    item.textContent.toLowerCase();

                if (
                    !found &&
                    content.includes(term)
                ) {

                    found = true;

                    item.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    item.style.outline =
                        "2px solid #b08a52";

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
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".community-card, .craft-story, .artisans, .voices, .living-map, .timeline-item, .journal-card, .about, .archive-item"
        );

    if ("IntersectionObserver" in window) {

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

            element.classList.add(
                "reveal-hidden"
            );

            revealObserver.observe(element);

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const desktopLinks =
        document.querySelectorAll(".desktop-nav a");

    function updateActiveNav() {

        if (!sections.length) return;

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

    updateActiveNav();


    /* =====================================================
       HERO SCROLL INDICATOR
       ===================================================== */

    const heroScroll =
        document.querySelector(".hero-scroll");

    if (heroScroll) {

        heroScroll.style.cursor = "pointer";

        heroScroll.addEventListener("click", () => {

            const target =
                document.querySelector("#archive") ||
                document.querySelector("#communities");

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================================
       ARCHIVE FILTER
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const archiveItems =
        document.querySelectorAll(".archive-item");

    if (filterButtons.length && archiveItems.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const category =
                    button.dataset.category;

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                archiveItems.forEach(item => {

                    const itemCategory =
                        item.dataset.category;

                    if (
                        category === "all" ||
                        itemCategory === category
                    ) {

                        item.style.display = "";

                        requestAnimationFrame(() => {
                            item.classList.remove("archive-hidden");
                        });

                    } else {

                        item.classList.add(
                            "archive-hidden"
                        );

                        setTimeout(() => {

                            if (
                                item.classList.contains(
                                    "archive-hidden"
                                )
                            ) {
                                item.style.display = "none";
                            }

                        }, 250);

                    }

                });

            });

        });

    }


    /* =====================================================
       TOAST
       ===================================================== */

    window.showToast = showToast;

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
   ROOTS — ARCHIVE DETAILS DATA
   PART 2 / 2
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
        description: "The Bodo community carries a rich cultural heritage expressed through traditions, everyday life, artistic practices and a strong connection with place.",
        storyTitle: "Traditions that continue forward",
        story: "Cultural knowledge is carried through families and communities through everyday practices, stories, celebrations and creative work.",
        highlightTitle: "Heritage carried by people",
        highlightText: "ROOTS brings together stories and visual records that help make living cultural traditions easier to explore and understand."
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
        description: "The Gond community is known for a rich cultural heritage expressed through visual art, stories, traditions and knowledge passed between generations.",
        storyTitle: "Knowledge through generations",
        story: "Traditional knowledge becomes part of everyday life when stories, creative practices and community memories are shared with younger generations.",
        highlightTitle: "Art, memory and identity",
        highlightText: "The archive highlights the connection between creative expression, community memory and cultural identity."
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
        description: "The Dongria Kondh community has a distinctive cultural heritage closely connected with its landscape, traditional knowledge and community life.",
        storyTitle: "A relationship with place",
        story: "For many communities, the surrounding landscape is more than a location. It can be part of memory, knowledge, work and cultural identity.",
        highlightTitle: "People and landscape",
        highlightText: "ROOTS documents the relationship between communities and the places where their traditions continue to live."
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
        description: "The Santhal community has a rich cultural heritage expressed through language, traditions, stories, music, art and community life.",
        storyTitle: "Memory becomes heritage",
        story: "Community stories and traditions create a connection between generations, allowing cultural knowledge to continue while the world around it changes.",
        highlightTitle: "Stories that stay alive",
        highlightText: "The ROOTS archive creates space for cultural stories, creative practices and memories to be explored respectfully."
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
        description: "The Konda Reddi community has a distinctive cultural heritage shaped by traditional knowledge, community practices and connections with the surrounding environment.",
        storyTitle: "Tradition in everyday life",
        story: "Traditional knowledge can be found in the materials people work with, the objects they create, the stories they share and the practices they continue.",
        highlightTitle: "Hands, materials and memory",
        highlightText: "ROOTS connects community stories with the crafts and everyday practices through which heritage continues to be expressed."
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
        description: "Bamboo craft transforms a natural material into useful and decorative objects through careful preparation, shaping and weaving.",
        storyTitle: "From material to object",
        story: "Traditional craft depends on knowledge of materials, tools, patterns and techniques that are learned through practice and shared across generations.",
        highlightTitle: "The hands behind the craft",
        highlightText: "Every woven object represents time, skill and attention — connecting the finished piece with the person who made it."
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
        description: "Handloom weaving brings together yarn, colour, pattern and skilled movement to create textiles with distinctive visual character.",
        storyTitle: "A rhythm of hands and threads",
        story: "Weaving knowledge develops through practice. Patterns and techniques can become part of a community's visual language and craft identity.",
        highlightTitle: "Patterns that endure",
        highlightText: "Textiles can preserve visual traditions through colours, motifs and techniques that continue to be practiced."
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
        description: "Traditional metal craft combines material knowledge, tools and skilled workmanship to create objects with functional and cultural value.",
        storyTitle: "Skill passed through practice",
        story: "Craft techniques are often learned by observing, practicing and working alongside experienced artisans.",
        highlightTitle: "Material becomes heritage",
        highlightText: "The finished object represents not only a material process but also the knowledge and skill behind its creation."
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
        description: "Pottery transforms clay into useful and expressive objects through shaping, drying and finishing techniques.",
        storyTitle: "Objects made for everyday life",
        story: "Traditional pottery often connects craft with everyday needs, creating objects that carry both practical and cultural meaning.",
        highlightTitle: "From earth to object",
        highlightText: "A simple vessel can preserve knowledge about materials, techniques and the hands that shaped it."
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
        description: "Traditional textiles bring together colour, pattern, material and technique to create distinctive forms of cultural expression.",
        storyTitle: "Woven memory",
        story: "Textile traditions can preserve visual ideas and techniques by passing them from one generation of makers to the next.",
        highlightTitle: "Colour, pattern and identity",
        highlightText: "Through textiles, craft knowledge can remain visible in everyday life and continue to evolve."
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
        description: "Traditional craft is not only about the final object. It is also about the people, skills, time and knowledge behind it.",
        storyTitle: "Skill lives in practice",
        story: "Craft knowledge grows through repetition, observation and teaching. Each maker contributes to the continuation of that knowledge.",
        highlightTitle: "Celebrating the maker",
        highlightText: "ROOTS places people and their skills at the centre of the heritage story."
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
        description: "Home can hold stories about family, traditions, objects, work and the experiences that shape cultural identity.",
        storyTitle: "Stories carried through generations",
        story: "Oral histories help preserve memories that may not appear in written records. They give communities a way to share experiences and knowledge.",
        highlightTitle: "Listen. Remember. Continue.",
        highlightText: "The ROOTS archive creates a digital space for stories that connect the past with the generations of today."
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
        description: "For communities connected closely with their landscapes, forests and natural surroundings can be important parts of everyday knowledge and cultural memory.",
        storyTitle: "Learning from the landscape",
        story: "Knowledge about surroundings, materials, seasons and everyday practices can be shared through stories and lived experience.",
        highlightTitle: "Nature and memory",
        highlightText: "The archive explores how stories can help us understand the connections between people, place and heritage."
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
        description: "A handmade object can hold memories of the person who created it, the family that used it and the tradition from which it came.",
        storyTitle: "More than an object",
        story: "Traditional objects can connect everyday life with cultural memory. Their materials, forms and uses can reveal stories about the people who made and used them.",
        highlightTitle: "What we leave behind",
        highlightText: "Preserving objects also means preserving the stories, skills and memories connected to them."
    }

};


/* =========================================================
   DETAILS PAGE LOADER
   ========================================================= */

function loadRootsDetails() {

    const detailImage =
        document.getElementById("detailImage");

    /*
       If detailImage does not exist,
       this is not details.html.
    */

    if (!detailImage) return;


    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id");

    console.log(
        "ROOTS DETAILS:",
        id
    );


    const data =
        rootsDetails[id];


    /* =========================
       INVALID ID
       ========================= */

    if (!data) {

        const category =
            document.getElementById(
                "detailCategory"
            );

        const title =
            document.getElementById(
                "detailTitle"
            );

        const subtitle =
            document.getElementById(
                "detailSubtitle"
            );

        if (category) {
            category.textContent =
                "ROOTS / ARCHIVE";
        }

        if (title) {
            title.textContent =
                "Story not found";
        }

        if (subtitle) {
            subtitle.textContent =
                "The requested archive entry could not be found.";
        }

        return;
    }


    /* =========================
       TEXT CONTENT
       ========================= */

    const elements = {

        category:
            document.getElementById(
                "detailCategory"
            ),

        title:
            document.getElementById(
                "detailTitle"
            ),

        subtitle:
            document.getElementById(
                "detailSubtitle"
            ),

        region:
            document.getElementById(
                "detailRegion"
            ),

        community:
            document.getElementById(
                "detailCommunity"
            ),

        heading:
            document.getElementById(
                "detailHeading"
            ),

        description:
            document.getElementById(
                "detailDescription"
            ),

        infoRegion:
            document.getElementById(
                "infoRegion"
            ),

        infoCommunity:
            document.getElementById(
                "infoCommunity"
            ),

        infoHeritage:
            document.getElementById(
                "infoHeritage"
            ),

        storyTitle:
            document.getElementById(
                "detailStoryTitle"
            ),

        story:
            document.getElementById(
                "detailStory"
            ),

        highlightTitle:
            document.getElementById(
                "detailHighlightTitle"
            ),

        highlightText:
            document.getElementById(
                "detailHighlightText"
            )

    };


    if (elements.category)
        elements.category.textContent =
            data.type;

    if (elements.title)
        elements.title.textContent =
            data.title;

    if (elements.subtitle)
        elements.subtitle.textContent =
            data.subtitle;

    if (elements.region)
        elements.region.textContent =
            data.region;

    if (elements.community)
        elements.community.textContent =
            data.community;

    if (elements.heading)
        elements.heading.textContent =
            data.heading;

    if (elements.description)
        elements.description.textContent =
            data.description;

    if (elements.infoRegion)
        elements.infoRegion.textContent =
            data.region;

    if (elements.infoCommunity)
        elements.infoCommunity.textContent =
            data.community;

    if (elements.infoHeritage)
        elements.infoHeritage.textContent =
            data.heritage;

    if (elements.storyTitle)
        elements.storyTitle.textContent =
            data.storyTitle;

    if (elements.story)
        elements.story.textContent =
            data.story;

    if (elements.highlightTitle)
        elements.highlightTitle.textContent =
            data.highlightTitle;

    if (elements.highlightText)
        elements.highlightText.textContent =
            data.highlightText;


    /* =========================
       MAIN IMAGE
       ========================= */

    detailImage.src =
        data.image;

    detailImage.alt =
        data.title;


    detailImage.onerror = () => {

        console.error(
            "Main image not found:",
            data.image
        );

        detailImage.src =
            "images/hero.jpg";

    };


    /* =========================
       SECONDARY IMAGE
       ========================= */

    const secondaryImage =
        document.getElementById(
            "detailSecondaryImage"
        );

    if (secondaryImage) {

        secondaryImage.src =
            data.secondaryImage;

        secondaryImage.alt =
            data.title;

        secondaryImage.onerror = () => {

            console.error(
                "Secondary image not found:",
                data.secondaryImage
            );

        };

    }


    /* =========================
       PAGE TITLE
       ========================= */

    document.title =
        `${data.title} | ROOTS`;

}


/* =========================================================
   START DETAILS PAGE
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        loadRootsDetails
    );

} else {

    loadRootsDetails();

       }
/* =========================================================
   ROOTS — DETAILS IMAGE SAFETY + ARCHIVE CARD LINKS
   PART 3 / 3
   ========================================================= */


/* =========================================================
   ARCHIVE VIEW DETAILS BUTTONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const detailButtons =
        document.querySelectorAll(
            ".archive-item a, .archive-card a"
        );

    detailButtons.forEach(button => {

        const href =
            button.getAttribute("href");

        if (!href) return;

        /*
           Only handle buttons that already
           point to details.html
        */

        if (
            href.includes("details.html") &&
            href.includes("id=")
        ) {

            button.addEventListener("click", () => {

                console.log(
                    "Opening ROOTS detail:",
                    href
                );

            });

        }

    });


    /* =====================================================
       DETAILS PAGE IMAGE CHECK
       ===================================================== */

    const mainDetailImage =
        document.getElementById("detailImage");

    if (mainDetailImage) {

        mainDetailImage.style.opacity = "0";

        mainDetailImage.style.transition =
            "opacity 0.45s ease";

        mainDetailImage.addEventListener(
            "load",
            () => {

                mainDetailImage.style.opacity = "1";

            }
        );

    }


    /* =====================================================
       DETAILS PAGE BACK BUTTON
       ===================================================== */

    const backButtons =
        document.querySelectorAll(
            ".details-back, .archive-back, .details-main-btn"
        );

    backButtons.forEach(button => {

        const href =
            button.getAttribute("href");

        if (
            href &&
            (
                href === "archive.html" ||
                href === "index.html"
            )
        ) {

            button.addEventListener(
                "click",
                () => {

                    console.log(
                        "Returning to ROOTS archive"
                    );

                }
            );

        }

    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(img => {

            img.addEventListener(
                "error",
                function () {

                    console.warn(
                        "ROOTS image could not load:",
                        this.getAttribute("src")
                    );

                }
            );

        });

});


/* =========================================================
   URL DEBUG HELPER
   ========================================================= */

function rootsCheckDetailURL() {

    if (
        !window.location.pathname.includes(
            "details.html"
        )
    ) {
        return;
    }

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        params.get("id");

    console.log(
        "================================="
    );

    console.log(
        "ROOTS DETAIL PAGE"
    );

    console.log(
        "Detail ID:",
        id
    );

    console.log(
        "Detail URL:",
        window.location.href
    );

    console.log(
        "================================="
    );

}

rootsCheckDetailURL();
