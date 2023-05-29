export const filterCharacters = (characters, filters, searchValue) => {
    let chars = [...characters];
    if (filters.element.length > 0) {
        chars = chars.filter(char => filters.element.includes(char.element));
    }
    if (searchValue !== "") {
        chars = chars.filter(char => char.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return chars
}