const correctAnswers=['E','E','E','E'];

const form=document.querySelector('.questions-form');
const result=document.querySelector('.result')

form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;

    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;
        }
        
    })

    result.classList.remove('d-none');
    let i=0;
    const bastir=setInterval(() => {
        result.querySelector('span').textContent=`${i}%`;
        if(i==score){
            clearInterval(bastir);
        }
        else{
            i++;
        }
    }, 20);
    //result.querySelector('span').textContent=`${score}%`;

    console.log(score);
})

// setTimeout(()=>{
//     console.log('nef');
// },2000);
// let i=0;
// const bastir=setInterval(() => {
//     console.log('nefise')
//     i++;
//     if(i==4){
//         clearInterval(bastir);
//     }
// }, 1000);