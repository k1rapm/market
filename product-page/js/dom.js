import { searchUser, rangeinp } from "./api.js";

const box = document.querySelector(".box");
const search = document.querySelector(".search");
const all = document.querySelector(".all");
const Ikea = document.querySelector(".Ikea");
const Marcos = document.querySelector(".Marcos");
const Caressa = document.querySelector(".Caressa");
const Liddy = document.querySelector(".Liddy");
let priceValue = document.querySelector(".priceValue");
let range = document.querySelector(".range");
let m1 = document.querySelector(".m1");
let m2 = document.querySelector(".m2");
let m3 = document.querySelector(".m3");
const corzina = document.querySelector(".corzina");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const s = document.querySelector(".s");
let tprice = document.querySelector(".tottal-price");
let rakam = document.querySelector(".rakam");

corzina.onclick = () => {
  modal.style.display = "block";
  modal.id = "show";
};

close2.onclick = () => {
  modal.style.display = "none";
};

close.onclick = () => {
  modal.style.display = "none";
};

search.oninput = () => {
  searchUser(search.value);
};
Ikea.onclick = () => {
  searchUser(Ikea.innerHTML.trim());
};
Marcos.onclick = () => {
  searchUser(Marcos.innerHTML.trim());
};
Caressa.onclick = () => {
  searchUser(Caressa.innerHTML.trim());
};
Liddy.onclick = () => {
  searchUser(Liddy.innerHTML.trim());
};
all.onclick = () => {
  searchUser(true);
};
priceValue.innerHTML = "Value : $0";
range.oninput = () => {
  priceValue.innerHTML = "Value : $" + range.value;
  rangeinp();
};

function get(d) {
  box.innerHTML = "";

  d.forEach((e) => {
    let card = document.createElement("div");
    let header = document.createElement("div");
    let img = document.createElement("img");

    e.fields.image.forEach((e) => {
      img.src = e.url;
    });
    let h = document.createElement("div");
    let karz = document.createElement("div");
    let karzp = document.createElement("p");
    karz.onclick = () => {
      modal.style.display = "block";
      modal.id = "show";
      const i = JSON.stringify(e);
      localStorage.setItem("elm", i);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      let l = cart.find((item) => item.id == e.id);
      if (!l) {
        cart.push(e);
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        mag(cart);
        tottal();

        let pid = e.id;
        let count = parseInt(localStorage.getItem(`count_${pid}`)) || 0;
        count++;

        localStorage.setItem(`count_${pid}`, count);

        return;
      }

      mag(cart);
    };
    karzp.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  color="white"
                  fill="currentColor"
                  class="bi bi-basket2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"
                  />
                  <path
                    d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"
                  />
                </svg>`;
    let info = document.createElement("div");
    let infop = document.createElement("a");
    infop.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    color="white"
                    fill="currentColor"
                    class="bi bi-info-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"
                    /></svg>`;
    info.onclick = () => {
      const item = JSON.stringify(e);
      localStorage.setItem("key", item);
    };
    let name = document.createElement("p");
    name.innerHTML = e.fields.name.toUpperCase();
    let price = document.createElement("p");
    let formattedPrice = e.fields.price.toFixed(2);
    price.innerHTML = "$" + formattedPrice;
    infop.href = "../info-page/index.html";

    let footer = document.createElement("div");

    info.append(infop);
    karz.append(karzp);
    h.append(karz, info);
    header.append(h, img, name, price);
    card.append(header, footer);
    box.append(card);

    h.classList = "h";
    karz.classList = "karz";
    info.classList = "info";
    card.classList = "card";
    img.classList = "card-img";
    name.classList = "card-name";
    price.classList = "card-price";
    header.classList = "header";
    footer.classList = "footer";
  });
}

function mag(elm) {
  s.innerHTML = "";
  elm?.forEach((e) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let price = document.createElement("p");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let pilus = document.createElement("p");
    let x = document.createElement("p");
    x.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>`;

    x.onclick = () => {
      let pid = e.id;
      localStorage.removeItem(`count_${pid}`);

      tottal();

      div.remove();

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart = cart.filter((item) => item.id !== pid);

      localStorage.setItem("cart", JSON.stringify(cart));
    };

    pilus.innerHTML = "+";
    let pid = e.id;
    let count = parseInt(localStorage.getItem(`count_${pid}`)) || 1;
    let tp = localStorage.setItem("m", count * e.fields.price);
    let m = localStorage.getItem("m");
    pilus.onclick = () => {
      count++;

      price.innerHTML = "$" + e.fields.price;
      localStorage.setItem(`count_${pid}`, count);
      cnt.innerHTML = count;
      tottal();
    };

    let cnt = document.createElement("p");
    cnt.innerHTML = localStorage.getItem(`count_${pid}`) || 1;

    let minus = document.createElement("button");
    minus.innerHTML = "-";
    minus.onclick = () => {
      if (count > 1) {
        count--;

        price.innerHTML = "$" + e.fields.price;
        localStorage.setItem(`count_${pid}`, count);
        cnt.innerHTML = count;
        tottal();
      }
    };
    function Rakam() {
      rakam.innerHTML = elm.length;
    }
    Rakam();

    img.src = e.fields.image[0].url;
    name.innerHTML = e.fields.name.toUpperCase();
    price.innerHTML = "$" + e.fields.price;

    div3.append(pilus, cnt, minus);
    div2.append(name, price, div3);
    div.append(img, div2, x);
    s.append(div);

    div3.classList = "d3";
    div2.classList = "d2";
    div.classList = "d";
    img.classList = "c-img";
    name.classList = "c-name";
    price.classList = "c-price";
    pilus.classList = "pilus";
    cnt.classList = "cnt";
    minus.classList = "minus";
    x.classList = "x";
  });
}

const cart = JSON.parse(localStorage.getItem("cart"));
mag(cart);

function tottal() {
  const cart1 = JSON.parse(localStorage.getItem("cart"));
  let totalPrice = 0;

  cart1?.forEach((item) => {
    const count = parseInt(localStorage.getItem(`count_${item.id}`)) || 1;
    localStorage.setItem(
      "tottalprice",
      (totalPrice += count * item.fields.price)
    );
  });

  tprice.innerHTML =
    "Tottal Price : " + "$" + localStorage.getItem("tottalprice");
}
tottal();

export default get;
