/* eslint-disable semi */
/* globals $ */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable no-multiple-empty-lines */
const FollowToggle = require ('./follow_toggle');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('.search');
    this.$ul = this.$el.find('.users');

    this.$input.on("input", this.handleInput.bind(this));
  }

  handleInput(event) {
    // get input
    // ajax request returns matched users
    // ajax success callback should create li's for each user and add to ul
    const input = this.$input.val();


      $.ajax({
        url: '/users/search',
        method: 'GET',
        dataType: 'json',
        data: {query: input},
        success: (users) => {
          this.renderResults(users);
        }
      })
    
  }

  renderResults(users) {
    this.$ul.empty();
    users.forEach(user => {
      let $a = $('<a>');
      $a.html(user.username);
      $a.attr("href", `/users/${user.id}`);

      let $followToggle = $('<button>');
      $followToggle.addClass('follow-toggle');
      $followToggle.attr('data-user-id', user.id);
      $followToggle.attr('data-initial-follow-state', user.followed);
      new FollowToggle($followToggle);

      let $li = $('<li>');
      $li.append($a);
      $li.append($followToggle);

      this.$ul.append($li);
    })
  }

}

module.exports = UsersSearch;
