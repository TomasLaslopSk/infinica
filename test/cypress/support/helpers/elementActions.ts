export class ElementActions {

  static navigate(
    url: string,
  ): void {
    cy.visit(url);
  }

  static enterValueToElement(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    value: string,
    clear: boolean = true
  ): void {
    if (clear == true) {
      element.clear()
    }
    element.type(value)
  }

  static pressElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    element.click()
  }

  static forcePressElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    element.click({ force: true })
  }

  // Todo: check CSS atribute if confirm pop up displayed: none
  // static optionalPressElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
  //   element.parent().invoke('css', 'display')
  //   .then(($display) => {
  //     console.log("test", $display)
  //     element.parent()
  //     .should('have.css', 'display')
  //     .and('be.oneOf', ['none', 'true'])
  //     .click()
  //     // if ( == )
  //   })
  // }

  static doublePressElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    element.dblclick()
  }

  static pressEnterInInputElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    element.type('{enter}')
  }

  static dragElementInto(element: Cypress.Chainable<JQuery<HTMLElement>>, target: string) {
    element.drag(target)
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

  static dragTo1(selector: Cypress.Chainable<JQuery<HTMLElement>>, target: Cypress.Chainable<JQuery<HTMLElement>>) {
    selector
      .trigger('dragstart')
      .trigger("dragleave");

    target
      .trigger('dragenter', { force: true })
      .trigger('dragover', { force: true })
      .trigger('drop', { force: true })
      .wait(50)
      .trigger('dragend', { force: true });
  }

  static dragTo2(subject: Cypress.Chainable<JQuery<HTMLElement>>, target: Cypress.Chainable<JQuery<HTMLElement>>) {

    const BUTTON_INDEX = 0;
    const SLOPPY_CLICK_THRESHOLD = 10;


    target
      .then($target => {
        let coordsDrop = $target[0].getBoundingClientRect();

        console.log("coordsDrop", coordsDrop)

        subject.then($subject => {

          const coordsDrag = $subject[0].getBoundingClientRect();

          console.log("coordsDrag", coordsDrag)

          cy.wrap($subject)
            .trigger("mousedown", {
              button: BUTTON_INDEX,
              clientX: coordsDrag.x,
              clientY: coordsDrag.y,
              force: true
            })
            .trigger("mousemove", {
              button: BUTTON_INDEX,
              clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
              clientY: coordsDrag.y,
              force: true
            });
          cy.get("body")
            .trigger("mousemove", {
              button: BUTTON_INDEX,
              clientX: coordsDrop.x,
              clientY: coordsDrop.y,
              force: true
            })
            .trigger("mouseup");

        });
      });
  }

  static dragTo3(dragSelector: string, dropSelector: string) {

    cy.get(`[data-cy=${dragSelector}]`)
      .get(`[data-cy=${dropSelector}]`)

    const draggable = Cypress.$(`[data-cy=${dragSelector}]`)[0]; // Pick up this
    const droppable = Cypress.$(`[data-cy=${dropSelector}]`)[0]; // Drop over this

    const coords = droppable.getBoundingClientRect();
    draggable.dispatchEvent(<any>new MouseEvent('mousedown'));
    draggable.dispatchEvent(<any>new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
    draggable.dispatchEvent(<any>new MouseEvent('mousemove', {
      // I had to add (as any here --> maybe this can help solve the issue??)
      clientX: coords.left + 10,
      clientY: coords.top + 10  // A few extra pixels to get the ordering right
    }));
    draggable.dispatchEvent(new MouseEvent('mouseup'));
    return cy.get(dropSelector);

  }

  static dragTo4(selector: Cypress.Chainable<JQuery<HTMLElement>>, target: Cypress.Chainable<JQuery<HTMLElement>>) {
    cy.get(`[data-cy=${selector}]`)
      .trigger("mousedown", { button: 0, force: true })
      .trigger("mousemove", 200, -200, { force: true })

    cy.get(`[data-cy=${target}]`).click()
      .trigger("mouseup", { force: true });
  }

  static dragTo5(subject: Cypress.Chainable<JQuery<HTMLElement>>, target: Cypress.Chainable<JQuery<HTMLElement>>) {

    subject
      .trigger("mousedown", { button: 0 }); // <-- was not working when using which : 1 
    target
      .trigger("mousemove") // optional
      .click({ force: true });
  }

}