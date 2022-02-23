function queryStringParser(str) {
  if(!str) return false;
  const query = {};
  let strArr = str.split("?")
  // console.log(strArr[1].split("&"))
  // for (const item of str.matchAll(/(?<=&|\?)([\w]+)=([\w]+)/ig)) {
  //   query[item[1]] = item[2]
  // }
  for (const item of strArr[1].split("&")) {
    // console.log(item.split("="));
    const ky = item.split("=");
    query[ky[0]] = ky[1];
  }
  // console.log(query)
  // console.log(query)
  // string.matchAll(/(?<=&|\?)([\w]+)=([\w]+)/ig)
  return query;
}

export default queryStringParser;
