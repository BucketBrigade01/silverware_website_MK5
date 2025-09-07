const popup_buttons = document.querySelectorAll('.member-item');
const dialogs = document.querySelectorAll('dialog');
const close_buttons = document.querySelectorAll('.close');

console.log("hello");

// Add event listeners to each member button
popup_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Show the corresponding dialog
        if (dialogs[index]) {
            dialogs[index].showModal();
        }
    });
});

// Add event listeners to each close button
close_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Close the corresponding dialog
        if (dialogs[index]) {
            dialogs[index].close();
        }
    });
});

