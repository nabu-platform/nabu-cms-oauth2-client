Vue.service("oauth2", {
	methods: {
		silentLogin: function(uri) {
			var promise = this.$services.q.defer();
			var login = function(uri) {
				var iframe = document.createElement("iframe");
				iframe.style.display = "none";
				iframe.src = uri;
				iframe.onload = function () {
					console.log("Iframe loaded", iframe.src, iframe);
				};
				document.body.appendChild(iframe);
			}
			this.$services.swagger.execute("nabu.cms.oauth2.client.web.rest.provider.getSilentRedirectUri").then(function(result) {
				if (result && result.uri) {
					login(uri);
				}
				else {
					promise.resolve();
				}
			}, promise);
			return promise;
		}
	}	
});