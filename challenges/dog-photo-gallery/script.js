let buttonElement = document.createElement("button");
let ulElement = document.createElement("ul");
let liElement = document.createElement("li");
let imgElement = document.createElement("img");

ulElement.appendChild(liElement);
ulElement.appendChild(buttonElement);
document.body.appendChild(ulElement);

liElement.appendChild(imgElement);

buttonElement.setAttribute("id", "button-1");
ulElement.setAttribute("id", "ul");
liElement.setAttribute("id", "li");
imgElement.setAttribute("id", "img");

buttonElement.textContent = "Image"

let button_1 = document.getElementById("button-1");
buttonElement.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response)
    {if (response.status >=200 && response.status <=299)
        {
            return response.json();
        }
        else {
            throw new Error (`Error: ${response.status} ${response.statusText}`);
        }
    })

        .then(function(image)
        {
            imgElement.src =image.message;
        });
    })

