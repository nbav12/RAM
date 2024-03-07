window.onload = () => {
    const inlineRegistrationWrapper = document.getElementById('inlineRegistrationWrapper');
    inlineRegistrationWrapper.remove();

    let paywall = document.getElementsByClassName('paywall');
    paywall = [...paywall];
    paywall.forEach(el => el.classList.remove('paywall'));
}