import { Greeter } from "./greeter.js";

const root = document.getElementById("app");
const g = new Greeter("Tesseracs");
if (root) {
  root.textContent = g.greet();
}
