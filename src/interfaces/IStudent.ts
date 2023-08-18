export type StudentData = {
  fullname: string;
  email?: string;
  phone: string;
  password: string;
  birthOfDate: Date;
  gender: "male" | "female";
  grade: number;
  isAttended?: boolean;
  quiz?: [];
};

export type SignupStudentForm = Omit<StudentData, "isAttended" | "quiz">;
export interface IStudent {
  get getStudentProfile(): StudentData;
}
