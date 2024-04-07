// menu responsive
function openMenu(){
  document.querySelector("ul").style.width="100%"
  document.querySelector("body").style.overflow="hidden"
}
function closeMenu(){
  document.querySelector("ul").style.width="0"
  document.querySelector("body").style.overflow="unset"
}

// déclaration de notre scrollRevealOption 
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
// home page content p
ScrollReveal().reveal(".home-page-content p", {
  ...scrollRevealOption,
});
// home page content h1
ScrollReveal().reveal(".home-page-content h1", {
  ...scrollRevealOption,

});
// défilement image banner venant de la droite
ScrollReveal().reveal(".img-box", {
  ...scrollRevealOption,
  origin: "right",
});
// reservation
ScrollReveal().reveal(".about-btn", {
  ...scrollRevealOption,
  delay: 500,
});
// défilement a propos venant de la droite
ScrollReveal().reveal(".about-image", {
  ...scrollRevealOption,
  origin: "left",
});
// défilement de notre titre a propos h2
ScrollReveal().reveal(".col50 h2", {
  ...scrollRevealOption,
  delay: 500,
});
// défilement description a propos
ScrollReveal().reveal(".col50 .textpropos", {
  ...scrollRevealOption,
  delay: 1000,
});
// défilement du bouton en savoir plus 
ScrollReveal().reveal(".savoir-plus", {
  ...scrollRevealOption,
  delay: 1000,
});
//défilement des item pour un intervalle de 500s
ScrollReveal().reveal(".item", {
  ...scrollRevealOption,
  interval: 500,
});