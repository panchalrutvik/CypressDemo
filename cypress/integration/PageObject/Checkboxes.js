/// <reference types='cypress'/>

class Checkbox{
    visit(){
        cy.visit("/checkboxes")
    }
    enableCheckbox(){
        cy.xpath("//form[@id='checkboxes']//input[@type='checkbox']").check().should("be.checked")
    }
    disableCheckbox(){
        cy.xpath("//form[@id='checkboxes']//input[@type='checkbox']").uncheck().should("not.be.checked")
    }
}
export default Checkbox