# External services

`/dashboard/settings/external-services`

## Comments API

Determines the comment API to use.

| Value           | Effect                                            |
| --------------- | ------------------------------------------------- |
| Disqus          | Use [Disqus](https://disqus.com/) comment service |
| JavaScript/HTML | Use any HTML comment provider                     |

## Disqus shortname

*Applies only if `Comments API` is set to `Disqus`.

Determines the Disqus shortname.

| Type   | Value            |
| ------ | ---------------- |
| String | Disqus shortname |

## Disqus secret key

*Applies only if `Comments API` is set to `Disqus`.

Determines the Disqus secret key.

| Type   | Value             |
| ------ | ----------------- |
| String | Disqus secret key |

## Disqus public key

*Applies only if `Comments API` is set to `Disqus`.

Determines the Disqus public key.

| Type   | Value             |
| ------ | ----------------- |
| String | Disqus public key |

## Comment code

*Applies only when `Comments API` is set to `JavaScript/HTML`

Determines the HTML comment code, which will get added to image view.

| Type   | Value |
| ------ | ----- |
| String | HTML  |

## Analytics code

Determines the analytics HTML code that will track stats for your website. This is where you can place the tracking code provided by Google Analytics, Heap, Yandex.Metrica, [Matomo](https://matomo.org/), Mixpanel, etc.

Code you enter in this section will be printed in all views.

| Type   | Description |
| ------ | ----------- |
| String | HTML        |

## Akismet spam protection

Toggles usage of [Akismet](https://akismet.com/) service.

| Value    | Effect          |
| -------- | --------------- |
| Enabled  | Enable Akismet  |
| Disabled | Disable Akismet |

## Akismet API key

*Applies only if `Akismet spam protection` is `Enabled`.

| Type   | Description     |
| ------ | --------------- |
| String | Akismet API key |

## StopForumSpam spam protection

Toggles usage of [Stop Forum Spam](https://stopforumspam.com/) service.

| Value    | Effect                  |
| -------- | ----------------------- |
| Enabled  | Enable Stop Forum Spam  |
| Disabled | Disable Stop Forum Spam |

## CAPTCHA

Toggles usage of [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA).

| Value    | Effect          |
| -------- | --------------- |
| Enabled  | Enable CAPTCHA  |
| Disabled | Disable CAPTCHA |

## CAPTCHA API

*Applies only if `CAPTCHA` is set to `Enabled`.

Determines the CAPTCHA API.

| Value        | Effect           |
| ------------ | ---------------- |
| reCAPTCHA v2 | Use reCAPTCHA v2 |
| reCAPTCHA v3 | Use reCAPTCHA v3 |
| hCaptcha     | Use hCaptcha     |

## CAPTCHA site key

*Applies only if `CAPTCHA` is set to `Enabled`.

Determines the CAPTCHA site key.

| Type   | Values           |
| ------ | ---------------- |
| String | CAPTCHA site key |

## CAPTCHA secret key

*Applies only if `CAPTCHA` is set to `Enabled`.

Determines the CAPTCHA secret key.

| Type   | Values             |
| ------ | ------------------ |
| String | CAPTCHA secret key |

## CAPTCHA threshold

*Applies only if `CAPTCHA` is set to `Enabled`.

Determines the CAPTCHA threshold. This is how many failed attempts are accepted before asking for CAPTCHA.

| Value | Effect                                    |
| ----- | ----------------------------------------- |
| 0     | Always display CAPTCHA                    |
| n     | Display CAPTCHA after (n) failed attempts |

## Force CAPTCHA on contact page

*Applies only if  CAPTCHA` is set to `Enabled`.

Toggle showing (forced) CAPTCHA on contact page.

| Value    | Effect                                 |
| -------- | -------------------------------------- |
| Enabled  | Enable forced CAPTCHA on contact page  |
| Disabled | Disable forced CAPTCHA on contact page |

## Project Arachnid

Toggles usage of [Project Arachnid](https://projectarachnid.ca/) service.

| Value    | Effect                   |
| -------- | ------------------------ |
| Enabled  | Enable Project Arachnid  |
| Disabled | Disable Project Arachnid |

## Project Arachnid API Key

*Applies only if `Project Arachnid` is `Enabled`.

Determines the Project Arachnid API key.

| Type   | Value                    |
| ------ | ------------------------ |
| String | Project Arachnid API key |

## ModerateContent

Toggles usage of [ModerateContent](https://www.moderatecontent.com/) service.

| Value    | Effect                  |
| -------- | ----------------------- |
| Enabled  | Enable ModerateContent  |
| Disabled | Disable ModerateContent |

## ModerateContent API Key

*Applies only if `ModerateContent` is `Enabled`.

Determines the ModerateContent API key.

| Type   | Value                   |
| ------ | ----------------------- |
| String | ModerateContent API key |

## Automatic approve

*Applies only if `ModerateContent` is `Enabled`.

Toggles automatic approve for content approved by ModerateContent.

| Value    | Effect                                    |
| -------- | ----------------------------------------- |
| Enabled  | Enable ModerateContent automatic approve  |
| Disabled | Disable ModerateContent automatic approve |

## Block content

*Applies only if `ModerateContent` is `Enabled`.

Determines which content will be blocked by ModerateContent.

| Value          | Effect                       |
| -------------- | ---------------------------- |
| Disabled       | Don't block any content      |
| Adult          | Block adult content          |
| Teen and adult | Block adult and teen content |

## Flag NSFW

*Applies only if `ModerateContent` is `Enabled`.

Determines which content will get NSFW flagged by ModerateContent.

| Value          | Effect                      |
| -------------- | --------------------------- |
| Disabled       | Don't flag any content      |
| Adult          | Flag adult as NSFW          |
| Teen and adult | Flag adult and teen as NSFW |
