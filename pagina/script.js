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

filter.addEventListener("change", function(){
  console.log(filter.value)
  //seleccionamos ese elemento:
  const selectedValue = filter.value

  if(selectedValue) {
    mensaje.textContent = `Ostras! Has seleccionado: ${selectedValue}` 
  } else {
    mensaje.textContent = ``
  }
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

//  pendiente: filtro de busqueda de empleos...