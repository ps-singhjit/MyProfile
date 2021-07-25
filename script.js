
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


//Toggle the class state if it is already set to - show
function resetToggle(element)
{
    for (let i = 0; i < element.length; i++) {
        let state = element[i].classList.contains("show");
        console.log(`${element[i]} :: has state :: ${state}`);
        if (state) {
            element[i].classList.toggle("show");
        }
    }
}
//Link Locators
const linkName = document.querySelectorAll(".link-item");
const cardName = document.querySelectorAll(".card");
//Experience Locators
const exp_item = document.querySelectorAll(".exp-item");
const exp_cardName = document.querySelectorAll(".exp-card");

// console.log(linkName)
console.log(linkName.length);
console.log(cardName.length);


//All link cards on the side menu
for (let i = 0; i < linkName.length; i++) {
    linkName[i].addEventListener("click", (e) =>
    {
        // console.log(e);
        // const getCard = e.target.parentElement.parentElement.parentElement.parentElement
        //     .nextElementSibling.lastElementChild.children;
        // console.log(getCard);

        // const cardSize = getCard.length;
        // console.log(cardSize);
        // getCard[i].classList.toggle("show");
        resetToggle(cardName);
        resetToggle(exp_cardName);
        cardName[i].classList.toggle("show");

    });
}
console.log(exp_item.length)
console.log(exp_cardName.length)
//Experience cards
for (let i = 0; i < exp_item.length; i++) {
    exp_item[i].addEventListener("click", (e) =>
    {
        resetToggle(exp_cardName);
        resetToggle(cardName);
        // console.log(e);
        exp_cardName[i].classList.toggle("show");

    });
}

//  /html/body/div[2]/nav/li[1]/a
// const cardsArea = document.getElementById('cards');
const cardsArea = document.querySelector('.home-section');
cardsArea.addEventListener("click", () =>
{
    resetToggle(cardName);
    resetToggle(exp_cardName);
});


//For Theme changing state of the checkbox
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener("change", () =>
{
    document.body.classList.toggle("black");
});