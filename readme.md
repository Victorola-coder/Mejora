## html + jQuery + ajax

Introduction:

These programs demonstrate the use of jQuery to manipulate ib page content and respond to user interactions.

Libraries Used:

jQuery: A JavaScript library for simplifying DOM manipulation and event handling.
Overall Approach:

HTML Structure: I define the basic HTML structure for each exercise, including elements like input fields, buttons, and paragraphs.

jQuery Inclusion: I include the jQuery library using a `<script>` tag in the `<head>` section.

Document Ready Function: I wrap our jQuery code within the `$(document).ready(function() { ... })` function to ensure the code executes after the DOM is fully loaded.

Selector and Event Handling: I use jQuery selectors to target specific elements on the page and attach event handlers to respond to user interactions (e.g., focus changes or checkbox state changes).

DOM Manipulation: I leverage jQuery methods to manipulate the content and attributes of elements on the page. This might include adding text, updating text content, or retrieving element properties.
Exercise 1: Finding Inputs and Appending Text

Selector: I use `$('input[name!="color"]')` to select all `<input>` elements that don't have a name attribute set to "color".

Iteration: I utilize each `(function() { ... })` to iterate over each selected input element.

Finding Next Element: Inside the loop, `$(this).next()` finds the element that comes immediately after the current input element (assuming a `<span>` element).
Appending Text: I use .text("Click to see the effect") to set the text content of the next element to the specified message.
Exercise 2: Displaying Message on Focus Out

Universal Selector: I use `$('\*')` to select all elements on the page, ensuring the event handler can be triggered by any element losing focus.

Focus Out Event: I utilize the focusout event handler, which fires when an element loses focus.

Logging Message: Inside the event handler, i use `console.log("Focus removed from an element")` to simply log a message to the browser's console for demonstration purposes. You could replace this with other actions like displaying an alert.
Exercise 3: Displaying Checkbox State

Element Selection: I use `$('#myCheckbox')` to select the checkbox element with the ID "myCheckbox".

Change Event: I use the change event handler, which triggers whenever the checkbox state changes (checked/unchecked).

Retrieving Property: I utilize prop('checked') to get the checkbox's current checked state as a boolean value (true/false).

Retrieving Attribute: I use attr('checked') to get the value of the checked attribute (string "checked" or undefined).

Displaying Information: I construct a message string containing both the property and attribute values and use .text(message) to update a paragraph element with this information.

Additional Notes:

These exercises demonstrate basic functionalities of jQuery. You can explore more advanced features for complex ib interactions.
Consider using separate CSS files for styling the elements if needed for better organization.
Always test your code in a ib browser to see the interactive effects.
