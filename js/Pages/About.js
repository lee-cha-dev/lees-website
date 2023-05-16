const aboutElements =
    "<div>" +
    `   ${Navbar()}`+
    `   ${AnimatedSection(
            "" +
            `<div class='about-section'>` +
            `   <img class='profile-image' src='./media/images/devil.png'  alt="profile-picture" /> ` +
            "   <div class='about-intro'>" +
            "     <h1>Lee Charles</h1>" +
            "     <p>Software Developer</p>" +
            "   </div>" +
            `</div>`
        )}` +
        `${AnimatedSection(
            "" +
            `<div class='about-me-section'>` +
            `  <h1>About</h1>` +
            `  <p>I am a fourth year student currently enrolled at Capella University. The degree I am pursing is a Bachelor&apos;s
              of Science in Information Technology with a concentration in Software Development. Projected graduation date
              is June 2024.</p>` +
            `</div>`
        )}` +
        `${AnimatedSection(
            "" +
            "<div class='about-me-section'>" +
            "   <h1>Education</h1>" +
            "   <ul>" +
            "       <li>" +
            "          <div class='info-badge-div-uni'>" +
            "              <label class='info-badge'>Capella University</label>" +
            "          </div>" +
            "          <div class='info-value-div-uni'>" +
            "              <p>Bachelor&apos;s Degree in Information Technology, 2024</p>" +
            "          </div>" +
            "       </li>" +
            "       <li>" +
            "          <div class='info-badge-div-study'>" +
            "              <label class='info-badge'>Area of Study</label>" +
            "          </div>" +
            "          <div class='info-value-div-study'>" +
            "              <p>Software Development - Applications Development</p>" +
            "          </div>" +
            "       </li>" +
            "   </ul>" +
            "</div>"
        )}` +
        `${AnimatedSection(
            "" +
            "<div class='about-me-section'>" +
            "   <h1>Skills</h1>" +
            "   <div class='skills-grid'>" +
            "       <p class='skills-grid-item'>JavaScript</p>" +
            "       <p class='skills-grid-item'>HTML/CSS</p>" +
            "       <p class='skills-grid-item'>Java</p>" +
            "       <p class='skills-grid-item'>JavaFX</p>" +
            "       <p class='skills-grid-item'>Python</p>" +
            "       <p class='skills-grid-item'>SQL</p>" +
            "       <p class='skills-grid-item'>MariaDB</p>" +
            "       <p class='skills-grid-item'>Windows</p>" +
            "       <p class='skills-grid-item'>Webstorm</p>" +
            "       <p class='skills-grid-item'>IntelliJ</p>" +
            "       <p class='skills-grid-item'>Bash & GitBash</p>" +
            "   </div>" +
            "</div>"
        )}` +
    "</div>";

const About = () => {
    return (aboutElements);
}
