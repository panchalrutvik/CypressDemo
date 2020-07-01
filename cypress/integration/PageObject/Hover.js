/// <reference types='cypress'/>

class Hover {
    hoverFirstImage() {
        cy.visit("/jqueryui/menu")
        cy.xpath("//li[@id='ui-id-3']//a[text()='Enabled']").trigger('mouseover').then($ele => {
            cy.wrap($ele).invoke('show')
        })
        cy.xpath("//a[text()='Enabled']//following-sibling::ul//li//a[text()='Downloads']").trigger('mouseover').then($e => {
            cy.xpath("//a[text()='Enabled']//following-sibling::ul//li//a[text()='Downloads']//following-sibling::ul").invoke('show')
        })
        cy.xpath("//a[text()='Enabled']//following-sibling::ul//li//a[text()='Downloads']//following-sibling::ul//li//a[text()='PDF']").should('have.text', 'PDF')
    }
}
export default Hover