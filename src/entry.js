import 'bootstrap';
import 'velocity-animate';
import { GetStaticData } from './js/load-static-data.js';
import css from './scss/style.scss';
import './js/mobile-menu.js';
import { PubSub } from 'pubsub-js';


document.addEventListener("DOMContentLoaded", () => {
    let dataController = new GetStaticData();
});
