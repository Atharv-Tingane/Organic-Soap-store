const User = require('../models/userM');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function signup(req,res){
    // console.log("Entered");
    
    try{

        const {name, email, password, phone} = req.body;
        console.log(name, email, password, phone);
    const isUser = await User.findOne({ email });
    // console.log("uwwuuw");
    
    if(!isUser){
        const hashedpassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            name,
            email,
            password: hashedpassword,
            phone,
        })
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET);
        // console.log(token); 
        res.cookie('token', token, { 
            httpOnly: true, 
            secure:true,
            sameSite:'none',
            maxAge: 7*24*60*60*1000, // 7 days
            
        });
        res.status(201).json({ _id: user._id, name: user.name, email: user.email, phone: user.phone, role: user.role })
    } else {
        res.status(400).json({ message: 'User already exists' });
    }
}catch (err){
    res.status(500).json({ message: 'Server error' })
}
}



async function login(req,res){
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({ message: 'Invalid email or password' });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Invalid email or password' });
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET);
        res.cookie('token', token, { 
            httpOnly: true, 
            secure:true,
            sameSite:'none',
            maxAge: 7*24*60*60*1000, // 7 days
            
        });
        res.status(201).json({ _id: user._id, name: user.name, email: user.email, phone: user.phone, role: user.role }) 
    }catch (err){
    res.status(500).json({ message: 'Server error' })
}
}



async function logout(req,res){
    try{
    res.clearCookie('token',{
        httpOnly:true,
        secure:true,
        sameSite: 'none'
    });
     res.json({ message: 'Logged out successfully' })}
catch(err){
    res.status(401).json({ message: 'Failed to logout' })
}

}


async function getUser(req,res){
try{
    const token = req.cookies.token;
    if(!token) return res.status(401).json({message: 'Not Authorized'})
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user = await User.findById(decoded.id).select('-password');
    if(!user) return res.status(404).json({message: 'User not found'})
    res.status(200).json(user)
} catch (err) {
    res.status(401).json({ message: 'Not authorized' })
  }
}


module.exports = {signup, login, logout, getUser};



