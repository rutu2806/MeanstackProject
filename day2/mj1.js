// function callajax() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             console.log(xhr.responseText);
//             document.querySelector('#box').textContent = xhr.responseText;

//         }
//     }
//     xhr.open('get', "https://reqres.in/api/users?page=2", true);
//     xhr.send();
// }
// data taken from the server is in the form of string ,but that string can be xml or json,and it can be coverted into jason format.
//JSON.parse

// let str ='{"id": 1}'-json format
//now we have to convert data into json
//syntax is ======const refjson =JSON.parse(xhr.responseText);
//use following code for converting.

function callAjax() {

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);

            document.querySelector("#box").textContent = xhr.responseText;

            const refjson = JSON.parse(xhr.responseText);
            console.log(refjson);

            document.querySelector("#box").textContent = refjson.data[0].email;

        }
    }

    xhr.open('GET', "https://reqres.in/api/users?page=2", true);
    xhr.send();
}