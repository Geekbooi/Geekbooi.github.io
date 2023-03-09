function tip_calculator(){
    // Define the tip_calculator function that takes no parameters.

    let subtotal = document.getElementById("subtotal").value;
    let tip = document.getElementById("tip").value;
    // Get the values of the HTML elements with IDs "subtotal" and "tip" and store them in variables.

    let answer = eval(`${subtotal} * (${tip} / 100)`);
    // Calculate the tip amount by evaluating the expression `${subtotal} * (${tip} / 100)` using the eval() function. Store the result in a variable called "answer".

    answer = Math.round(answer * 100) / 100;
    // Round the "answer" to two decimal places using the Math.round() function.

    document.getElementById("your_total").innerHTML = `$${answer}`;
    // Update the innerHTML of the HTML element with ID "your_total" to display the value of "answer" with a dollar sign in front of it.
}
