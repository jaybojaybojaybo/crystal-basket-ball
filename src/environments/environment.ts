// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDOqiUXFbTYUPZ_7lolvuYbg_iueTE7lSU",
    authDomain: "crystal-basket-ball.firebaseapp.com",
    databaseURL: "https://crystal-basket-ball.firebaseio.com",
    projectId: "crystal-basket-ball",
    storageBucket: "crystal-basket-ball.appspot.com",
    messagingSenderId: "798511775352"
  }
};
