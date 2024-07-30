// questions

// 1. DS & Algo convert snake case to pascal case
// 2. what is microfrontend architecture
// 3. what is diff between react fn components/class components
// 4. what is prototype

String.prototype.toPascalCase = function (args) {
  return this.split("_")
    .map((text) => text[0].toUpperCase() + text.slice(1))
    .join("");
};

console.log("to_snake_case".toPascalCase()); // shd return ToSnakeCase
