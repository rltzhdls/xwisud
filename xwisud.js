$(document).ready(function () {
    const fleftDiv = document.querySelector('.lefts');
        if (fleftDiv) {
            if (!fleftDiv.innerHTML.includes('Sui Design')) {
                const pElement = document.createElement('p');
                pElement.textContent = 'Copyright Sui Design';
                fleftDiv.appendChild(pElement);
            }
        } else {
            window.location.href = 'https://suiblog.site';
        }
});