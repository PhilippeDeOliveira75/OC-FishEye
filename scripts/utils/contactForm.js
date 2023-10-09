const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
const doc = document.querySelector('#main');

const focusableElementsArray = [
  '[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
];
const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
};

const open = function (dialog) {
  const focusableElements = dialog.querySelectorAll(focusableElementsArray);
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  dialog.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);

  // return if no focusable element
  if (!firstFocusableElement) {
    return;
  }

  window.setTimeout(() => {
    firstFocusableElement.focus();

    // trapping focus inside the dialog
    focusableElements.forEach((focusableElement) => {
      if (focusableElement.addEventListener) {
        focusableElement.addEventListener('keydown', (event) => {
          const tab = event.which === keyCodes.tab;

          if (!tab) {
            return;
          }

          if (event.shiftKey) {
            if (event.target === firstFocusableElement) {
              event.preventDefault();

              lastFocusableElement.focus();
            }
          } else if (event.target === lastFocusableElement) {
            event.preventDefault();

            firstFocusableElement.focus();
          }
        });
      }
    });
  }, 100);
};

const close = function (dialog, trigger) {
  dialog.setAttribute('aria-hidden', true);
  doc.setAttribute('aria-hidden', false);

  // restoring focus
  trigger.focus();
};

triggers.forEach((trigger) => {
  const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

  // open dialog
  trigger.addEventListener('click', (event) => {
    event.preventDefault();

    open(dialog);
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.enter) {
      event.preventDefault();

      open(dialog);
    }  
  });

  // close dialog
  dialog.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.escape) {
      close(dialog, trigger);
    }      
  });

  dismissTriggers.forEach((dismissTrigger) => {
    const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

    dismissTrigger.addEventListener('click', (event) => {
      event.preventDefault();

      close(dismissDialog, trigger);
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close(dialog, trigger);
    }
  }); 
});


setTimeout(() => {
  let h1 = document.querySelector("h1")
  const modalTitle = document.getElementById("contactMe")
  modalTitle.setAttribute("tabindex", "0")
  modalTitle.setAttribute("aria-label", `Vous êtes sur le formulaire de contact de ${h1.textContent}`)

  const h2 = document.createElement("h2")
  h2.textContent = `${h1.textContent}`
  modalTitle.appendChild(h2)
}, 1000)



// Identification of firstNAme input
document.querySelector('#firstName').addEventListener("input", () => {
    verificationName('#firstName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/)
})
  
// Identification of lastNAme input
document.querySelector('#lastName').addEventListener("input", () => {
    verificationName('#lastName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/)
})
  
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
})
  
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
})
    
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

function validateForm(e) {
  e.preventDefault()

  if (validate()) {
    closeModal()
  }
}