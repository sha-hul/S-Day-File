//Arrays

//obj to array

let object = {
    'name': 'Shahul',
    'age' : 24,
    'height':6.4
}

console.log([object][0].name)


//Array Method

//pop, push, shift, unshift, reverse

//sort
let arrNum = [1,2352,414,52]
arrNum.sort((a,b)=>a-b) //O(nlogn)
console.log(arrNum)

//foreach won't return anything 
let forEach= arrNum.forEach((val,index)=>{
    console.log(`Index of ${index} : ${val}`)
})
console.log(forEach) //undefined

//map
let MapArr = arrNum.map((val)=> val%2==0 )
console.log(MapArr)

//filter
let filterArr = MapArr.filter(val=> val==true)
console.log(filterArr)

//find

let findElement = MapArr.find((val)=>val == false)
console.log(findElement)
//Reduce
let addArr = arrNum.reduce((val,accumulater)=>{
    accumulater+=val
},0)
console.log(addArr)

//Splice 

let num = [1,2,34,5,6,78,5]
num.splice(2,1,3)
num.splice(4,Infinity,7,8,9)
console.log(num)

//slice

let spliceNum = num.slice(3,8)
console.log(spliceNum)

//crud operation in Object


//c
object.aim = 'SDE'
//u
object.name = 'Hameed';
console.log(object)
object['name'] = 'SZ'
//r
console.log(object)
//d
delete object['height'] 
console.log(object)
//Destructing of Object and Array
const {name, age, aim } = object

const _empName = name;

console.log(_empName,aim,age)

const [one, two, three, four] = num;

console.log(one + three)

//to avoid floating point error make sure to use Math functions
console.log(12.33212/4);
console.log(Math.pow(3,2));
console.log(Math.PI);
console.log(Math.min(25,131,13));
console.log(Math.max(12342,414,15,1.521,3245424.1));
console.log(Math.abs(-1313.423));
console.log(Math.floor(0.42));
console.log(Math.ceil(0.42));
console.log(Math.round(2.5))
console.log(Math.round(Math.random()*6)); //num from 0 to 1

console.log('Special Numbers  :  -0, NaN, infinity, -infinity');

const saveMe=function(){
    console.log("Help");
}
saveMe()


function OuterFunction() {
    let Fav = 'SDE';
    function InnerFunction() {
        console.log(Fav);
    }
    return InnerFunction;
}

const ClosureFun = OuterFunction();
ClosureFun()

callback(true,false,Work)
function callback(a,b,operation) {
    return operation(a,b)
}
function Work(a,b) {
    if (a==true && b==true) console.log('Work Done')
    else console.log('Work is pending');
}
function Task(a,b) {
    if (a==true && b==true) console.log('Task Done')
    else console.log('Task is pending');
}
