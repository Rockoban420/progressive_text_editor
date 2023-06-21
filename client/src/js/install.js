
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
});

const butInstall = document.getElementById('installBtn');
butInstall.addEventListener('click', async () => {
    const { deferredPrompt } = window;
    if (deferredPrompt !== null) {
        console.log(deferredPrompt);
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
});