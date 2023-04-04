const employee = {
    name: 'ahmed',
    streetAddress: 'street 1'
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    return {...obj,
    [key]:value}
}
let employees = updateEmployeeWithKeyAndValue(employee, "name", 'Sam')
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value
   return employee 
}
employees = destructivelyUpdateEmployeeWithKeyAndValue(employee,'name','sam')
function deleteFromEmployeeByKey(employee, key){
    const newEmployee ={...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}