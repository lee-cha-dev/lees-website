const portfolioElements =
    "<div>" +
    `   ${Navbar()}`+
    `   ${AnimatedSection(
        "" +
        "       <div class='portfolio-section'>" +
        "           <h1 class='portfolio-heading'>Portfolio</h1>" +
        "       </div>"
    )}` +
    `   ${AnimatedSection(
        "" +
        `   ${ProjectOverview(
            "./media/images/stock-dashboard-ss.png",
            "Test Project",
            "2023",
            "HTML, CSS, JavaScript",
            "A test project to provide an overview",
            "https://www.github.com/",
            "Google",
            "https://www.google.com/"
        )}`
    )}` +
    "</div>";

const Portfolio = () => {
    return (portfolioElements);
}
