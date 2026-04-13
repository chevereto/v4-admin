# Login providers

Login providers let your users sign in or register using an existing account from a third-party service such as Google, GitHub, or Apple.

## Supported providers

The table below lists all supported providers and the handle used to identify each one in callback URLs.

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

Each provider requires you to register an application in their developer portal before Chevereto can use it. Refer to the provider's developer documentation for setup instructions.

When configuring the application, set the callback (redirect) URL to:

```plain
https://yourwebsite.com/connect/HANDLE/
```

Replace `HANDLE` with the provider's handle from the [supported providers](#supported-providers) table. For example, for Google the URL would be `https://yourwebsite.com/connect/google/`.

## Provide app credentials

Once the application is created, enter the credentials it provides at [Settings > Login providers](../settings/login-providers.md).
