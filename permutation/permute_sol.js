/*
* Prototype fuction for swapping at two indices
* This function takes two parameters:
* 1. First index for swapping
* 2. Second index for swapping
*/
String.prototype.swap = function(firstIndex,secondIndex)
{
    let swapArray = this.split("");     //swapArray for storing character array[]
    /**
    * swaping by using third variable called temp
    */
    let temp = swapArray[firstIndex];               
    swapArray[firstIndex] = swapArray[secondIndex];
    swapArray[secondIndex] = temp;
    return swapArray.join("");          //returning swapped String
}


/*
* Function to store permutations of string
* This function takes two parameters:
* 1. Starting index of the string
* 2. Ending index of the string.
*/
function permutation(left,right)
{
	// Base case
    if(left==right){
        let inpuetperm = document.createElement('li');
        inpuetperm.innerText=textfield.value;
        document.querySelector('#list').appendChild(inpuetperm);
    }
    else
    {
        for (let i = left; i <= right; i++)
			{
				// Swapping done
				textfield.value = textfield.value.swap(left,i);

				// Recursion called
				permutation( left+1, right);

				// Base case
				textfield.value = textfield.value.swap(left,i);
			}
    }   
}

let textfield = document.querySelector("#perm");
textfield.addEventListener('input',(e)=>{
    permutation(0,textfield.value.length-1); 
});