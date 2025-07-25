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

// DRY - dont repeat yourself
// KISS - keep it simple, stupid!
// SOLID - ...
// BEM - ... 

//convertor - updated

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');


const convertor = (element) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/convertor.json");
            const data = await response.json();

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
        } catch(error) {
            console.error(`Ошибка при получении постов: ${error}`);
        }
    } 
};

convertor(somInput);
convertor(usdInput);
convertor(eurInput);


// card switch - updated
const cardBlock = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");

// let numId = 197; 
let numId = 1; 

const blocks = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        const {title, id: numId, completed} = data;
    
        cardBlock.innerHTML = `
            <p>${title}</p>
            <p>${completed}</p>
            <span>${numId}</span>
        `;
    } catch(error) {
        console.error(`Ошибка при получении постов: ${error}`);
    }
}

blocks(numId);

btnNext.onclick = () => {
    numId++;
    if (numId > 200) {
        numId = 1;
    }
    blocks(numId);
}

btnPrev.onclick = () => {
    numId--;
    if (numId < 1) {
        numId = 200;
    }
    blocks(numId);
}

// hw_6 - updated

// const getPosts = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(`Ошибка при получении постов: ${error}`);
//     }
// }

// getPosts();

// weather

const searchInput = document.querySelector(".cityName");
const searchButton = document.querySelector("#search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

// http://api.openweathermap.org/data/2.5/weather
// API_KEY = e417df62e04d3b1b111abeab19cea714

const API = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const searchWeather = async () => {
    if (searchInput.value === "") {
        city.innerHTML = "Введи названия города"
    }
    try {
        const response = await fetch(`${API}?q=${searchInput.value}&appid=${API_KEY}&units=metric&lang=ru`);
        const data = await response.json();

        city.innerHTML = data.name || "Город не найден";
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + "&deg;C" : "";
        searchInput.value = "";
    } catch(error) {
        console.error(`Ошибка при получении постов: ${error}`);
    }
}

searchButton.onclick = () => searchWeather()
window.onkeydown = (event) => {
    if (event.code === 'Enter'){
        searchWeather()
    }
}

searchButton.onclick = () => searchWeather()
window.onkeydown = (event) => {
    if (event.code === "Enter") {
        searchWeather()
    }
}



