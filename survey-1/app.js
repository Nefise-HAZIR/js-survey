const trueAnswer=['E','E','E','E'];

const form=document.querySelector('.form');
const result=document.querySelector('.message p')
const message=document.querySelector('.message')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let score=0;
    
    let userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswer.forEach((answer,index)=>{
        if(answer==trueAnswer[index]){
            score+=25;
        }
        else{

        }
    });

    message.classList.remove('d-none')
    message.classList.add('filter');

    if(score==25){
        result.textContent='hiç iyi değil';
    }
    else if(score==50){
        result.textContent="idare eder";
    }
    else if(score==75){
        result.textContent="iyi";
    }
    else if(score==100){
        result.textContent='süper';
    }
    else{
        result.textContent="berbat"
    }

    

})