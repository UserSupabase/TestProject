window.addEventListener('load', () => {
    const funcMod = (element) => {
        const res = 
        window.document.getElementById(element) || 
        window.document.querySelector(element);
        return res;
    };
    const footer = funcMod('.footer');
    const hrefFooter = footer.querySelector('p');
    hrefFooter.onclick = () => {
        loginBlock();
    };
    const modal = funcMod('.modal');
    const buttonModal = funcMod('.button');
    const showModal = () => {
        modal.style.opacity = 1;
        modal.style.zIndex = 1;
    };
    const hideModal = () => {
        modal.style.opacity = 0;
        modal.style.zIndex = -1;
    };
    buttonModal.onclick = () => {
        hideModal();
        loginBlock();
    };
    const form = funcMod('form');
    const fullname = form[0];
    fullname.onkeydown = (event) => {
        if (!isNaN(parseInt(event.key))) {
            return false;
        }
        // isNaN - проверка на не число
        // parseInt - функция превращение в целое число
    };
    const username = form[1];
    username.onkeydown = (event) => {
        const key = event.key;
        if (key === ',' || key === '.') event.preventDefault();
    };
    const registration = (event) => {
        event.preventDefault(); // отмена действий в браузере
        if (!form[0].value) {
            form[0].style.borderColor = '#DD3142';
            alert('Enter Full Name');
        } else if (!form[1].value) {
            form[0].style.borderColor = '#C6C6C4';
            form[1].style.borderColor = '#DD3142';
            alert('Enter Username');
        } else if (!form[2].value) {
            form[1].style.borderColor = '#C6C6C4';
            form[2].style.borderColor = '#DD3142';
            alert('Enter Email');
        } else if (!form[3].value) {
            form[2].style.borderColor = '#C6C6C4';
            form[3].style.borderColor = '#DD3142';
            alert('Enter Password');
        } else if (form[3].value.length < 8) {
            form[3].style.borderColor = '#DD3142';
            alert('Password must be at least 8 characters long');
        } else if (form[3].value !== form[4].value) {
            form[3].style.borderColor = '#C6C6C4';
            form[4].style.borderColor = '#DD3142';
            alert('Password mismatch');
        } else if (!form[5].checked) {
            form[4].style.borderColor = '#C6C6C4';
            alert("Yo dont't agree to our Terms of Service and Privacy Statement");
        } else {
            form[4].style.borderColor = '#C6C6C4';
            form.reset();
            showModal();
        }
    };
    form.addEventListener('submit', registration);
    const authorization = (event) => {
        event.preventDefault();
        if (!form[0].value) {
            form[0].style.borderColor = '#DD3142';
            alert('Enter Username');
        } else if (!form[1].value) {
            form[0].style.borderColor = '#C6C6C4';
            form[1].style.borderColor = '#DD3142';
            alert('Enter Password');
        } else if (form[1].value.length < 8) {
            form[1].style.borderColor = '#DD3142';
            alert('Password must be at least 8 characters long');
        } else {
            alert(`Welcom! ${form[0].value}`);
            window.location.reload();
        }
    };
    const buttonSignIn = funcMod('button');
    const loginBlock = () => {
        const header = funcMod('.header');
        header.querySelector('h1').innerHTML = 'Login in the System';
        header.querySelector('p').remove();
        buttonSignIn.innerHTML = 'Sign In';
        funcMod('fullname').remove();
        funcMod('email').remove();
        funcMod('repeat').remove();
        funcMod('checkbox').remove();
        hrefFooter.remove();
        form.removeEventListener('submit', registration);
        form.addEventListener('submit', authorization);
    };
});