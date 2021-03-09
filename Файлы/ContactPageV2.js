define("ContactPageV2", [], function() {
	return {
		entitySchemaName: "Contact",
		attributes: {
			"UsrActualizeUser": {
				dataValueType: Terrasoft.DataValueType.LOOKUP,
				lookupListConfig: {
					filter: function() {
						return Terrasoft.createColumnIsNotNullFilter("[SysAdminUnit:Contact].Id");
					}
				}
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"UsrSchema513dccb2Detail48e0ae95": {
				"schemaName": "UsrSchema513dccb2Detail",
				"entitySchemaName": "UsrCustomDetail",
				"filter": {
					"detailColumn": "UsrContact",
					"masterColumn": "Id"
				},
				"filterMethod": "timeFilter"
			},
			"UsrSchemac5c2b5caDetaile72978a9": {
				"schemaName": "UsrSchemac5c2b5caDetail",
				"entitySchemaName": "UsrWishes",
				"filter": {
					"detailColumn": "UsrContact",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			timeFilter: function () {
				var now = new Date();
				var filterGroup = new this.Terrasoft.createFilterGroup();
				filterGroup.logicalOperation = this.Terrasoft.LogicalOperatorType.AND;
				filterGroup.add("ByContactFilter", this.Terrasoft.createColumnFilterWithParameter(
					this.Terrasoft.ComparisonType.EQUAL, "UsrContact", this.get("Id"))
				);
				filterGroup.add("ByContactFilter1", this.Terrasoft.createColumnFilterWithParameter(
					this.Terrasoft.ComparisonType.GREATER_OR_EQUAL, "CreatedOn", this.Terrasoft.startOfDay(now))
				);
				filterGroup.add("ByContactFilter2", this.Terrasoft.createColumnFilterWithParameter(
					this.Terrasoft.ComparisonType.LESS_OR_EQUAL, "CreatedOn", this.Terrasoft.endOfDay(new Date(new Date().getTime() + 3600000)))
				);
				return filterGroup;
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "PhotoTimeZoneContainer",
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
				"name": "JobTitleProfile",
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
				"operation": "merge",
				"name": "AccountMobilePhone",
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
				"name": "AccountPhone",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountEmail",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "ContactClientProfileIcon",
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
				"name": "Type",
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
				"name": "Type",
				"parentName": "AdditionalContactProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "AccountServiceLevel",
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
				"name": "Owner",
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
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "Language",
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
				"operation": "move",
				"name": "Language",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "Age",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "move",
				"name": "Age",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ModifiedOn3c890b9d-7bf8-4f1d-a45c-098efba06030",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "ContactGeneralInfoBlock"
					},
					"bindTo": "ModifiedOn"
				},
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrSchema513dccb2Detail48e0ae95",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab96052b9dTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab96052b9dTabLabelTabCaption"
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
				"name": "UsrSchemac5c2b5caDetaile72978a9",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab96052b9dTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ContactPageV26Tab",
				"values": {
					"order": 2
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
				"name": "JobTabContainer",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 6
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
				"name": "Gender",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "move",
				"name": "INN",
				"parentName": "ContactGeneralInfoBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "SocialStatus",
				"parentName": "group51e8654c265f_gridLayout",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "DecisionRole",
				"parentName": "JobInformationBlock",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "move",
				"name": "Job",
				"parentName": "JobInformationBlock",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "EmploymentType",
				"parentName": "JobInformationBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "Account2",
				"parentName": "JobInformationBlock",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
