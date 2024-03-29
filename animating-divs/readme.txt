Exercise 1: Animating Divs


Setting up the HTML Structure:

Two <div> elements with the class box are created in the HTML. These divs will be animated to show and hide.
Styling the Divs:

The CSS style .box is defined to set the width, height, background color, and margin of the divs. Additionally, the display property is set to none initially to hide the divs.
Adding jQuery Code:

Within the jQuery code:

I use $(document).ready() to ensure that the code executes when the DOM is fully loaded.
I delay the animation of the first div using .delay(1000) to wait for 1 second before showing it with .fadeIn(1000).
I immediately show the second div using .fadeIn(1000).