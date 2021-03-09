define("UsrSchema73df1f8aDetail", [/*"ProcessModuleUtilities"*/], function(/*ProcessModuleUtilities*/) {
	return {
		entitySchemaName: "UsrPaymentDetail",
		/*messages: {
			UsrNotification: {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
		},*/
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		methods: {
			addRecordOperationsMenuItems: function(toolsButtonMenu) {
				const processRecordMenuItem = this.getProcessRecordMenuItem();
				if (processRecordMenuItem) {
					toolsButtonMenu.addItem(processRecordMenuItem);
					toolsButtonMenu.addItem(this.getButtonMenuSeparator());
				}
				this.callParent(arguments);
			},
			getProcessRecordMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: "Пересоздать оплаты",
					Click: {"bindTo": "RecreatePaymentsClick"},
					Visible: true
				});
			},

			subscribeSandboxEvents: function () {
				this.callParent();
				this.sandbox.subscribe("UsrNotification", () => {
					Terrasoft.utils.showMessage({
						caption: "Оплаты не созданы. Документ полностью оплачен",
						buttons: [Terrasoft.MessageBoxButtons.OK.returnCode],
						defaultButton: 0,
						scope: this
					});
				});
			},

			RecreatePaymentsClick: function () {
				ProcessModuleUtilities.executeProcess({
					sysProcessName: "UsrRecreatePayments",
					parameters: {
						ContractId: this.$Id
					}
				});
			},
		}
	};
});
