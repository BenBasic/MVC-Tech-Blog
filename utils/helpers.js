
module.exports = {
    // Returns the date in DD/MM/YYYY format
    format_date: date => {
        return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
    // If the amount of the item isnt equal to one, then it will pluralize the item
    if (amount !== 1) {
        return `${word}s`;
    }
    // Returns the word value
    return word;
    }
}