sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("vote.vote.controller.View1", {
		onInit: function () {
			// var oJSONData = {
			// 	busy : false
			// };
			// var oModel = new JSONModel(oJSONData);
			// var oModel = this.getView().getModel("1");
			// this.getView().setModel(oModel, "View1");

			// var oModel2 = this.getOwnerComponent().getModel("su");
			// this.getView().setModel(oModel2, "View1");
			
			sap.ui.getCore().byId("View1").getModel().refresh(true);
		}
	});
});