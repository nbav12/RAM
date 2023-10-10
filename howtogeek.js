// No using of windows.onload(), because it will be called very late due to a lot of fetches
const intervalID = setInterval(() => {
    const modal = document.getElementsByClassName('fEy1Z2XT ')[0];
    if (modal) {
        // Removing modal
        modal.remove();
        clearInterval(intervalID);

        // Enable overflow
        const html = document.getElementsByTagName('html')[0];
        html.style.overflow = 'auto';
    }
}, 500);
