# System

`/dashboard/settings/system`

## Cache time seconds

Determines the cache TTL (time to live) in seconds. Use zero (`0`) to disable caching.

| Type    | Default |
| ------- | ------- |
| Integer | 0       |

## Automatic updates check

Toggles the automatic updates check. When enabled, your installation will automatically check for new updates.

| Value    | Effect                          |
| -------- | ------------------------------- |
| Enabled  | Enable automatic updates check  |
| Disabled | Disable automatic updates check |

## Display available updates notification

Toggles the display of a system notification on update available.

| Value    | Effect                                 |
| -------- | -------------------------------------- |
| Enabled  | Enable available updates notification  |
| Disabled | Disable available updates notification |

## Dump update query

Toggles the display of the update query. When enabled, the update query will be shown and not executed.

::: warning
This is automatically enabled if the installation holds more than 1,000,000 (1M) images. This is because is safer to run the query directly in the database console.
:::

| Value    | Effect                                                      |
| -------- | ----------------------------------------------------------- |
| Enabled  | Dump the update query (queries should be manually executed) |
| Disabled | Run the update query (queries will be executed directly)    |

## CDN

Toggles usage of [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) (Content delivery network).

| Value    | Effect      |
| -------- | ----------- |
| Enabled  | Enable CDN  |
| Disabled | Disable CDN |

## CDN URL

*Applies only if `CDN` is set to `Enabled`.

Determines the CDN for the website. The CDN URL will be used for all local static resources.

| Type   | Description        |
| ------ | ------------------ |
| String | The CDN (pull) URL |

## Maintenance

Toggles maintenance mode.

When enabled, the website will show a maintenance message and no actions will be allowed.

| Value    | Effect                   |
| -------- | ------------------------ |
| Enabled  | Enable maintenance mode  |
| Disabled | Disable maintenance mode |

## Crypt salt

The crypt salt used to encode DB integer IDs to alphanumeric representations.

::: warning
This value is shown only for reference. It shouldn't be edited.
:::

| Type   | Example   |
| ------ | --------- |
| String | bnnnfer98 |

## Debug errors

Toggles debug error reporting. When enabled, Chevereto will display the errors to the screen.

| Value    | Effect              |
| -------- | ------------------- |
| Enabled  | Enable debug error  |
| Disabled | Disable debug error |

## Debug level

Determines the debug level for error reporting.

| Value                            | Effect                                         |
| -------------------------------- | ---------------------------------------------- |
| None                             | No debug output                                |
| Error log                        | Log errors to the server error log             |
| Print errors without error log   | Display errors on screen without logging       |
| Print and log errors             | Display errors on screen and log them          |

## Enable xrDebug

Toggles integration with [xrDebug](https://xrdebug.com/) for sending debug messages to an xrDebug server. Refer to the documentation for setup instructions.
