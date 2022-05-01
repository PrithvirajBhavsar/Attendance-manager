class User {
  static logout() {
    localStorage.setItem("name", "");
    window.location.href = "login.html";
  }
}

class UIData {
  static loadSubjects() {
    const arr = Subject.getArr();
    arr.forEach((element) => {
      const list = document.getElementById("subjectlist");

      const row = document.createElement("li");
      row.className =
        "list-group-item d-flex justify-content-between align-items-start";

      row.innerHTML = `
            <div class="ms-2 me-auto">
            <div class="fw-bold">${element.name}</div>
            <span class="text-danger fw-bold">Attended : ${element.presents}</span> &nbsp;&nbsp; <span class="text-primary fw-bold">Total Classes : ${element.totalclasses}</span>
            </div>
            <span class="w-50">
            
            <div class="progress w-100">
                            <div class="progress-bar" role="progressbar" style="width: ${element.percentage}%;" aria-valuenow="50"
                                aria-valuemin="0" aria-valuemax="100">Over all ${element.percentage}%</div>
                        </div>
            </span>
            `;

      list.appendChild(row);
    });
  }

  static getAlloverPercentage(){
      const arr = Subject.getArr();
      const sum = arr.reduce((partialsum,a) => a.percentage + partialsum,0);
      return (sum/arr.length).toFixed(0);
  }
}

class Subject {
  constructor(name, presents, totalclasses) {
    this.name = name;
    this.presents = presents;
    this.totalclasses = totalclasses;
    this.percentage = (presents / totalclasses) * 100;
  }

  static setArr(arr, subject) {
    console.log(subject);
    arr.push(subject);
    const allSubjects = JSON.stringify(arr);
    localStorage.setItem("allSubjects", allSubjects);
  }

  static getArr() {
    const allSubjects = localStorage.getItem("allSubjects");
    const arr = JSON.parse(allSubjects);
    return arr;
  }
}
