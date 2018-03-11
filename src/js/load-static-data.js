let moment = require('moment');

const staticData = [ 
    {
        "_id": "1",
        "title": "Las mujeres revolucionarán la programación la próxima década",
        "subtitle": "Según el último estudio de la <b>Universidad de Harvard publicado</b> en <i>Science Computering</i>, la revolución tecnológica será para las mujeres. El estudio arroja que en el 2025 habrá aumentado en aproximadamente 1000% el número de programadoras actuales frente al aumento de un 200% que se prevé en hombres",
        "header-img": "/assets/img/woman.jpg",
        "header-img-m": "/assets/img/woman-m.jpg",
        "header-img-xs": "/assets/img/woman-xs.jpg",
        "header-img-thumb": "/assets/img/woman-thumb.jpg",
        "content": "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca.<quote>Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte de ellas.</quote>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas. Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo",
        "tags": "Actualidad",
        "date": "2017-12-30 15:25:0"
    },
    {
        "_id": "2",
        "title": "Problemas con el nuevo Iphone X",
        "subtitle": "Apple ha lanzado recientemente su nuevo terminal <b>Iphone X</b> y un molesto fallo está <i>haciendo perder la paciencia</i> a un colectivo que hasta ahora les eran fieles, los hypsters. Se quejan de que se les engancha el pelo de la barba.",
        "header-img": "/assets/img/iphone.jpg",
        "header-img-m": "/assets/img/iphone-m.jpg",
        "header-img-xs": "/assets/img/iphone-xs.jpg",
        "header-img-thumb": "/assets/img/iphone-thumb.jpg",
        "content": "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca.<quote>Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte de ellas.</quote>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas. Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo",
        "tags": ["Actualidad", "Tech", "Vídeos"],
        "date": "2018-3-10 0:50:0",
        "video": "https://player.vimeo.com/video/238480244"
    },
    {
        "_id": "3",
        "title": "Las mujeres revolucionarán la programación la próxima década",
        "subtitle": "Según el último estudio de la <b>Universidad de Harvard publicado</b> en <i>Science Computering</i>, la revolución tecnológica será para las mujeres. El estudio arroja que en el 2025 habrá aumentado en aproximadamente 1000% el número de programadoras actuales frente al aumento de un 200% que se prevé en hombres",
        "header-img": "/assets/img/woman.jpg",
        "header-img-m": "/assets/img/woman-m.jpg",
        "header-img-xs": "/assets/img/woman-xs.jpg",
        "header-img-thumb": "/assets/img/woman-thumb.jpg",
        "content": "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca.<quote>Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte de ellas.</quote>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas. Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo",
        "tags": "Actualidad",
        "date": "2015-12-30 15:25:0"
    },
    {
        "_id": "4",
        "title": "Las mujeres revolucionarán la programación la próxima década",
        "subtitle": "Según el último estudio de la <b>Universidad de Harvard publicado</b> en <i>Science Computering</i>, la revolución tecnológica será para las mujeres. El estudio arroja que en el 2025 habrá aumentado en aproximadamente 1000% el número de programadoras actuales frente al aumento de un 200% que se prevé en hombres",
        "header-img": "/assets/img/woman.jpg",
        "header-img-m": "/assets/img/woman-m.jpg",
        "header-img-xs": "/assets/img/woman-xs.jpg",
        "header-img-thumb": "/assets/img/woman-thumb.jpg",
        "content": "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca.<quote>Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte de ellas.</quote>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas. Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo",
        "tags": "Actualidad",
        "date": "2018-2-30 15:25:0"
    },
    {
        "_id": "5",
        "title": "Las mujeres revolucionarán la programación la próxima década",
        "subtitle": "Según el último estudio de la <b>Universidad de Harvard publicado</b> en <i>Science Computering</i>, la revolución tecnológica será para las mujeres. El estudio arroja que en el 2025 habrá aumentado en aproximadamente 1000% el número de programadoras actuales frente al aumento de un 200% que se prevé en hombres",
        "header-img": "/assets/img/woman.jpg",
        "header-img-m": "/assets/img/woman-m.jpg",
        "header-img-xs": "/assets/img/woman-xs.jpg",
        "header-img-thumb": "/assets/img/woman-thumb.jpg",
        "content": "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca.<quote>Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte de ellas.</quote>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas. Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo",
        "tags": "Actualidad",
        "date": "2018-3-10 0:48:59"
    },
    {
        "_id": "6",
        "title": "Las mujeres revolucionarán la programación la próxima década",
        "subtitle": "Según el último estudio de la <b>Universidad de Harvard publicado</b> en <i>Science Computering</i>, la revolución tecnológica será para las mujeres. El estudio arroja que en el 2025 habrá aumentado en aproximadamente 1000% el número de programadoras actuales frente al aumento de un 200% que se prevé en hombres",
        "header-img": "/assets/img/woman.jpg",
        "header-img-m": "/assets/img/woman-m.jpg",
        "header-img-xs": "/assets/img/woman-xs.jpg",
        "header-img-thumb": "/assets/img/woman-thumb.jpg",
        "content": "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca.<quote>Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte de ellas.</quote>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas. Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo",
        "tags": "Actualidad",
        "date": "2018-3-1 15:25:0"
    }
];

// Variables
let articles = [];
let article;
let title = "";
let subtitle = "";
let img = "";
let imgM = "";
let imgXS = "";
let thumb = "";
let tags;
let tagsHtml = "";
let content = "";
let details = [];
let video = "";
let dateIN = "";
let htmlRes = "";
let columnCont = 1; //Column position variable
let dateOUT = "";

// Object
export class GetStaticData {

    constructor() {

        for (let i = 0; i < staticData.length; i++) {

            article = staticData[i];
            details = Object.entries(article);

            title = details[1][1];         
            subtitle = details[2][1];
            img = details[3][1];
            imgM = details[4][1];
            imgXS = details[5][1];
            thumb = details[6][1];
            content = details[7][1];
            tags = details[8][1];
            dateIN = details[9][1];
            video = details[10] ? details[10][1] : false;                

            // Card Tags Meta
            if (typeof tags !== 'string') {
                for (let i = 1; i < details[8][1].length; i++) {
                    if (i !== details[8][1].length - 1) {
                        tagsHtml += ' | <a href="#">' + details[8][1][i] + '</a> | ';
                    } else {
                        tagsHtml += '<a href="#">' + details[8][1][i] + '</a>';
                    }
                }
            } else {
                tagsHtml = '<a href="#">' + tags + '</a>';
            }

            // Title Meta
            if (title) {
                title = title.trim().substring(0, 55).split(" ").slice(0, -1).join(" ") + '…';
            }

            // Subtitle Meta
            if (subtitle) {
                subtitle = subtitle.trim().substring(0, 120).split(" ").slice(0, -1).join(" ") + '…';
            }

            // Moment.js Date Meta
            if (dateIN !== []) {
                let postDate = new Date(dateIN);                
                let parseDate = moment(postDate, "YYYY-MM-DD HH:mm:ss");
                moment.locale('es');
                parseDate.locale(false);

                // Date Display                
                if (moment().diff(parseDate, 'weeks') > 1) {
                    dateOUT = 'el ' + moment(parseDate).format('L');
                } else if (moment().diff(parseDate, 'days') > 1 && moment().diff(parseDate, 'weeks') <= 1) {
                    dateOUT = 'el ' + moment(parseDate).format('dddd');
                } else {
                    dateOUT = moment(parseDate).fromNow(); 
                }
              
            }
            
            //Insert HTML
            htmlRes = '<article class="custom-card"><div class="custom-thumb"><a href="#" class="custom-read-more"><img srcset="' + imgXS + ' 200w,' + thumb + ' 600w" alt="Imagen destacada"></a></div><nav class="custom-card-tags">' + tagsHtml + '</nav><h3 class="custom-card-title"><a href="#" class="custom-read-more">' + title + '</a></h3><p class="custom-card-subtitle">' + subtitle + '</p><div class="custom-card-footer align-middle"><p>Publicado ' + dateOUT + '</p><div class="card-icons"><i class="icon ion-ios-chatbubble-outline mx-2"><sup>' + '1' + '</sup></i><i class="icon ion-ios-heart-outline"></i></div></div></article>';

            // Allocate cards in Homepage
            if (window.location.pathname == '/') {

                if (columnCont === 1) {
                    const column1 = document.getElementById('card-column-1');
                    column1.innerHTML += htmlRes;
                }
                if (columnCont === 2) {
                    const column2 = document.getElementById('card-column-2');
                    column2.innerHTML += htmlRes;
                }
                if (columnCont === 3) {
                    const column3 = document.getElementById('card-column-3');
                    column3.innerHTML += htmlRes;
                }

                (columnCont !== 3) ? columnCont++ : columnCont = 1;

            // Demás páginas por ahora inactivo
            } else {
                return;
            }
        }
    } 
} 