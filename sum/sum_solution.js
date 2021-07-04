
let sum = function(a,b)
{
    if(b === undefined)
        return (b) => a+b;
    return a+b;
};

let oneField = document.querySelector('#a');
let twoField= document.querySelector('#b');
let threeField = document.querySelector('#c');

oneField.addEventListener('input',(e)=>{
    threeField.value=sum(Number(oneField.value))(Number(twoField.value));
});
twoField.addEventListener('input',(e)=>{
    threeField.value=sum(Number(oneField.value))(Number(twoField.value));
}); 

