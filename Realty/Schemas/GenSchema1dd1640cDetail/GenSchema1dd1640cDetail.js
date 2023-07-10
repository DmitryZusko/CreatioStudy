define("GenSchema1dd1640cDetail", [], function() {
	return {
		entitySchemaName: "GenRealtyViews",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
		methods: {
			init: function() {
				this.callParent(arguments);
				this.subscribeForWebsocketEvents();
			},
			destroy: function() {
				this.callParent(arguments);
				this.unsubscribeForWebsocketEvents();
			},
			subscribeForWebsocketEvents: function() {
				this.Terrasoft.ServerChannel.on(this.Terrasoft.EventName.ON_MESSAGE,
					this.onWebsocketMessage, this);
			},
			unsubscribeForWebsocketEvents: function() {
				this.Terrasoft.ServerChannel.un(this.Terrasoft.EventName.ON_MESSAGE,
					this.onWebsocketMessage, this);
			},
			
			onWebsocketMessage: function(scope, message) {
				if (!message || !message.Header) return;
				if (message.Header.Sender !== "AutoAddViews") return;
				
				this.console.log("here");
				this.reloadGridData();
			},
		},
	};
});
