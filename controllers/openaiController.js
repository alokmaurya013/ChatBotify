const dotenv=require('dotenv')
dotenv.config();

const OpenAI=require("openai");
const openai=new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
});

exports.summaryController=async(req,res)=>{
    try{
        const {text}=req.body;
       const data=await openai.completions.create({
        model:"gpt-3.5-turbo",
        prompt:`Summarize this \n${text}`,
        max_tokens:500,
        temperature:0.5,
       });
       if(data){
        if(data.choices[0].text){
            return res.status(200).json(data.choices[0].text);
        }
       }
    }catch(err){
        console.log(err);
        console.log("me");
        return res.status(404).json({
            message:err.message
        })
    }
}
exports.paragraphController=async(req,res)=>{
    try{
        const {text}=req.body;
       const response=await openai.completions.create({
        model:"gpt-3.5-turbo",
        prompt:`write a detail paragraph about \n${text}`,
        max_tokens:500,
        temperature:0.5,
       })
       if(response){
        if(response.choices[0].text){
            return res.status(200).json(response.choices[0].text);
        }
       }
    }catch(err){
        console.log(err);
        return res.status(404).json({
            message:err.message
        })
    }
}
exports.chatbotController=async(req,res)=>{
    try{
        const {text}=req.body;
       const data=await openai.completions.create({
        model:"text-davinci-003",
        prompt:`Answer question similar to how yoda from star war would.
        Me:'what is your name?'
        yoda:'yoda is my name'
        Me:${text}`,
        max_tokens:300,
        temperature:0.7,
       })
       if(data){
        if(data.choices[0].text){
            return res.status(200).json(data.choices[0].text);
        }
       }
    }catch(err){
        console.log(err);
        return res.status(404).json({
            message:err.message
        })
    }
}
exports.jsconverterController=async(req,res)=>{
    try{
        const {text}=req.body;
       const data=await openai.completions.create({
        model:"text-davinci-002",
        prompt:`/*convert these instruction into javascript code \n${text}`,
        max_tokens:400,
        temperature:0.25,
       })
       if(data){
        if(data.choices[0].text){
            return res.status(200).json(data.choices[0].text);
        }
       }
    }catch(err){
        console.log(err);
        return res.status(404).json({
            message:err.message
        })
    }
}

exports.scifiImageController=async(req,res)=>{
    try{
        const {text}=req.body;
       const data=await openai.images.generate({
         prompt:`generate a scifi image of ${text}`,
         n:1,
         size:'512x512'
       })
       if(data){
        if(data.data[0].url){
            return res.status(200).json(data.data[0].url);
        }
       }
    }catch(err){
        console.log(err);
        return res.status(404).json({
            message:err.message
        })
    }
}