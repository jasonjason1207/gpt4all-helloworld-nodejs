# Hello world
gpt4all-helloworld-nodejs

## Setup guide by cloning this repository
```
cd into this directory
npm installcCX
node index.js
```

## Setup this from scratch - Ignore this if you cloned this repository
```
cd C:/Users/<username>/Desktop
mkdir gpt4all-helloworld-nodejs
npm init
```

## install the gpt4all nodejs binding
https://docs.gpt4all.io/gpt4all_typescript.html
```
npm install gpt4all@alpha
```

## Download a model 
Not really needed.. gpt4all@alpha will be downloading a valid model from hugging face automatically if one doesn't exists. The only problem is that the command prompt doesn't tell you how much it has already downloaded... which creates huge anxiety...

The best way for me to download a model seems to be installing in chat client from https://gpt4all.io/index.html. The chat client lists all chat models and their respective features. 

After downloading a model in whatever ways, copy the model to this project directory.

## Create index.js
Just create a file under the project directory.

## Add these lines,
```
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
```
