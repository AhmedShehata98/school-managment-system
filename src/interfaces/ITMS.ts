import { StudentData } from "./IStudent";
import { ITeacherData } from "./ITeacher";

export interface ITmsDatabase {
  students: Array<StudentData>;
  teachers: Array<ITeacherData>;
}
