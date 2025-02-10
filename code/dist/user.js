"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(id, name, email, role, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
    }
    register(email, password) {
        if (this.email === email && this.password === password) {
            return true;
        }
        else {
            return false;
        }
        return true;
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        if (this.email) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.user = user;
