/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

export type Book = {
    title: string,
    author: string,
    libraryID: number
}

export let library: Book[] = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

export function showTitles(): void {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea: HTMLInputElement | null = document.getElementById("displayArea") as HTMLInputElement | null;
    if (textArea) { textArea.innerHTML = titleString; }
}

export function findTitles(): string[] {
    const titles: string[] = [];
    for (let i = 0; i < library.length; i++) {
        titles.push(library[i].title);
    }
    return titles.sort();
}



export function addBook(): void {

    console.log("finish the implementation -- get the author, create a book object, and add to the library array!!");
}


export function findAuthors(): string[] {
    const authors: string[] = [];
    for (let i = 0; i < library.length; i++) {
        authors.push(library[i].author);
    }
    return authors.sort();
}

export function findIDs(): number[] {
    const ids: number[] = [];
    for (let i = 0; i < library.length; i++) {
        ids.push(library[i].libraryID);
    }
    return customSort(ids);
}



export function createBook(title: string, author: string, libraryID: number): Book {
    const newBook: Book = {
        title: title,
        author: author,
        libraryID: libraryID
    };
    return newBook;
}


export function scramble(): void {
    console.log("implement scramble if you have time ...");

}
function customSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}