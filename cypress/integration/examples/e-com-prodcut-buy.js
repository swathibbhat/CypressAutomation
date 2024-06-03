import LoginPage from "../PageObjects/LoginPage";
import CartPage from "../PageObjects/CartPage";
const SearchPage = require ('../PageObjects/SearchPage');

describe('E-commerce product checkout cases', function() {
    beforeEach(function() {
        cy.fixture('searchTerms').as('searchData');
        cy.login(); 

        const loginPage = new LoginPage();
        cy.get(loginPage.successful_login, { timeout: 10000 })
            .should('exist')
            .and('not.contain', 'Hello, sign in');

        cy.url().should('include', 'ref_=nav_ya_signin');
    });

    

    it('should log in and search for laptops, then filter by brand', function() {
        
        const searchPage = new SearchPage();
        const cartPage = new CartPage();

        cartPage.clickCartButton();
        cy.wait(2000);
        cartPage.clearCartItems();
        cy.get(SearchPage.searchBoxInput).type(this.searchData.searchTerm);
        cy.get(SearchPage.searchSubmit).click();
        cy.url().should('include', encodeURIComponent(this.searchData.searchTerm));
        const brandName = 'Acer';
        searchPage.filterResultsByBrand(brandName);
        cy.get(SearchPage.listOfProductName).should('have.length.gt', 0);
        cy.wait(2000);
        SearchPage.addedToCartText().then((text) => {
            cy.log(text); 
            assert.equal(text, '1 in cart', 'Text is match');
          });
        
            
    });

    it('should log in and search for a smartphone, then filter by brand', function() {
        
        const searchPage = new SearchPage();
        cy.get(SearchPage.searchBoxInput).type(this.searchData.searchTerm_A);
        cy.get(SearchPage.searchSubmit).click();
        cy.url().should('include', encodeURIComponent(this.searchData.searchTerm_A));
        const brandName = 'Redmi';
        searchPage.filterResultsByBrand(brandName);
        cy.get(SearchPage.listOfProductName).should('have.length.gt', 0);
        cy.wait(2000);
        SearchPage.addedToCartText().then((text) => {
            cy.log(text); 
            assert.equal(text, '1 in cart', 'Text is match');
          });
      
    });

    it('should log in and search for smartTv, then filter by brand', function() {
        
        const searchPage = new SearchPage();
        cy.get(SearchPage.searchBoxInput).type(this.searchData.searchTerm_B);
        cy.get(SearchPage.searchSubmit).click();
        const brandName = 'Samsung';
        searchPage.filterResultsByBrand(brandName);
        cy.get(SearchPage.listOfProductName).should('have.length.gt', 0);
        cy.wait(2000);
        SearchPage.addedToCartText().then((text) => {
            cy.log(text); 
            assert.equal(text, '1 in cart', 'Text is match');
          });
    });


    it('should log in and navigate to cart page', function() {
        const cartPage = new CartPage();
        cartPage.clickCartButton();
        cy.wait(2000);
        cartPage.clickProceedToBuyButton();
        cartPage.clickUseThisAddressButton();
        cy.get(CartPage.useThisPaymentMethod).should('have.css', 'color', 'rgb(15, 17, 17)');

        
 
    });
});
