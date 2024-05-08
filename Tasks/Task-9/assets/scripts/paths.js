/** @type { () => string } */
function getCurrentPath() {
    const pathArray = window.location.href.split('/');
    return pathArray.slice(0, pathArray.length - 1).join('/');
}