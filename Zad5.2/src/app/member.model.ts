export class Member {
    name: string;
    mail: string;
    membershipDate: Date;
    membershipType: string;
    exercises: string[];
    constructor(name: string, mail: string, membershipDate: Date, membershipType: string,
        exercises: string[]) {
        this.name = name;
        this.mail = mail;
        this.membershipDate = membershipDate;
        this.membershipType = membershipType;
        this.exercises = exercises;
    }
}
