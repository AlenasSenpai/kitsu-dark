// ==UserScript==
// @name          Werejos animated bg
// @namespace     https://github.com/misarasglow/kitsu-dark
// @description	  Anim bg for werejo on kitsu.io
// @author        AlenasSenpai
// @homepage      https://github.com/misarasglow/kitsu-dark
// @updateURL     https://github.com/misarasglow/kitsuXwerejo.user.js
// @downloadURL   https://github.com/misarasglow/kitsuXwerejo.user.js
// @include       http://kitsu.io/users/werejo*
// @include       https://kitsu.io/users/werejo*
// @include       http://*.kitsu.io/users/werejo*
// @include       https://*.kitsu.io/users/werejo*
// @run-at        document-start
// @version       1.0.3
// ==/UserScript==
(function() {var css = [
	"/*",
	" * Name:    Werejo anim bggg",
	" * Author:  AlenasSenpai",
	" * Version: v1.0.3",
	" * Latest update: 15/01/2017",
	" * Changelog: sigh",
	"",
	" */",
	"",
  	".user-cover .dark-cover-overlay {",
  	"    background-image: url(\"https://github.com/misarasglow/kitsu-dark/blob/master/yuki.gif\");",
  	"    background-size: cover;",
	"    background-repeat: no-repeat;",
	"    background-position: center;",
	"    background: rgba(0,0,0,0.0);",
	"}"

].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
