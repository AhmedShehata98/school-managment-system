import { ITmsDatabase } from "@/interfaces/ITMS";
import { ITeacherData, TeacherSignupForm } from "@/interfaces/ITeacher";

export class TeacherUser {
  constructor(private database: ITmsDatabase) {}

  login(email: string, password: string): ITeacherData | undefined {
    const teacher = this.database.teachers.find(
      (teacher) => teacher.email === email && teacher.password === password
    );
    return teacher;
  }
  signup(TeacherSignupForm: TeacherSignupForm): string {
    try {
      this.database.teachers.push(TeacherSignupForm);
      return "teacher signed up successfully .";
    } catch (error: any) {
      throw error.message;
    }
  }
}
