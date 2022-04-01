const board = document.querySelector('.board');
for (let j = 0; j < 8; j++) {
    let boxColor;

    let isBoxStartedColorWhite = j % 2 === 0 ? true : false;

    for (let i = 0; i < 8; i++) {

        if(isBoxStartedColorWhite){
            boxColor = i % 2 === 0 ? 'white' : 'black';
        }else{
            boxColor = i % 2 === 0 ? 'black' : 'white';
        }

        const box = document.createElement('div');
        box.style.width = `${board.clientWidth / 8}px`;
        box.style.height = `${board.clientHeight / 8}px`;
        box.className = 'perBox';
        box.style.backgroundColor = boxColor;
        board.appendChild(box);
    };
};

const perBox = document.querySelectorAll('.perBox');
perBox.forEach(e =>{
    e.addEventListener('click', ()=>{
        perBox.forEach(elem =>{
            if(e != elem){
                elem.classList.remove('red');
            }
        });

        e.classList.toggle('red');
    })    
})