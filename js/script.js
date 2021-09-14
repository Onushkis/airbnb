document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#contentHeader");
const dataFetch =  fetch("./js/master-ab1.json")
    .then((response) => {
      return response.json();
    });
    dataFetch.then((data) => {
      appendData(data);
        console.log(data.ab1.Images.imageurl);
      //   console.log(data.ab1.listItem);
    });
    // .catch((err) => console.log(err));
  let listing = document.querySelector("#unorderedList");
  let image = document.querySelector("#cardImg");
  // image.setAttribute("src",  `${imgSrc}`);

  function appendData(data) {
    header.textContent = data.ab1.Header;
    imgSrc = "./img/" + data.ab1.Images.imageurl;

    data.ab1.Images.forEach(image => {
      let img = document.createElement('img')
      img.setAttribute("src", imgSrc);
      listing.appendChild(img);
    });
    for (let i = 0; i < data.ab1.listItem.length; i++) {
      let item = document.createElement("li");
    //   item.textContent = JSON.stringify(data.ab1.listItem[i]).replace('{', '').replace('}', '').replace(/\"/g, "");
    //   item.textContent = JSON.stringify(data.ab1.listItem[i]).replace(/[{}\"]/g, "");
      item.textContent = data.ab1.listItem[i].featureName + " " + data.ab1.listItem[i].amount;
      item.className = "Article__li";

      
      listing.appendChild(item);
    }
    
  }
  appendData;
});
