Exercise 2: Displaying Mouse Pointer Position
Setting up the HTML Structure:

A <p> element with the id position is created to display the mouse position.
Adding jQuery Code:

Within the jQuery code:

We use $(document).ready() to ensure that the code executes when the DOM is fully loaded.
We attach a mousemove event handler to the document object to track mouse movement.
Inside the event handler function, we retrieve the mouse position using event.pageX and event.pageY and update the text content of the <p> element with the id position to display the mouse position.
