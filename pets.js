class Pet {
  sameowner = (otherPet) => otherPet.ownerName === this.ownerName;
  petstring = () =>
    `nome: ${this.petName}, proprietario: ${this.ownerName}, specie: ${this.species}, razza: ${this.breed}`;
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const pets = [];
const petList = document.getElementById("pet-list");

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const petnamevalue = document.getElementById("petname").value;
    const ownernamevalue = document.getElementById("ownername").value;
    const speciesvalue = document.getElementById("species").value;
    const breedvalue = document.getElementById("breed").value;

    const pet = new Pet(petnamevalue, ownernamevalue, speciesvalue, breedvalue);
    
    pets.forEach((pet) => {
      if (pet.sameowner(pet))
        alert(`anche ${pet.petName} è dello stesso proprietario`);
    });

    pets.push(pet);

    petList.innerHTML = "";

    pets.forEach((pet) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerText = pet.petstring();

      petList.append(li);
    });

    document.getElementsByTagName("form")[0].reset();
  });
