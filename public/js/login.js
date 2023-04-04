
const invalidInfo = document.getElementById("invalid-info");

window.addEventListener('load', (e) => {

    const currentUrl = window.location.href;
    let indexOf = currentUrl.indexOf("=");
    let invalid = currentUrl.substring(indexOf+1);

    if(invalid === 'true') {
        invalidInfo.classList.remove('hide');
    }

});