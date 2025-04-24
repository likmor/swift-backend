import prisma from "../prismaClient";
import { SwiftCode } from "../schemas/swiftCode.schema";

export const getSwiftCodeDetails = async (code: string) => {
  const mainSwift = await prisma.swiftCode.findUnique({
    where: {
      swiftCode: code,
    },
    include: {
      bank: {
        include: {
          address: true,
        },
      },
    },
  });

  if (!mainSwift) return null;
  const isHeadquarter = code.endsWith("XXX") ? true : false;
  if (!isHeadquarter) {
    const info = {
      address: mainSwift.bank?.address.address,
      bankName: mainSwift.bank?.name,
      countryISO2: mainSwift.bank?.address.iso2Code,
      countryName: mainSwift.bank?.address.countryName,
      isHeadquarter: isHeadquarter,
      swiftCode: mainSwift.swiftCode,
    };
    return info;
  }
  const branches = await prisma.swiftCode.findMany({
    where: {
      swiftCode: {
        startsWith: code.slice(0, 8),
        not: code,
      },
    },
    include: {
      bank: {
        include: {
          address: true,
        },
      },
    },
  });
  const branchesInfo = branches.map((el : any) => ({
    address: el.bank?.address.address,
    bankName: el.bank?.name,
    countryISO2: el.bank?.address.iso2Code,
    isHeadquarter: false,
    swiftCode: el.swiftCode,
  }));
  const info = {
    address: mainSwift.bank?.address.address,
    bankName: mainSwift.bank?.name,
    countryISO2: mainSwift.bank?.address.iso2Code,
    countryName: mainSwift.bank?.address.countryName,
    isHeadquarter: isHeadquarter,
    swiftCode: mainSwift.swiftCode,
    branches: branchesInfo,
  };

  return info;
};

export const getSwiftCodesFromISO2 = async (iso2: string) => {
  const result = await prisma.swiftCode.findMany({
    where: {
      bank: {
        address: {
          iso2Code: iso2,
        },
      },
    },
    include: {
      bank: {
        include: {
          address: true,
        },
      },
    },
  });
  if (!result || result.length == 0) return null;

  const data = {
    countryISO2: iso2,
    countryName: result[0].bank?.address.countryName,
    swiftCodes: result.map((el : any) => ({
      address: el.bank?.address.address,
      bankName: el.bank?.name,
      countryISO2: iso2,
      isHeadquarter: el.swiftCode.endsWith("XXX"),
      swiftCode: el.swiftCode,
    })),
  };

  return data;
};

export const addSwiftCode = async (data: SwiftCode) => {
  const code = await prisma.swiftCode.create({
    data: {
      swiftCode: data.swiftCode,
      codeType: "BIC11",
      bank: {
        create: {
          name: data.bankName,
          address: {
            create: {
              address: data.address,
              iso2Code: data.countryISO2,
              countryName: data.countryName,
            },
          },
        },
      },
    },
  });

  return code;
};

export const deleteSwiftCode = async (code: string) => {
  const result = await prisma.swiftCode.deleteMany({
    where: {
      swiftCode: code
    }
  })
  if (result.count == 0){
    return null;
  }

  return result;
};
