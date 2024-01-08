let tyanka = document.querySelector('.tyanka')
let count = document.querySelector('.count');
let button_level = document.querySelector('.button_level');
let price = document.querySelector('.price');
let tyanka2_level = document.querySelector('.tyanka2_level');
let tyanka2_price = document.querySelector('.tyanka2_price');
let error = document.querySelector('.error');
let number = 0;
let level = 0;
price.textContent = 10;
count.textContent = 0;
error.textContent = 'Разработал C0NS7 =)'

button_level.addEventListener('click', function() {
    if (number >= 10 && level < 1) {
        number = number - 10;
        level = 1;
        price.textContent = 50;
    } else if (number >= 50 && level < 2) {
        number = number - 50;
        level = 2;
        price.textContent = 100;
    } else if (number >= 100 && level < 3) {
        number = number - 100;
        level = 3;
        price.textContent = 300;
    } else if (number >= 300 && level < 4) {
        number = number - 300;
        level = 4;
        price.textContent = 500;
    } else if (number >= 500 && level < 5) {
        number = number - 500;
        level = 5;
        button_level.textContent = 'Последний уровень'
        price.textContent = '';

        if (level === 5) {
            var button2 = document.querySelector('.button_level');
            button2.style.cursor = 'no-drop';
            button2.disabled = true;
        }

    } else {
        error.textContent = 'У вас недостаточно средств!'
        
        setTimeout(function() {
            error.textContent = 'Разработал C0NS7 =)';
        }, 2000);
    }
    
    count.textContent = number;
})

tyanka.addEventListener('click', function() {
    if (level == 1) {
        number+=2;
    } else if (level == 2) {
        number+=3;
    }  else if (level == 3) {
        number+=4;
    } else if (level == 4) {
        number+=5; 
    } else if (level == 5) {
        number+=6;
    } else {
        number++;
    }

    count.textContent = number;
})

tyanka2_level.addEventListener('click', function() {
    if (number >= 300) {
        number = number - 300;
        tyanka.src = 'assets/img/anime-2.png';
        count.textContent = number;

        tyanka2_level.textContent = 'Последний уровень';
        tyanka2_price.textContent = '';

        var button2 = document.querySelector('.tyanka2_level');
        button2.style.cursor = 'no-drop';
        button2.disabled = true;
    } else {
        error.textContent = 'У вас недостаточно средств!'
        
        setTimeout(function() {
            error.textContent = 'Разработал C0NS7 =)';
        }, 2000);
    }
});

