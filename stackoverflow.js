// No using of windows.onload(), because it will be called very late due to a lot of fetches
const intervalID = setInterval(() => {
    const cookiesPopup = document.getElementById("onetrust-consent-sdk");
    if (cookiesPopup) {
        cookiesPopup.remove();
        clearInterval(intervalID);
    }
}, 500);