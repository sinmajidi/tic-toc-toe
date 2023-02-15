const tictactoe = (function(){
    const infoElement = document.getElementById('info');
    console.log(infoElement)
    const cellElements = document.querySelectorAll('.cell')
    const cells = [];
    let player = 'O';
    let playing = true;
    infoElement.innerText =player +" :در حال بازی";
    cellElements.forEach((item,index)=>{
        item.addEventListener('click',(event)=>cellClickHandler(event,index))
        cells[index] ={
            element : item,
            value : null,
            reset(){
                this.element.classList.remove(this.value)
                this.value = null
            }
        }
    })
    function cellClickHandler(event,index){
        if(playing && cells[index].value ===null){
            cells[index].value = player;
            cells[index].element.classList.add(player)
            togglePlayer();
            checkWinner()
        }
    }
    function togglePlayer(){
        // if (player==='O')
        //     player='X';
        // else
        //     player='O';
        player = player==='O' ? 'X':'O';
        infoElement.innerText = player +" :در حال بازی";
    }
    function checkWinner(){
        let winner = null;
        if(cells[0].value!==null && cells[0].value===cells[1].value && cells[0].value===cells[2].value) winner = cells[0].value;//1.row
        else if(cells[3].value !== null && cells[3].value === cells[4].value && cells[3].value === cells[5].value) winner = cells[3].value; // 2. row
        else if(cells[6].value !== null && cells[6].value === cells[7].value && cells[6].value === cells[8].value) winner = cells[6].value; // 3. row
        else if(cells[0].value !== null && cells[0].value === cells[3].value && cells[0].value === cells[6].value) winner = cells[0].value; // 1. col
        else if(cells[1].value !== null && cells[1].value === cells[4].value && cells[1].value === cells[7].value) winner = cells[1].value; // 2. col
        else if(cells[2].value !== null && cells[2].value === cells[5].value && cells[2].value === cells[8].value) winner = cells[2].value; // 3. col
        else if(cells[0].value !== null && cells[0].value === cells[4].value && cells[0].value === cells[8].value) winner = cells[0].value; // dia ltr
        else if(cells[2].value !== null && cells[2].value === cells[4].value && cells[2].value === cells[6].value) winner = cells[2].value; // dia rtl
        if(winner!==null){
            playing=false;
            infoElement.innerHTML = winner+' برنده <button onClick="tictactoe.restart()">شروع مجدد</button>'
        }else if(
            cells[0].value !==null && cells[1].value !== null && cells[2].value !== null && 
            cells[3].value !== null && cells[4].value !== null && cells[5].value !== null && 
            cells[6].value !== null && cells[7].value !== null && cells[8].value !== null
        ){
            playing = false;
            infoElement.innerHTML = "پایان بازی  <button onClick='tictactoe.restart()'>شروع مجدد</button>"
        }
    }
    return{
        restart(){
            playing = true;
            player = 'X';
            infoElement.innerText = player +" :در حال بازی";
            cells.forEach(item=>item.reset())
        }
    }
})();