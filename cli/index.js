import chalk from "chalk";
import figlet from "figlet";
import clear from "clear";

const cli = (plop) => {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync("@ansango CLI", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
  plop.setHelper("splitCapitalize", (text) => {
    return text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
  plop.setHelper("lowercase", (text) => text.toLowerCase());
  plop.setGenerator("@ansango CLI", {
    description: "Create a React Tailwind Blocks CLI",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your Component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/{{pascalCase name}}Styles.ts",
        templateFile: "./templates/component/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./templates/component/test.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/app/components/{{pascalCase name}}/index.ts",
        templateFile: "./templates/component/index.ts.hbs",
      },
    ],
  });
};

export default cli;
