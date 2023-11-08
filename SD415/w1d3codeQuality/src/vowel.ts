//making a function that take parameter of string of length 1 and return true if it was vowels otherwise false.

 export function isVowel(str: string): boolean {
    if (str.toLowerCase() === 'a' || str.toLowerCase() === 'e' ||
        str.toLowerCase() === 'i' || str.toLowerCase() === 'o' ||
        str.toLowerCase() === 'u') {
        return true;

    }


    return false;
}
console.log(isVowel('a'));