/* eslint no-restricted-globals: 0*/
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "steven-1.auth0.com",
        clientID: "rgiFCHd9r9qCSTNffZGy6m27p3vfwFm6",
        redirectUri: "https://cmpe172-payroll-red.herokuapp.com/callback",
        audience: "https://steven-1.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    })

    constructor() {
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.pathname = "/payroll";
            }
            else if (err) {
                location.pathname = "/";
                console.log(err);
            }
        })
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        location.pathname = "/";
    }

    getProfile() {
        if (localStorage.getItem("id_token")) {
            return jwtDecode(localStorage.getItem("id_token"));
        }
        else {
            return {};
        }
    }
}