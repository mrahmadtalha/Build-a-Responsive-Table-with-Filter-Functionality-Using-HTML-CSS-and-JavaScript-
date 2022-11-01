/* This function will check for the user's input and based on that will either hide or display a particular row */

function filter() {
    // Access text value and elements from the DOM 
    let value = document.getElementById("searchInput").value.toUpperCase();
    let names = document.getElementById("names");
    let rows = names.getElementsByTagName("tr");

   // Code continues
   for (i = 0; i < rows.length; i++) {
    let column = rows[i].getElementsByTagName("td")[2];
    let language = column.textContent;

    rows[i].style.display =
      language.toUpperCase().indexOf(value) > -1 ? "" : "none";
  }
}

document.getElementById("searchInput").addEventListener("keyup", filter);
