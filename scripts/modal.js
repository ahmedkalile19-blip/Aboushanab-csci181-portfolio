const projects = [
  {
    title: " Race Tracker",
    details:
      "In this project I used object oriented programming in python to create a simple race tracking application. I created classes to represent a Driver, a Car, and a Race, and then simulate a short race where the fuel of the car and tire wear are tracked over multiple laps.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Website Clone",
    details:
      "I created this to practice HTML and CSS skills. It's a clone of a popular website, focusing on replicating the layout and design.",
    link_text: "View Repo",
    href: "#",
  },
  {
    title: "Portfolio Site",
    details:
      "This potfoilio displays everything I learned in web development. It includes a responsive design with accessibility features, a modal for project details, and links to my contact information. This project stamped my knowledge of HTML, CSS, and JavaScript, and allowed me to create a personal website to showcase my work.",
    link_text: "View Site",
    href: "#",
  },
];

const modal = document.getElementById("project-modal");
const modal_title = document.getElementById("modal-title");
const modal_details = document.getElementById("modal-details");
const modal_link = document.getElementById("modal-link");
const modal_close = document.getElementById("modal-close");

const card_buttons = document.querySelectorAll(".project-card");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  modal.showModal();

  document.body.style.overflow = "hidden";

  modal.focus();
}

function onCardClicked(event) {
  const index = Number(event.currentTarget.dataset.index);
  openModalByIndex(index);
}

card_buttons.forEach((card) => {
  card.addEventListener("click", onCardClicked);
});

modal_close.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("close", () => {
  document.body.style.overflow = "";
});
