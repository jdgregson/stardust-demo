/**
 * File: stardust.js
 * Project: Stardust
 * Author: Jonathan Gregson <jonathan@jdgregson.com>
 */
/** interfaces **/
interface StardustOptions {
    isFirstLoad: boolean;
    theme: string;
    [key: string]: any;
}
interface Stardust {
    options?: any;
    appDefaultOptions?: any;
    actions: any;
    themes: Array<string>;
    selectedTheme: string;
    sideMenuIsVisible: boolean;
}
/** toast **/
/**
 * Show a toast, or a short message, on the user interface.
 * @param {string} message The message to show on the UI.
 * @param {number=} timeout The number of milliseconds to show the toast.
 * @param {boolean=} enableHTML Whether or not to permit HTML in the output.
 *     Default: false.
 */
declare const showToast: (message: string, timeout?: number, enableHTML?: boolean) => void;
/** tip orb */
/**
 * Creates an animated tooltip orb at x, y, which will spread out from x, y
 * until it disappears, and will then be removed from the DOM.
 * @param {number} x The X coordinate that the orb should originate from.
 * @param {number} y The Y coordinate that the orb should originate from.
 */
declare const showTipOrb: (x: string | number, y: string | number) => void;
/** loading bar **/
/**
 * Resets the loading bar so that it is ready to be shown again.
 */
declare const resetLoadingBar: () => void;
/**
 * Updates the loading bar to indicate that it is N percent complete.
 * @param {number} percent Integer representing the percentage to set the
 *     loading bar to.
 */
declare const updateLoadingBar: (percent: number) => void;
/** DOM overrides **/
/**
 * Wraps select elements with the '.select-wrap' div so we can customize them
 * easier.
 */
declare const rebindSelectObjects: () => void;
/** options and actions **/
/**
 * Returns the options object form local storage if set, or a default object if
 * not set.
 * @return {object} The options object.
 */
declare const getOptions: () => StardustOptions;
/**
 * Saves the options object to local storage.
 */
declare const saveOptions: () => void;
/**
 * Resets the app settings to default by removing the options object from local
 * storage and forcing generation of a new one.
 * @param {boolean=} reload Whether or not to reload the page after resetting
 *     the options object.
 */
declare const resetOptions: (reload?: boolean) => void;
/**
 * Binds options on the page to the corresponding options in the options object,
 * sets up option change events, and sets the state of the options on the page.
 */
declare const bindOptions: (stringToBoolean?: boolean) => void;
declare const bindActions: () => void;
/** side menu **/
/**
 * Hides the side menu if something other than the side menu or its children
 * were clicked.
 * @param {object} e A click event.
 */
declare const hideSideMenu: (e: Event) => void;
/**
 * Shows the side menu if it is hidden, and hides it if it is shown, or if hide
 * is true. If true is passed, the menu will be hidden regardless of its state.
 * @param {boolean} hide Whether or not to override the toggling behavior.
 */
declare const toggleSideMenu: (hide?: boolean) => void;
/** security and crypto **/
/**
 * Returns a copy of a string with HTML characters encoded as entities.
 * @param {string} string An unsafe string.
 * @return {string} A safe string.
 */
declare const sanitizeString: (string: string) => string;
/**
 * The equivalent of Math.random() but utilizing the browser's built in
 * cryptographic libraries.
 * @return {float} A cryptographically secure random floating point value
 *     between 0 and 1.
 */
declare const secureMathRandom: () => number;
/**
 * Returns a cryptographically secure random string of alphanumeric characters
 * numberOfCharacters long. Special characters can be included by passing true
 * for useSpecialCharacters.
 * @param {number} numberOfCharacters The length of the string that should be
 *     returned.
 * @param {boolean} useSpecialCharacters Whether or not to include special
 *     characters such as # and ( in the returned string.
 * @return {string} A cryptographically secure random string of alphanumeric
 *     characters numberOfCharacters long.
 */
declare const secureRandomString: (numberOfCharacters?: number, useSpecialCharacters?: boolean) => string;
/** themes **/
/**
 * Loads the Stardust and app theme CSS files based on the provided theme name,
 * saves the applied theme name to options.theme, and saves the theme's primary
 * color to the localStorage key 'stardust-primary-color'.
 * @param {string=} themeName The name of the theme to apply. Will default to
 *     options.theme. If provided or defaulted theme is not valid, 'light' will
 *     be used instead.
 */
declare const applyStardustTheme: (themeName?: any) => void;
/**
 * Gets the primary app color based on the selected theme.
 * @return {string} Hex, RGB, or other color value representing the primary app
 *     color for the active theme.
 */
declare const getThemePrimaryColor: () => string;
/** splash screen **/
/**
 * Hides and then removes the splash screen if present.
 */
declare const hideSplash: () => void;
/** modals **/
/**
 * Adds a modal popup to the DOM. The modal will be hidden by default. Once it
 * has been created using addModal (or the resulting HTML has been hard-coded
 * into the page) it can be shown by calling showModal(modalName).
 * @param {string} modalName The internal name of the modal. This will be used
 *     as an ID.
 * @param {string} modalContent HTML to be added to the body of the modal popup.
 * @param {string=} modalTitle Title of the modal popup.
 */
declare const addModal: (modalName: string, modalContent: string, modalTitle?: string) => void;
/**
 * Shows the modal popup with name modalName, if present. The name should be the
 * same name used when creating the modal popup, or if the popup is hard-coded
 * in HTML, it should be the ID in the <div id="*" class="modal"> tag.
 * @param {string} modalName The name of the modal popup to show.
 */
declare const showModal: (modalName: string) => void;
/**
 * Hides the modal popup with name modalName, if present. The name should be the
 * same name used when creating the modal popup, or if the popup is hard-coded
 * in HTML, it should be the ID in the <div id="*" class="modal"> tag.
 * @param {string} modalName The name of the modal popup hide.
 */
declare const hideModal: (modalName: string) => void;
/**
 * Closes the modal popup if passed an event whose target is '.modal-wrap' or
 * '.modal-close-button', meaning the close button or the modal pupup background
 * was clicked.
 * @param {object} e The click event of the user.
 */
declare const hideModalByEvent: (e: Event) => void;
/** misc helper functions **/
/**
 * Returns the value of a given URL parameter. If not present or the parameter
 * is not set to a value, an empty string will be returned.
 * @param {string} name The name of the parameter whose value to return.
 * @return {string} The value associated with that parameter.
 */
declare const getUrlParameter: (name: string) => string;
/** init **/
/**
 * Bootstraps the Stardust application.
 */
declare const initStardust: (initOptions: any) => void;
declare let stardust: Stardust;
