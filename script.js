console.log("SPQR");
const emperors_list = document.querySelector(".emperors-list");

loadEmperors();
async function loadEmperors() {
  //const res = await fetch("http://localhost:8081/api/emperors");
  const res = await fetch(
    "https://roman-emperors-api-17ekvx.a671fi.gbr-e1.cloudhub.io/api/emperors"
  );
  const data = await res.json();
  console.log(data);
  createEmperorsList(data);
}

function createEmperorsList(dataArray) {
  const htmlArr = dataArray.map(
    (emperor) => `<li class="emperor">
        <span class="emperor-name">${emperor.name}</span>
        <p>
            ${emperor.biography}
        </p>
        </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  console.log(html);
  emperors_list.insertAdjacentHTML("afterbegin", html);
}
