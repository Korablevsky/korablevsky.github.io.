"user strict";

// TABS
const tabsButtons = document.querySelectorAll(".tabs__nav button");
const tabsItem = document.querySelectorAll(".tabs__item");

//Функция скрывает такбы и убирает active у кнопок
function hideTabs() {
    tabsItem.forEach((item) => item.classList.add("hide"));
    tabsButtons.forEach((item) => item.classList.remove("active"));
}

//Функция показывает переданный номер таба и делает соответствующие ему кнопку активной
function showTab(index) {
    tabsItem[index].classList.remove("hide");
    tabsButtons[index].classList.add("active");
}

hideTabs();
showTab(1);

tabsButtons.forEach((btn, index) =>
    btn.addEventListener("click", () => {
        hideTabs();
        showTab(index);
    })
);

// Anchors

const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach((anc) => {
    anc.addEventListener("click", function (event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 90,
            behavior: "smooth",
        });
    });
});
