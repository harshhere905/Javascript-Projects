let passwordbox = document.querySelector("#password");
const length = 10;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()~`{}[]|/?<>=+"
const random = uppercase + lowercase + numbers + symbols;
const copyimage=document.querySelector("#image");

function createpassword() {
    let password = "";
    password += uppercase.charAt(Math.floor(Math.random(uppercase) * uppercase.length));
    password += lowercase.charAt(Math.floor(Math.random(lowercase) * lowercase.length));
    password += numbers.charAt(Math.floor(Math.random(numbers) * numbers.length));
    password += symbols.charAt(Math.floor(Math.random(symbols) * symbols.length));


    while (length > password.length) {
        password += random.charAt(Math.floor(Math.random(random) * random.length));
    }

    return password;
}

const passwordbutton = document.querySelector(".button");
passwordbutton.addEventListener("click", function () {
    passwordbox.value = createpassword();
})

copyimage.addEventListener("click",function(){
    navigator.clipboard.writeText(passwordbox.value)
    alert("password copied");
});   