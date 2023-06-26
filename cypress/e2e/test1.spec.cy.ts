import { TestCase, TestStep } from "../support/testCase"
import { ElementActions } from "../support/elementActions";
import { landingPageIds } from "../locators/landingPage";
import { GetElement } from "../support/getElement";
import { Credentials } from "../support/credentials";
import { ElementAssertions } from "../support/elementAssertions";
import { homePageIds } from "../locators/homePage";

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
            // Open Home Directory
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.openFile)),
            ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "home")),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerNodeName)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerNodeName)),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementActions.pressElement(GetElement.getIdSelectorContainsText(homePageIds.filePickerNode, "Invoice.itx")),
            ElementActions.pressElement(GetElement.getIdSelector(homePageIds.filePickerOpenButton)),
            ElementAssertions.assertUrl("template/"),
            ElementActions.sleep(10000)
        ],
    },

]

TestCase.resolve("Test Suite 1", tests, testOptions, initialRoute)