// const botones = document.querySelectorAll(".button-apply-job")

// botones.forEach(boton => {
// boton.addEventListener("click", function () {
//   boton.textContent = "Aplicado!";
//   boton.style.backgroundColor="green"
//   boton.disabled = true
// })
// })



const jobsListingSection = document.querySelector(".jobs-listings")
jobsListingSection.addEventListener("click", function(event) {
  console.log(event.target)

  const element = event.target

  if (element.classList.contains("button-apply-job")) {
    console.log("Osssstras! le has dado al boton.")
    element.textContent = "Aplicado!";
    element.style.backgroundColor="green"
    element.disabled = true
  }
})









//  filtro de Busqueda "searchaInput"
const searchaInput = document.querySelector("#empleos-search-input")

searchaInput.addEventListener("input", function(event) {
  console.log(searchaInput.value)
})









// filtro de Ubicacion
const filter = document.querySelector("#filter-location")
const mensaje = document.querySelector("#filter-selected-value")
//recuperamos todos los jobs:

filter.addEventListener("change", function(){
  const jobs = document.querySelectorAll("article")
  console.log(filter.value)
  //seleccionamos ese elemento:
  const selectedValue = filter.value

  if(selectedValue) {
    mensaje.textContent = `Ostras! Has seleccionado: ${selectedValue}` 
  } else {
    mensaje.textContent = ``
  }
  //iteramos modalidad de todos los jobs:
  jobs.forEach(job => {
    //otra forma de hacerlo:
    //const modalidad = job.getAttribute(!data-modalidad)
    console.log(job.dataset.modalidad)
    const modalidad = job.dataset.modalidad

    if(selectedValue === "" || selectedValue === modalidad) {
      job.style.display = "block"
    } else {
      job.style.display = "none"
    }
  })
})













//filtro de Technology:
const technologyFilter = document.getElementById("filter-technology")

technologyFilter.addEventListener("change", function(){
  console.log(technologyFilter.value)
})

// filter-experience-level
const filterExperience = document.querySelector("#filter-experience-level")

filterExperience.addEventListener("change", function(){
  console.log(filterExperience.value)
})














//Toda la data traida del Fetch la vamos a añadir dentro de Jobs-listings
const container = document.querySelector(".jobs-listings")


// renderizamos ofertas labolales dinamicamente (FETCH)
console.log("1- Antes del fetch")
fetch("/data.json")
.then((response) => {
  return response.json();
})
.then((jobs) => {
  console.log("3- Tengo los resultados del fetch")
  console.log(jobs)
  jobs.forEach(job => {
    const article = document.createElement("article")
    article.className = "job-listing-card"

    article.dataset.modalidad = job.data.modalidad
    article.dataset.technology = job.data.technology
    article.dataset.nivel = job.data.nivel
    
    
    article.innerHTML = `
      <div>
        <h3>${job.titulo}</h3>
        <small>${job.empresa} | ${job.ubicacion}</small>
        <p>${job.descripcion}</p>
      </div>
        <button class='button-apply-job'>Aplicar</button>
      `
    container.appendChild(article)
  })
})

console.log("2- Despues del fetch")
