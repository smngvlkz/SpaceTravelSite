const tabList = document.querySelector('[rol="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener('keydown', (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    if (e.keyCode === keydownRight) {
        tabFocus = tabFocus++;
        console.log(tabFocus)
    }

    if (e.keyCode === keydownLeft) {
        tabFocus = tabFocus--;
        console.log(tabFocus)
    }
})