import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from './employee.model';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) { }
 
  getData(){
    this.employeeList = this.firebase.list('HCS/Role');
    return this.employeeList;
  }
 
  insertEmployee(employee : Employee)
  {
    this.employeeList.push({
      RoleId:employee.RoleId,
      RoleName:employee.RoleName
    });
  }
 
  updateEmployee(employee : Employee){
    this.employeeList.update(employee.$key,
      {
        RoleId:employee.RoleId,
        RoleName:employee.RoleName
      });
  }
 
  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }
 
}