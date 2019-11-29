import { empty, displayLectures } from './helpers';

const buttonBoolean = new Array(3).fill(false);
const keys = ['catagory', 'thumbnamil','title'];
const DATA_URL = './lectures.json';
const container = document.querySelector('.list');
let jsonData;



function loadLecture(e) {
  const string = 'lectures';
  let parent = e.target;

  while (parent.className !== string) {
    parent = parent.parentNode;
  }
  const currentTitle = parent.querySelector('.lectures__h2-text').textContent;
  for (const variable of jsonData.lectures) {
    if (variable.title === currentTitle) {
      const slug = variable.slug;
      console.log(slug);
      const index = jsonData.lectures.indexOf(variable);
      localStorage.setItem('slug', variable.slug);
      localStorage.setItem('index', index);
      
     window.location.href = (`http://localhost:3000/fyrirlestur.html?slug=${slug}`);
    }
  }
}


function addEventListeners() {
  const lectures = document.getElementsByClassName('lectures');
  for (const lecture of lectures) {
    lecture.addEventListener('click', loadLecture);
  }
}


function onClickHTML() {
  const btn = document.querySelector('.index-buttons__html-butt');
  btn.classList.toggle('html-active');
  empty(container);
  if (buttonBoolean[0]) {
    buttonBoolean[0] = false;
  } else {
    buttonBoolean[0] = true;
  }
  displayLectures(container, keys, jsonData.lectures, buttonBoolean);
  addEventListeners();
  console.log('Hey þú ýttir á Html-takkann');
}


function onClickCss() {
  const btn = document.querySelector('.index-buttons__css-butt');
  btn.classList.toggle('css-active');
  empty(container);
  if (buttonBoolean[1]) {
    buttonBoolean[1] = false;
  } else {
    buttonBoolean[1] = true;
  }
  displayLectures(container, keys, jsonData.lectures, buttonBoolean);
  addEventListeners();
  console.log('Hey þú ýttir á css-takkann');
}


function onClickJs() {
  const btn = document.querySelector('.index-buttons__js-butt');
  btn.classList.toggle('js-active');
  empty(container);
  if (buttonBoolean[2]) {
    buttonBoolean[2] = false;
  } else {
    buttonBoolean[2] = true;
  }
  displayLectures(container, keys, jsonData.lectures, buttonBoolean);
  addEventListeners();
  console.log('Hey þú ýttir á JavaScript-takkann');
}


export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    console.log(this.container);
    this.htmlButton = document.querySelector('.index-buttons__html-butt');
    this.cssButton = document.querySelector('.index-buttons__css-butt');
    this.jsButton = document.querySelector('.index-buttons__js-butt');
  }


  load() {
    empty(this.container);
    this.htmlButton.addEventListener('click', onClickHTML);
    this.cssButton.addEventListener('click', onClickCss);
    this.jsButton.addEventListener('click', onClickJs);

    fetch(DATA_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Villa við að sækja gögn');
      })
      .then((data) => {
        jsonData = data;
        displayLectures(this.container, keys, data.lectures, buttonBoolean);
        addEventListeners();
      })
      .catch((error) => {
      console.log(error);  
      });
      console.log(DATA_URL);
  }
}
