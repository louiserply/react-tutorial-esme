class AuthService {
    hardCodedLogin = [
        {
            user: "iwa",
            password: "iwa"
        }
    ];

    login(username, password) {
        //Check the values
        return hardCodedLogin.reduce(function(a,b) { return a || b; })
    }
}

export default new AutService()