

function search(query, scripts) {
  const searchRegex = new RegExp(`[\\.\\n\\r]([^\\.]+${query}[^\\.]+\\.)`, "g");
  let retval = [];
  scripts.forEach(script => {
    const result = script.matchAll(searchRegex);
    for (let match of result) {
      retval.push(match[1].trim());
    }
  })
  
  return retval;
}

export default search;