function nav() {
    const nav = document.getElementById("nav-list");

    if (nav.style.display === "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }

}