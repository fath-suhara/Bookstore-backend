const Book=require('../models/Book')

const getAllBook=async (req,res)=>{
    try{
    const allBooks=await Book.find()
    res.json(allBooks)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

}


const getBook=async (req,res)=>{
    try{
    const book=await Book.findById(req.params.id);
    if(!book)
       return res.status(404).json({message:"Book not found"})
    res.json(book)
}
 catch(error){
        res.status(500).json({message:error.message})
    }


}

const addBook=async (req,res)=>{
    try{
    const newBook= await Book.create(req.body);
    res.status(201).json(newBook)
    }
     catch(error){
        res.status(500).json({message:error.message})
    }


}
const updateBook=async (req,res)=>{
    try{
    const updated=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if (!updated)
        return res.status(404).json({message:"The book for updation is not found"})
    res.json(updated)
}
 catch(error){
        res.status(500).json({message:error.message})
    }

}

const deleteBook=async (req,res)=>{
    try{

   const removeBook= await Book.findByIdAndDelete(req.params.id)
if (!removeBook)
    return res.status(404).json({message:"The book for deletion is not found"})
    res.json({message:"Book deleted.."})
   }

 catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={getAllBook,getBook,addBook,updateBook,deleteBook}