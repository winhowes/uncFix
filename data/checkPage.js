/*
 *This Source Code Form is subject to the terms of the Mozilla Public License,
 *v. 2.0. If a copy of the MPL was not distributed with this file, You can
 *obtain one at http://mozilla.org/MPL/2.0/.
*/

var url = String(window.location.href);
function postWarning(){
	var body = document.createElement('body');
	body.innerHTML = "<center><h1>WARNING</h1>This page may run malicious code that could compromise your information including grade or financial information.</center>";;
	setTimeout(function(){
		document.getElementsByTagName('head') && document.getElementsByTagName('head')[0]? (function(){
			document.getElementsByTagName('head')[0].innerHTML="<title>WARNING</title>";
			document.getElementsByTagName('head')[0].parentNode.appendChild(body);
		}()): null;
	}, 0);
	unsafeWindow.stop();
}

if((url=="https://cccs.unc.edu/psc/campus/EMPLOYEE/HRMS/c/" ||
	url=="https://cccs.unc.edu/psc/campus/EMPLOYEE/HRMS/c" ||
	(!url.indexOf("https://cccs.unc.edu/psc/campus/EMPLOYEE/HRMS/c/") &&
	 (decodeURIComponent(url).indexOf("'")>0 ||
	  decodeURIComponent(url).indexOf('"')>0))) ||
   (window.opener &&
	url.indexOf("https://cccs.unc.edu/psc/campus/EMPLOYEE/UNC_CS/s/WEBLIB_TIMEOUT.PT_TIMEOUTWARNING.FieldFormula.IScript_TIMEOUTWARNING")<0 &&
	(!url.indexOf("https://ccpa.unc.edu/") ||
	 !url.indexOf("https://cccs.unc.edu/")))){
		unsafeWindow.name = "";
		postWarning();
}