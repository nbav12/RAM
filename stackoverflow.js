window.onload = () => {
    // Ignore another classes, because the style may change
    const cookiesPopup = document.getElementsByClassName("js-consent-banner")[0];
    if (cookiesPopup) cookiesPopup.remove();
}