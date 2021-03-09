define("BankCardSectionV2", ["css!UsrTitleCSS"], function() {
	return {
		entitySchemaName: "BankCard",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
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
		]/**SCHEMA_DIFF*/,
		methods: {}
	};
});
