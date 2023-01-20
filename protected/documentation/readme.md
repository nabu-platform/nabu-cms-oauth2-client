# Refresh tokens

There is no standardized way in oauth2 to ask for a refresh token, but there is one in openid: https://openid.net/specs/openid-connect-core-1_0.html#OfflineAccess
You should request a scope "offline_access" _and_ include a prompt=consent query parameter in most cases.

Not all providers support this however or have their own ways of doing this.

## Google

With google (before 2021) you had to include "approval_prompt=force" and "access_type=offline" as query parameters.
After 2021 they changed the prompt to the more standardized version and you need to add "prompt=consent" but still add "access_type=offline". The scope offline_access is not supported at the time of writing.

You can currently do this by manually updating the authorization URL to:

```
https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent
```
