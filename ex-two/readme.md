Exercise 2: Displaying Message on Focus Out

1. HTML Structure:

You can use the provided HTML structure with various elements like a form, textarea, buttons, and paragraphs.

2. jQuery Code:

Include the jQuery library as mentioned before.
Use the $(document).ready(function() { ... }) function for code execution after DOM loading.

3. Selecting Elements:

Utilize the universal selector $('\*') to select all elements on the page. This ensures the event handler can be triggered by any element losing focus.

4. Focus Out Event:

Attach the focusout event handler using the .focusout(function() { ... }) method. This handler fires when any element loses focus.

5. Logging Message:

Inside the event handler, use console.log("Focus removed from an element") to log a message to the browser console for demonstration purposes. You can replace this with displaying an alert or updating DOM elements for visual feedback.

Expected Outcome:

When you click inside any element (textarea, button, paragraph, etc.) and then click outside to remove focus, a message "Focus removed from an element" should be logged in the browser's console, indicating the focus out event was triggered.
