export type ITeacherData = {
  _fullname: string;
  _birthOfDate: Date;
  _specialty: string;
  _phoneNumber: string;
  _email: string;
  _sallery: number;
  _gender: "male" | "female";
};
export interface ITeacher {
  _teacherData: ITeacherData | null;
  _studentAttendance: Array<any>;

  set setTeacherInfo(informations: ITeacherData);
  get getTeacherInfo(): ITeacherData;

  setStudentsAttendance(studentName: string, isAvalibale: boolean): void;
  addQuiz(): void;
  getQuiz(): unknown;
}
