/**
 *
 * @param {string} text
 * @returns {string}
 */
export const escapeHtml = (text) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
};

/**
 *
 * @param {string} text
 * @returns {string}
 */
export const nl2br = (text) => {
    return text.replace(/([^>])\n/g, '$1<br/>\n');
};