
function post() {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
            document.querySelector("#box").textContent = xhr.responseText;
        }
    }

    xhr.open('GET', 'mj.txt', true);
    xhr.send();

}