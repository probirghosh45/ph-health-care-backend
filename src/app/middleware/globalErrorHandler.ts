/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { envVars } from "../config/env";

export const globalErrorHandler=(err:unknown,req:Request,res:Response,next:NextFunction)=>{
   if(envVars.NODE_ENV==="development"){
      console.log("Error from Global Error Handler",err);
   }

   const statusCode:number=status.INTERNAL_SERVER_ERROR;
   const message:string=err instanceof Error ? err.message : "Internal Server Error";

   res.status(statusCode).json({
      success:false,
      message : message,
      error:err instanceof Error ? err.message : "Internal Server Error"
   });

}