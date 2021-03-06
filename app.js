const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".tab");
const articles = document.querySelectorAll(".info");

const navBtn = document.querySelector(".nav-btn");
const links = document.querySelector(".links");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id === true) {
    btns.array.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  articles.forEach(function (article) {
    article.classList.remove("active");
  });
  const element = document.getElementById(id);
  element.classList.add("active");
});

navBtn.addEventListener("click", function () {
  links.classList.toggle("revel-links");
});
