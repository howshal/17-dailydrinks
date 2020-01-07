/**
 * Check if the key of item is in Session Storage.
 * @param {string} key The key of item.
 * @returns {boolean} object exist or not.
 */
const hasObject = (key) => {
    if (localStorage.getItem(key)) {
        return true;
    } else {
        return false;
    }
};

/**
 * Get item of key from Session Storage.
 * @param {string} key - the key of item.
 * @returns {Object|boolean} returns Object when item is found. returns false when item is not found.
 */
const getObject = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return false;
    }
};

/**
 * Save item to Session Storage.
 * @param {string} key - the key of item.
 * @param {Object} object - the object to save.
 * @returns {void}
 */
const saveObject = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object));
};

/**
 * Delete item from Session Storage.
 * @param {string} key - the key of item.
 * @returns {void}
 */
const deleteObject = (key) => {
    localStorage.removeItem(key);
};

export default {hasObject, getObject, saveObject, deleteObject};
