Exercise 3: Displaying Checkbox State

1. HTML Structure:

Create a checkbox element with the ID "myCheckbox" and a label (e.g., "Check me").
Add a paragraph element with the ID "message" to display the checkbox state information later.


2. jQuery Code:

Include the jQuery library.
Wrap the code within the $(document).ready(function() { ... }) function.


3. Selecting Checkbox:

Use the selector $('#myCheckbox') to target the specific checkbox element with the ID "myCheckbox".


4. Change Event:

Utilize the .change(function() { ... }) method to attach a change event handler to the checkbox. This handler triggers whenever the checkbox state changes (checked/unchecked).


5. Retrieving State Information:

Inside the event handler:
Use $(this).prop('checked') to get the current checked state of the checkbox as a boolean value (true/false).
Use $(this).attr('checked') to get the value of the checked attribute (string "checked" or undefined).

6. Displaying Information:

Construct a message string that combines both property and attribute values (e.g., using string concatenation).
Use $('#message').text(message) to update the text content of the paragraph element with the ID "message" to display the constructed message, reflecting the checkbox state.


Expected Outcome:

When you click on the checkbox to toggle its state (checked/unchecked), the paragraph element
