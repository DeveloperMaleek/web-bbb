var herName = localStorage.getItem("nameOfLover");
document.getElementById("profileName").innerHTML = herName;

window.addEventListener("load", () => {
    const params = (new URL(document.location)).searchParams;
    const summyName = params.get("summy");

    document.getElementById("profileName").innerHTML = summyName;
})