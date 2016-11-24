class AuthService {
    hardCodedLogin = [
        {
            user: "iwa",
            password: "iwa"
        }
    ];

    login(username, password) {
        return this.hardCodedLogin.reduce(function(a,b) {
            return a || (b.user == username && b.password == password);
        }, false);
    }
}

export default new AuthService()