describe("Starter", () => {
  it("Has title", () => {
    cy.visit("https://playwright.dev/");
    cy.title().should("contain", "Playwright");
  });
  it("Get started link", () => {
    cy.visit("https://playwright.dev/");
    cy.get('a:contains("Get started")').click();
    cy.get('h1:contains("Installation")').should("be.visible");
  });
});
