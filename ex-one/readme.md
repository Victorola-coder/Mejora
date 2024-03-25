## Finding Inputs and Appending Text

- I include the jQuery library using a `<script>` tag.
- We use the `$(document).ready` function to ensure the code executes after the DOM is loaded.
- We use the `$('input[name!="color"]')` selector to find all input elements that don't have the name attribute set to "color".
  We iterate over the selected elements using each and:
  Use next() to find the span element next to the input.
  Use text() to append the text "Click to see the effect" to the span.
