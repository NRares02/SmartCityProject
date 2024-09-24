const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const express=require('express');
const router=express.Router();
const dbConfig = require("./dbConfig");

// User registration endpoint
router.post('/register', async (req, res) => {
    const { email, password, fullName, phoneNumber, role, username } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const query = `
            INSERT INTO users (Username, PasswordHash, Email, FullName, PhoneNumber, Role, DateRegistered) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [username, hashedPassword, email, fullName, phoneNumber, role, new Date()];
        await connection.execute(query, values);

        // // Execute the query
        // await request.query(query);
        await connection.end();
        res.status(200).send('User registered successfully');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Server error');
    }
});

module.exports=router;