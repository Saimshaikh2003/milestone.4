var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get reference to form elements using their ids
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('Phone'); // Fixed the ID
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n            <h2> Editable Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"ProfilePicture\" class= \"profilePicture\"/>") : "", "\n            <p><strong>Name:</strong><span contenteditable=\"true\"> ").concat(name_1, "</span></p>\n            <p><strong>Email:</strong>><span contenteditable=\"true\"> ").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> ><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>Work Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Display resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = 'block';
        }
        else {
            console.error('One or more form elements are missing.');
        }
    }
});
