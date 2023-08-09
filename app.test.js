// MULTIPLCIATION FUNCTION TEST

function myFunc(num1, num2) {
    const result = num1 * num2;
    if (result === 30) {
        return result;
    }
    else {
        return false;
    }
    return result;
}

test('checks to see if the function multiplies num1 and num2', () => {
    expect(myFunc(5, 6)).toEqual(30);
});

// CONCAT-ODDS FUNCTION TEST

function concatOdds (array1, array2) {

    const arrayOdds = []

    for (let i = 0; i < array1.length; i++) {
        const oddOne = array1[i];

        if (oddOne % 2 === 1) {
            arrayOdds.push(oddOne);
        }
    }

    for (let i = 0; i < array2.length; i++) {
            const oddTwo = array2[i];
    
         if (oddTwo % 2 === 1) {
             arrayOdds.push(oddTwo);
         }
    }
    return arrayOdds;

}
test('checks to see if the function multiplies num1 and num2', () => {
    expect(concatOdds([1,2,3,4,5], [6,7,8,9,13])).toEqual([ 1, 3, 5, 7, 9, 13 ]);
});