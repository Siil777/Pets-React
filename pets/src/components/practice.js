//code war
//target - целевое значение
//Write a function that takes an array of numbers (integers for the tests) and a target number. 
//It should find two different items in the array that, when added together, give the target value. 
//The indices of these items should then be returned in tuple / list
// function twoSum(numbers, target) {
    
//     const numIndex = {}
    
//     for(let i = 0; i < numbers.length; i++) {
//       const complement = target - numbers[i];
    
//     if(numIndex.hasOwnProperty(complement)) {
//       return [numIndex[complement], i]
//       }  
//       numIndex[numbers[i]] = i;
//     }
    
//       return null;
//   }
//   const numbers = [2,7,11,15];
//   const target = 9;
//   const result = twoSum(numbers, target);
//   console.log(result);


//   //reverse string
//   function backword(string) {
//     return string.split(' ').map(word =>{
//         return word.length >=5 ? string.split('').reverse().join('') : word;
//     }).join(' ')


//   }
//   console.log(backword('Infinity'));

// //Your task is to sort a given string. Each word in the string will contain a single number. This 
// //number is the position the word should have in the result.
//   function order(words) {
//     if (!words) return ""; 
  
//     return words
//     .split(' ') // Split the string into words
//     .sort((a, b) => {
//       const firstA = a.match(/\d+/)[0]; // Extract the number from word 'a' using a regex
//       const secondB = b.match(/\d+/)[0]; // Extract the number from word 'b' using a regex

//       return firstA - secondB; // Compare the numbers to sort the words
//       })
//       .join(' '); 
//   }
  
//   const someWords = "thi2s is1 one3 tes4t";
//   const outcome = order(someWords);
//   console.log(outcome); 
// //capitalized first letter
// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1);
     
//    }
//    const capitalized = capitalizeWord('grape');
//    console.log(capitalized);

//    //century
//    function century(year) {
//     return Math.ceil(year / 100);
//   }
//   //num to string
//   function numberToString(num) {
//     return num.toString();
//   }
//   const num = 7;
//   const somenum = numberToString(num);
//   console.log(somenum)

//   //string to num
//   const stringToNumber = function(str){
//     return parseInt(str, 10);
//   }
//   const string ="123";
//   const result1 = stringToNumber(string);
//   console.log(result1);

//   function turnNumberInZeroOrOne(n){


//         if(!n) return "some error";
//         {
//             n.split(' ')
//             .map(char => char < 5 ? '0' : '1').join('');
//         }

//             return n;

//   }

// const n = '12345897654322';
// console.log(turnNumberInZeroOrOne(n));


// const turnStrIntoNum = function (str) {
//     return Number(parseInt(str, 10));
// }

// const str1 = '666';
// console.log(turnStrIntoNum(str1));


// function theOpposite(existanace){
//     return existanace.split(' ').map((prove)=> {
//         return prove.length >= 1 ? existanace.split('').reverse().join('') : prove;
//     }).join('');
// } 
// const word = 'kutsevälja';
// console.log(theOpposite(word));

// function toCatchTheOrder(order) {
//     if(!order) return ""; 

//     return order
//                 .split(' ')
//                 .sort((c, d) => {
//                    const foundationA = c.match(/\d+/)[0];
//                    const foundationB = d.match(/\d+/)[0];

//                     return foundationA - foundationB;
//                 })
//                 .join(' ');
// }
// const situation = '4who 5is 2going 3play 1game';
// const jet = toCatchTheOrder(situation);
// console.log(jet);
// function order(words) {
//     if (!words) return ""; 
  
//     return words
//     .split(' ') // Split the string into words
//     .sort((a, b) => {
//       const firstA = a.match(/\d+/)[0]; // Extract the number from word 'a' using a regex
//       const secondB = b.match(/\d+/)[0]; // Extract the number from word 'b' using a regex

//       return firstA - secondB; // Compare the numbers to sort the words
//       })
//       .join(' '); 
//   }
  
//   function calculateSurfaceOfcircle(surface) {
//     return 2*surface*3.14;
//   }
// const surface = 20;
// const calculation = calculateSurfaceOfcircle(surface);
// console.log(`surface of the circle equal ${calculation}`);
// //remove1111
// function remove(c) {
//     if(c.length <= 2) {
//         return "";
//     }else {
//         return c.slice(1, -1);
//     }
// }
// console.log(remove("kill"));

// function deleteSpace(shift) {
//     return shift.replace(/\s+/g, '');
// } 
// console.log(deleteSpace("I will kill you"));

// function changeplaceswithnum(somenum) {
//     return somenum.split(' ')
//            .sort((di, lion)=>{
//             nottoday = di.match(/\d+/)[0];
//             onceandforall = lion.match(/\d+/)[0];

//             return nottoday - onceandforall;
//            }).join(' ')
// }
// const first = "5not 4today not3 tommorow2";
// const blood = changeplaceswithnum(first);
// console.log(blood);

// function turninto(into) {
//     return into.split(' ').map(it => {
//         return it.length >= 2  ? into.split('').reverse().join('') : it;
//     }).join('');
// }
// console.log(turninto('eviLog'));

// function zero(one) {
//     return one.split('')
//            .map(one => one < '5' ? '0' : '1');
// }
// console.log(zero('56748930217658493'));
// //countNumberofNum
// function countDown(di) {
//     return di.toString().split('').length
// }
// const someThing = 123456789;
// const endOfDays = countDown(someThing);
// console.log(endOfDays);

// function even(odd) {
//     if (odd % 2 === 0) {
//         return "even";
//     }
//     else {
//         return "odd";
//     }
// }
// console.log(even(5));
// //weight111111
// function bmi(weight,height) {
//     bmi = (weight/(height**2))

//     if (bmi <= 18.5) {
//         return "underweight";
//     }
//     else if (bmi <=25.0) {
//         return "normal";
//     }
//     else if (bmi <=30.0) {
//         return "overwight";
//     }else {
//         return "obese";
//     }
// }
// console.log(bmi(80.0));

// function firstOneBig(secondone) {
//     return secondone[0].toUpperCase() + secondone.slice(1);
// }
// console.log(firstOneBig('kutsekvalifikatsiooni'));

// function repeatSofN(s,n) {
//     return n.repeat(s) + n.replace(/\s+/g, '');
// }
// console.log(repeatSofN(4, 'Go to hell'));

// //discount
// function calculateDiscount(d) {
//     var pricePerdayToRentAcAr = 40;
//     var totalcostperallDays = pricePerdayToRentAcAr * d;

//     if(d>=7) {
//         totalcostperallDays -= 50;
//     }
//     else if (d>=3) {
//         totalcostperallDays -= 20;
//     }
//     return totalcostperallDays;
// }
// const mydiscount = calculateDiscount(10);
// console.log(`your discount is ${mydiscount}`);

// function findEnds(binary, pass) {
//     var savePassword = {}

//     for(let i=0; i<binary.length; i++) {
//         getBinary = pass - binary[i];

//         if(savePassword.hasOwnProperty(getBinary)) {
//             return [savePassword[getBinary], i]
//         }
//         savePassword[binary[i]] = i;
//     }
//     return null;
// }
// const binary = [2,7,11,15];
// const pass = 9;
// console.log(findEnds(binary, pass));

// //ends
// function wordEnds(inding, str) {
//     return str.endsWith(inding);
// }
// console.log(wordEnds('Win', 'in'));

// function fakeBin(x) {
//     return x.split('').map(sytax => sytax < 5 ? '0' : '1');
// }
// const output = "1234567890";
// const intheend = fakeBin(output);
// console.log(intheend);


// function nextFake(f) {
//     if(typeof f!= 'string') {
//         throw new Error ('input must be a string');
//     }
//     return f.split('')
//     .map(digit=>{
//         if(isNaN(digit)) {
//             throw new Error ('input must contain only digits');
//         }
//         return digit < 5 ? '0' : '1';
//     })
//     .join();
    
// }
// const transerData = "5555555555555554";
// const encodeData = nextFake(transerData);
// console.log(encodeData);

// function NextLevel(n) {
//     let reversed = n.split('').reverse().join('');

//     if(reversed<=2) {
//         return "";
//     }
//     let sliced = reversed.split('').slice(0,-1).join('');

//     let transformed = sliced.split('').map(est=>est < 5 ? '0' : '1').join('');

//     return transformed;
// }
// console.log(NextLevel('fffffff'));
// //function some function
// function vanishextrasym(string) {
//     function permute(str,l,r,result) {
//         if(l===r) {
//             result.push(str);
//         } else {
//             for(let i=l;i<=r;i++) {
//                 str = swap(str,l,i);
//                 permute(str,l + 1,r,result);
//                 str = swap(str,l,i);
//             }
//         }
//     }
//     function swap(str,i,j) {
//         console.log(`${str}`);
//         if(typeof str==='string') {
//             var list = str.split('');
//         } else {
//             throw new Error('string must contain only letters')
//         }
//         [list[i],list[j]] = [list[j], list[i]];
//         return list.join('');
//     }
//     let result = [];
//     permute(string,0,string.length -1, result);
//     return [...new Set(result)];
// }
// const clearDataTransfer = 'abc';
// const dataVanished = vanishextrasym(clearDataTransfer);
// console.log(dataVanished);

// function startAgain(generation) {

//     let reversed = generation.split('').reverse().join('')

//     let sliced =  reversed.slice(1, -1);

//     let output = sliced.split('').map(character =>{
//         return character.length  > 5 ? generation.split('').reverse().join('') : character;
//     })
//     .join(' ')
//     return output;
// }
// console.log(startAgain('GoLive'));

// /* function toReadable(number) {
//     const beloweTwenty = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen',
//         'fiveteen','sixteen','seventeen','eightteen','nineteen'];
//     const aboveTwenty = ['','','twenty,','thirty','fourty','sixty','seventy','eighty','ninety'];
//     const hundred = ['hundred'];
//     function convert(number) {
//         if(number < 20) {return beloweTwenty[number]};
//         if(number < 100) {return aboveTwenty[Math.floor(number / 10)] + (number % 10 ? ' ' + aboveTwenty[number % 10] : '')};
//         if(number < 1000) {return beloweTwenty[Math.floor(number / 100)] + ' ' + hundred[0] + (number % 100 ? convert(number % 100) : '') };
//     }
//     return convert(number);
// }
// function testtoReadable(){
//     const testCases = [{input: 10, expected: 'ten'}];

//     testCases.forEach(test => {
//     const result = toReadable(test.input);
//         console.log(`toReadable ${test.input} = ${result}`);
//     }); 
// }
// testtoReadable(); */

// function up(p) {
//     return p[0].toUpperCase() + p.slice(1);
// }
// console.log(up('up'));
// //multinum
// function findMultiplyNum(sentence) {
//     return sentence.split(' ')
//            .map(word=>{
//             const match = word.match(/\d+/);
//             return match ? {word, num: parseInt(match[0],10)} : {word, num: Infinity}
//            })
//            .sort((a,b) => a.num - b.num)
//            .map(item => item.word)
//            .join(' ')

// }
// console.log(findMultiplyNum('roof7 a2 like1 thin6 on4 hot5 cat35'));

// function oldoption(option) {
//     return option.split(' ')
//                  .sort((c,v)=>{
//                     const firstCv = c.match(/\d+/)[0];
//                     const SecondCv = v.match(/\d+/)[0];
//                     return firstCv - SecondCv;
//                  })
//                  .join(' ')
        
// }
// console.log(oldoption('third3 second2 first1'));

// function multiExample(deadespace) {
//     let started = deadespace.split('').reverse().join('');

//     let shorted = started.split('').slice(1,-1);
        
//     let massive = shorted[0].toUpperCase() + shorted.slice(1).join('');

//     let nospace = massive.replace(/\s+/g, '');

//     return nospace;

// }
// console.log(multiExample('s k r u f'));

// function ingridientsThroughList(shop, gun) {

//     let gunShops = [{boston: 33, toronto: 55, london: 99}];

//     let availableShop = [];
//     for(let j=0; j < gunShops.length; j++) {
//         const shop = gunShops[j];
//         const entriesShop = Object.entries(shop);
//         const reverseShop = entriesShop.reverse()


//         availableShop.push(reverseShop.map(([key,value])=> `${key} ${value}`).join(', '));
//     }


//     let list = [{ak: 47, fnp: 90, ak1: 12}];
//     let availableList = [];
//     for(let i=0; i < list.length;i++) {
//         const IhaveOneExit = list[i]
//         const entries = Object.entries(IhaveOneExit);
//         const sliced = entries.slice(0, -1);

//         availableList.push(sliced.map(([key,value])=>`${key} ${value}`).join(', '));
//     }
//     return {shop: availableShop, gun: availableList};
// }
// console.log(ingridientsThroughList());

// //to count ingridient for a recipe
// function cakes(recipe, available){
//     minCake = Infinity;
//     for(let ingridients in recipe) {
//         if(available[ingridients]) {
//             const possibleEverything = Math.floor(available[ingridients] / recipe[ingridients])

//             minCake = Math.min(minCake, possibleEverything);
//         }else {
//             return 0; // if ingridient is not found
//         }
//     }
//     return minCake;
// }


// const recipe = {flour: 500, milk: 200, eg: 1};
// const available = {flour: 1200, milk: 600, eg:5};
// const description = cakes(recipe,available)
// console.log(`this amout of cakes you can make ${description}`);

// function tryOnce() {
//     const recipe1 = {flour: 500, milk: 200, eg: 1};
//     let second = {};
//     for (let f=0;f < recipe1.length; f++) {
//         const showRecipe = recipe1[f];
//         const just = Object.entries(showRecipe);
//         second.push(just.map(([key,value])=>`${key} ${value}`).join(''));
    
//         return {second}
//     }
// }
// console.log(tryOnce());
// const recipe1 = {flour: 500, milk: 200, eg: 1};
// console.log(recipe1);

// function ItisgoingToBefound(item){

//     let Romulus = [{text:'top6 the5 on4 I3 will2 be1'}];

//     let thething = Romulus.toString().replace(/\s+/g, '');

//     if(thething==='string') {
//         thething.split(' ')
//         .sort((q,o)=>{
//          const outThere = q.match(/\d+/)[0]
//          const outHere = o.match(/\d+/)[0]

//          return outThere - outHere;
//         })
//         .join('')
//     }else{
//         for(let g=0; g<thething;g++ ){
//             const theunivers = thething[g]
//             const BigBang = Object.entries(theunivers)
//             const afterLife = BigBang.reverse()
            
//             Romulus.push(afterLife.map(([key,value])=>`${key} ${value}`).join(' '));
//         }
//     }
//     return {Romulus};
// }
// console.log(ItisgoingToBefound());

// function TestNumber(minuse) {

//    return -minuse;
    
// }
// console.log(TestNumber(-400));
// ///time!!!!!

// function NoTime(time) {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const secs = time % 60;
//     const transformedHours = String(hours).padStart(2, '0');
//     const transformedMinutes = String(minutes).padStart(2, '0');
//     const transformedSeconds = String(secs).padStart(2, '0');


//     return `${transformedHours}:${transformedMinutes}:${transformedSeconds}`;
// }

// console.log(NoTime(3600));


// function checkIfNumIsInString(ifis) {
//     var dig = 
//         ifis.split(' ')
//         .sort((p,b)=>{
//             call = p.match(/\d+/)[0]
//             cell = b.match(/\d+/)[0]

//             return call - cell;
//         })
//         .join(' ')

//         var theone = dig.split('').reverse().join('');

            
//         return theone;
      



// }
// console.log(checkIfNumIsInString('it8 like7 I6 notebook5 bad4 not3 is2 MSI1'));

// function binBin() {
//     let paper = [{numbers: '5647483838'}];
//     let roker = []; 
//     for(let i=0; i < paper.length; i++) {
//         const bbq = paper[i]
//         const qbb = bbq.toString().split('').map(point=>point < 5 ? '0':'1').join('');
//         roker.push(qbb);
//     }
//     return {roker};
// }
// const above = '5647483838'
// console.log(binBin());

// function perm(string) {

//     function permu(str,l,r,result) {
//         if(l===r) {
//             result.push(str);
//         }else{
//             for(let i=l;i<=r;i++)
//                 str = sw(str,l,r);
//                 permu(str,l+1,r,result);
//                 str = sw(str,l,r);
//         }
//        }
//        function sw(str,i,j) {
//         const masive = str.split('');
//         [masive[i], [masive[j]]] = [masive[j], [masive[i]]]
//         return masive.join('');
//        }
//        let result = [];
//        permu(string,0,string.length-1,result);
//        return [...new Set(result)];

// }
// console.log(perm('cba'));
// function deleteymbols (text, patterns) {
//     const lines = text.split('\n');
//     const strippedLines = lines.map(line=>{
//         let minIndex = line.length;
//         patterns.forEach(patter=>{
//             const index =line.indexOf(patter);
//             if(index !== -1 && index < minIndex) {
//                 minIndex = index;
//             }
            
//         })
//         return line.substring(0,minIndex).trim();
//     })
//     return strippedLines.join('\n');
// }
// const text = 'aples, watermelon # bananas !';
// const markers = ['#','!'];
// console.log(deleteymbols(text,markers));

// function CowboyOnTheBech(string) {
//     function AbitTiredOfLife(str,l,r,result) {
//         if(l===r) {
//             result.push(str);
//         }else {
//             for(let i=l;i<=r;i++) {
//                 str = CowboyAgainstMadMax(str,l,r);
//                 AbitTiredOfLife(str,l+1,r,result);
//                 str = CowboyAgainstMadMax(str,l,r);
//             }
//         }
//     }
//     function CowboyAgainstMadMax(str,i,j) {
//         const WhoIsGoingToWin = str.split('');
//         [WhoIsGoingToWin[i], WhoIsGoingToWin[j]] = [WhoIsGoingToWin[j], WhoIsGoingToWin[i]]

//         return WhoIsGoingToWin.join('');
//     }
//     let result = [];
//     AbitTiredOfLife(string,0,string.length -1,result);
//  return [...new Set(result)];
// }
// console.log(CowboyOnTheBech('bcc'));

// var NumToChar = function(array) {
//     return array.map(char => String.fromCharCode(char)).join('');
// }
// const array = [104,101,108,108,111];
// console.log(NumToChar(array));

// function peopleLikeEat(food,snack) {
//     minFood = Infinity;
//     for(let stuff in food) {
//         if(snack[stuff]) {
//             const allThingsTogether = Math.floor(snack[stuff] / food[stuff]);

//             minFood = Math.min(minFood, allThingsTogether);
//         }else {
//             return 0;
//         }
        
//     }
//     return minFood;
// }
// const food = {bif: 200, lamb: 500, pancake: 10}
// const snack = {bif: 2000, lamb: 5000, pancake: 100}
// //merge
// function mergeBranches (arr1,arr2) {
//     let merge = []
//     let a=0, q=0;
//     var united = arr1.concat(arr2).sort((a,q)=> a - q);

//     for(let b=0;b<united.length;b++){
//         //if previous found symbol(num) is not the same
//         if(united[b]!==united[b+1]){
//             merge.push(united[b])
//         }
//     }
//     return merge;
// }
// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];
// console.log(mergeBranches(arr1,arr2));

// console.log(peopleLikeEat(food,snack));
// /* getContainer.addEventListener('click', function(){
    
// }) */
// //1. TwoSum 2. reverse string 3.Find num in a word 4.Calculate sruface of a circle 5.remove the first and the last symbol 
// //6. make uppercase the first letter 7.century 8.Num to string/ string to num 9.convert numbers to binary format 
// //10. Make a word on the contrary 11. Delete spaces 12. even/odd 13. Calculate weight 14.Calculate discount 15.Word ends
// //16. Vanish 17. ToReadable/testToReadsable 18. Multinumber 17. Test number math.abs
// var ArrowNum = function (array) {
//   return array.map(num=> String.fromCharCode(num)).join('')
// }
// const numeric = [72,101,108,108,111,32,87,111,114,108,100,33];
// console.log(ArrowNum(numeric));

// //Awsome one!!!!!
// function putWordsInOrderOfAnumAndReadByTheFirstNum(PrinceDracula) {

//     return PrinceDracula.split(' ')
//                    .map((against)=>{
//                     const MehmedSecond = against.match(/\d+/)
//                     return MehmedSecond ? {against, num: parseInt(MehmedSecond[0][0], 10)} : {against, num: Infinity};
//                    })
//                    .sort((Walahia, OsmanEmpire)=> Walahia.num - OsmanEmpire.num)
//                    .map((RomaniaToday)=> RomaniaToday.against)
//                    .join(' ')

// }
// const Basilika = "friends7 became6 mightbe5 they4 after3 life25";
// console.log(putWordsInOrderOfAnumAndReadByTheFirstNum(Basilika));


// //function to calculate in column
// function calculateInColumn(num1,num2) {
//     const number1 = num1.toString().split('').reverse();
//     const number2 = num2.toString().split('').reverse();

//     let maxLength = Math.max(number1.length, number2.length)
//     let tulemus = [];

//     for(let k=0; k < maxLength; k++) {
//         const digitone =  parseInt(number1[k] || '0', 10);
//         const digitwo  =  parseInt(number2[k] || '0', 10);

//         tulemus.push(digitone + digitwo);
//     }
//     return parseInt(tulemus.reverse().join(''), 10);
// }
// console.log(calculateInColumn(40,37));


// function backback(back) {
//     return back.split(' ')
//                .map((tase)=>{
//                 return tase.length > 1 ? back.split('').reverse() : tase;
//                })
//                .join(' ')
// }
// console.log(backback("GoLive"));

// function IhaveNoIdeaWhatIWouldNeedIt(somenum1,sometarget) {
//             let IndexOfNumber = {}

//             for(let v=0; v <= somenum1.length; v++){
//                 const doubleComplement = sometarget - somenum1[v];

//                 if(IndexOfNumber.hasOwnProperty(doubleComplement)){
//                     return [IndexOfNumber[doubleComplement], v]
//                 }
//                 IndexOfNumber[somenum1[v]]=v;
//             }
//             return null;
// }
// const somenum1 = [5,10,1,12];
// const sometarget = 6;
// console.log(IhaveNoIdeaWhatIWouldNeedIt(somenum1, sometarget));


// function numTurnInString(kum) {
//     const belowNum = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen'
//         ,'fiveteen','sixteen','eighteen','nineteen'
//     ];
//     const ten = ['','','twenty','thirty','fourty','fivety','sixty','seventy','eighty','ninety'];
//     const hundreds = ['hungred'];
//     function change(kum) {
//         if(kum < 20) {return belowNum[kum]};
//         if(kum < 100) {return ten[Math.floor(kum / 10)] + (kum % 10 ? ' ' + ten[kum % 10] : '')};
//         if(kum < 1000) {return belowNum[Math.floor(kum / 100)] + ' ' + hundreds[0] + (kum % 100 ? change(kum % 100) : '')};
//     }
//     return change(kum);
// }
// function numTurnInstring(){
//     const kumned = [{enter: 10, atexit: 'ten'}];

//     kumned.forEach(put => {
//         const inTheEnd = numTurnInString(put.enter);
//         console.log(`numTurnInString ${put.enter} = ${inTheEnd}`);
//     });
// }
// numTurnInstring();


// function association(ar) {
//     return ar.map(item=>{
//         const [color, association] = item;
//         return [{[color]: association}];
//     });
// }
// const ar = [["Red","Rose"]];
// console.log(association(ar));

// function mergeAgain(mass1,mass2){
//     let combined = [];
//     let f=0, j=0;

//     var uniteAgain = mass1.concat(mass2).sort((f,j)=>f-j);

//     for(let jey=0; jey < uniteAgain.length; jey++){
//         if(uniteAgain[jey]!=uniteAgain[jey+1]){
//             combined.push(uniteAgain[jey]);
//         }
//     }
//     return combined;
// }
// const combat1 = [1,2,3,4];
// const combat2 = [5,6,7,8];
// console.log(mergeAgain(combat1,combat2));

// function calculateAssociation(...objects) {
//     let object = {}

//     objects.forEach((obj)=>{
//         for(let key in obj){
//             if(object.hasOwnProperty(key)){
//                 object[key]+=obj[key];
//             }else{
//                 object[key]=obj[key];
//             }
//         }
//     })
//     return object;
// }
// const obj1 = {a: 5, b: 4, c: 3};
// const obj2 = {a: 4, b: 3, c: 2};
// console.log(calculateAssociation(obj1,obj2));

// function vanishextrasym(string) {
//     function permute(str,l,r,result) {
//         if(l===r) {
//             result.push(str);
//         } else {
//             for(let i=l;i<=r;i++) {
//                 str = swap(str,l,i);
//                 permute(str,l + 1,r,result);
//                 str = swap(str,l,i);
//             }
//         }
//     }
//     function swap(str,i,j) {
//         console.log(`${str}`);
//         if(typeof str==='string') {
//             var list = str.split('');
//         } else {
//             throw new Error('string must contain only letters')
//         }
//         [list[i],list[j]] = [list[j], list[i]];
//         return list.join('');
//     }
//     let result = [];
//     permute(string,0,string.length -1, result);
//     return [...new Set(result)];
// }
// const clearDataTransfer1 = 'abc';
// const dataVanished1 = vanishextrasym(clearDataTransfer1);
// console.log(dataVanished1);

// function TestNumbers(nigative) {
//     let positiveToString = Math.abs(nigative).toString();
//     let reverseTheNum = positiveToString.split('').reverse().join('');
//     let turnItBackInt = parseInt(reverseTheNum, 10);

//     return turnItBackInt;
// }
// console.log(TestNumbers(-501));
// function test() {
//     var number =  [{input: -454, expected: 454}];
//     number.forEach(check=>{
//         const iterate = TestNumbers(check.input);
//         console.log(`input = ${check.input}, expected: ${iterate}`);
//     })
// }
// console.log(test());
// function twoSum(numbers, target) {
    
//     const numIndex = {}
    
//     for(let i = 0; i < numbers.length; i++) {
//       const complement = target - numbers[i];
    
//     if(numIndex.hasOwnProperty(complement)) {
//       return [numIndex[complement], i]
//       }  
//       numIndex[numbers[i]] = i;
//     }
    
//       return null;
//   }

//1.function two sum. 2. reverte string. 3. Calculate association 4. merge two array. 5. find a number in word and put them in order
//6. string to number 7.remove first and last character 8. remove spaces in string 9.Count number of digits in string 
//10. function calculate weight 11. Calculate discount 12. ends 13. fake binary 14.vanishExtrasym 15.multinum 16. Cakes
//17.No time 18.Test numbers 19. make readable numbers 20. calculate in column


function trgetOne(digOne, tag){
    const numIndex = {}

    for(let h=0; h<digOne.length;h++){
        const comp = tag -digOne[h];

        if(numIndex.hasOwnProperty(comp)){
         return   [numIndex[comp], h]
        }
        numIndex[digOne[h]]=h;
    }
    return null;
}
const digOne = [2,3,4,5,6];
const tag = [10];

console.log(trgetOne(digOne, tag));

function reverseS(str){
    return str.split(' ').map(char => char.split('').reverse().join('')).join('')
}
console.log(reverseS('GoLive'));

//associatons
function calculateAssociations(...objects){
    const object = {};

    objects.forEach((obj)=>{
        for(let key in obj){
            if(object.hasOwnProperty(key)){
                object[key]+=obj[key];
            }else{
                object[key]=obj[key];
            }
        }
    });
    return object;
}

const obj1 = {a: 3 , b: 5};
const obj2 = {a: 5 , b: 3};
console.log(calculateAssociations(obj1,obj2))

function merge(arr3,arr4){
    const mergeA = [];

    const unitedA = arr3.concat(arr4).sort((s,l)=> s-l);

    for(let t=0; t<unitedA.length;t++){
        if(unitedA[t]!==unitedA[t+1]){
            mergeA.push(unitedA[t]);
        }
    }
    return mergeA;
}
const arr3 = [2,3,4,5,9];
const arr4 = [10,11,12,13];

console.log(merge(arr3,arr4));


function findNum(ifnum){
    return ifnum.split(' ').sort((key,value)=>{
        const first = key.match(/\d+/)[0];
        const second = value.match(/\d+/)[0];

        return first - second;
    })
    .join(' ')
}
console.log(findNum('hello2 world1'));

//6
function strToNum(str) {
    const change = Number(parseInt(str, 10));

    if(isNaN(change)){
        return false;
    }else{
        return "valid input" + change;
    };

}

console.log(strToNum(' 99999'));
//7
function lastFirst(one){

        return one.slice(1,-1);
}
console.log(lastFirst('hello!'));

//8
function NoSpace(space){
    return space.toString().length;
}
console.log(NoSpace(123456677))

//10
function Weight(weight,height){
    const heightP = height / 100;
    const bmi = (weight/(heightP**2));

    if(bmi<=18.0){
        return 'underweight';
    }else if(bmi<=25.0){
        return 'normal weight'
    }else if(bmi>=30.0){
        return 'overweight'
    }else{
        return 'obese'
    }
}
const weight = 75;
const height = 174;
console.log(Weight(weight, height));
const Morse_Dec = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(ex) {
    return ex.match(/.{10}/g)
             .map(key => {
                 if (key === '**********') {
                     return ' ';
                 } else {
                     const dec = key.match(/.{2}/g)
                                    .map(value => {
                                        if (value === '10') return '.';
                                        if (value === '11') return '-';
                                        return '';
                                    })
                                    .join('');
                     return Morse_Dec[dec] || ' ';
                 }
             })
             .join('');
}
console.log(decode('10110000001110101010**********1110101010')); 