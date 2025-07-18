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


//convertor


// somInput.oninput = () => {
//     const xhr = new  XMLHttpRequest()
//     xhr.open('GET', '../data/convertor.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()
    
//     xhr.onload = () => {
//         const vasheBezRaznitsy = JSON.parse(xhr.response)
//         console.log(vasheBezRaznitsy.usd)
//         usdInput.value = (somInput.value / vasheBezRaznitsy.usd).toFixed(2)
//     }
// };
// usdInput.oninput = () => {
//     const xhr = new  XMLHttpRequest()
//     xhr.open('GET', '../data/convertor.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()
    
//     xhr.onload = () => {
//         const vasheBezRaznitsy = JSON.parse(xhr.response)
//         console.log(vasheBezRaznitsy.usd)
//         somInput.value = (usdInput.value * vasheBezRaznitsy.usd).toFixed(2)
//     }
// };

// DRY - dont repeat yourself
// KISS - keep it simple, stupid!
// SOLID - ...
// BEM - ...

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');


const convertor = (element) => {
    element.oninput = () => {
        const xhr = new  XMLHttpRequest()
        xhr.open('GET', '../data/convertor.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(4)
                eurInput.value = (element.value / data.eur).toFixed(4)
            }
            if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2)
                eurInput.value = (element.value * data.usd / data.eur).toFixed(2)
            }
            if (element.id === 'eur') {
                somInput.value = (element.value * data.eur).toFixed(2)
                usdInput.value = (element.value * data.eur / data.usd).toFixed(2)
            }  
            if (element.value === '') {
                somInput.value = '';
                usdInput.value = '';
                eurInput.value = '';
            }
        }
    }
};
convertor(somInput);
convertor(usdInput);
convertor(eurInput);