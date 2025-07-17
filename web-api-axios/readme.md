Lab: Web APIs and Axios

## url = https://reqres.in/

Getting Started
To get started, please download the starter code. There is an HTML template in the starter code which we will be filling with content using JavaScript.

The general process is to retrieve the data from the web API by making a

## GET request using axios;

select elements using the DOM API; then insert the appropriate data into HTML elements in the correct spot on the page.

Exercises
We’ll use the Reqres REST API. Spend some time going through the available endpoints and their

## documentation,

as well as the sample requests.

Use the

## axios global object to make a GET request to the API's endpoint URL.

(The starter code already embeds the Axios library in the page.)

Since request methods in axios are asynchronous, we need to call them with await and assign the result to a variable.

When the API request is resolved, this variable will have the response, which is a JavaScript object. The object has a data property with the data (and metadata) that was returned by the server. Try logging this object to see its contents.

For example:

const url = "https://reqres.in/api/users";

const fetchUsers = async () => {
const response = await axios.get(url);
console.log(response.data);
};

// call the async function that we just created
fetchUsers();
Use the

## data object from the response to populate HTML elements in the page with data:

Insert the values for page and total_pages into the .page-number and .total-pages elements, respectively.

Populate the .users list with users from the data property of the response. Each user item should match the structure of the placeholder element in the starter code, but with dynamically generated elements.

Start with an empty user list element before inserting your list items.

Set the .user\_\_avatar element's src attribute to the user's avatar property.

How could you limit the height of the avatar image to 100px?

## Change the value of the page query parameter in the endpoint URL to see the content of the page change dynamically.

"https://reqres.in/api/users?page=2" - ?page=2

Populate the .ad element with the value of the support property of the response object.
What happens when you try to set the innerHTML property of the element to complex data type?

Try using

## JSON.stringify to populate the span element with the text representation of the support object.

How would you display that data as a code snippet?

## pre - code html elements:

Research the pre and code HTML elements and see how they can be used to display text content as code.

Investigate how to use the third parameter of JSON.stringify to add indentation to string output.

## JSON.stringify(value, replacer, space)
