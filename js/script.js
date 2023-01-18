'use strict'
const people = [
    {
      name: "Ruby Sharpe",
      email: "tortor@aol.net"
    },
    {
      name: "Kiara Ballard",
      email: "quisque@protonmail.com"
    },
    {
      name: "Tara Mcmillan",
      email: "natoque.penatibus@hotmail.couk"
    },
    {
      name: "Mari Acevedo",
      email: "augue@outlook.edu"
    },
    {
      name: "Maggy Delaney",
      email: "in.sodales@aol.edu"
    },
    {
      name: "Xandra Jacobs",
      email: "nec.euismod@aol.org"
    },
    {
      name: "Cassady Keller",
      email: "pretium@icloud.ca"
    },
    {
      name: "Coby Holman",
      email: "pellentesque.ut@google.net"
    },
    {
      name: "Whilemina Branch",
      email: "erat.sed@protonmail.com"
    },
    {
      name: "Rashad Bates",
      email: "enim.etiam.imperdiet@google.edu"
    }
];

const peopleBlock = document.querySelector('.people');
const list = document.querySelector(".list");
const activePerson = document.querySelector(".active");

let id, li, person;

people.forEach((person) => {
    li = document.createElement('li');
    li.innerText = person.name;
    li.setAttribute('id', person.email)
    list.appendChild(li);
});

const showPeopleEmail = (e) => {
    activePerson.innerText = e.target.id;
}

peopleBlock.addEventListener('click', showPeopleEmail);

