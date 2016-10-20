/* eslint-disable semi */
/* globals $ */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable space-in-parens */

const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');

$(() => {
  $("button.follow-toggle").each( (idx, button) => {
    return new FollowToggle(button);
  });

  $("nav.users-search").each( (idx, nav) => {
    return new UsersSearch(nav);
  });

  $("form.tweet-compose").each( (idx, form) => {
    return new TweetCompose(form);
  });
});
