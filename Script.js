// @@ func - createNewBanner, takes in 3 paramethers to create a new 'Banner' element.
const createNewBanner = (element_id, redirect_link, banner_img, event) => {
    //Prevent Deafult Submit refresh behavior.
    event.preventDefault();
    //Banners Factory function returns new Banner HTML Element.
    let be = bannersElementFactory(redirect_link, banner_img);
    //Insert a banner element to DOM with given id.
    insertBannerByElementId(element_id, be);
    //Clean up func for form fields.
    initializeForm();
};

// @@ func - Create a banner DOM element and set 'Click' event listener,
// return - new banner Element.
const bannersElementFactory = (redirect_link, banner_img) => {
    //Create new image DOM element. 
    const bannerElement = document.createElement('img');
    //Set source attribute of the crated banner element as given banner_img. 
    bannerElement.src = banner_img;
    //Banner's Styles using js.
    bannerElement.style.height = '320px';
    bannerElement.style.width = '320px';
    //Add Event listener to invoke redirection by Click on UI.
    bannerElement.addEventListener('click', () => window.open(redirect_link, '_blank'));
    //return the new html Element.
    return bannerElement;
};

// @@ func - Takes in banner element to insert as child of given DOM element by its id.
const insertBannerByElementId = (element_id, bannerElement) => {
    //Append created banner to the requested element by element's id
    document.getElementById(element_id).appendChild(bannerElement);
};
// @@ func - Clear the banner-form fields.
const initializeForm =()=>{
    document.forms['banner-form'].reset();
};