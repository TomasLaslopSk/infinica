import { Credentials } from "../../../shared/credentials"
import { ElementActions } from "../support/helpers/elementActions"
import { ElementAssertions } from "../support/helpers/elementAssertions"
import { GetElement } from "../support/helpers/getElement"
import { homePageIds } from "../../../shared/locators/homePage"
import { landingPageIds } from "../../../shared/locators/landingPage"

const baseUrl = 'https://infinica-training.cloud.infinica.com/infinica-business-designer/'
const initialRoute = `${baseUrl}bd-login`

describe("Test Suite 1", () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
        ElementActions.navigate(initialRoute)
    });

    it("Test 1", () => {

        // Login
        ElementActions.enterValueToElement(GetElement.getIdSelector(landingPageIds.usernameInput), Credentials.username)
        ElementActions.enterValueToElement(GetElement.getIdSelector(landingPageIds.passwordInput), Credentials.password)
        ElementActions.pressElement(GetElement.getIdSelector(landingPageIds.loginBtn))
        // Assert baseUrl, that's the reason
        ElementAssertions.assertUrl(baseUrl)

        // Delete template if already exist
        ElementActions.conditionalDeleteTemplate()
        ElementActions.conditionalCloseFilePicker()

        // Create new template
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.createNewTemplateDashboard))
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.saveTemplateButton))
        ElementActions.enterValueToElement(GetElement.getIdSelector(homePageIds.fileNameInput), 'TestTemplate')
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton))

        // Insert text to first block
        ElementActions.enterValueToElement(GetElement.getCssSelector(homePageIds.emptyBlock), "arbitrary text", false)

        // Insert image from home directory
        ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnImage), homePageIds.editorMainWindow)
        ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.imageIconPicture, 1))
        ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "home"))
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton))
        ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "tc01"))
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton))
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerNodeName))
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton))
        ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "img"))
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton))
        ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "ad_business_en.png"))
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton))

        // Add List
        ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.palleteListIcon), homePageIds.editorMainWindow)
        ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnText), homePageIds.outlineNodeListCss)
        ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnImage), homePageIds.outlineNodeListCss)
        ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnText), homePageIds.outlineNodeListCss)

        // Add Table
        ElementActions.dragElementInto(GetElement.getIdSelector(homePageIds.paletteBtnTable), homePageIds.editorMainWindow)
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.moreOptionsButton))
        ElementActions.enterValueToElement(GetElement.getIdSelector(homePageIds.rowsNr), "2")
        ElementActions.enterValueToElement(GetElement.getIdSelector(homePageIds.colsNr), "2")
        ElementActions.pressElement(GetElement.getIdSelector(homePageIds.createButton))
        ElementActions.doublePressElement(GetElement.getIdSelector(homePageIds.outlineNodeTable))
        ElementActions.doublePressElement(GetElement.getIdSelector(homePageIds.outlineNodeTableBody))
        ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableRow, 0))

        // Drag comment to table cell [0]
        ElementActions.doublePressElement(GetElement.getIdSelectorOnPosition(homePageIds.outlineNodeTableCell, 0))
    })
})