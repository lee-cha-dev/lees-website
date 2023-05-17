
const ProjectOverview = (imageSource, imageLink, heading, year, technology, about,
                         githubLink, liveLinkDesc, liveLinkHref) => {

    const ProjectOverviewElements =
        "<div class='project-overview-section'>" +
        "   <div class='project-image-div'>" +
        `       <a href=${imageLink}>` +
        `          <img class='project-image' src=${imageSource} alt='project-image' />` +
        "       </a>" +
        "   </div>" +
        `   <h2>${heading}</h2>` +
        "   <div class='project-list-section'>" +
        "       <ul>" +
        "           <li>" +
        "               <label class='info-badge year-label'>Year</label>" +
        "           </li>" +
        "           <li>" +
        `               <p>${year}</p>` +
        "           </li>" +
        "       </ul>" +
        "       <ul>" +
        "           <li>" +
        "               <label class='info-badge tech-label'>Technology</label>" +
        "           </li>" +
        "           <li>" +
        `               <p>${technology}</p>` +
        "           </li>" +
        "       </ul>" +
        "       <ul>" +
        "           <li>" +
        "               <label class='info-badge about-label'>About</label>"  +
        "           </li>" +
        "           <li>" +
        `               <p>${about}</p>` +
        "           </li>" +
        "       </ul>" +
        "       <ul>" +
        "           <li>" +
        "               <label class='info-badge github-label'>Github</label>" +
        "           </li>" +
        "           <li>" +
        `               <a href=${githubLink} target='_blank'>` +
        `                   <p>Source Code</p>` +
        "               </a>" +
        "           </li>" +
        "       </ul>" +
        "       <ul>" +
        "           <li>" +
        "               <label class='info-badge link-label'>Link</label>" +
        "           </li>" +
        "           <li>" +
        `               <a href=${liveLinkHref} target='_blank'>` +
        `                   <p>${liveLinkDesc}</p>` +
        "               </a>" +
        "           </li>" +
        "       </ul>" +
        "   </div>" +
        "</div>";

    return (ProjectOverviewElements);
}
