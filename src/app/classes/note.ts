export class Note {
    id: number;
    title: string;
    file: any;
    educationProgram: string;
    schoolClass: number;
    teacher: string;
    icon: any;

    constructor(title: string, file: any, educationProgram: string, schoolClass: number, teacher: string, icon: any) {
        this.title = title;
        this.file = file;
        this.educationProgram = educationProgram;
        this.schoolClass = schoolClass;
        this.teacher = teacher;
        this.icon = icon;
    }
}

