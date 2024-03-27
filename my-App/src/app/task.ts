export interface ITask {
    id: number;
    name: string;
    date?: Date;
    isChecked: boolean;
    isImportant: boolean;
}
export const TASKS: ITask[] = [
    { id: 1, name: "Hit the gym", date: new Date(2023,3,4) , isChecked: false, isImportant:false },
    { id: 2, name: "Pay bills", isChecked: true, isImportant:true },
    { id: 3, name: "Meet John", isChecked: false, isImportant:false },
    { id: 4, name: "Buy eggs", date: new Date(2023,2,29) , isChecked: false, isImportant:true },
    { id: 5, name: "Read a book", isChecked: true, isImportant:false },
    { id: 6, name: "Organize office", isChecked: false, isImportant:false },
    { id: 7, name: "Eat dinner",isChecked: false, isImportant:false },
    { id: 8, name: "Buy apples", date: new Date(2023,2,5) , isChecked: false, isImportant:true },
    { id: 9, name: "Meet George", isChecked: false, isImportant:true },
    { id: 10, name: "Feed the cat", isChecked: false, isImportant:false },
    { id: 11, name: "Write a letter", isChecked: true, isImportant:false },
    { id: 12, name: "Run 1 km", date: new Date(2022,0,15) , isChecked: false, isImportant:false },

]