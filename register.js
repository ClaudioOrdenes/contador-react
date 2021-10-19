if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").then(
      function (registration) {
        //registro exitoso
        console.log(
          "Registro de SW exitoso y el scope es: ",
          registration.scope
        );
      },
      function (err) {
        //fallo registro
        console.log("El registro del SW ha fallado: ", err);
      }
    );
  });
}
