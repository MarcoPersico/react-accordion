import urijs from 'urijs';

/**
 * This service is meant to have generic utility methods that the app may need and that can't be
 * categorized in any of the existing modules.
 */
class Utils {
  /**
   * Replace placeholders on a URL. If one of more of the placeholders are not present on the URL,
   * the method will dynamically add them as query string arguments.
   *
   * @param {String} url        The base URL where the function will replace the placeholders.
   * @param {Object} parameters A dictionary with the placeholders to replace.
   * @return {String}
   */
  static formatURL(url, parameters) {
    const optionals = [];
    Object.keys(parameters).forEach((key) => {
      const placeholder = `{${key}}`;
      if (url.includes(placeholder)) {
        url = url.replace(placeholder, parameters[key]);
      } else {
        optionals.push(key);
      }
    });

    if (optionals.length) {
      const uriObj = urijs(url);
      optionals.forEach((key) => {
        uriObj.addQuery(key, parameters[key]);
      });

      url = uriObj.toString();
    }

    return url;
  }
  /**
   * Checks if KeyPressed event object key is the same as the given key in which case it executes
   * the given action.
   * @param {Object}   event  Event object with data of the onkeypress event.
   * @param {String}   key    Key that should be matched to the key of the event.
   * @param {Function} action Function to execute if the event key is the same as the given key.
   */
  static executeActionOnKeyPressed(event, key, action) {
    if (event.key === key) {
      action();
    }
  }

  /**
   * Adds a listener to listen for clicks outside of the given element and executes the given
   * action. It also removes the listenere once the action is executed.
   * @param {Objec}    element Html Element that will be the "inside" click.
   * @param {Function} action  Function to execute on the "clickOutside" event.
   */
  static addClickOutside(element, action) {
    const documentClickListener = (event) => {
      const targetElement = event.target;
      if (element && targetElement !== element) {
        action();
        document.removeEventListener('click', documentClickListener);
      }
    };
    document.addEventListener('click', documentClickListener);
  }

  /**
   * If the fixedVisibility prop is set to false, it adds a listener to hide the button if the scroll
   * position is zero and display it if is greater than zero.
   */
  static addScrollListener(noScrollAction, pastScrollAction) {
    const windowScrollListener = () => {
      if (window.pageYOffset > 0) {
        noScrollAction();
      } else {
        pastScrollAction();
      }
    };
    window.addEventListener('scroll', windowScrollListener);
  }
}

export default Utils;
