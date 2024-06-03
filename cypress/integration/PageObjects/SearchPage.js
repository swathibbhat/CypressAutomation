
class SearchPage {
   
    static searchBoxInput = '#twotabsearchtextbox';
    static searchSubmit = '.nav-search-submit.nav-sprite';
    static listOfProductName = '.a-size-base-plus.a-color-base.a-text-normal';
    static addToCartButton = 'span.a-button-inner';
    static addedToCartSelector = "div[class='a-row puis-atcb-remove-group'] span[class='a-size-mini a-color-secondary puis-atcb-remove-group-message a-text-bold']";



    searchInput(searchData) {
        return cy.get(SearchPage.searchBoxSelector).click().type(searchData);
    }

    searchSubmit() {
        return cy.get(SearchPage.searchButtonSelector).click();
    }

    

    filterResultsByBrand(brandName) {
        const brand = brandName.toLowerCase();
        let count = 0;
        cy.get(SearchPage.addToCartButton).each(($el1) => {
            if ($el1.text().includes('Add to cart'))
            {
                return false;
            }
            else 
            {
                count = count + 1;
            }

        });

        cy.get(SearchPage.listOfProductName).each(($el, index) => {
            const productTitle = $el.text().toLowerCase();
            if (productTitle.includes(brand)) {
                const addToCartindex = index + count ; 
                cy.get(SearchPage.addToCartButton).eq(addToCartindex).click({force: true});
                return false; 
            }
        });
    }

   static addedToCartText() {
        return cy.get(SearchPage.addedToCartSelector).invoke('text');
}
    
}



export default SearchPage;
module.exports = SearchPage;
