sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType"
], function (Controller, JSONModel, ResourceModel, MessageToast, MessageBox, Filter, FilterOperator, FilterType) {
	"use strict";

	return Controller.extend("sap.ui.demo.vote.controller.View1", {
		onInit: function () {
			var oJSONData = {
				busy : false,
				order : 0
			};
			var oModel = new JSONModel(oJSONData);
			oModel.loadData("./voteSummary.json");
			this.getView().setModel(oModel, "View1");
			
			var oResourceBundle = new ResourceModel({
				bundleName: "sap.ui.demo.vote.i18n.i18n"
			});
			sap.ui.getCore().setModel(oResourceBundle, "i18n");
		},
		
		onRefresh : function(){
			var oBinding = this.byId("voteSum").getBinding("items");
			if (oBinding.hasPendingChanges()) {
				MessageBox.error(this._getText("refreshNotPossibleMessage"));
				return;
			}
			oBinding.refresh();
			MessageToast.show(this._getText("refreshSuccessMessage"));
		},
		
		onSearch : function () {
			var oView = this.getView(),
				sValue = oView.byId("searchField").getValue(),
				oFilter = new Filter("voteOption", FilterOperator.Contains, sValue);
			oView.byId("voteSum").getBinding("items").filter(oFilter, FilterType.Application);
		},
		
		_getText : function(sTextId, aArgs){
			return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(sTextId, aArgs);
		}
	});
});