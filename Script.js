const API_URL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

async function getAPI(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  if (response) {
    hideloader();
  }
  show(data);
}

getAPI(API_URL);
function hideloader() {
  alert("loading");
}

function myFunction() {
  var response = "Hi";
  alert(response);
}

function show(data) {
  let tab = `<tr>
          <th>Name</th>
          <th>Quote</th>
         </tr>`;
  for (let r of data.list) {
    tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.quote}</td>          
</tr>`;
  }
}
