// Initialize JS Functionality when HTML is loaded
window.addEventListener("DOMContentLoaded", function () {

    // Initialize button
    let btn = document.createElement("button");
    let btn_text = document.createTextNode("Add Square");
    btn.appendChild(btn_text);
    document.body.appendChild(btn);

    // Initialize id array
    let id_count = 1;
    var id_array = [];

    // Add Event Functionality to button
    btn.addEventListener('click', function () {

        // Initialize div HTML element and div class
        let divider = document.createElement('div');
        let att_div = document.createAttribute('class');
        att_div.value = "divider"

        //Initialize id attribute for div
        let id_div = document.createAttribute('id');
        id_div.value = id_count.toString();
        id_array.push(id_count);
        id_count++

        // Append Class and ID to div, append div to body
        divider.setAttributeNode(att_div);
        divider.setAttributeNode(id_div);
        document.body.appendChild(divider);

        // Create paragraph element for divider
        let div_content = document.createElement('p');
        // Allow paragraph text to pull id from div element to set it as it's content
        let div_text = document.createTextNode(divider.id.toString());

        // Append text content and append paragraph element to div element
        div_content.appendChild(div_text);
        divider.appendChild(div_content);

        // Initialize Color Array
        let color_array = ['#43396D', '#FD9F42', '#ECD7B1', '#EA4963', '#4E4E4E', '#56959E']
        let color_count = 0;

        // Add Event Listener to each div element to add click color change functionality
        divider.addEventListener('click', function () {
            divider.style.backgroundColor = color_array[color_count];

            // cycles through color array values and resets the index
            if ((color_count + 1) == color_array.length) {
                color_count = 0
            } else {
                color_count++
            }
        });

        // Add Double Click Functionality to each div element
        divider.addEventListener('dblclick', odd_even);

        // Initialize a copy of the original id_array
        let backup_array = id_array;
        // Initialize variables for odd_even function
        let x = 0;
        let y = 1;

        function odd_even(e) {

            // Get Id from element that was clicked on
            id_element = parseInt(e.currentTarget.id);
            // Set Index for other direction
            y_index_element = id_element -1;

            // Check if element that was clicked on was even or odd
            switch (id_element % 2) {

                // Id Even
                case 0:
                    // Check to see if box that's being hidden is the last on the row
                    if ((id_element+x) < id_array.length) {
                        // On copy of ID array, sets the values to the right of the box clicked to blank
                        backup_array[id_element + x] = "";

                        /* Loop checks to see if array has empty values, if so, the loop gets the index of the 
                        blank value. Index is used to pull the element that has a matching ID. If element is blank, it checks
                        to see if other array values are blank as well, if they are, it skips the array value and checks another one*/
                        while (backup_array[id_element + x] == "") {
                            x++;
                            hidden_element = document.getElementById(id_element + x);
                            hidden_element.classList.add("hidden");
                        }
                    } else {
                        alert("reached end");
                    }
                    break;

                // Id Odd
                case 1:
                    // Checks to see if the box being hidden is the first in the row
                    if ((id_element - y) >= 1) {
                        // On copy of ID array, it sets the values to the left of the box clicked to blank
                        backup_array[y_index_element - y] = "";
                        console.log(backup_array);
                        /* Loop checks to see if values to the left of the box clicked are blank. If the values are blank, it loops
                        keeps checking until it finds one that isn't blank. Sets the last value to blank.  */
                        while (backup_array[y_index_element - y] == "") {
                            y++;
                            hidden_element = document.getElementById((id_element+1) - y);
                            hidden_element.classList.add("hidden");
                        }
                    } else {
                        alert("reached start");
                    }
                    break;

            }
        }
    });
});