export class ToDo {
    id: number;
    description: string;
    updatedAt: any;
    isFinished: boolean;

    constructor(id = new Date().getTime() , description = "", updatedAt = new Date(), isfinished = false) {
        this.id = id;
        this.description = description;
        this.updatedAt = updatedAt;
        this.isFinished = isfinished;
    }
}