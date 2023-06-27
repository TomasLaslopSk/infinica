export function dragAndDrop(sourceSelector) {
    let test = cy.get(`"[data-cy=${sourceSelector}]"`)
    test.drag(".itx-editor")
  }