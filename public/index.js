function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

//Scroll to each tab after click
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      console.log("Target ID:", targetId);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        console.log("Target Section:", targetSection);
        window.scrollTo({
          top:
            targetSection.offsetTop -
            document.querySelector("nav").offsetHeight,
          behavior: "smooth",
        });
      } else {
        console.log("Target section not found");
      }
    });
  });
});

// Hide sidebar when clicking outside of it
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".menuButton");

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      hideSidebar();
    }
  });
});
