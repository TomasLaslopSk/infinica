export class ElementActions {

  static navigate(
    url: string,
  ): void {
    cy.visit(url);
  }

  static enterValueToElement(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    value: string,
  ): void {
    element.clear()
    element.type(value)
  }

  static pressElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    element.click()
  }

  static pressEnterInInputElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    element.type('{enter}')
  }

  /**
  * This element must be an <input> with type checkbox or radio.
  */
  static checkElementInListElement(
    selector: Cypress.Chainable<JQuery<HTMLElement>>,
    check: boolean = true
  ): void {
    if (check) {
      selector.check()
    } else {
      selector.uncheck()
    }
  }

  static sleep(time: number) {
    cy.wait(time)
  }

}