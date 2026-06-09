/* JLA Sweet Treats — one orchestrated reveal + connection-aware video.
   No frameworks. transform/opacity only. */

(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Scroll reveal (reveal once) ---- */
  var revealItems = document.querySelectorAll(".reveal");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

    revealItems.forEach(function (el) { io.observe(el); });
  }

  /* ---- Order form modal ---- */
  var orderDlg = document.getElementById("orderForm");
  if (orderDlg && typeof orderDlg.showModal === "function") {
    var orderForm = orderDlg.querySelector("form");

    function openOrder() {
      orderDlg.showModal();
      var first = orderForm.querySelector("input, textarea");
      if (first) first.focus();
    }
    function closeOrder() { orderDlg.close(); }

    document.querySelectorAll("[data-order-open]").forEach(function (b) {
      b.addEventListener("click", openOrder);
    });
    orderDlg.querySelectorAll("[data-order-close]").forEach(function (b) {
      b.addEventListener("click", closeOrder);
    });
    /* click on the backdrop (outside the form) closes */
    orderDlg.addEventListener("click", function (e) {
      if (e.target === orderDlg) closeOrder();
    });

    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!orderForm.reportValidity()) return;
      var f = orderForm;
      var v = function (n) { return (f.elements[n] && f.elements[n].value || "").trim(); };
      var lines = [
        "Name: " + v("name"),
        "Email: " + v("email"),
        "Phone: " + (v("phone") || "—"),
        "Event date: " + (v("date") || "—"),
        "Occasion: " + (v("occasion") || "—"),
        "",
        "Order details:",
        v("details")
      ];
      var subject = "Order request — " + (v("name") || "JLA Sweet Treats");
      var href = "mailto:JLAsweets1821@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      window.location.href = href;
      closeOrder();
    });
  }

  /* ---- "What we dip" mobile side-peek drawer (tap to slide in/out) ---- */
  var wwdDots = document.querySelector(".treats--dots");
  var wwdCard = document.querySelector(".treats__card");
  var wwdHint = document.querySelector(".treats__hint");
  if (wwdDots && wwdCard) {
    var wwdMq = window.matchMedia("(max-width: 60rem)");
    var wwdOpen = function () {
      if (!wwdMq.matches) return;
      wwdDots.classList.add("wwd-open");
      wwdCard.setAttribute("aria-expanded", "true");
    };
    var wwdClose = function () {
      wwdDots.classList.remove("wwd-open");
      wwdCard.setAttribute("aria-expanded", "false");
    };
    var wwdSetup = function () {
      if (wwdMq.matches) {
        wwdCard.setAttribute("role", "button");
        wwdCard.setAttribute("tabindex", "0");
        wwdCard.setAttribute("aria-expanded", wwdDots.classList.contains("wwd-open") ? "true" : "false");
        wwdCard.setAttribute("aria-label", "Show the What we dip menu");
      } else {
        wwdCard.removeAttribute("role");
        wwdCard.removeAttribute("tabindex");
        wwdCard.removeAttribute("aria-expanded");
        wwdCard.removeAttribute("aria-label");
        wwdDots.classList.remove("wwd-open");
      }
    };
    wwdSetup();
    if (wwdMq.addEventListener) wwdMq.addEventListener("change", wwdSetup);
    /* tap the peek (or hint) to open; the ✕ closes it */
    wwdCard.addEventListener("click", function () {
      if (!wwdMq.matches) return;
      if (!wwdDots.classList.contains("wwd-open")) wwdOpen();
    });
    wwdCard.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (wwdDots.classList.contains("wwd-open")) wwdClose(); else wwdOpen();
      }
    });
    if (wwdHint) wwdHint.addEventListener("click", wwdOpen);
    var wwdCloseBtn = wwdCard.querySelector("[data-wwd-close]");
    if (wwdCloseBtn) wwdCloseBtn.addEventListener("click", function (e) {
      e.stopPropagation(); wwdClose();
    });
  }

  /* ---- Respect Data Saver: swap the looping video for its poster ---- */
  var video = document.querySelector(".process__video");
  if (video) {
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if ((conn && conn.saveData) || prefersReduced) {
      video.removeAttribute("autoplay");
      video.pause();
    }
  }
})();
