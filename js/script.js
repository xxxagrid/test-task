'use strict'

const peopleItem = document.querySelector('.people');
const dataBlock = document.querySelector('.datas');
const names = ['Ruby Sharpe', 'Kiara Ballard', 'Tara Mcmillan', 'Mari Acevedo', 'Maggy Delaney', 'Xandra Jacobs', 'Cassady Keller', 'Coby Holman', 'Whilemina Branch', 'Rashad Bates'];
const emails = ['tortor@aol.net', 'quisque@protonmail.com', 'natoque.penatibus@hotmail.couk', 'augue@outlook.edu', 'in.sodales@aol.edu', 'nec.euismod@aol.org', 'pretium@icloud.ca', 'pellentesque.ut@google.net', 'erat.sed@protonmail.com', 'enim.etiam.imperdiet@google.edu'];

let list = document.querySelector(".list");

names.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

function setDataForPerson(p){
    let person;
    for(let i = p; i < 10; i++){
        person = names[i] + '\n' + 'Email: ' + emails[i];
        break;
    }
    let data = document.createElement('li');
    data.innerText = person;
    dataBlock.append(data);
}

peopleItem.addEventListener('click', showData);

function showData(event){
    if(event.target.closest('li')){
       setDataForPerson(0);
    }
}
