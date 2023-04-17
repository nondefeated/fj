let a,c,object;
a=[]
c=[]
object=[0,1,2,3,4,5,6,7,8,9]
for (let key in object) {
     a[key]=Number(prompt("enter id"))
       
    }
console.log(a)
function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
console.log(insertionSort(a))
