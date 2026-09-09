import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
// app.get('/', async (req: Request, res: Response) => {

//   // const specialty = await prisma.specialty.create({
//   //   data: {
//   //     title: 'Cardiology 2',
//   //     description: 'Cardiology is a medical specialty that focuses on the diagnosis and treatment of heart-related conditions and diseases. Cardiologists are trained to manage various cardiovascular issues, including heart disease, arrhythmias, and heart failure.',
//   //   },
//   // })
//   const specialty = await prisma.specialty.upsert({
//     where: {
//       title: "Cardiology",
//     },
//     update: {},
//     create: {
//       title: "Cardiology",
//       description:
//         "Cardiology is a medical specialty that focuses on the diagnosis and treatment of heart-related conditions and diseases. Cardiologists are trained to manage various cardiovascular issues, including heart disease, arrhythmias, and heart failure.",
//     },
//   });
//   res.status(201).json({
//     success : true,
//     message: 'Specialty created successfully',
//     data: specialty,
//   });
//   // res.send('Hello,PH Healthcare Server!');
// });

app.get("/", async (req: Request, res: Response) => {
  try {
    const specialty = await prisma.specialty.upsert({
      where: {
        title: "Cardiology",
      },
      update: {},
      create: {
        title: "Cardiology",
        description: "Cardiology is a medical specialty that focuses on the diagnosis and treatment of heart-related conditions and diseases. Cardiologists are trained to manage various cardiovascular issues, including heart disease, arrhythmias, and heart failure.",
      },
    });

    res.status(200).json({
      success: true,
      message: "Specialty created successfully",
      data: specialty,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Prisma Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create specialty",
      error: {
        name: error?.name,
        code: error?.code,
        message: error?.message,
        meta: error?.meta,
      },
    });
  }
});

export default app;
