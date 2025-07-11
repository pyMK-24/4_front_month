// PHONE_BLOCK

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "ok";
    }else {
        phoneResult.innerHTML = "notok"
    }
}

//TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll(".tab_content_item");
const tabParrent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
};

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block';
    tabs[i].classList.add("tab_content_item_active");
};


hideTabContent();
showTabContent()

let indexSlider = 0;

tabParrent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabs.forEach((tab, index) => {
            if (event.target === tab) {
                hideTabContent();
                showTabContent(index);
                indexSlider = index;
            }
        })
    }
};

const autoSliderTabs = () => {
    setInterval(() => {        
        indexSlider++
        if (indexSlider > tabs.length - 1) {
            indexSlider = 0;
        }
        hideTabContent()
        showTabContent(indexSlider)}
        ,3000)
}

autoSliderTabs();
