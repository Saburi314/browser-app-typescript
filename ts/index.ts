import { EventListener } from "./Eventlistener"

class Application {
    start() {
    const eventListener = new EventListener()
    const button = document.getElementById('deleteAllDoneTask')

    if (!button) return

    eventListener.add(
        'sample',
        'click',
        button,
        () => alert('clicked'),
    )

    eventListener.remove('sample')
    }   
}

const app = new Application();
app.start();


