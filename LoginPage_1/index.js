

const handleFormsTransition = (state) => {
    const registerPanel = document.getElementById('registerPanel');
    const loginPanel = document.getElementById('loginPanel');
    const welcomeLoginPanel = document.getElementById('welcomeLoginPanel');
    const welcomeRegisterPanel = document.getElementById('welcomeRegisterPanel');

    if (state === 'login') {
        loginPanel.style.display = 'block';
        registerPanel.style.display = 'none';

        welcomeLoginPanel.style.display = 'none';
        welcomeRegisterPanel.style.display = 'block';
    }
    else if (state === 'register') {
        loginPanel.style.display = 'none';
        registerPanel.style.display = 'block';

        welcomeLoginPanel.style.display = 'block';
        welcomeRegisterPanel.style.display = 'none';
    }
    else { }
}