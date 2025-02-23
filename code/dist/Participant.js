"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const user_1 = __importDefault(require("./user"));
class Participant extends user_1.default {
    constructor(id, name, email, password) {
        super(id, name, email, "Participant", password);
    }
    registerForActivity() {
        console.log(`${this.getName()} registered for an activity.`);
    }
    searchActivity(keyword) {
        console.log(`${this.getName()} searched for activities with keyword: ${keyword}`);
        return [`Activity1 - ${keyword}`, `Activity2 - ${keyword}`];
    }
    downloadCertificate(activityId) {
        console.log(`${this.getName()} downloaded certificate for activity ${activityId}.`);
        return `Certificate for Activity ${activityId}`;
    }
}
exports.Participant = Participant;
