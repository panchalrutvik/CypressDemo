/// <reference types = 'cypress'/>
import '@4tw/cypress-drag-drop'
class DragAndDrop {
    visit() {
        cy.visit("/drag_and_drop")
    }

    dragTo() {
        cy.get('#column-a').drag('#column-b');
        cy.get('#column-b').drag('#column-a');
        cy.get('#column-a').drag('#column-b');

    }
}
export default DragAndDrop