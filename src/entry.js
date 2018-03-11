import 'bootstrap';
import 'velocity-animate';
import { GetStaticData } from './js/load-static-data.js';
import { CommentsService} from './js/CommentsService.js';
import { CommentFormController } from './js/CommentFormController.js';
import { CommentsPrintController } from './js/CommentsPrintController.js';
import css from './scss/style.scss';
import './js/MobileMenuController.js';
import { PubSub } from 'pubsub-js';


document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname == '/') {
        let dataController = new GetStaticData();
    } else if (window.location.pathname == '/detalle.html') {
        let commentsService = new CommentsService('http://localhost:3001/comments/');

        let commentsPrintController = new CommentsPrintController('.list-comments', commentsService, PubSub);
        commentsPrintController.loadComments();

        let commentFormController = new CommentFormController('.comment-form', commentsService, PubSub);
    }
});
