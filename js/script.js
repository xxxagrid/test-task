'use strict'

const peopleItem = document.querySelector('.people');
const list = document.querySelector(".list");
const dataBlock = document.querySelector('.datas');

const names = ['Ruby Sharpe', 'Kiara Ballard', 'Tara Mcmillan', 'Mari Acevedo', 'Maggy Delaney', 'Xandra Jacobs', 'Cassady Keller', 'Coby Holman', 'Whilemina Branch', 'Rashad Bates'];
const emails = ['tortor@aol.net', 'quisque@protonmail.com', 'natoque.penatibus@hotmail.couk', 'augue@outlook.edu', 'in.sodales@aol.edu', 'nec.euismod@aol.org', 'pretium@icloud.ca', 'pellentesque.ut@google.net', 'erat.sed@protonmail.com', 'enim.etiam.imperdiet@google.edu'];

let li, id;
let person;

for(let i = 0; i < 10; i++){
    li = document.createElement('li');  //Adding li elements
    li.innerText = names[i];  //Putting datas to li
    list.appendChild(li); 
    li.setAttribute('id', `person__${i}`);  //Setting the id to every li
}
id = document.getElementsByTagName('li');  //Getting id

peopleItem.addEventListener('click', showData);

function showData(){
    for(let i = 0; i < 10; i++){
        person = names[i] + '\n' + 'Email: ' + emails[i];  //Adding email to person's name
        dataBlock.innerHTML = person;
    }
}