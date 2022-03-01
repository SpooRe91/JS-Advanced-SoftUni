import { getData } from './requests.js';
import { render } from 'https://unpkg.com/lit-html?module'
import { studentTemplate } from './template.js';



const students = await getData();


update();

function update(match = '') {
   const result = students.map(s => studentTemplate(s, compare(s, match)));
   render(result, document.querySelector('tbody'));
}

document.getElementById('searchBtn').addEventListener('click', search);

function search() {
   const match = document.getElementById('searchField').value;
   update(match);
}

function compare(student, match) {
   return Object.values(student).some(s => s.toLowerCase().includes(match.toLowerCase()) && match);
}

