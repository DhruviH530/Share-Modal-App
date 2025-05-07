const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
function openModal  () {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// using function 

  // // Modal close function
  // function closeModal  ()  {
  //   modal.classList.remove("active");
  //   overlay.classList.remove("overlayactive");
  // };

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};