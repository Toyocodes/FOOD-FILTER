//items
const menu = [
   
    {
        id: 1,
        title: "pizza",
        category: "lunch",
        price: 22.99,
        img: "./images/pizza.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
    {
      id: 2,
      title: "Burger biggy",
      category: "lunch",
      price: 13.99,
      img: "./images/burger.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "chocolate milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/chocolate-shakes.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "oatmeal",
        category: "breakfast",
        price: 20.99,
        img: "./images/oatmeal.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
    {
        id: 5,
        title: "donut",
        category: "pastery",
        price: 22.99,
        img: "./images/donut.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 6,
        title: "pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/pancakes.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
    {
      id: 7,
      title: "strawberry milkshake",
      category: "shakes",
      price: 18.99,
      img: "./images/strawberry-shakes.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 8,
      title: "omelet",
      category: "breakfast",
      price: 8.99,
      img: "./images/omelet.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 9,
      title: "sharwama classic",
      category: "lunch",
      price: 12.99,
      img: "./images/sharwama.webp",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 10,
      title: "golden scoop",
      category: "ice-cream",
      price: 16.99,
      img: "./images/icecream.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 11,
      title: "vanilla cake",
      category: "pastery",
      price: 22.99,
      img: "./images/vanillacake.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 12,
        title: "pasta",
        category: "lunch",
        price: 22.99,
        img: "./images/pasta.webp",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];

//   select parent which is section center so that when the page loads, it displays the menu
// this id done with help of DOMCONTENTLOADED

const sectionCenter = document.querySelector(".section-center");
// const container = document.querySelector(".btn-container")
const filterBtns = document.querySelectorAll(".filter-btn");
// console.log(filterBtns)


//display all item when it loads
window.addEventListener("DOMContentLoaded", function (){
   displayMenuItems(menu);

});


//filter items
filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = (e.currentTarget.dataset.id);
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
            
        });
        if (category === "all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory)
        }
        // console.log(menuCategory);
    });
});

// display the items on the screen
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        console.log(item);

        return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc} 
            </p>
          </div>
        </article>
        `
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

