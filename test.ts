import { azureClient } from "./src/clients/azure.js";

const model = await azureClient.getModel();
const embeddings = await azureClient.getEmbeddingsModel();

console.log(model.invoke("Hello, how are you?"));
console.log(embeddings.embedQuery("Hello, how are you?"));