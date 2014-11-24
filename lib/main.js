/*
 *This Source Code Form is subject to the terms of the Mozilla Public License,
 *v. 2.0. If a copy of the MPL was not distributed with this file, You can
 *obtain one at http://mozilla.org/MPL/2.0/.
*/

var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

exports.main = function(options){
	pageMod.PageMod({
		include: ["*"],
		contentScriptFile: [data.url("checkPage.js")],
		contentScriptWhen: "start"
	});
}