import User from "./user";

export class Participant extends User {
    constructor(id: string, name: string, email: string, password: string) {
        super(id, name, email, "Participant", password);
    }

    public registerForActivity(): void {
        console.log(`${this.getName()} registered for an activity.`);
    }

    public searchActivity(keyword: string): string[] {
        console.log(`${this.getName()} searched for activities with keyword: ${keyword}`);
        return [`Activity1 - ${keyword}`, `Activity2 - ${keyword}`];
    }

    public downloadCertificate(activityId: number): string {
        console.log(`${this.getName()} downloaded certificate for activity ${activityId}.`);
        return `Certificate for Activity ${activityId}`;
    }
}
