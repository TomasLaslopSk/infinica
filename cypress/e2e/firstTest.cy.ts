import { first } from "cypress/types/lodash"
import { Credentials } from "../support/credentials"
import { ElementActions } from "../support/helpers/elementActions"
import { ElementAssertions } from "../support/helpers/elementAssertions"
import { GetElement } from "../support/helpers/getElement"
import { homePageIds } from "../support/locators/homePage"
import { landingPageIds } from "../support/locators/landingPage"
import { TestCase, TestStep } from "../support/helpers/testCase"


const initialRoute = '/bd-login'
const testOptions = {
    resolutionX: 1920,
    resolutionY: 1080,
}

const tests: Array<TestStep> = [

    // Test 1

    {
        name: "Test 1",
        steps: () => [
            // Valid Login
            ElementActions.enterValueToElement(GetElement.getIdSelector(landingPageIds.usernameInput), Credentials.username),
            ElementActions.enterValueToElement(GetElement.getIdSelector(landingPageIds.passwordInput), Credentials.password),
            ElementActions.pressElement(GetElement.getIdSelector(landingPageIds.loginBtn)),
            // Assert baseUrl, that's the reason
            ElementAssertions.assertUrl(""),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.createNewTemplateDashboard)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.saveTemplateButton)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.forcePressElement(GetElement.getIdSelector(homePageIds.confirmButton)),
            ElementActions.enterValueToElement(GetElement.getCssSelector(homePageIds.emptyBlock), "arbitrary text", false),
            ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnImage), homePageIds.editorMainWindow),
            ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.imageIconPicture, 1)),
            ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "home")),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "tc01")),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerNodeName)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "img")),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "ad_business_en.png")),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.palleteListIcon), homePageIds.editorMainWindow),

            // List
            // ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnComment), emptyList),
            // Add 3 elements Todo

            // Table
            ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnTable), homePageIds.editorMainWindow),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.moreOptionsButton)),
            ElementActions.enterValueToElement(GetElement.getIdSelector(homePageIds.rowsNr), "2"),
            ElementActions.enterValueToElement(GetElement.getIdSelector(homePageIds.colsNr), "2"),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.createButton)),
            ElementActions.doublePressElement(GetElement.getIdSelector(homePageIds.outlineNodeTable)),
            ElementActions.doublePressElement(GetElement.getIdSelector(homePageIds.outlineNodeTableBody)),
            ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableRow, 0)),

            // Drag comment to table cell [0]
            ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableCell, 0)),
            ElementActions.dragTo1(
                // Element to drag
                GetElement.getIdSelector(homePageIds.paletteBtnComment), 
                // Element to drop
                cy.get(`[data-cy=${homePageIds.outlineNodeTableCell}]`).eq(0)
            .parent(".tree-node-root")
            .siblings(".tree-node-children")
            .within(() => { 
                cy.get(`[data-cy=${homePageIds.outlineNodeBlock}]`)})
                ),

            // Drag comment to table cell [1]
            ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableCell, 1)),
            ElementActions.dragTo1(
                // Element to drag
                GetElement.getIdSelector(homePageIds.paletteBtnComment), 
                // Element to drop
                cy.get(`[data-cy=${homePageIds.outlineNodeTableCell}]`).eq(1)
            .parent(".tree-node-root")
            .siblings(".tree-node-children")
            .within(() => { 
                cy.get(`[data-cy=${homePageIds.outlineNodeBlock}]`)})
                ),

            ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableRow, 1)),

            // Drag comment to table cell [2]
            ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableCell, 2)),
            ElementActions.dragTo1(
                // Element to drag
                GetElement.getIdSelector(homePageIds.paletteBtnComment), 
                // Element to drop
                cy.get(`[data-cy=${homePageIds.outlineNodeTableCell}]`).eq(2)
            .parent(".tree-node-root")
            .siblings(".tree-node-children")
            .within(() => { 
                cy.get(`[data-cy=${homePageIds.outlineNodeBlock}]`)})
                ),

            // Drag comment to table cell [3]
            ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableCell, 3)),
            ElementActions.dragTo1(
                // Element to drag
                GetElement.getIdSelector(homePageIds.paletteBtnComment), 
                // Element to drop
                cy.get(`[data-cy=${homePageIds.outlineNodeTableCell}]`).eq(3)
            .parent(".tree-node-root")
            .siblings(".tree-node-children")
            .within(() => { 
                cy.get(`[data-cy=${homePageIds.outlineNodeBlock}]`)})
                ),

            // ElementActions.dragTo2(GetElement.getIdSelector(homePageIds.paletteBtnComment), GetElement.getCssSelectorOnPosition(homePageIds.emptyBlock, 0)),
            // ElementActions.dragTo2(GetElement.getIdSelector(homePageIds.paletteBtnComment), GetElement.getCssSelectorOnPosition(homePageIds.emptyBlock, 0)),
            // ElementActions.dragTo2(GetElement.getIdSelector(homePageIds.paletteBtnComment), GetElement.getCssSelectorOnPosition(homePageIds.emptyBlock, 0)),
            // ElementActions.dragTo2(GetElement.getIdSelector(homePageIds.paletteBtnComment), GetElement.getCssSelectorOnPosition(homePageIds.emptyBlock, 0))


            // ElementActions.pressElement(GetElement.getCssSelector('.fo-list-empty')),
            // cy.wait(2000),
            // ElementActions.pressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeBlock, 1)),
            // cy.wait(2000),
            // ElementActions.pressElement(GetElement.getIdSelector(homePageIds.outlineNodeList)),
            // ElementActions.dragTo2(homePageIds.paletteBtnComment, homePageIds.outlineNodeList),
        ],
    },

    // {
    //     name: "Test 2",
    //     steps: () => [
    //         // Valid Login
    //         ElementActions.enterValueToElement(GetElement.getIdSelector(landingPageIds.usernameInput), Credentials.username),
    //         ElementActions.enterValueToElement(GetElement.getIdSelector(landingPageIds.passwordInput), Credentials.password),
    //         ElementActions.pressElement(GetElement.getIdSelector(landingPageIds.loginBtn)),
    //         // Assert baseUrl, that's the reason
    //         ElementAssertions.assertUrl(""),
    //         // Open Home Directory
    //         ElementActions.pressElement(GetElement.getIdSelector(homePageIds.openFile)),
    //         ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "home")),
    //         ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
    //         ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerNodeName)),
    //         ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
    //         ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerNodeName)),
    //         ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
    //         ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "Invoice.itx")),
    //         ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
    //         ElementAssertions.assertUrl("template/"),
    //         ElementActions.sleep(10000)
    //     ],
    // },

]

TestCase.resolve("Test Suite 1", tests, testOptions, initialRoute)