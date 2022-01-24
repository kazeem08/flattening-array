    /**
     * 
     * @param {*} input 
     * @returns []
     */
    
    function flatten(input){

        // validate input type
        if(!Array.isArray(input)){
            return 'input should be of type array';
        }

        const flattenedArray = input.reduce((previousElement, currentElement) => {

            // check type of current element
            if (Array.isArray(currentElement)) {

                // use recursion on the array
                previousElement = previousElement.concat(flatten(currentElement));
            } else {
                // push element into arrrayHolder
                previousElement.push(currentElement);
            }

            return previousElement;

        }, []); // set initial value

        return flattenedArray;
    }

    module.exports = flatten;