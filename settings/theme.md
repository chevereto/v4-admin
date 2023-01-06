# Theme

`/dashboard/settings/theme`

## Theme select

Determines the theme to use.

## Default palette

Determines the default palette to use.

| Value  | Effect                          |
| ------ | ------------------------------- |
| Select | Use selected palette as default |

## Image load max. filesize (MB)

Determines the maximum image file size to load. Images bigger than this value will require "click to load" full resolution image.

| Type    | Recommended |
| ------- | ----------- |
| Integer | 3           |

## Enable download button

Toggles the display of a download button for image view.

| Value    | Effect                                         |
| -------- | ---------------------------------------------- |
| Enabled  | Enable download button to appear on image view |
| Disabled | Don't show the image download button           |

## Enable right click on image

Toggles the ability to right click on the images. This controls the display of the context menu for the `<image>` tag.

| Value    | Effect                                    |
| -------- | ----------------------------------------- |
| Enabled  | Enable to right click on images (save-as) |
| Disabled | Disable right click on images             |

## Enable show Exif data

Toggles the display of image Exif data.

| Value    | Effect                            |
| -------- | --------------------------------- |
| Enabled  | Show image Exif data              |
| Disabled | Don't show (hide) image Exif data |

## Image first tab

Determine the first tab on image page.

| Value  | First tab                      |
| ------ | ------------------------------ |
| Embeds | Embed codes                    |
| About  | About (description, Exif)      |
| Info   | Admin only (extensive details) |

## Enable social share

Toggles the social share buttons for sharing the image.

| Value    | Effect                                 |
| -------- | -------------------------------------- |
| Enabled  | Enable social share buttons for image  |
| Disabled | Disable social share buttons for image |

## Enable embed codes (content)

Toggles the display of embed codes.

| Value    | Effect                        |
| -------- | ----------------------------- |
| Enabled  | Show embed codes              |
| Disabled | Don't show (hide) embed codes |

## Not safe content checkbox in uploader

Toggles the display of the NSFW checkbox.

| Value    | Effect                           |
| -------- | -------------------------------- |
| Enabled  | Enable display of NSFW checkbox  |
| Disabled | DIsable display of NSFW checkbox |

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

## Custom CSS code

Custom `CSS` code that will get added to the HTML. Example:

```css
body {
    color: red;
}
a {
    text-decoration: underline;
}
```

## Custom JS code

Custom `JS` code that will get added to the HTML. Example:

```js
console.log('argument')
```
