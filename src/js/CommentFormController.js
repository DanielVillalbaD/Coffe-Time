export class CommentFormController {

    constructor(form, commentsService, pubSub) {
        this.element = document.querySelector(form);
        this.commentsService = commentsService;
        this.pubSub = pubSub;
        this.loading = false;
        this.addEventListeners();
        pubSub.subscribe('comment:created', (event, comment) => {
            console.log("CommentsPrintController", comment);
            this.loadComments();
        });
    }

    setLoading(loading) {
        this.loading = loading;
        this.element.querySelectorAll('input, textarea').forEach(item => { item.disabled = loading });
    }

    addEventListeners() {
        this.addInputListeners();
        this.addFormSubmitListener();
    }

    addFormSubmitListener() {
        this.element.addEventListener('submit', event => {
            event.preventDefault();
            if (this.loading) {
                return;  
            }
            this.setLoading(true);
            let commentData = this.buildCommentData();
            this.commentsService.post(commentData).then(commentSaved => {
                console.log("Comentario guardado", commentSaved);
                this.element.reset();
                this.pubSub.publish('comments: created', commentSaved);
            }).catch(error => {
                console.error("SE HA PRODUCIDO UN ERROR");
                alert(`Se ha producido un error ${error}`);
            }).finally(() => {
                this.setLoading(false);
            })
        });
    }

    buildCommentData() {
        return {
            author: this.element.querySelector('#author').value,
            email: this.element.querySelector('#email').value,
            comment: this.element.querySelector('#comment').value
        }
    }

    addInputListeners() {
        // en todos los input que hay en el formulario, los valido cuando se pierde el foco
        this.element.querySelectorAll('input').forEach(input => {

            input.addEventListener('keyup', event => {                
                if (input.checkValidity() == false) {
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
                this.checkFormValidity();
            });

        });
    }

    checkFormValidity() {
        let button = this.element.querySelector('.comment-submit');
        if (this.element.checkValidity()) {
            button.disabled = false;
            button.value = "Publicar comentario";
        } else {
            button.disabled = true;
        }
    }

}