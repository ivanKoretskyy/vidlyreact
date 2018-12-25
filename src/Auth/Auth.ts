import auth0 from 'auth0-js';

interface AuthI {
    history: any;
    auth0: any
}

export default class Auth implements AuthI {
    history: any;
    auth0: any;

    constructor(history: any) {
        this.history = history;
        this.auth0 = new auth0.WebAuth({
          domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
          clientID: process.env.REACT_APP_AUTH0_CLIENTID as string,
          redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
          responseType: "token id_token",
          scope: "openid profile email"
        })
 
    }
    login = () => {
        this.auth0.authorize()
    }
}