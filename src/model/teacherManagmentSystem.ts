import { StudentData } from "@/interfaces/IStudent";
import { ITeacherData } from "../interfaces/ITeacher";
import { ITmsDatabase } from "@/interfaces/ITMS";
export class TeacherManagmentSystem {
  private _database: ITmsDatabase = {
    students: [],
    teachers: [],
  };
  constructor(private schoolName: string, private educationLevel: string) {}
}
