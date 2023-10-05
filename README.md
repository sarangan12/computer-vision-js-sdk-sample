---
services: cognitive-services, computer-vision
platforms: js
author: sarangan12
---

# Computer Vision SDK Sample

This sample code uses image description with the Computer Vision Cognitive Service. It will retrieve and print tags from the image.

## Getting Started

### Prerequisites
- If you don't have a Microsoft Azure subscription you can visit [the Microsoft Cognitive Services Web site](https://azure.microsoft.com/free/cognitive-services/), create a new Azure account, and try Cognitive Services for free.
- Get an [Azure Computer Vision](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/) account to get your subscription key and endpoint.
- Add AZURE_COMPUTER_VISION_ENDPOINT, AZURE_TENANT_ID, AZURE_CLIENT_SECRET and AZURE_CLIENT_ID to your environment variables with your endpoint.

### Clone and run

Execute from the command line:

1. `git clone https://github.com/sarangan12/computer-vision-js-sdk-sample.git`
2. `cd computer-vision-js-sdk-sample`
3. `npm install`
4. `tsc -p .`
5. `node .\dist\index.js`

## More information 

- [Build and deploy JS apps on Azure](https://learn.microsoft.com/en-us/azure/developer/javascript/)
- The [Computer Vision documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/index)

---

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
