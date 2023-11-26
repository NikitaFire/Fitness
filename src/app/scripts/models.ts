/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "ProductModel": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "price": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "sizes": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "rating": {
                "type": "number"
            },
            "availability": {
                "type": "boolean"
            },
            "photos": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "originalPrice": {
                "type": "string"
            },
            "colors": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            }
        }
    },
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Observable": {
        "type": "Observable"
    }
};
/**
 * Data storage
 */
export const _aioDefStorageValues = {
    variables: {
    },
    storages: {
    },
    functions: {
    }
}