define("UsrTitlee6f3a247Section", [
    "ProcessModuleUtilities",
    "ServiceHelper",
	"css!UsrTitleCSS"
    ],
    function(ProcessModuleUtilities, ServiceHelper) {

	return {
		entitySchemaName: "UsrTitle",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "runProcessButton",
				"values": {
					"itemType": 5,
					"caption": "Запустить процесс",
					"click": {
						"bindTo": "runProcess",
					},
					"enabled": true,
					"style": "blue",
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "runServiceButton",
				"values": {
					"itemType": 5,
					"caption": "Запустить сервис",
					"click": {
						"bindTo": "runService",
					},
					"enabled": true,
					"style": "blue",
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 1,
						"row": 0
					},
					"classes": {
						"textClass": ["customButton"]
					},
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 10
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			runProcess: function() {
				let customProcess = {
					sysProcessName: "UsrProcess_ContactProcess",
				};
				ProcessModuleUtilities.executeProcess(customProcess);
			},

			runService: function () {
				ServiceHelper.callService({
					serviceName: "CustomService",
					methodName: "ReturnCurrentUser",
					callback: function(user) {
                        Terrasoft.utils.showMessage({
                            caption: "Сервис запустил " + user,
                            buttons: [Terrasoft.MessageBoxButtons.OK.returnCode],
                            defaultButton: 0,
                            scope: this
                        });
					},
					scope: this
				}, this);
			},
			/*subscribeUser: function() {
				var entitySchema = this.entitySchema;
				var serviceMethodName = "ReturnCurrentUser";
				var config = {
					serviceName: this.socialSubscriptionServiceName,
					methodName: serviceMethodName
				};
				this.callService(config, function(response) {
					var result = response["Сервис запустил" + serviceMethodName];
					if (!result) {
						return;
					}
					var message = "";
					if (result.success) {
						this.setIsSubscribed(true);
						this.updateSubscribersDetail();
						message = this.Ext.String.format(this.get("Resources.Strings.SubscribedInformationDialog"),
							this.get(entitySchema.primaryDisplayColumnName));
					} else {
						var responseStatus = result.responseStatus;
						message = this.Ext.String.format("{0}: {1}", responseStatus.ErrorCode, responseStatus.Message);
					}
					this.showInformationDialog(message);
				}, this);
			},*/
		},
	};
});
