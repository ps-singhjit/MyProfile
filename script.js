
const arrow = document.querySelectorAll(".bx.bxs-chevrons-down");

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) =>
    {
        // console.log(e);
        const arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("showMenu");
    });
}

// const expandMenu = document.querySelector(".expand");
// expandMenu.addEventListener("click", () =>
// {
//     // const expandParent = e.target.parentElement;
//     expandMenu.classList.toggle("showMenu");
// })

const sidebar = document.querySelector(".Sidebar");
const sidebarBtn = document.querySelector(".bx-menu");
// console.log(sidebar);
// console.log(sidebarBtn);

sidebarBtn.addEventListener("click", () =>
{
    sidebar.classList.toggle("close");
});

const linkName = document.querySelectorAll(".link-item");
const cardName = document.querySelectorAll(".card");

// console.log(linkName)
console.log(linkName.length)
console.log(cardName.length)

for (let i = 0; i < linkName.length; i++) {
    linkName[i].addEventListener("click", (e) =>
    {
        console.log(e);
        // const getCard = e.target.parentElement.parentElement.parentElement.parentElement
        //     .nextElementSibling.lastElementChild.children;
        // console.log(getCard);

        // const cardSize = getCard.length;
        // console.log(cardSize);
        // getCard[i].classList.toggle("show");
        cardName[i].classList.toggle("show");

    });
}

const exp_item = document.querySelectorAll(".exp-item");
const exp_cardName = document.querySelectorAll(".exp-card");

console.log(exp_item.length)
console.log(exp_cardName.length)

for (let i = 0; i < exp_item.length; i++) {
    exp_item[i].addEventListener("click", (e) =>
    {
        console.log(e);
        exp_cardName[i].classList.toggle("show");

    });
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener("change", () =>
{
    document.body.classList.toggle("black");
});