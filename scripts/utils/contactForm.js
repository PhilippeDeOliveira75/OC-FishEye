function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block"
}

function closeModal() {
  const modal = document.getElementById("contact_modal")
  modal.style.display = "none"
}


const modalHeader = document.getElementById("header")

const h1 = document.createElement("h1")
h1.textContent = `Contactez-moi ${photographerData.name}`
modalHeader.appendChild(h1)
 
// Identification of firstNAme input
document.querySelector('#firstName').addEventListener("input", () => {
    verificationName('#firstName', "^[-a-zA-ZÀ-ÿ' ]+$");
  });
  
  // Identification of lastNAme input
  document.querySelector('#lastName').addEventListener("input", () => {
    verificationInput('#lastName', "^[-a-zA-ZÀ-ÿ' ]+$");
  });
  
  // Verification of firstName & lastName input
  function verificationName(inputSelector) {
    const input = document.querySelector(inputSelector);
    const errMsg = document.querySelector(inputSelector + 'ErrorMsg');
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/;
  
    if (input.value.trim() === '') {
      errMsg.innerText = "Ce champ doit être rempli.";
      return false;
    } else if (!regex.test(input.value)) {
      errMsg.innerText = "Ce champ ne doit contenir que des caractères alphabétiques";
      return false;
    } else if (input.value.length < 2) {
      errMsg.innerText = "Ce champ doit contenir au moins 2 caractères.";
      return false;
    } else {
      errMsg.innerText = "";
      return true;
    }
  }

// Identification of email input
document.querySelector('#email').addEventListener("input", () => {
    verificationEmail('#email', '#emailErrorMsg');
  });
  
// Verification of email input
function verificationEmail(inputSelector) {
  const input = document.querySelector(inputSelector);
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if (!emailRegex.test(input.value)) {
    errMsg.innerText = "Veuillez entrer une adresse e-mail valide.";
    return false;
  } else {
    errMsg.innerText = "";
    return true;
  }
}

// Identification of message input
document.querySelector('#message').addEventListener("input", () => {
verificationInput('#message', "^[-a-zA-ZÀ-ÿ' ]+$");
});
    
function verificationInput(inputSelector) {
  const input = document.querySelector(inputSelector);
  const errMsg = document.querySelector(inputSelector + 'ErrorMsg');
      
  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli.";
    return false;
  } else if (input.value.length > 15) {
      errMsg.innerText = "Ce champ doit contenir maximum 150 caractères.";
      return false;
  } else {
    errMsg.innerText = "";
    return true;
    }
  }

  function submit (e) {
    e.preventDefault();
  }