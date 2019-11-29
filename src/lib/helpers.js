const URL = './lectures.json';

export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el (name, ...children){
  const element = document.createElement(name);

  if(Array.isArray(children)){
    for(let child of children){
      if(typeof child === 'string'){
        element.appendChild(document.createTextNode(child));
      }
      else if (child){
        element.appendChild(child);
      }
    }
  }
  return element;
}

export function getData(){
  const response = fetch(URL);
  const json = response.then((resp)=>{
    if(!resp.ok){
      throw Error('Villi við að sækja upplýsingar')
    }
  })
  .catch((e)=>{console.error(e);
  throw Error('Villa við að sækja upplýsingar')});
  return json;
}

export function displayLecture(element, data){
  /*Búa til Element fyrir myndina í headernum á fyrirlestrinum */
  let lectureHeader;
  if(data.lectureHeader == null){
    lectureHeader = 'engin mynd';
  }else{
    lectureHeader = data.lectureHeader;
  }
  /*Búa til Element fyrir fyrirlestrana*/ 
  const category = data.category;
  const title = data.title;

  const lecture = document.createElement('div');
  lecture.className = 'lectures';
  const lectureTitle = document.createElement('div');
  lectureTitle.className = 'lectures__title';
  const lectureCategory = document.createElement('div');
  lectureCategory.className = 'lectures__category';
  const lectureImage = document.createElement('div');
  lectureImage.className = 'lectures__image';
  const lectureTitleH2 = document.createElement('h2');
  lectureTitleH2.className = 'lectures__h2';
  lectureTitleH2.classList.add('lectures__h2-text');
  const lectureH3 = document.createElement('h3');
  lectureH3.className = 'lectures__h3';

  /* Smíða elementin og appenda við síðuna */
  lectureCategory.appendChild(lectureH3);
  lectureTitle.appendChild(lectureTitleH2);
  lecture.appendChild(lectureTitle);
  lecture.appendChild(lectureCategory);
  lecture.appendChild(lectureImage);
  element.appendChild(lecture);
}