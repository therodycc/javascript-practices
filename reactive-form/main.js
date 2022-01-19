const input = document.querySelector("#email");
const phone = document.querySelector("#phone");

let countEmail = 0;
let countPhone = 0;

// validate email
input.addEventListener("input", (e) => {
    if (countEmail > 1) validateInput(e, validEmail);
})

input.addEventListener('focusout', (e) => {
    validateInput(e, validEmail)
})
input.addEventListener('focus', (e) => {
    countEmail++
})

// validate phone
phone.addEventListener("input", (e) => {
    if (countPhone > 1) validateInput(e, validPhone);
})

phone.addEventListener('focusout', (e) => {
    validateInput(e, validPhone)
})
phone.addEventListener('focus', (e) => {
    countPhone++
})



function validateInput(e, callback) {
    const value = e.target.value;
    if (!callback(value)) {
        e.target.classList.add('input-invalid')
        e.target.classList.remove('input-valid')
    }
    if (callback(value)) {
        e.target.classList.add('input-valid')
        e.target.classList.remove('input-invalid')
    }
}

function validEmail(email) {
    var RegExPattern = /(^[0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,15}$/;
    return RegExPattern.test(email);
}
function validPhone(email) {
    var RegExPattern = /^[\+0-9]{11,15}$/;
    return RegExPattern.test(email);
}



