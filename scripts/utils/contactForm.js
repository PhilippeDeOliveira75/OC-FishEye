function displayModal() {
  const modal = document.getElementById("contact_modal")
  modal.style.display = "block"
}

function closeModal() {
  const modal = document.getElementById("contact_modal")
  modal.style.display = "none"
}


const modalHeader = document.getElementById("header")


setTimeout(() => {
  let h1 = document.querySelector("h1");
  const h2 = document.createElement("h2");
  h2.innerHTML = `${h1.textContent}`;
  modalHeader.appendChild(h2);
}, 1000);


// Identification of firstNAme input
document.querySelector('#firstName').addEventListener("input", () => {
    verificationName('#firstName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/);
  });
  
  // Identification of lastNAme input
  document.querySelector('#lastName').addEventListener("input", () => {
    verificationName('#lastName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/);
  });
  
  // Verification of firstName & lastName input
  function verificationName(inputSelector) {
    const input = document.querySelector(inputSelector)
    const errMsg = document.querySelector(inputSelector + 'ErrorMsg')
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/
  
    if (input.value.trim() === '') {
      errMsg.innerText = "Ce champ doit être rempli."
      return false;
    } else if (!regex.test(input.value)) {
      errMsg.innerText = "Ce champ ne doit contenir que des caractères alphabétiques"
      return false
    } else if (input.value.length < 2) {
      errMsg.innerText = "Ce champ doit contenir au moins 2 caractères."
      return false
    } else {
      errMsg.innerText = ""
      return true
    }
  }

// Identification of email input
document.querySelector('#email').addEventListener("input", () => {
    verificationEmail('#email', '#emailErrorMsg')
  });
  
// Verification of email input
function verificationEmail(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg')
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  
  if (!emailRegex.test(input.value)) {
    errMsg.innerText = "Veuillez entrer une adresse e-mail valide."
    return false
  } else {
    errMsg.innerText = ""
    return true
  }
}

// Identification of message input
document.querySelector('#message').addEventListener("input", () => {
verificationInput('#message', "^[-a-zA-ZÀ-ÿ' ]+$")
});
    
function verificationInput(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg')
      
  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli."
    return false
  } else if (input.value.length > 150) {
      errMsg.innerText = "Ce champ doit contenir maximum 150 caractères."
      return false
  } else {
    errMsg.innerText = ""
    return true;
    }
  }

// Validation of the form
function validate() {
  const firstNameValid = verificationInput('#firstName');
  const lastNameValid = verificationInput('#lastName');
  const emailValid = verificationEmail('#email');
  const messageValid = verificationInput('#message');
  
  if (!firstNameValid || !lastNameValid || !emailValid || !messageValid ) {
    return false;
  }
  return true;
}

const modal = document.getElementById("contact_modal")

modal.addEventListener("submit", function (event) {
  event.preventDefault()
  if (validate()) {
    const modal = document.getElementById("contact_modal")
    modal.style.display = "none";
    location.reload();
  } else {
    return false;
  }
});