/* eslint-disable semi */
/* globals $ */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable space-in-parens */

const FollowToggle = require('./follow_toggle');

$(() => {
  $("button.follow-toggle").each( (idx, button) => {
    return new FollowToggle(button);
  });
});
