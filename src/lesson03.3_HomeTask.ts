interface LecturerContact {
  email: string;
  phone: string;
}

enum Position {
  PROFESSOR = "Professor",
  ASSOCIATE_PROFESSOR = "Associate Professor",
  ASSISTANT_PROFESSOR = "Assistant Professor",
  INSTRUCTOR = "Instructor"
}

interface Lecturer {
  name: string;
  surname: string;
  position: Position;
  company: string;
  experience: number;
  courses: string[];
  contacts: LecturerContact;
}

class School {
  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = [];

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area: Area): void {
    this._areas.push(area);
  }

  removeArea(area: Area): void {
    this._areas = this._areas.filter(existingArea => existingArea !== area);
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturer: Lecturer): void {
    this._lecturers = this._lecturers.filter(existingLecturer => existingLecturer !== lecturer);
  }
}

class Area {
  private _levels: Level[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get levels(): Level[] {
    return this._levels;
  }

  addLevel(level: Level): void {
    this._levels.push(level);
  }

  removeLevel(level: Level): void {
    this._levels = this._levels.filter(existingLevel => existingLevel !== level);
  }
}

class Level {
  private _groups: Group[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): Group[] {
    return this._groups;
  }

  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(group: Group): void {
    this._groups = this._groups.filter(existingGroup => existingGroup !== group);
  }
}

class Group {
  private _area: Area;
  private _students: Student[] = [];

  constructor(private _directionName: string, private _levelName: string) {}

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  get students(): Student[] {
    return this._students;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(student: Student): void {
    this._students = this._students.filter(existingStudent => existingStudent !== student);
  }

  showPerformance(): Student[] {
    const sortedStudents = this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  private _grades: Record<string, number> = {};
  private _visits: Record<string, boolean> = {};
  
  constructor(private _firstName: string, private _lastName: string, private _birthYear: number) {}

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  setGrade(workName: string, mark: number): void {
    this._grades[workName] = mark;
  }

  setVisit(lesson: string, present: boolean): void {
    this._visits[lesson] = present;
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage = (Object.values(this._visits).filter(present => present).length / Object.keys(this._visits).length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
