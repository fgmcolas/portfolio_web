document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('input-username').value;
    const password = document.getElementById('input-pass').value;
    const messageDiv = document.getElementById('registerMessage');

    console.log("Données de soumission :", { username, password });

    try {
        const response = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        console.log("Réponse du serveur :", response);

        if (response.ok) {
            messageDiv.innerHTML = '<p>Compte créé avec succès ! Redirection vers la page de login...</p>';
            messageDiv.classList.remove('error');
            messageDiv.classList.add('success');
            setTimeout(() => {
                window.location.href = './login.html';
            }, 2000);
        } else {
            const result = await response.json();
            console.log("Erreur serveur :", result);
            messageDiv.innerHTML = `<p>${result.message || 'Une erreur est survenue'}</p>`;
            messageDiv.classList.remove('success');
            messageDiv.classList.add('error');
        }
    } catch (error) {
        console.log("Erreur de requête :", error);
        messageDiv.innerHTML = `<p>Erreur : ${error.message}</p>`;
        messageDiv.classList.remove('success');
        messageDiv.classList.add('error');
    }
});

const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text'
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            input.type = 'password'
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}
showHiddenPass('input-pass', 'input-icon')
showHiddenPass('input-pass-2', 'input-icon-2')
