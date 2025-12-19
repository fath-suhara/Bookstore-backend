const express=require('express')
const {getAllBook,getBook,addBook,updateBook,deleteBook}=require('../Controllers/bookControllers')
const router=express.Router()

router.get('/books',getAllBook);
router.get('/books/:id',getBook);
router.post('/books',addBook);
router.put('/books/:id',updateBook);
router.delete('/books/:id',deleteBook);

module.exports = router;