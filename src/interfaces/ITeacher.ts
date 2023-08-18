export type ITeacherData = {
  fullname: string;
  birthOfDate: Date;
  specialty: string;
  phone: string;
  email: string;
  password: string;
  gender: "male" | "female";
};

export type TeacherSignupForm = ITeacherData;
export interface ITeacher {
  _teacherData: ITeacherData | null;
  _studentAttendance: Array<any>;

  set setTeacherInfo(informations: ITeacherData);
  get getTeacherInfo(): ITeacherData;

  setStudentsAttendance(studentName: string, isAvalibale: boolean): void;
  addQuiz(): void;
  getQuiz(): unknown;
}
