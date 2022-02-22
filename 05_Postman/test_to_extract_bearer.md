pm.environment.set("bearer", pm.response.json().token.split(" ").pop(-1));
