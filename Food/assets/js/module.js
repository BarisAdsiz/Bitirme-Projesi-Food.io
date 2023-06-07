/**
 * @license MIT
 * @copyright 2023 Team DarthCoders
 * @author Team DarthCoders <barisadsiz45@gmail.com>
 */

"use strict";

/**
 *
 * @param {Number} minute
 * @returns {String}
 */

export const getTime = (minute) => {
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);

  const time = day || hour || minute;
  const unitIndex = [day, hour, minute].lastIndexOf(time);
  const timeUnit = ["days", "hours", "minutes"][unitIndex];

  return { time, timeUnit };
};
