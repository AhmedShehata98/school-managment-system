import { SignupStudentForm, StudentData } from "@/interfaces/IStudent";
import { ITmsDatabase } from "@/interfaces/ITMS";

export class StudentUser {
  constructor(private database: ITmsDatabase) {}

  login(email: string, password: string): Partial<StudentData> | undefined {
    const students = this.database.students.find(
      (student) => student.email === email && student.password === password
    );
    return students;
  }

  signUp(studentData: SignupStudentForm): string {
    try {
      this.database.students.push(studentData);
      return "student signed up successfully .";
    } catch (error: any) {
      throw error.message;
    }
  }
}
