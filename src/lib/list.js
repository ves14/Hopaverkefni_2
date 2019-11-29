import { empty, displayLecture } from './helpers';
const DATA_URL = './lectures.json';

function loadLecture(e){
  const goal = 'lectures';
  let parent = e.target;

  while(parent.className !== goal){
    parent = parent.parentNode;
  }

  const currentTitle = parent.querySelector('.lectures__h2-text').textContent;
  for (const x of jsonData.lectures){
    if(x.title === currentTitle){
      const slug =x.slug;
      const index = jsonData.lectures.indexOf(x);
      localStorage.setItem('slug',x.slug);
      localStorage.setItem('index',index);
      window.location.href = (`./fyrirlestur.html?slug=${slug}`)
    }
  }
}
function addEventListeners(){
  const lectures = document.getElementsByClassName('lectures');
  for(const lecture of lectures){
    console.log('Event Listener á ')
    lecture.addEventListener('click',loadLecture);
  }
}

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.htmlButton = document.querySelector('.index-buttons__html-button');

    this.cssButton = document.querySelector('.index-buttons__css-button');

    this.jsButton = document.querySelector('.index-buttons__js-button');
  }

  load() {
    empty(this.container);
    fetch(Data_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();

        }
      })
      .then((data) => {
        jsonData = data;
        displayLecture(this.container, lecKeys, data.lecture, buttonBoolean);
        addEventListeners();
      })
  }
}
