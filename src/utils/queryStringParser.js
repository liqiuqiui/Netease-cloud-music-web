function queryStringParser(string) {
  
  
  const query = {};
  for (const item of string.matchAll(/(?<=&|\?)([\w]+)=([\w]+)/ig)) {
    query[item[1]] = item[2]
  }
  // console.log(query)
  // string.matchAll(/(?<=&|\?)([\w]+)=([\w]+)/ig)
  return query;
}

export default queryStringParser;
