// required prefs
// disable telemetry since we're modding firefox
user_pref("toolkit.telemetry.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("datareporting.healthreport.documentServerURI", "http://%(server)s/healthreport/");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// make the theme work properly
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.proton.enabled", true);
user_pref("browser.proton.places-tooltip.enabled", true);
user_pref("layout.css.moz-document.content.enabled", true);
user_pref("layout.css.xul-box-display-values.content.enabled", true);
user_pref("layout.css.xul-display-values.content.enabled", true);
// required for icons with data URLs
user_pref("svg.context-properties.content.enabled", true);
// required for acrylic gaussian blur
user_pref("layout.css.backdrop-filter.enabled", true);
// prevent bugs that would otherwise be caused by the custom scrollbars in the user-agent sheet
user_pref("layout.css.cached-scrollbar-styles.enabled", false);
user_pref("ui.systemUsesDarkTheme", 1);
// allow stylesheets to modify trees in system pages viewed in regular tabs
user_pref("layout.css.xul-tree-pseudos.content.enabled", true);
// allow the color-mix() CSS function
user_pref("layout.css.color-mix.enabled", true);
// other CSS features
user_pref("layout.css.moz-outline-radius.enabled", true);
// avoid native styling
user_pref("browser.display.windows.non_native_menus", 1);
user_pref("widget.disable-native-theme-for-content", true);
user_pref("widget.non-native-theme.win.scrollbar.use-system-size", false);
user_pref("widget.content.allow-gtk-dark-theme", true);
// keep "all tabs" menu available at all times, useful for all tabs menu expansion pack
user_pref("browser.tabs.tabmanager.enabled", true);
// Selection background, among others
user_pref("ui.highlight", "hsla(245, 100%, 66%, .55)");
// Background for selected <option> elements and others
user_pref("ui.selecteditem", "#2F3456");
// Text color for selected <option> elements and others
user_pref("ui.selecteditemtext", "#FFFFFFCC");

// REQUIRED on macOS
// user_pref("widget.macos.native-context-menus", false);
