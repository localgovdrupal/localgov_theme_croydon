/**
 * @file
 * Present a full page alert banner as a Bootstrap modal.
 *
 * The alert banner is added by the localgov_alert_banner module.
 *
 * @see localgov_theme_croydon_preprocess_localgov_alert_banner__cds_full_page()
 * @see localgov-alert-banner--cds-full-page.html.twig
 */

(function launchModalAlertBanner(jQuery, Drupal, drupalSettings, bootstrap) {
  Drupal.behaviors.launchModalAlertBanner = {
    attach() {
      const modalId =
        drupalSettings.localgov_theme_croydon.cds_full_page_alert_banner_id;

      const modal = jQuery(`#${modalId}`).get(0);
      if (typeof modal === "undefined") {
        return;
      }

      // Display this modal only when the Alert banner module has not hidden it.
      if (this.isHiddenAlert(modal)) {
        return;
      }

      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();

      // Attach modal closer as a click event handler of the "Hide" link.
      jQuery(".js-alert-banner-close", modal).click(() => bsModal.hide());
    },

    /**
     * Is this a hidden alert?
     *
     * @param {object} modal
     *   jQuery object.
     *
     * @return {bool}
     *   Is the given alert hidden?
     *
     * @see localgov_alert_banner/js/alert_banner.js
     */
    isHiddenAlert(modal) {
      const cookie = jQuery.cookie("hide-alert-banner-token");
      const cookieTokens =
        typeof cookie !== "undefined" ? cookie.split("+") : [];

      const dismissToken = jQuery(modal).data("dismiss-alert-token");
      const isHidden = cookieTokens.includes(dismissToken);
      return isHidden;
    }
  };
})(jQuery, Drupal, drupalSettings, bootstrap); // eslint-disable-line
