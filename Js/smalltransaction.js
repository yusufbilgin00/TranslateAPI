function myFunction() {
  
    var copyText = document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
}

const textAreaOne = document.querySelector('.text-one')
const textAreaTwo = document.querySelector('.text-two')
const crossBtn = document.querySelector('.cross-btn')

textAreaOne.addEventListener('input', function(){
    const numberWord = document.querySelector('.word-number')
    numberWord.textContent = textAreaOne.value.length
})

textAreaOne.addEventListener('input', () => {
    if(textAreaOne.value.length > 0){
        crossBtn.classList.add('display')
        crossBtn.addEventListener('click', removeAllText)
    }else{
        crossBtn.classList.remove('display')
    }
})
function removeAllText(){
    textAreaOne.value = ""
    textAreaTwo.value = ""
    crossBtn.classList.remove('display')
}