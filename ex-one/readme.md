Exercise 1: Finding Inputs and Appending Text

1. HTML Structure:

Create a basic HTML structure with input elements (text, email, text), and span elements positioned next to each input.
Optionally, set a name attribute for the first two input elements ("name" and "email") for illustration. One input can have the name set to "color" to be excluded.

2. jQuery Code:

Include the jQuery library using <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>.
Wrap your code within the $(document).ready(function() { ... }) function to ensure DOM readiness.

3. Selecting Inputs:

Use the selector $('input[name!="color"]') to target all input elements that don't have a name attribute set to "color". This excludes the input with the specific name for this exercise.

4. Iterating and Appending Text:

Utilize the .each(function() { ... }) method to iterate over each selected input element.
Inside the loop, $(this).next() identifies the element that comes immediately after the current input element (assuming it's a <span>).
Use .text("Click to see the effect") to set the text content of the next element (the <span>) to the specified message.

Expected Outcome:

When you load the page, you'll see three input fields with empty spans next to them.
Clicking outside any input (losing focus) triggers the jQuery code, and the message "Click to see the effect" appears in the corresponding span.
