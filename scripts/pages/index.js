async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du fichier JSON');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération du fichier JSON : ', error);
    return []; // Retourner un tableau vide en cas d'erreur
  }
}

async function displayData(photographers) {
  
const photographersSection = document.querySelector(".photographer_section");

photographers.forEach((photographer) => {
  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.appendChild(userCardDOM);
});
}

async function init() {
try {
  // Récupère les datas des photographes
  const data = await getPhotographers();
  console.log(data);
   // Vérifie si des photographes ont été récupérés avec succès
  if (data.media.length > 0) {
    displayData(data.photographers);
  } else {
  // Gérer le cas où les données des photographes n'ont pas pu être récupérées
    console.error('Aucun photographe trouvé.');
  }
} catch (error) {
  console.error('Une erreur s\'est produite lors de l\'initialisation : ', error);
}
}

init();
  
