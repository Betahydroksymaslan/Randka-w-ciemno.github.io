const demoBtn = document.querySelector('.demoBtn');
let heartPercent = 0;
let heartBigger = 1.3;
let questionsCounter = 1;
let points = 0;
const testQuestionsTrue = [
    'Barcelona',
    'Władca Pierścieni',
    'Czerwony',
    'Kwadrat',
    'Rock'
]
const testQuestionsFalse = [
    'Londyn',
    'Harry Potter',
    'Czarny',
    'Koło',
    'POP'
]
let index = 0;


const addDiv = () => {
    const transparentDiv = document.createElement('div');
    transparentDiv.classList.add('transparentDivForQuestions');
    wrapper.appendChild(transparentDiv);

    const demoDiv = document.createElement('div');
    demoDiv.classList.add('demoDiv')
    wrapper.appendChild(demoDiv)
    document.querySelector('.section').classList.add('textBlur');

    const trueDiv = document.createElement('div');
    trueDiv.classList.add('trueDiv');
    demoDiv.appendChild(trueDiv);
    trueDiv.textContent = testQuestionsTrue[0];

    const interText = document.createElement('h1');
    interText.classList.add('section__exampleQuestions', 'interText');
    interText.textContent = 'CZY';
    demoDiv.appendChild(interText);

    const falseDiv = document.createElement('div');
    falseDiv.classList.add('falseDiv', 'trueDiv');
    demoDiv.appendChild(falseDiv);
    falseDiv.textContent = testQuestionsFalse[0];

    const divForPercAndHeart = document.createElement('div');
    divForPercAndHeart.classList.add('divForPercAndHeart');
    demoDiv.appendChild(divForPercAndHeart);

    const heart = document.createElement('div');
    heart.classList.add('heartDiv');
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    divForPercAndHeart.appendChild(heart);

    const percentage = document.createElement('p');
    percentage.classList.add('percentage');
    percentage.textContent = heartPercent + '%';
    divForPercAndHeart.appendChild(percentage);

    /////  DODAWANIE WARTOŚCI Z TABLICY DO ODPOWIENICH DIVÓW


    trueDiv.addEventListener('click', e => {
        heart.style.transform = `scale(${heartBigger})`;
        heartBigger += 0.3;
        heartPercent += 20;
        percentage.textContent = heartPercent + '%';
        
        if(questionsCounter === 5) {
            demoDiv.removeChild(interText);
            demoDiv.removeChild(trueDiv);
            demoDiv.removeChild(falseDiv);

            const resultDiv = document.createElement('div');
            resultDiv.classList.add('resultDiv');
           
            const exit = document.createElement('span');
            exit.classList.add('exit');
            exit.textContent = '+';
            demoDiv.appendChild(exit);
            setTimeout(() => exit.style.opacity = '1', 2700)

            exit.addEventListener('click', () => {
                demoDiv.style.opacity = '0';
                document.querySelector('.section').classList.remove('textBlur');
                heartPercent = 0;
                heartBigger = 1.3;
                questionsCounter = 1;
                points = 0;
                setTimeout(() => {
                    demoDiv.style.display = 'none';
                    transparentDiv.style.display = 'none';
                }, 500)
            })


            if (heartPercent === 0) {
                resultDiv.textContent = 'Niestety, nie udało Ci się odpowiedzieć poprawnie na żadne z pytań. Obawiam się, że nic o sobie nie wiecie :/'
            } else if (heartPercent === 20) {
                resultDiv.textContent = 'Udało Ci się zdobyć zaledwie jeden punkt... To zdecydowanie za mało, żeby móc powiedzieć, że dobrze się znacie ;S'
            } else if (heartPercent === 40) {
                resultDiv.textContent = 'Twój dorobek to 2 punkty. tragedii nie ma, ale to nadal nędzny rezultat ;P'
            } else if (heartPercent === 60) {
                resultDiv.textContent = '3 punkty to już więcej niż mniej i można stwierdzić, że coś tam o sobie wiecie, ale za wcześnie na otwieranie szampanów :3'
            } else if (heartPercent === 80) {
                resultDiv.textContent = 'Gratulacje, udało się się odpowiedzieć poprawnie na większość z zadanych pytań i zdobyć 4 punkty! Całkiem dobrze się znacie :)'
            } else {
                resultDiv.textContent = 'EKSTRA! Zdobywasz komplet punktów i możecie cieszyć się mianem osób, które naprawdę dobrze się znają! ;D'
            }

            demoDiv.appendChild(resultDiv);

            setTimeout(() => {
                divForPercAndHeart.classList.add('heartTranslate')
            },1000)
            
            setTimeout(() => {
                resultDiv.classList.add('reOpacity');
            }, 2000)
        }
        
        //const answerValue = e.target.textContent;
        questionsCounter++;
        index++;
        points++;
        trueDiv.textContent = testQuestionsTrue[index];
        falseDiv.textContent = testQuestionsFalse[index];
        if (index === 5) {
            index = 0;
        }

        
    })
    falseDiv.addEventListener('click', e => {
        if(questionsCounter === 5) {
            demoDiv.removeChild(interText);
            demoDiv.removeChild(trueDiv);
            demoDiv.removeChild(falseDiv);

            const resultDiv = document.createElement('div');
            resultDiv.classList.add('resultDiv');
            
            const exit = document.createElement('span');
            exit.classList.add('exit');
            exit.textContent = '+';
            demoDiv.appendChild(exit);
            setTimeout(() => exit.style.opacity = '1', 2700)

            exit.addEventListener('click', () => {
                demoDiv.style.opacity = '0';
                document.querySelector('.section').classList.remove('textBlur');
                heartPercent = 0;
                heartBigger = 1.3;
                questionsCounter = 1;
                points = 0;
                setTimeout(() => {
                    demoDiv.style.display = 'none';
                    transparentDiv.style.display = 'none'
                }, 500)
            })


            if (heartPercent === 0) {
                resultDiv.textContent = 'Niestety, nie udało Ci się odpowiedzieć poprawnie na żadne z pytań. Obawiam się, że nic o sobie nie wiecie :/'
            } else if (heartPercent === 20) {
                resultDiv.textContent = 'Udało Ci się zdobyć zaledwie jeden punkt... To zdecydowanie za mało, żeby móc powiedzieć, że dobrze się znacie ;S'
            } else if (heartPercent === 40) {
                resultDiv.textContent = 'Twój dorobek to 2 punkty. tragedii nie ma, ale to nadal nędzny rezultat ;P'
            } else if (heartPercent === 60) {
                resultDiv.textContent = '3 punkty to już więcej niż mniej i można stwierdzić, że coś tam o sobie wiecie, ale za wcześnie na otwieranie szampanów :3'
            } else if (heartPercent === 80) {
                resultDiv.textContent = 'Gratulacje, udało się się odpowiedzieć poprawnie na większość z zadanych pytań i zdobyć 4 punkty! Całkiem dobrze się już znacie :)'
            } else {
                resultDiv.textContent = 'EKSTRA! Zdobywasz komplet punktów i możecie cieszyć się mianem osób, które naprawdę dobrze się znają! ;D'
            }

            setTimeout(() => {
                divForPercAndHeart.classList.add('heartTranslate')
            },1000)
            
            demoDiv.appendChild(resultDiv);

            setTimeout(() => {
                resultDiv.classList.add('reOpacity');
            }, 2000)
        }
        
        //const answerValue = e.target.textContent;
        questionsCounter++;
        index++
        trueDiv.textContent = testQuestionsTrue[index];
        falseDiv.textContent = testQuestionsFalse[index];
        if (index === 5) {
            index = 0;
        }
    })
    
}




const startDemo = () => {
    addDiv(); //DODAJE DIVA DLA ODPOWIEDZI
}

demoBtn.addEventListener('click', startDemo)