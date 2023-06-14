
const PortfolioProject = (title, imageSrc, imageAlt) => {

    const PortfolioProjectElements =
        AnimatedSection(
            "" +
            "<div class='portfolio-project project-title'>" +
            "   <h1>" + title + "</h1>" +
            "   <h4>A desktop app that gets data for any searchable stock</h4>" +
            "</div>"
        ) +
        AnimatedSection(
            "" +
            "<div class='portfolio-project'>" +
            "   <img class='project-image-title' src=" + imageSrc + " alt=" + imageAlt + " />" +
            "</div>"
        ) +
        AnimatedSection(
            "" +
            "<div class='portfolio-project portfolio-project-about-div'>" +
            "   <h2 class='portfolio-project-section-title'>" +
            "       About This Project" +
            "   </h2>" +
            "   <p class='portfolio-project-about-paragraph'>" +
            "       This project is a desktop application writtin with Java, " +
            "       JavaFX, and Python. Its intended purpose is to query a given stock" +
            "       and return a overview of the relevant data about said stock." +
            "   </p>" +
            "   <p class='portfolio-project-about-paragraph'>" +
            "       The front end was written in Java and JavaFX. It uses" +
            "       a grid layout to allocate space and resize the application" +
            "       with the window." +
            "   </p>" +
            "   <p class='portfolio-project-about-paragraph'>" +
            "       The backend was written with Python. It uses a Python dictionary" +
            "       as an API for the front end to call via console commands. The finacial data" +
            "       is retrieved using the YFinance API Library. Each API call updates the local" +
            "       data file containing the specific time frame." +
            "   </p>" +
            "</div>"
        )
    // MOST LIKELY NEED TO FINISH JAVA APP
    // THEN GET SCREEN CAPTURES OF THE APP WORKING
    // THEN ADD PHOTOS AND DESCRIPTIONS TO EACH PHOTO
    // TO PROVIDE AN OVERVIEW OF HOW THE APP WORKS
    return (PortfolioProjectElements);
}
