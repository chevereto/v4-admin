# Files

`/dashboard/files`

At **Dashboard Files** you can administer all the files uploaded to the system. It provides a full-screen grid listing of every file across all users, with tools to sort, browse, moderate, and bulk-manage content.

## Listing

Files are displayed as a responsive image grid. Each item shows inline controls on hover: a delete button, a flag button, and a checkbox for selection.

The listing supports pagination and loads additional files as you scroll or use the **Load more** button.

## Sorting

Use the sort menu next to the **Files** heading to change the order of the listing.

| Option      | Description                                   |
| ----------- | --------------------------------------------- |
| Most recent | Files ordered from newest to oldest (default) |
| Oldest      | Files ordered from oldest to newest           |
| Most viewed | Files ordered by total view count             |
| Most liked  | Files ordered by total like count             |

## Per-file controls

Each file in the grid exposes the following controls on hover:

| Control  | Description                                             |
| -------- | ------------------------------------------------------- |
| 🗑️ Delete | Removes the file permanently (confirmation required)    |
| 🚩 Flag   | Marks the file as safe or unsafe for content moderation |
| ☐ Select | Adds the file to the current selection for bulk actions |

## Bulk selection

Click **All** in the listing toolbar to select every visible file, or check individual items using their selection checkbox. Use **Clear** (or press `Z`) to deselect everything.

| Action          | Keyboard shortcut |
| --------------- | ----------------- |
| Select all      | `.`               |
| Clear selection | `Z`               |

## Actions

With one or more files selected, the **Actions** menu becomes available. The following bulk operations are supported:

| Action          | Key   | Description                                                    |
| --------------- | ----- | -------------------------------------------------------------- |
| Delete          | `Del` | Permanently removes all selected files (confirmation required) |
| Assign category | `C`   | Sets a category on all selected files                          |
| Flag as safe    | `V`   | Marks selected files as safe content                           |
| Flag as unsafe  | `F`   | Marks selected files as not safe for work (NSFW)               |
| Approve         | —     | Approves selected files when upload moderation is enabled      |

💡 Approval actions are only shown when the system is configured to require upload moderation. See [File uploads settings](../settings/file-uploads.md) for details.

## Assign category

To assign a category to one or more files:

1. Select the target files using their checkboxes or click **All**.
2. Open the **Actions** menu and choose **Assign category**, or press `C`.
3. Pick a category from the dropdown and confirm.

The category will be applied to all selected files at once.

## Moderation

Dashboard Files is the primary place to review and act on flagged or pending content across the entire system. Administrators can flag content as safe or unsafe, and approve or remove content in bulk.

| Moderation action | Effect                                                     |
| ----------------- | ---------------------------------------------------------- |
| Flag as safe      | Clears any NSFW flag; content appears normally in listings |
| Flag as unsafe    | Marks content as NSFW; visibility follows content settings |
| Approve           | Publishes content held in the moderation queue             |
| Delete            | Permanently removes content from the system                |

💡 NSFW visibility in listings is controlled by [Content settings](../settings/content.md).
