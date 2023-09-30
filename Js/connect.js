
function storeUserData(email, password) {
    const user = {
        email: email,
        password: password,
    };
    localStorage.setItem('user', JSON.stringify(user));
}


function checkUserCredentials(email, password) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        return user.email === email && user.password === password;
    }
    return false;
}


document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const email = emailInput.value;
    const password = passwordInput.value;

    if (checkUserCredentials(email, password)) {
        alert('Connexion réussie');
        window.location.href = "todolist.html";
    } else {
        alert('Échec de la connexion');
    }
});
