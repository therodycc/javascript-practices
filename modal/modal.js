const openButton = document.getElementById("open");
const openModal = document.getElementById("back-modal");
const load = document.getElementById("loading");
const modalTarget = document.getElementById("modal-target");
const textButton = document.getElementById("text-button");
const welcome = document.getElementById("welcome");
const principalContainer = document.getElementById("principal-container");


document.

openButton.addEventListener("click", (e) => {
    load.classList.remove("spinner-none");
    textButton.innerHTML = ""
    setInterval(() => {
        textButton.innerHTML = "Open"
        load.classList.add("spinner-none");
        openModal.style.transform = "translate(0%)";
        setInterval(() => {
            modalTarget.style.transform = "translateY(0%)"
        }, 500);
    }, 500);
});


