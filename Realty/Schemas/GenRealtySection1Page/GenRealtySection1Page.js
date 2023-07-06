define("GenRealtySection1Page", ["RightUtilities"], function(RightUtilities) {
	return {
		entitySchemaName: "GenRealtySection",
		attributes: {
			"isCanChangeRealtyPrice": {
				"dataValueType": this.Terrasoft.DataValueType.BOOLEAN,
				"value": false,
			},
			"commission": {
				"type": this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"dataValueType": this.Terrasoft.DataValueType.FLOAT,
				"value": 0.0,
				"dependencies": [{
					"columns": ["GenPrice", "GenOfferType"],
					"methodName": "calculateCommissiomAmount",
			}],
			},
			"GenOfferType": {
				"lookupListConfig": {
					"columns": ["GenCommisionPercent"],
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "GenRealtySectionFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "GenRealtySection"
				}
			},
			"GenRealtyViewsDetailScheme": {
				"schemaName": "GenSchema1dd1640cDetail",
				"entitySchemaName": "GenRealtyViews",
				"filter": {
					"detailColumn": "GenRealtySection",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"GenComment": {
				"5215578e-f99c-42c1-9a54-9e5d0b628f0b": {
					"uId": "5215578e-f99c-42c1-9a54-9e5d0b628f0b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "GenPrice"
							},
							"rightExpression": {
								"type": 0,
								"value": 1000,
								"dataValueType": 5
							}
						}
					]
				}
			},
			"GenPrice": {
				"a5a00d63-2723-4265-81b2-9c2a88451dde": {
					"uId": "a5a00d63-2723-4265-81b2-9c2a88451dde",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "isCanChangeRealtyPrice"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			setValidationConfig: function(){
				this.callParent(arguments);
				this.addColumnValidator("GenPrice", this.positiveNumberValidator);
				this.addColumnValidator("GenArea", this.positiveNumberValidator);
			},
			onEntityInitialized: function(argument) {
				this.callParent(argument);
				this.setSecurityAttribute(); 
				this.calculateCommissiomAmount();
			},
			setSecurityAttribute: function(){
				RightUtilities.checkCanExecuteOperation({
					operation:"CanChangeRealtyPrice"
				}, this.getPriceOperationResult, this);
			},
			getPriceOperationResult: function(result){
				this.set("isCanChangeRealtyPrice", result);
			},
			handleClickMeButtonClick: function() {
				this.console.log(this.get("GenName")?.length > 3 ? true : false);
			},
			isClickMeButtonEnabled: function(){
				return this.get("GenName")?.length > 3 ? true : false;
			},
			calculateCommissiomAmount: function(){
				if(!this.get("GenPrice") && this.get("GenOfferType")) return;
				
				this.console.log(this.get("GenOfferType"));
				this.console.log(this.get("GenPrice"));
				
				this.set("commission", this.get("GenOfferType").GenCommisionPercent * this.get("GenPrice") / 100);
			},
			positiveNumberValidator: function(value, column) {
				return {
					invalidMessage: value > 0 ? "" : this.get("Resources.Strings.GenNegativeNumberError"),
				};
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "GenName0d072de7-1c1e-4e89-ade5-138fed57c1be",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "GenName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "INTEGEReeb054b5-e386-487a-aa76-5954ed3d5726",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "GenPrice",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER6f73ecb0-1ac1-4ba5-814c-de88e9a07613",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "GenArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ClickMeButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.GenClickMeButtonCaption"
					},
					"click": {
						"bindTo": "handleClickMeButtonClick"
					},
					"enabled": {
						"bindTo": "isClickMeButtonEnabled"
					},
					"style": "green",
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CommissionField",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "commission",
					"enabled": false,
					"caption": {bindTo: "Resources.Strings.GenCommisionCaption"}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP5fe94425-01bf-4d2c-8559-73b83ee49a7d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "GenType",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPa4282889-8e10-4bde-a1e9-98997815a9f0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "GenOfferType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGcb8305bd-2f67-4661-98f4-937c862ff29b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "GenComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GenViewsTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.GenViewsTabTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GenRealtyViewsDetailScheme",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "GenViewsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
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
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "GenNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
