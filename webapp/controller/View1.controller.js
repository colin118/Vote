sap.ui.define([
	"sap/ui/core/mvc/Controller",

	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("sap.ui.demo.vote.controller.View1", {
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