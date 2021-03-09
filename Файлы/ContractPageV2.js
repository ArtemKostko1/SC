define("ContractPageV2", [], function() {
	return {
		entitySchemaName: "Contract",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"UsrSchema73df1f8aDetailc1e737d9": {
				"schemaName": "UsrSchema73df1f8aDetail",
				"entitySchemaName": "UsrPaymentDetail",
				"filter": {
					"detailColumn": "UsrDocument",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onEntityInitialized() {
				this.callParent(arguments);
				this.setContractSum();
			},

			getContractSum: async function () {
				return new Promise((resolve, reject) => {
					let contractId = this.$Id;
					let sum = 0;

					let esqGetContractSum = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "Contract"
					});

					esqGetContractSum.addAggregationSchemaColumn("[Contract:Parent:Id].[SpecificationInContract:Contract:Id].FloatValue", Terrasoft.AggregationType.SUM, "ContractSum");
					let contractTypeFilter = esqGetContractSum.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Type", "42B49A15-1D6C-4FA3-B24A-45711BA90CB3");
					let contractSpecificationFilter = esqGetContractSum.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "[Contract:Parent:Id].[SpecificationInContract:Contract:Id].Specification", "157284BF-135F-4D66-B460-3D575C339A5E");

					esqGetContractSum.filters.logicalOperation = Terrasoft.LogicalOperatorType.AND;
					esqGetContractSum.filters.add("contractTypeFilter", contractTypeFilter);
					esqGetContractSum.filters.add("contractSpecificationFilter", contractSpecificationFilter);

					if(this.Terrasoft.isGUID(contractId)) {
						esqGetContractSum.getEntity(contractId, function (response) {
							if (!this.Ext.isEmpty(response) && response.success) {
								sum = response.entity.get("ContractSum");
								resolve(sum);
							}
						}, this);
					}
				});
			},

			setContractSum: async function () {
				let contractId = this.$Id;
				let sum = await this.getContractSum();

				let esqSetContractSum = this.Ext.create("Terrasoft.UpdateQuery", {
					rootSchemaName: "SpecificationInContract"
				});

				esqSetContractSum.filters.addItem(this.Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Contract", contractId));
				esqSetContractSum.filters.addItem(this.Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "[Contract:Id:Contract].Type", "42B49A15-1D6C-4FA3-B24A-45711BA90CB3"));
				esqSetContractSum.filters.addItem(this.Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Specification", "157284BF-135F-4D66-B460-3D575C339A5E"));

				if(!this.Ext.isEmpty(sum) && sum >= 0) {
					esqSetContractSum.setParameterValue("FloatValue", sum, Terrasoft.DataValueType.FLOAT);
					esqSetContractSum.execute(this);
				}

				await this.setPaidUpResidueSum();
			},

			setPaidUpResidueSum: async function () {
				return new Promise((resolve, reject) => {
					let contractId = this.$Id;
					let sum = 0;
					let residue = 0;

					let esqSetPaidUpSum = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "UsrPaymentDetail"
					});
					esqSetPaidUpSum.addColumn("UsrPaymentSum", "UsrPaymentSum");
					esqSetPaidUpSum.addColumn("UsrPaymentStatus", "UsrPaymentStatus");

					let paymentStatusFilter = esqSetPaidUpSum.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "UsrDocument", contractId);
					esqSetPaidUpSum.filters.add("paymentStatusFilter", paymentStatusFilter);

					esqSetPaidUpSum.getEntityCollection(function (response) {
						if (!this.Ext.isEmpty(response) && response.success) {
							response.collection.each(function(item) {

								if(item.values.UsrPaymentSum >= 0) {
									if(item.values.UsrPaymentStatus.value === "02aa546b-619e-41d3-bc85-ee37d91173fd")
										sum += item.values.UsrPaymentSum;

									if(item.values.UsrPaymentStatus.value === "99ab8c39-0b05-448c-988b-fd9578b2a693")
										residue += item.values.UsrPaymentSum;
								}
							});
						}
						this.$UsrPaidUp = sum;
						this.$UsrResidue = residue;
						resolve();
					}, this);
				});
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Typea73f82eb-fd76-494e-bb88-83bc51738df6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Type"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATdc3dab36-4dee-4b8d-831f-14155322008c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrPaidUp",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FLOAT9e44550a-de1b-49bb-911e-dab6c1d1ba6b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrResidue",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP3b96ad60-db8a-47af-9217-136198f71990",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrPaymentForm",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "insert",
				"name": "UsrSchema73df1f8aDetailc1e737d9",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Parent",
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
				"name": "ContractInfoTabContainer",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "ContractVisaTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "remove",
				"name": "Package"
			}
		]/**SCHEMA_DIFF*/
	};
});
