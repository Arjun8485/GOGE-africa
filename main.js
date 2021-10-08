function loader() {
    var socket = document.getElementById("socket");
    var mainContent = document.getElementById("hidden");
    setTimeout(() => {
        socket.style.display = "none";
        mainContent.style.display = "block";
        console.log("loaded");
    }, 2000);
}