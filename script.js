// wait for window to load
document.addEventListener("DOMContentLoaded", function(event) {
    // get refence to to header object
    let myHeader = document.getElementById("header-id");

    // Wait 3 seconds, then diaplay the header
    setTimeout(() => {
        myHeader.classList.remove("hidden");
    }, 3000);
}); 
