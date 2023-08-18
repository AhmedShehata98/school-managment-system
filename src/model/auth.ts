import { ITmsDatabase } from "@/interfaces/ITMS";
import { StudentUser } from "./studentUser";
import { SignupStudentForm, StudentData } from "@/interfaces/IStudent";
import { TeacherUser } from "./teacherUser";
import { ITeacherData, TeacherSignupForm } from "@/interfaces/ITeacher";

export class authentication {
  /**
   *
   */
  constructor(private database: ITmsDatabase) {}

  loginStudentUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Partial<StudentData> | undefined {
    const userModel = new StudentUser(this.database);
    return userModel.login(email, password);
  }

  signupStudentUser(studentData: SignupStudentForm): string {
    const userModel = new StudentUser(this.database);
    return userModel.signUp(studentData);
  }
  loginTeachertUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): ITeacherData | undefined {
    const userModel = new TeacherUser(this.database);
    return userModel.login(email, password);
  }

  signupTeacherUser(teacherData: TeacherSignupForm): string {
    const userModel = new TeacherUser(this.database);
    return userModel.signup(teacherData);
  }
}
