// index.ts
import User from "./user";
import { Instructor } from "./Instructor";
import { Participant } from "./Participant";

console.log("=== Testing User Class ===");
// สร้าง User
const user1 = new User("U001", "John", "john@example.com", "User", "1234");
// ทดสอบ register, login, logout
console.log("Register (should be true):", user1.register("john@example.com", "1234"));
console.log("Login (should be true):", user1.login("john@example.com", "1234"));
console.log("Logout (should be true):", user1.logout());

console.log("\n=== Testing Instructor Class ===");
// สร้าง Instructor
const instructor1 = new Instructor("I001", "Alice", "alice@example.com", "passAlice");
// ทดสอบ register, login, logout
console.log("Register (should be true):", instructor1.register("alice@example.com", "passAlice"));
console.log("Login (should be true):", instructor1.login("alice@example.com", "passAlice"));
// Instructor สร้าง activity, อนุมัติผู้เข้าร่วม, ออกใบประกาศ, ค้นหา activity
instructor1.createActivity();
instructor1.approveParticipant();
instructor1.issueCertificate();
instructor1.searchActivity("Cooking");
// ทดสอบ logout
console.log("Logout (should be true):", instructor1.logout());

console.log("\n=== Testing Participant Class ===");
// สร้าง Participant
const participant1 = new Participant("P001", "Bob", "bob@example.com", "passBob");
// ทดสอบ register, login
console.log("Register (should be true):", participant1.register("bob@example.com", "passBob"));
console.log("Login (should be true):", participant1.login("bob@example.com", "passBob"));
// Participant ลงทะเบียนกิจกรรม, ค้นหา, ดาวน์โหลดใบประกาศ
participant1.registerForActivity();
participant1.searchActivity("Yoga");
participant1.downloadCertificate(123);
// ทดสอบ logout
console.log("Logout (should be true):", participant1.logout());
