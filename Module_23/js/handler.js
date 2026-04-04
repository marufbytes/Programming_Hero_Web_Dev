document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Text updated';
    })

document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInforEl = document.getElementById('user-info');
        userInforEl.innerText = "Login successfully";
    })