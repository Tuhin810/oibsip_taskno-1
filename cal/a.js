let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
   button.addEventListener('click' , (e) =>{


 // to get answer after clicking = button//
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }


 // to clear the input box after clicking C//
       else if (e.target.innerHTML == 'C') {
           string =' ';
           document.querySelector('input').value = string;
       }


    else if (e.target.innerHTML == 'π') {
        string = string + 3.14159265;
        document.querySelector('input').value = string;
    }


 // to take number/button in the input box//
      else { 
        string = string + e.target.innerHTML;
        document.querySelector('input').value =string;
      }


   })
})