"use strict";

        // define a function that gets an HTML element
        function getElement(selector) { 
            return document.querySelector(selector);
        }

        // define a function that handles the click event of the Join button
        function registerButtonClick(event) {
            // get user entries from text boxes
            const email = getElement("#email").value;                           // get email address
            const phone = getElement("#phone").value;                           // get phone number
            const country = getElement("#country").value;                       // get country code
            const contact = getElement("input[name='contact']:checked").value;  // get contact type
            const terms = getElement("#terms").checked;                         // get terms acceptance(true/false)              

            // check user entries for validity and provide error messages by checking each field is empty or not
            let invalid = false;
            if (email == "") { 
                getElement("#email_1_error").textContent = "Email is required.";
                invalid = true;
            } else { 
                getElement("#email_1_error").textContent = ""; 
            }

            if (phone == "") { 
                getElement("#phone_error").textContent = "Phone is required.";
                invalid = true;
            } else { 
                getElement("#phone_error").textContent = ""; 
            }

            if (country == "") { 
                getElement("#country_error").textContent = "Country is required.";
                invalid = true;
            } else { 
                getElement("#country_error").textContent = ""; 
            }

            if (!terms) { 
                getElement("#terms_error").textContent = "You must accept the terms.";
                invalid = true;
            } else { 
                getElement("#terms_error").textContent = ""; 
            }


            // cancel form submit if any user entries are invalid
            if (invalid) {
                event.preventDefault(); 
            }
        };

        // add code that's run when the web page is loaded
        document.addEventListener("DOMContentLoaded", () => {
            // specify the function that's run when the Join button is clicked
            getElement("#register_button").addEventListener("click", registerButtonClick);
        });