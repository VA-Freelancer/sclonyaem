// Получено сертификатов
// 0
// 1 - сертификат
// 2 - 4 - сертификата
// 5-20 - сертификатов
// 21 - сертификат
// 22 - 24  - сертификата
// 25-30 - сертификатов
// 31 сертификат
// 32-34 сертификата
// 35-40 сертификатов
// 95 - 100 - сертификатов
// % 10 
// 1 - ''
// 2..4 + 'a'
// 5..9 || 0 'ов'

const w = "сертификат";
const out1 = document.querySelector('.out-1');

document.querySelector('.r-1').addEventListener('input', function(){
  const num = +this.value;
  const n = num % 10;
  let res = "";
  if(num === 0){
    out1.textContent = "";
    return;
  }
  if(num >= 11 && num <= 20){
    res = "ов";
  }
  else if(n === 1 ){
    res = "";
  }
  else if(n >= 2 && n <= 4){
    res = "а";
  }
  else if((n >= 5 && n <= 9) || n === 0 ){
    res = "ов";
  }
  out1.textContent = `Получено ${num} ${w}${res}`;
});
