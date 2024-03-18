const express= require('express')
const app = express()
const cors= require('cors')
const bodyParser = require('body-parser');
const port=4200
const {initializeApp}= require('firebase/app')
const {getFirestore, addDoc, collection}= require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCGxb9S5M9H5dfjlE_81bMQuFHYKalj7-k",
    authDomain: "dbdemo-4a9d4.firebaseapp.com",
    projectId: "dbdemo-4a9d4",
    storageBucket: "dbdemo-4a9d4.appspot.com",
    messagingSenderId: "1007107132968",
    appId: "1:1007107132968:web:b48cf488b7a77c0118af1d"
  }

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:'*'}))
initializeApp(firebaseConfig)
const db= getFirestore()
const collectionRef = collection(db,'userDetails')

app.post('/newUser',async(req,res)=>{
    const newUser = req.body
    console.log(newUser) 
    await addDoc(collectionRef,newUser)
    res.json("Created")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`)
})