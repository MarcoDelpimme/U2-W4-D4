const myKey = "LrjVhExvxwK07e2e9zmvlDY4e1tv6aA2p85W9Z44gLGw0oQRSuvq2QyV";
const URL = "https://api.pexels.com/v1/search?query=dog";

const loadBtn = document.getElementById("loadImages");
loadBtn.addEventListener("click", function () {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: myKey,
    },
  })
    .then((response) => {
      console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then((animalList) => {
      console.log(animalList);
      displayImages(animalList);
    });
});

function displayImages(animalList) {
  const containerCard = document.getElementById("containerCard");
  animalList.photos.forEach((photo) => {
    const column = document.createElement("div");
    column.classList.add("col-md-4");

    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "shadow-sm");

    const imgCard = document.createElement("img");
    imgCard.classList.add("bd-placeholder-img", "card-img-top");
    imgCard.src = photo.src.large;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titleCard = document.createElement("h5");
    titleCard.classList.add("card-title");
    titleCard.innerText = photo.alt;

    const descr = document.createElement("p");
    descr.classList.add("card-text");
    descr.innerText = "loremipsum caisujd aiospdybv cbpasiydubf";

    const containerG = document.createElement("div");
    containerG.classList.add("d-flex", "justify-content-between", "align-items-center");

    const containerBtn = document.createElement("div");
    containerBtn.classList.add("btn-group");

    const btnView = document.createElement("btn");
    btnView.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnView.innerText = "view";
    const btnHide = document.createElement("btn");
    btnHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnHide.innerText = "hide";
    btnHide.onclick = function () {
      removeCard(column);
    };

    const textMuted = document.createElement("small");
    textMuted.classList.add("text-muted");
    textMuted.innerText = photo.id;
    cardBody.appendChild(titleCard);
    cardBody.appendChild(descr);

    containerBtn.appendChild(btnView);
    containerBtn.appendChild(btnHide);
    containerG.appendChild(containerBtn);
    cardBody.appendChild(containerG);
    containerG.appendChild(textMuted);

    column.appendChild(card);
    containerCard.appendChild(column);
    card.appendChild(imgCard);
    card.appendChild(cardBody);
  });
}

const URL2 = "https://api.pexels.com/v1/search?query=cat";

const loadSecondImg = document.getElementById("loadSecondImg");
loadSecondImg.addEventListener("click", function () {
  fetch(URL2, {
    method: "GET",
    headers: {
      Authorization: myKey,
    },
  })
    .then((response) => {
      console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then((animalList) => {
      console.log(animalList);
      displayImages2(animalList);
    });
});

function displayImages2(animalList) {
  const containerCard = document.getElementById("containerCard");
  animalList.photos.forEach((photo) => {
    const column = document.createElement("div");
    column.classList.add("col-md-4");

    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "shadow-sm");

    const imgCard = document.createElement("img");
    imgCard.classList.add("bd-placeholder-img", "card-img-top");
    imgCard.src = photo.src.large;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titleCard = document.createElement("h5");
    titleCard.classList.add("card-title");
    titleCard.innerText = photo.alt;

    const descr = document.createElement("p");
    descr.classList.add("card-text");
    descr.innerText = "loremipsum caisujd aiospdybv cbpasiydubf";

    const containerG = document.createElement("div");
    containerG.classList.add("d-flex", "justify-content-between", "align-items-center");

    const containerBtn = document.createElement("div");
    containerBtn.classList.add("btn-group");

    const btnView = document.createElement("btn");
    btnView.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnView.innerText = "view";
    const btnHide = document.createElement("btn");
    btnHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
    btnHide.innerText = "hide";

    btnHide.onclick = function () {
      removeCard(column);
    };

    const textMuted = document.createElement("small");
    textMuted.classList.add("text-muted");
    textMuted.innerText = photo.id;
    cardBody.appendChild(titleCard);
    cardBody.appendChild(descr);

    containerBtn.appendChild(btnView);
    containerBtn.appendChild(btnHide);
    containerG.appendChild(containerBtn);
    cardBody.appendChild(containerG);
    containerG.appendChild(textMuted);

    column.appendChild(card);
    containerCard.appendChild(column);
    card.appendChild(imgCard);
    card.appendChild(cardBody);
  });
}

const removeCard = (element) => {
  element.remove();
};
