import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


import { prisma , connectDB } from './DB_connection.js';

const app = express();


async function insertDummy() {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Gulabx",
        email: "gulabx@example.com",
        // phone: "9876543210",
        passwordHash: "hashed_password_123x",
      },
    });


    const hall = await prisma.hall.create({
      data: {
        name: "Royal Palace",
        description: "Large wedding hall",
        address: "Main Road",
        city: "Patna",
        state: "Bihar",
        pincode: "800001",
        capacity: 500,
        pricePerDay: 25000,
        contactNumber: "9876543211",
        email: "hall@example.com",
      },
    });

    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        hallId: hall.id,
        eventDate: new Date("2026-12-25"),
        totalAmount: 25000,
        status: "CONFIRMED",
      },
    });

    const payment = await prisma.payment.create({
      data: {
        bookingId: booking.id,
        amount: 25000,
        transactionId: "TXN123456",
        status: "SUCCESS",
      },
    });

    console.log({
      user,
      hall,
      booking,
      payment,
    });

  } catch (err) {
    console.error(err);
  }

}

insertDummy();



export default app;