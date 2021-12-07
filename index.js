// Write your solution in this file!
const employee={
    name:'Sam',
    streetAddress:'11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee ={...employee};
    newemployee[key] = value;
    return newemployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
      employee[key]=value;
      return employee;
  }

function deleteFromEmployeeByKey(employee, key){
    const deletefromemployeebykey=Object.assign({},employee);
    delete deletefromemployeebykey[key];
    return deletefromemployeebykey;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
