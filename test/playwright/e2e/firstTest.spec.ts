import { Credentials } from "../../../shared/credentials";
import { homePagePwIds } from "../../../shared/locators/homePagePw";
import { landingPagePwIds } from "../../../shared/locators/landingPagePw";
import ElementActions  from "../support/helpers/elementActions";
import { Browser, BrowserContext, Page, chromium, test } from "@playwright/test";



const initialRoute = 'https://infinica-training.cloud.infinica.com/infinica-business-designer/bd-login'

// playwright variables
let page: Page, browser: Browser, context: BrowserContext

// const actions = new ElementActions(page)

describe("Test Suite 1", () => {

    beforeEach(async () => {
        browser = await chromium.launch({ headless: false }),
        context = await browser.newContext({
            viewport: { width: 1920, height: 1080 },
            permissions: ['clipboard-read', 'clipboard-write']
        }),
        page = await context.newPage(),
        await page.goto(initialRoute)
    })

    it("Test 1", async () => {
        // Init helper class
        const elementActions = new ElementActions(page)
        // Login
        await elementActions.enterValueToElement(landingPagePwIds.usernameInput, Credentials.username)
        await elementActions.enterValueToElement(landingPagePwIds.passwordInput, Credentials.password)
        await elementActions.pressElement(landingPagePwIds.loginBtn)

        // Delete template if already exist
        await elementActions.conditionalDeleteTemplate()
        await elementActions.conditionalCloseFilePicker()

        // Create new template
        await elementActions.pressElement(homePagePwIds.createNewTemplateDashboard)
        await elementActions.pressElement(homePagePwIds.saveTemplateButton)
        await elementActions.enterValueToElement(homePagePwIds.fileNameInput, 'TestTemplate')
        await elementActions.pressElement(homePagePwIds.filePickerOpenButton)

        // Insert text to first block
        await elementActions.dragTo(homePagePwIds.paletteBtnText, homePagePwIds.emptyBlock)
        await elementActions.enterValueToNonInputElement(homePagePwIds.emptyText, 'arbitrary text')

        //Insert image from home directory
        await elementActions.dragTo(homePagePwIds.paletteBtnImage, homePagePwIds.editorMainWindow)
        await elementActions.doublePressElement(homePagePwIds.editorImageIconPicture)
        // Todo transfer xpath to method
        await elementActions.openPickerNode(homePagePwIds.filePickerNodeName, 'home')
        await elementActions.pressElement(homePagePwIds.filePickerOpenButton)
        await elementActions.openPickerNode(homePagePwIds.filePickerNodeName, 'tc01')
        await elementActions.pressElement(homePagePwIds.filePickerOpenButton)
        await elementActions.openPickerNode(homePagePwIds.filePickerNodeName, 'Invoice')
        await elementActions.pressElement(homePagePwIds.filePickerOpenButton)
        await elementActions.openPickerNode(homePagePwIds.filePickerNodeName, 'img')
        await elementActions.pressElement(homePagePwIds.filePickerOpenButton)
        await elementActions.openPickerNode(homePagePwIds.filePickerNodeName, 'ad_business_en.png')
        await elementActions.pressElement(homePagePwIds.filePickerOpenButton)

        // Insert List with 3 items
        await elementActions.dragTo(homePagePwIds.palleteListIcon, homePagePwIds.editorMainWindow)
        await elementActions.dragTo(homePagePwIds.paletteBtnText, homePagePwIds.outlineNodeList)
        await elementActions.dragTo(homePagePwIds.paletteBtnImage, homePagePwIds.outlineNodeList)
        await elementActions.dragTo(homePagePwIds.paletteBtnText, homePagePwIds.outlineNodeList)
        // Inser text content 1
        await elementActions.rightCLickOnElementOnPosition(homePagePwIds.textInList, 0)
        await elementActions.pressElement(homePagePwIds.iconPencil)
        await elementActions.enterValueToElement(homePagePwIds.textAreaEdit, "arbitrary text in list 1")
        await elementActions.pressElement(homePagePwIds.textAreaDone)

        // Insert image content
        await elementActions.doublePressElement(homePagePwIds.editorFilledListImage)
        await elementActions.openPickerNode(homePagePwIds.filePickerNodeName, 'ad_business_en.png')
        await elementActions.pressElement(homePagePwIds.filePickerOpenButton)
        // Insert text content 2
        await elementActions.rightCLickOnElementOnPosition(homePagePwIds.textInList, 1)
        await elementActions.pressElement(homePagePwIds.iconPencil)
        await elementActions.enterValueToElement(homePagePwIds.textAreaEdit, "arbitrary text in list 2")
        await elementActions.pressElement(homePagePwIds.textAreaDone)

        // Insert table 2x2 and fill cells with comments
        await elementActions.dragTo(homePagePwIds.paletteBtnTable, homePagePwIds.editorMainWindow)
        await elementActions.pressElement(homePagePwIds.moreOptionsButton)
        await elementActions.enterValueToElement(homePagePwIds.rowsNr, "2")
        await elementActions.enterValueToElement(homePagePwIds.colsNr, "2")
        await elementActions.pressElement(homePagePwIds.createButton)
        await elementActions.doublePressElement(homePagePwIds.outlineNodeTable)
        await elementActions.doublePressElement(homePagePwIds.outlineNodeTableBody)
        await elementActions.doublePressElementOnPosition(homePagePwIds.outlineNodeTableRow, 0)
        await elementActions.doublePressElementOnPosition(homePagePwIds.outlineNodeTableRow, 1)

        // Drag comment to table cell 1
        await elementActions.doublePressElementOnPosition(homePagePwIds.outlineNodeTableCell, 0)
        await elementActions.dragTo(homePagePwIds.paletteBtnComment, homePagePwIds.tableCellBlock)

        // Drag comment to table cell 2
        await elementActions.doublePressElementOnPosition(homePagePwIds.outlineNodeTableCell, 1)
        await elementActions.dragTo(homePagePwIds.paletteBtnComment, homePagePwIds.tableCellBlock, 1)

        // Drag comment to table cell 3
        await elementActions.doublePressElementOnPosition(homePagePwIds.outlineNodeTableCell, 2)
        await elementActions.dragTo(homePagePwIds.paletteBtnComment, homePagePwIds.tableCellBlock, 2)

        // Drag comment to table cell 4
        await elementActions.doublePressElementOnPosition(homePagePwIds.outlineNodeTableCell, 3)
        await elementActions.dragTo(homePagePwIds.paletteBtnComment, homePagePwIds.tableCellBlock, 3)

        await elementActions.rightCLickOnElementOnPosition(homePagePwIds.iconChatMessage, 0)
        await elementActions.pressElement(homePagePwIds.iconPencil)
        await elementActions.enterValueToElement(homePagePwIds.textAreaEdit, "arbitrary comment in table 1")
        await elementActions.pressElement(homePagePwIds.textAreaDone)

        await elementActions.rightCLickOnElementOnPosition(homePagePwIds.iconChatMessage, 1)
        await elementActions.pressElement(homePagePwIds.iconPencil)
        await elementActions.enterValueToElement(homePagePwIds.textAreaEdit, "arbitrary comment in table 2")
        await elementActions.pressElement(homePagePwIds.textAreaDone)

        await elementActions.rightCLickOnElementOnPosition(homePagePwIds.iconChatMessage, 2)
        await elementActions.pressElement(homePagePwIds.iconPencil)
        await elementActions.enterValueToElement(homePagePwIds.textAreaEdit, "arbitrary comment in table 3")
        await elementActions.pressElement(homePagePwIds.textAreaDone)

        await elementActions.rightCLickOnElementOnPosition(homePagePwIds.iconChatMessage, 3)
        await elementActions.pressElement(homePagePwIds.iconPencil)
        await elementActions.enterValueToElement(homePagePwIds.textAreaEdit, "arbitrary comment in table 4")
        await elementActions.pressElement(homePagePwIds.textAreaDone)

        // Save template
        await elementActions.pressElement(homePagePwIds.saveTemplateButton)
    })

    afterEach(async () => {
        await browser.close()
      })
})