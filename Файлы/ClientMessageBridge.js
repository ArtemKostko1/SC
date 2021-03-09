define("ClientMessageBridge", [], function() {
	return {
		methods: {
			messages: {
				UsrNotification: {
					mode: Terrasoft.MessageMode.BROADCAST,
					direction: Terrasoft.MessageDirectionType.PUBLISH
				},
			},
			
			init: function() {
				this.callParent(arguments);
				this.addMessageConfig({
					sender: "UsrNotification",
					messageName: "UsrNotification"
				});
			},
			
			beforePublishMessage: function (sandboxMessageName, webSocketBody) {
				this.callParent(arguments);
			}
		}
	};
});
