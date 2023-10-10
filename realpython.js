window.onload = () => {
    const mainModal = document.getElementById('rprw');
    if (mainModal) mainModal.remove();

    const modalBackground = document.getElementsByClassName('modal-backdrop fade show')[0];
    if (modalBackground) modalBackground.remove();

    document.body.classList.remove('modal-open');
}