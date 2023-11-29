import mainPage from "../pages/main.page.js";
import tipsPage from "../pages/tips.page.js";
import externalResourcesPage from "../pages/external-resources.page.js";

describe("Check the site Elemental Selenium", () => {
  beforeEach(async () => {
    // Вхід на сайт перед кожним тестом
    await mainPage.openPage();
  });
  it("[case 1] should check main logo", async () => {
    await mainPage.isVisibleMainLogo();
  });
  it("[case 2] should check header elements", async () => {
    await mainPage.isVisibleTipsLink();
    await mainPage.isVisibleExternalResourcesLink();
    await mainPage.isVisibleGetInvolvedLink();
    await mainPage.isVisibleJoinTheMailingListButn();
    await mainPage.isVisibleSearchBtn();
  });
  it("[case 3] should check title and text under title ", async () => {
    await mainPage.checkMainTitleText();
    await mainPage.checkH2Text();
  });
  it("[case 4] should check email field and Join the mailing list button ", async () => {
    await mainPage.isVisibleEmailField();
    await mainPage.isVisibleTheSecondJointheMailingListBtn();
  });
  it("[case 5] should check Skip it, take me to the tips ", async () => {
    await mainPage.isClickableSkipItTakeMeToTheTipsLink();
  });
  it("[case 6] should check 3 blocks ", async () => {
    await mainPage.isVisibleTheFirstBlock();
    await mainPage.isVisibleTheSecondBlock();
    await mainPage.isVisibleTheThirdBlock();
  });
  it("[case 7] should check text in the blocks ", async () => {
    await mainPage.checkTheFirstBlockText();
    await mainPage.checkTheSecondBlockText();
    await mainPage.checkTheThirdBlockText();
  });
  it("[case 8] should check transitions in blocks ", async () => {
    await mainPage.isClickableHowToUploadAFile();
    await mainPage.isClickableDownloadAFileLink();
    await mainPage.isClickableWorkWithFramesLink();
  });
  it("[case 9] should Names`s Blocks in footer ", async () => {
    await mainPage.scrollToFooter();
    await mainPage.isVisibleNamesBlocks();
  });
  it("[case 10] should check copirathe footer text", async () => {
    await mainPage.scrollToFooter();
    await mainPage.isCopyrightFooterTextVisible();
  });
  it("[case 11] should check select the language ", async () => {
    await mainPage.chooseDropeDownLanguageOption();
  });
  it("[case 12] should check serch for word ", async () => {
    await mainPage.clickOnSearchBtn();
    await mainPage.clickOnSearchFieldAndAddWord();
    await mainPage.clickOnTheFirstValueInSearch();
    await browser.pause(5000);
  });
  it("[case 13] should check all right reserved in footer ", async () => {
    await mainPage.scrollToFooter();
    await mainPage.isVisibleCopyrightFooter();
  });
  it("[case 14] should check main title on page Tips ", async () => {
    await mainPage.clickOnTipsLink();
    await tipsPage.isVisibleMainTitleOnTipsPage();
  });
  it("[case 15] should check filters on page Tips ", async () => {
    await mainPage.clickOnTipsLink();
    await tipsPage.checkFiltersText();
    await tipsPage.isClickableFilters();
  });
  it("[case 16] should check search elements on page Tips ", async () => {
    await mainPage.clickOnTipsLink();
    await tipsPage.isClickableSearchBtnOnTipsPage();
  });
  it("[case 17] should check clickable of logo ", async () => {
    await mainPage.isClickableMainLogo();
  });
  it("[case 18] should check text on External Resources Page  ", async () => {
    await mainPage.clickOnExternalResourcesLink();
    await externalResourcesPage.checkMainTitleExternalResourcesPageText();
    await externalResourcesPage.checkh2TextExternalResourcesPage();
  });
  it("[case 19] should check all imgs on External Resources Page  ", async () => {
    await mainPage.clickOnExternalResourcesLink();
    await externalResourcesPage.isVisibleImgs();
    await externalResourcesPage.isVisibleFooterImg();
  });
  it("[case 20] should check all imgs on External Resources Page  ", async () => {
    await mainPage.clickOnExternalResourcesLink();
    await externalResourcesPage.isClickableLinksOnExternalResourcesPage();
  });
});
