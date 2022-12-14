//Array of employee
let employees = [
  {
    id: 1,
    first_name: "Ajinkya",
    last_name: "Batki",
    email: "ajinkya@gmail.com",
    gender: "male",
    ip_address: "160.192.178.23",
  },
  {
    id: 2,
    first_name: "Omnkar",
    last_name: "Lolge",
    email: "omkar@gmail.com",
    gender: "male",
    ip_address: "160.182.178.23",
  },
  {
    id: 3,
    first_name: "Shruti",
    last_name: "Mannikeri",
    email: "shruti@gmail.com",
    gender: "female",
    ip_address: "160.172.178.23",
  },

  {
    id: 4,
    first_name: "Jenny",
    last_name: "Doe",
    email: "jenny@gmail.com",
    gender: "female",
    ip_address: "160.192.168.23",
  },
  {
    id: 5,
    first_name: "Aiman",
    last_name: "shahid",
    email: "aiman@gmail.com",
    gender: "female",
    ip_address: "160.152.178.23",
  },

  {
    id: 6,
    first_name: "Lavish",
    last_name: "Jain",
    email: "lavish@gmail.com",
    gender: "male",
    ip_address: "160.152.148.23",
  },

  {
    id: 7,
    first_name: "Pranav",
    last_name: "Bansal",
    email: "pranav@gmail.com",
    gender: "male",
    ip_address: "160.152.128.23",
  },
  {
    id: 8,
    first_name: "Divyesh",
    last_name: "Bhuva",
    email: "divyesh@gmail.com",
    gender: "male",
    ip_address: "160.152.138.23",
  },
  {
    id: 9,
    first_name: "Tejas",
    last_name: "Mahajan",
    email: "tejas@gmail.com",
    gender: "male",
    ip_address: "160.132.178.23",
  },
  {
    id: 10,
    first_name: "Nancy",
    last_name: "flora",
    email: "nancy@gmail.com",
    gender: "female",
    ip_address: "160.152.178.23",
  },
];

//For All employees data
let allEmpButton = document.querySelector("#all-emp-btn");
allEmpButton.addEventListener("click", function () {
  //display function
  displayEmployees(employees);
});

//For Male employees data
let maleEmpButton = document.querySelector("#male-emp-btn");
maleEmpButton.addEventListener("click", function () {
  let maleEmployee = employees.filter(function (employee) {
    return employee.gender === "male";
  });
  // console.log(maleEmployee);
  displayEmployees(maleEmployee);
});

//For Female employees data
let femaleEmpButton = document.querySelector("#female-emp-btn");
femaleEmpButton.addEventListener("click", function () {
  let femaleEmployee = employees.filter(function (employee) {
    return employee.gender === "female";
  });
  // console.log(maleEmployee);
  displayEmployees(femaleEmployee);
});

//Search functionality
let searchBox = document.querySelector("#searchbox");
searchBox.addEventListener("keyup", function () {
  //take input from searchBox
  let textEntered = searchBox.value;
  // console.log(textEntered);

  //filter the data using the input
  let filteredEmployees = []; //create empty array
  if (textEntered !== "") {
    filteredEmployees = employees.filter(function (employee) {
      return (
        employee.first_name.toLowerCase().includes(textEntered.toLowerCase()) ||
        employee.last_name.toLowerCase().includes(textEntered.toLowerCase()) ||
        employee.email.toLowerCase().includes(textEntered.toLowerCase())
      );
    });
    displayEmployees(filteredEmployees);
  }
  else{
    displayEmployees(employees);
  }
});

//Arrow function with name displayEmployees
let displayEmployees = (employees) => {
  //select table body using id
  let tableBody = document.querySelector("#table-body");

  //clear the table body
  let tableRow = "";
  for (let employee of employees) {
    tableRow += `
        <tr>
        <td>${employee.id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.gender}</td>
        <td>${employee.email}</td>
        <td>${employee.ip_address}</td>
        </tr>
        `;
    tableBody.innerHTML = tableRow;
  }
};
