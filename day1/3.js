// const pbc1 = document.querySelector("#parentBlockConatainer");
// console.log(pbc1);


// *Event  => load
// *Listener => Call back (Arrow or Annonymous)

// window.addEventListener("load", () => {
//     console.log("I.AM.CALLED.ONCE.THE.PAGE.LOADS");
// });

// We can read BODY Element Once the page is loaded

window.addEventListener("load", () => {

    const pbc = document.querySelector("#parentBlockContainer");
    console.log(pbc);



    for (let i = 0; i < 20; i++) {
        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = "Rutuja" + i;

        pbc.insertBefore(newElement, pbc.firstChild);

    }
});
// Event Listener ## onclick = likeMe()