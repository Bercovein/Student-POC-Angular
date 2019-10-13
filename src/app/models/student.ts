export class Student {
    
    studentId: number;
    lastName: string;
    firstName: string;
    dni: string;
    email: string;
    address: string;

    constructor(dni,firstName,lastName,email,address){
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }
}