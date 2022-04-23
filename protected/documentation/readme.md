TODO: need default visualization

- enrich user: we set a property on the web application node where the key is the spec name, the value is the service implementation

- auto deployment actions: if there are deployment actions in non-project folders, we can add them to our project? (basically copy? or store the results locally in the folder? or...?)
	- need auto deployment of web application nodes and the configuration!
	- need auto deployment of oauth2 providers (only apply client id of not available in target environment)

- add "active" boolean to provider in case you want to disable for some reason! (can also disable in a target environment after deployment, it is not overwritten)

- page builder: need a tab (in the overall settings) to manage oauth2
	- add one of the existing providers
	- add a new openid provider (with discovery uri)
	- add a new oauth2 provider
	- show the redirect uri so it can be registered
- for each provider (by name) have a default visualization button
	- add this to the web component, register it globally so it can be injected as needed
	- need to add default logos etc as per the branding requirements of the provider