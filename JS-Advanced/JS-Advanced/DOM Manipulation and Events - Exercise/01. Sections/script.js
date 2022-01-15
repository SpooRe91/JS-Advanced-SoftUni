function create(words) {

   for (const word of words) {
      let newElement = document.createElement('DIV')
      let par = document.createElement('P')

      document.getElementById('content')
         .appendChild(newElement)
         .appendChild(par).textContent = word
   }

   Array
      .from(document.querySelectorAll('p'))
      .forEach((el) => {
         el.style.display = 'none';
      })

   Array
      .from(document.getElementById('content').children)
      .forEach((el) => {
         el.addEventListener('click', onClick);
      })


   function onClick(ev) {
      ev.target.children[0].style.display = '';
   }

}