namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number; // Declaration merging
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher?.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}