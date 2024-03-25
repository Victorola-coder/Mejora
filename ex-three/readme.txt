Exercise 3: Display Checked Attribute and Property


Steps:


HTML Setup:

Created a checkbox input element with an associated label.
jQuery Script:

Wrote jQuery script to display the checked attribute and property of the checkbox as it changes.
Used the .change() event handler to detect changes in the checkbox state.
Displayed the checked attribute and property using .attr('checked') and .prop('checked') methods, respectively.



Code Explanation:

The jQuery selector $('#check1') selects the checkbox input element.
The .change() method attaches an event handler function to the checkbox input element.
Inside the event handler, the .attr('checked') method retrieves the value of the checked attribute, while the .prop('checked') method retrieves the value of the checked property.