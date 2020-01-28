const startBtn = document.querySelector('.gameStart')
let qstNumber = 1;
const trueQsts = [];
const falseQsts = [];

const startGame = () => {
    // ELEMENTÓ DO DOM'U!!!!!!!!!!!!!!!
    
    const transparentDiv = document.createElement('div');
    transparentDiv.classList.add('transparentDivForQuestions');
    wrapper.appendChild(transparentDiv);

    const gameDiv = document.createElement('div');
    gameDiv.classList.add('demoDiv', 'contentPosition');
    wrapper.appendChild(gameDiv);
    document.querySelector('.section').classList.add('textBlur');

    const h2Tittle = document.createElement('h2');
    h2Tittle.classList.add('section__exampleQuestions', 'interText');
    h2Tittle.textContent = 'Wymyśl i zapisz swoje własne pytania :)';
    gameDiv.appendChild(h2Tittle);

    const h3Title = document.createElement('h3');
    h3Title.classList.add('section__exampleQuestions', 'interText', 'h3Position');
    h3Title.textContent = `Pytanie ${qstNumber}/5`;
    gameDiv.appendChild(h3Title);

    const trueInput = document.createElement('input');
    trueInput.classList.add('trueInput');
    trueInput.setAttribute('placeholder', 'Wpisz dobry wybór')
    gameDiv.append(trueInput);

    const falseInput = document.createElement('input');
    falseInput.classList.add('falseInput');
    falseInput.setAttribute('placeholder', 'Wpisz zły wybór')
    gameDiv.append(falseInput);

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('nextBtn');
    nextBtn.textContent = 'Dodaj';
    gameDiv.appendChild(nextBtn);

    // DODAWANIE KOLEJNYCH PYTAŃ DO TABLICY

    nextBtn.addEventListener('click', e => {
        // OBSŁUGA BŁĘDU PRZY PUSTYM POLU ODPOWIEDZI
        
        if (trueInput.value === '' || falseInput.value === '') {
            const transparentDivForError = document.createElement('div');
            transparentDivForError.classList.add('transparentDivForError');
            gameDiv.appendChild(transparentDivForError);
            
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('errorDiv');
            transparentDivForError.appendChild(errorDiv);

            const errorText = document.createElement('h3');
            errorText.classList.add('errorText');
            errorText.textContent = `Uzupełnij pole ${trueInput.value === '' ? "poprawnej odpowiedzi!" : "złej odpowiedzi!"}`
            errorDiv.appendChild(errorText);

            const errorAccept = document.createElement('h2');
            errorAccept.classList.add('errorAccept');
            errorAccept.textContent = 'OK';
            errorDiv.appendChild(errorAccept);

            errorAccept.addEventListener('click', () => {
                errorDiv.classList.add('errorDivRemove');
                setTimeout(() => gameDiv.removeChild(transparentDivForError), 300)
            })
        } else {
            trueQsts.push(trueInput.value);
            falseQsts.push(falseInput.value)
            trueInput.value = '';
            falseInput.value = '';
            qstNumber++;
            h3Title.textContent = `Pytanie ${qstNumber}/5`;
        }
       
        // EKRAN PODSUMOWUJĄCY POMIĘDZY FAZĄ WPISYWANIA PYTAŃ A UDZIELANIA ODPOWIEDZI
        
        if (qstNumber === 6) {
            qstNumber = 1;
            gameDiv.removeChild(h2Tittle);
            gameDiv.removeChild(h3Title);
            gameDiv.removeChild(trueInput);
            gameDiv.removeChild(falseInput);
            gameDiv.removeChild(nextBtn);

            gameDiv.classList.add('interphase');

            const startGameButton = document.createElement('button');
            startGameButton.classList.add('startGameButton');
            startGameButton.textContent = 'Zacznij odpowiadać!';
            gameDiv.appendChild(startGameButton);

            // POCZĄTEK FAZY UDZIELANIA ODPOWIEDZI
            


            const interPhase = () => {
                startGameButton.classList.add('opacity');
                setTimeout(() => {gameDiv.removeChild(startGameButton);}, 400)

                const loadingDiv = document.createElement('div');
                loadingDiv.classList.add('loadingDiv');
                loadingDiv.innerHTML = '<i class="fas fa-spinner"></i>';
                
                setTimeout(()=> {
                    gameDiv.appendChild(loadingDiv);
                }, 700)
                

                setTimeout(() => {
                    loadingDiv.classList.add('opacity');
                    setTimeout(() => {gameDiv.removeChild(loadingDiv)}, 100)
                },4300);
            };

            const renderGame = () => {
                const whiteDiv = document.createElement('div');
                whiteDiv.classList.add('wihteDiv');
                gameDiv.appendChild(whiteDiv);
                whiteDiv.classList.add('opacity');
                
                const trueDiv = document.createElement('div');
                trueDiv.classList.add('trueDiv');
                gameDiv.appendChild(trueDiv);
                trueDiv.textContent = trueQsts[0];

                const interText = document.createElement('h1');
                interText.classList.add('section__exampleQuestions', 'interText');
                interText.textContent = 'CZY';
                gameDiv.appendChild(interText);

                const falseDiv = document.createElement('div');
                falseDiv.classList.add('falseDiv', 'trueDiv');
                gameDiv.appendChild(falseDiv);
                falseDiv.textContent = falseQsts[0];

                const divForPercAndHeart = document.createElement('div');
                divForPercAndHeart.classList.add('divForPercAndHeart');
                gameDiv.appendChild(divForPercAndHeart);

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
                        gameDiv.removeChild(interText);
                        gameDiv.removeChild(trueDiv);
                        gameDiv.removeChild(falseDiv);

                        const resultDiv = document.createElement('div');
                        resultDiv.classList.add('resultDiv');
                       
                        const exit = document.createElement('span');
                        exit.classList.add('exit');
                        exit.textContent = '+';
                        gameDiv.appendChild(exit);
                        setTimeout(() => exit.style.opacity = '1', 2700)
            
                        exit.addEventListener('click', () => {
                            gameDiv.style.opacity = '0';
                            document.querySelector('.section').classList.remove('textBlur');
                            heartPercent = 0;
                            heartBigger = 1.3;
                            questionsCounter = 1;
                            points = 0;
                            setTimeout(() => {
                                gameDiv.style.display = 'none';
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
            
                        gameDiv.appendChild(resultDiv);
            
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
                    trueDiv.textContent = trueQsts[index];
                    falseDiv.textContent = falseQsts[index];
                    if (index === 5) {
                        index = 0;
                        trueQsts.splice(0);
                        falseQsts.splice(0);
                    }
            
                    
                })
                falseDiv.addEventListener('click', e => {
                    if(questionsCounter === 5) {
                        gameDiv.removeChild(interText);
                        gameDiv.removeChild(trueDiv);
                        gameDiv.removeChild(falseDiv);
            
                        const resultDiv = document.createElement('div');
                        resultDiv.classList.add('resultDiv');
                        
                        const exit = document.createElement('span');
                        exit.classList.add('exit');
                        exit.textContent = '+';
                        gameDiv.appendChild(exit);
                        setTimeout(() => exit.style.opacity = '1', 2700)
            
                        exit.addEventListener('click', () => {
                            gameDiv.style.opacity = '0';
                            document.querySelector('.section').classList.remove('textBlur');
                            heartPercent = 0;
                            heartBigger = 1.3;
                            questionsCounter = 1;
                            points = 0;
                            setTimeout(() => {
                                gameDiv.style.display = 'none';
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
                        
                        gameDiv.appendChild(resultDiv);
            
                        setTimeout(() => {
                            resultDiv.classList.add('reOpacity');
                        }, 2000)
                    }
                    
                    //const answerValue = e.target.textContent;
                    questionsCounter++;
                    index++
                    trueDiv.textContent = trueQsts[index];
                    falseDiv.textContent = falseQsts[index];
                    if (index === 5) {
                        index = 0;
                        trueQsts.splice(0);
                        falseQsts.splice(0);
                    }
                })
            }



            const startGameFunction = () => {
                interPhase();
                setTimeout(renderGame, 5400)
            }


            startGameButton.addEventListener('click', startGameFunction)
        }
    })
}

startBtn.addEventListener('click', startGame)