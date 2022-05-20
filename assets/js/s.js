

fetch("https://jsonplaceholder.typicode.com/photos/")
    .then((resp) => resp.json())
    .then((data) => {
        let container = document.querySelector(".container");
        let row = document.createElement("div");
        row.className = "row justify-content-between";
        data.forEach((datas) => {
            let card = document.createElement("div");
            let img = document.createElement("img")
            let card_body = document.createElement("div")
            let card_title = document.createElement("h5")
            let card_text = document.createElement("p")
            let link = document.createElement("a")
            var tag = document.createElement("a")

            card.className = "card";
            card.style.width = "18rem";
            img.className = "card-img-top";
            card_body.className = "card-body";
            card_title.className = "card-title";
            card_text.className = "card-text";
            link.className = "btn btn-primary button link";
            link.target = "_blank";
            // link.id = "data-id"
            tag.className = "btn btn-primary button";
            tag.target = "_blank";


            img.src = `${datas.url}`
            card_title.innerText = `${datas.title}`;
            card_text.innerText = "Some quick example text to build on the card title and make up the bulk of the"
            link.innerText = "addbasket";
            tag.innerText = "basket";
            tag.href = `../praduct.html?dataid${datas.id}`

            card_body.appendChild(card_title);
            card_body.appendChild(card_text);
            card_body.appendChild(link);
            card_body.appendChild(tag)
            card.appendChild(img);
            card.appendChild(card_body);
            row.appendChild(card)



        });
        container.appendChild(row)


    })

let link = document.querySelectorAll(".link")

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("basket") !== null) {
        calculate();
    }
});

let basket = [];

link.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault()

        if (localStorage.getItem("basket") !== null) {
            basket = JSON.parse(localStorage.getItem("basket"));
        }

        let img = this.parentNode.previousElementSibling.src;
        let title = this.parentNode.querySelector(".card-title").innerText
        let text = this.parentNode.querySelector(".card-text").innerText
        let id = this.getAttribute("id");
        let existent = basket.find((x) => x.id == id)

        if (existent == undefined) {
            let praduct = {
                id,
                img,
                title,
                text,
                count: 1,
            }
            basket.push(praduct)
        } else {
            existent.count++;
        }
        localStorage.setItem("basket", JSON.stringify("basket"))
        clacul()
    })
})
function clacul() {
    let basket = JSON.parse(localStorage.getItem("basket"))
    let count = basket.reduce((t, val) => {
        return (t += val.count);
    }, 0)
    let countval = document.querySelector("sup")
    countval.innerText = count;
}
