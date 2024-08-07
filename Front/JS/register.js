document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('input-username').value;
    const password = document.getElementById('input-pass').value;
    const messageDiv = document.getElementById('registerMessage');

    console.log("Submission data:", { username, password });

    try {
        const response = await fetch('https://intense-taiga-80275-4ea88f913a41.herokuapp.com/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        console.log("Server response:", response);

        if (response.ok) {
            messageDiv.innerHTML = '<p>Account successfully created! Redirecting to login page...</p>';
            messageDiv.classList.remove('error');
            messageDiv.classList.add('success');
            setTimeout(() => {
                window.location.href = './login.html';
            }, 2000);
        } else {
            const result = await response.json();
            console.log("Server error:", result);
            messageDiv.innerHTML = `<p>${result.message || 'An error occurred'}</p>`;
            messageDiv.classList.remove('success');
            messageDiv.classList.add('error');
        }
    } catch (error) {
        console.log("Request error:", error);
        messageDiv.innerHTML = `<p>Error: ${error.message}</p>`;
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
