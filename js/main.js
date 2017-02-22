if ("serviceWorker" in navigator && window.location.hostname !== "localhost") {
  navigator.serviceWorker.register("/serviceWorker.js", { scope: "/" })
    .then((reg) => {
      console.log("serviceWorker is registered", reg);
    })
    .catch((error) => {
      console.log("Failed to register serviceWorker", error);
    });
}
