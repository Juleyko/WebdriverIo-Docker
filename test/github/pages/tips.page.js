import { Page } from "./Page.js";

class TipsPage extends Page {
  get mainTitleOnTipsPage() {
    return $("h1");
  }
  get filtersText() {
    return $(".dropdown-container-left p");
  }
  get orderPostedDropdownList() {
    return $(".dropdown:nth-child(2)");
  }
  get categoriesDropdownList() {
    return $(".dropdown:nth-child(3)");
  }
  get difficultyLevelDropdownList() {
    return $(".dropdown:nth-child(4)");
  }
  get serchBtnOnTipsPage() {
    return $(" div.dropdown-container > button");
  }

  async isVisibleMainTitleOnTipsPage() {
    await expect(this.mainTitleOnTipsPage).toBeDisplayed();
  }
  async checkFiltersText() {
    await expect(this.filtersText).toHaveTextContaining("Filters:");
  }
  async isClickableFilters() {
    await this.orderPostedDropdownList.isClickable();
    await this.categoriesDropdownList.isClickable();
    await this.difficultyLevelDropdownList.isClickable();
  }
  async isClickableSearchBtnOnTipsPage() {
    await this.serchBtnOnTipsPage.isClickable();
  }
}
export default new TipsPage();
