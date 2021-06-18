/// <reference types="Cypress" />

describe('Landing Page', () => {
    it('should display the app name on the home page', () => {
        cy.visit('/'); // go to the home page

        // get the title element and check if title is correct
        cy.get('title')
            .should('contain.text', 'Federico Peruzzi');
    });
});