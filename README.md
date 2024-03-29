# React + Vite + FireBase authentication

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

--

This project is "working" locally, not when build and deployed to GitHub as gh_pages.

This project has following actions:
- It can create user to Firebase.
- It can check if user exists on Firebase.
- It can check if password is correct or not in Firebase.
- It can in some level log in the user.

Problems:
- Firebase apikeys etc. does not work as varibles:
  - So deploy.yml is not working, if you build project it can't read firebase apikeys from github secrets or .env variables.
    - Therefore builded app in gh_pages shows whitescreen. 
  - Locally api keys etc are stored as variables in:
    - .env: REACT_APP_FIREBASE_API_KEY=AIzNFNNNNNDFSFDDSDSNNFNFNSF format.
    - VITE_FIREBASE_API_KEY=AIzNFNNNNNDFSFDDSDSNNFNFNSF format.
  - Locally api keys are stored ./secrets/Firebaseinit.jsx, apiKey: "AIzNFNNNNNDFSFDDSDSNNFNFNSF" format.

- Upper menu structure:
  - Home link should be in upper left corner login link upper right corner. Maybe error in css.

- Checking if user is logged in or out does not work as it should.
   - Saving user's state not working as expected.


Thanks to:
- https://github.com/sitek94/vite-deploy-demo
- https://gist.github.com/lajlev/4b1d0207f87d0a8e9cf20fc78a6fd60a

 This project is made purely to test and try coding with ChatGPT.
 Do not use this product in production environments!
