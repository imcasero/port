function scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}