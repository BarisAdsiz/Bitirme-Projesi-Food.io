/**
 * @license MIT
 * @copyright 2023 Team DarthCoders
 * @author Team DarthCoders <barisadsiz45@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "384d3899";
const APP_KEY = "99b8ea50bde17261985b74282e96f4ce";
const TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback successCallback function
 */

export const fetchData = async function (queries, successCallback) {
  const query = queries
    ?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${
    query ? `&${query}` : ""
  }`;

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
};
