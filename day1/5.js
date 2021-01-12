window.addEventListener("load", () => {

    const pbc = document.querySelector("#parentBlockContainer");
    console.log(pbc);

    //   assume data is coming from ServiceWorkerRegistrationhow we will get it= using AJAX :: CALL AJAX :: JSON/XML :: API

    let postList = [
        { id: 1, post: "Javascript" },
        { id: 2, post: "HTML" },
        { id: 3, post: "CSS" },
        { id: 4, post: "DOM" },
        { id: 4, post: "AJAX" },
        { id: 4, post: "JSON" },
        { id: 4, post: "PHP" },
    ]
    for (let i = 0; i < postList.length; i++) {
        let item = postList[i];

        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = item.post;

        pbc.insertBefore(newElement, pbc.firstChild);

    }
});