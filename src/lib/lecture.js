import { empty, el, getData } from './helpers';
import { displayVideo, displayHeading, displayCode, displayImage, displayList, displayQuote, displayText } from './type';

export default class Lecture {
    constructor() {
        this.container = document.querySelector('.lecture');
        this.URL = './lectures.json';
        this.title = '';
        this.category = '';
        this.image = '';
        this.thumbnail = '';
        this.slug = '';

    }
    displayHeader() {
        const headerCategory = el('h3', this.category);
        headerCategory.className = 'header_h3';

        const headerTitle = el('h3', this.title);
        headerCategory.className = 'header_h1';

        const headerContent = el('h3', headerCategory, headerTitle);
        headerCategory.className = 'header__content';

        if (this.image === 'none') {
            headerContent.style.backgroundColor = '#aaa';
        }
        const header = el('header', headerContent);
        header.className = ' lecture__header';
        header.style.backgroundImage = `url(${this.image})`;

        this.container.appendChild(header);

    }
    displayContent(content) {
        const types = el('div');
        types.className = 'type';

        content.forEach((item) => {
            const lectureType = item.type;
            const lectureData = item.data;
            let imageCaption;
            let attribute;
            switch (lectureType) {
                case 'youtube':
                    displayVideo(types, lectureData);
                    break;
                case 'text':
                    displayText(types, lectureData);
                    break;
                case 'quote':
                    attribute = item.attribute !== undefined ? item.attribute : '';
                    displayQuote(types, lectureData, attribute);
                    break;
                case 'image':
                    imgCap = item.caption !== undefined ? item.caption : '';
                    displayImage(types, lectureData, imageCaption);
                    break;
                case 'heading':
                    displayHeading(types, lectureData);
                    break;
                case 'list':
                    displayList(types, lectureData);
                    break;
                case 'code':
                    displayCode(types, lectureData);
                    break;
                default:
                    break;
            }
        });
        this.container.append(types);
    }
    loadLectures() {
        const index = parseInt(localStorage.getItem('index'), 10)

        const lectureData = getData();
        lectureData.then((data) => {
            this.title = data.lectures[index].title;
            this.category = data.lectures[index].category;
            this.image = data.lectures[index].image !== undefined ? data.lectures[index].image : 'none';
            this.thumbnail = data.lectures[index].thumbnail !== undefined ? data.lectures[index].image : 'none';
            this.displayHeader();
            this.displayContent(data.lectures[index].content);
            this.displayFooter;
        });
    }
    load() {
        empty(this.container);
        const qs = new URLSearchParams(window.location.search);
        this.slug = qs.get('slug');

        this.loadLectures();
    }

}
