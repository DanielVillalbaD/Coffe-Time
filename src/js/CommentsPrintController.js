export class CommentsPrintController {

    constructor(selector, commentsService, pubSub) {
        this.element = document.querySelector(selector);
        this.commentsService = commentsService;
        pubSub.subscribe('comment:created', (event, comment) => {
            console.log("CommentsPrintController", comment);
            this.loadComments();
        });
    }

    showLoadingMessage() {
        this.element.innerHTML = '<div class="loading-container"><div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div></div>';
    }

    showErrorMessage() {
        this.element.innerHTML = '<div class="error">Se te ha olvidado arrancar Json Server, o ya me has tocado el código...</div>';
    }

    showNoCommentsMessage() {
        this.element.innerHTML = '<div class="info">No hay ningún comentario, escribe el primero.</div>';
    }

    renderComments(comments) {
        let html = '';
        for (let comment of comments) {
            html += `<article class="comment container"><div class="comment-author"><p>Comentado por <a href="#" title="Enlace no funcional">${comment.author}</a></p></div><div class="comment-body">${comment.comment}</div></article>`;
        }
        this.element.innerHTML = html;
    }

    loadComments() {
        this.showLoadingMessage();
        this.commentsService.take().then(comments => {
            if (comments.length == 0) {
                this.showNoCommentsMessage();
            } else {
                this.renderComments(comments);
            }
        }).catch((error) => {
            console.error("ERROR RETRIEVING COMMENTS", error);
            this.showErrorMessage();
        });

    }

}
