var 바디 = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var 숫자배열 = [];

for(var i = 0; i < 4; i += 1){
    //var 뽑은것 = 숫자후보.pop(); //숫자후보에서 뽑힘. 사라짐
    //숫자배열.push(뽑은것);
    //var 뽑은것 = 숫자후보.shift();
    //숫자배열.unshift(뽑은것);
    //var 뽑은것 = 숫자후보.splice(5,2); //숫자후보에서 뽑힘. 사라짐
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; //1~9까지 랜덤 숫자를 뽑음

}

var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
바디.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수() { //엔터를 쳤을 때

});

