
let util = {};

util.changePageTitle = (title) => {
    title = title || 'learn admin';
    window.document.title = title;
}

export default util;