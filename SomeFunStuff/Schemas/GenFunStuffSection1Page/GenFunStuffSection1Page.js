define("GenFunStuffSection1Page", [], function() {
	return {
		entitySchemaName: "GenFunStuffSection",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "GenFunStuffSectionFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "GenFunStuffSection"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			mathAdd: function() {
				this.set("GenResult", this.get("GenFirstNumber") + this.get("GenSecondNumber"));
			},
			mathSubstract: function() {
				this.set("GenResult", this.get("GenFirstNumber") - this.get("GenSecondNumber"));
			},
			mathMultiply: function() {
				this.set("GenResult", this.get("GenFirstNumber") * this.get("GenSecondNumber"));
			},
			mathDivide: function() {
				this.set("GenResult", this.get("GenFirstNumber") / this.get("GenSecondNumber"));
			},
			mathRoot: function() {
				this.set("GenResult", Math.pow(this.get("GenFirstNumber"), 1/this.get("GenSecondNumber")));
			},
			mathPower: function() {
				
				this.set("GenResult", Math.pow(this.get("GenFirstNumber"), this.get("GenSecondNumber")));
			},
			handleMultiply(btn, opt, misc, tag){
				this.set("GenResult", this.get("GenResult") * tag);
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "GenNameb37eae4d-ab26-409e-9dae-88c11d5759da",
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
				"name": "GenMathAddButton",
				"values": {
					"itemType": 5,
					"caption": "+",
					"click": {
						"bindTo": "mathAdd"
					},
					"style": "default",
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GenMathSubstractButton",
				"values": {
					"itemType": 5,
					"caption": "-",
					"click": {
						"bindTo": "mathSubstract"
					},
					"style": "blue",
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 8,
						"row": 0,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GenMathMultiplyButton",
				"values": {
					"itemType": 5,
					"caption": "*",
					"click": {
						"bindTo": "mathMultiply"
					},
					"style": "green",
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 10,
						"row": 0,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GenMathDivideButton",
				"values": {
					"itemType": 5,
					"caption": "/",
					"click": {
						"bindTo": "mathDivide"
					},
					"style": "grey",
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GenMathRootButton",
				"values": {
					"itemType": 5,
					"caption": "√",
					"click": {
						"bindTo": "mathRoot"
					},
					"style": "red",
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 14,
						"row": 0,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GenMathPowerButton",
				"values": {
					"itemType": 5,
					"caption": "^",
					"click": {
						"bindTo": "mathPower"
					},
					"style": "transparent",
					"layout": {
						"colSpan": 2,
						"rowSpan": 1,
						"column": 16,
						"row": 0,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GenFirstNumber29e27275-3d91-405c-bf79-a5ddb6fa4d7a",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "GenFirstNumber"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GenSecondNumber70edbbed-24e9-4f0f-b9ee-c8dd4e977b80",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "GenSecondNumber"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GenResult4534e8e5-acde-480c-8b85-3253059a5cb7",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "GenResult",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GenTenMultyplyButton",
				"values": {
					"itemType": 5,
					"caption": "x10",
					"click": {
						"bindTo": "handleMultiply",
					},
					"tag": 10,
					"style": "green",
					"layout": {
						"colSpan": 3,
						"rowSpan": 1,
						"column": 4,
						"row": 3,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "GenHundredMultyplyButton",
				"values": {
					"itemType": 5,
					"caption": "x100",
					"click": {
						"bindTo": "handleMultiply"
					},
					"tag": 100,
					"style": "green",
					"layout": {
						"colSpan": 3,
						"rowSpan": 1,
						"column": 10,
						"row": 3,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "GenThousandMultyplyButton",
				"values": {
					"itemType": 5,
					"caption": "x1000",
					"click": {
						"bindTo": "handleMultiply"
					},
					"tag": 1000,
					"style": "green",
					"layout": {
						"colSpan": 3,
						"rowSpan": 1,
						"column": 16,
						"row": 3,
						"layoutName": "Header"
					}
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
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
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
