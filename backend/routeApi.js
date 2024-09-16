const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const express=require('express');
const router=express.Router();
const dbConfig = require("./dbConfig");

// SQL Server configuration
// const dbConfig = {
//     user: 'DESKTOP-VF2PBSC\Rares', // Replace with your SQL Server username
//     password: '', // Replace with your SQL Server password
//     server: 'localhost\\SQLEXPRESS', // Replace with your SQL Server hostname or IP address
//     database: 'SmartCityDB', // Replace with your database name
//     port: 1433,
//     options: {
//         encrypt: true, // Use this if you're on Windows Azure
//         trustServerCertificate: true // Change to true for local dev / self-signed cert
//     }
// };

// User registration endpoint
router.post('/register', async (req, res) => {
    const { email, password, fullName, phoneNumber, role, username } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const query = `
            INSERT INTO users (Username, PasswordHash, Email, FullName, PhoneNumber, Role, DateRegistered) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [username, hashedPassword, email, fullName, phoneNumber, role, new Date()];
        await connection.execute(query, values);

        // Connect to the database
        // await sql.connect(dbConfig);

        // // SQL query to insert a new user
        // const query = `
        //     INSERT INTO users (Username, Password, Email, FullName, PhoneNumber, Role, DateRegistered) 
        //     VALUES (@username, @password, @Email, @FullName, @PhoneNumber, @Role, GETDATE())
        // `;

        // // Use prepared statements to prevent SQL injection
        // const request = new sql.Request();
        // request.input('username', sql.NVarChar(50), username);
        // request.input('password', sql.NVarChar(255), hashedPassword);
        // request.input('Email', sql.NVarChar(100), email);
        // request.input('FullName', sql.NVarChar(100), fullName);
        // request.input('PhoneNumber', sql.NVarChar(15), phoneNumber);
        // request.input('Role', sql.NVarChar(20), role);

        // // Execute the query
        // await request.query(query);
        res.status(200).send('User registered successfully');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Server error');
    } finally {
        await connection.end();
    }
});

module.exports=router;