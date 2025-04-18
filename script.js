// Change text content dynamically
document
  .getElementById("change-text-btn")
  .addEventListener("click", function () {
    document.getElementById("description").textContent =
      "The text has been updated!";
  });

// Modify CSS styles via JavaScript
document
  .getElementById("change-style-btn")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "#f0f8ff";
  });

// Add an element when a button is clicked
document
  .getElementById("add-element-btn")
  .addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textContent = "I'm a new paragraph added to the page!";
    newElement.id = "new-paragraph";
    document.getElementById("dynamic-content").appendChild(newElement);
  });

// Remove the added element when another button is clicked
document
  .getElementById("remove-element-btn")
  .addEventListener("click", function () {
    const element = document.getElementById("new-paragraph");
    if (element) {
      element.remove();
    }
  });
