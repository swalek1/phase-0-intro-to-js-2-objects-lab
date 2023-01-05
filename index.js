const employee = {}
employee.name = "Jim"
employee.streetAddress = "12 Broadway"


function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = { ...employee};
   newEmployee.name = "Sam";
   newEmployee.streetAddress = "11 Broadway"
    return newEmployee
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee.streetAddress = "12 Broadway"
    return employee
 }
 function deleteFromEmployeeByKey(employee, name, value) {
 const newEmployee = { ...employee};
 delete newEmployee.name
 return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}