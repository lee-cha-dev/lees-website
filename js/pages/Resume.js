
const Resume = () => {

    const resumeElements =
        "<div>" +
        Navbar() +
        AnimatedSection(
            "" +
            "<div class='heading-div'>" +
            "   <h1>Resume</h1>" +
            "</div>"
        ) +
        AnimatedSection(
            "" +
            "<div class='resume-page-div'>" +
            "   <object data='./media/docs/resume_2023.pdf#view=FitH' type='application/pdf'>" +
            "       <p>" +
            "           Unable to display Resume/PDF file. " +
            "           <a href='./media/docs/resume_2023.pdf'>Download</a> Instead" +
            "       </p>" +
            "   </object>" +
            "</div>"
        ) +
        "</div>";

    return (resumeElements);
}