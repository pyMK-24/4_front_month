const modal = document.querySelector(".modal");
const modalOpenBtn = document.querySelector("#btn-get");
const modalCloseBtn = document.querySelector(".modal_close");

const open = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

const close = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

modalOpenBtn.onclick = open;
modalCloseBtn.onclick = close;
modal.onclick = (event) => {
    if (event.target === modal) {
        close();
    }
};

const temporaryModal = () => {
    setTimeout(() => {
        open();
    },10000) 
};

temporaryModal();

let modalShow = false;

window.addEventListener("scroll", () => {
    const scrollWindow = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (!modalShow && scrolled >= scrollWindow) {
        modalShow = true;
        open();
    };
});










