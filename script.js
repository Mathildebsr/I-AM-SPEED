function activateOkay() {
    const okay = document.querySelector('.okay');
    okay.classList.add('on');
    okay.style.pointerEvents = 'none';
    
    const hereWeGo = document.querySelector('.here-we-go');
    hereWeGo.style.display = 'flex';
    
  hereWeGo.style.position = 'absolute';
    hereWeGo.style.left = '50%';
    hereWeGo.style.transform = 'translateX(-50%)';
  
    const words = document.querySelectorAll('.here-we-go .word');
    
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('active');
            
            setTimeout(() => {
                word.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    word.style.transform = 'translateY(0)';
                }, 200);
            }, 300);
            
            if (index === words.length - 1) {
                setTimeout(() => {
                    animateFocus();
                }, 500);
            }
        }, index * 400);
    });
}

function animateFocus() {
    const focus = document.querySelector('.focus');
    focus.style.display = 'block';
    focus.style.animation = 'fadeIn 1.2s ease-in infinite alternate';
  
    setTimeout(() => {
        animateSpeed();
    }, 2000);
}

function animateSpeed() {
    const speed = document.querySelector('.speed');
    const speedWord = document.querySelector('.speed-move');
    speed.style.display = 'block';

    setTimeout(() => {
        speedWord.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.5), filter 0.9s';
        speedWord.style.transform = 'translateX(150vw)';
        speedWord.style.filter = 'blur(15px)';
        speedWord.style.opacity = '0';

        setTimeout(() => {
            speedWord.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.5), filter 0.9s';
            speedWord.style.transform = 'translateX(-150vw)';
            speedWord.style.filter = 'blur(15px)';
            speedWord.style.opacity = '1';

            setTimeout(() => {
                speedWord.style.transform = 'translateX(0)';
                speedWord.style.filter = 'blur(0)';
                
                setTimeout(() => {
                    animateRestOfText();
                }, 500);
            }, 300);
        }, 1000);
    }, 300);
}

function animateRestOfText() {
    const restOfText = document.querySelector('.rest-of-text');
    restOfText.style.display = 'flex';
    
    const iLetter = document.querySelector('.i-letter');
    const amWord = document.querySelector('.am-word');
    const speedNeon = document.querySelector('.speed-neon');
    const body = document.querySelector('body');

    iLetter.classList.add('active');
    
    setTimeout(() => {
        amWord.classList.add('active');
        body.classList.add('screen-shake');
        
        setTimeout(() => {
            body.classList.remove('screen-shake');
            iLetter.classList.add('final-state');
            amWord.classList.add('final-state');
        }, 800);
    }, 300);

    setTimeout(() => {
        speedNeon.classList.add('show-text', 'scale-normal');
        
        let flashCount = 0;
        const neonInterval = setInterval(() => {
            speedNeon.classList.toggle('neon-flash');
            flashCount++;
            
            if (flashCount >= 10) {
                clearInterval(neonInterval);
                speedNeon.style.animation = 'none';
                speedNeon.style.textShadow = '0 0 15px #ff1744';
                animateWinnerLosers();
            }
        }, 300);
    }, 1000);
}

function animateWinnerLosers() {
    const winnerLosers = document.querySelector('.winner-losers');
    const winner = document.querySelector('.winner');
    const losersWords = document.querySelectorAll('.losers-word, .shadow-word');
    
    winnerLosers.classList.add('show-text');
    
    setTimeout(() => {
        winner.classList.add('winner-pop');
        
        losersWords.forEach(word => {
            word.style.animation = 'none';
            word.style.opacity = '1';
            word.style.transform = 'none';
        });
        
        void winnerLosers.offsetWidth;
        
        losersWords.forEach((word, index) => {
            word.style.animation = `fallOut 0.8s ${index * 0.3}s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards`;
        });
        
        setTimeout(() => {
            winner.classList.add('centered');
            document.querySelectorAll('.winner-losers > :not(.winner)').forEach(el => el.style.opacity = '0');
        }, 1700);
        
    }, 500);
}