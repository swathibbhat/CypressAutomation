describe('SWAPI Tests', () => {
    const BASE_URL = Cypress.config('baseUrlAPI');
  
    it('should retrieve information about a person (Luke Skywalker)', () => {
      cy.request(`${BASE_URL}/people/1/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Luke Skywalker');
        expect(response.body).to.have.property('films').and.be.an('array');
        expect(response.body).to.have.property('height').and.be.a('string');
        expect(response.body).to.have.property('mass').and.be.a('string');
        expect(response.body).to.have.property('hair_color').and.be.a('string');
        expect(response.body).to.have.property('skin_color').and.be.a('string');
        expect(response.body).to.have.property('eye_color').and.be.a('string');
        expect(response.body).to.have.property('birth_year').and.be.a('string');
        expect(response.body).to.have.property('gender').and.be.a('string');
        expect(response.body).to.have.property('homeworld').and.be.a('string');
        expect(response.body).to.have.property('films').and.be.an('array');

      });
    });
  
    it('should retrieve information about a starship (Millennium Falcon)', () => {
      cy.request(`${BASE_URL}/starships/10/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Millennium Falcon');
        expect(response.body).to.have.property('pilots').and.be.an('array');
      });
    });

    it('should validate the existence of a specific film (A New Hope)', () => {
      cy.request(`${BASE_URL}/films/1/`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'A New Hope');
        expect(response.body).to.have.property('episode_id', 4);
        expect(response.body).to.have.property('director', 'George Lucas');
        expect(response.body).to.have.property('release_date', '1977-05-25');
      });
    });

     
      
      
  });
  