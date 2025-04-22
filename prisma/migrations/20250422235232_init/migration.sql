-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "address" TEXT,
    "iso2Code" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "townName" TEXT NOT NULL,
    "timeZone" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SwiftCode" (
    "swiftCode" TEXT NOT NULL,
    "codeType" TEXT NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "SwiftCode_pkey" PRIMARY KEY ("swiftCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "SwiftCode_bankId_key" ON "SwiftCode"("bankId");

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwiftCode" ADD CONSTRAINT "SwiftCode_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
