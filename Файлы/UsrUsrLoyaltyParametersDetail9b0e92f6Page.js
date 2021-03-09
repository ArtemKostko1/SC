define("UsrUsrLoyaltyParametersDetail9b0e92f6Page", [], function() {
	return {
		entitySchemaName: "UsrLoyaltyParametersDetail",
		attributes: {
			"UsrParameter": {
				dataValueType: Terrasoft.DataValueType.LOOKUP,
				lookupListConfig: {
					filter: function () {
						var value = this.get("DefaultValues");
						var parameter = value.find(function (element) {
							return element.name === "UsrParams";
						});

						return Terrasoft.createColumnFilterWithParameter(this.Terrasoft.ComparisonType.EQUAL, "UsrLoyaltyLevel", parameter.value);
					}
				}
			},
			"UsrDateOfTheBeginning": {
				dependencies: [
					{
						columns: ["UsrActive"],
						methodName: "DateOfTheBeginningChange"
					}
				]
			},
			"UsrDateOfTheCompletion": {
				dependencies: [
					{
						columns: ["UsrActive"],
						methodName: "DateOfTheCompletionChange"
					}
				]
			},
			"UsrDurationOfAction": {
				dependencies: [
					{
						columns: ["UsrActive"],
						methodName: "DurationOfActionChange"
					}
				]
			},
			"UsrValue": {
				"isRequired": true
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			DateOfTheBeginningChange: function() {
				var UsrActive = this.get("UsrActive");

				if (UsrActive === true) {
					var DateOfTheBeginning = new Date();
					this.set("UsrDateOfTheBeginning", DateOfTheBeginning);
				}
			},

			DateOfTheCompletionChange: function() {
				var UsrActive = this.get("UsrActive");

				if (UsrActive === false) {
					var DateOfTheCompletion = new Date();
					this.set("UsrDateOfTheCompletion", DateOfTheCompletion);
				}
			},

			DurationOfActionChange: function() {
				var UsrActive = this.get("UsrActive");

				if (UsrActive === false) {
					var UsrDateOfTheBeginning = this.get("UsrDateOfTheBeginning");
					var UsrDateOfTheCompletion = this.get("UsrDateOfTheCompletion");

					var DurationOfAction = Math.trunc((UsrDateOfTheCompletion - UsrDateOfTheBeginning) / (60 * 60 * 24 * 1000));
					this.set("UsrDurationOfAction", DurationOfAction);
				}
			},
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.$UsrActive = true;
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrParametr53899ea0-a6bd-4444-a799-fdfafe55d9d0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrParameter",
					"enabled": {"bindTo": "UsrActive"},
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrValuecc190e4e-0c6b-49ac-b11a-0dc4e6d771bb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrValue",
					"enabled": {"bindTo": "UsrActive"},
					"isRequired": {"bindTo": "UsrParameter"},
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCommentcea4b5eb-c6f5-4cff-8f4a-acc297ecf811",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": {"bindTo": "UsrActive"}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrDateOfTheBeginning93c1a309-b8a7-4a59-9838-0d151a217ed9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrDateOfTheBeginning",
					"enabled": {"bindTo": "UsrActive"}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrDateOfTheCompletion9cc46e4d-f393-4130-9921-15a2afc6c9c3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrDateOfTheCompletion",
					"enabled": {"bindTo": "UsrActive"}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrDurationOfActiond19d76b7-ffd4-4c5a-9ca0-b2e538ea9b80",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrDurationOfAction",
					"enabled": {"bindTo": "UsrActive"}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrActivee307e2b7-4d90-4499-8049-29e99179fef4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "UsrActive",
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_DIFF*/
	};
});
