function sortingGenerateByListType(name, listType) {
  var sorting;
  switch (listType) {
    case "son-yayinlananlar":
      sorting = "publishDate90";
      break;
    default:
      sorting = null;
      break;
  }
  return sorting;
}

function titleGenerateByListType(name, listType) {
  var title;
  switch (listType) {
    case "son-yayinlananlar":
      title = "Son Yayınlananlar";
      break;
    default:
      title = null;
      break;
  }
  return title;
}

export { sortingGenerateByListType, titleGenerateByListType };
