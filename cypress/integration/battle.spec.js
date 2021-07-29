
describe('battle game user interactions', () => {

  it('starts a new game (it does loads of stuff in the same it unfortuanelty)', () => {


    cy.visit('/')
    cy.get("#p1-name").type('Colin');
    cy.get("#p2-name").type('Lottie');
    cy.get("#start").click()
    cy.get("#p1-display-name").should('contain','Colin')
    cy.get("#p2-display-name").should('contain','Lottie')

    // ***** <NEW IT> wish they could be seperate its ******

    // cy.visit('/battle')
    cy.get("#p1-hp").should('contain', 'Player 1 hp: 100');
    cy.get("#p2-hp").should('contain', 'Player 2 hp: 100');

   // ***** <NEW IT> wish they could be seperate its ******

    cy.get("#attack-button").click();
    cy.get("#attack-log").should('contain','Colin attacks Lottie');
     
    // ***** <NEW IT> wish they could be seperate its ******

    cy.get("#p2-hp").should('contain', 'Player 2 hp: 90')

    // ***** <NEW IT> wish they could be seperate its ******

    cy.get('#turn-tracker').should('contain','Lottie')
    cy.get("#attack-button").click();
    cy.get('#turn-tracker').should('contain','Colin')
    cy.get("#attack-log").should('contain','Lottie attacks Colin');
    // ***** <NEW IT> wish they could be seperate its ******
    // In separate IT change 17 to 19. 
    for (let i = 0; i < 17; i++){
      cy.get("#attack-button").click();
    }
    cy.get('#game-status').should('contain','Colin has beaten Lottie') 
    
    
    // ***** <NEW IT> wish they could be seperate its ******


  });




  // it('shows starting hitpoints' , () => {
  //   cy.visit('/battle')
  //   cy.get("#p1-hp").should('contain', 'Player 1 hp: 100');
  //   cy.get("#p2-hp").should('contain', 'Player 2 hp: 100');
  // })

  // it('shows confirmation of attack' , () => {
  //   cy.visit('/battle')
  //   cy.get('#attack').click()
  //   cy.get("#p1-attack-notify").should('contain', 'player 1 attacked player 2')
  // })
});
