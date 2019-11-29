import { empty, el, getData } from './helpers';
import {displayVideo,displayText,displayQuote,displayImage,displayHeading,displayList,displayCode,
} from './type';


export function saveLecture(slug) {
  localStorage.setItem(slug, 'active');
}

export function removeLecture(slug) {
  localStorage.removeItem(slug);
}

export function isStored(slug) {
  return localStorage.getItem(slug) === 'active';
}

export default class Lecture {
  constructor() {
    this.container = document.querySelector('.lecture');
    this.URL = './lectures.json'; 
  }

  showHeader() {
    const headerCategory = el('h3', this.category);
    headerCategory.className = 'header__h3';

    const headerTitle = el('h1', this.title);
    headerTitle.className = 'header__h1';

    const headerContent = el('div', headerCategory, headerTitle);
    headerContent.className = 'header__content';

    if (this.image === 'none') {
      headerContent.style.backgroundColor = '#aaa';
    }

    const header = el('header', headerContent);
    header.className = 'lecture__header';
    header.style.backgroundImage = `url(${this.image})`;

    this.container.appendChild(header);
    console.log(this.container);
  }

  showContent(content) {
    const types = el('div');
    types.className = 'type';

    content.forEach((item) => {
      const lectureType = item.type;
      const lectureData = item.data;
      let imgCap;
      let attrib;
      switch (lectureType) {
        case 'youtube':
          displayVideo(types, lectureData);
          break;
        case 'text':
          displayText(types, lectureData);
          break;
        case 'image':
          imgCap = item.caption !== undefined ? item.caption : '';
          displayImage(types, lectureData, imgCap);
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
        case 'quote':
          attrib = item.attribute !== undefined ? item.attribute : '';
          displayQuote(types, lectureData, attrib);
          break;
        default:
          break;
      }
    });

    this.container.append(types);
    console.log(this.category);
  }

  ifFinished() {
    const element= document.querySelector('.lecture__finish');
    const notFinished = 'Klára fyrirlestur';
    const Finished = '✔ Kláraður fyrirlestur';

    const isFinished = element.classList.contains('lecture__finish--finished');

    if (isFinished) {
      element.textContent = notFinished;
      removeLecture(this.slug);
    } else {
      element.textContent = Finished;
      saveLecture(this.slug);
    }

    element.classList.toggle('lecture__finish--finished');
  }

  showFooter() {
    const notFinished = 'Klára fyrirlestur';
    const Finished = '✔ Kláraður fyrirlestur';

    const finishButton = el('button', isStored(this.slug) ? Finished : notFinished); 
    finishButton.classList.add('lecture__finish');
    if (isStored(this.slug)) {
      finishButton.classList.add('lecture__finish--finished');
    }

    finishButton.addEventListener('click', this.ifFinished.bind(this));

    const backButton = el('a', 'Til baka');
    backButton.classList.add('lecture__back');
    
  
    backButton.setAttribute('href', '/');

    const footer = el('footer', finishButton, backButton);
    footer.className = 'lecture__footer';

    this.container.appendChild(footer);
    console.log(this.container);
  }
  

  loadLectures() {
    const index = parseInt(localStorage.getItem('index'), 10);

    const lectureData = getData();
    lectureData.then((data) => {
      this.title = data.lectures[index].title;
      this.category = data.lectures[index].category;
      this.image = data.lectures[index].image !== undefined ? data.lectures[index].image : 'none';
      this.thumbnail = data.lectures[index].thumbnail !== undefined ? data.lectures[index].thumbnail : 'none';
      this.showHeader();
      this.showContent(data.lectures[index].content);
      this.showFooter();
    });
  }

  load() {
    empty(this.container);
    console.log('Ertu að reyna að load-a')

    const lectureURL = new URLSearchParams(window.location.search);
    this.slug = lectureURL.get('slug');

    this.loadLectures();
  }
}
