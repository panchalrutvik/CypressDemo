/// <reference types='cypress'/>
class Scroll{
    visit(){
        cy.visit("/infinite_scroll")
    }
    scrollToBottom(){
        cy.window().scrollTo('bottom', {duration: 15000})
    }
}
export default Scroll