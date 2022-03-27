//empty array
let arr = [23,2,3,4]
console.log(arr) 

//  array with elements

let eleArr=[1,2,3,4,"hello there" ,false,2.0,"A" , arr]
console.log(eleArr)

console.log("element at 4th index:"+  eleArr[4])
console.log("element at 0th index:"+  eleArr[0])
console.log("element at last index:"+ eleArr[8])

eleArr[3] = "Nothing";
console.log(eleArr)

console.log("##########################################################################################")

// Array methods
 //push
console.log("Before push :" + eleArr)
eleArr.push("new item")
console.log("After push :"+ eleArr)

//pop
console.log("before pop:"+eleArr)
console.log("popped element is :" + eleArr.pop())
console.log("After  pop: "+ eleArr)


//shift
console.log("Before shift:",eleArr )
console.log(eleArr.shift() )
console.log("After shift: " ,eleArr)

//unshift
console.log("before unshift:",eleArr)
eleArr.unshift("change here")
console.log("After unshift :"+eleArr);

//length of array
console.log("length of Array:",eleArr.length)

