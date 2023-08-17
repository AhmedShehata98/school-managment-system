import { StudentData } from "@/interfaces/IStudent";
import { ITeacherData } from "./../interfaces/ITeacher";
export class SchoolManagmentSystem {
  private _database = {
    teachers: Array<ITeacherData>,
    students: Array<StudentData>,
  };
  constructor(private schoolName: string, private educationLevel: string) {}
}
