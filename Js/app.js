class UI{
    constructor(){
        this.apiKey = "trnsl.1.1.20200522T065305Z.175b2dc0fc34366e.1b1a17cbe0c51f86b97725478768e5cd34844ed1"
        this.xhr = new XMLHttpRequest()
        this.textone = document.querySelector('.text-one')
        this.texttwo = document.querySelector('.text-two')
        this.language_one = document.getElementById('language-one')
        this.language_two = document.getElementById('language-two')
    }
    translate(){
        let getText = this.language_two.options[this.language_two.options.selectedIndex].value
        
        let endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.textone.value}&lang=${getText}`
        let textTWO = document.querySelector('.text-two')
        this.xhr.open("GET", endpoint, true)
        this.xhr.onload = function(){
            if(this.status === 200){
                let word = JSON.parse(this.responseText)    
                textTWO.value = word.text[0]
            }
        }
        this.xhr.send()
    }
    changeLanguage(language){
        this.translate()
        // console.log(language.options[language.options.selectedIndex].value)
    }
}

function events(){
    const textOne = document.querySelector('.text-one')
    const languageTwo = document.querySelector('#language-two')
    const ui = new UI()
    
    textOne.addEventListener('input', function(){
        ui.translate()
    })
    languageTwo.addEventListener('change', function(){
        ui.changeLanguage(languageTwo)
    })
}

window.addEventListener('DOMContentLoaded', events)