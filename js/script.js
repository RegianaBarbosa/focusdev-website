document.querySelectorAll(".navbar__menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 97,
        behavior: "smooth",
      });
    }
  });
});

const sections = document.querySelectorAll("section[id], footer[id]");
const menuLinks = document.querySelectorAll(".navbar__menu a");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  let found = false;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - window.innerHeight / 2;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      found = true;
      menuLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });

  if (!found && window.innerHeight + scrollY >= documentHeight - 10) {
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#contact") {
        link.classList.add("active");
      }
    });
  }
});
