const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter(e => !elementsToRemove.includes(e))
};

// Do not edit below this line
module.exports = removeFromArray;
