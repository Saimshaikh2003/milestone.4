document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get reference to form elements using their ids
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("Phone") as HTMLInputElement; // Fixed the ID
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
            <h2> Editable Resume</h2>
            ${
              profilePictureURL
                ? `<img src="${profilePictureURL}" alt="ProfilePicture" class= "profilePicture"/>`
                : ""
            }
            <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
            <p><strong>Email:</strong>><span contenteditable="true"> ${email}</span></p>
            <p><strong>Phone Number:</strong> ><span contenteditable="true">${phone}</span></p>


            <h3>Education</h3>
            <p contenteditable="true">${education}</p>

            <h3>Work Experience</h3>
            <p contenteditable="true">${experience}</p>

            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

      // Display resume
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
      } else {
        console.error("One or more form elements are missing.");
      }
    }
  });
