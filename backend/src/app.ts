import "dotenv/config";
import express, { Request, Response, NextFunction }  from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

const app = express();

app.use(morgan("dev")); // sets up Morgan, HTTP logger 

app.use(express.json()); // sets up express to accept json bodies


app.use("/api/notes", notesRoutes);



/** MIDDLEWARE */
app.use( (req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
}); 

/* Error Handler */
app.use( (error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "Unknown error occured";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage});

});



export default app;