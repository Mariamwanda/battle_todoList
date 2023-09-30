
function storeUserData(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password,
    };
    localStorage.setItem('user', JSON.stringify(user));
}


function checkUserExists(email) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        return user.email === email;
    }
    return false;
}


document.getElementById('registerButton').addEventListener('click', function (e) {
    e.preventDefault();
    const usernameInput = document.getElementById('userInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!checkUserExists(email)) {
        storeUserData(username, email, password);
        alert('Inscription réussie');
        window.location.href = "./Html/connexion.html";
    } else {
        alert('Un utilisateur avec cet email existe déjà.');
    }
});
