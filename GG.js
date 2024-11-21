const logos = [
  {
    src: "logo1.jpg",
    alt: "Drop",
    id: "0",
  },
  {
    src: "logo2.jpg",
    alt: "flex",
    id: "1",
  },
  {
    src: "logo3.jpg",
    alt: "shopify",
    id: "2",
  },
  {
    src: "logo4.jpg",
    alt: "Zumper",
    id: "3",
  },
  {
    src: "logo5.jpg",
    alt: "Sales",
    id: "4",
  },
  {
    src: "logo6.jpg",
    alt: "Air",
    id: "5",
  },
];

let comIMG = document.querySelector(".com-img");

window.addEventListener("DOMContentLoaded", function () {
  let displaylogos = logos.map(function (item) {
    //console.log(item.alt);
    return `<img class="companyIMG" src=${item.src} alt=${item.alt} />`;
  });
  displaylogos = displaylogos.join("");
  //console.log(displaylogos);
  comIMG.innerHTML = displaylogos;
});

const customerCONTAIN = document.querySelector(".custom-container");
const RightBTN = document.querySelector(".RightBTN");
const LeftBTN = document.querySelector(".LeftBTN");
const Center = document.querySelector(".F-center");
const Right = document.querySelector(".F-right");
const Left = document.querySelector(".F-left");

customerCONTAIN.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  customerCONTAIN.scrollLeft += evt.deltaY;
  customerCONTAIN.style.scrollBehavior = "auto";
});

// RIGHT
RightBTN.addEventListener("click", function () {
  customerCONTAIN.scrollLeft -= 270;
  customerCONTAIN.style.scrollBehavior = "smooth";
  // if (Center.classList.contains("next-cha")) {
  //   Center.classList.remove("next-cha");
  //   Left.classList.add("next-cha");
  // } else {
  // }
  move();
});

// LEFT
LeftBTN.addEventListener("click", function () {
  customerCONTAIN.scrollLeft += 270;
  customerCONTAIN.style.scrollBehavior = "smooth";
  // if (Center.classList.contains("next-cha")) {
  //   Center.classList.remove("next-cha");
  //   Right.classList.add("next-cha");
  // }
  move();
});
let move = function () {
  if (customerCONTAIN.scrollLeft > 270) {
    Center.classList.remove("next-cha");
    Right.classList.add("next-cha");
    Left.classList.remove("next-cha");
  } else if (customerCONTAIN.scrollLeft < 180) {
    Center.classList.remove("next-cha");
    Right.classList.remove("next-cha");
    Left.classList.add("next-cha");
  } else {
    Center.classList.add("next-cha");
    Right.classList.remove("next-cha");
    Left.classList.remove("next-cha");
  }
};

const customerCOVER = document.querySelectorAll(".custom-container");

// tranverse DOM
/*customerCOVER.forEach(function (cover) {
  //console.log(cover);

  let BTN = cover.querySelectorAll(".custom");
  //console.log(BTN);
  BTN.forEach(function (cusBN) {
    cusBN.addEventListener("click", function (e) {
      //console.log(e.currentTarget.classList);

      const custoMAN = e.currentTarget;

      custoMAN.classList.toggle("cusSHADE");
    });
  });
}); */

// using selectors

customerCOVER.forEach(function (custman) {
  //console.log(custman);
  BTN = custman.querySelectorAll(".custom");
  //console.log(BTN);
  BTN.forEach(function (item) {
    const pop = item.querySelector(".man-head");
    //console.log(pop);
    // console.log(item);

    pop.addEventListener("click", function () {
      BTN.forEach(function (page) {
        {
          //console.log(page);
          if (page !== item) {
            page.classList.remove("cusSHADE");
          }
        }
      });
      item.classList.toggle("cusSHADE");
    });
  });
});
