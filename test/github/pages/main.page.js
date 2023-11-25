import { Page } from "./Page.js";

class MainPage extends Page {
  constructor() {
    super();
    this._pageUrl = "https://elementalselenium.com/";
  }
  get mainLogo() {
    return $(".navbar__logo");
  }
  get tipsLink() {
    return $(".navbar__item.navbar__link:nth-of-type(1)");
  }
  get externalResourcesLink() {
    return $(".navbar__item.navbar__link:nth-of-type(2)");
  }
  get getInvolvedLink() {
    return $(".navbar__item.navbar__link:nth-of-type(3)");
  }
  get joinTheMailingListButn() {
    return $(".navbar__item.navbar__link.nav-button");
  }
  get searchBtn() {
    return $(".DocSearch.DocSearch-Button");
  }
  get mainTitle() {
    return $("h1");
  }
  get textH2() {
    return $("h2");
  }
  get emailField() {
    return $("#email");
  }
  get theSecondJointheMailingListBtn() {
    return $(".home-button");
  }
  get skipItTakeMeToTheTipsLink() {
    return $(".home-link");
  }
  get theFirstBlock() {
    return $(".icard:nth-of-type(1)");
  }
  get theSecondBlock() {
    return $(".icard:nth-of-type(2)");
  }
  get theThirdBlock() {
    return $(".icard:nth-of-type(3)");
  }
  get howToUploadAFileLink() {
    return $("[href='docs/how-to-upload-a-file/1-upload-a-file']");
  }
  get downloadAFileLink() {
    return $("[href='docs/download-a-file/2-download-a-file']");
  }
  get workWithFramesLink() {
    return $("[href='docs/work-with-frames/3-work-with-frames']");
  }
  get theFirstBlockText() {
    return $(".icard:nth-of-type(1) p");
  }
  get theSecondBlockText() {
    return $(".icard:nth-of-type(2) p");
  }
  get theThirdBlockText() {
    return $(".icard:nth-of-type(3) p");
  }
  get theFirstfooterNameBlock() {
    return $(".footer__title:nth-child(1)");
  }
  get theSecondfooterNameBlock() {
    return $(".footer__links > div:nth-child(2)");
  }
  get theThirdfooterNameBlock() {
    return $(".footer__links > div:nth-child(3)");
  }
  get dropDownLanguage() {
    return $(".dropdown-language");
  }
  get jSOption() {
    return $("option:nth-child(4)");
  }
  get searchField() {
    return $("#docsearch-input");
  }
  get theFirstValueInSearch() {
    return $("#docsearch-item-0");
  }
  get copyrightFooter() {
    return $(".footer__copyright");
  }

  async openPage() {
    await this.openUrl(this._pageUrl);
  }
  async isVisibleMainLogo() {
    await expect(this.mainLogo).toBeDisplayed();
  }
  async isVisibleTipsLink() {
    await this.tipsLink.isClickable();
  }
  async isVisibleExternalResourcesLink() {
    await this.externalResourcesLink.isClickable();
  }
  async isVisibleGetInvolvedLink() {
    await this.getInvolvedLink.isClickable();
  }
  async isVisibleJoinTheMailingListButn() {
    await this.joinTheMailingListButn.isClickable();
  }
  async isVisibleSearchBtn() {
    await this.searchBtn.isClickable();
  }
  async checkMainTitleText() {
    await this.checkElementText(this.mainTitle, "Make sure your code lands");
  }
  async checkH2Text() {
    await expect(this.textH2).toHaveTextContaining(
      "A free weekly email of tips to help make\nSelenium one of the most robust browser\nautomation tools out there."
    );
  }
  async isVisibleEmailField() {
    await this.emailField.isClickable();
  }
  async isVisibleTheSecondJointheMailingListBtn() {
    await this.theSecondJointheMailingListBtn.isClickable();
  }
  async isClickableSkipItTakeMeToTheTipsLink() {
    await this.skipItTakeMeToTheTipsLink.isClickable();
  }
  async isVisibleTheFirstBlock() {
    await expect(this.theFirstBlock).toBeDisplayed();
  }
  async isVisibleTheSecondBlock() {
    await expect(this.theSecondBlock).toBeDisplayed();
  }
  async isVisibleTheThirdBlock() {
    await expect(this.theThirdBlock).toBeDisplayed();
  }
  async isClickableHowToUploadAFile() {
    await this.howToUploadAFileLink.isClickable();
    await expect(this.howToUploadAFileLink).toHaveTextContaining(
      "1: How To Upload A File"
    );
  }
  async isClickableDownloadAFileLink() {
    await this.downloadAFileLink.isClickable();
    await expect(this.downloadAFileLink).toHaveTextContaining(
      "2: Download A File"
    );
  }
  async isClickableWorkWithFramesLink() {
    await this.workWithFramesLink.isClickable();
    await expect(this.workWithFramesLink).toHaveTextContaining(
      "3: Work With Frames"
    );
  }
  async checkTheFirstBlockText() {
    await expect(this.theFirstBlockText).toHaveTextContaining(
      "Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window."
    );
  }
  async checkTheSecondBlockText() {
    await expect(this.theSecondBlockText).toHaveTextContaining(
      "Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box."
    );
  }
  async checkTheThirdBlockText() {
    await expect(this.theThirdBlockText).toHaveTextContaining(
      "In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames."
    );
  }
  async scrollToFooter() {
    await this.scrollToElement(this.theFirstfooterNameBlock);
  }
  async isVisibleNamesBlocks() {
    await expect(this.theFirstfooterNameBlock),
      expect(this.theSecondfooterNameBlock),
      expect(this.theThirdfooterNameBlock).toBeDisplayed();
  }
  async chooseDropeDownLanguageOption() {
    await this.dropDownLanguage.click();
    await this.jSOption.click();
  }
  async clickOnSearchBtn() {
    await this.searchBtn.click();
  }
  async clickOnSearchFieldAndAddWord() {
    await this.searchField.click();
    await this.searchField.addValue("Java");
  }
  async clickOnTheFirstValueInSearch() {
    await this.theFirstValueInSearch.click();
  }
  async isVisibleCopyrightFooter() {
    await expect(this.copyrightFooter).toBeDisplayed();
  }
  async clickOnTipsLink() {
    await this.tipsLink.click();
  }
  async isClickableMainLogo() {
    await this.mainLogo.isClickable();
  }
  async clickOnExternalResourcesLink() {
    await this.externalResourcesLink.click();
  }
}

export default new MainPage();
