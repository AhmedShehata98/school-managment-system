import { ITeacher, ITeacherData } from "./../interfaces/ITeacher";
export class Teacher implements ITeacher {
  setStudentsAttendance(studentName: string, isAvalibale: boolean): void {
    throw new Error("Method not implemented.");
  }
  addQuiz(): void {
    throw new Error("Method not implemented.");
  }
  getQuiz(): unknown {
    throw new Error("Method not implemented.");
  }
  private _teacherData: ITeacherData = null!;
  private _studentAttendance: any[] = [];
  set setTeacherInfo(informations: ITeacherData) {
    throw new Error("Method not implemented.");
  }
  get getTeacherInfo(): ITeacherData {
    throw new Error("Method not implemented.");
  }
}
