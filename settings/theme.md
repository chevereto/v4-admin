# Theme

`/dashboard/settings/theme`

## Theme select

Determines the theme to use.

## Default palette

Determines the default palette to use.

| Value  | Effect                          |
| ------ | ------------------------------- |
| Select | Use selected palette as default |

## Default font

Determines the default font to use.

| Value  | Effect               |
| ------ | -------------------- |
| Select | Font used by default |

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
