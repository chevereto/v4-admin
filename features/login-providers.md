# 🔌 Login providers

Chevereto includes support for login providers, enabling your users to sign up by connecting an already existan account in a login provider.

## Supported providers

* Amazon
* BitBucket
* Discord
* Dribbble
* Dropbox
* Facebook
* GitHub
* GitLab
* Google
* Instagram
* LinkedIn
* Mailru
* Medium
* Odnoklassniki
* ORCID
* QQ
* Reddit
* Spotify
* Stack
* Steam
* Strava
* Telegram
* Tumblr
* Twitch
* Twitter
* VK
* WeChat
* WordPress
* Yahoo
* Yandex

## Create an app

To configure a login provider you will require to create an application at the target provider. When doing that keep in mind that the connect/return URL you need to use is `https://yourwebsite.com/connect`.

👉 Refer to your login provider developer documentation in order to setup your application.

## Provide app credentials

Once you get the application at your provider you have to simply enter these credentials at [Settings > Login providers](../settings/login-providers.md).
