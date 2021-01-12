function post() {

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {

            let refjson = JSON.parse(xhr.responseText);
            console.log(refjson);

            call(refjson);
        }
    };


    xhr.open('get', "https://reqres.in/api/users?page=2", true);
    xhr.send();

};



let call = function (refjson) {
    console.log(refjson);
    let a = document.querySelector("#grandpa");
    for (i = 0; i < refjson.data.length; i++) {

        let item = refjson.data[i];
        let newElement = a.children[0].cloneNode(true);
        newElement.innerHTML = item.first_name + " " + item.email;

        a.insertBefore(newElement, a.firstChild);
    }
}