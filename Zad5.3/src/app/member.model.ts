export class Member {
    name: string;
    phone: string;
    payment: string;
    membershipDate: Date;
    membershipType: string;
    exercises: string[];
    constructor(name: string, membershipDate: Date, membershipType: string,
        exercises: string[], phone: string, payment: string) {
        this.name = name;
        this.membershipDate = membershipDate;
        this.membershipType = membershipType;
        this.payment = payment;
        this.phone = phone;
        this.exercises = exercises;
    }
}
