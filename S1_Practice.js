const arr = ['sha','afreeen',[1,2,3]]

arr[0] = 'shahul'
arr.forEach(val=>console.log(val))

// arr = arr; not possible to assign value to the const variable 
let str= 'sunday is only for revision';

console.log(str[0])

let find =arr.find(val=>val=='shahul')
console.log(find)

// array of object
let obj = [
{empName :  "shahul",empNum : '7826927252'}, 
 {empName :  "icon",empNum : '7826927252'},
 {empName :  "oragotan",empNum : '7826927252'},
 {empName :  "icon",empNum : '1234'},
 {empName :  "oragotan",empNum : '1234'},
]
//find
let objFind = obj.find(val=>val.empName == 'shahul')
console.log(objFind)
//foreach 
obj.forEach((val,index)=>{
    console.log(index + " : "+ val.empName + val.empNum)
})

let named = 'Iconic'
let objMap=obj.map((val,index)=>{
    if (val.empName == 'icon') {
      return  { empName :named, empNum: '1234'}  ; //not happening
    }
    else{
        return val
    }
})

console.log(objMap)

//filter 

let filterArr =obj.filter(val=>val=='icon')
console.log(filterArr)

//reduce method

let reduceArr = arr.reduce((temp,val)=>temp+=val.length,0)
console.log(reduceArr)

var expense = [
    {
        item: "Bed",
        cost: 1499,
        date: "02-23-2018"
    },
    {
        item: "Phone",
        cost: 2499,
        date: "02-23-2018"
    },
    {
        item: "Book",
        cost: 400,
        date: "02-23-2018"
    },
    {
        item: "Mattress",
        cost: 700,
        date: "02-23-2018"
    },
    {
        item: "Food",
        cost: 300,
        date: "02-23-2018"
    }
];

//reduce the cost

let totalExpense = expense.reduce((tem,val) => tem+=val.cost,0)
console.log(totalExpense)

//slice
let sliceArr = obj.slice(1); //1 to end
console.log(sliceArr)

let sliceArr12 =obj.slice(1,3) //1,2
console.log(sliceArr12)

//splice

obj.splice(2) //index 2 to end

console.log(obj)

let arrNum = [1,3,342,214,424421,134,452,5,2,223]

arrNum.splice(4,1,424) // index, len, new add in index
console.log(arrNum)

let detail = {
    ename: 'Zoya',
    age: 22,
    country: 'India'
}
//crud
detail['age'] = 23
detail['job_role'] = 'SDE'
delete detail['country']
console.log(detail)
console.log(detail.hasOwnProperty('age'))