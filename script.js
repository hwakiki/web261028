// document.write("외부 스크립트 ");

console.log('확장프로그램으로출력');

let num =10;
num =30;
console.log(num);



let string1 = "Hello, world!";
let string2 = 'Hello, world';
console.log(string1);
console.log(string2);



let dan = 3;
let gugu = 8;

let string = `${dan} 곱하기 ${gugu}은 ${dan * gugu} 입니다.`; 
console.log(string);

let studentScore = {
 koreaScore:80,
 englishScore : 70,
 mathScore :90,
 sciendceScore :60
};

console.log(studentScore.koreanScore);
console.log(studentScore['englishScore']);

for(let i=1; i<9;i++){
    console.log(`i: ${i * 3}`);
    
}