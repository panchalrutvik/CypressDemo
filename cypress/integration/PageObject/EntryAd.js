/// <reference types="cypress" />

class EntryAd {
    firstTime() {
        cy.visit("/entry_ad")
        cy.url().should("include", "/entry_ad")
        cy.xpath("//p[text()='Close']").click()
        cy.xpath("//div[@id='modal']").should("not.be.visible")
    }
    reEnable() {
        cy.xpath("//a[text()='click here']").click()
        cy.xpath("//div[@id='modal']").should("be.visible")
    }
}
export default EntryAd