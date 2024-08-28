function loadHTMLComponents() {
  // Include Header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));

  // Include Footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Call the function when the page loads
window.onload = loadHTMLComponents;
