exports.definition = {
    config : {
        "columns": {
            "id": "int",
            "base": "string",
            "championships": "int",
            "chassis": "string",
            "engine": "string",
            "full_name": "string",
            "name": "string",
            "start_year": "int",
            "team_principal": "string",
            "technical_chief": "string",
            "tyres": "string"
        },
        "defaults": {
            "championships": 0
        },
        "adapter": {
            "collection_name": "teams",
            "db_name": "f1experience",
            "db_file": "f1experience.sqlite",
            "idAttribute": "id",
            "type": "sql"
        }
    }
}
