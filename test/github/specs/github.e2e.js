import mainPage from "../pages/main.page.js";
import tipsPage from "../pages/tips.page.js";
import externalResourcesPage from "../pages/external-resources.page.js";

describe("Check the site Elemental Selenium", () => {
  it("[case 1] should check main logo", async () => {
    await mainPage.openPage();
    await mainPage.isVisibleMainLogo();
  });
  it("[case 2] should check header elements", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.isVisibleTipsLink();
    await mainPage.isVisibleExternalResourcesLink();
    await mainPage.isVisibleGetInvolvedLink();
    await mainPage.isVisibleJoinTheMailingListButn();
    await mainPage.isVisibleSearchBtn();
  });
  it("[case 3] should check title and text under title ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.checkMainTitleText();
    await mainPage.checkH2Text();
  });
  it("[case 4] should check email field and Join the mailing list button ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.isVisibleEmailField();
    await mainPage.isVisibleTheSecondJointheMailingListBtn();
  });
  it("[case 5] should check Skip it, take me to the tips ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.isClickableSkipItTakeMeToTheTipsLink();
  });
  it("[case 6] should check 3 blocks ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.isVisibleTheFirstBlock();
    await mainPage.isVisibleTheSecondBlock();
    await mainPage.isVisibleTheThirdBlock();
  });
  it("[case 7] should check text in the blocks ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.checkTheFirstBlockText();
    await mainPage.checkTheSecondBlockText();
    await mainPage.checkTheThirdBlockText();
  });
  it("[case 8] should check transitions in blocks ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.isClickableHowToUploadAFile();
    await mainPage.isClickableDownloadAFileLink();
    await mainPage.isClickableWorkWithFramesLink();
  });
  it("[case 9] should Names`s Blocks in footer ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.scrollToFooter();
    await mainPage.isVisibleNamesBlocks();
  });
  //   it("[case 10!] should check clickable elements in footer ", async () => {
  //     // await browser.pause(5000);
  //     await mainPage.openPage();
  //     await mainPage.scrollToFooter();
  //     await mainPage.isClickableFooterItems();
  //   });
  it("[case 11] should check select the language ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.chooseDropeDownLanguageOption();
  });
  it("[case 12] should check serch for word ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.clickOnSearchBtn();
    await mainPage.clickOnSearchFieldAndAddWord();
    await mainPage.clickOnTheFirstValueInSearch();
    await browser.pause(5000);
  });
  it("[case 13] should check all right reserved in footer ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.scrollToFooter();
    await mainPage.isVisibleCopyrightFooter();
    // await browser.pause(5000);
  });
  it("[case 14] should check main title on page Tips ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.clickOnTipsLink();
    await tipsPage.isVisibleMainTitleOnTipsPage();
  });
  it("[case 15] should check filters on page Tips ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.clickOnTipsLink();
    await tipsPage.checkFiltersText();
    await tipsPage.isClickableFilters();
  });
  it("[case 16] should check search elements on page Tips ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.clickOnTipsLink();
    await tipsPage.isClickableSearchBtnOnTipsPage();
  });
  it("[case 17] should check clickable of logo ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.isClickableMainLogo();
  });
  it("[case 18] should check text on External Resources Page  ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.clickOnExternalResourcesLink();
    await externalResourcesPage.checkMainTitleExternalResourcesPageText();
    await externalResourcesPage.checkh2TextExternalResourcesPage();
  });
  it("[case 19] should check all imgs on External Resources Page  ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.clickOnExternalResourcesLink();
    await externalResourcesPage.isVisibleImgs();
    await externalResourcesPage.isVisibleFooterImg();
  });
  it("[case 20] should check all imgs on External Resources Page  ", async () => {
    // await browser.pause(5000);
    await mainPage.openPage();
    await mainPage.clickOnExternalResourcesLink();
    await externalResourcesPage.isClickableLinksOnExternalResourcesPage();
  });
});
