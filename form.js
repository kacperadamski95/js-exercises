window.addEventListener('DOMContentLoaded', (event) => {
    //zmienna odpowiedzialna za input, do którego wpisuję
    const shoppingListItemInput = document.querySelector(".shopping-list__item");
    //zmienna przypisana do submit buttona
    const shoppingListItemSubmitButton = document.querySelector(".shopping-list--submit__button");
    //zainicjowanie funkcji, która zajmuje się ListItem
    
    const handleShoppingListItem = () => {
        //zmienna, do której przypisuję nowy element(który tutaj tworzę), czyli do <ul> dodaję <li>
        const shoppingListItem = document.createElement('li');
        //pobranie wartości inputa i wyświetlenie, takim sposobem dostaję się do jakiejś właściwości obiektu, na przykład value,name inputa
        const shoppingListItemValue = shoppingListItemInput.value;
        //do <li>value</li> dodaję do li value wpisane przez użytkownika 
        shoppingListItem.innerText = shoppingListItemValue;
        setAttributeForShoppingListItem(shoppingListItem);
        //pozwalam mojemu value w <li> być editable, contenteditable jest atrybutem, który pozwala mi na edycję
        shoppingListItem.appendChild(handleRemoveIcon());

        return shoppingListItem;
    }
    //utworzyłem funkcję pod zmienną const, w której spakowałem wszystkie setAttribute dla shoppingListItem, tutaj nie daję na końcu return, bo nei muszę niczego zwracać, nie ma appendChild
    const setAttributeForShoppingListItem = (listItem) => {
        listItem.setAttribute("contenteditable", true);
        //jakbym chciał wystylować <li> w css, a nie mam tej klasy w htmlu to mogę stworzyć sobie klasę tutaj i odwołac się do niej w css
        //dwie linijki pod robią to samo
        // shoppingListItem.classList.add("list__item");
        listItem.setAttribute("class", "list__item");
        //tutaj dodałem atrybut title do <li>, który będzie miał nazwę value wpisaną przez użytkownika
        listItem.setAttribute("title", shoppingListItemValue);
    }

    const handleRemoveIcon = () => {
        //tworzę zmienną, która jest img
        const removeIcon = document.createElement("img");
        removeIcon.src = "close-icon.png";
        removeIcon.setAttribute("class", "remove-icon");

        return removeIcon;
    }

    //dodaję eventlistener do przypisku submit
    shoppingListItemSubmitButton.addEventListener("click", (event) => {
        //zapobiega przedwczesnemu przesłaniu formy   
        event.preventDefault;
        //zmienna ustawiona na tag <li>
        const shoppingList = document.querySelector(".shopping-list");
        //tutaj wywołuję zmienną, którą ustawiłem na górze (cel: uporządkowanie)
        
        
        
        //do <ul> dodaję <li> z value wpisanym przez użytkownika w środku
        
        shoppingList.appendChild(handleShoppingListItem());

    });

    //chcemy na oddzielnej funkcji złapać wszystkie remove-icon za pomocą querySelectorAll i za pomoca pętli for na kliknięcie remove icon usunąć element
    const allRemoveIcons = document.querySelectorAll(".remove-icon");
    //index=0 okresla od której pozycji z listy ma zacząć robić pętlę (0=pierwsza pozycja), index<... oznacza ile razy ma wykonać pętlę, index++=od początku do końca, index-- = od końca do początku
    for (let index = 0; index < allRemoveIcons.length; index++) {
        //tutaj określam, która dokładnie ikonę zaznaczam z wybranych 4
        const deleteIcon = allRemoveIcons[index];
        //tutaj określam zmienną, w której jest i element z listy <li> i dodatkowo ikonka menu, czyli <li>adam małysz<img><li>
        const listItemToDelete = deleteIcon.parentElement;
        //na kliknięcie wyrzycam ikonkę
        deleteIcon.addEventListener("click", (event) => {
            listItemToDelete.remove();
        });
    };
   






    //********************* */
    const shoppingListItemInputSecond = document.querySelector(".shopping-list__item-2");
    const shoppingListItemSubmitButtonSecond = document.querySelector(".shopping-list--submit__button-2");

    shoppingListItemSubmitButtonSecond.addEventListener("click", (event) => {
        event.preventDefault;
        const shoppingListItemValueSecond = shoppingListItemInputSecond.value;
        const shoppingListSecond = document.querySelector(".shopping-list-2")
        const shoppingListItemSecond = document.createElement('li');

        shoppingListItemSecond.innterText = shoppingListItemValueSecond; 
        shoppingListItemSecond.setAttribute("conteneditable", true);
        shoppingListItemSecond.setAttribute("class", "list_item_second");
        shoppingListSecond.appendChild(shoppingListItemSecond);
    });

    //exercising loop for 
    //print all odd numbers from 7 to 31
    // for (let i = 7; i <= 31; i++) {
    //     if (i % 2 !=0) {
    //     console.log(i);
    // }
    //     }
    //print event numbers from 10 to -20
    // for (i = 10; i >= -20; i--) {
    //     if (i % 2 ==0) {
    //         console.log(i);
    //     }
    // }
    /* #5 — Iterate through all numbers from 1 to 45. Print the following:
    For multiples of 3 print “Fizz”
    For multiples of 5 print “Buzz”
    For multiples of 3 and 5 print “FizzBuzz”
    */
//    for (var i = 1; i <= 45; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//     console.log("Fizz");
//     } else if (i % 5 == 0) {
//     console.log("Buzz");
//     }
// }
    // let thisIsAnArray = ["element1", "element2", "element3", "element4"];
    // for (let i = 0; i < thisIsAnArray.length; i++) {
    //     console.log(thisIsAnArray[i]);
    // }
    let numberArrays = [7,10,153,210,14];
    let sum = 0;
    for (let i = 0; i < numberArrays.length; i++) {
        sum = sum + numberArrays[i];
    }
    console.log("The sum is: " + sum);
});