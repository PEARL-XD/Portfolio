let homebtn = document.querySelector(".navRight"); // home icon from the nav bar
let homePage = document.querySelector("#main"); // Home page content div
let pearl = document.querySelector(".navLeft"); // PEARL My name from the main page
let projects = document.querySelector(".projectsCont"); // projects div inside main html will later load the projects.html data
let skills = document.querySelector(".skillsCont"); // skills div inside main html will later load the skills.html data
let education = document.querySelector(".educationCont");
let certifications = document.querySelector(".CertificationsCont");
let resume = document.querySelector(".resumeCont");
let hobbies = document.querySelector(".hobbiesCont");
let connect = document.querySelector(".aboutCont");
let skillbtn = document.querySelector("#skillbtn");
let proBtn = document.querySelector("#projBtn"); // projects btn from the main html
let eduBtn = document.querySelector("#edu");
let certificationsBtn = document.querySelector("#certiBtn");
let resumeBtn = document.querySelector("#resumeBtn");
let hobbiesBtn = document.querySelector("#hobbiesBtn");
let connBtn = document.querySelector("#aboutBtn");

const loadProjectsContent = async (container, fileName) => {
  try {
    const response = await fetch(`${fileName}.html`); // Fetch the HTML file using the fileName
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.text(); // Parse the response as text
console.log(container);
console.log(fileName);

    container.innerHTML = data; // Insert content into the container
    console.log(container);
  } catch (error) {
    console.error("Error loading .html:", error);
  }
};
// Add event listener for home button (fade out)
homebtn.addEventListener("click", () => {
  window.location.href = "/home";
  homePage.style.display = "flex"; // Show the page before animating
  homePage.classList.remove("fade-out"); // Ensure any previous fade-out is removed

  // Listen for the end of the fade-in animation
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.classList.remove("fade-in"); // Clean up the fade-in class after the animation
    },
    { once: true }
  ); // Remove the event listener after it runs
  projects.style.display = "none";
  skills.style.display = "none";
  education.style.display = "none";
  certifications.style.display = "none";
  resume.style.display = "none";
  hobbies.style.display = "none";

});

proBtn.addEventListener("click", async () => {
  homePage.classList.add("fade-out");
  // Listen for the end of the fade-out animation to hide the page
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.style.display = "none"; // Hide the element after fade-out
    },
    { once: true }
  ); // Remove the event listener after it runs
  projects.style.display = "block";
  await loadProjectsContent(projects, "projects"); // Pass the container and file name
});

skillbtn.addEventListener("click", async () => {
  homePage.classList.add("fade-out");
  // Listen for the end of the fade-out animation to hide the page
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.style.display = "none"; // Hide the element after fade-out
    },
    { once: true }
  ); // Remove the event listener after it runs
  skills.style.display = "block";
  await loadProjectsContent(skills, "skills"); // Pass the container and file name
});

eduBtn.addEventListener("click", async () => {
  homePage.classList.add("fade-out");
  // Listen for the end of the fade-out animation to hide the page
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.style.display = "none"; // Hide the element after fade-out
    },
    { once: true }
  ); // Remove the event listener after it runs
  education.style.display = "block";
  await loadProjectsContent(education, "education"); // Pass the container and file name
});
resumeBtn.addEventListener("click", async () => {
  homePage.classList.add("fade-out");
  // Listen for the end of the fade-out animation to hide the page
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.style.display = "none"; // Hide the element after fade-out
    },
    { once: true }
  ); // Remove the event listener after it runs
  resume.style.display = "block";
  await loadProjectsContent(resume, "resume"); // Pass the container and file name
});
certificationsBtn.addEventListener("click", async () => {
  homePage.classList.add("fade-out");
  // Listen for the end of the fade-out animation to hide the page
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.style.display = "none"; // Hide the element after fade-out
    },
    { once: true }
  ); // Remove the event listener after it runs
  certifications.style.display = "block";
  await loadProjectsContent(certifications, "certifications"); // Pass the container and file name
});
hobbiesBtn.addEventListener("click", async () => {
  homePage.classList.add("fade-out");
  // Listen for the end of the fade-out animation to hide the page
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.style.display = "none"; // Hide the element after fade-out
    },
    { once: true }
  ); // Remove the event listener after it runs
  hobbies.style.display = "block";
  await loadProjectsContent(hobbies, "hobbies"); // Pass the container and file name
});

connBtn.addEventListener("click", async () => {
  homePage.classList.add("fade-out");
  // Listen for the end of the fade-out animation to hide the page
  homePage.addEventListener(
    "animationend",
    () => {
      homePage.style.display = "none"; // Hide the element after fade-out
    },
    { once: true }
  ); // Remove the event listener after it runs
  connect.style.display = "block";
  await loadProjectsContent(connect, "connect"); // Pass the container and file name
  window.location.href = "/connect";
});
