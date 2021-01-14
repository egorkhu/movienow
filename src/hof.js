const joinArray = str => {
    return function(arr) {
        if (arr) {
            return arr.join(str)
        }
    }
}

export const joinArrayComma = joinArray(', ')