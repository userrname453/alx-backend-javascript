interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// Create a style element
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    padding: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #dee2e6;
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #e9ecef;
  }
`;

// Append the style element to the head
document.head.appendChild(style);

// Create the table
const table = document.createElement('table');
const headerRow = table.insertRow();
headerRow.insertCell().textContent = "First Name";
headerRow.insertCell().textContent = "Location";

studentsList.forEach(student => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

// Append the table to the body
document.body.appendChild(table);
