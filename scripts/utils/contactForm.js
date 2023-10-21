const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
const doc = document.querySelector('#main');

const focusableElementsArray = [
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
]

const keyCodes = {
  tab: 9,
  enter: 13,
  escape: 27,
}

//Permet de garder le focus dans la modale

const open = function (dialog) {
  const focusableElements = dialog.querySelectorAll(focusableElementsArray)
  const firstFocusableElement = focusableElements[0]
  const lastFocusableElement = focusableElements[focusableElements.length - 1]

  dialog.setAttribute('aria-hidden', false);
  doc.setAttribute('aria-hidden', true);

  if (!firstFocusableElement) {
    return;
  }

  window.setTimeout(() => {
    firstFocusableElement.focus();

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
  dialog.setAttribute('aria-hidden', true)
  doc.setAttribute('aria-hidden', false)

  trigger.focus()
}

triggers.forEach((trigger) => {
  const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  const dismissTriggers = dialog.querySelectorAll('[data-dismiss]');

  // ouvre dialog
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

  // ferme dialog
  dialog.addEventListener('keydown', (event) => {
    if (event.which === keyCodes.escape) {
      close(dialog, trigger)
    }      
  })

  dismissTriggers.forEach((dismissTrigger) => {
    const dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);

    dismissTrigger.addEventListener('click', (event) => {
      event.preventDefault()

      close(dismissDialog, trigger)
    })
  })

  window.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close(dialog, trigger)
    }
  })
})

//On récupère le h1 de la page pour le mettre dans le titre de la modale (on a besoin d'un timeout afin d'attendre que le code soit chargé)

setTimeout(() => {
  let h1 = document.querySelector("h1")
  const modalTitle = document.getElementById("contactMe")
  modalTitle.setAttribute("tabindex", "0")
  modalTitle.setAttribute("aria-label", `Vous êtes sur le formulaire de contact de ${h1.textContent}`)

  const h2 = document.createElement("h2")
  h2.textContent = `${h1.textContent}`
  modalTitle.appendChild(h2)
}, 1000)


// Identification du firstName input
document.querySelector('#firstName').addEventListener("input", () => {
  verificationName('#firstName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, '#firstNameErrorMsg')
})
  
// Identification du lastName input
document.querySelector('#lastName').addEventListener("input", () => {
  verificationName('#lastName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, '#lastNameErrorMsg')
})

// Verification du firstName & lastName input
function verificationName(inputSelector, regex, errorMsgSelector) {
const input = document.querySelector(inputSelector)
const errMsg = document.querySelector(errorMsgSelector)

if (input.value.trim() === '') {
  errMsg.innerText = "Ce champ doit être rempli."
  errMsg.setAttribute("aria-label", "Ce champ doit être rempli.")
  errMsg.setAttribute("tabindex", "0")
  return false;

} else if (!regex.test(input.value)) {
  errMsg.innerText = "Ce champ ne doit contenir que des caractères alphabétiques"
  errMsg.setAttribute("aria-label", "Ce champ ne doit contenir que des caractères alphabétiques")
  errMsg.setAttribute("tabindex", "0")
  return false

} else if (input.value.length < 2) {
  errMsg.innerText = "Ce champ doit contenir au moins 2 caractères."
  errMsg.setAttribute("aria-label", "Ce champ doit contenir au moins 2 caractères.")
  errMsg.setAttribute("tabindex", "0")
  return false

} else {
  errMsg.innerText = ""
  errMsg.removeAttribute("tabindex")
  return true
}
}

// Identification de l'email input
document.querySelector('#email').addEventListener("input", () => {
  verificationEmail('#email', '#emailErrorMsg')
})
  
// Verification de l'email input
function verificationEmail(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector('#emailErrorMsg')
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  
  if (!emailRegex.test(input.value)) {
    errMsg.innerText = "Veuillez entrer une adresse e-mail valide."
    errMsg.setAttribute("aria-label", "Veuillez entrer une adresse e-mail valide.")
    errMsg.setAttribute("tabindex", "0")
    return false

  } else {
    errMsg.innerText = ""
    errMsg.removeAttribute("tabindex")
    return true
  }
}

// Identification du message input
document.querySelector('#message').addEventListener("input", () => {
verificationInput('#message', "^[-a-zA-ZÀ-ÿ' ]+$")
})
    
function verificationInput(inputSelector) {
  const input = document.querySelector(inputSelector)
  const errMsg = document.querySelector('#messageErrorMsg')
      
  if (input.value.trim() === '') {
    errMsg.innerText = "Ce champ doit être rempli."
    errMsg.setAttribute("aria-label", "Ce champ doit être rempli.")
    errMsg.setAttribute("tabindex", "0")
    return false

  } else if (input.value.length > 150) {
    errMsg.innerText = "Ce champ doit contenir maximum 150 caractères."
    errMsg.setAttribute("aria-label", "Ce champ doit contenir maximum 150 caractères.")
    errMsg.setAttribute("tabindex", "0")
    return false

  } else {
    errMsg.innerText = ""
    errMsg.removeAttribute("tabindex")
    return true
  }
}

// Verification de tous les inputs
function validate() {

  const firstNameValid = verificationName('#firstName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, '#firstNameErrorMsg')
  const lastNameValid = verificationName('#lastName', /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/, '#lastNameErrorMsg')
  const emailValid = verificationEmail('#email')
  const messageValid = verificationInput('#message')
  
  if (!firstNameValid || !lastNameValid || !emailValid || !messageValid ) {
    
    return false
  }
  return true
}

// Soumission du formulaire

document.querySelector('#contact_form').addEventListener('submit', function (event) {
  const validationButton = document.querySelector('#validationButton')
  event.preventDefault()
  if (!validate()) {
    validationButton.setAttribute('aria-label', 'Des erreurs ont été détectées dans le formulaire. Veuillez corriger les erreurs et soumettre à nouveau.')
    event.preventDefault()

  } else {
    const currentUrl = new URL(window.location.href)
    window.location.href = currentUrl.href
  }
})