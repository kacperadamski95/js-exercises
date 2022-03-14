window.addEventListener('DOMContentLoaded', (event) => {
    //zmienna odpowiedzialna za input, do którego wpisuję
    const shoppingListItemInput = document.querySelector(".shopping-list__item");
    //zmienna przypisana do submit buttona
    const shoppingListItemSubmitButton = document.querySelector(".shopping-list--submit__button");
    
    //dodaję eventlistener do przypisku submit
    shoppingListItemSubmitButton.addEventListener("click", (event) => {
        //zapobiega przedwczesnemu przesłaniu formy   
        event.preventDefault;
        //pobranie wartości inputa i wyświetlenie, takim sposobem dostaję się do jakiejś właściwości obiektu, na przykład value,name inputa
        const shoppingListItemValue = shoppingListItemInput.value;
        //zmienna ustawiona na tag <li>
        const shoppingList = document.querySelector(".shopping-list");
        //zmienna, do której przypisuję nowy element(który tutaj tworzę), czyli do <ul> dodaję <li>
        const shoppingListItem = document.createElement('li');
        
        //do <li>value</li> dodaję do li value wpisane przez użytkownika 
        shoppingListItem.innerText = shoppingListItemValue;
        //pozwalam mojemu value w <li> być editable, contenteditable jest atrybutem, który pozwala mi na edycję
        shoppingListItem.setAttribute("contenteditable", true);
        //jakbym chciał wystylować <li> w css, a nie mam tej klasy w htmlu to mogę stworzyć sobie klasę tutaj i odwołac się do niej w css
        //dwie linijki pod robią to samo
        // shoppingListItem.classList.add("list__item");
        shoppingListItem.setAttribute("class", "list__item")
        //tutaj dodałem atrybut title do <li>, który będzie miał nazwę value wpisaną przez użytkownika
        shoppingListItem.setAttribute("title", shoppingListItemValue);
        //do <ul> dodaję <li> z value wpisanym przez użytkownika w środku
        shoppingList.appendChild(shoppingListItem);
    });
});