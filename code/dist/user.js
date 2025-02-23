"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, role, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
    }
    register(email, password) {
        if (this.email === email && this.password === password) {
            console.log(`${this.name} registered successfully.`);
            return true;
        }
        console.log(`Registration failed for ${email}.`);
        return false;
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log(`${this.name} logged in successfully.`);
            return true;
        }
        console.log(`Login failed for ${email}.`);
        return false;
    }
    logout() {
        if (this.email) {
            console.log(`${this.name} logged out successfully.`);
            return true;
        }
        console.log(`Logout failed.`);
        return false;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
}
exports.User = User;
exports.default = User;
