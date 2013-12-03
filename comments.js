/**
 * @namespace "CKEditor3 SCAYT plug-in"
 *
 * @property {Boolean} scayt_autoStartup - If enabled (set to 'true'), turns on SCAYT automatically after loading the editor.
 * Default value : [scayt_autoStartup=false]
 *
 * @property {Number} scayt_maxSuggestions - Defines the number of SCAYT suggestions to show in the main context menu.
 * Possible values are: 
 * '0' (zero) &ndash; All suggestions are displayed in the main context menu. 
 * Positive number &ndash; The maximum number of suggestions to show in the context 
 * menu. Other entries will be shown in the "More Suggestions" sub-menu.
 * Negative number &ndash; No suggestions are shown in the main context menu. All 
 * entries will be listed in the the "More Suggestions" sub-menu.
 * Default value : [scayt_maxSuggestions=5]
 *
 * @property {String} scayt_customerid - Sets the customer ID for SCAYT. Required for migration from free,
 * ad-supported version to paid, ad-free version.
 * Default value : [scayt_customerid='1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2']
 *
 * @property {String} scayt_moreSuggestions - Enables/disables the "More Suggestions" sub-menu in the context menu.
 * Possible values are 'on' and 'off'.
 * Default value : [scayt_moreSuggestions='on']
 *
 * @property {String} scayt_contextCommands - Customizes the display of SCAYT context menu commands ("Add Word", "Ignore" 
 * and "Ignore All"). This must be a string with one or more of the following words separated by a pipe character ('|'): 
 * 'off' &ndash; disables all options; 'all' &ndash; enables all options; 'ignore' &ndash; enables the "Ignore" option; 
 * 'ignoreall' &ndash; enables the "Ignore All" option; 'add' &ndash; enables the "Add Word" option.
 * Default value : [scayt_contextCommands='all']
 *
 * @property {String} scayt_sLang - Sets the default spell checking language for SCAYT. Possible values are: 
 * 'en_US', 'en_GB', 'pt_BR', 'da_DK',
 * 'nl_NL', 'en_CA', 'fi_FI', 'fr_FR',
 * 'fr_CA', 'de_DE', 'el_GR', 'it_IT',
 * 'nb_NO', 'pt_PT', 'es_ES', 'sv_SE'.
 * Default value : [scayt_sLang='en_US']
 *
 * @property {String} scayt_uiTabs - Sets the visibility of particular tabs in the SCAYT dialog window and toolbar
 * button. This setting must contain a '1' (enabled) or '0'
 * (disabled) value for each of the following entries, in this precise order,
 * separated by a comma (','): 'Options', 'Languages', and 'Dictionary'.
 * Default value : [scayt_uiTabs='1,1,1']
 *
 * @property {String} scayt_srcUrl - Sets the URL to SCAYT core. Required to switch to the licensed version of SCAYT application.
 * Further details available at [http://wiki.webspellchecker.net/doku.php?id=migration:hosredfreetolicensedck](http://wiki.webspellchecker.net/doku.php?id=migration:hosredfreetolicensedck)
 * Default value : [scayt_srcUrl = '//svc.webspellchecker.net/scayt26/loader__base.js']
 *
 * @property {String} scayt_customDictionaryIds - Links SCAYT to custom dictionaries. This is a string containing dictionary IDs
 * separared by commas (','). 
 * Further details at [http://wiki.webspellchecker.net/doku.php?id=installationandconfiguration:customdictionaries:licensed](http://wiki.webspellchecker.net/doku.php?id=installationandconfiguration:customdictionaries:licensed).
 * Default value : [scayt_customDictionaryIds='']
 *
 * @property {String} scayt_userDictionaryName - Makes it possible to activate a custom dictionary in SCAYT. The user
 * dictionary name must be used. 
 * Default value : [scayt_userDictionaryName='']
 *
 * @property {String} scayt_contextMenuItemsOrder - Defines the order SCAYT context menu items by groups.
 * This must be a string with one or more of the following
 * words separated by a pipe character ('|'):
 * 'suggest' &ndash; main suggestion word list; 
 * 'moresuggest' &ndash; more suggestions word list; 
 * 'control' &ndash; SCAYT commands, such as "Ignore" and "Add Word".
 * Default value : [scayt_contextMenuItemsOrder='suggest|moresuggest|control']
 *
 * @example
 * config.scayt_autoStartup = true;
 * @example
 * // Display only three suggestions in the main context menu.
 * config.scayt_maxSuggestions = 3;
 *
 * // Do not show the suggestions directly.
 * config.scayt_maxSuggestions = -1;
 * @example
 * // Load SCAYT using my customer ID.
 * config.scayt_customerid  = 'your-encrypted-customer-id';
 * @example
 * // Disables the "More Suggestions" sub-menu.
 * config.scayt_moreSuggestions = 'off';
 * @example
 * // Show only "Add Word" and "Ignore All" in the context menu.
 * config.scayt_contextCommands = 'add|ignoreall';
 * @example
 * // Sets SCAYT to German.
 * config.scayt_sLang = 'de_DE';
 * @example
 * // Hides the "Languages" tab.
 * config.scayt_uiTabs = '1,0,1';
 * @example
 * config.scayt_srcUrl = "http://my-host/spellcheck/lf/scayt/scayt.js";
 * @example
 * config.scayt_customDictionaryIds = '3021,3456,3478"';
 * @example
 * config.scayt_userDictionaryName = 'MyDictionary';
 * @example
 * config.scayt_contextMenuItemsOrder = 'moresuggest|control|suggest';
 */