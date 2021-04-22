/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroup/rrhh/HTML5Module/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
