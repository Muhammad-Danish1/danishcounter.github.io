// ********************* set initial  count 0 **********************
let count = 0;

// ************************** seleact btn and value **************

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

Array.from(btns).forEach((btn )=>{
    btn.addEventListener('click', (e)=>{
        const style = e.target.classList;

        //*************** decrease and increase btn ***************
        if(style.contains('decrease')){
            count --;
        }
        else if (style.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }

        // ******************** count color change ******************
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;

    })
})