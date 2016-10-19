/* eslint-disable semi */
/* globals $ */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable no-multiple-empty-lines */

class FollowToggle {
  constructor (el) {
    this.$el = $(el);
    this.userId = parseInt(this.$el.attr('data-user-id'));
    let followState = this.$el.attr('data-initial-follow-state');
    this.followState = followState === "true" ? true : false;
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render(disabled = false) {
    if (this.followState && !disabled) {
      this.$el.prop("disabled", false)
      this.$el.html('Unfollow');
    } else if (!this.followState && !disabled) {
      this.$el.prop("disabled", false)
      this.$el.html('Follow');
    } else if (this.followState && disabled) {
      this.$el.prop("disabled", true);
      this.$el.html('Unfollowing...');
    } else {
      this.$el.prop("disabled", true);
      this.$el.html('Following...');
    }
  }

  handleClick(event) {
    event.preventDefault();

    let method = "";
    this.render(true);

    if (this.followState) {
      method = "DELETE";
    } else {
      method = "POST";
    }

    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: method,
      dataType: "json",
      data: {user_id: this.userId},
      success: (follow) => {
        this.followState = !this.followState
        this.render();
      }
    });
  }
}

module.exports = FollowToggle;
