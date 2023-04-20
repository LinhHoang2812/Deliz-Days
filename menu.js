const menu = [
  {
    id: 1,
    title: "tonkotsu ramen",
    category: "noodle dish",
    price: 15.99,
    img: "image/item1.jpg",
    desc: "Nullam mollis sapien non erat egestas pretium. Cras at dolor ac lorem tempor lacinia eget at magna. Duis sagittis fermentum rutrum.",
  },
  {
    id: 2,
    title: "pho",
    category: "noodle dish",
    price: 13.99,
    img: "image/item2.jpg",
    desc: "Nullam mollis sapien non erat egestas pretium. Cras at dolor ac lorem tempor lacinia eget at magna. Duis sagittis fermentum rutrum.",
  },
  {
    id: 3,
    title: "bun bo hue",
    category: "noodle dish",
    price: 13.99,
    img: "image/item3.jpg",
    desc: "Nullam mollis sapien non erat egestas pretium. Cras at dolor ac lorem tempor lacinia eget at magna. Duis sagittis fermentum rutrum.",
  },
  {
    id: 4,
    title: "udon",
    category: "noodle dish",
    price: 10.99,
    img: "image/item4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "soba",
    category: "noodle dish",
    price: 10.99,
    img: "image/item5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "gyoya",
    category: "antipasto",
    price: 6.99,
    img: "image/item6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "spring rolls",
    category: "antipasto",
    price: 3.99,
    img: "image/item7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "edamame",
    category: "antipasto",
    price: 2.99,
    img: "image/item8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "fried rice",
    category: "rice dish",
    price: 12.99,
    img: "image/item9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "sushi",
    category: "rice dish",
    price: 14.99,
    img: "image/item10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

  {
    id: 11,
    title: "curry",
    category: "rice dish",
    price: 14.99,
    img: "image/item11.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "matcha",
    category: "drinks",
    price: 4.99,
    img: "image/item12.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "sake",
    category: "drinks",
    price: 4.99,
    img: "image/item13.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "saporo beer",
    category: "drinks",
    price: 3.99,
    img: "image/item14.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "vietnamese coffee",
    category: "drinks",
    price: 3.99,
    img: "image/item15.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuContainer = document.querySelector(".menu-container");
const btnContainer = document.querySelector(".btn-container");

const menutoggle = document.querySelector("ul");
const menunavbar = document.querySelector("nav");
const viewMenu = document.querySelector(".scroll-btn");

viewMenu.addEventListener("click", function (e) {
  e.preventDefault();

  const navHeight = menunavbar.getBoundingClientRect().height;
  const toggleHeight = menutoggle.getBoundingClientRect().height;

  const fixedNavbar = menunavbar.classList.contains("fixed-navbar");
  const idSection = e.currentTarget.getAttribute("href");
  const section = document.querySelector(idSection);

  let position = section.offsetTop - navHeight;
  // if (!fixedNavbar) {
  //   position = position - navHeight;
  // }

  if (toggleHeight > 0) {
    position = position + toggleHeight;
  }

  window.scrollTo({ left: 0, top: position });
  menutoggle.style.height = 0;
});

window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayBtn();
  displayDropdown();
});

function displayMenu(menuArray) {
  let displayMenu = menuArray.map(function (item) {
    return `<article class="menu-dish">
          <img class="menu-photo" src=${item.img} alt="" />
          <div class="dish-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="dish-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
}

function displayBtn() {
  let uniqueCategories = menu.reduce(
    function (myArray, item) {
      if (!myArray.includes(item.category)) {
        myArray.push(item.category);
      }
      return myArray;
    },
    ["all"]
  );
  let displayBtn = uniqueCategories.map(function (category) {
    return `<button type="button" class="filter-btn" data-cat="${category}">${category}</button>`;
  });
  displayBtn = displayBtn.join("");
  btnContainer.innerHTML = displayBtn;

  filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.cat;
      if (category === "all") {
        displayMenu(menu);
      } else {
        var filterArray = menu.filter(function (item) {
          if (item.category === category) {
            return item;
          }
        });
        displayMenu(filterArray);
      }
    });
  });
}

function displayDropdown() {
  let uCategories = menu.reduce(
    function (myArray, item) {
      if (!myArray.includes(item.category)) {
        myArray.push(item.category);
      }
      return myArray;
    },
    ["all"]
  );
  let displayDropdown = uCategories.map(function (category) {
    return `<option class= "filter-option" value="${category}">${category}</option>`;
  });
  displayDropdown = displayDropdown.join("");

  var filterDropdown = `<select class="filter-dropdown">`;
  filterDropdown += displayDropdown;
  filterDropdown += `</select>`;

  const dropDown = document.querySelector(".dropdown");
  dropDown.innerHTML = filterDropdown;

  const selector = document.querySelector(".filter-dropdown");
  selector.addEventListener("change", function (e) {
    if (e.currentTarget.value === "all") {
      displayMenu(menu);
    } else {
      var filterArray = menu.filter(function (item) {
        if (item.category === e.currentTarget.value) {
          return item;
        }
      });
      displayMenu(filterArray);
    }
  });
}
