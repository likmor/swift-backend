import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedFromCSV() {
  const csvPath = path.resolve(__dirname, "../data/swift_codes.csv");

  const records: any[] = [];

  const parser = fs
    .createReadStream(csvPath)
    .pipe(parse({ columns: true, skip_empty_lines: true }));

  for await (const row of parser) {
    records.push(row);
  }

  for (const row of records) {
    const address = await prisma.address.create({
      data: {
        iso2Code: row["COUNTRY ISO2 CODE"],
        address: row["ADDRESS"],
        townName: row["TOWN NAME"],
        countryName: row["COUNTRY NAME"],
        timeZone: row["TIME ZONE"],
      },
    });

    const bank = await prisma.bank.create({
      data: {
        name: row["NAME"],
        addressId: address.id,
        swiftCode: {
          create: {
            swiftCode: row["SWIFT CODE"],
            codeType: row["CODE TYPE"],
          },
        },
      },
    });

    console.log(`Seeded bank: ${bank.name}`);
  }
}

seedFromCSV().catch((e) => {
  console.error("Error seeding DB:", e);
  process.exit(1);
});
