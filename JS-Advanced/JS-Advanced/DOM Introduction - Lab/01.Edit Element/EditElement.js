function editElement(ref, match,replacer) {
    
    let text = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let newTxt = text.replace(matcher, replacer);
    ref.textContent = newTxt;
}

