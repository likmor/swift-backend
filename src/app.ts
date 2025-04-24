import express from 'express';
import swiftCodesRoutes from "./routes/swiftCodes";

const app = express();

app.use(express.json());

app.use("/v1/swift-codes", swiftCodesRoutes);

export default app;
