steps for project

- created the react app using create-react-app command (it is deprecated now)
- installed tailwind css for create react app through the help of claude ai, since create react app is deprecated we are not seeing the commands in the framework guideliness of official tailwind css website
- created components- Body, Login, Browse, Header
- configured routing in App.js using createBrowserRouter and RouterProvider
- configured Header
- add background image in loginPage
- built sign and sign up feature
- used useRef hook to reference form values
- have validate method for form data
- shown error message
- created a new project in firebase
- opted Set up Firebase Hosting for that project
- run commands:
  a. npm install -g firebase-tools
  b. firebase login  
  c. firebase init (public folder will be build)
  d. npm install firebase  
  e. npm run build  
  f. firebase deploy  
  and our project is deployed at https://netflix-a3e34.web.app
- added email and password authentication to the web app
- set up authentication using firebase method in Login component.
- npm i -D @reduxjs/toolkit
- npm i react-redux
- created appStore
- created userSlice
- provided appStore to app.js
- in body useEffect attached listner for onAuthState changed and dispatched action for signin/signup and signout
- in login add method updateProfile to update the profile with displayName
- routing to browse and login page accordingly
- implement signout feature in header.js using firebase methods.
