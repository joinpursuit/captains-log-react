describe("feature two", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/logs/new");
  });

  it("shows the header text", () => {
    cy.contains("Captain's Log");
    cy.contains("New");
  });

  describe("the form", () => {
    // pay attention the capitalization!
    // cypress needs accuracy to find elements on the DOM\

    it("has a form with correct labels and fields", () => {
      // for this label/input use htmlFor/id: 'name'
      cy.get("label").contains("Captain's Name");
      cy.get("#captainName").should("have.attr", "type", "text");

      // for this label/input use htmlFor/id: 'title'
      cy.get("label").contains("Title");
      cy.get("#title").should("have.attr", "type", "text");

      // for this label/input use htmlFor/id: 'post'
      cy.get("label").contains("Post");
      cy.get("form > textarea").should("have.attr", "id", "post");

      // for this label/input use htmlFor/id: 'daysSinceLastCrisis'
      cy.get("label").contains("Days Since Last Crisis");
      cy.get("#daysSinceLastCrisis").should("have.attr", "type", "number");

      // for this label/input use htmlFor/id: 'mistakesWereMadeToday'
      cy.get("label").contains("Mistakes were made today");
      cy.get("#mistakesWereMadeToday").should("have.attr", "type", "checkbox");
    });

    it("has a 'Submit' input button", () => {
      // this just means there needs to be an 'input' of type 'submit'
      cy.get("form").submit();
      cy.url().should("eq", "http://localhost:3000/logs");
    });
  });

  it("can create a log", () => {
    cy.get("#captainName").type("Mashu");
    cy.get("#title").type("Testing Voyages");
    cy.get("form > textarea").type(
      "T'was a hard day of writing tests, but remain calm lets!"
    );
    cy.get("#daysSinceLastCrisis").type(1)
    cy.get("form").submit();
    cy.url().should("eq", "http://localhost:3000/logs");
    cy.contains("Testing Voyages");
  });
});
