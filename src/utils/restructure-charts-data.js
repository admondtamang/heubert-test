/**
 * Restructure Data for charjs
 *
 * @param {*} data
 * @param {*} name
 * @param {*} value
 *
 * @returns {labels,values}
 */
function structureChartData(data, name, value) {
    let labels = [],
        values = [];

    // data push to labels and values
    data.map((row) => {
        labels.push(row[name]);
        values.push(row[value]);
    });

    return { labels, values };
}

module.exports = { structureChartData };
