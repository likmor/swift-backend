import { Router, Request, Response } from "express";
import {
  getSwiftCodeDetails,
  getSwiftCodesFromISO2,
  addSwiftCode,
  deleteSwiftCode,
} from "../services/swiftCodeService";
import { SwiftCodeSchema } from "../schemas/swiftCode.schema";

const router = Router();

router.get("/:swiftCode", async (req: Request, res: Response) => {
  const { swiftCode } = req.params;
  const result = await getSwiftCodeDetails(swiftCode);

  if (!result) {
    res.status(404).json({ message: "SWIFT code not found" });
    return;
  }
  res.json(result);
});

router.get("/country/:iso2code", async (req: Request, res: Response) => {
  const { iso2code } = req.params;
  const result = await getSwiftCodesFromISO2(iso2code);

  if (!result) {
    res.status(404).json({ message: "ISO2 code not found" });
    return;
  }
  res.json(result);
});

router.post("/", async (req: Request, res: Response) => {
  const parse = SwiftCodeSchema.safeParse(req.body);

  if (!parse.success) {
    res.status(400).json({ message: parse.error.errors });
    return;
  }
  try {
    await addSwiftCode(parse.data);
    res.status(201).json({ message: "Created" });
  } catch (err) {
    console.error("Error creating swift code:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/:swiftCode", async (req: Request, res: Response) => {
  const { swiftCode } = req.params;
  const result = await deleteSwiftCode(swiftCode);
  if (!result) {
    res.status(404).json({ message: "SWIFT code not found" });
    return;
  }
  res.status(200).json({ message: "Deleted" });
});

export default router;
