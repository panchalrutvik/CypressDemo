/// <reference types='cypress' />

class HorizontalSlider{
    moveSlider(n){
        cy.visit("/horizontal_slider")
        cy.xpath("//input[@type='range']").invoke('val', n)
        .trigger('change').xpath("//span[@id='range']").should('have.text',n)
    }
}
export default HorizontalSlider