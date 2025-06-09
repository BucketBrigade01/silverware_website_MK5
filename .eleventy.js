const {DateTime} = require('luxon');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./static/style.css");
    eleventyConfig.addPassthroughCopy("./src/scripts");
    eleventyConfig.addPassthroughCopy("./src/shows");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/posters");

    eleventyConfig.addFilter('showDate', (dateObj) =>{
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toLocaleString(DateTime.DATE_HUGE);
    });

    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
}