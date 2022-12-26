/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require("assert");

Feature("Liking Restaurants");

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked resto", ({ I }) => {
  I.see("Add your favorite restaurant", "#fav-resto");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Add your favorite restaurant", "#fav-resto");

  I.amOnPage("/");

  // Menunggu element dirender
  I.waitForElement(".card-container a", 30); // secs

  I.seeElement(".card-container a");
  const firstRestaurantCard = locate(".name-resto").first();
  const firstRestaurantCardTitle = await I.grabTextFrom(firstRestaurantCard);
  I.click(firstRestaurantCard);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-container");
  const likedCardTitle = await I.grabTextFrom(".name-resto");
  // compare
  assert.strictEqual(firstRestaurantCardTitle, likedCardTitle);
});

Scenario("unliking one restaurant", async ({ I }) => {
  I.see("Add your favorite restaurant", "#fav-resto");

  I.amOnPage("/");

  // Menunggu element dirender
  I.waitForElement(".card-container a", 30); // secs

  I.seeElement(".card-container a");
  const firstRestaurantCard = locate(".name-resto").first();
  I.click(firstRestaurantCard);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card-container");

  const favoriteResto = locate(".name-resto").first();
  I.click(favoriteResto);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("#fav-resto");
  I.dontSeeElement(".card-container");
  I.dontSeeElement(".name-resto");
});
