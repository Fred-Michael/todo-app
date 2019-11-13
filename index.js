const base = document.querySelector('body');
const addForm = document.querySelector('.add');
const ulElmnt = document.querySelector('.todos');
const colorchange = document.querySelector('#bg-color');
const todoSearch = document.querySelector('.search input');

const parseTodo = item => {
   const html = 
   `
      <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${item}</span>
         <i class="far fa-trash-alt delete"></i>
      </li>
   `
   ulElmnt.innerHTML += html;
   addForm.reset();
}

//adding todo lists
addForm.addEventListener("submit", event => {
   event.preventDefault();
   const todo = addForm.add.value.trim();
   if (todo.length) {
      parseTodo(todo);
   }   
});

//delete todo lists
ulElmnt.addEventListener("click", e => {
   if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
   }
});

//search todo lists
todoSearch.addEventListener('keyup', () => {
   const term = todoSearch.value.trim().toLowerCase();
   filterer(term);
});

const filterer = (word) => {
   Array.from(ulElmnt.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(word))
      .forEach(todo => todo.classList.add('hiddenList'));

   Array.from(ulElmnt.children)
      .filter(todo => todo.textContent.toLowerCase().includes(word))
      .forEach(todo => todo.classList.remove('hiddenList'));
}

//changing the background of the page
colorchange.addEventListener("change", () => {
   changeBackground(base, colorchange.value)
});

const changeBackground = (item, color) => {
   item.style.backgroundColor = color;
}