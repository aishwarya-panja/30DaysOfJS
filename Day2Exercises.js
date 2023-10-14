// LEVEL 1
// Ques 1,2,3,4,5,6,7,8,9,10

let challenge = "30 Days Of JavaScript" ;
console.log(challenge) ;
console.log(challenge.length) ;
console.log(challenge.toUpperCase()) ;
console.log(challenge.toLowerCase()) ;
console.log(challenge.substr(0,2)) ;
console.log(challenge.substr(2,20)) ;
console.log(challenge.includes('Script')) ;
console.log(challenge.split()) ;
console.log(challenge.split(' ')) ;

// Ques 11,12,13,14,15,16,17,18,19,20

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" ;
console.log(company.split(' ')) ;
console.log(challenge.replace('JavaScript','Python')) ;
console.log(challenge.charAt(15)) ;
console.log(challenge.charCodeAt(11)) ;
console.log(challenge.indexOf('a')) ;
console.log(challenge.lastIndexOf('a')) ;

let sen = "You cannot end a sentence with because because because is a conjunction" ;
console.log(sen.search('because')) ;
let str = " 30 Days of JavaScript " ;
console.log(str.trim()) ;

// Ques 21,22,23,24,25
console.log(challenge.startsWith('30')) ;
console.log(challenge.endsWith('Script')) ;
console.log(challenge.match('a')) ;
let str1 = "30 Days of " ;
console.log(str1.concat("JavaScript")) ;
console.log(challenge.repeat(2)) ;

// LEVEL 2
// Ques 1,2,3,5,6,7,8,9,11,12,4,10
console.log("There is no exercise better for the heart than reaching down and lifting people up.") ;
console.log( "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.") ;
console.log(typeof('10')) ;
let var1 = "jargon" ;
let var2 = "python" ;
console.log(var1.match('on')) ;
console.group(var2.match('on')) ;
let var3 = "I hope this course is not full of jargon." ;
console.log(var3.search('jargon')) ;
let r = Math.floor(Math.random() * (10 - 0 + 1)) + 0 ;  //Math.floor(Math.random() * (max - min + 1)) + min
console.log(r) ;
console.log(Math.floor(r)) ;
let a = Math.floor(Math.random() * (100 - 50 + 1)) + 50 ;
console.log(a) ;
let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0 ;
console.log(b) ;
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125") ;
console.log(sen.slice(31,54)) ;


let num1 = parseFloat('9.8') ;
let num2 = 10 ;
console.log((typeof(num1)) === (typeof(num2))) ;

console.log("_________________________________") ;

function randomStr(len, arr) {
    let ans = '';
    for (let i = len; i > 0; i--) {
        ans +=
            arr[(Math.floor(Math.random() * arr.length))];
    }
    console.log(ans);
}
randomStr(10,'Javascript');

// LEVEL 3
// Ques 1,2,4,3
let sent = "'Love is the best thing in this world. Some found their love and some are still looking for their love." ;
console.log(sent.match('love')) ;
console.log(sen.match('because')) ;
let annualIncome = (5000*12)+ (15000*12)+10000 ;
console.log("total annual income is:", annualIncome) ;


const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching" ;
let word = sentence.replace(/[^\w\s]/g, "")
    .match(/\w+/g)
    .reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        if (!(acc[word] <= acc[acc.$])) acc.$ = [word];
        else if (acc[word] === acc[acc.$]) acc.$.push(word);
        return acc;
    }, {}).$;

console.log(word);