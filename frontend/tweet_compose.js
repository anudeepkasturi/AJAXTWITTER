/* eslint-disable semi */
/* globals $ */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable no-multiple-empty-lines */

class TweetCompose {
  constructor(form) {
    this.$form = $(form);
    this.$content = this.$form.find('.tweet-text');
    this.$mentions = this.$form.find('.mentions');

    this.$form.on("Submit", this.submit.bind(this));
  }

  disableForm(bool) {
    this.$content.prop("disabled", bool);
    this.$mentions.prop("disabled", bool);
    this.$form.find("Submit").prop("disabled", bool);
  }

  submit(event) {
    event.preventDefault();

    this.disableForm(true);

    $.ajax({
      url: '/tweets',
      method: "POST",
      dataType: 'json',
      data: this.$form.serialize(),
      success: tweet => {
        this.disableForm(false);
        alert("hi");
      }
    })
  }

}

module.exports = TweetCompose;
