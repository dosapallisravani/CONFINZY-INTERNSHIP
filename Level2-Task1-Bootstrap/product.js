const products = {

    laptop: {
        name: "Laptop Stand",
        image: "images/laptop-stand.png",
        category: "TECH",
        description:
            "Perfect for coding, assignments and online learning."
    },

    notebook: {
        name: "Notebook",
        image: "images/notebook.png",
        category: "STATIONERY",
        description:
            "Capture important class notes and daily ideas."
    },

    calculator: {
        name: "Calculator",
        image: "images/calculator.png",
        category: "STUDY",
        description:
            "Essential for solving mathematical problems quickly."
    },

    headphones: {
        name: "Headphones",
        image: "images/headphones.png",
        category: "TECH",
        description:
            "Stay focused with distraction-free study sessions."
    },

    bottle: {
        name: "Water Bottle",
        image: "images/water-bottle.png",
        category: "LIFESTYLE",
        description:
            "Keep yourself hydrated throughout study hours."
    },

    backpack: {
        name: "Smart Backpack",
        image: "images/backpack.png",
        category: "LIFESTYLE",
        description:
            "Organize all your essentials in one place."
    }

};

const params = new URLSearchParams(window.location.search);
const item = params.get("product");

if(products[item]){

    document.getElementById("productName").innerText =
        products[item].name;

    document.getElementById("productImage").src =
        products[item].image;

    document.getElementById("productCategory").innerText =
        products[item].category;

    document.getElementById("productDescription").innerText =
        products[item].description;
  }
