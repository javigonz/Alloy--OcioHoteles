exports.definition = {
	config: {
		columns: {
			"id": "string",
		    "nombre": "string",
		    "descripcion_corta": "string",
		    "ofertas": "object"
		},
		adapter: {
			type: "sql",
			collection_name: "model_hotels"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};