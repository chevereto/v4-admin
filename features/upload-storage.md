# Upload storage

Upload storage lets you offload user-uploaded files to one or more external servers. This reduces the load on your origin server, improves reliability, and makes it easier to scale traffic for uploaded assets.

::: tip Asset storage
Check the [Site storage](../settings/site-storage.md) documentation to control where website assets (backgrounds, avatars, etc.) are stored.
:::

## How it works

Upload storage works by routing file uploads to a configured external server. That server exposes the files over HTTP, so users and visitors can access uploaded images directly without hitting your origin.

## Storage URL

The storage server must provide a publicly accessible URL for reading files. Check your service provider's documentation for the correct URL format.

Chevereto uses the Storage URL as a base URL to map stored files to their public location.

**Amazon S3 with direct storage:**

| Property     | Value                                        |
| ------------ | -------------------------------------------- |
| Bucket       | my-bucket                                    |
| Storage URL  | https://s3.amazonaws.com/my-bucket/          |
| Stored image | my-bucket/image.jpg                          |
| Mapped URL   | https://s3.amazonaws.com/my-bucket/image.jpg |

::: warning Use a CNAME
It is recommended to use a URL that matches your own domain. Take advantage of a [CNAME record](https://en.wikipedia.org/wiki/CNAME_record) to avoid exposing your storage provider's domain directly.
:::

**Amazon S3 with folder-based storage and custom CNAME (`img.domain.com`):**

| Property     | Value                                                 |
| ------------ | ----------------------------------------------------- |
| Bucket       | my-bucket                                             |
| Storage URL  | https://img.domain.com/my-bucket/                     |
| Stored image | /my-bucket/2020/10/06/image.jpg                       |
| Mapped URL   | https://img.domain.com/my-bucket/2020/10/06/image.jpg |

## Storage URL with CDN

To use a CDN, create a pull zone at your CDN provider pointing to the origin Storage URL.

For Amazon S3, the origin URL looks like:

```text
https://s3.amazonaws.com/my-bucket/
```

Your CDN will provide a URL such as:

```text
https://pullzone-url.at.cdn-service.com/
```

Adding a CNAME record for the CDN URL lets you use a custom Storage URL like:

```text
https://s3-cdn.domain.com/
```

## Lifecycle settings

::: danger Disable lifecycle policies
Some cloud storage providers offer a "lifecycle" feature that retains copies of all file states (modified, deleted, etc.). This can significantly increase your storage costs.

Always disable lifecycle policies on your storage bucket. If prompted, select **keep only the last version of the file**.
:::

## Providers

### Alibaba Cloud OSS

The Alibaba Cloud OSS API uploads images to [Alibaba Cloud (Aliyun) Object Storage System (OSS)](https://www.alibabacloud.com/product/oss/).

### Amazon S3

The Amazon S3 API uploads images to an [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3) bucket. An [Amazon Web Services](https://aws.amazon.com/) (AWS) account is required.

**Setup steps:**

1. Create access credentials in the [IAM console](https://console.aws.amazon.com/iam/home?#users):
   - Click **Create users** and create a new user
   - Under permissions, click **Add permissions**, select **Attach policies directly**, and attach **AmazonS3FullAccess**
   - Click **Create access key** and select **Third-party service**
   - Save the **username**, **Access Key**, and **Secret Access Key**

2. Create a bucket in the [S3 console](https://console.aws.amazon.com/s3):
   - Click **Create bucket**, then choose an **AWS Region** and **Bucket name** (save both)
   - Under Object Ownership, select **ACLs enabled** and **Bucket owner preferred**
   - Under Block Public Access, leave **Block all public access** unchecked so objects are publicly accessible
   - Under Bucket Versioning, select **Disable**

To use a custom domain, follow the AWS [CNAME documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs). Otherwise, ensure the [Storage URL](#storage-url) ends with `/<your_bucket_name>/`.

### Backblaze B2

The Backblaze B2 API uploads images to [Backblaze's cloud storage](https://www.backblaze.com/b2/cloud-storage.html).

**Setup steps:**

1. Go to **B2 Cloud Storage** and click **Create a Bucket**
2. Set **Files in Bucket** to **Public**
3. Go to **App Keys** and click **Add a New Application Key**
   - Type of Access: **Read and Write**

**B2 S3 Storage** (current offering) — select the **S3 Compatible** storage API:

| B2 Value       | Chevereto Storage                                |
| -------------- | ------------------------------------------------ |
| Region         | `us-west-002` (from your Endpoint URL)           |
| keyID          | Storage key                                      |
| applicationKey | Storage secret                                   |
| Endpoint*      | `https://s3.us-west-002.backblazeb2.com`         |
| URL            | `https://f002.backblazeb2.com/file/your_bucket/` |

> (*) The endpoint is shown in the bucket details page.

**Legacy B2 Storage** — select the **Backblaze B2** storage API:

| B2 Value       | Chevereto Storage                       |
| -------------- | --------------------------------------- |
| keyID          | Storage key (Account ID)                |
| applicationKey | Storage secret (Master Application Key) |

### FTP

The FTP API uploads images to any server implementing the [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol).

### Google Cloud

The Google Cloud API uploads images to a Google Cloud Storage bucket. A [Google Cloud](https://cloud.google.com/) service account with [Cloud Storage enabled](https://cloud.google.com/storage/docs/signup) is required.

**Setup steps:**

1. Create a project in Google Cloud
2. Go to **APIs & Services** and confirm that **Google Cloud Storage JSON API** is enabled. If not, click **Enable APIs and Services** and enable it
3. Go to **Cloud Storage** > **Browser** and click **Create bucket**:
   - Uncheck **Enforce public access prevention on this bucket**
   - Set Access control to **Fine-grained**
4. Go to **APIs & Services** > **Credentials**, click **Create credentials**, then **Service account**:
   - Grant role: **Owner**
   - Key type: **JSON**
5. Open your new service account under **Service Accounts**, go to **Keys**, and create a new **JSON key**
6. Your browser will download a JSON file — paste its entire contents into Chevereto's **Secret Key** field

### Local

The [Local API](../settings/upload-storage.md#local) uploads images to any filesystem path on the server.

### Microsoft Azure

The Microsoft Azure API uploads images to [Microsoft Azure Storage](https://azure.microsoft.com/services/storage/).

### OpenStack

The [OpenStack API](../settings/upload-storage.md#openstack) uploads images to an [OpenStack](https://en.wikipedia.org/wiki/OpenStack) container.

| Field        | Value                                                              |
| ------------ | ------------------------------------------------------------------ |
| Identity URL | Your provider's Keystone identity endpoint URL                     |
| Username     | Your OpenStack username                                            |
| Password     | Your OpenStack password                                            |
| Region       | The region where your container was created                        |
| Container    | Name of your container                                             |
| Tenant ID    | Leave blank if not required by your provider                       |
| Tenant name  | Your project ID (found in OpenStack Horizon under CURRENT PROJECT) |
| URL          | Your container's public access URL                                 |

### S3 Compatible

The S3 Compatible API uploads images to any server implementing the Amazon S3 standard ("AWS S3 API"). Configuration is identical to Amazon S3, with the addition of a custom provider endpoint.

**Hosted providers supporting the S3 API:**

- Backblaze B2 (via S3-compatible API)
- Cloudflare R2
- DigitalOcean Spaces
- DreamHost DreamObjects
- Hetzner Object Storage
- IBM COS S3
- IDrive e2
- Linode Object Storage (now Akamai)
- OVH Cloud Object Storage
- PhoenixNAP Object Storage
- Scaleway Object Storage
- Storj
- Tencent Cloud Object Storage (COS)
- Vultr Object Storage (use region `us-east-1`)
- Wasabi

**Self-hosted S3-compatible solutions:**

- MinIO
- Ceph (RGW)
- SeaweedFS (S3 Gateway)
- Zenko (by Scality)
- LeoFS (S3 support in gateway mode)
- Garage (Deuxfleurs)

### SFTP

The SFTP API uploads images to any server implementing the [SSH File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol).
