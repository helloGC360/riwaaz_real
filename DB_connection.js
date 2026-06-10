import { PrismaClient } from "@prisma/client";
import { connect } from 'node:http2';

const prisma = new PrismaClient();


const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database successfully!");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};


export { prisma, connectDB };