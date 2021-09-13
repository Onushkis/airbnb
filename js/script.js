document.addEventListener("DOMContentLoaded", () => {

    fetch("./json/team.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      appendData(data);
      console.log(data);
    })
    .catch((err) => console.log(err));

  function appendData(data) {
    let mainContainer = document.querySelector("#myData");

    for (let i = 0; i < data.length; i++) {
      let item = document.createElement("li");
      let image = document.createElement("img");
      // item.classList.add("Team__list-item");
      item.className =".Team__dynamic-style";
      // item.classList.remove("Team__list-item");
      // item.setAttribute("class", `${teamDynamicStyle}`)
      item.innerHTML =
        "Navn: " +
        data[i].fornavn +
        " " +
        data[i].efternavn +
        " " +
        '<img src="./img/' +
        data[i].imageLocal +
        '">';
      mainContainer.appendChild(item, image);
    }
  }
  appendData;

    
});