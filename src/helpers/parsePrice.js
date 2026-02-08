export const parsePrice = (price) =>
  Number(price.replace("$", "").replace(".00", ""));
