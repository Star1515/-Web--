//Сделать экспорт


const input = document.getElementById('input'); 
const blockTime = document.querySelector('.timer');
blockTime.innerHTML = 0;
input.value = 0;

let interval;

const a = document.getElementById('button_start').addEventListener('click', ()=> {
    
      blockTime.innerHTML = input.value;
      if (input.value < 0){
        input.value = 0;
        blockTime.innerHTML = 0;
    }
      clearInterval(interval);
      interval = setInterval (subtractTime, 1000);
});

const b = document.getElementById('button_stop').addEventListener('click', ()=> {
    clearInterval(interval);
});

const c = document.getElementById('button_clear').addEventListener('click', ()=> {
    blockTime.innerHTML = 0;
    input.value = 0;
});



function subtractTime(){
    if(blockTime.innerHTML > 0){
        blockTime.innerHTML--;
        input.value--;
    }
}

export {input, blockTime, interval, a, b, c};