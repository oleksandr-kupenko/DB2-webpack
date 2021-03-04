"use strict";

const bros = ["Cat", "Dog", "Lynx"];
const bro = (greeting, friend) => {
  // friend = null ?? friend;
  const obj = { parent: { child: 'doggy' } };

  let guys = [friend, obj?.parent?.child, ...bros];
  return bros.join(", ");
};

export { bro };
