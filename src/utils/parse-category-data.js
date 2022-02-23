function parseCategoryData(data) {
  const category = [];
  const cates = data.categories;
  const subs = data.sub;
  for (const key in cates)
    category.push({name: cates[key], subs: []});
  subs.forEach((item) => {
    category[item.category].subs.push(item)
  })
  return category;
}


export default parseCategoryData;
