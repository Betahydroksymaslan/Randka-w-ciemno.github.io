const wrapper = document.querySelector('.wrapper');
let flag = false;

const visitPage = () => {
    const divForNonclick = document.createElement('div');
    divForNonclick.classList.add('divForNonclick');
    wrapper.appendChild(divForNonclick);
    
    document.querySelector('.section').classList.add('textBlur');
    const wrapperForPosition = document.createElement('div');
    wrapperForPosition.classList.add('wrapperForPosition')
    wrapper.appendChild(wrapperForPosition); //DODAJE KONTENER DO POZYCJONOWANIA OKNA STARTOWEGO
    
    const div = document.createElement('div');
    div.classList.add('visitPage');
    wrapperForPosition.appendChild(div);  //DODAJE OKNO STARTOWE
    
    const jpg = document.createElement('img');
    jpg.classList.add('visitPage__image');
    jpg.setAttribute('src', 'photos/home_page.jpg');
    div.appendChild(jpg);  // DODAJE JPG JAKO TŁO W OKNIE STARTOWYM
    
    const divForSpans = document.createElement('div');
    divForSpans.classList.add('visitPage__divForSpans')
    div.appendChild(divForSpans);  //DODAJE POJEMNIK NA 2 SPANY
    
    const spanNext = document.createElement('span');
    spanNext.classList.add('visitPage__spanNext');
    divForSpans.appendChild(spanNext);  //DODAJE DOPOJEMNIKA 'ZACZNIJ'
    spanNext.textContent = 'Zacznij'; 
    
    const spanArrow = document.createElement('span');
    spanArrow.classList.add('visitPage__spanArrow');
    spanArrow.textContent = '>';
    divForSpans.appendChild(spanArrow); //DODAJE DO POJEMNIKA '>'
    divForSpans.addEventListener('click', () => {
        div.style.transition = 'transform .2s ease';
        div.style.transform = 'scale(.00000001)';
        wrapper.removeChild(divForNonclick);
        document.querySelector('.section').classList.remove('textBlur');
        setTimeout(() => {wrapperForPosition.style.display = 'none'}, 300);
        flag = !flag;
    })
}

window.addEventListener('load', visitPage);


