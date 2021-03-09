define("AccountSectionV2", [], function() {
	return {
		entitySchemaName: "Account",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[

		]/**SCHEMA_DIFF*/,
		methods: {
			initQueryColumns: function(esq) {
				esq.addColumn("UsrActivityPriority", "UsrActivityPriority");
				this.callParent(arguments);
			},
			prepareResponseCollectionItem: function(item) {
				this.callParent(arguments);
				item.customStyle = null;

				var UsrActivityPriority = item.get("UsrActivityPriority");

				if(UsrActivityPriority.displayValue === "Высокий") {
					item.customStyle = {
						"color": "black",
						"background": "#D1FFE5"
					};
				}
				if(UsrActivityPriority.displayValue === "Средний") {
					item.customStyle = {
						"color": "black",
						"background": "#D1F6FF"
					};
				}
                if(UsrActivityPriority.displayValue === "Низкий") {
                    item.customStyle = {
                        "color": "black",
                        "background": "#FFD1D2"
                    };
                }
			}
		}
	};
});
