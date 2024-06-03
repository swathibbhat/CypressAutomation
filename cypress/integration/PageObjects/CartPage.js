
class CartPage{

    static cartBtn = "#nav-cart-count-container"
    static itemAdd = "#a-changeover puis-atcb-notification"
    static proceedToCheckoutBtn = "#desktop-ptc-button-celWidget"
    static addUseThisAddressBtn = "#orderSummaryPrimaryActionBtn"
    static useThisPaymentMethod = "#orderSummaryPrimaryActionBtn-announce"
    static cartDeleteButton = "span[class='a-size-small sc-action-delete'] span[class='a-declarative']"
    static cartHeaderTxt = "div[class='a-row'] h1"

    clickCartButton(){
        return cy.get(CartPage.cartBtn).click();
    }

    clickProceedToBuyButton()
    {
        return cy.get(CartPage.proceedToCheckoutBtn).click();
    }


    clickUseThisAddressButton()
    {
        return cy.get(CartPage.addUseThisAddressBtn).click();
    }

    clickUseThisPaymentMethod()
    {
        return cy.get(CartPage.useThisPaymentMethod).click
    }

    addedToCartMessage(){
        return cy.get(CartPage.itemAdd);
    }
    static cartHeaderText() {
        return cy.get(CartPage.cartHeaderTxt).invoke('text');
    }

    clearCartItems()
    {
        cy.get(CartPage.cartDeleteButton).each(($el1) => {
        CartPage.cartHeaderText().then((text) => {
            if (text.includes('Shopping Cart'))
            {
                cy.wait(1000);
                cy.get(CartPage.cartDeleteButton).eq(0).click({force:true});
            }
            else
            {
                return false;  
            }
        });
            
        });
    }
    }
export default CartPage;