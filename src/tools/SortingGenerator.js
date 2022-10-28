function sortingGenerateByListType(name, listType) {
    var sorting;
    switch (listType) {
        case "son-yayinlananlar":
            sorting = "publishDate90"
        break;
        default:
            sorting = null;
            break;
    }
    return sorting;
}

export { sortingGenerateByListType };