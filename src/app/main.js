import "../sass/main.sass";

import { bro } from "./bro";

const init = () => {
  document.querySelector("#greeting").innerHTML = bro("Hi", "Duck");
  console.log(bro("Hi", "Duck"));
};

export { init };
