var LoginPage = require('./../pages/loginpage')

describe('Login Testes', function(){
    
    it('Login Sucess', function(){
        url = 'https://www.saucedemo.com/';
        LoginPage.goTo(url);
        LoginPage.fillCredentials('standard_user', 'secret_sauce');
        LoginPage.clickLogin();

    })
})