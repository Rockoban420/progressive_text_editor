
window.addEventListener('beforeinstallprompt', (e) => {
    window.deferredPrompt = e;
    e.preventDefault();
    console.log(deferredPrompt);
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