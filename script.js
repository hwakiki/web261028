// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 황규영(2651075)
const titles = ["아이언맨"," 아이언맨2"," 아이언맨3", "인터스텔라","스파이더맨: 브랜드 뉴 데이"];
const ratings = [7.7,6.9,6.9,8.4,8.4];
const years = [2008,2010,2013,2014,2026];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
for (let i = 0; i < ratings.length; i++){
    if (ratings[i] > max){
        max = ratings[i];
        maxIndex = i;
    }
}
console.log("최고:", titles[maxIndex], max);

let count = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        count++;
    }
}
console.log("8점 이상:", count + "편");

for (let i = 0; i < ratings.length; i++) {
    let label;
    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}