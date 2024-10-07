# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## CRA
### Purpose: CRA is a tool that helps you quickly create a new React project.
### How it works: When you run a simple command (npx create-react-app my-app), it sets up a new project with all the necessary files and configurations. This includes setting up Webpack, Babel, and other tools behind the scenes.
### Pros: It's beginner-friendly because everything is set up for you. You don't have to worry about configurations or installations.
### Cons: Since it uses Webpack for bundling, it can be slower when dealing with large projects. Customizing it beyond the default settings can also be a bit challenging

## Vite
### Purpose: Vite is a modern build tool specifically crafted for building React applications with speed and efficiency in mind.
### How it works: Vite simplifies project setup by requiring minimal configuration. It utilizes ES modules (JavaScript's native module system) directly in the browser, speeding up development by serving files without the need for bundling during development.
### Pros: Speed: Vite is exceptionally fast, even for large projects. It leverages native ES module support to deliver rapid development experiences. Hot Module Replacement (HMR): Vite supports HMR out of the box, allowing developers to see changes in real-time without reloading the entire page, enhancing productivity and workflow
### Vite prioritizes developer experience by optimizing build times and providing features like HMR, making it an excellent choice for React projects where rapid iteration and feedback are crucial
### ES modules are the standardized module system for JavaScript, allowing developers to modularize their code and improve code organization.
### Vite leverages ES modules directly in the browser during development. Instead of bundling all modules into a single file (as traditional build tools often do), Vite serves individual modules to the browser as separate files.
### This approach eliminates the need for bundling during development, as the browser can handle loading and caching individual modules efficiently. As a result, developers can see their changes reflected in the browser almost instantly without waiting for a full bundle rebuild.
### Speeding Up Development: By serving files directly to the browser without bundling, Vite significantly speeds up the development process. Developers benefit from near-instantaneous feedback when making changes to their code. This rapid feedback loop enhances developer productivity and workflow, allowing for faster iteration and experimentation during development.

## Parcel
### Purpose: Parcel is a bundler for JavaScript applications, including React.
### How it works: Parcel automatically bundles your React app's assets (JavaScript, CSS, HTML) together into a smaller, optimized package. It also does this with minimal configuration.
### Pros: It’s known for its simplicity and zero-config philosophy. It's also very fast, thanks to parallel processing and caching.
### Cons: It may not be as feature-rich as Webpack, especially when handling more complex projects or customizations.
### Parcel utilizes parallel processing to handle multiple tasks simultaneously during the build process. This means that instead of executing tasks sequentially, Parcel distributes the workload across multiple CPU cores, allowing different parts of the build process to run concurrently.By leveraging the computing power of multiple CPU cores, Parcel can perform tasks like dependency resolution, file parsing, and bundling in parallel, significantly reducing the overall build time. This parallelization of tasks enables Parcel to scale effectively with the hardware it's running on, making it well-suited for projects of varying sizes, from small prototypes to large-scale applications with numerous dependencies.
### Parcel employs caching mechanisms to store intermediate build artifacts and dependencies between build runs. When a project is built, Parcel caches the results of various tasks, such as parsed files, compiled assets, and resolved dependencies. On subsequent builds, Parcel checks the cache to determine if any files or dependencies have changed since the last build. If there are no changes, Parcel can reuse the cached results instead of reprocessing the same files, saving time and resources. Caching is particularly beneficial during development iterations, where developers frequently make small changes to code. By only rebuilding what has changed and reusing cached results for unchanged files, Parcel can achieve faster incremental builds, providing quick feedback to developers
