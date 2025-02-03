let DarkTheme = false;
localStorage.getItem('DarkTheme');

function Theme() {
    if (DarkTheme === false) {
        document.querySelector('.Theme').innerHTML = '<img src="Images/DarkMode.png">';
        document.querySelector('body').classList.add('DarkMode');
        document.querySelector('body').classList.remove('LightMode');
        DarkTheme = true;

        localStorage.setItem('DarkTheme', DarkTheme);
    }
    else {
        document.querySelector('.Theme').innerHTML = '<img src="Images/LightMode.png">';
        document.querySelector('body').classList.remove('DarkMode');
        document.querySelector('body').classList.add('LightMode');
        DarkTheme = false;
    }
}