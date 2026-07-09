function copyEmail() {
    var copyText = "taylorhetheringtondev@gmail.com";

    navigator.clipboard.writeText(copyText);

    Toastify({
        text: "Email address copied!",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}

function test() {
    console.log("tello!");
}