document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".faq-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const wasOpen = !content.classList.contains("hidden");

      document.querySelectorAll(".faq-answer").forEach((el) => {
        el.classList.add("hidden");
        el.previousElementSibling
          ?.querySelector("svg")
          ?.style.setProperty("transform", "rotate(0deg)");
      });

      if (!wasOpen) {
        content.classList.remove("hidden");
        btn.querySelector("svg").style.transform = "rotate(180deg)";
      }
    });
  });
});
