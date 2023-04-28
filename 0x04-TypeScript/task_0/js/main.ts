interface Students{
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const studentsList : Students[] = [
{
    firstName:"Ofome",
    lastName:"Arubayi",
    age:24,
    location:"Lagos"
},
{   
    firstName:"Keme",
    lastName:"Arubayi",
    age:22,
    location:"Lagos"
}
]
const table = document.createElement("table");
const tableBody = document.createElement("tbody");
studentsList.forEach((student) => {

const row = document.createElement("tr");
const firstNameCell = document.createElement("td");
const locationCell = document.createElement("td");

firstNameCell.textContent = student.firstName;
locationCell.textContent = student.location;

row.appendChild(firstNameCell);
row.appendChild(locationCell);
tableBody.appendChild(row);
});
table.appendChild(tableBody);