export class User {
    private id: string;
    private name: string;
    private email: string;
    private role: string;
    private password: string;
    
    constructor(id: string, name: string, email: string, role: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
    }

    public register(email: string, password: string): boolean {
        if (this.email === email && this.password === password) {
            console.log(`${this.name} registered successfully.`);
            return true;
        }
        console.log(`Registration failed for ${email}.`);
        return false;
    }

    public login(email: string, password: string): boolean {
        if (this.email === email && this.password === password) {
            console.log(`${this.name} logged in successfully.`);
            return true;
        }
        console.log(`Login failed for ${email}.`);
        return false;
    }

    public logout(): boolean {
        if (this.email) {
            console.log(`${this.name} logged out successfully.`);
            return true;
        }
        console.log(`Logout failed.`);
        return false;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }
}

export default User;
