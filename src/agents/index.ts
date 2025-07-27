import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { Tool } from "@langchain/core/tools";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function createAgent(model: BaseChatModel, tools: Tool[]): Promise<AgentExecutor> {
    const prompt = ChatPromptTemplate.fromMessages([
        ["system", "You are a helpful assistant."],
        ["human", "{input}"],
        ["human", "{agent_scratchpad}"],
    ]);

    const agent = await createOpenAIFunctionsAgent({
        llm: model,
        tools: tools || [],
        prompt: prompt,
    });

    return new AgentExecutor({
        agent,
        tools: tools || [],
        verbose: true,
    });
}