export class GetElement {

    static getIdSelector(selector: string | number) {
      return cy.get(`[data-cy=${selector}]`)
    }
  
    static getCssSelector(selector: string) {
      return cy.get(selector)
    }

    // static getXpathSelector(selector: string) {
    //   return cy.xpath(selector)
    // }

    static getIdSelectorOnPosition(selector: string, position: number) {
      return cy.get(`[data-cy=${selector}]`).eq(position)
    }

    static getCssSelectorOnPosition(selector: string, position: number) {
      return cy.get(selector).eq(position)
    }

    // static getXpathSelectorOnPosition(selector: string, position: number) {
    //   return cy.xpath(selector).eq(position)
    // }

    static getIdSelectorContainsText(selector: string | number, text: string) {
      return cy.get(`[data-cy=${selector}]`).contains(text)
    }
  
    // static getContextSelector(selector: string, context: string, elementType: string) {
    //   return cy.get(context).contains("label", selector).siblings(elementType)
    // }
  
    // static getSiblingSelector(selector: string, elementType: string) {
    //   return cy.contains("label", selector).siblings(elementType)
    // }
  
    static getChildSelector(selector: string, childSelector:string, order: number) {
      return cy.get(selector).eq(order).find(childSelector)
    }
  
    // static getElementFromListByIndexSelector(selector: string, order: number) {
    //   return cy.get(selector).eq(order)
    // }
  }