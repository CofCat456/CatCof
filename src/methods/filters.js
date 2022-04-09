export function currency(num) {
  const n = parseInt(num, 10);
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== '.' && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, '')
        : c
    )}`;
}

export function date(time) {
  console.log(time);
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}

export function dealCategory(product) {
  const NewProduct = product;
  product.forEach((element, index) => {
    NewProduct[index].CategoryArray = element.category.split(',');
  });
  return NewProduct;
}

export function filterCategory(str, product) {
  let NewProduct = [];
  NewProduct = product.filter((item) => item.CategoryArray.includes(str));
  return NewProduct;
}
