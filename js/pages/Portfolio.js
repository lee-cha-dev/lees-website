const Portfolio = () => {
    const portfolioElements =
        "<div>" +
        `   ${Navbar()}`+
        `   ${AnimatedSection(
            "" +
            "       <div class='portfolio-section'>" +
            "           <h1 class='portfolio-heading'>Portfolio</label></h1>" +
            "       </div>"
        )}` +
        `   ${AnimatedSection(
            "" +
            `   ${ProjectOverview(
                "./media/images/stock-dashboard-ss.png",
                "https://www.google.com/",
                "Test Project",
                "2023",
                "HTML, CSS, JavaScript",
                "A test project to provide an overview",
                "https://www.github.com/",
                "Google",
                "https://www.google.com/"
            )}`
        )}` +
        `   ${AnimatedSection(
            "" +
            `   ${ProjectOverview(
                "./media/images/stock-dashboard-ss.png",
                "https://www.google.com/",
                "Placeholder Project",
                "2023",
                "Grocery list of techs most HRs 'require'.",
                "A placeholder to test the project overview component.",
                "https://www.github.com",
                "Bing",
                "https://www.bing.com/"
            )}`
        )}` +
        "</div>";


    return (portfolioElements);
}
