let callAjax = function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {

        const refJson = JSON.parse(xhr.responseText);

        jsonDomOperation(refJson);
    };
    xhr.send();
};

let jsonDomOperation = function (refJson){
    console.log(refJson);

    let parent= document.querySelector("#parent");

    for(let i = 0; i < refJson.length; i++){
        let item = refJson[i];

        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = item.FirstName + " "+ item.LastName;

        parent.insertBefore(newElement,parent.firstChild);
    }
};

let callAjaxXML = function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () =>{

        const xmldoc= xhr.responseXML;

        xmlDomHandler(xmldoc);
    };
    xhr.send();
};

let xmlDomHandlerV1= (xmlDoc) => {
    const parentElement = xmlDoc.querySelector("ArrayofAuthor");
    console.log(parentElement);

    for(let i= 0; i< parentElement.children.length; i++){
        let authorItem = parentElement.children[i];

        let firstName = authorItem.children[0].innerHTML;
        let LastName = authorItem.children[3].innerHTML;

        let parent = document.querySelector("#parent");
        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = firstName + " " + lastName;
  
      parent.insertBefore(newElement, parent.firstChild);
    }
};

let xmlDomHandler = (xmlDoc) => {
    const authorList = xmlDoc.querySelectorAll("Author");
  
    for (let i = 0; i < authorList.length; i++) {
      let authorItem = authorList[i];
  
      let firstName = authorItem.children[0].innerHTML;
      let lastName = authorItem.children[3].innerHTML;
  
      // HTML DOM
      let parent = document.querySelector("#parent");
      let newElement = parent.children[0].cloneNode(true);
  
      newElement.innerHTML = firstName + " " + lastName;
  
      parent.insertBefore(newElement, parent.firstChild);
    }
  };