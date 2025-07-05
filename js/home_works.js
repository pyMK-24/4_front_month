//hw 1.1
const inputGmail = document.querySelector("#gmail_input");
const buttonGmail = document.querySelector("#gmail_button");
const spanGmail = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;

buttonGmail.onclick = () => {
    if (regExp.test(inputGmail.value)) {
        spanGmail.innerHTML = "Твоя почта была успешно записана.";
    }else {
        spanGmail.innerHTML = "Неверно, попробуй еще раз."
    }
}
//hw 1.2
const childBlock = document.querySelector(".child_block");

let position = 0;

const actionBlock = () => {
    position++
    childBlock.style.left = position + "px"
    if (position <= 448) {
        requestAnimationFrame(actionBlock);
    }
}
requestAnimationFrame(actionBlock);