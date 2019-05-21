import Task from '@/models/task';

export default class TaskQueue {
    public name: string;
    public tasks: Task[] = [];

    public constructor(name: string) {
        this.name = name;
    }
}
