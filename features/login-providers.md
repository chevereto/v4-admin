# 🔌 Login providers

Chevereto includes support for login providers, enabling your users to sign up by connecting an already existan account in a login provider.

## Supported providers

Table below contains all the supported providers and the handle used for it.

| Provider      | Handle        |
| ------------- | ------------- |
| Facebook      | facebook      |
| Twitter       | twitter       |
| Google        | google        |
| VK            | vkontakte     |
| Apple         | apple         |
| Amazon        | amazon        |
| BitBucket     | bitbucket     |
| Discord       | discord       |
| Dribbble      | dribbble      |
| Dropbox       | dropbox       |
| GitHub        | github        |
| GitLab        | gitlab        |
| Instagram     | instagram     |
| LinkedIn      | linkedin      |
| Mailru        | mailru        |
| Medium        | medium        |
| Odnoklassniki | odnoklassniki |
| ORCID         | orcid         |
| Reddit        | reddit        |
| Spotify       | spotify       |
| Steam         | steam         |
| Strava        | strava        |
| Telegram      | telegram      |
| Tumblr        | tumblr        |
| Twitch        | twitchtv      |
| WeChat        | wechat        |
| WordPress     | wordpress     |
| Yandex        | yandex        |
| Yahoo         | yahoo         |
| QQ            | qq            |

## Create an app

👉 Refer to your login provider developer documentation in order to setup your application.

To configure a login provider you will require to create an application at the target provider. The connect/return URL you need to use is:

```plain
https://yourwebsite.com/connect/HANDLE/
```

Where `HANDLE` is the provider handle from the [supported providers](#supported-providers) table.

## Provide app credentials

Enter the application credentials at [Settings > Login providers](../settings/login-providers.md).
