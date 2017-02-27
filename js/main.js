if ("serviceWorker" in navigator && window.location.hostname !== "localhost") {
  navigator.serviceWorker.register("/serviceWorker.js", { scope: "/" })
    .then((reg) => {
      console.log("serviceWorker is registered", reg);
    })
    .catch((error) => {
      console.log("Failed to register serviceWorker", error);
    });
}


var submitBtn = document.getElementById("submit");
var submitModal = document.getElementById("modal");
var submitModalOverlay = document.getElementById("modal__overlay");

submitBtn.addEventListener("click", function () {
  toggleModal();
});

submitModalOverlay.addEventListener("click", function () {
  toggleModal();
});

function toggleModal() {
  var isHidden = submitModal.classList.contains("modal__hide");
  if (isHidden) {
    submitModal.classList.remove("modal__hide");
    submitModalOverlay.classList.remove("modal__hide");
    document.body.style.overflow = "hidden";
  }
  else {
    submitModal.classList.add("modal__hide");
    submitModalOverlay.classList.add("modal__hide");
    document.body.style.overflow = "";
  }
}
