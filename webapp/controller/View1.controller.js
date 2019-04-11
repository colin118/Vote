sap.ui.define([
	"sap/ui/core/mvc/Controller",
<<<<<<< HEAD
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
=======
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType"
], function (Controller, JSONModel, ResourceModel, MessageToast, MessageBox, Filter, FilterOperator, FilterType) {
>>>>>>> refs/heads/master
	"use strict";

	return Controller.extend("sap.ui.demo.vote.controller.View1", {
		onInit: function () {
<<<<<<< HEAD
			// var oJSONData = {
			// 	busy : false
			// };
			// var oModel = new JSONModel(oJSONData);
			// var oModel = this.getView().getModel("1");
			// this.getView().setModel(oModel, "View1");

			// var oModel2 = this.getOwnerComponent().getModel("su");
			// this.getView().setModel(oModel2, "View1");
			
			sap.ui.getCore().byId("View1").getModel().refresh(true);
=======
			
			/*vvar oViewModel2 = new JSONModel({
					busy : false,
					hasUIChanges : false,
					usernameEmpty : true,
					order : 0
				});
			this.getView().setModel(oViewModel2, "externalodata");*/
			
			var oJSONData = {
				busy : false,
				order : 0
			};
			var oModel = new JSONModel(oJSONData);
			oModel.loadData("./voteSummary.json");
			this.getView().setModel(oModel, "voteSummary");
			
			/*var oResourceBundle = new ResourceModel({
				bundleName: "sap.ui.demo.vote.i18n.i18n"
			});
			sap.ui.getCore().setModel(oResourceBundle, "i18n");*/
			//this.modelServices();
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
>>>>>>> refs/heads/master
		}
		/*
		,
		modelServices :function(){
	        var oModeldata = new sap.ui.model.json.JSONModel();
	        this.getView().setModel(oModeldata, "externalodata");
	        this.intervalHandle = setInterval(function() { 
	            //No need to create and assign a new model each time. Just load the data. 
	            oModeldata. loadData(""); 
	         },  10000); //Call setInterval only once
		},
		
		onExit:function() {
		   // You should stop the interval on exit. 
		   // You should also stop the interval if you navigate out of your view and start it again when you navigate back. 
		   if (this.intervalHandle) {
		      clearInterval(this.intervalHandle);
		   }
		} 
		*/
	});
});