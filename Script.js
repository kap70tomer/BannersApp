// (function(){ 
// @@ Var 'banners'<Array> - Model for the memoriezed banners to easly set to local storage.
const banners = [];
// @@ func - createNewBanner, takes in 3 paramethers to create a new 'Banner' element.
const createNewBanner = (element_id, redirect_link, banner_img, event) => {
    //Prevent Deafult Submit refresh behavior.
    event.preventDefault();
    //Banners Factory function returns new Banner HTML Element.
    let be = bannersElementFactory(redirect_link, banner_img);
    // Push the new banner to the banners array, as Model.
    banners.push({ redirect_link, banner_img });
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
    //Append created banner to the requested element by element's id.
    document.getElementById(element_id).appendChild(bannerElement);
};
// @@ func - Clear the banner-form fields.
const initializeForm = () => {
    document.forms['banner-form'].reset();
};
// @@ func - Stores the banners array model, Under 'banners-data' Key cach local storage.
const saveBannersOnLocalStorage = () => {
    localStorage.setItem('banners-data', JSON.stringify(banners));
    console.log("saved!", JSON.stringify(banners));
}
// @@ func - Clear cached banners data from localStorage, Under 'banners-data' Key.
const clearBannersOnLocalStorage = () => {
    localStorage.removeItem('banners-data');
    console.log("Cleared local storage!", JSON.stringify(localStorage));
}

// @@ func - 'loadCachedBanners' - Load saved bannners from local storage on page load.    
const loadCachedBanners = () => {
    // Get saved banners from local storage and parse them into an array.
    const cachedBanners = JSON.parse(localStorage.getItem('banners-data')) || [];
    // Iterate saved banners array.
    cachedBanners.forEach(({ redirect_link, banner_image }) => {
        // Populating banners array to be updated with cached banners.
        banners.push({ redirect_link, banner_image });
        // Creates a banner element each.
        let be = bannersElementFactory(redirect_link, banner_image);
        // Insert each banner To View.
        insertBannerByElementId('banners-list', be);
    });
};

// }) - " ### TODO - tryed to prevent using Global vars, Costs me subbmiting from form behavior refresh".