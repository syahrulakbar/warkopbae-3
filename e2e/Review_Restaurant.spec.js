/* eslint-disable no-undef */
const assert = require("assert");

Feature("Review Resto");

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  // root URL : http:localhost:9001
  I.amOnPage("/");
});

Scenario("Post resto review", async ({ I }) => {
  const reviewText = "Testing End to End";
  I.waitForElement(".card-container a", 30); // secs

  // URL: /
  I.seeElement(".card-container a");
  I.click(locate(".card-container a").first());

  // URL: /resto/:id
  I.seeElement(".add-review-container form");
  I.fillField("#input-name", "Review Test");
  I.fillField("#input-review", reviewText);
  I.click("#button-review");

  // after submit review
  const lastReview = locate(".review-user").last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
