define("BankCardPageV2", ["ServiceHelper", "css!UsrTitleCSS"], function(ServiceHelper) {
	return {
		entitySchemaName: "BankCard",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onEntityInitialized() {
				this.callParent(arguments);
			},
			cardBlocking: function () {
				ServiceHelper.callService("UsrCardBlockingService", "CardBlocking",
					function (response) {
						if (!this.Ext.isEmpty(response)) {
							this.showInformationDialog('Карта заблокирована');
						}
					}, {
						key: this.$Id
					}, this
				);
			},

			cardActivation: function () {
				ServiceHelper.callService("UsrCardActivationService", "CardActivation",
					function (response) {
						if (!this.Ext.isEmpty(response)) {
							this.showInformationDialog('Карта активирована');
						}
					}, {
						key: this.$Id
					}, this
				);
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Blocking",
				"values": {
					"itemType": 5,
					"caption": "Заблокировать",
					"click": {
						"bindTo": "cardBlocking"
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
						"textClass": [
							"customButton"
						]
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Activation",
				"values": {
					"itemType": 5,
					"caption": "Активировать",
					"click": {
						"bindTo": "cardActivation"
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
						"textClass": [
							"customButton"
						]
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "Number",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Number",
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Product",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "IsPrimary",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "IsPrimary",
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "BankCardType",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Holder",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Holder",
				"parentName": "BankCardPageGeneralBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "BankCardPaymentSystem",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactNameEng",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "ContactNameEng",
				"parentName": "BankCardPageGeneralBlock",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "BankCardCategory",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "Branch",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "Division",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "BankCardStatus",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Balance",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Balance",
				"parentName": "AdditionalInfoGroupGridLayout",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "StartDate",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "CashLimit",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "CashLimit",
				"parentName": "AdditionalInfoGroupGridLayout",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ValidDate",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "Debt",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "RepayDate",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "NotesTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "move",
				"name": "Client",
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "IsPayPassPayWave",
				"parentName": "BankCardPageGeneralBlock",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_DIFF*/
	};
});
