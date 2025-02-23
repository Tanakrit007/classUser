"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const user_1 = __importDefault(require("./user"));
class Instructor extends user_1.default {
    constructor(id, name, email, password) {
        super(id, name, email, "Instructor", password);
    }
    createActivity() {
        console.log(`${this.getName()} created a new activity.`);
    }
    approveParticipant() {
        console.log(`${this.getName()} approved a participant.`);
    }
    issueCertificate() {
        console.log(`${this.getName()} issued a certificate.`);
        return "Certificate Issued";
    }
    searchActivity(keyword) {
        console.log(`${this.getName()} searched for activities with keyword: ${keyword}`);
        return `Activities matching ${keyword}`;
    }
}
exports.Instructor = Instructor;
