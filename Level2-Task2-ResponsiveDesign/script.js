/* =========================================================
   ROOTS — Heritage & Artisan Archive
   COMPLETE FINAL SCRIPT
   ========================================================= */

(function () {
    "use strict";

    /* =========================================================
       ROOTS ARCHIVE DATA
       ========================================================= */

    const rootsDetails = {

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
            secondaryImage: "images/objecsweinherit.png",
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
            image: "images/bodo.jpg",
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
            secondaryImage: "images/theforestgiveuslife.png",
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
            image: "images/theforestgiveuslife.png",
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
            image: "images/objecsweinherit.png",
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
       SHORT SELECTORS
       ========================================================= */

    function $(selector, parent) {
        return (parent || document).querySelector(selector);
    }

    function $$(selector, parent) {
        return Array.from(
            (parent || document).querySelectorAll(selector)
        );
    }


    /* =========================================================
       TOAST
       ========================================================= */

    function showRootsToast(message) {

        let toast = $("#rootsToast");

        if (!toast) {
            toast = $(".toast");
        }

        if (!toast) {
            toast = document.createElement("div");
            toast.className = "toast";
            document.body.appendChild(toast);
        }

        const toastMessage = $("#toastMessage", toast);

        if (toastMessage) {
            toastMessage.textContent = message;
        } else {
            toast.textContent = message;
        }

        toast.classList.add("show");
        toast.classList.add("active");

        clearTimeout(window.rootsToastTimer);

        window.rootsToastTimer = setTimeout(function () {

            toast.classList.remove("show");
            toast.classList.remove("active");

        }, 2600);
    }

    window.showRootsToast = showRootsToast;
    window.showToast = showRootsToast;


    /* =========================================================
       MOBILE MENU
       ========================================================= */
function initMobileMenu() {

    const menuButton =
        document.querySelector("#menuToggle") ||
        document.querySelector(".menu-toggle") ||
        document.querySelector(".menuToggle");

    const mobileMenu =
        document.querySelector("#mobileNav") ||
        document.querySelector(".mobile-nav") ||
        document.querySelector(".mobileNav") ||
        document.querySelector(".mobile-menu");

    if (!menuButton || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.add("active");
        mobileMenu.classList.add("open");

        menuButton.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");

        document.body.classList.add("menu-open");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        mobileMenu.classList.remove("active");
        mobileMenu.classList.remove("open");

        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");

        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";
    }

    menuButton.addEventListener("click", function () {

        if (
            mobileMenu.classList.contains("active") ||
            mobileMenu.classList.contains("open")
        ) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
   

    /* =========================================================
       SEARCH
       ========================================================= */

    function initSearch() {

        const searchButton =
            $("#searchTrigger") ||
            $(".search-btn");

        const overlay =
            $("#searchOverlay");

        const closeButton =
            $("#searchClose");

        const input =
            $("#globalSearch");


        if (searchButton && overlay) {

            searchButton.addEventListener(
                "click",
                function () {

                    overlay.classList.add("active");
                    overlay.classList.add("open");

                    document.body.classList.add(
                        "search-open"
                    );

                    if (input) {

                        setTimeout(
                            function () {
                                input.focus();
                            },
                            100
                        );

                    }

                }
            );

        }


        function closeSearch() {

            if (!overlay) return;

            overlay.classList.remove("active");
            overlay.classList.remove("open");

            document.body.classList.remove(
                "search-open"
            );
        }


        if (closeButton) {

            closeButton.addEventListener(
     "click",
                closeSearch
            );

        }


        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Escape") {

                        closeSearch();
                        return;

                    }


                    if (event.key !== "Enter") {
                        return;
                    }


                    const term =
                        input.value
                            .trim()
                            .toLowerCase();


                    if (!term) return;


                    const cards =
                        $$(".archive-item, .archive-card, .journal-card, .community-card");


                    let found = null;


                    cards.some(function (card) {

                        if (
                            card.textContent
                                .toLowerCase()
                                .includes(term)
                        ) {

                            found = card;

                            return true;

                        }

                        return false;

                    });


                    if (found) {

                        closeSearch();

                        found.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        found.classList.add(
                            "search-highlight"
                        );


                        setTimeout(
                            function () {

                                found.classList.remove(
                                    "search-highlight"
                                );

                            },
                            2200
                        );

                    } else {

                        showRootsToast(
                            "No archive result found."
                        );

                    }

                }
            );

        }
    }
/* =========================================================
       SMOOTH SCROLL
       ========================================================= */

    function initSmoothLinks() {

        $$('a[href^="#"]')
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const href =
                            link.getAttribute("href");


                        if (
                            !href ||
                            href === "#"
                        ) {
                            return;
                        }


                        const target =
                            $(href);


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        const header =
                            $(".navbar") ||
                            $(".site-header") ||
                            $("header");


                        const offset =
                            header
                                ? header.offsetHeight + 12
                                : 20;


                        window.scrollTo({

                            top:
                                target.getBoundingClientRect()
                                    .top +
                                window.scrollY -
                                offset,

                            behavior: "smooth"

                        });

                    }
                );

            });
    }


    /* =========================================================
       NAVBAR
       ========================================================= */

    function initNavbar() {

        const navbar =
            $(".navbar") ||
            $(".site-header") ||
            $("header");


        if (!navbar) return;


        function updateNavbar() {

            if (
                window.scrollY > 40
            ) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }


        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );


        updateNavbar();
    }
   
    /* =========================================================
       ARCHIVE FILTER
       ========================================================= */

    function initArchive() {

        const filterButtons =
            $$(".archive-filter");

        const items =
            $$(".archive-item");

        const searchInput =
            $("#archiveSearch");

        const count =
            $("#archiveResultCount");

        const noResults =
            $("#archiveNoResults");


        if (!items.length) {
            return;
        }


        let activeFilter = "all";


        function matchesCategory(
            item,
            filter
        ) {

            if (
                filter === "all"
            ) {
                return true;
            }


            const category =
                (
                    item.dataset.category ||
                    ""
                ).toLowerCase();


            if (
                filter === "community" ||
                filter === "communities"
            ) {

                return (
                    category === "community" ||
                    category === "communities"
                );

            }


            if (
                filter === "craft" ||
                filter === "crafts"
            ) {

                return (
                    category === "craft" ||
                    category === "crafts"
                );

            }


            if (
                filter === "story" ||
                filter === "stories"
            ) {

                return (
                    category === "story" ||
                    category === "stories"
                );

            }


            return true;
        }


        function filterItems() {

            const term =
                searchInput
                    ? searchInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            let visible = 0;


            items.forEach(
                function (item) {

                    const matches =
                        matchesCategory(
                            item,
                            activeFilter
                        ) &&
                        (
                            !term ||
                            item.textContent
                                .toLowerCase()
                                .includes(term)
                        );


                    item.style.display =
                        matches
                            ? ""
                            : "none";


                    if (matches) {
                        visible++;
                    }

                }
            );


            if (count) {

                count.textContent =
                    visible +
                    (
                        visible === 1
                            ? " entry"
                            : " entries"
                    );

            }


            if (noResults) {

                noResults.style.display =
                    visible === 0
                        ? ""
                        : "none";

            }
        }


        filterButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        activeFilter =
                            (
                                button.dataset.filter ||
                                "all"
                            ).toLowerCase();


                        filterButtons.forEach(
                            function (btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        filterItems();

                    }
                );

            }
        );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                filterItems
            );

        }


        filterItems();
        }
   
    /* =========================================================
       DETAILS PAGE
       ========================================================= */

    function initDetailsPage() {

        const detailImage =
            $("#detailImage");


        if (!detailImage) {
            return;
        }


        const params =
            new URLSearchParams(
                window.location.search
            );


        const id =
            params.get("id");


        const data =
            rootsDetails[id];


        if (!data) {

            setText(
                "#detailCategory",
                "ROOTS / ARCHIVE"
            );


            setText(
                "#detailTitle",
                "Story not found"
            );


            setText(
                "#detailSubtitle",
                "The requested archive entry could not be found."
            );


            return;
        }


        setText(
            "#detailCategory",
            data.type
        );


        setText(
            "#detailTitle",
            data.title
        );


        setText(
            "#detailSubtitle",
            data.subtitle
        );


        setText(
            "#detailRegion",
            data.region
        );


        setText(
            "#detailCommunity",
            data.community
        );


        setText(
            "#detailHeading",
            data.heading
        );


        setText(
            "#detailDescription",
            data.description
        );


        setText(
            "#infoRegion",
            data.region
        );


        setText(
            "#infoCommunity",
            data.community
        );


        setText(
            "#infoHeritage",
            data.heritage
        );


        setText(
            "#detailStoryTitle",
            data.storyTitle
        );


        setText(
            "#detailStory",
            data.story
        );


        setText(
            "#detailHighlightTitle",
            data.highlightTitle
        );


        setText(
            "#detailHighlightText",
            data.highlightText
        );


        detailImage.src =
            data.image;


        detailImage.alt =
            data.title;


        const secondaryImage =
            $("#detailSecondaryImage");


        if (secondaryImage) {

            secondaryImage.src =
                data.secondaryImage;

            secondaryImage.alt =
                data.title;

        }


        const imageNumber =
            $("#detailImageNumber");


        if (imageNumber) {

            const ids =
                Object.keys(
                    rootsDetails
                );


            const currentIndex =
                ids.indexOf(id) + 1;


            imageNumber.textContent =
                String(
                    currentIndex
                ).padStart(2, "0") +
                " / " +
                String(
                    ids.length
                ).padStart(2, "0");

        }


        document.title =
            data.title +
            " | ROOTS";
    }


    function setText(
        selector,
        value
    ) {

        const element =
            $(selector);


        if (element) {

            element.textContent =
                value;

        }
    }


    /* =========================================================
       MESSAGE MODAL
       ========================================================= */

    function initMessageModal() {

        const modal =
            $("#messageModal");


        if (!modal) {
            return;
        }


        const openButton =
            $("#openMessageModal");


        const closeButton =
            $("#closeMessageModal");


        const overlay =
            $("#messageModalOverlay") ||
            $(".message-modal-overlay");


        function openModal() {

            modal.classList.add(
                "active"
            );

            modal.classList.add(
                "open"
            );


            modal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "modal-open"
            );


            document.body.style.overflow =
                "hidden";
        }


        function closeModal() {

            modal.classList.remove(
                "active"
            );

            modal.classList.remove(
                "open"
            );


            modal.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.classList.remove(
                "modal-open"
            );


            document.body.style.overflow =
                "";
        }


        if (openButton) {

            openButton.addEventListener(
                "click",
                openModal
            );

        }


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeModal
            );

        }


        if (overlay) {

            overlay.addEventListener(
                "click",
                closeModal
            );

        }


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                }

            }
        );


        const form =
            $("#messageForm");


        if (form) {

            form.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const inputs =
                        $$(
                            "input[required], textarea[required], select[required]",
                            form
                        );


                    const valid =
                        inputs.every(
                            function (input) {

                                return input.checkValidity();

                            }
                        );


                    if (!valid) {

                        form.reportValidity();

                        return;

                    }


                    form.reset();


                    closeModal();


                    showRootsToast(
                        "Thank you. Your message has been received."
                    );

                }
            );

        }
           }
               /* =========================================================
       NEWSLETTER
       ========================================================= */

    function initNewsletter() {

        $$("#newsletterForm")
            .forEach(
                function (form) {

                    form.addEventListener(
                        "submit",
                        function (event) {

                            event.preventDefault();


                            const input =
                                $(
                                    "input[type='email']",
                                    form
                                );


                            if (
                                !input ||
                                !input.value.trim()
                            ) {

                                showRootsToast(
                                    "Please enter your email."
                                );

                                return;

                            }


                            if (
                                !input.checkValidity()
                            ) {

                                input.reportValidity();

                                return;

                            }


                            localStorage.setItem(
                                "rootsNewsletterEmail",
                                input.value.trim()
                            );


                            form.reset();


                            showRootsToast(
                                "You're now connected with ROOTS."
                            );

                        }
                    );

                }
            );
    }


    /* =========================================================
       VOICE PLAY BUTTON
       ========================================================= */

    function initVoiceButtons() {

        $$(
            ".voice-play, .voice-card-play, [data-voice-play], .play-btn"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const playing =
                            button.classList.toggle(
                                "playing"
                            );


                        button.setAttribute(
                            "aria-pressed",
                            playing
                                ? "true"
                                : "false"
                        );


                        showRootsToast(
                            playing
                                ? "Playing living story..."
                                : "Story paused."
                        );

                    }
                );

            }
        );
    }


    /* =========================================================
       MAP
       ========================================================= */

    function initMap() {

        $$(
            ".map-region, [data-region], .region-list button"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const bold =
                            $("b", button);


                        const name =
                            button.dataset.region ||
                            (
                                bold
                                    ? bold.textContent.trim()
                                    : ""
                            ) ||
                            button.textContent.trim() ||
                            "selected region";


                        showRootsToast(
                            "Exploring " +
                            name +
                            " traditions."
                        );

                    }
                );

            }
        );
    }


    /* =========================================================
       TIMELINE
       ========================================================= */

    function initTimeline() {

        $$(".timeline-item, [data-timeline]")
            .forEach(
                function (item) {

                    item.addEventListener(
                        "click",
                        function () {

                            $$(".timeline-item, [data-timeline]")
                                .forEach(
                                    function (other) {

                                        other.classList.remove(
                                            "active"
                                        );

                                    }
                                );


                            item.classList.add(
                                "active"
                            );

                        }
                    );

                }
            );
                               }
                                   
              /* =========================================================
       IMAGE ERROR SAFETY
       ========================================================= */

    function initImages() {

        $$("img")
            .forEach(
                function (image) {

                    image.addEventListener(
                        "error",
                        function () {

                            image.classList.add(
                                "image-error"
                            );

                        }
                    );

                }
            );
    }


    /* =========================================================
       REVEAL ANIMATION
       ========================================================= */

    function initReveal() {

        const elements =
            $$(".reveal");


        if (
            !elements.length ||
            !("IntersectionObserver" in window)
        ) {

            return;

        }


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "reveal-visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        elements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );
    }


    /* =========================================================
       BACK TO TOP
       ========================================================= */

    function initBackToTop() {

        const button =
            $("#backToTop") ||
            $(".back-to-top");


        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );
    }


    /* =========================================================
       CURRENT YEAR
       ========================================================= */

    function initYear() {

        $$(
            "[data-current-year], #currentYear"
        )
        .forEach(
            function (element) {

                element.textContent =
                    new Date().getFullYear();

            }
        );
    }


    


    /* =========================================================
       GLOBAL INITIALIZATION
       ========================================================= */

    function init() {

        document.body.classList.add(
            "roots-ready"
        );


        initMobileMenu();

        initSearch();

        initSmoothLinks();

        initNavbar();

        initArchive();

        initDetailsPage();

        initMessageModal();

        initNewsletter();

        initVoiceButtons();

        initMap();

        initTimeline();

        initImages();

        initReveal();

        initBackToTop();

        initYear();

        initLoader();


        console.log(
            "ROOTS — clean JavaScript loaded successfully."
        );
    }


    /* =========================================================
       START
       ========================================================= */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }

})();
