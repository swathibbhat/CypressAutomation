class LoginPage {

    
    static visitPath = "ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F_encoding%3DUTF8%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
    static emailField = "#ap_email";
    static continueButton = "#continue";
    static passwordField = "#ap_password";
    static signInButton = "#signInSubmit";
    static loggedInElement = "#nav-link-accountList-nav-line-1"


    navigateToLoginPage() {
       cy.visit(Cypress.config('baseUrlUI') + LoginPage.visitPath);
    }

    enterEmail(email) {
        return cy.get(LoginPage.emailField).type(email);
    }

    clickContinue() { 
        cy.get(LoginPage.continueButton).click();
    }


    enterPassword(password) {
        return cy.get(LoginPage.passwordField).type(password);
    }

    clickSignIn() { 
        cy.get(LoginPage.signInButton).click();
    }

   
    successful_login() {
        return cy.get(LoginPage.loggedInElement);
    }
}

export default LoginPage;
