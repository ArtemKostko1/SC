define("AccountPageV2", [], function() {
	return {
		entitySchemaName: "Account",
		attributes: {
            "UsrTotalDiscount": {
                dependencies: [
                    {
                        columns: ["UsrTotalIncome", "UsrDiscountLevel"],
                        methodName: "TotalDiscountChange"
                    }
                ]
            },
			"UsrTotalIncome": {
				dependencies: [
					{
						columns: ["UsrTotalDiscount", "UsrDiscountLevel"],
						methodName: "TotalIncomeChange"
					}
				]
			},
			"UsrActualizeUser": {
				dataValueType: Terrasoft.DataValueType.LOOKUP,
				lookupListConfig: {
					filter: function() {
						return Terrasoft.createColumnIsNotNullFilter("[SysAdminUnit:Contact].Id");
					}
				}
			},
			"UsrDateOfActualization": {
				dependencies: [
					{
						columns: ["UsrActivityPriority", "UsrLoyaltyPoints", "UsrDiscountLevel", "UsrTotalDiscount", "UsrTotalIncome" ],
						methodName: "DateOfActualizationChange"
					}
				]
			},
        },
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"UsrSchema71866f29Detail2084b184": {
				"schemaName": "UsrSchema71866f29Detail",
				"entitySchemaName": "UsrLoyaltyParametersDetail",
				"filter": {
					"detailColumn": "UsrAccount",
					"masterColumn": "Id"
				},
				"defaultValues": {
					"UsrParams": {
						"masterColumn": "UsrActivityPriority"
					}
				}
			},
			"Activities": {
				"schemaName": "UsrSchema71866f29Detail",
				"defaultValues": {
					"Account": {
						"masterColumn": "UsrLoyaltyPoints"
					}
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
            TotalDiscountChange: function() {
				var UsrDiscountLevel = this.get("UsrDiscountLevel");
				var UsrTotalIncome = this.get("UsrTotalIncome");

				var TotalDiscount = UsrTotalIncome * UsrDiscountLevel / 100;
				this.set("UsrTotalDiscount", TotalDiscount);
            },

			TotalIncomeChange: function() {
				var UsrTotalDiscount = this.get("UsrTotalDiscount");
				var UsrDiscountLevel = this.get("UsrDiscountLevel");

				if (UsrDiscountLevel === 0) {
					return;
				} else {
					var TotalIncome = UsrTotalDiscount * 100 / UsrDiscountLevel;
					this.set("UsrTotalIncome", TotalIncome);
				}
			},

			DateOfActualizationChange: function() {
				var dateNow = new Date();
				this.set("UsrDateOfActualization", dateNow);
			},
        },
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "AccountPhotoContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountName",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountPhone",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "AccountPhone",
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "AccountWeb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountClientProfileIcon",
				"values": {
					"layout": {
						"colSpan": 4,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountType",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 1,
						"column": 4,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "AccountType",
				"parentName": "AdditionalAccountProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "NewAccountCategory",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 1,
						"column": 4,
						"row": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "NewAccountCategory",
				"parentName": "AdditionalAccountProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "AccountBranch",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 1,
						"column": 4,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountOwner",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 1,
						"column": 4,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountPageGeneralTabContainer",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "OwnershipForm",
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
				"name": "OwnershipForm",
				"parentName": "CategoriesControlGroupContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "EmployeesNumber",
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
				"name": "EmployeesNumber",
				"parentName": "CategoriesControlGroupContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AccountPageGeneralTabContainerGroupd866ea2e",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.AccountPageGeneralTabContainerGroupd866ea2eGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "AccountPageGeneralTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "AccountPageGeneralTabContainerGroupd866ea2e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrActivityPriority6003df6d-4038-4aac-8204-0e2dd8c9c3a1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "AccountPageGeneralTabContainerGridLayoutee7a08c6"
					},
					"bindTo": "UsrActivityPriority",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.UsrActivityPriority6003df6d40384aac82040e2dd8c9c3a1LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLoyaltyPointsf7451318-ed1e-4c4e-9959-c6d7bdc39415",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "AccountPageGeneralTabContainerGridLayoutee7a08c6"
					},
					"bindTo": "UsrLoyaltyPoints"
				},
				"parentName": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrDiscountLevel3f4806c5-3bfa-42d7-a87d-c2c89f4a2061",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "AccountPageGeneralTabContainerGridLayoutee7a08c6"
					},
					"bindTo": "UsrDiscountLevel"
				},
				"parentName": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrTotalDiscount718c16f9-541c-44ce-a1a6-de23d3443100",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 1,
						"layoutName": "AccountPageGeneralTabContainerGridLayoutee7a08c6"
					},
					"bindTo": "UsrTotalDiscount"
				},
				"parentName": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrTotalIncome4fc45112-3e5d-428a-a5d9-8fd049682a06",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 1,
						"layoutName": "AccountPageGeneralTabContainerGridLayoutee7a08c6"
					},
					"bindTo": "UsrTotalIncome"
				},
				"parentName": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP7b04b704-fbd7-4013-a86e-c3a93a8bc5f9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "AccountPageGeneralTabContainerGridLayoutee7a08c6"
					},
					"bindTo": "UsrActualizeUser",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrDateOfActualizationad2cb6f9-c355-4a4f-ab4c-a29d731c3c75",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "AccountPageGeneralTabContainerGridLayoutee7a08c6"
					},
					"bindTo": "UsrDateOfActualization"
				},
				"parentName": "AccountPageGeneralTabContainerGridLayoutee7a08c6",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab611edd5eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab611edd5eTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrSchema71866f29Detail2084b184",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab611edd5eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ContactsAndStructureTabContainer",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "RelationshipTabContainer",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTabContainer",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "NotesTabContainer",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "move",
				"name": "IsNotResident",
				"parentName": "AccountPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "move",
				"name": "IsInBlackList",
				"parentName": "AccountPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "move",
				"name": "BlackListDate",
				"parentName": "AccountPageGeneralInfoBlock",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "move",
				"name": "AccountIndustry",
				"parentName": "CategoriesControlGroupContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
