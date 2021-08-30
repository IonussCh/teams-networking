// function collectFirstName(employees) {
//     var firstNames = employees.map(e => e.firstName );
//        return firstNames;
//    }

function initEvents() {
  const saveBtn = document.getElementById("saveButton");
  saveBtn.addEventListener("click", () => {
    saveTeamMember();
  });

  const getBtn = document.getElementById("get");
  getBtn.addEventListener("click", () => {
    /* aici e doar promise-u */
    console.log("team promise is: ", getTeamMembers());

    /* aici is rezultatele */
    getTeamMembers().then((team) => {
      console.log("actual team is: ", team);
    });
  });
}
initEvents();

function getTeamMembers() {
  return fetch("http://localhost:3000/teams-json").then((response) => {
    return response.json();
  });
}

function saveTeamMember() {
  const promotion = document.getElementsByName("promotion")[0];
  const members = document.getElementsByName("members")[0];
  const name = document.getElementsByName("name")[0];
  const url = document.getElementsByName("url")[0];

  console.log("promotion", promotion);

  let table = document.getElementById("list");

  let row = table.insertRow(0);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = promotion.value;
  cell2.innerHTML = members.value;
  cell3.innerHTML = name.value;
  cell4.innerHTML = url.value;
}

function saveTeam(team) {
  fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(team),
  })
    .then((r) => r.json())
    .then((status) => {
      console.warn("status after add", status);
    });
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then((r) => r.json())
    .then((teams) => {
      allTeams = teams;
      displayTeams(teams);
    });
}

function displayTeams(teams) {
  const html = getTeamsAsHTML(teams);
  document.querySelector("#list tbody").innerHTML = html;
}

function getTeamsAsHTML(teams) {
  return teams
    .map((team) => {
      console.log("team", team);
      return `<tr>
        <td>${team.promotion}</td>
        <td>${team.members}</td>
        <td>${team.name}</td>
        <td>${team.url}</td>
        <td>...</td>`;
    })
    .join("");
}

loadTeams();

//   console.log(group.value, members.value, name.value, url.value);
