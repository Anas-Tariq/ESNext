let userName = document.getElementById("user-name");
let tabContainer = document.querySelector(".tabs");

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("info-section");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("links-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log(response);
    response
        .json()
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let newItem = document.createElement("li");
                let newContentContainer = document.createElement("div");

                newItem.innerText = data[i].name;
                newItem.classList.add("links-tab");
                newItem.addEventListener("click", (event) => {
                    console.log(event.target);
                    async function getPost() {
                        try {
                            let res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
                            let data = await res.json();

                            console.log(data);
                        } catch (err) {
                            console.log(err);
                        }
                    }
                });

                let idContainer = (newContentContainer.id = `item-${i}`);
                idContainer.innerText = ``;
                // newContentContainer.classList.add(`info-section`);
                userName.appendChild(newItem);
                tabContainer.appendChild(newContentContainer);
            }
        })
        .catch((err) => console.log(err));
});

// fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
//     response.json().then((data) => {
//         for (let i = 0; i < data.length; i++) {
//             console.log();
//         }
//     });
// });

let productContainer = document.querySelector(".products");

async function products() {
    try {
        let res = await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products");
        let data = await res.json();
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            productContainer.innerHTML += `
            <div class="card">
                <div class="img-container">
                    <img src="${data[i].image}" alt="" />
                </div>
                <div class="content-container">
                    <h4 class="product-name">${data[i].name}</h4>
                    <span class="product-price">$${data[i].price}</span>
                </div>
            </div>
            `;
        }
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

products();
