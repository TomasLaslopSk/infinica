import { Page } from '@playwright/test'
import { homePagePwIds } from '../../../../shared/locators/homePagePw';

export default class ElementActions {
    constructor(public page: Page) { }

    async pressElement(selector: string) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).click()
    }

    async pressElementOnPosition(selector: string, position: number) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).nth(position).click()
    }

    async doublePressElement(selector: string) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).dblclick()
    }

    async doublePressElementOnPosition(selector: string, position: number) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).nth(position).dblclick()
    }

    async rightCLickOnElement(selector: string) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).click({ button: "right" })
    }

    async rightCLickOnElementOnPosition(selector: string, position: number) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).nth(position).click({ button: "right" })
    }

    async enterValueToElement(selector: string, value: string) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).fill(value)
    }

    async enterValueToNonInputElement(selector: string, value: string) {
        await this.page.waitForTimeout(1000);
        await this.page.locator(selector).type(value)
    }

    async dragTo(sourceElementSelector: string, destinationElementSelector: string, destinationPosition: number = 0) {
        const src = this.page.locator(sourceElementSelector)
        const dst = this.page.locator(destinationElementSelector).nth(destinationPosition);

        if (src && dst) {
            const srcBound = await src.boundingBox()
            let dstBound = await dst.boundingBox()
            if (srcBound && dstBound) {
                await src.hover()
                await this.page.mouse.down()
                dstBound = (await dst.boundingBox())!
                await this.page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2)
                await dst.hover()
                await this.page.mouse.up()
            } else {
                throw new Error("No Element")
            }
        }
    }

    async conditionalDeleteTemplate() {
        await this.pressElement(homePagePwIds.openFileIcon)
        await this.page.waitForTimeout(1000);
        if ((await this.page.$(homePagePwIds.testTemplate)) !== null) {
            await this.rightCLickOnElement(homePagePwIds.testTemplate)
            await this.pressElement(homePagePwIds.contextItemDelete)
            await this.pressElement(homePagePwIds.confirmButton)
        }
    }

    async conditionalCloseFilePicker() {
        if ((await this.page.$(homePagePwIds.closeFilePicker)) !== null) {
        await this.pressElement(homePagePwIds.closeFilePicker)
        }
    }

    async openPickerNode(selector: string, text: string) {
        await this.page.locator(selector, {hasText: text}).click()
    }
}