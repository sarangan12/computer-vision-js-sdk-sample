import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ClientSecretCredential } from "@azure/identity";
import { TokenCredentials } from "@azure/ms-rest-js";
import { AccessToken } from "@azure/core-auth";
import * as dotenv from "dotenv";
dotenv.config();

const azureTenantId: string = process.env.AZURE_TENANT_ID?? "";
const azureClientId: string = process.env.AZURE_CLIENT_ID?? "";
const azureClientSecret: string = process.env.AZURE_CLIENT_SECRET ?? "";
const computerVisionEndPoint: string = process.env.AZURE_COMPUTER_VISION_ENDPOINT ?? "";

async function main(): Promise<void> {
    const clientSecretCredential: ClientSecretCredential = new ClientSecretCredential(azureTenantId, azureClientId, azureClientSecret);
    const accessToken: AccessToken = await clientSecretCredential.getToken("https://cognitiveservices.azure.com/.default")
    const tokenCredential: TokenCredentials = new TokenCredentials(accessToken.token);
    const client: ComputerVisionClient = new ComputerVisionClient(tokenCredential, computerVisionEndPoint);
    const describeImageResponse = await client.describeImage("https://img.freepik.com/premium-photo/relaxing-place-national-5a-scenic-spot-green-mountain-clean-green-freshwater-lake-natural-scenery_327903-961512.jpg");
    const tags = describeImageResponse.tags;
    if (tags) {
        for(const tag of tags) {
            console.log(tag);
        }
    }
}

main();