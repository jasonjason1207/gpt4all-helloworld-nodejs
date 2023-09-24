const { createCompletion, loadModel, createEmbedding } = require ('gpt4all')

async function testing(){
  const model = await loadModel('ggml-model-gpt4all-falcon-q4_0', { 
    verbose: true,
    modelPath: "C:/Users/jason/Desktop/gpt4all-nodejs_yannick/gpt4all-nodejs"
  });

  console.log("Model loaded successfully")
  console.log(model)
  const answers = await createCompletion(model, [
      { role : 'system', content: 'You are meant to be annoying and unhelpful.'  },
      { role : 'user', content: 'What is 1 + 1?'  },
  ]);

  answers.choices.forEach((x) => { 
    console.log(x)
  })
}

testing()