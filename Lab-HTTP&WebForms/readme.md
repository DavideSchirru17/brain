Getting Started

## Install the JSON Formatter Chrome Extension

This will show JSON in the browser in a more human-readable format

## Create a new project-folder with an index.html file. Once your HTML and form are set up, you will submit your forms to this URL in order to test the values that are sent. Before doing so, first create the required form by following the steps below.

Exercises

## Create a form that has:

## One text input

## One textarea input

## A button with the type attribute of submit

You can wrap all of your inputs in <label> tags or use the for attribute to connect labels with inputs.

E.g. <label>My input: <input type="text" /></label>
Give each input a name using the name attribute. Each input field or text-area with a name attribute will have their values sent when submitting the form.

E.g. <label>My input: <input type="text" name="test-input" /></label>
With your form element use the following attributes:

## action="https://postman-echo.com/post"

## method="post"

On submit, the values that you sent in the form submission will be echoed back in the browser from the postman-echo API.

## The content will be returned in a JSON format, which is why we installed the Chrome extension JSON Formatter at the beginning of this exercise.

In the JSON that is returned, take a look at the "form": content, this is where you should see the values from your input fields e.g. test-input

## Resources

MDN: HTML form element
MDN: HTML label element

## FAQ 'preventDefault()'

Q: Every time I hit enter on my form it refreshes the page but doesn't do anything, why?

A: What's really happening behind the scenes when you press enter is that there is a submit event being created, and the default behavior of a submit event is to refresh the browser window. We can tell the form to ignore this behavior by using a method of the event object called 'preventDefault()'.
