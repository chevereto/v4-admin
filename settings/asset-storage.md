# Asset storage

`/dashboard/settings/asset-storage`

## Storage values (common)

### Bucket

The bucket where the files will be stored.

| Type   | Description     |
| ------ | --------------- |
| String | The bucket name |

### Key

The API key to access storage.

| Type   | Description |
| ------ | ----------- |
| String | Public key  |

### Secret

The API secret to access storage.

| Type   | Description |
| ------ | ----------- |
| String | Secret key  |

### Storage capacity

The capacity allowed for the storage.

| Type   | Example |
| ------ | ------- |
| String | 20 GB   |

### URL

The URL that will be mapped to the storage.

| Type   | Example                                       |
| ------ | --------------------------------------------- |
| String | `https://storage1.demo.chevereto.com/bucket/` |

::: warning
For the example above, a file at `https://storage1.demo.chevereto.com/bucket/example.jpg` should be resolving.
:::

## Alibaba Cloud OSS

Storage type: `oss`

### Endpoint

Alibaba Cloud OSS requires to provide the endpoint.

| Type   | Description                |
| ------ | -------------------------- |
| String | Alibaba Cloud OSS endpoint |

## Amazon S3

Storage type: `s3`

Amazon S3 (AWS S3) requires to provide the region. If your S3 provider isn't AWS you have to use [S3 Compatible](#s3-compatible).

| Type   | Description      |
| ------ | ---------------- |
| String | Amazon S3 region |

## Backblaze B2 (legacy)

Storage type: `b2`

Uses common settings, but Backblaze B2 names key/secret in differently.

| Value  | Description            |
| ------ | ---------------------- |
| Key    | Account ID             |
| Secret | Master Application Key |

## FTP

Storage type: `ftp`

FTP requires other values.

| Value    | Description            | Example                         |
| -------- | ---------------------- | ------------------------------- |
| Server   | IP address or hostname | `127.0.0.1` `ftp.chevereto.com` |
| Path     | Server FTP path        | `/path/in/server/`              |
|          |
| User     | FTP user               | username                        |
| Password | FTP password           | password                        |

## Google Cloud

Storage type: `gcloud`

Google Cloud requires to provide the key in JSON format.

### Private key

| Type   | Description           |
| ------ | --------------------- |
| String | Google Cloud JSON key |

## Local

Storage type: `local`

Local requires to provide the local path.

| Type   | Description |
| ------ | ----------- |
| String | Local path  |

## Microsoft Azure

Storage type: `azure`

Microsoft Azure requires other values.

| Value    | Description                 |
| -------- | --------------------------- |
| Account  | Microsoft Azure AccountName |
| Key      | Microsoft Azure Accountkey  |
| Endpoint | Microsoft Azure endpoint    |

## OpenStack

Storage type: `openstack`

OpenStack requires other values.

| Value        | Description                |
| ------------ | -------------------------- |
| Service name | For example, `swift`       |
| Identity URL | Identity API endpoint      |
| Username     | The username               |
| Password     | The password               |
| Region       | Storage region             |
| Container    | Storage container          |
| Tenant id    | Tenant id (account id)     |
| Tenant name  | Tenant name (account name) |

## S3 compatible

Storage type: `s3compatible`

S3 compatible requires to provide the region and the endpoint.

| Value    | Description      |
| -------- | ---------------- |
| Region   | Storage region   |
| Endpoint | Storage endpoint |

## SFTP

Storage type: `sftp`

Same as [FTP](#ftp), but using the [SSH File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) protocol.
