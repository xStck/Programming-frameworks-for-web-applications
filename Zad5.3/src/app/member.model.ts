export class Member {
    name: string;
    mail: string;
    phone: string;
    payment: string;
    membershipDate: Date;
    membershipType: string;
    exercises: string[];
    constructor(name: string, mail: string, membershipDate: Date, membershipType: string,
        exercises: string[], phone: string, payment: string) {
        this.name = name;
        this.mail = mail;
        this.membershipDate = membershipDate;
        this.membershipType = membershipType;
        this.payment = payment;
        this.phone = phone;
        this.exercises = exercises;
    }
}
