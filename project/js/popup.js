let writeUsLink = document.querySelector(".our-contacts__link");
let writeUsOpen = document.querySelector(".write-us");

if (writeUsLink && writeUsOpen) {
    const writeUsClose = writeUsOpen.querySelector(".popup__close");
    const writeUsForm = writeUsOpen.querySelector("form");
    const userName = writeUsOpen.querySelector("#write-us-name");
    const userEmail = writeUsOpen.querySelector("#write-us-email");
    const userText = writeUsOpen.querySelector("#write-us-text");
    const storageName = localStorage.getItem("userName");
    const storageEmail = localStorage.getItem("userEmail");

    writeUsLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsOpen.classList.add("popup--show");
        if (storageName) {
            userName.value = storageName;
            if (storageEmail) {
                userEmail.value = storageEmail;
                userText.focus();
            } else {
                userEmail.focus();
            }
        } else {
            userName.focus();
        }
    });

    writeUsForm.addEventListener("submit", function (evt) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userEmail", userEmail.value);
    });

    writeUsClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsOpen.classList.remove("popup--show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (writeUsOpen.classList.contains("popup--show")) {
                writeUsOpen.classList.remove("popup--show");
            }
        }
    });
}

const mapLink = document.querySelector(".our-contacts__map-link");
const mapOpen = document.querySelector(".map-big");

if (mapLink && mapOpen) {
    const mapClose = mapOpen.querySelector(".popup__close");

    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapOpen.classList.add("popup--show");
    });

    mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapOpen.classList.remove("popup--show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (mapOpen.classList.contains("popup--show")) {
                mapOpen.classList.remove("popup--show");
            }
        }
    });
}


const messageLinks = document.querySelectorAll(".product__btn--add-cart");
let i;
const messageOpen = document.querySelector(".message");

if (messageLinks && messageOpen) {
    const messageContinue = messageOpen.querySelector(".message__btn--close");
    const {addEventListener} = messageOpen.querySelector(".popup__close");

    for (i = 0; i < messageLinks.length; i++) {
        messageLinks[i].addEventListener("click", function (evt) {
            evt.preventDefault();

            messageOpen.classList.add("popup--show");
        });
    }

    messageContinue.addEventListener("click", function (evt) {
        evt.preventDefault();
        messageOpen.classList.remove("popup--show");
    });

    addEventListener("click", function (evt) {
        evt.preventDefault();
        messageOpen.classList.remove("popup--show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (messageOpen.classList.contains("popup--show")) {
                messageOpen.classList.remove("popup--show");
            }
        }
    });
}

const modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
const registration = document.getElementById('id02');


window.onclick = function (event) {
    if (event.target === registration) {
        registration.style.display = "none";
    }
}
