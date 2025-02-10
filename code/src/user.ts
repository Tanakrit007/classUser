export class user {
    private id : string;
    private name : string;
    private email : string;
    private role : string
    private password : string
    
    constructor(id: string, name: string, email: string, role: string, password : string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
    }
    public register(email: string, password: string) : boolean {
        if(this.email === email && this.password === password){
            return true
        } 
        else{
            return false;
        }
        return true
    }
    public login (email: string, password: string) : boolean {
        if(this.email === email && this.password === password){
            return true
        } 
        else{
            return false;
        }
    }
    public logout() : boolean {
        if (this.email){
            return true;
        }
        else{
            return false;
        }
    }
}