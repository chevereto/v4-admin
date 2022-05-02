# Routing

`/dashboard/settings/routing`

## User routing

Determines the user routing.

| Type   | Examples    |
| ------ | ----------- |
| String | `user`, `u` |

## Image routing

Determines the image routing.

| Type   | Examples     |
| ------ | ------------ |
| String | `image`, `i` |

## Album routing

Determines the album routing.

| Type   | Examples     |
| ------ | ------------ |
| String | `album`, `a` |

## Root routing

Determine which content to resolve on root route.

| Value | Effect                          |
| ----- | ------------------------------- |
| User  | Root resolves to user `/user`   |
| Album | Root resolves to album `/album` |
| Image | Root resolves to image `/image` |

## SEO image URLs

Toggles image SEO URLs.

When enabled, the image URL will contain its title, like `/image/image-title.<id>`.

| Value    | Effect                 |
| -------- | ---------------------- |
| Enabled  | Enable SEO image URLs  |
| Disabled | Disable SEO image URLs |

## SEO album URLs

Toggles album SEO URLs.

When enabled, the album URL will contain its title, like `/album/album-name.<id>`.

| Value    | Effect                 |
| -------- | ---------------------- |
| Enabled  | Enable SEO album URLs  |
| Disabled | Disable SEO album URLs |
