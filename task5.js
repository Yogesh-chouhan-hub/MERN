let languages=["JavaScript","Python","TypeScript","Rust","Go(Golang)","Java","Kotlin"];
let lst="";
let sel="";
for(let i in languages){
lst+=`<li>${languages[i]}</li>`;
sel+=`<option>${languages[i]}</option>`;
}
document.getElementById('list').innerHTML=lst;
let val = document.getElementById('about').innerHTML=sel;

