let string = ""; // blank string to concatinate all the inputs we put
let buttons = document.querySelectorAll('.button'); //query selector select all the element which has class name button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {//Add an event listener that fires when a user clicks a button:
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        // else if(e.target.innerHTML == '^'){
        //   string=eval*2(string);
        //   document.querySelector('input').value=string;
        // }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;//The innerHTML property sets or returns the HTML content (inner HTML) of an element.

            document.querySelector('input').value = string;//The value property sets or returns the value of the value attribute of a text field.

        }

    })
})
