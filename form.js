window.addEventListener('DOMContentLoaded', (event) => {
    const shoppingListItemInput = document.querySelector(".shopping-list__item");
    const shoppingListItemSubmitButton = document.querySelector(".shopping-list--submit__button");
    
    const handleShoppingListItem = () => {
        const shoppingListItem = document.createElement('li');
        const shoppingListItemValue = shoppingListItemInput.value;
        shoppingListItem.innerText = shoppingListItemValue;
        setAttributeForShoppingListItem(shoppingListItem);
        shoppingListItem.appendChild(handleRemoveIcon());

        return shoppingListItem;
    }
    const setAttributeForShoppingListItem = (listItem) => {
        listItem.setAttribute("contenteditable", true);
        listItem.setAttribute("class", "list__item");
        listItem.setAttribute("title", shoppingListItemValue);
    }

    const handleRemoveIcon = () => {
        const removeIcon = document.createElement("img");
        removeIcon.src = "close-icon.png";
        removeIcon.setAttribute("class", "remove-icon");

        return removeIcon;
    }

    shoppingListItemSubmitButton.addEventListener("click", (event) => {
        event.preventDefault;
        const shoppingList = document.querySelector(".shopping-list");
        shoppingList.appendChild(handleShoppingListItem());
    });

    const allRemoveIcons = document.querySelectorAll(".remove-icon");
    for (let index = 0; index < allRemoveIcons.length; index++) {
        const deleteIcon = allRemoveIcons[index];
        const listItemToDelete = deleteIcon.parentElement;
        deleteIcon.addEventListener("click", (event) => {
            listItemToDelete.remove();
        });
    };
   


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

    for (var index = 1; index <= 45; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
        console.log("FizzBuzz");
        } else if (index % 3 == 0) {
        console.log("Fizz");
        } else if (index % 5 == 0) {
     console.log("Buzz");
        }
    };
});

