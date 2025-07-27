import dotenv from "dotenv";

import { AzureChatOpenAI, AzureOpenAIEmbeddings } from "@langchain/openai";

dotenv.config();


class AzureClient {
    private readonly model: AzureChatOpenAI;
    private readonly embeddings: AzureOpenAIEmbeddings;

    constructor() {
        this.model = new AzureChatOpenAI({
            azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
            azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_ENDPOINT,
            azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_DEPLOYMENT_NAME,
            azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
        });

        this.embeddings = new AzureOpenAIEmbeddings({
            azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
            azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_ENDPOINT,
            azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_EMBEDDING_DEPLOYMENT,
            azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_EMBEDDINGS_VERSION,
        });
    }

    async getModel() {
        return this.model;
    }

    async getEmbeddingsModel() {
        return this.embeddings;
    }
}


const azureClient = new AzureClient();

export { azureClient };