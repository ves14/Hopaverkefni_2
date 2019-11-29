import List from './lib/list';
import Lecture from './lib/lecture';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    console.log('lecture-loaded');
    const lecture = new Lecture();
    lecture.load();
  } else {
    console.log('list-loaded');
    const list = new List();
    list.load();
  }
});
