/* TAREEK AL BAHAR TOURS LLC — minimal site scripts */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Enquiry forms: no backend yet, so hand the enquiry over to WhatsApp.
  // Replace the data-whatsapp number (or the whole handler) when the site moves to WordPress.
  document.querySelectorAll("form[data-enquiry]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lines = ["New enquiry from the website"];
      new FormData(form).forEach(function (value, key) {
        if (value) { lines.push(key + ": " + value); }
      });
      var url = "https://wa.me/" + form.getAttribute("data-whatsapp") + "?text=" + encodeURIComponent(lines.join("\n"));
      var status = form.querySelector(".form__status");
      if (status) { status.classList.add("is-visible"); }
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  });
})();
