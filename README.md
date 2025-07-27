# Azure LangChain Agents

A TypeScript project for building AI agents using LangChain and Azure OpenAI services. This project provides a clean, modular foundation for creating intelligent applications with Azure's cognitive services.

## 🚀 Features

- **Azure OpenAI Integration**: Seamless integration with Azure OpenAI services
- **LangChain Framework**: Built on the latest LangChain framework for AI applications
- **TypeScript Support**: Full TypeScript support with strict type checking
- **Modular Architecture**: Clean separation of concerns with reusable components
- **Environment Configuration**: Secure environment variable management
- **ES Modules**: Modern JavaScript with ES module support

## 📋 Prerequisites

- Node.js 18+ 
- Yarn or npm
- Azure OpenAI service account
- TypeScript knowledge

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/azure-langchain-agents.git
   cd azure-langchain-agents
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your Azure OpenAI credentials:
   ```env
   AZURE_OPENAI_API_KEY=your_api_key_here
   AZURE_OPENAI_ENDPOINT=your_endpoint_here
   AZURE_OPENAI_DEPLOYMENT_NAME=your_deployment_name
   AZURE_OPENAI_API_VERSION=2024-02-15-preview
   AZURE_OPENAI_EMBEDDING_DEPLOYMENT=your_embedding_deployment
   AZURE_OPENAI_API_EMBEDDINGS_VERSION=1
   ```

## 🏗️ Project Structure

```
azure-langchain-agents/
├── src/
│   └── clients/
│       ├── azure.ts      # Azure OpenAI client
│       └── index.ts      # Client exports
├── dist/                 # Compiled JavaScript
├── test.ts              # Test file
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Usage

### Basic Usage

```typescript
import { azureClient } from "./src/clients/azure.js";

// Get the chat model
const model = await azureClient.getModel();

// Get the embeddings model
const embeddings = await azureClient.getEmbeddingsModel();

// Use the chat model
const response = await model.invoke("Hello, how are you?");

// Use the embeddings model
const embedding = await embeddings.embedQuery("Hello, how are you?");
```

### Running the Test

```bash
# Compile TypeScript
yarn build

# Run the test
yarn test
```

## 🧪 Development

### Available Scripts

- `yarn build` - Compile TypeScript to JavaScript
- `yarn dev` - Run with ts-node for development
- `yarn test` - Run the test file
- `yarn start` - Run the compiled application

### Development Workflow

1. Make changes to TypeScript files in `src/`
2. Run `yarn build` to compile
3. Test with `yarn test`
4. Commit your changes

## 🔧 Configuration

### TypeScript Configuration

The project uses a modern TypeScript configuration with:
- ES2022 target
- Node16 module resolution
- Strict type checking
- Declaration file generation

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_OPENAI_API_KEY` | Your Azure OpenAI API key | Yes |
| `AZURE_OPENAI_ENDPOINT` | Your Azure OpenAI endpoint | Yes |
| `AZURE_OPENAI_DEPLOYMENT_NAME` | Chat model deployment name | Yes |
| `AZURE_OPENAI_API_VERSION` | API version | Yes |
| `AZURE_OPENAI_EMBEDDING_DEPLOYMENT` | Embeddings deployment name | Yes |
| `AZURE_OPENAI_API_EMBEDDINGS_VERSION` | Embeddings API version | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [LangChain](https://langchain.com/) for the amazing AI framework
- [Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service) for the AI services
- [TypeScript](https://www.typescriptlang.org/) for type safety

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Note**: Make sure to never commit your `.env` file as it contains sensitive information. The `.env.example` file is provided as a template. 