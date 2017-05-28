var employee = {
    name: "Dhivya Bharathi",
    age: 26,
    salary: 30000,
    address: {
        city: "Chennai",
        state: "Tamilnadu",
        pin: 600073
    },
}

console.log("Name: " + employee['name'] + "\nAge: " + employee['age'] + "\nSalary: " + employee['salary'] + "\nCity: " + employee.address.city + "\nState: " + employee.address.state + "\nPincode: " + employee.address.pin);
