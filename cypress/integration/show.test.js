describe("Show Page", () => {
  // the log these tests are based on
  //   {
  //   captainName: "Picard",
  //   title: "Courage",
  //   post: "Courage can be an emotion too.",
  //   mistakesWereMadeToday: true,
  //   daysSinceLastCrisis: 100,
  // }
  beforeEach(() => {
    cy.visit("http://localhost:3000/logs/0");
  });

  it("shows the header text", () => {
    cy.contains("Captain's Log");
    cy.contains("Show");
  });

  it("can navigate to New page", () => {
    cy.get("a").contains("New Log").click();
    cy.url().should("eq", "http://localhost:3000/logs/new");
  });

  describe("log with its information", () => {
    
    it("shows the 'title' with 'captainName'", () => {
      // note that the "header" of this log's card is "Courage - By Picard"
      // you may need to add " - By " between the two pieces of data
      cy.contains("Courage - By Picard");
    });

    it("shows the 'post'", () => {
      cy.contains("Courage can be an emotion too.");
    });

    it("shows the 'daysSinceLastCrisis'", () => {
      // the piece of data for this test is "100"
      // everything before the 100 you're expected to add
      cy.contains("Days since last crisis: 100");
    });
  });

  // it("has a 'Back' link that takes us back to '/logs'", () => {
  //   cy.get("a").contains("Back").click();
  //   cy.url().should("eq", "http://localhost:3000/logs");
  // });

  // it("has an 'Edit' link that takes us back to '/logs/0/edit'", () => {
  //   cy.get("a").contains("Edit").click();
  //   cy.url().should("eq", "http://localhost:3000/logs/0/edit");
  // });
});
