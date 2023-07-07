# Figma Plugin Vue Starter

A starter template using Vue 3 and Vite for developing Figma plugins.

## Table of Contents

- [Getting Started](#getting-started)
- [Importing to Figma](#importing-to-figma)
- [Publishing a Plugin](#publishing-a-plugin)
- [Libraries Included](#libraries-included)
- [Contribution](#contribution)
- [License](#license)

## Getting Started

1. Ensure you have [Node.js](https://nodejs.org) installed.
2. Clone this repository. Navigate to your development folder and run
    ```bash
    git clone https://github.com/antonijap/vue-figma-starter.git your-plugin-name
    ```
3. Install the dependencies
    ```bash
    npm install
    ```
4. This script will ask for your plugin name and do some maintenence (optional)
    ```bash
    npm run reset
    ```
5. Start the development server
    ```bash
    npm run watch
    ```
6. Open `src/App.vue` to start coding the Plugin UI and `Figma/code.js` to interact with Figma API.

## Importing to Figma

Go to plugins and import plugin with the `manifest.json` file. The manifest is located in the root of the folder.

## Publishing a Plugin

Consult with [Figma's documentation](https://help.figma.com/hc/en-us/articles/360042293394-Publish-plugins-to-the-Figma-Community) for a detailed guide on how to publish your plugin to the Figma community.
Remember to generate a new ID field for the `manifest.json` when you are ready to publish.

## Libraries Included

✅ Vue 3

✅ Pinia 2

✅ Tailwind 3

## Contribution

This project is open to contributions and improvements from the community! We believe that collective knowledge can create the best tools. If you have ideas for enhancements, new features, or spot any bugs, don't hesitate to submit an issue or a pull request. If you have any questions, need help getting started, or simply want to discuss something, feel free to reach out at [hi@apek.me](mailto:hi@apek.me). Let's make this project better together!

## License

This project is licensed under the terms of the MIT license. See [LICENSE](./LICENSE) for more details.
