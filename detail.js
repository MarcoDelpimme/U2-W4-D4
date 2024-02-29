document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const imageUrl = params.get("imageUrl");
  const title = params.get("title");
  const description = params.get("description");
  const artistLink = params.get("artistLink");

  const detailImage = document.getElementById("detailImage");
  const detailTitle = document.getElementById("detailTitle");
  const detailDescription = document.getElementById("detailDescription");
  const detailLink = document.getElementById("detailLink");
  const goBackBtn = document.getElementById("goBackBtn");

  detailImage.src = imageUrl;
  detailTitle.textContent = title;
  detailDescription.textContent = description;
  detailLink.href = artistLink;

  goBackBtn.addEventListener("click", function () {
    window.history.back();
  });
});
