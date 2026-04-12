# Albums

`/dashboard/albums`

At **Dashboard Albums** you can administer all the albums created in the system. It provides a full-screen grid listing of every album across all users, with tools to sort, browse, and bulk-manage content.

## Listing

Albums are displayed as a responsive grid. Each card shows the album cover image (or a placeholder when the album has no files), the album name, and the file count. Share and like buttons are visible on each card.

## Sorting

Use the sort menu next to the **Albums** heading to change the order of the listing.

| Option      | Description                                    |
| ----------- | ---------------------------------------------- |
| Most recent | Albums ordered from newest to oldest (default) |
| Oldest      | Albums ordered from oldest to newest           |
| Most viewed | Albums ordered by total view count             |
| Most liked  | Albums ordered by total like count             |
| A-Z         | Albums ordered alphabetically by name          |

## Per-album controls

Each album card exposes the following controls on hover:

| Control | Description                                                            |
| ------- | ---------------------------------------------------------------------- |
| Delete  | Removes the album and its contents permanently (confirmation required) |
| Select  | Adds the album to the current selection for bulk actions               |

## Bulk selection

Click **All** in the listing toolbar to select every visible album, or check individual items using their selection checkbox. When items are selected the toolbar shows the count and a **Clear** button. Press `Z` to deselect everything.

| Action          | Keyboard shortcut |
| --------------- | ----------------- |
| Select all      | `.`               |
| Clear selection | `Z`               |

## Actions

With one or more albums selected, the **Actions** menu becomes available. The following bulk operations are supported:

| Action | Key   | Description                                                     |
| ------ | ----- | --------------------------------------------------------------- |
| Delete | `Del` | Permanently removes all selected albums (confirmation required) |

💡 Deleting an album removes the album record and all files it contains. This action cannot be undone.

## Album view

Clicking an album card opens the album page, where an administrator can browse its files and use the full set of per-file controls including edit, move, flag, and delete. The album page also exposes top-level buttons to edit album details, create a sub-album, delete the album, and share it.
