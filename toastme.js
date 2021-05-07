window.addEventListener("load", () => {
    const params = (new URL(document.location)).searchParams;
    const summyName = params.get("summy");

    document.getElementById("profileName").innerHTML = summyName;
})