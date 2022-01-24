function notify(message) {
  let resultBox = document.getElementById('notification');
    resultBox.textContent=message;
    resultBox.style.display = 'block';

    resultBox.addEventListener('click',onClick);

    function onClick(){
      resultBox.style.display = 'none';
    }
  
}