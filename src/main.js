import "./styles.css";

const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const interactiveButtons = document.querySelectorAll("button");

interactiveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent?.trim() === "Log in") {
      window.alert("The authentication portal will be available soon.");
    }

    if (["Book Demo", "Scan Application", "Request a Demo"].includes(button.textContent?.trim())) {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }

    if (button.textContent?.trim() === "View Platform") {
      document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
