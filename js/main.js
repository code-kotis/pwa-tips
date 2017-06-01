if ("serviceWorker" in navigator && location.hostname !== "localhost") {
  navigator.serviceWorker.register("./service-worker.js", { scope: "/" })
    .then((reg) => {
      console.log("serviceWorker is registered");
    })
    .catch((error) => {
      console.log("Failed to register serviceWorker");
    });
}

// Modal.js
var submitBtn = document.getElementById("submit");
var submitModal = document.getElementById("modal");
var submitModalOverlay = document.getElementById("modal__overlay");
var myForm = document.getElementById("myForm");
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdWvm5jo5G5Sy2nNazvGudTxPUp8DVapvTNapGU6XrbTgMQnQ/viewform?embedded=true";

submitBtn.addEventListener("click", function () {
  toggleModal();
});

submitModalOverlay && submitModalOverlay.addEventListener("click", function () {
  toggleModal();
});

function toggleModal() {
  var isHidden = submitModal.classList.contains("modal__hide");
  if (isHidden) {
    myForm.src = formURL;
    submitModal.classList.remove("modal__hide");
    submitModalOverlay.classList.remove("modal__hide");
    document.body.style.overflow = "hidden";
  }
  else {
    myForm.src = "";
    submitModal.classList.add("modal__hide");
    submitModalOverlay.classList.add("modal__hide");
    document.body.style.overflow = "";
  }
}

// Toast.js
(function (exports) {
  'use strict';

  function toast(msg, options) {
    if (!msg) return;
    options = options || 3000;
    
    var toastMsg = document.querySelector('.toast__msg');
    toastMsg.textContent = msg;
    toastMsg.classList.add("toast__msg--show");
    
    //Show toast for 3secs and hide it
    setTimeout(function () {
      toastMsg.classList.remove("toast__msg--show");
      toastMsg.textContent = "";
    }, options);
  }

  exports.toast = toast;
})(typeof window === 'undefined' ? module.exports : window);
