
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Bank
 * 
 */
export type Bank = $Result.DefaultSelection<Prisma.$BankPayload>
/**
 * Model SwiftCode
 * 
 */
export type SwiftCode = $Result.DefaultSelection<Prisma.$SwiftCodePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank`: Exposes CRUD operations for the **Bank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.bank.findMany()
    * ```
    */
  get bank(): Prisma.BankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swiftCode`: Exposes CRUD operations for the **SwiftCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SwiftCodes
    * const swiftCodes = await prisma.swiftCode.findMany()
    * ```
    */
  get swiftCode(): Prisma.SwiftCodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Address: 'Address',
    Bank: 'Bank',
    SwiftCode: 'SwiftCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "bank" | "swiftCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Bank: {
        payload: Prisma.$BankPayload<ExtArgs>
        fields: Prisma.BankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findFirst: {
            args: Prisma.BankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findMany: {
            args: Prisma.BankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          create: {
            args: Prisma.BankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          createMany: {
            args: Prisma.BankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          delete: {
            args: Prisma.BankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          update: {
            args: Prisma.BankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          deleteMany: {
            args: Prisma.BankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          upsert: {
            args: Prisma.BankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          aggregate: {
            args: Prisma.BankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank>
          }
          groupBy: {
            args: Prisma.BankGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankCountArgs<ExtArgs>
            result: $Utils.Optional<BankCountAggregateOutputType> | number
          }
        }
      }
      SwiftCode: {
        payload: Prisma.$SwiftCodePayload<ExtArgs>
        fields: Prisma.SwiftCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwiftCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwiftCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>
          }
          findFirst: {
            args: Prisma.SwiftCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwiftCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>
          }
          findMany: {
            args: Prisma.SwiftCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>[]
          }
          create: {
            args: Prisma.SwiftCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>
          }
          createMany: {
            args: Prisma.SwiftCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwiftCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>[]
          }
          delete: {
            args: Prisma.SwiftCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>
          }
          update: {
            args: Prisma.SwiftCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>
          }
          deleteMany: {
            args: Prisma.SwiftCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwiftCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwiftCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>[]
          }
          upsert: {
            args: Prisma.SwiftCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwiftCodePayload>
          }
          aggregate: {
            args: Prisma.SwiftCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwiftCode>
          }
          groupBy: {
            args: Prisma.SwiftCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwiftCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwiftCodeCountArgs<ExtArgs>
            result: $Utils.Optional<SwiftCodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    bank?: BankOmit
    swiftCode?: SwiftCodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    banks: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | AddressCountOutputTypeCountBanksArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountBanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    address: string | null
    iso2Code: string | null
    countryName: string | null
    townName: string | null
    timeZone: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    address: string | null
    iso2Code: string | null
    countryName: string | null
    townName: string | null
    timeZone: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    address: number
    iso2Code: number
    countryName: number
    townName: number
    timeZone: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    address?: true
    iso2Code?: true
    countryName?: true
    townName?: true
    timeZone?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    address?: true
    iso2Code?: true
    countryName?: true
    townName?: true
    timeZone?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    address?: true
    iso2Code?: true
    countryName?: true
    townName?: true
    timeZone?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    address: string | null
    iso2Code: string
    countryName: string
    townName: string
    timeZone: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    iso2Code?: boolean
    countryName?: boolean
    townName?: boolean
    timeZone?: boolean
    banks?: boolean | Address$banksArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    iso2Code?: boolean
    countryName?: boolean
    townName?: boolean
    timeZone?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    iso2Code?: boolean
    countryName?: boolean
    townName?: boolean
    timeZone?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    address?: boolean
    iso2Code?: boolean
    countryName?: boolean
    townName?: boolean
    timeZone?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "iso2Code" | "countryName" | "townName" | "timeZone", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banks?: boolean | Address$banksArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      banks: Prisma.$BankPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string | null
      iso2Code: string
      countryName: string
      townName: string
      timeZone: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    banks<T extends Address$banksArgs<ExtArgs> = {}>(args?: Subset<T, Address$banksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly address: FieldRef<"Address", 'String'>
    readonly iso2Code: FieldRef<"Address", 'String'>
    readonly countryName: FieldRef<"Address", 'String'>
    readonly townName: FieldRef<"Address", 'String'>
    readonly timeZone: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.banks
   */
  export type Address$banksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    where?: BankWhereInput
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    cursor?: BankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Bank
   */

  export type AggregateBank = {
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  export type BankAvgAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type BankSumAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type BankMinAggregateOutputType = {
    id: number | null
    name: string | null
    addressId: number | null
  }

  export type BankMaxAggregateOutputType = {
    id: number | null
    name: string | null
    addressId: number | null
  }

  export type BankCountAggregateOutputType = {
    id: number
    name: number
    addressId: number
    _all: number
  }


  export type BankAvgAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type BankSumAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type BankMinAggregateInputType = {
    id?: true
    name?: true
    addressId?: true
  }

  export type BankMaxAggregateInputType = {
    id?: true
    name?: true
    addressId?: true
  }

  export type BankCountAggregateInputType = {
    id?: true
    name?: true
    addressId?: true
    _all?: true
  }

  export type BankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank to aggregate.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banks
    **/
    _count?: true | BankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankMaxAggregateInputType
  }

  export type GetBankAggregateType<T extends BankAggregateArgs> = {
        [P in keyof T & keyof AggregateBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank[P]>
      : GetScalarType<T[P], AggregateBank[P]>
  }




  export type BankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWhereInput
    orderBy?: BankOrderByWithAggregationInput | BankOrderByWithAggregationInput[]
    by: BankScalarFieldEnum[] | BankScalarFieldEnum
    having?: BankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankCountAggregateInputType | true
    _avg?: BankAvgAggregateInputType
    _sum?: BankSumAggregateInputType
    _min?: BankMinAggregateInputType
    _max?: BankMaxAggregateInputType
  }

  export type BankGroupByOutputType = {
    id: number
    name: string
    addressId: number
    _count: BankCountAggregateOutputType | null
    _avg: BankAvgAggregateOutputType | null
    _sum: BankSumAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  type GetBankGroupByPayload<T extends BankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankGroupByOutputType[P]>
            : GetScalarType<T[P], BankGroupByOutputType[P]>
        }
      >
    >


  export type BankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addressId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    swiftCode?: boolean | Bank$swiftCodeArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addressId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addressId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectScalar = {
    id?: boolean
    name?: boolean
    addressId?: boolean
  }

  export type BankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "addressId", ExtArgs["result"]["bank"]>
  export type BankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    swiftCode?: boolean | Bank$swiftCodeArgs<ExtArgs>
  }
  export type BankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type BankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $BankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      swiftCode: Prisma.$SwiftCodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      addressId: number
    }, ExtArgs["result"]["bank"]>
    composites: {}
  }

  type BankGetPayload<S extends boolean | null | undefined | BankDefaultArgs> = $Result.GetResult<Prisma.$BankPayload, S>

  type BankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankCountAggregateInputType | true
    }

  export interface BankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank'], meta: { name: 'Bank' } }
    /**
     * Find zero or one Bank that matches the filter.
     * @param {BankFindUniqueArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankFindUniqueArgs>(args: SelectSubset<T, BankFindUniqueArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankFindUniqueOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankFindUniqueOrThrowArgs>(args: SelectSubset<T, BankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankFindFirstArgs>(args?: SelectSubset<T, BankFindFirstArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankFindFirstOrThrowArgs>(args?: SelectSubset<T, BankFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.bank.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.bank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankWithIdOnly = await prisma.bank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankFindManyArgs>(args?: SelectSubset<T, BankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank.
     * @param {BankCreateArgs} args - Arguments to create a Bank.
     * @example
     * // Create one Bank
     * const Bank = await prisma.bank.create({
     *   data: {
     *     // ... data to create a Bank
     *   }
     * })
     * 
     */
    create<T extends BankCreateArgs>(args: SelectSubset<T, BankCreateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {BankCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankCreateManyArgs>(args?: SelectSubset<T, BankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banks and returns the data saved in the database.
     * @param {BankCreateManyAndReturnArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankCreateManyAndReturnArgs>(args?: SelectSubset<T, BankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bank.
     * @param {BankDeleteArgs} args - Arguments to delete one Bank.
     * @example
     * // Delete one Bank
     * const Bank = await prisma.bank.delete({
     *   where: {
     *     // ... filter to delete one Bank
     *   }
     * })
     * 
     */
    delete<T extends BankDeleteArgs>(args: SelectSubset<T, BankDeleteArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank.
     * @param {BankUpdateArgs} args - Arguments to update one Bank.
     * @example
     * // Update one Bank
     * const bank = await prisma.bank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankUpdateArgs>(args: SelectSubset<T, BankUpdateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {BankDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.bank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankDeleteManyArgs>(args?: SelectSubset<T, BankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankUpdateManyArgs>(args: SelectSubset<T, BankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks and returns the data updated in the database.
     * @param {BankUpdateManyAndReturnArgs} args - Arguments to update many Banks.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankUpdateManyAndReturnArgs>(args: SelectSubset<T, BankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bank.
     * @param {BankUpsertArgs} args - Arguments to update or create a Bank.
     * @example
     * // Update or create a Bank
     * const bank = await prisma.bank.upsert({
     *   create: {
     *     // ... data to create a Bank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank we want to update
     *   }
     * })
     */
    upsert<T extends BankUpsertArgs>(args: SelectSubset<T, BankUpsertArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.bank.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends BankCountArgs>(
      args?: Subset<T, BankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAggregateArgs>(args: Subset<T, BankAggregateArgs>): Prisma.PrismaPromise<GetBankAggregateType<T>>

    /**
     * Group by Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankGroupByArgs['orderBy'] }
        : { orderBy?: BankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank model
   */
  readonly fields: BankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    swiftCode<T extends Bank$swiftCodeArgs<ExtArgs> = {}>(args?: Subset<T, Bank$swiftCodeArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bank model
   */
  interface BankFieldRefs {
    readonly id: FieldRef<"Bank", 'Int'>
    readonly name: FieldRef<"Bank", 'String'>
    readonly addressId: FieldRef<"Bank", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bank findUnique
   */
  export type BankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findUniqueOrThrow
   */
  export type BankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findFirst
   */
  export type BankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findFirstOrThrow
   */
  export type BankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findMany
   */
  export type BankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Banks to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank create
   */
  export type BankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank.
     */
    data: XOR<BankCreateInput, BankUncheckedCreateInput>
  }

  /**
   * Bank createMany
   */
  export type BankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank createManyAndReturn
   */
  export type BankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank update
   */
  export type BankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank.
     */
    data: XOR<BankUpdateInput, BankUncheckedUpdateInput>
    /**
     * Choose, which Bank to update.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank updateMany
   */
  export type BankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank updateManyAndReturn
   */
  export type BankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank upsert
   */
  export type BankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank to update in case it exists.
     */
    where: BankWhereUniqueInput
    /**
     * In case the Bank found by the `where` argument doesn't exist, create a new Bank with this data.
     */
    create: XOR<BankCreateInput, BankUncheckedCreateInput>
    /**
     * In case the Bank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankUpdateInput, BankUncheckedUpdateInput>
  }

  /**
   * Bank delete
   */
  export type BankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter which Bank to delete.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank deleteMany
   */
  export type BankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banks to delete
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to delete.
     */
    limit?: number
  }

  /**
   * Bank.swiftCode
   */
  export type Bank$swiftCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    where?: SwiftCodeWhereInput
  }

  /**
   * Bank without action
   */
  export type BankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
  }


  /**
   * Model SwiftCode
   */

  export type AggregateSwiftCode = {
    _count: SwiftCodeCountAggregateOutputType | null
    _avg: SwiftCodeAvgAggregateOutputType | null
    _sum: SwiftCodeSumAggregateOutputType | null
    _min: SwiftCodeMinAggregateOutputType | null
    _max: SwiftCodeMaxAggregateOutputType | null
  }

  export type SwiftCodeAvgAggregateOutputType = {
    bankId: number | null
  }

  export type SwiftCodeSumAggregateOutputType = {
    bankId: number | null
  }

  export type SwiftCodeMinAggregateOutputType = {
    swiftCode: string | null
    codeType: string | null
    bankId: number | null
  }

  export type SwiftCodeMaxAggregateOutputType = {
    swiftCode: string | null
    codeType: string | null
    bankId: number | null
  }

  export type SwiftCodeCountAggregateOutputType = {
    swiftCode: number
    codeType: number
    bankId: number
    _all: number
  }


  export type SwiftCodeAvgAggregateInputType = {
    bankId?: true
  }

  export type SwiftCodeSumAggregateInputType = {
    bankId?: true
  }

  export type SwiftCodeMinAggregateInputType = {
    swiftCode?: true
    codeType?: true
    bankId?: true
  }

  export type SwiftCodeMaxAggregateInputType = {
    swiftCode?: true
    codeType?: true
    bankId?: true
  }

  export type SwiftCodeCountAggregateInputType = {
    swiftCode?: true
    codeType?: true
    bankId?: true
    _all?: true
  }

  export type SwiftCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwiftCode to aggregate.
     */
    where?: SwiftCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwiftCodes to fetch.
     */
    orderBy?: SwiftCodeOrderByWithRelationInput | SwiftCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwiftCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwiftCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwiftCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SwiftCodes
    **/
    _count?: true | SwiftCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SwiftCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SwiftCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwiftCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwiftCodeMaxAggregateInputType
  }

  export type GetSwiftCodeAggregateType<T extends SwiftCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateSwiftCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwiftCode[P]>
      : GetScalarType<T[P], AggregateSwiftCode[P]>
  }




  export type SwiftCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwiftCodeWhereInput
    orderBy?: SwiftCodeOrderByWithAggregationInput | SwiftCodeOrderByWithAggregationInput[]
    by: SwiftCodeScalarFieldEnum[] | SwiftCodeScalarFieldEnum
    having?: SwiftCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwiftCodeCountAggregateInputType | true
    _avg?: SwiftCodeAvgAggregateInputType
    _sum?: SwiftCodeSumAggregateInputType
    _min?: SwiftCodeMinAggregateInputType
    _max?: SwiftCodeMaxAggregateInputType
  }

  export type SwiftCodeGroupByOutputType = {
    swiftCode: string
    codeType: string
    bankId: number
    _count: SwiftCodeCountAggregateOutputType | null
    _avg: SwiftCodeAvgAggregateOutputType | null
    _sum: SwiftCodeSumAggregateOutputType | null
    _min: SwiftCodeMinAggregateOutputType | null
    _max: SwiftCodeMaxAggregateOutputType | null
  }

  type GetSwiftCodeGroupByPayload<T extends SwiftCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwiftCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwiftCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwiftCodeGroupByOutputType[P]>
            : GetScalarType<T[P], SwiftCodeGroupByOutputType[P]>
        }
      >
    >


  export type SwiftCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    swiftCode?: boolean
    codeType?: boolean
    bankId?: boolean
    bank?: boolean | SwiftCode$bankArgs<ExtArgs>
  }, ExtArgs["result"]["swiftCode"]>

  export type SwiftCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    swiftCode?: boolean
    codeType?: boolean
    bankId?: boolean
    bank?: boolean | SwiftCode$bankArgs<ExtArgs>
  }, ExtArgs["result"]["swiftCode"]>

  export type SwiftCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    swiftCode?: boolean
    codeType?: boolean
    bankId?: boolean
    bank?: boolean | SwiftCode$bankArgs<ExtArgs>
  }, ExtArgs["result"]["swiftCode"]>

  export type SwiftCodeSelectScalar = {
    swiftCode?: boolean
    codeType?: boolean
    bankId?: boolean
  }

  export type SwiftCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"swiftCode" | "codeType" | "bankId", ExtArgs["result"]["swiftCode"]>
  export type SwiftCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | SwiftCode$bankArgs<ExtArgs>
  }
  export type SwiftCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | SwiftCode$bankArgs<ExtArgs>
  }
  export type SwiftCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | SwiftCode$bankArgs<ExtArgs>
  }

  export type $SwiftCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SwiftCode"
    objects: {
      bank: Prisma.$BankPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      swiftCode: string
      codeType: string
      bankId: number
    }, ExtArgs["result"]["swiftCode"]>
    composites: {}
  }

  type SwiftCodeGetPayload<S extends boolean | null | undefined | SwiftCodeDefaultArgs> = $Result.GetResult<Prisma.$SwiftCodePayload, S>

  type SwiftCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwiftCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwiftCodeCountAggregateInputType | true
    }

  export interface SwiftCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SwiftCode'], meta: { name: 'SwiftCode' } }
    /**
     * Find zero or one SwiftCode that matches the filter.
     * @param {SwiftCodeFindUniqueArgs} args - Arguments to find a SwiftCode
     * @example
     * // Get one SwiftCode
     * const swiftCode = await prisma.swiftCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwiftCodeFindUniqueArgs>(args: SelectSubset<T, SwiftCodeFindUniqueArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SwiftCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwiftCodeFindUniqueOrThrowArgs} args - Arguments to find a SwiftCode
     * @example
     * // Get one SwiftCode
     * const swiftCode = await prisma.swiftCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwiftCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, SwiftCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwiftCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwiftCodeFindFirstArgs} args - Arguments to find a SwiftCode
     * @example
     * // Get one SwiftCode
     * const swiftCode = await prisma.swiftCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwiftCodeFindFirstArgs>(args?: SelectSubset<T, SwiftCodeFindFirstArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwiftCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwiftCodeFindFirstOrThrowArgs} args - Arguments to find a SwiftCode
     * @example
     * // Get one SwiftCode
     * const swiftCode = await prisma.swiftCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwiftCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, SwiftCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwiftCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwiftCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SwiftCodes
     * const swiftCodes = await prisma.swiftCode.findMany()
     * 
     * // Get first 10 SwiftCodes
     * const swiftCodes = await prisma.swiftCode.findMany({ take: 10 })
     * 
     * // Only select the `swiftCode`
     * const swiftCodeWithSwiftCodeOnly = await prisma.swiftCode.findMany({ select: { swiftCode: true } })
     * 
     */
    findMany<T extends SwiftCodeFindManyArgs>(args?: SelectSubset<T, SwiftCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SwiftCode.
     * @param {SwiftCodeCreateArgs} args - Arguments to create a SwiftCode.
     * @example
     * // Create one SwiftCode
     * const SwiftCode = await prisma.swiftCode.create({
     *   data: {
     *     // ... data to create a SwiftCode
     *   }
     * })
     * 
     */
    create<T extends SwiftCodeCreateArgs>(args: SelectSubset<T, SwiftCodeCreateArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SwiftCodes.
     * @param {SwiftCodeCreateManyArgs} args - Arguments to create many SwiftCodes.
     * @example
     * // Create many SwiftCodes
     * const swiftCode = await prisma.swiftCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwiftCodeCreateManyArgs>(args?: SelectSubset<T, SwiftCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SwiftCodes and returns the data saved in the database.
     * @param {SwiftCodeCreateManyAndReturnArgs} args - Arguments to create many SwiftCodes.
     * @example
     * // Create many SwiftCodes
     * const swiftCode = await prisma.swiftCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SwiftCodes and only return the `swiftCode`
     * const swiftCodeWithSwiftCodeOnly = await prisma.swiftCode.createManyAndReturn({
     *   select: { swiftCode: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwiftCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, SwiftCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SwiftCode.
     * @param {SwiftCodeDeleteArgs} args - Arguments to delete one SwiftCode.
     * @example
     * // Delete one SwiftCode
     * const SwiftCode = await prisma.swiftCode.delete({
     *   where: {
     *     // ... filter to delete one SwiftCode
     *   }
     * })
     * 
     */
    delete<T extends SwiftCodeDeleteArgs>(args: SelectSubset<T, SwiftCodeDeleteArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SwiftCode.
     * @param {SwiftCodeUpdateArgs} args - Arguments to update one SwiftCode.
     * @example
     * // Update one SwiftCode
     * const swiftCode = await prisma.swiftCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwiftCodeUpdateArgs>(args: SelectSubset<T, SwiftCodeUpdateArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SwiftCodes.
     * @param {SwiftCodeDeleteManyArgs} args - Arguments to filter SwiftCodes to delete.
     * @example
     * // Delete a few SwiftCodes
     * const { count } = await prisma.swiftCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwiftCodeDeleteManyArgs>(args?: SelectSubset<T, SwiftCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwiftCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwiftCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SwiftCodes
     * const swiftCode = await prisma.swiftCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwiftCodeUpdateManyArgs>(args: SelectSubset<T, SwiftCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwiftCodes and returns the data updated in the database.
     * @param {SwiftCodeUpdateManyAndReturnArgs} args - Arguments to update many SwiftCodes.
     * @example
     * // Update many SwiftCodes
     * const swiftCode = await prisma.swiftCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SwiftCodes and only return the `swiftCode`
     * const swiftCodeWithSwiftCodeOnly = await prisma.swiftCode.updateManyAndReturn({
     *   select: { swiftCode: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SwiftCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, SwiftCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SwiftCode.
     * @param {SwiftCodeUpsertArgs} args - Arguments to update or create a SwiftCode.
     * @example
     * // Update or create a SwiftCode
     * const swiftCode = await prisma.swiftCode.upsert({
     *   create: {
     *     // ... data to create a SwiftCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SwiftCode we want to update
     *   }
     * })
     */
    upsert<T extends SwiftCodeUpsertArgs>(args: SelectSubset<T, SwiftCodeUpsertArgs<ExtArgs>>): Prisma__SwiftCodeClient<$Result.GetResult<Prisma.$SwiftCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SwiftCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwiftCodeCountArgs} args - Arguments to filter SwiftCodes to count.
     * @example
     * // Count the number of SwiftCodes
     * const count = await prisma.swiftCode.count({
     *   where: {
     *     // ... the filter for the SwiftCodes we want to count
     *   }
     * })
    **/
    count<T extends SwiftCodeCountArgs>(
      args?: Subset<T, SwiftCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwiftCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SwiftCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwiftCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwiftCodeAggregateArgs>(args: Subset<T, SwiftCodeAggregateArgs>): Prisma.PrismaPromise<GetSwiftCodeAggregateType<T>>

    /**
     * Group by SwiftCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwiftCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwiftCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwiftCodeGroupByArgs['orderBy'] }
        : { orderBy?: SwiftCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwiftCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwiftCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SwiftCode model
   */
  readonly fields: SwiftCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SwiftCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwiftCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank<T extends SwiftCode$bankArgs<ExtArgs> = {}>(args?: Subset<T, SwiftCode$bankArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SwiftCode model
   */
  interface SwiftCodeFieldRefs {
    readonly swiftCode: FieldRef<"SwiftCode", 'String'>
    readonly codeType: FieldRef<"SwiftCode", 'String'>
    readonly bankId: FieldRef<"SwiftCode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SwiftCode findUnique
   */
  export type SwiftCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * Filter, which SwiftCode to fetch.
     */
    where: SwiftCodeWhereUniqueInput
  }

  /**
   * SwiftCode findUniqueOrThrow
   */
  export type SwiftCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * Filter, which SwiftCode to fetch.
     */
    where: SwiftCodeWhereUniqueInput
  }

  /**
   * SwiftCode findFirst
   */
  export type SwiftCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * Filter, which SwiftCode to fetch.
     */
    where?: SwiftCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwiftCodes to fetch.
     */
    orderBy?: SwiftCodeOrderByWithRelationInput | SwiftCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwiftCodes.
     */
    cursor?: SwiftCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwiftCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwiftCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwiftCodes.
     */
    distinct?: SwiftCodeScalarFieldEnum | SwiftCodeScalarFieldEnum[]
  }

  /**
   * SwiftCode findFirstOrThrow
   */
  export type SwiftCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * Filter, which SwiftCode to fetch.
     */
    where?: SwiftCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwiftCodes to fetch.
     */
    orderBy?: SwiftCodeOrderByWithRelationInput | SwiftCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwiftCodes.
     */
    cursor?: SwiftCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwiftCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwiftCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwiftCodes.
     */
    distinct?: SwiftCodeScalarFieldEnum | SwiftCodeScalarFieldEnum[]
  }

  /**
   * SwiftCode findMany
   */
  export type SwiftCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * Filter, which SwiftCodes to fetch.
     */
    where?: SwiftCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwiftCodes to fetch.
     */
    orderBy?: SwiftCodeOrderByWithRelationInput | SwiftCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SwiftCodes.
     */
    cursor?: SwiftCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwiftCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwiftCodes.
     */
    skip?: number
    distinct?: SwiftCodeScalarFieldEnum | SwiftCodeScalarFieldEnum[]
  }

  /**
   * SwiftCode create
   */
  export type SwiftCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a SwiftCode.
     */
    data: XOR<SwiftCodeCreateInput, SwiftCodeUncheckedCreateInput>
  }

  /**
   * SwiftCode createMany
   */
  export type SwiftCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SwiftCodes.
     */
    data: SwiftCodeCreateManyInput | SwiftCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SwiftCode createManyAndReturn
   */
  export type SwiftCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * The data used to create many SwiftCodes.
     */
    data: SwiftCodeCreateManyInput | SwiftCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwiftCode update
   */
  export type SwiftCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a SwiftCode.
     */
    data: XOR<SwiftCodeUpdateInput, SwiftCodeUncheckedUpdateInput>
    /**
     * Choose, which SwiftCode to update.
     */
    where: SwiftCodeWhereUniqueInput
  }

  /**
   * SwiftCode updateMany
   */
  export type SwiftCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SwiftCodes.
     */
    data: XOR<SwiftCodeUpdateManyMutationInput, SwiftCodeUncheckedUpdateManyInput>
    /**
     * Filter which SwiftCodes to update
     */
    where?: SwiftCodeWhereInput
    /**
     * Limit how many SwiftCodes to update.
     */
    limit?: number
  }

  /**
   * SwiftCode updateManyAndReturn
   */
  export type SwiftCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * The data used to update SwiftCodes.
     */
    data: XOR<SwiftCodeUpdateManyMutationInput, SwiftCodeUncheckedUpdateManyInput>
    /**
     * Filter which SwiftCodes to update
     */
    where?: SwiftCodeWhereInput
    /**
     * Limit how many SwiftCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwiftCode upsert
   */
  export type SwiftCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the SwiftCode to update in case it exists.
     */
    where: SwiftCodeWhereUniqueInput
    /**
     * In case the SwiftCode found by the `where` argument doesn't exist, create a new SwiftCode with this data.
     */
    create: XOR<SwiftCodeCreateInput, SwiftCodeUncheckedCreateInput>
    /**
     * In case the SwiftCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwiftCodeUpdateInput, SwiftCodeUncheckedUpdateInput>
  }

  /**
   * SwiftCode delete
   */
  export type SwiftCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
    /**
     * Filter which SwiftCode to delete.
     */
    where: SwiftCodeWhereUniqueInput
  }

  /**
   * SwiftCode deleteMany
   */
  export type SwiftCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwiftCodes to delete
     */
    where?: SwiftCodeWhereInput
    /**
     * Limit how many SwiftCodes to delete.
     */
    limit?: number
  }

  /**
   * SwiftCode.bank
   */
  export type SwiftCode$bankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    where?: BankWhereInput
  }

  /**
   * SwiftCode without action
   */
  export type SwiftCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwiftCode
     */
    select?: SwiftCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwiftCode
     */
    omit?: SwiftCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwiftCodeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    iso2Code: 'iso2Code',
    countryName: 'countryName',
    townName: 'townName',
    timeZone: 'timeZone'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    addressId: 'addressId'
  };

  export type BankScalarFieldEnum = (typeof BankScalarFieldEnum)[keyof typeof BankScalarFieldEnum]


  export const SwiftCodeScalarFieldEnum: {
    swiftCode: 'swiftCode',
    codeType: 'codeType',
    bankId: 'bankId'
  };

  export type SwiftCodeScalarFieldEnum = (typeof SwiftCodeScalarFieldEnum)[keyof typeof SwiftCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    address?: StringNullableFilter<"Address"> | string | null
    iso2Code?: StringFilter<"Address"> | string
    countryName?: StringFilter<"Address"> | string
    townName?: StringFilter<"Address"> | string
    timeZone?: StringFilter<"Address"> | string
    banks?: BankListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    iso2Code?: SortOrder
    countryName?: SortOrder
    townName?: SortOrder
    timeZone?: SortOrder
    banks?: BankOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    address?: StringNullableFilter<"Address"> | string | null
    iso2Code?: StringFilter<"Address"> | string
    countryName?: StringFilter<"Address"> | string
    townName?: StringFilter<"Address"> | string
    timeZone?: StringFilter<"Address"> | string
    banks?: BankListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    iso2Code?: SortOrder
    countryName?: SortOrder
    townName?: SortOrder
    timeZone?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    address?: StringNullableWithAggregatesFilter<"Address"> | string | null
    iso2Code?: StringWithAggregatesFilter<"Address"> | string
    countryName?: StringWithAggregatesFilter<"Address"> | string
    townName?: StringWithAggregatesFilter<"Address"> | string
    timeZone?: StringWithAggregatesFilter<"Address"> | string
  }

  export type BankWhereInput = {
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    id?: IntFilter<"Bank"> | number
    name?: StringFilter<"Bank"> | string
    addressId?: IntFilter<"Bank"> | number
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    swiftCode?: XOR<SwiftCodeNullableScalarRelationFilter, SwiftCodeWhereInput> | null
  }

  export type BankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    addressId?: SortOrder
    address?: AddressOrderByWithRelationInput
    swiftCode?: SwiftCodeOrderByWithRelationInput
  }

  export type BankWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    name?: StringFilter<"Bank"> | string
    addressId?: IntFilter<"Bank"> | number
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    swiftCode?: XOR<SwiftCodeNullableScalarRelationFilter, SwiftCodeWhereInput> | null
  }, "id">

  export type BankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    addressId?: SortOrder
    _count?: BankCountOrderByAggregateInput
    _avg?: BankAvgOrderByAggregateInput
    _max?: BankMaxOrderByAggregateInput
    _min?: BankMinOrderByAggregateInput
    _sum?: BankSumOrderByAggregateInput
  }

  export type BankScalarWhereWithAggregatesInput = {
    AND?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    OR?: BankScalarWhereWithAggregatesInput[]
    NOT?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bank"> | number
    name?: StringWithAggregatesFilter<"Bank"> | string
    addressId?: IntWithAggregatesFilter<"Bank"> | number
  }

  export type SwiftCodeWhereInput = {
    AND?: SwiftCodeWhereInput | SwiftCodeWhereInput[]
    OR?: SwiftCodeWhereInput[]
    NOT?: SwiftCodeWhereInput | SwiftCodeWhereInput[]
    swiftCode?: StringFilter<"SwiftCode"> | string
    codeType?: StringFilter<"SwiftCode"> | string
    bankId?: IntFilter<"SwiftCode"> | number
    bank?: XOR<BankNullableScalarRelationFilter, BankWhereInput> | null
  }

  export type SwiftCodeOrderByWithRelationInput = {
    swiftCode?: SortOrder
    codeType?: SortOrder
    bankId?: SortOrder
    bank?: BankOrderByWithRelationInput
  }

  export type SwiftCodeWhereUniqueInput = Prisma.AtLeast<{
    swiftCode?: string
    bankId?: number
    AND?: SwiftCodeWhereInput | SwiftCodeWhereInput[]
    OR?: SwiftCodeWhereInput[]
    NOT?: SwiftCodeWhereInput | SwiftCodeWhereInput[]
    codeType?: StringFilter<"SwiftCode"> | string
    bank?: XOR<BankNullableScalarRelationFilter, BankWhereInput> | null
  }, "swiftCode" | "bankId">

  export type SwiftCodeOrderByWithAggregationInput = {
    swiftCode?: SortOrder
    codeType?: SortOrder
    bankId?: SortOrder
    _count?: SwiftCodeCountOrderByAggregateInput
    _avg?: SwiftCodeAvgOrderByAggregateInput
    _max?: SwiftCodeMaxOrderByAggregateInput
    _min?: SwiftCodeMinOrderByAggregateInput
    _sum?: SwiftCodeSumOrderByAggregateInput
  }

  export type SwiftCodeScalarWhereWithAggregatesInput = {
    AND?: SwiftCodeScalarWhereWithAggregatesInput | SwiftCodeScalarWhereWithAggregatesInput[]
    OR?: SwiftCodeScalarWhereWithAggregatesInput[]
    NOT?: SwiftCodeScalarWhereWithAggregatesInput | SwiftCodeScalarWhereWithAggregatesInput[]
    swiftCode?: StringWithAggregatesFilter<"SwiftCode"> | string
    codeType?: StringWithAggregatesFilter<"SwiftCode"> | string
    bankId?: IntWithAggregatesFilter<"SwiftCode"> | number
  }

  export type AddressCreateInput = {
    address?: string | null
    iso2Code: string
    countryName: string
    townName: string
    timeZone: string
    banks?: BankCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    address?: string | null
    iso2Code: string
    countryName: string
    townName: string
    timeZone: string
    banks?: BankUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    iso2Code?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    townName?: StringFieldUpdateOperationsInput | string
    timeZone?: StringFieldUpdateOperationsInput | string
    banks?: BankUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    iso2Code?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    townName?: StringFieldUpdateOperationsInput | string
    timeZone?: StringFieldUpdateOperationsInput | string
    banks?: BankUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    address?: string | null
    iso2Code: string
    countryName: string
    townName: string
    timeZone: string
  }

  export type AddressUpdateManyMutationInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    iso2Code?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    townName?: StringFieldUpdateOperationsInput | string
    timeZone?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    iso2Code?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    townName?: StringFieldUpdateOperationsInput | string
    timeZone?: StringFieldUpdateOperationsInput | string
  }

  export type BankCreateInput = {
    name: string
    address: AddressCreateNestedOneWithoutBanksInput
    swiftCode?: SwiftCodeCreateNestedOneWithoutBankInput
  }

  export type BankUncheckedCreateInput = {
    id?: number
    name: string
    addressId: number
    swiftCode?: SwiftCodeUncheckedCreateNestedOneWithoutBankInput
  }

  export type BankUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBanksNestedInput
    swiftCode?: SwiftCodeUpdateOneWithoutBankNestedInput
  }

  export type BankUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addressId?: IntFieldUpdateOperationsInput | number
    swiftCode?: SwiftCodeUncheckedUpdateOneWithoutBankNestedInput
  }

  export type BankCreateManyInput = {
    id?: number
    name: string
    addressId: number
  }

  export type BankUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BankUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type SwiftCodeCreateInput = {
    swiftCode: string
    codeType: string
    bank?: BankCreateNestedOneWithoutSwiftCodeInput
  }

  export type SwiftCodeUncheckedCreateInput = {
    swiftCode: string
    codeType: string
    bankId: number
  }

  export type SwiftCodeUpdateInput = {
    swiftCode?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    bank?: BankUpdateOneWithoutSwiftCodeNestedInput
  }

  export type SwiftCodeUncheckedUpdateInput = {
    swiftCode?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    bankId?: IntFieldUpdateOperationsInput | number
  }

  export type SwiftCodeCreateManyInput = {
    swiftCode: string
    codeType: string
    bankId: number
  }

  export type SwiftCodeUpdateManyMutationInput = {
    swiftCode?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
  }

  export type SwiftCodeUncheckedUpdateManyInput = {
    swiftCode?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    bankId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BankListRelationFilter = {
    every?: BankWhereInput
    some?: BankWhereInput
    none?: BankWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BankOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    iso2Code?: SortOrder
    countryName?: SortOrder
    townName?: SortOrder
    timeZone?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    iso2Code?: SortOrder
    countryName?: SortOrder
    townName?: SortOrder
    timeZone?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    iso2Code?: SortOrder
    countryName?: SortOrder
    townName?: SortOrder
    timeZone?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type SwiftCodeNullableScalarRelationFilter = {
    is?: SwiftCodeWhereInput | null
    isNot?: SwiftCodeWhereInput | null
  }

  export type BankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addressId?: SortOrder
  }

  export type BankAvgOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type BankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addressId?: SortOrder
  }

  export type BankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addressId?: SortOrder
  }

  export type BankSumOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type BankNullableScalarRelationFilter = {
    is?: BankWhereInput | null
    isNot?: BankWhereInput | null
  }

  export type SwiftCodeCountOrderByAggregateInput = {
    swiftCode?: SortOrder
    codeType?: SortOrder
    bankId?: SortOrder
  }

  export type SwiftCodeAvgOrderByAggregateInput = {
    bankId?: SortOrder
  }

  export type SwiftCodeMaxOrderByAggregateInput = {
    swiftCode?: SortOrder
    codeType?: SortOrder
    bankId?: SortOrder
  }

  export type SwiftCodeMinOrderByAggregateInput = {
    swiftCode?: SortOrder
    codeType?: SortOrder
    bankId?: SortOrder
  }

  export type SwiftCodeSumOrderByAggregateInput = {
    bankId?: SortOrder
  }

  export type BankCreateNestedManyWithoutAddressInput = {
    create?: XOR<BankCreateWithoutAddressInput, BankUncheckedCreateWithoutAddressInput> | BankCreateWithoutAddressInput[] | BankUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: BankCreateOrConnectWithoutAddressInput | BankCreateOrConnectWithoutAddressInput[]
    createMany?: BankCreateManyAddressInputEnvelope
    connect?: BankWhereUniqueInput | BankWhereUniqueInput[]
  }

  export type BankUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<BankCreateWithoutAddressInput, BankUncheckedCreateWithoutAddressInput> | BankCreateWithoutAddressInput[] | BankUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: BankCreateOrConnectWithoutAddressInput | BankCreateOrConnectWithoutAddressInput[]
    createMany?: BankCreateManyAddressInputEnvelope
    connect?: BankWhereUniqueInput | BankWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BankUpdateManyWithoutAddressNestedInput = {
    create?: XOR<BankCreateWithoutAddressInput, BankUncheckedCreateWithoutAddressInput> | BankCreateWithoutAddressInput[] | BankUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: BankCreateOrConnectWithoutAddressInput | BankCreateOrConnectWithoutAddressInput[]
    upsert?: BankUpsertWithWhereUniqueWithoutAddressInput | BankUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: BankCreateManyAddressInputEnvelope
    set?: BankWhereUniqueInput | BankWhereUniqueInput[]
    disconnect?: BankWhereUniqueInput | BankWhereUniqueInput[]
    delete?: BankWhereUniqueInput | BankWhereUniqueInput[]
    connect?: BankWhereUniqueInput | BankWhereUniqueInput[]
    update?: BankUpdateWithWhereUniqueWithoutAddressInput | BankUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: BankUpdateManyWithWhereWithoutAddressInput | BankUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: BankScalarWhereInput | BankScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BankUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<BankCreateWithoutAddressInput, BankUncheckedCreateWithoutAddressInput> | BankCreateWithoutAddressInput[] | BankUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: BankCreateOrConnectWithoutAddressInput | BankCreateOrConnectWithoutAddressInput[]
    upsert?: BankUpsertWithWhereUniqueWithoutAddressInput | BankUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: BankCreateManyAddressInputEnvelope
    set?: BankWhereUniqueInput | BankWhereUniqueInput[]
    disconnect?: BankWhereUniqueInput | BankWhereUniqueInput[]
    delete?: BankWhereUniqueInput | BankWhereUniqueInput[]
    connect?: BankWhereUniqueInput | BankWhereUniqueInput[]
    update?: BankUpdateWithWhereUniqueWithoutAddressInput | BankUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: BankUpdateManyWithWhereWithoutAddressInput | BankUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: BankScalarWhereInput | BankScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutBanksInput = {
    create?: XOR<AddressCreateWithoutBanksInput, AddressUncheckedCreateWithoutBanksInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBanksInput
    connect?: AddressWhereUniqueInput
  }

  export type SwiftCodeCreateNestedOneWithoutBankInput = {
    create?: XOR<SwiftCodeCreateWithoutBankInput, SwiftCodeUncheckedCreateWithoutBankInput>
    connectOrCreate?: SwiftCodeCreateOrConnectWithoutBankInput
    connect?: SwiftCodeWhereUniqueInput
  }

  export type SwiftCodeUncheckedCreateNestedOneWithoutBankInput = {
    create?: XOR<SwiftCodeCreateWithoutBankInput, SwiftCodeUncheckedCreateWithoutBankInput>
    connectOrCreate?: SwiftCodeCreateOrConnectWithoutBankInput
    connect?: SwiftCodeWhereUniqueInput
  }

  export type AddressUpdateOneRequiredWithoutBanksNestedInput = {
    create?: XOR<AddressCreateWithoutBanksInput, AddressUncheckedCreateWithoutBanksInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBanksInput
    upsert?: AddressUpsertWithoutBanksInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutBanksInput, AddressUpdateWithoutBanksInput>, AddressUncheckedUpdateWithoutBanksInput>
  }

  export type SwiftCodeUpdateOneWithoutBankNestedInput = {
    create?: XOR<SwiftCodeCreateWithoutBankInput, SwiftCodeUncheckedCreateWithoutBankInput>
    connectOrCreate?: SwiftCodeCreateOrConnectWithoutBankInput
    upsert?: SwiftCodeUpsertWithoutBankInput
    disconnect?: SwiftCodeWhereInput | boolean
    delete?: SwiftCodeWhereInput | boolean
    connect?: SwiftCodeWhereUniqueInput
    update?: XOR<XOR<SwiftCodeUpdateToOneWithWhereWithoutBankInput, SwiftCodeUpdateWithoutBankInput>, SwiftCodeUncheckedUpdateWithoutBankInput>
  }

  export type SwiftCodeUncheckedUpdateOneWithoutBankNestedInput = {
    create?: XOR<SwiftCodeCreateWithoutBankInput, SwiftCodeUncheckedCreateWithoutBankInput>
    connectOrCreate?: SwiftCodeCreateOrConnectWithoutBankInput
    upsert?: SwiftCodeUpsertWithoutBankInput
    disconnect?: SwiftCodeWhereInput | boolean
    delete?: SwiftCodeWhereInput | boolean
    connect?: SwiftCodeWhereUniqueInput
    update?: XOR<XOR<SwiftCodeUpdateToOneWithWhereWithoutBankInput, SwiftCodeUpdateWithoutBankInput>, SwiftCodeUncheckedUpdateWithoutBankInput>
  }

  export type BankCreateNestedOneWithoutSwiftCodeInput = {
    create?: XOR<BankCreateWithoutSwiftCodeInput, BankUncheckedCreateWithoutSwiftCodeInput>
    connectOrCreate?: BankCreateOrConnectWithoutSwiftCodeInput
    connect?: BankWhereUniqueInput
  }

  export type BankUpdateOneWithoutSwiftCodeNestedInput = {
    create?: XOR<BankCreateWithoutSwiftCodeInput, BankUncheckedCreateWithoutSwiftCodeInput>
    connectOrCreate?: BankCreateOrConnectWithoutSwiftCodeInput
    upsert?: BankUpsertWithoutSwiftCodeInput
    disconnect?: BankWhereInput | boolean
    delete?: BankWhereInput | boolean
    connect?: BankWhereUniqueInput
    update?: XOR<XOR<BankUpdateToOneWithWhereWithoutSwiftCodeInput, BankUpdateWithoutSwiftCodeInput>, BankUncheckedUpdateWithoutSwiftCodeInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BankCreateWithoutAddressInput = {
    name: string
    swiftCode?: SwiftCodeCreateNestedOneWithoutBankInput
  }

  export type BankUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    swiftCode?: SwiftCodeUncheckedCreateNestedOneWithoutBankInput
  }

  export type BankCreateOrConnectWithoutAddressInput = {
    where: BankWhereUniqueInput
    create: XOR<BankCreateWithoutAddressInput, BankUncheckedCreateWithoutAddressInput>
  }

  export type BankCreateManyAddressInputEnvelope = {
    data: BankCreateManyAddressInput | BankCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type BankUpsertWithWhereUniqueWithoutAddressInput = {
    where: BankWhereUniqueInput
    update: XOR<BankUpdateWithoutAddressInput, BankUncheckedUpdateWithoutAddressInput>
    create: XOR<BankCreateWithoutAddressInput, BankUncheckedCreateWithoutAddressInput>
  }

  export type BankUpdateWithWhereUniqueWithoutAddressInput = {
    where: BankWhereUniqueInput
    data: XOR<BankUpdateWithoutAddressInput, BankUncheckedUpdateWithoutAddressInput>
  }

  export type BankUpdateManyWithWhereWithoutAddressInput = {
    where: BankScalarWhereInput
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyWithoutAddressInput>
  }

  export type BankScalarWhereInput = {
    AND?: BankScalarWhereInput | BankScalarWhereInput[]
    OR?: BankScalarWhereInput[]
    NOT?: BankScalarWhereInput | BankScalarWhereInput[]
    id?: IntFilter<"Bank"> | number
    name?: StringFilter<"Bank"> | string
    addressId?: IntFilter<"Bank"> | number
  }

  export type AddressCreateWithoutBanksInput = {
    address?: string | null
    iso2Code: string
    countryName: string
    townName: string
    timeZone: string
  }

  export type AddressUncheckedCreateWithoutBanksInput = {
    id?: number
    address?: string | null
    iso2Code: string
    countryName: string
    townName: string
    timeZone: string
  }

  export type AddressCreateOrConnectWithoutBanksInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutBanksInput, AddressUncheckedCreateWithoutBanksInput>
  }

  export type SwiftCodeCreateWithoutBankInput = {
    swiftCode: string
    codeType: string
  }

  export type SwiftCodeUncheckedCreateWithoutBankInput = {
    swiftCode: string
    codeType: string
  }

  export type SwiftCodeCreateOrConnectWithoutBankInput = {
    where: SwiftCodeWhereUniqueInput
    create: XOR<SwiftCodeCreateWithoutBankInput, SwiftCodeUncheckedCreateWithoutBankInput>
  }

  export type AddressUpsertWithoutBanksInput = {
    update: XOR<AddressUpdateWithoutBanksInput, AddressUncheckedUpdateWithoutBanksInput>
    create: XOR<AddressCreateWithoutBanksInput, AddressUncheckedCreateWithoutBanksInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutBanksInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutBanksInput, AddressUncheckedUpdateWithoutBanksInput>
  }

  export type AddressUpdateWithoutBanksInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    iso2Code?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    townName?: StringFieldUpdateOperationsInput | string
    timeZone?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutBanksInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    iso2Code?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    townName?: StringFieldUpdateOperationsInput | string
    timeZone?: StringFieldUpdateOperationsInput | string
  }

  export type SwiftCodeUpsertWithoutBankInput = {
    update: XOR<SwiftCodeUpdateWithoutBankInput, SwiftCodeUncheckedUpdateWithoutBankInput>
    create: XOR<SwiftCodeCreateWithoutBankInput, SwiftCodeUncheckedCreateWithoutBankInput>
    where?: SwiftCodeWhereInput
  }

  export type SwiftCodeUpdateToOneWithWhereWithoutBankInput = {
    where?: SwiftCodeWhereInput
    data: XOR<SwiftCodeUpdateWithoutBankInput, SwiftCodeUncheckedUpdateWithoutBankInput>
  }

  export type SwiftCodeUpdateWithoutBankInput = {
    swiftCode?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
  }

  export type SwiftCodeUncheckedUpdateWithoutBankInput = {
    swiftCode?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
  }

  export type BankCreateWithoutSwiftCodeInput = {
    name: string
    address: AddressCreateNestedOneWithoutBanksInput
  }

  export type BankUncheckedCreateWithoutSwiftCodeInput = {
    id?: number
    name: string
    addressId: number
  }

  export type BankCreateOrConnectWithoutSwiftCodeInput = {
    where: BankWhereUniqueInput
    create: XOR<BankCreateWithoutSwiftCodeInput, BankUncheckedCreateWithoutSwiftCodeInput>
  }

  export type BankUpsertWithoutSwiftCodeInput = {
    update: XOR<BankUpdateWithoutSwiftCodeInput, BankUncheckedUpdateWithoutSwiftCodeInput>
    create: XOR<BankCreateWithoutSwiftCodeInput, BankUncheckedCreateWithoutSwiftCodeInput>
    where?: BankWhereInput
  }

  export type BankUpdateToOneWithWhereWithoutSwiftCodeInput = {
    where?: BankWhereInput
    data: XOR<BankUpdateWithoutSwiftCodeInput, BankUncheckedUpdateWithoutSwiftCodeInput>
  }

  export type BankUpdateWithoutSwiftCodeInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutBanksNestedInput
  }

  export type BankUncheckedUpdateWithoutSwiftCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type BankCreateManyAddressInput = {
    id?: number
    name: string
  }

  export type BankUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    swiftCode?: SwiftCodeUpdateOneWithoutBankNestedInput
  }

  export type BankUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    swiftCode?: SwiftCodeUncheckedUpdateOneWithoutBankNestedInput
  }

  export type BankUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}