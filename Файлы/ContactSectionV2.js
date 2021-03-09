define("ContactSectionV2", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "Contact",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "CopyAccountAddress",
				"values": {
					"itemType": 5,
					"caption": "Заполнить из контрагента",
					"click": {
						"bindTo": "CopyAccountAddress",
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
			},
		]/**SCHEMA_DIFF*/,
		methods: {
			CopyAccountAddress: function() {
				let customProcess = {
					sysProcessName: "UsrProcess_6455b7d",
				};
				ProcessModuleUtilities.executeProcess(customProcess);
			},
		}
	};
});
