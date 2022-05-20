let params = (new URL(document.location)).searchParams;
let name = params.get("dataId");
console.log(name);
let row = document.createElement("div")

let body = document.querySelector("body")

fetch("https://jsonplaceholder.typicode.com/photos/")
    .then((resp) => resp.json())
    .then((datas) => {
        row.innerHTML = `<div class="containers">
        <div class="container">
        <div class="row mt-5">
            <div class="col-lg-4">
                <div class="images">
                    <img src="${datas.url}"
                        alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="content">
                    <div class="title">
                        <p>Common Good</p>
                        <h1>Long-Sleeve Double Crew Shirt</h1>
                    </div>
                    <div class="icons mt-4">
                        <ul class="d-flex">
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-regular fa-star"></i></li>
                            <li><i class="fa-regular fa-star"></i></li>
                            <span>(No reviews yet)</span>
                            <p>Write a Review</p>
                        </ul>
                    </div>
                    <div class="price">
                        <h3>$230.00</h3>
                    </div>
                    <div class="size mt-4">
                        <i class="fa-regular fa-image"></i> <span>Size Chart</span>
                    </div>
                    <div class="infos mt-4 d-flex">
                        <div class="left">
                            <ul>
                                <li>${datas.title}</li>
                                <li>aa</li>
                                <li>Weight:</li>
                                <li>Shipping:</li>
                            </ul>
                        </div>
                        <div class="right">
                            <ul>
                                <li>Common Good</li>
                                <li>CGLD</li>
                                <li>1.00 KGS</li>
                                <li>Calculated at Checkout</li>
                            </ul>
                        </div>
                        <hr>
                    </div>
                    <div class="quatity">
                        <p>Quantity:</p>
                        <input type="number" min="1" max="50" placeholder="1">
                    </div>
                    <div class="buttons mt-4">
                        <button type="button" class="btn btn-warning btn-lg">Add to cart</button>
                        <button type="button" class="btn btn-info btn-lg">Add to Wish List</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    })

    body.append(row)