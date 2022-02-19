Vite React-TS Starter

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">
  <h1 align="center">Vite React-TS - Starter</h1>

  <p align="center">
    Create a fast app with
    <a href="https://reactjs.org/">React</a>
    <br />
    <br />
    <a href="https://github.com/ansango/vr-ts-starter/issues">Report a bug</a>
  </p>
</div>

<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">Introduction</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#create-a-component">Create a Component</a></li>
    <li><a href="#test-and-lint">Test and Lint</a></li>
    <li><a href="#build">Build and deploy</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

## Introduction

### About

This project has been created starting building fast in [React](https://reactjs.org/).

It is based on [React](https://reactjs.org/), [Tailwindcss](https://tailwindcss.com/), and [Vite](https://vitejs.dev/).

### Built with

<div style="display:flex; align-items:center; flex:wrap;">
  <a href="https://reactjs.org/" target="_blank" style="padding:0 5px 0 5px; text-align:center">
    <img src="assets/react.svg" width="60" height="60" />
  </a>
  <a href="https://vitejs.dev/" target="_blank" style="padding:0 5px 0 5px; text-align:center">
    <img src="assets/vite.svg" width="60" height="60" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" style="padding:0 5px 0 5px; text-align:center;">
    <img src="assets/typescript.svg" width="60" height="60" />
  </a>
  <a href="https://tailwindcss.com/" target="_blank" style="padding:0 5px 0 5px; text-align:center;">
    <img src="assets/tailwindcss.svg" width="60" height="60" />
  </a>
  <a href="https://jestjs.io/" target="_blank" style="padding:0 5px 0 5px; text-align:center">
    <img src="assets/jest.svg" width="60" height="60" />
  </a>
  <a
    href="https://testing-library.com/docs/react-testing-library/intro/"
    target="_blank"
    style="padding:0 5px 0 5px; text-align:center">
    <img src="assets/testinglibrary.svg" width="60" height="60" />
  </a>
  <a href="https://eslint.org/" target="_blank" style="padding:0 5px 0 5px; text-align:center">
    <img src="assets/eslint.svg" width="60" height="60" />
  </a>
  <a href="https://prettier.io/" target="_blank" style="padding:0 5px 0 5px; text-align:center">
    <img src="assets/prettier.svg" width="60" height="60" />
  </a>
  <a href="https://plopjs.com/" target="_blank" style="padding:0 5px 0 5px; text-align:center">
  <img src="assets/plop.png" width="60" height="60" />
  </a>

  <a href="https://typicode.github.io/husky/" target="_blank" style="padding:0 5px 0 5px; text-align:center">
    <img src="assets/husky.png" width="60" height="60" />
  </a>
</div>

## Getting Started

Use Github templete or:

```bash
git clone https://github.com/ansango/vr-ts-starter.git
```

and install the dependencies:

```bash
yarn install # or npm install
```

Then run in your terminal:

```bash
yarn start # npm start
```

> This runs a script manager, then you can choose what you want to do. 😄

<div align="center">
  <img src="assets/readme/manager.png" width="650">
</div>

> ⚠️ The CLI works fine in **`bash`**, but in **`powershell`** the arrows do not allow you to select anything, so you will have to create the files manually. **[This is a bug in the Node core on Windows](https://github.com/SBoudrias/Inquirer.js/issues/793).**

<p align="right"><a href="#top">back to top</a></p>

## Create a Component

Open your terminal and run:

```bash
 yarn cli # or select "cli" option in the Script Manager
```

With the CLI you can create a component and type a name:

<div align="center">
  <img src="assets/readme/component.png" width="650">
</div>

> This generates template files to coding a component. You will find all the files in `src/app/components` folder. Your component folder contains:

- `Component.tsx` file:

```jsx
import { FC } from "react";
import * as cn from "./SampleComponentStyles";

export type SampleComponentProps = {
  /**
   * Description of options in Storybook
   */
  option?: "option__one" | "option__two" | "option__three",
  /**
   * Optional click handler
   */
  onClick?: () => void,
  /**
   * Class Name override
   */
  className?: string,
};

/**
 * Description of SampleComponent component displayed in Storybook
 */

const SampleComponent: FC<SampleComponentProps> = ({
  option = "option__one",
  className,
  ...props
}) => {
  const cnOption = cn.options[option];
  const styles = className ?? cnOption;
  return (
    <div className={styles} {...props}>
      <span>SampleComponent</span>
    </div>
  );
};

export default SampleComponent;
```

- `ComponentStyle.ts` file, to write Tailwind classes as blocks:

```js
/**
 ** Write your tailwind classes as objects and strings and import them in your component
 */

export const options = {
  option__one: "bg-red-500 text-white font-bold py-2 px-4 rounded max-w-xs cursor-pointer",
  option__two: "bg-green-500 text-white font-bold py-2 px-4 rounded max-w-sm cursor-pointer",
  option__three: "bg-blue-500 text-white font-bold py-2 px-4 rounded max-w-md cursor-pointer",
};
```

- `Component.test.tsx` file, to testing your component:

```jsx
/**
 *? SampleComponent Test
 */

import { render, screen } from "@testing-library/react";

import SampleComponent from "./SampleComponent";

describe("<SampleComponent />", () => {
  it("should render", () => {
    render(<SampleComponent />);
    expect(screen.getByText("SampleComponent")).toBeInTheDocument();
  });
});
```

<p align="right"><a href="#top">back to top</a></p>

## Test and Lint

You can run tests:

<div align="center">
  <img src="assets/readme/test.png" width="650">
</div>

You can also run unit tests in **watch mode** or run lint, [ESLint](https://eslint.org/):

> Before you can commit to your repository [ESLint](https://eslint.org/) and all tests will be run, if they fail [Husky](https://typicode.github.io/husky/#/) will not let you commit.

<p align="right"><a href="#top">back to top</a></p>

## Build

### Build and deploy your App

It's easy, to compile your App in **`/dist` folder** run:

<div align="center">
  <img src="assets/readme/build.png" width="650">
</div>

> Easy to do at [Vercel](https://vercel.com/).

<p align="right"><a href="#top">back to top</a></p>

## Contributing

If you have problems, please open an [issue](https://github.com/ansango/rtb-starter/issues)

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right"><a href="#top">back to top</a></p>

> [Stars are welcome!](https://github.com/ansango/rtb-starter) ⭐⭐⭐

## License

Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/ansango/rtb-starter/blob/main/LICENSE.txt) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/ansango/rtb-starter/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ansango
