function fetchData() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          "Encountered something unexpected: ${response.status} ${response.statusText}"
        );
      }
    })
    .then((data) => {
      let content = document.querySelector(".content");
      let ul = document.createElement("ul");
      content.appendChild(ul);
      let li = document.createElement("li");
      ul.appendChild(li);
      let img = document.createElement("img");
      img.src = data.img;
      li.style.listStyle = "none";
      li.appendChild(img);
    })
    .catch((error) => console.log(error));
}

fetchData();
