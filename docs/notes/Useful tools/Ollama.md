---
sidebar_position: 3
---

# Ollama

**Ollama** is a tool that makes it easy to run and manage large language models (LLMs) locally on your machine.  
It provides a simple command-line interface to download, run, and interact with models like LLaMA, Mistral, or other open-source LLMs.

With Ollama, you can:

- Run LLMs locally without depending on cloud services.
- Manage multiple models easily through the CLI.
- Use models for tasks like chat, code generation, summarization, and more.
- Integrate with your own applications through its APIs.

1. Install ollama

```
curl -fsSL https://ollama.com/install.sh | sh
```

2. Running a model

```
ollama run llama2
```

3. Basic ollama command

```
# List installed models
ollama list

# Pull a new model
ollama pull <model-name>

# Remove a model
ollama rm <model-name>
```

[Resource](https://ollama.com/)
