import { azureClient } from "./src/clients/azure.js";
import { createAgent } from "./src/agents/index.js";

const model = await azureClient.getModel();
const tools: any[] = [];

const agent = await createAgent(model, tools);

const result = await agent.invoke({
    input: "Hello, how are you?"
});

console.log(result);
