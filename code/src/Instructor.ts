import User from "./user";

export class Instructor extends User {
    constructor(id: string, name: string, email: string, password: string) {
        super(id, name, email, "Instructor", password);
    }

    public createActivity(): void {
        console.log(`${this.getName()} created a new activity.`);
    }

    public approveParticipant(): void {
        console.log(`${this.getName()} approved a participant.`);
    }

    public issueCertificate(): string {
        console.log(`${this.getName()} issued a certificate.`);
        return "Certificate Issued";
    }

    public searchActivity(keyword: string): string {
        console.log(`${this.getName()} searched for activities with keyword: ${keyword}`);
        return `Activities matching ${keyword}`;
    }
}
