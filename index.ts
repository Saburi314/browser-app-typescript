start() {
    const createForm = document.getElementById('createForm') as HTMLFormElement
    this.eventListener.add(
        'summit-handler',
        'submit',
        createForm,
        this.handleSubmit.bind(this),  // bindを使用してthisを固定
    )
} 