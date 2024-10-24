# Portfolio Website

This is a personal portfolio website built using React JS. The site showcases projects, and skills.

## Features

- **React**: The front-end is built using React, a popular JavaScript library for building user interfaces.
- **React-Bootstrap**: A responsive and customizable CSS framework for React components.
- **Animate.css**: CSS animations to bring smooth transitions and effects.
- **Firebase**: Firebase is used to manage and store messages from the contact form.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    cd your-portfolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
    - Create a Firebase project in your Firebase Console.
    - Enable Firestore for the database.
    - Add your Firebase config to the project.

4. Start the development server:
    ```bash
    npm start
    ```

## Available Scripts

In the project directory, you can run the following commands:

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
It correctly bundles React in production mode and optimizes the build for best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Firebase Contact Form Setup

1. Go to your Firebase Console and create a Firestore database.
2. Use Firestore to store submitted form data.
3. Add the Firebase config file in your React app and integrate it with the contact form.

## Deployment

To deploy your portfolio, you can use platforms like:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)