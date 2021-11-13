// high scores js file
document.addEventListener("DOMContentLoaded", function() {
    
    var highscoresEl = $('#highscores-list');

    for (var i = 0; i < localStorage.length; i++) {
        var highScoresItem = localStorage.getItem('userScore');
        console.log(highScoresItem);
    }
}
//     var shoppingItem = $('input[name="shopping-input"]').val();

//         if (!shoppingItem) {
//             console.log('No shopping item filled out in form!');
//             return;
//         }

//         var shoppingListItemEl = $(
//             '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//         );
//         shoppingListItemEl.text(shoppingItem);

//         // add delete button to remove shopping list item
//         shoppingListItemEl.append(
//             '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//         );

//         // print to the page
//         shoppingListEl.append(shoppingListItemEl);

//         // clear the form input element
//         $('input[name="shopping-input"]').val('');
//     }

//     // TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
//     // const deleteListItem = function


//     // TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
//     shoppingListEl.on('click', '.delete-item-btn', function (event) {
//         $(this).parent().remove();
//     });

//     shoppingFormEl.on('submit', handleFormSubmit);

// });