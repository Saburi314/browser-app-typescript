import { EventListener } from "./Eventlistener"
import { Task } from "./Task"
import { TaskCollection } from "./TaskCollection"
import { TaskRenderer } from "./TaskRenders"

class Application {
    private readonly eventListener = new EventListener()
    private readonly taskCollection = new TaskCollection()
    private readonly taskRenderer = new TaskRenderer(document.getElementById('todoList') as HTMLElement)
    start() {
        const createForm = document.getElementById('createForm') as HTMLFormElement
        this.eventListener.add(
            'summit-handler',
            'submit',
            createForm,
            this.handleSubmit.bind(this),
        )
    }

    private handleSubmit(e: Event) {
        e.preventDefault()
        
        const titleInput = document.getElementById('title') as HTMLInputElement

        if (!titleInput.value) return

        const task = new Task({
            title: titleInput.value,
        })

        this.taskCollection.add(task)

        const { deleteButtonEl } = this.taskRenderer.append(task)

        this.eventListener.add(
            task.id,
            'click',
            deleteButtonEl,
            () => this.handleclickDeleteTask(task),
        )

        titleInput.value = ''
    }
 
    private handleclickDeleteTask = (task: Task) => {

        if(! window.confirm(`${task.title} を削除しますか？`)) return
    
        this.eventListener.remove(task.id)
        this.taskCollection.delete(task)
        this.taskRenderer.remove(task)
    }
}

const app = new Application();
app.start();


