import { Page } from "./Page.js";

class ExternalResourcesLinkPage extends Page {
  get mainTitleExternalResourcesPage() {
    return $("h1");
  }
  get h2TextExternalResourcesPage() {
    return $("div p:nth-of-type(2)");
  }
  get imgs() {
    return $(".content-image");
  }
  get footerImg() {
    return $(".community-footer");
  }
  get seleniumDocumentationLink() {
    return $("[href='https://www.selenium.dev/documentation/']");
  }
  get theInternetLink() {
    return $("[href='https://github.com/saucelabs/the-internet/']");
  }
  get handsOnLink() {
    return $(
      "[href='https://www.oreilly.com/library/view/hands-on-selenium-webdriver/9781098109998/']"
    );
  }
  get examplesLink() {
    return $("[href='https://github.com/bonigarcia/selenium-webdriver-java/']");
  }

  async checkMainTitleExternalResourcesPageText() {
    await this.checkElementText(
      this.mainTitleExternalResourcesPage,
      "External Resources"
    );
  }
  async checkh2TextExternalResourcesPage() {
    await expect(this.h2TextExternalResourcesPage).toBeDisplayed();
  }
  async isVisibleImgs() {
    await expect(this.imgs).toBeDisplayed();
  }
  async isVisibleFooterImg() {
    await expect(this.footerImg).toBeDisplayed();
  }
  async isClickableLinksOnExternalResourcesPage() {
    await this.seleniumDocumentationLink.isClickable();
    await this.theInternetLink.isClickable();
    await this.handsOnLink.isClickable();
    await this.examplesLink.isClickable();
  }
}
export default new ExternalResourcesLinkPage();
