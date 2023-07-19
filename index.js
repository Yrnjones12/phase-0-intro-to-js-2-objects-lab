//let employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }

  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  let destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
console.log(destructivelyUpdatedEmployee);

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  let deletedEmployee = deleteFromEmployeeByKey(employee, "name");
console.log(deletedEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  let destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(destructivelyDeletedEmployee);