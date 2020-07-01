///<reference types="cypress" />

class BrokenImage {
    visit() {
        cy.visit("/broken_images")
    }

    openBrokenImagePage() {
        cy.get('img')
            .should('be.visible')
            .and(($img) => {
                expect($img[2].naturalWidth).to.be.equal(0)
            })
    }
}
export default BrokenImage