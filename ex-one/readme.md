## Finding Inputs and Appending Text

- I include the jQuery library using a `<script>` tag.
- I use the `$(document).ready` function to ensure the code executes after the DOM is loaded.
- I use the `$('input[name!="color"]')` selector to find all input elements that don't have the name attribute set to "color".
- I iterate over the selected elements using each and:
- I Use next() to find the span element next to the input.
- I Use text() to append the text "Click to see the effect" to the span.
