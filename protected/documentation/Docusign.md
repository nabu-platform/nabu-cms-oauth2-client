# Docusign

JWT flow documentation: https://developers.docusign.com/platform/auth/jwt/jwt-get-token/

Fill in:

- token endpoint
	- demo: https://account-d.docusign.com/oauth/token
	- live: https://account.docusign.com/oauth/token
- client id: integration key
- jwtIssuer: integration key
- jwtSubject: user id
- jwtAudience
	- demo: account-d.docusign.com
	- live: account.docusign.com


## Error: consent_required

Before you can use an integration, you need consent: https://www.docusign.com/blog/developers/oauth-jwt-granting-consent