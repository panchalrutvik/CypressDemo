/// <reference types="cypress"/>

class AddOrRemove {

    visit() {
        cy.visit('/')
    }

    addElement(n) {
        cy.xpath("//a[text()='Add/Remove Elements']").click()
        for (let index = 0; index < n; index++) {
            cy.xpath("//button[text()='Add Element']").click()
        }
        cy.xpath("//div[@id='elements']//button[@class='added-manually']").should("have.length", n)
    }

    removeElement(n) {
        for (let index = 0; index < n; index++) {
            cy.xpath("//div[@id='elements']//button[@class='added-manually'][" + n + "]").click()
        }
        cy.xpath("//div[@id='elements']//button[@class='added-manually']")
            .then(listing => {
                const listingCount = Cypress.$(listing).length;
                expect(listing).to.have.length(listingCount);
            });
    }
}
export default AddOrRemove
