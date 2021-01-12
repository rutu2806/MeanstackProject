window.addEventListener("load", () => {

    const pbc = document.querySelector("#parentBlockContainer");
    console.log(pbc);



    let postList = [
        { id: 1, post: "principal" },
        { id: 2, post: "wiseprin" },
        { id: 3, post: "teacher" },
        { id: 4, post: "student" },
    ]
    for (let i = 0; i < postList.length; i++) {
        let item = postList[i];

        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = item.post;

        pbc.insertBefore(newElement, pbc.firstChild);

    }
});