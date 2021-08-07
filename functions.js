// function collectFirstName(employees) {
//     var firstNames = employees.map(e => e.firstName );
//        return firstNames;
//    }

function addEventListener() {
  const saveBtn = document.getElementById("saveButton");
  saveBtn.addEventListener("click", () => {
    saveTeamMember();
  });

  const getBtn = document.getElementById("get");
  getBtn.addEventListener("click", () => {
    /* Aici e doar promise-u */
    console.log("team promise is: ", getTeamMembers());

    /* aici is rezultatele */
    getTeamMembers().then((team) => {
      console.log("actual team is: ", team);
    });
  });
}

function getTeamMembers() {
    return fetch("teams.json").then((response) => {
      return response.json();
    });
  }

function saveTeamMember() {
  const group = document.getElementsByName("group")[0];
  const members = document.getElementsByName("members")[0];
  const name = document.getElementsByName("name")[0];
  const url = document.getElementsByName("url")[0];
  
  let table = document.getElementById("list");

  let row = table.insertRow(0);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  
  cell1.innerHTML = group.value;
  cell2.innerHTML = members.value;
  cell3.innerHTML = name.value;
  cell4.innerHTML = url.value;
}



//   console.log(group.value, members.value, name.value, url.value); 