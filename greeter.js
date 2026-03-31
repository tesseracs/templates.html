/** ES module: imported by `app.js`. */
export class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello from ${this.name} (HTML/JS template)`;
  }
}
