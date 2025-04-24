import request from "supertest";
import app from "../src/app";
import prismaClient from "../src/prismaClient";

const SwiftCodeTest = {
  address: "TEST ADDRESS",
  bankName: "TEST BANK",
  countryISO2: "AL",
  countryName: "ALBANIA",
  isHeadquarter: true,
  swiftCode: "TESTTESTXXX",
};

beforeAll(async () => {
  await prismaClient.$connect();
});
beforeEach(async () => {
  await prismaClient.swiftCode.deleteMany();
  await prismaClient.bank.deleteMany();
  await prismaClient.address.deleteMany();
})

afterAll(async () => {
  await prismaClient.swiftCode.deleteMany();
  await prismaClient.bank.deleteMany();
  await prismaClient.address.deleteMany();
  await prismaClient.$disconnect();
});

describe("[Integration] - Swift Codes API", () => {
  test("POST /v1/swift-codes Adds new SWIFT code entries", async () => {
    const response = await request(app)
      .post("/v1/swift-codes")
      .set("Accept", "application/json")
      .send(SwiftCodeTest);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Created");
  });

  test("GET /v1/swift-codes/:swiftCode Retrieve details of a single SWIFT code", async () => {
    await prismaClient.swiftCode.create({
      data: {
        swiftCode: SwiftCodeTest.swiftCode,
        codeType: "BIC11",
        bank: {
          create: {
            name: SwiftCodeTest.bankName,
            address: {
              create: {
                address: SwiftCodeTest.address,
                iso2Code: SwiftCodeTest.countryISO2,
                countryName: SwiftCodeTest.countryName,
              },
            },
          },
        },
      },
    });

    const response = await request(app).get(`/v1/swift-codes/${SwiftCodeTest.swiftCode}`);

    expect(response.status).toBe(200);
    expect(response.body.swiftCode).toBe(SwiftCodeTest.swiftCode);
    expect(response.body.bankName).toBe(SwiftCodeTest.bankName);
    expect(response.body.address).toBe(SwiftCodeTest.address);
    expect(response.body.countryISO2).toBe(SwiftCodeTest.countryISO2);
    expect(response.body.countryName).toBe(SwiftCodeTest.countryName);
    expect(response.body.isHeadquarter).toBe(SwiftCodeTest.isHeadquarter);
  });

  test("DELETE /v1/swift-codes/:swiftCode Deletes swift-code data if swiftCode matches the one in the database", async () => {
    await prismaClient.swiftCode.create({
      data: {
        swiftCode: SwiftCodeTest.swiftCode,
        codeType: "BIC11",
        bank: {
          create: {
            name: SwiftCodeTest.bankName,
            address: {
              create: {
                address: SwiftCodeTest.address,
                iso2Code: SwiftCodeTest.countryISO2,
                countryName: SwiftCodeTest.countryName,
              },
            },
          },
        },
      },
    });
    const response = await request(app).delete(
      `/v1/swift-codes/${SwiftCodeTest.swiftCode}`
    );

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Deleted");
  });

  test("GET /v1/swift-codes/country/:countryISO2Code Return all SWIFT codes with details for a specific country", async () => {
    await prismaClient.swiftCode.create({
      data: {
        swiftCode: SwiftCodeTest.swiftCode,
        codeType: "BIC11",
        bank: {
          create: {
            name: SwiftCodeTest.bankName,
            address: {
              create: {
                address: SwiftCodeTest.address,
                iso2Code: SwiftCodeTest.countryISO2,
                countryName: SwiftCodeTest.countryName,
              },
            },
          },
        },
      },
    });
    const response = await request(app).get(
      `/v1/swift-codes/country/${SwiftCodeTest.countryISO2}`
    );

    expect(response.status).toBe(200);
    expect(response.body.countryISO2).toBe(SwiftCodeTest.countryISO2);
    expect(response.body.countryName).toBe(SwiftCodeTest.countryName);
    expect(response.body.swiftCodes?.[0]?.address).toBe(SwiftCodeTest.address);
    expect(response.body.swiftCodes?.[0]?.bankName).toBe(
      SwiftCodeTest.bankName
    );
    expect(response.body.swiftCodes?.[0]?.countryISO2).toBe(
      SwiftCodeTest.countryISO2
    );
    expect(response.body.swiftCodes?.[0]?.isHeadquarter).toBe(
      SwiftCodeTest.isHeadquarter
    );
    expect(response.body.swiftCodes?.[0]?.swiftCode).toBe(
      SwiftCodeTest.swiftCode
    );
  });
});
