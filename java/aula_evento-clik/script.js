const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkperfildados = document.getElementById("link-perfil-dados");

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block";
});

const toggleNavPerfil = () => {
  if (navPerfil.style.display === "block") {
    navPerfil.style.display = "none";
  } else {
    navPerfil.style.display = "block";
  }
};

document.addEventListener("keyup", (e) => {
  if (e.code === 'Digit1') {
    toggleNavPerfil();
  }
  if (e.code === 'Escape') {
    linkperfildados.click();
  }
});2