// import...

// Toggle hidden information
const toggleButton = document.getElementById('btn-toggle1');
const hiddenInfo = document.querySelector('.hidden-info');

toggleButton.addEventListener('click', () => {
    hiddenInfo.classList.toggle('hidden-info');
});

// Change background color of the box
const colorButton = document.getElementById('btn-change-color');
const colorBox = document.getElementById('color-box');

colorButton.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});

// Form submission handling
const form = document.getElementById('feedback-form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    formResponse.textContent = `Thank you, ${name}, for your feedback: "${feedback}"`;
    form.reset();
});

// Function to render the items on data-container
function renderItems(items) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous content
  
    items.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${item}</p>`;
      container.appendChild(div);
    });
  }

//debs function to create a dynamic list where users can add and remove items
function debsFunction() {
  const debsList = document.getElementById('data-container'); //debsList is where we want to work on the page
  let isRemoveButton = false;
  
  let debsButtonContainer = document.createElement("div"); //debsButtonContainer is a new container
  debsButtonContainer.style.display = "flex";   // Makes buttons appear in a row
  debsButtonContainer.style.gap = "100px";      //puts a gap between the buttons
  
  debsList.appendChild(debsButtonContainer);    // Append the new container to the page
  let debsAddButton = document.createElement("button"); //create an add button
  debsAddButton.textContent = "Add List Item to Debs List"; //text for add button
  debsButtonContainer.appendChild(debsAddButton); // Append the button to the container
  let debsRemoveButton;

  debsAddButton.addEventListener("click", () => {  //if there's a click, take action
    let newItemOnDebsList = document.createElement("li");
    let userInput = prompt("Enter text for the new list item:");
    newItemOnDebsList.textContent = userInput;
    debsList.appendChild(newItemOnDebsList); // Append it to the list
    
    if (!isRemoveButton) {
    debsRemoveButton = document.createElement("button"); //Set value of a button to remove items
    debsRemoveButton.textContent = "Remove List Item from Debs List"; //text for remove button
    debsButtonContainer.appendChild(debsRemoveButton); //append the button to the new container
    isRemoveButton = true;
    debsRemoveButton.addEventListener("click", () => {
      console.log("Number of children in debsList:");
})
}});

}
// debsFunction()

/* IDEAS FOR ADDITIONAL INTERACTIONS

1. Add functionality to highlight the navigation link of the current section as the user scrolls.
2. Implement a light/dark mode toggle using CSS root variables.
3. Create a dynamic list where users can add and remove items.
4. Add validation to the feedback form to ensure name and feedback are not empty.
5. Use localStorage to save the user's name for personalized greetings.
6. Animate the color change of the box with a smooth transition.
7. Display a live character counter for the feedback textarea.
8. Implement drag-and-drop functionality for rearranging items in a list.
9. Add a countdown timer to a section, resetting after it reaches zero.
10. Fetch and display data from a public API (e.g., random jokes or quotes).

*/

// Call the render function on page load or when needed
renderItems(dataItems);