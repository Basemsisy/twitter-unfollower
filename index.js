(function main() {
  const unfollowBtns = document.querySelectorAll('[data-testid$="-unfollow"]'); //node list

  //convert node list to array using es6 spread operator to can loop on it
  [...unfollowBtns].forEach((el) => {
    el.click();
    let confirmUnfollowBtn = document.querySelector(
      '[data-testid="confirmationSheetConfirm"]'
    );
    confirmUnfollowBtn.click();
  });
})();
