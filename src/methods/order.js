export function checkFrieht(cart) {
  let isFreight = true;
  if (
    cart.total >= 6000 ||
    cart.carts.some((e) => e.product.CategoryArray.includes('免運費'))
  ) {
    isFreight = false;
  }
  return isFreight;
}

export function filterFreight(carts) {
  const NewCarts = carts;
  carts.forEach((e, index) => {
    NewCarts[index].product.CategoryArray = e.product.category.split(',');
  });
  return NewCarts;
}
