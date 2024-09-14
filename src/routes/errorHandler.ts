import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundedUrlError: RequestHandler = (req, res) => {
    res.status(404).json({ message: "Url not found" });
}

export const InternalError: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
} 