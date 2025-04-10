
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Epi
 * 
 */
export type Epi = $Result.DefaultSelection<Prisma.$EpiPayload>
/**
 * Model EpiEmployee
 * 
 */
export type EpiEmployee = $Result.DefaultSelection<Prisma.$EpiEmployeePayload>
/**
 * Model EpiEntry
 * 
 */
export type EpiEntry = $Result.DefaultSelection<Prisma.$EpiEntryPayload>
/**
 * Model EpiExit
 * 
 */
export type EpiExit = $Result.DefaultSelection<Prisma.$EpiExitPayload>
/**
 * Model MedicalExam
 * 
 */
export type MedicalExam = $Result.DefaultSelection<Prisma.$MedicalExamPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Employer: {
  Glênio: 'Glênio',
  Guilhermo: 'Guilhermo',
  Vagner: 'Vagner',
  Valmor: 'Valmor',
  Werner: 'Werner'
};

export type Employer = (typeof Employer)[keyof typeof Employer]


export const Department: {
  Pinheirinhos: 'Pinheirinhos',
  Unidade: 'Unidade',
  Guajuvira: 'Guajuvira'
};

export type Department = (typeof Department)[keyof typeof Department]


export const Function: {
  Gerente: 'Gerente',
  Supervisor: 'Supervisor',
  Coordenador: 'Coordenador',
  Analista: 'Analista',
  Assistente: 'Assistente'
};

export type Function = (typeof Function)[keyof typeof Function]


export const Status: {
  Ativo: 'Ativo',
  Inativo: 'Inativo'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Employer = $Enums.Employer

export const Employer: typeof $Enums.Employer

export type Department = $Enums.Department

export const Department: typeof $Enums.Department

export type Function = $Enums.Function

export const Function: typeof $Enums.Function

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.epi`: Exposes CRUD operations for the **Epi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Epis
    * const epis = await prisma.epi.findMany()
    * ```
    */
  get epi(): Prisma.EpiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.epiEmployee`: Exposes CRUD operations for the **EpiEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EpiEmployees
    * const epiEmployees = await prisma.epiEmployee.findMany()
    * ```
    */
  get epiEmployee(): Prisma.EpiEmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.epiEntry`: Exposes CRUD operations for the **EpiEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EpiEntries
    * const epiEntries = await prisma.epiEntry.findMany()
    * ```
    */
  get epiEntry(): Prisma.EpiEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.epiExit`: Exposes CRUD operations for the **EpiExit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EpiExits
    * const epiExits = await prisma.epiExit.findMany()
    * ```
    */
  get epiExit(): Prisma.EpiExitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalExam`: Exposes CRUD operations for the **MedicalExam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalExams
    * const medicalExams = await prisma.medicalExam.findMany()
    * ```
    */
  get medicalExam(): Prisma.MedicalExamDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Employee: 'Employee',
    Epi: 'Epi',
    EpiEmployee: 'EpiEmployee',
    EpiEntry: 'EpiEntry',
    EpiExit: 'EpiExit',
    MedicalExam: 'MedicalExam'
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
      modelProps: "employee" | "epi" | "epiEmployee" | "epiEntry" | "epiExit" | "medicalExam"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Epi: {
        payload: Prisma.$EpiPayload<ExtArgs>
        fields: Prisma.EpiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          findFirst: {
            args: Prisma.EpiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          findMany: {
            args: Prisma.EpiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>[]
          }
          create: {
            args: Prisma.EpiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          createMany: {
            args: Prisma.EpiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>[]
          }
          delete: {
            args: Prisma.EpiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          update: {
            args: Prisma.EpiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          deleteMany: {
            args: Prisma.EpiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>[]
          }
          upsert: {
            args: Prisma.EpiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiPayload>
          }
          aggregate: {
            args: Prisma.EpiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpi>
          }
          groupBy: {
            args: Prisma.EpiGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpiGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpiCountArgs<ExtArgs>
            result: $Utils.Optional<EpiCountAggregateOutputType> | number
          }
        }
      }
      EpiEmployee: {
        payload: Prisma.$EpiEmployeePayload<ExtArgs>
        fields: Prisma.EpiEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpiEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpiEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>
          }
          findFirst: {
            args: Prisma.EpiEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpiEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>
          }
          findMany: {
            args: Prisma.EpiEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>[]
          }
          create: {
            args: Prisma.EpiEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>
          }
          createMany: {
            args: Prisma.EpiEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpiEmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>[]
          }
          delete: {
            args: Prisma.EpiEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>
          }
          update: {
            args: Prisma.EpiEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>
          }
          deleteMany: {
            args: Prisma.EpiEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpiEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpiEmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>[]
          }
          upsert: {
            args: Prisma.EpiEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEmployeePayload>
          }
          aggregate: {
            args: Prisma.EpiEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpiEmployee>
          }
          groupBy: {
            args: Prisma.EpiEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpiEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpiEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EpiEmployeeCountAggregateOutputType> | number
          }
        }
      }
      EpiEntry: {
        payload: Prisma.$EpiEntryPayload<ExtArgs>
        fields: Prisma.EpiEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpiEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpiEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>
          }
          findFirst: {
            args: Prisma.EpiEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpiEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>
          }
          findMany: {
            args: Prisma.EpiEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>[]
          }
          create: {
            args: Prisma.EpiEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>
          }
          createMany: {
            args: Prisma.EpiEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpiEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>[]
          }
          delete: {
            args: Prisma.EpiEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>
          }
          update: {
            args: Prisma.EpiEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>
          }
          deleteMany: {
            args: Prisma.EpiEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpiEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpiEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>[]
          }
          upsert: {
            args: Prisma.EpiEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiEntryPayload>
          }
          aggregate: {
            args: Prisma.EpiEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpiEntry>
          }
          groupBy: {
            args: Prisma.EpiEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpiEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpiEntryCountArgs<ExtArgs>
            result: $Utils.Optional<EpiEntryCountAggregateOutputType> | number
          }
        }
      }
      EpiExit: {
        payload: Prisma.$EpiExitPayload<ExtArgs>
        fields: Prisma.EpiExitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpiExitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpiExitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>
          }
          findFirst: {
            args: Prisma.EpiExitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpiExitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>
          }
          findMany: {
            args: Prisma.EpiExitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>[]
          }
          create: {
            args: Prisma.EpiExitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>
          }
          createMany: {
            args: Prisma.EpiExitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpiExitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>[]
          }
          delete: {
            args: Prisma.EpiExitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>
          }
          update: {
            args: Prisma.EpiExitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>
          }
          deleteMany: {
            args: Prisma.EpiExitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpiExitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpiExitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>[]
          }
          upsert: {
            args: Prisma.EpiExitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpiExitPayload>
          }
          aggregate: {
            args: Prisma.EpiExitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpiExit>
          }
          groupBy: {
            args: Prisma.EpiExitGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpiExitGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpiExitCountArgs<ExtArgs>
            result: $Utils.Optional<EpiExitCountAggregateOutputType> | number
          }
        }
      }
      MedicalExam: {
        payload: Prisma.$MedicalExamPayload<ExtArgs>
        fields: Prisma.MedicalExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>
          }
          findFirst: {
            args: Prisma.MedicalExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>
          }
          findMany: {
            args: Prisma.MedicalExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>[]
          }
          create: {
            args: Prisma.MedicalExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>
          }
          createMany: {
            args: Prisma.MedicalExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>[]
          }
          delete: {
            args: Prisma.MedicalExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>
          }
          update: {
            args: Prisma.MedicalExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>
          }
          deleteMany: {
            args: Prisma.MedicalExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>[]
          }
          upsert: {
            args: Prisma.MedicalExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalExamPayload>
          }
          aggregate: {
            args: Prisma.MedicalExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalExam>
          }
          groupBy: {
            args: Prisma.MedicalExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalExamCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalExamCountAggregateOutputType> | number
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
    employee?: EmployeeOmit
    epi?: EpiOmit
    epiEmployee?: EpiEmployeeOmit
    epiEntry?: EpiEntryOmit
    epiExit?: EpiExitOmit
    medicalExam?: MedicalExamOmit
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    epies: number
    exits: number
    medicalExams: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epies?: boolean | EmployeeCountOutputTypeCountEpiesArgs
    exits?: boolean | EmployeeCountOutputTypeCountExitsArgs
    medicalExams?: boolean | EmployeeCountOutputTypeCountMedicalExamsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountEpiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiEmployeeWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountExitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiExitWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountMedicalExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalExamWhereInput
  }


  /**
   * Count Type EpiCountOutputType
   */

  export type EpiCountOutputType = {
    employees: number
    entries: number
    exits: number
  }

  export type EpiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | EpiCountOutputTypeCountEmployeesArgs
    entries?: boolean | EpiCountOutputTypeCountEntriesArgs
    exits?: boolean | EpiCountOutputTypeCountExitsArgs
  }

  // Custom InputTypes
  /**
   * EpiCountOutputType without action
   */
  export type EpiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiCountOutputType
     */
    select?: EpiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpiCountOutputType without action
   */
  export type EpiCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiEmployeeWhereInput
  }

  /**
   * EpiCountOutputType without action
   */
  export type EpiCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiEntryWhereInput
  }

  /**
   * EpiCountOutputType without action
   */
  export type EpiCountOutputTypeCountExitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiExitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    adress: string | null
    city: string | null
    email: string | null
    phone: string | null
    birthDate: Date | null
    admission: Date | null
    cpf: string | null
    rg: string | null
    employer: $Enums.Employer | null
    department: $Enums.Department | null
    function: $Enums.Function | null
    status: $Enums.Status | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    adress: string | null
    city: string | null
    email: string | null
    phone: string | null
    birthDate: Date | null
    admission: Date | null
    cpf: string | null
    rg: string | null
    employer: $Enums.Employer | null
    department: $Enums.Department | null
    function: $Enums.Function | null
    status: $Enums.Status | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    adress: number
    city: number
    email: number
    phone: number
    birthDate: number
    admission: number
    cpf: number
    rg: number
    employer: number
    department: number
    function: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    adress?: true
    city?: true
    email?: true
    phone?: true
    birthDate?: true
    admission?: true
    cpf?: true
    rg?: true
    employer?: true
    department?: true
    function?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    adress?: true
    city?: true
    email?: true
    phone?: true
    birthDate?: true
    admission?: true
    cpf?: true
    rg?: true
    employer?: true
    department?: true
    function?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    adress?: true
    city?: true
    email?: true
    phone?: true
    birthDate?: true
    admission?: true
    cpf?: true
    rg?: true
    employer?: true
    department?: true
    function?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date
    admission: Date
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adress?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    admission?: boolean
    cpf?: boolean
    rg?: boolean
    employer?: boolean
    department?: boolean
    function?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    epies?: boolean | Employee$epiesArgs<ExtArgs>
    exits?: boolean | Employee$exitsArgs<ExtArgs>
    medicalExams?: boolean | Employee$medicalExamsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adress?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    admission?: boolean
    cpf?: boolean
    rg?: boolean
    employer?: boolean
    department?: boolean
    function?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adress?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    admission?: boolean
    cpf?: boolean
    rg?: boolean
    employer?: boolean
    department?: boolean
    function?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    adress?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    admission?: boolean
    cpf?: boolean
    rg?: boolean
    employer?: boolean
    department?: boolean
    function?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "adress" | "city" | "email" | "phone" | "birthDate" | "admission" | "cpf" | "rg" | "employer" | "department" | "function" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epies?: boolean | Employee$epiesArgs<ExtArgs>
    exits?: boolean | Employee$exitsArgs<ExtArgs>
    medicalExams?: boolean | Employee$medicalExamsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      epies: Prisma.$EpiEmployeePayload<ExtArgs>[]
      exits: Prisma.$EpiExitPayload<ExtArgs>[]
      medicalExams: Prisma.$MedicalExamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      adress: string
      city: string
      email: string
      phone: string
      birthDate: Date
      admission: Date
      cpf: string
      rg: string
      employer: $Enums.Employer
      department: $Enums.Department
      function: $Enums.Function
      status: $Enums.Status
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    epies<T extends Employee$epiesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$epiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exits<T extends Employee$exitsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$exitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalExams<T extends Employee$medicalExamsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$medicalExamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly adress: FieldRef<"Employee", 'String'>
    readonly city: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly birthDate: FieldRef<"Employee", 'DateTime'>
    readonly admission: FieldRef<"Employee", 'DateTime'>
    readonly cpf: FieldRef<"Employee", 'String'>
    readonly rg: FieldRef<"Employee", 'String'>
    readonly employer: FieldRef<"Employee", 'Employer'>
    readonly department: FieldRef<"Employee", 'Department'>
    readonly function: FieldRef<"Employee", 'Function'>
    readonly status: FieldRef<"Employee", 'Status'>
    readonly userId: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.epies
   */
  export type Employee$epiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    where?: EpiEmployeeWhereInput
    orderBy?: EpiEmployeeOrderByWithRelationInput | EpiEmployeeOrderByWithRelationInput[]
    cursor?: EpiEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpiEmployeeScalarFieldEnum | EpiEmployeeScalarFieldEnum[]
  }

  /**
   * Employee.exits
   */
  export type Employee$exitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    where?: EpiExitWhereInput
    orderBy?: EpiExitOrderByWithRelationInput | EpiExitOrderByWithRelationInput[]
    cursor?: EpiExitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpiExitScalarFieldEnum | EpiExitScalarFieldEnum[]
  }

  /**
   * Employee.medicalExams
   */
  export type Employee$medicalExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    where?: MedicalExamWhereInput
    orderBy?: MedicalExamOrderByWithRelationInput | MedicalExamOrderByWithRelationInput[]
    cursor?: MedicalExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalExamScalarFieldEnum | MedicalExamScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Epi
   */

  export type AggregateEpi = {
    _count: EpiCountAggregateOutputType | null
    _avg: EpiAvgAggregateOutputType | null
    _sum: EpiSumAggregateOutputType | null
    _min: EpiMinAggregateOutputType | null
    _max: EpiMaxAggregateOutputType | null
  }

  export type EpiAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type EpiSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type EpiMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    certification: string | null
    supplier: string | null
    expiration: Date | null
    quantity: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    certification: string | null
    supplier: string | null
    expiration: Date | null
    quantity: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiCountAggregateOutputType = {
    id: number
    name: number
    description: number
    certification: number
    supplier: number
    expiration: number
    quantity: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpiAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type EpiSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type EpiMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    certification?: true
    supplier?: true
    expiration?: true
    quantity?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    certification?: true
    supplier?: true
    expiration?: true
    quantity?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    certification?: true
    supplier?: true
    expiration?: true
    quantity?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epi to aggregate.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Epis
    **/
    _count?: true | EpiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpiMaxAggregateInputType
  }

  export type GetEpiAggregateType<T extends EpiAggregateArgs> = {
        [P in keyof T & keyof AggregateEpi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpi[P]>
      : GetScalarType<T[P], AggregateEpi[P]>
  }




  export type EpiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiWhereInput
    orderBy?: EpiOrderByWithAggregationInput | EpiOrderByWithAggregationInput[]
    by: EpiScalarFieldEnum[] | EpiScalarFieldEnum
    having?: EpiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpiCountAggregateInputType | true
    _avg?: EpiAvgAggregateInputType
    _sum?: EpiSumAggregateInputType
    _min?: EpiMinAggregateInputType
    _max?: EpiMaxAggregateInputType
  }

  export type EpiGroupByOutputType = {
    id: number
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date
    quantity: number
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EpiCountAggregateOutputType | null
    _avg: EpiAvgAggregateOutputType | null
    _sum: EpiSumAggregateOutputType | null
    _min: EpiMinAggregateOutputType | null
    _max: EpiMaxAggregateOutputType | null
  }

  type GetEpiGroupByPayload<T extends EpiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpiGroupByOutputType[P]>
            : GetScalarType<T[P], EpiGroupByOutputType[P]>
        }
      >
    >


  export type EpiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    certification?: boolean
    supplier?: boolean
    expiration?: boolean
    quantity?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Epi$employeesArgs<ExtArgs>
    entries?: boolean | Epi$entriesArgs<ExtArgs>
    exits?: boolean | Epi$exitsArgs<ExtArgs>
    _count?: boolean | EpiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    certification?: boolean
    supplier?: boolean
    expiration?: boolean
    quantity?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    certification?: boolean
    supplier?: boolean
    expiration?: boolean
    quantity?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    certification?: boolean
    supplier?: boolean
    expiration?: boolean
    quantity?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "certification" | "supplier" | "expiration" | "quantity" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["epi"]>
  export type EpiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Epi$employeesArgs<ExtArgs>
    entries?: boolean | Epi$entriesArgs<ExtArgs>
    exits?: boolean | Epi$exitsArgs<ExtArgs>
    _count?: boolean | EpiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EpiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EpiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Epi"
    objects: {
      employees: Prisma.$EpiEmployeePayload<ExtArgs>[]
      entries: Prisma.$EpiEntryPayload<ExtArgs>[]
      exits: Prisma.$EpiExitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      certification: string
      supplier: string
      expiration: Date
      quantity: number
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["epi"]>
    composites: {}
  }

  type EpiGetPayload<S extends boolean | null | undefined | EpiDefaultArgs> = $Result.GetResult<Prisma.$EpiPayload, S>

  type EpiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpiCountAggregateInputType | true
    }

  export interface EpiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Epi'], meta: { name: 'Epi' } }
    /**
     * Find zero or one Epi that matches the filter.
     * @param {EpiFindUniqueArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpiFindUniqueArgs>(args: SelectSubset<T, EpiFindUniqueArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Epi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpiFindUniqueOrThrowArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpiFindUniqueOrThrowArgs>(args: SelectSubset<T, EpiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Epi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiFindFirstArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpiFindFirstArgs>(args?: SelectSubset<T, EpiFindFirstArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Epi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiFindFirstOrThrowArgs} args - Arguments to find a Epi
     * @example
     * // Get one Epi
     * const epi = await prisma.epi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpiFindFirstOrThrowArgs>(args?: SelectSubset<T, EpiFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Epis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Epis
     * const epis = await prisma.epi.findMany()
     * 
     * // Get first 10 Epis
     * const epis = await prisma.epi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epiWithIdOnly = await prisma.epi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpiFindManyArgs>(args?: SelectSubset<T, EpiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Epi.
     * @param {EpiCreateArgs} args - Arguments to create a Epi.
     * @example
     * // Create one Epi
     * const Epi = await prisma.epi.create({
     *   data: {
     *     // ... data to create a Epi
     *   }
     * })
     * 
     */
    create<T extends EpiCreateArgs>(args: SelectSubset<T, EpiCreateArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Epis.
     * @param {EpiCreateManyArgs} args - Arguments to create many Epis.
     * @example
     * // Create many Epis
     * const epi = await prisma.epi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpiCreateManyArgs>(args?: SelectSubset<T, EpiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Epis and returns the data saved in the database.
     * @param {EpiCreateManyAndReturnArgs} args - Arguments to create many Epis.
     * @example
     * // Create many Epis
     * const epi = await prisma.epi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Epis and only return the `id`
     * const epiWithIdOnly = await prisma.epi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpiCreateManyAndReturnArgs>(args?: SelectSubset<T, EpiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Epi.
     * @param {EpiDeleteArgs} args - Arguments to delete one Epi.
     * @example
     * // Delete one Epi
     * const Epi = await prisma.epi.delete({
     *   where: {
     *     // ... filter to delete one Epi
     *   }
     * })
     * 
     */
    delete<T extends EpiDeleteArgs>(args: SelectSubset<T, EpiDeleteArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Epi.
     * @param {EpiUpdateArgs} args - Arguments to update one Epi.
     * @example
     * // Update one Epi
     * const epi = await prisma.epi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpiUpdateArgs>(args: SelectSubset<T, EpiUpdateArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Epis.
     * @param {EpiDeleteManyArgs} args - Arguments to filter Epis to delete.
     * @example
     * // Delete a few Epis
     * const { count } = await prisma.epi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpiDeleteManyArgs>(args?: SelectSubset<T, EpiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Epis
     * const epi = await prisma.epi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpiUpdateManyArgs>(args: SelectSubset<T, EpiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epis and returns the data updated in the database.
     * @param {EpiUpdateManyAndReturnArgs} args - Arguments to update many Epis.
     * @example
     * // Update many Epis
     * const epi = await prisma.epi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Epis and only return the `id`
     * const epiWithIdOnly = await prisma.epi.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpiUpdateManyAndReturnArgs>(args: SelectSubset<T, EpiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Epi.
     * @param {EpiUpsertArgs} args - Arguments to update or create a Epi.
     * @example
     * // Update or create a Epi
     * const epi = await prisma.epi.upsert({
     *   create: {
     *     // ... data to create a Epi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Epi we want to update
     *   }
     * })
     */
    upsert<T extends EpiUpsertArgs>(args: SelectSubset<T, EpiUpsertArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Epis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiCountArgs} args - Arguments to filter Epis to count.
     * @example
     * // Count the number of Epis
     * const count = await prisma.epi.count({
     *   where: {
     *     // ... the filter for the Epis we want to count
     *   }
     * })
    **/
    count<T extends EpiCountArgs>(
      args?: Subset<T, EpiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Epi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpiAggregateArgs>(args: Subset<T, EpiAggregateArgs>): Prisma.PrismaPromise<GetEpiAggregateType<T>>

    /**
     * Group by Epi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiGroupByArgs} args - Group by arguments.
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
      T extends EpiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpiGroupByArgs['orderBy'] }
        : { orderBy?: EpiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Epi model
   */
  readonly fields: EpiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Epi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Epi$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Epi$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entries<T extends Epi$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Epi$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exits<T extends Epi$exitsArgs<ExtArgs> = {}>(args?: Subset<T, Epi$exitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Epi model
   */ 
  interface EpiFieldRefs {
    readonly id: FieldRef<"Epi", 'Int'>
    readonly name: FieldRef<"Epi", 'String'>
    readonly description: FieldRef<"Epi", 'String'>
    readonly certification: FieldRef<"Epi", 'String'>
    readonly supplier: FieldRef<"Epi", 'String'>
    readonly expiration: FieldRef<"Epi", 'DateTime'>
    readonly quantity: FieldRef<"Epi", 'Int'>
    readonly userId: FieldRef<"Epi", 'String'>
    readonly createdAt: FieldRef<"Epi", 'DateTime'>
    readonly updatedAt: FieldRef<"Epi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Epi findUnique
   */
  export type EpiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi findUniqueOrThrow
   */
  export type EpiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi findFirst
   */
  export type EpiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epis.
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epis.
     */
    distinct?: EpiScalarFieldEnum | EpiScalarFieldEnum[]
  }

  /**
   * Epi findFirstOrThrow
   */
  export type EpiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epi to fetch.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epis.
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epis.
     */
    distinct?: EpiScalarFieldEnum | EpiScalarFieldEnum[]
  }

  /**
   * Epi findMany
   */
  export type EpiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter, which Epis to fetch.
     */
    where?: EpiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epis to fetch.
     */
    orderBy?: EpiOrderByWithRelationInput | EpiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Epis.
     */
    cursor?: EpiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epis.
     */
    skip?: number
    distinct?: EpiScalarFieldEnum | EpiScalarFieldEnum[]
  }

  /**
   * Epi create
   */
  export type EpiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * The data needed to create a Epi.
     */
    data: XOR<EpiCreateInput, EpiUncheckedCreateInput>
  }

  /**
   * Epi createMany
   */
  export type EpiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Epis.
     */
    data: EpiCreateManyInput | EpiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Epi createManyAndReturn
   */
  export type EpiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * The data used to create many Epis.
     */
    data: EpiCreateManyInput | EpiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Epi update
   */
  export type EpiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * The data needed to update a Epi.
     */
    data: XOR<EpiUpdateInput, EpiUncheckedUpdateInput>
    /**
     * Choose, which Epi to update.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi updateMany
   */
  export type EpiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Epis.
     */
    data: XOR<EpiUpdateManyMutationInput, EpiUncheckedUpdateManyInput>
    /**
     * Filter which Epis to update
     */
    where?: EpiWhereInput
    /**
     * Limit how many Epis to update.
     */
    limit?: number
  }

  /**
   * Epi updateManyAndReturn
   */
  export type EpiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * The data used to update Epis.
     */
    data: XOR<EpiUpdateManyMutationInput, EpiUncheckedUpdateManyInput>
    /**
     * Filter which Epis to update
     */
    where?: EpiWhereInput
    /**
     * Limit how many Epis to update.
     */
    limit?: number
  }

  /**
   * Epi upsert
   */
  export type EpiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * The filter to search for the Epi to update in case it exists.
     */
    where: EpiWhereUniqueInput
    /**
     * In case the Epi found by the `where` argument doesn't exist, create a new Epi with this data.
     */
    create: XOR<EpiCreateInput, EpiUncheckedCreateInput>
    /**
     * In case the Epi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpiUpdateInput, EpiUncheckedUpdateInput>
  }

  /**
   * Epi delete
   */
  export type EpiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
    /**
     * Filter which Epi to delete.
     */
    where: EpiWhereUniqueInput
  }

  /**
   * Epi deleteMany
   */
  export type EpiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epis to delete
     */
    where?: EpiWhereInput
    /**
     * Limit how many Epis to delete.
     */
    limit?: number
  }

  /**
   * Epi.employees
   */
  export type Epi$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    where?: EpiEmployeeWhereInput
    orderBy?: EpiEmployeeOrderByWithRelationInput | EpiEmployeeOrderByWithRelationInput[]
    cursor?: EpiEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpiEmployeeScalarFieldEnum | EpiEmployeeScalarFieldEnum[]
  }

  /**
   * Epi.entries
   */
  export type Epi$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    where?: EpiEntryWhereInput
    orderBy?: EpiEntryOrderByWithRelationInput | EpiEntryOrderByWithRelationInput[]
    cursor?: EpiEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpiEntryScalarFieldEnum | EpiEntryScalarFieldEnum[]
  }

  /**
   * Epi.exits
   */
  export type Epi$exitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    where?: EpiExitWhereInput
    orderBy?: EpiExitOrderByWithRelationInput | EpiExitOrderByWithRelationInput[]
    cursor?: EpiExitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpiExitScalarFieldEnum | EpiExitScalarFieldEnum[]
  }

  /**
   * Epi without action
   */
  export type EpiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epi
     */
    select?: EpiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Epi
     */
    omit?: EpiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiInclude<ExtArgs> | null
  }


  /**
   * Model EpiEmployee
   */

  export type AggregateEpiEmployee = {
    _count: EpiEmployeeCountAggregateOutputType | null
    _avg: EpiEmployeeAvgAggregateOutputType | null
    _sum: EpiEmployeeSumAggregateOutputType | null
    _min: EpiEmployeeMinAggregateOutputType | null
    _max: EpiEmployeeMaxAggregateOutputType | null
  }

  export type EpiEmployeeAvgAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
  }

  export type EpiEmployeeSumAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
  }

  export type EpiEmployeeMinAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
    deliveryDate: Date | null
    userId: string | null
  }

  export type EpiEmployeeMaxAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
    deliveryDate: Date | null
    userId: string | null
  }

  export type EpiEmployeeCountAggregateOutputType = {
    id: number
    epiId: number
    employeeId: number
    quantity: number
    deliveryDate: number
    userId: number
    _all: number
  }


  export type EpiEmployeeAvgAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
  }

  export type EpiEmployeeSumAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
  }

  export type EpiEmployeeMinAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
    deliveryDate?: true
    userId?: true
  }

  export type EpiEmployeeMaxAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
    deliveryDate?: true
    userId?: true
  }

  export type EpiEmployeeCountAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
    deliveryDate?: true
    userId?: true
    _all?: true
  }

  export type EpiEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpiEmployee to aggregate.
     */
    where?: EpiEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEmployees to fetch.
     */
    orderBy?: EpiEmployeeOrderByWithRelationInput | EpiEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpiEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EpiEmployees
    **/
    _count?: true | EpiEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpiEmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpiEmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpiEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpiEmployeeMaxAggregateInputType
  }

  export type GetEpiEmployeeAggregateType<T extends EpiEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpiEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpiEmployee[P]>
      : GetScalarType<T[P], AggregateEpiEmployee[P]>
  }




  export type EpiEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiEmployeeWhereInput
    orderBy?: EpiEmployeeOrderByWithAggregationInput | EpiEmployeeOrderByWithAggregationInput[]
    by: EpiEmployeeScalarFieldEnum[] | EpiEmployeeScalarFieldEnum
    having?: EpiEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpiEmployeeCountAggregateInputType | true
    _avg?: EpiEmployeeAvgAggregateInputType
    _sum?: EpiEmployeeSumAggregateInputType
    _min?: EpiEmployeeMinAggregateInputType
    _max?: EpiEmployeeMaxAggregateInputType
  }

  export type EpiEmployeeGroupByOutputType = {
    id: number
    epiId: number
    employeeId: number
    quantity: number
    deliveryDate: Date
    userId: string | null
    _count: EpiEmployeeCountAggregateOutputType | null
    _avg: EpiEmployeeAvgAggregateOutputType | null
    _sum: EpiEmployeeSumAggregateOutputType | null
    _min: EpiEmployeeMinAggregateOutputType | null
    _max: EpiEmployeeMaxAggregateOutputType | null
  }

  type GetEpiEmployeeGroupByPayload<T extends EpiEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpiEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpiEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpiEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EpiEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EpiEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    userId?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEmployee"]>

  export type EpiEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    userId?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEmployee"]>

  export type EpiEmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    userId?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEmployee"]>

  export type EpiEmployeeSelectScalar = {
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    deliveryDate?: boolean
    userId?: boolean
  }

  export type EpiEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "epiId" | "employeeId" | "quantity" | "deliveryDate" | "userId", ExtArgs["result"]["epiEmployee"]>
  export type EpiEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EpiEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EpiEmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EpiEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EpiEmployee"
    objects: {
      epi: Prisma.$EpiPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      epiId: number
      employeeId: number
      quantity: number
      deliveryDate: Date
      userId: string | null
    }, ExtArgs["result"]["epiEmployee"]>
    composites: {}
  }

  type EpiEmployeeGetPayload<S extends boolean | null | undefined | EpiEmployeeDefaultArgs> = $Result.GetResult<Prisma.$EpiEmployeePayload, S>

  type EpiEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpiEmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpiEmployeeCountAggregateInputType | true
    }

  export interface EpiEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EpiEmployee'], meta: { name: 'EpiEmployee' } }
    /**
     * Find zero or one EpiEmployee that matches the filter.
     * @param {EpiEmployeeFindUniqueArgs} args - Arguments to find a EpiEmployee
     * @example
     * // Get one EpiEmployee
     * const epiEmployee = await prisma.epiEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpiEmployeeFindUniqueArgs>(args: SelectSubset<T, EpiEmployeeFindUniqueArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EpiEmployee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpiEmployeeFindUniqueOrThrowArgs} args - Arguments to find a EpiEmployee
     * @example
     * // Get one EpiEmployee
     * const epiEmployee = await prisma.epiEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpiEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpiEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpiEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEmployeeFindFirstArgs} args - Arguments to find a EpiEmployee
     * @example
     * // Get one EpiEmployee
     * const epiEmployee = await prisma.epiEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpiEmployeeFindFirstArgs>(args?: SelectSubset<T, EpiEmployeeFindFirstArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpiEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEmployeeFindFirstOrThrowArgs} args - Arguments to find a EpiEmployee
     * @example
     * // Get one EpiEmployee
     * const epiEmployee = await prisma.epiEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpiEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpiEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EpiEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EpiEmployees
     * const epiEmployees = await prisma.epiEmployee.findMany()
     * 
     * // Get first 10 EpiEmployees
     * const epiEmployees = await prisma.epiEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epiEmployeeWithIdOnly = await prisma.epiEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpiEmployeeFindManyArgs>(args?: SelectSubset<T, EpiEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EpiEmployee.
     * @param {EpiEmployeeCreateArgs} args - Arguments to create a EpiEmployee.
     * @example
     * // Create one EpiEmployee
     * const EpiEmployee = await prisma.epiEmployee.create({
     *   data: {
     *     // ... data to create a EpiEmployee
     *   }
     * })
     * 
     */
    create<T extends EpiEmployeeCreateArgs>(args: SelectSubset<T, EpiEmployeeCreateArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EpiEmployees.
     * @param {EpiEmployeeCreateManyArgs} args - Arguments to create many EpiEmployees.
     * @example
     * // Create many EpiEmployees
     * const epiEmployee = await prisma.epiEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpiEmployeeCreateManyArgs>(args?: SelectSubset<T, EpiEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EpiEmployees and returns the data saved in the database.
     * @param {EpiEmployeeCreateManyAndReturnArgs} args - Arguments to create many EpiEmployees.
     * @example
     * // Create many EpiEmployees
     * const epiEmployee = await prisma.epiEmployee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EpiEmployees and only return the `id`
     * const epiEmployeeWithIdOnly = await prisma.epiEmployee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpiEmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpiEmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EpiEmployee.
     * @param {EpiEmployeeDeleteArgs} args - Arguments to delete one EpiEmployee.
     * @example
     * // Delete one EpiEmployee
     * const EpiEmployee = await prisma.epiEmployee.delete({
     *   where: {
     *     // ... filter to delete one EpiEmployee
     *   }
     * })
     * 
     */
    delete<T extends EpiEmployeeDeleteArgs>(args: SelectSubset<T, EpiEmployeeDeleteArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EpiEmployee.
     * @param {EpiEmployeeUpdateArgs} args - Arguments to update one EpiEmployee.
     * @example
     * // Update one EpiEmployee
     * const epiEmployee = await prisma.epiEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpiEmployeeUpdateArgs>(args: SelectSubset<T, EpiEmployeeUpdateArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EpiEmployees.
     * @param {EpiEmployeeDeleteManyArgs} args - Arguments to filter EpiEmployees to delete.
     * @example
     * // Delete a few EpiEmployees
     * const { count } = await prisma.epiEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpiEmployeeDeleteManyArgs>(args?: SelectSubset<T, EpiEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpiEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EpiEmployees
     * const epiEmployee = await prisma.epiEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpiEmployeeUpdateManyArgs>(args: SelectSubset<T, EpiEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpiEmployees and returns the data updated in the database.
     * @param {EpiEmployeeUpdateManyAndReturnArgs} args - Arguments to update many EpiEmployees.
     * @example
     * // Update many EpiEmployees
     * const epiEmployee = await prisma.epiEmployee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EpiEmployees and only return the `id`
     * const epiEmployeeWithIdOnly = await prisma.epiEmployee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpiEmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpiEmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EpiEmployee.
     * @param {EpiEmployeeUpsertArgs} args - Arguments to update or create a EpiEmployee.
     * @example
     * // Update or create a EpiEmployee
     * const epiEmployee = await prisma.epiEmployee.upsert({
     *   create: {
     *     // ... data to create a EpiEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EpiEmployee we want to update
     *   }
     * })
     */
    upsert<T extends EpiEmployeeUpsertArgs>(args: SelectSubset<T, EpiEmployeeUpsertArgs<ExtArgs>>): Prisma__EpiEmployeeClient<$Result.GetResult<Prisma.$EpiEmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EpiEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEmployeeCountArgs} args - Arguments to filter EpiEmployees to count.
     * @example
     * // Count the number of EpiEmployees
     * const count = await prisma.epiEmployee.count({
     *   where: {
     *     // ... the filter for the EpiEmployees we want to count
     *   }
     * })
    **/
    count<T extends EpiEmployeeCountArgs>(
      args?: Subset<T, EpiEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpiEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EpiEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpiEmployeeAggregateArgs>(args: Subset<T, EpiEmployeeAggregateArgs>): Prisma.PrismaPromise<GetEpiEmployeeAggregateType<T>>

    /**
     * Group by EpiEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEmployeeGroupByArgs} args - Group by arguments.
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
      T extends EpiEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpiEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EpiEmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpiEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpiEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EpiEmployee model
   */
  readonly fields: EpiEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EpiEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpiEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    epi<T extends EpiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpiDefaultArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EpiEmployee model
   */ 
  interface EpiEmployeeFieldRefs {
    readonly id: FieldRef<"EpiEmployee", 'Int'>
    readonly epiId: FieldRef<"EpiEmployee", 'Int'>
    readonly employeeId: FieldRef<"EpiEmployee", 'Int'>
    readonly quantity: FieldRef<"EpiEmployee", 'Int'>
    readonly deliveryDate: FieldRef<"EpiEmployee", 'DateTime'>
    readonly userId: FieldRef<"EpiEmployee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EpiEmployee findUnique
   */
  export type EpiEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which EpiEmployee to fetch.
     */
    where: EpiEmployeeWhereUniqueInput
  }

  /**
   * EpiEmployee findUniqueOrThrow
   */
  export type EpiEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which EpiEmployee to fetch.
     */
    where: EpiEmployeeWhereUniqueInput
  }

  /**
   * EpiEmployee findFirst
   */
  export type EpiEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which EpiEmployee to fetch.
     */
    where?: EpiEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEmployees to fetch.
     */
    orderBy?: EpiEmployeeOrderByWithRelationInput | EpiEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpiEmployees.
     */
    cursor?: EpiEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpiEmployees.
     */
    distinct?: EpiEmployeeScalarFieldEnum | EpiEmployeeScalarFieldEnum[]
  }

  /**
   * EpiEmployee findFirstOrThrow
   */
  export type EpiEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which EpiEmployee to fetch.
     */
    where?: EpiEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEmployees to fetch.
     */
    orderBy?: EpiEmployeeOrderByWithRelationInput | EpiEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpiEmployees.
     */
    cursor?: EpiEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpiEmployees.
     */
    distinct?: EpiEmployeeScalarFieldEnum | EpiEmployeeScalarFieldEnum[]
  }

  /**
   * EpiEmployee findMany
   */
  export type EpiEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which EpiEmployees to fetch.
     */
    where?: EpiEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEmployees to fetch.
     */
    orderBy?: EpiEmployeeOrderByWithRelationInput | EpiEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EpiEmployees.
     */
    cursor?: EpiEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEmployees.
     */
    skip?: number
    distinct?: EpiEmployeeScalarFieldEnum | EpiEmployeeScalarFieldEnum[]
  }

  /**
   * EpiEmployee create
   */
  export type EpiEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a EpiEmployee.
     */
    data: XOR<EpiEmployeeCreateInput, EpiEmployeeUncheckedCreateInput>
  }

  /**
   * EpiEmployee createMany
   */
  export type EpiEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EpiEmployees.
     */
    data: EpiEmployeeCreateManyInput | EpiEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EpiEmployee createManyAndReturn
   */
  export type EpiEmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many EpiEmployees.
     */
    data: EpiEmployeeCreateManyInput | EpiEmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EpiEmployee update
   */
  export type EpiEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a EpiEmployee.
     */
    data: XOR<EpiEmployeeUpdateInput, EpiEmployeeUncheckedUpdateInput>
    /**
     * Choose, which EpiEmployee to update.
     */
    where: EpiEmployeeWhereUniqueInput
  }

  /**
   * EpiEmployee updateMany
   */
  export type EpiEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EpiEmployees.
     */
    data: XOR<EpiEmployeeUpdateManyMutationInput, EpiEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which EpiEmployees to update
     */
    where?: EpiEmployeeWhereInput
    /**
     * Limit how many EpiEmployees to update.
     */
    limit?: number
  }

  /**
   * EpiEmployee updateManyAndReturn
   */
  export type EpiEmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * The data used to update EpiEmployees.
     */
    data: XOR<EpiEmployeeUpdateManyMutationInput, EpiEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which EpiEmployees to update
     */
    where?: EpiEmployeeWhereInput
    /**
     * Limit how many EpiEmployees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EpiEmployee upsert
   */
  export type EpiEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the EpiEmployee to update in case it exists.
     */
    where: EpiEmployeeWhereUniqueInput
    /**
     * In case the EpiEmployee found by the `where` argument doesn't exist, create a new EpiEmployee with this data.
     */
    create: XOR<EpiEmployeeCreateInput, EpiEmployeeUncheckedCreateInput>
    /**
     * In case the EpiEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpiEmployeeUpdateInput, EpiEmployeeUncheckedUpdateInput>
  }

  /**
   * EpiEmployee delete
   */
  export type EpiEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
    /**
     * Filter which EpiEmployee to delete.
     */
    where: EpiEmployeeWhereUniqueInput
  }

  /**
   * EpiEmployee deleteMany
   */
  export type EpiEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpiEmployees to delete
     */
    where?: EpiEmployeeWhereInput
    /**
     * Limit how many EpiEmployees to delete.
     */
    limit?: number
  }

  /**
   * EpiEmployee without action
   */
  export type EpiEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEmployee
     */
    select?: EpiEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEmployee
     */
    omit?: EpiEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEmployeeInclude<ExtArgs> | null
  }


  /**
   * Model EpiEntry
   */

  export type AggregateEpiEntry = {
    _count: EpiEntryCountAggregateOutputType | null
    _avg: EpiEntryAvgAggregateOutputType | null
    _sum: EpiEntrySumAggregateOutputType | null
    _min: EpiEntryMinAggregateOutputType | null
    _max: EpiEntryMaxAggregateOutputType | null
  }

  export type EpiEntryAvgAggregateOutputType = {
    id: number | null
    epiId: number | null
    quantity: number | null
  }

  export type EpiEntrySumAggregateOutputType = {
    id: number | null
    epiId: number | null
    quantity: number | null
  }

  export type EpiEntryMinAggregateOutputType = {
    id: number | null
    epiId: number | null
    quantity: number | null
    date: Date | null
    note: string | null
    supplier: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiEntryMaxAggregateOutputType = {
    id: number | null
    epiId: number | null
    quantity: number | null
    date: Date | null
    note: string | null
    supplier: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiEntryCountAggregateOutputType = {
    id: number
    epiId: number
    quantity: number
    date: number
    note: number
    supplier: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpiEntryAvgAggregateInputType = {
    id?: true
    epiId?: true
    quantity?: true
  }

  export type EpiEntrySumAggregateInputType = {
    id?: true
    epiId?: true
    quantity?: true
  }

  export type EpiEntryMinAggregateInputType = {
    id?: true
    epiId?: true
    quantity?: true
    date?: true
    note?: true
    supplier?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiEntryMaxAggregateInputType = {
    id?: true
    epiId?: true
    quantity?: true
    date?: true
    note?: true
    supplier?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiEntryCountAggregateInputType = {
    id?: true
    epiId?: true
    quantity?: true
    date?: true
    note?: true
    supplier?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpiEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpiEntry to aggregate.
     */
    where?: EpiEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEntries to fetch.
     */
    orderBy?: EpiEntryOrderByWithRelationInput | EpiEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpiEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EpiEntries
    **/
    _count?: true | EpiEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpiEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpiEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpiEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpiEntryMaxAggregateInputType
  }

  export type GetEpiEntryAggregateType<T extends EpiEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEpiEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpiEntry[P]>
      : GetScalarType<T[P], AggregateEpiEntry[P]>
  }




  export type EpiEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiEntryWhereInput
    orderBy?: EpiEntryOrderByWithAggregationInput | EpiEntryOrderByWithAggregationInput[]
    by: EpiEntryScalarFieldEnum[] | EpiEntryScalarFieldEnum
    having?: EpiEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpiEntryCountAggregateInputType | true
    _avg?: EpiEntryAvgAggregateInputType
    _sum?: EpiEntrySumAggregateInputType
    _min?: EpiEntryMinAggregateInputType
    _max?: EpiEntryMaxAggregateInputType
  }

  export type EpiEntryGroupByOutputType = {
    id: number
    epiId: number
    quantity: number
    date: Date
    note: string | null
    supplier: string | null
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EpiEntryCountAggregateOutputType | null
    _avg: EpiEntryAvgAggregateOutputType | null
    _sum: EpiEntrySumAggregateOutputType | null
    _min: EpiEntryMinAggregateOutputType | null
    _max: EpiEntryMaxAggregateOutputType | null
  }

  type GetEpiEntryGroupByPayload<T extends EpiEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpiEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpiEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpiEntryGroupByOutputType[P]>
            : GetScalarType<T[P], EpiEntryGroupByOutputType[P]>
        }
      >
    >


  export type EpiEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    quantity?: boolean
    date?: boolean
    note?: boolean
    supplier?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEntry"]>

  export type EpiEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    quantity?: boolean
    date?: boolean
    note?: boolean
    supplier?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEntry"]>

  export type EpiEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    quantity?: boolean
    date?: boolean
    note?: boolean
    supplier?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEntry"]>

  export type EpiEntrySelectScalar = {
    id?: boolean
    epiId?: boolean
    quantity?: boolean
    date?: boolean
    note?: boolean
    supplier?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpiEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "epiId" | "quantity" | "date" | "note" | "supplier" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["epiEntry"]>
  export type EpiEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }
  export type EpiEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }
  export type EpiEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }

  export type $EpiEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EpiEntry"
    objects: {
      epi: Prisma.$EpiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      epiId: number
      quantity: number
      date: Date
      note: string | null
      supplier: string | null
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["epiEntry"]>
    composites: {}
  }

  type EpiEntryGetPayload<S extends boolean | null | undefined | EpiEntryDefaultArgs> = $Result.GetResult<Prisma.$EpiEntryPayload, S>

  type EpiEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpiEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpiEntryCountAggregateInputType | true
    }

  export interface EpiEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EpiEntry'], meta: { name: 'EpiEntry' } }
    /**
     * Find zero or one EpiEntry that matches the filter.
     * @param {EpiEntryFindUniqueArgs} args - Arguments to find a EpiEntry
     * @example
     * // Get one EpiEntry
     * const epiEntry = await prisma.epiEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpiEntryFindUniqueArgs>(args: SelectSubset<T, EpiEntryFindUniqueArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EpiEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpiEntryFindUniqueOrThrowArgs} args - Arguments to find a EpiEntry
     * @example
     * // Get one EpiEntry
     * const epiEntry = await prisma.epiEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpiEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EpiEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpiEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEntryFindFirstArgs} args - Arguments to find a EpiEntry
     * @example
     * // Get one EpiEntry
     * const epiEntry = await prisma.epiEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpiEntryFindFirstArgs>(args?: SelectSubset<T, EpiEntryFindFirstArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpiEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEntryFindFirstOrThrowArgs} args - Arguments to find a EpiEntry
     * @example
     * // Get one EpiEntry
     * const epiEntry = await prisma.epiEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpiEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EpiEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EpiEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EpiEntries
     * const epiEntries = await prisma.epiEntry.findMany()
     * 
     * // Get first 10 EpiEntries
     * const epiEntries = await prisma.epiEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epiEntryWithIdOnly = await prisma.epiEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpiEntryFindManyArgs>(args?: SelectSubset<T, EpiEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EpiEntry.
     * @param {EpiEntryCreateArgs} args - Arguments to create a EpiEntry.
     * @example
     * // Create one EpiEntry
     * const EpiEntry = await prisma.epiEntry.create({
     *   data: {
     *     // ... data to create a EpiEntry
     *   }
     * })
     * 
     */
    create<T extends EpiEntryCreateArgs>(args: SelectSubset<T, EpiEntryCreateArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EpiEntries.
     * @param {EpiEntryCreateManyArgs} args - Arguments to create many EpiEntries.
     * @example
     * // Create many EpiEntries
     * const epiEntry = await prisma.epiEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpiEntryCreateManyArgs>(args?: SelectSubset<T, EpiEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EpiEntries and returns the data saved in the database.
     * @param {EpiEntryCreateManyAndReturnArgs} args - Arguments to create many EpiEntries.
     * @example
     * // Create many EpiEntries
     * const epiEntry = await prisma.epiEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EpiEntries and only return the `id`
     * const epiEntryWithIdOnly = await prisma.epiEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpiEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EpiEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EpiEntry.
     * @param {EpiEntryDeleteArgs} args - Arguments to delete one EpiEntry.
     * @example
     * // Delete one EpiEntry
     * const EpiEntry = await prisma.epiEntry.delete({
     *   where: {
     *     // ... filter to delete one EpiEntry
     *   }
     * })
     * 
     */
    delete<T extends EpiEntryDeleteArgs>(args: SelectSubset<T, EpiEntryDeleteArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EpiEntry.
     * @param {EpiEntryUpdateArgs} args - Arguments to update one EpiEntry.
     * @example
     * // Update one EpiEntry
     * const epiEntry = await prisma.epiEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpiEntryUpdateArgs>(args: SelectSubset<T, EpiEntryUpdateArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EpiEntries.
     * @param {EpiEntryDeleteManyArgs} args - Arguments to filter EpiEntries to delete.
     * @example
     * // Delete a few EpiEntries
     * const { count } = await prisma.epiEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpiEntryDeleteManyArgs>(args?: SelectSubset<T, EpiEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpiEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EpiEntries
     * const epiEntry = await prisma.epiEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpiEntryUpdateManyArgs>(args: SelectSubset<T, EpiEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpiEntries and returns the data updated in the database.
     * @param {EpiEntryUpdateManyAndReturnArgs} args - Arguments to update many EpiEntries.
     * @example
     * // Update many EpiEntries
     * const epiEntry = await prisma.epiEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EpiEntries and only return the `id`
     * const epiEntryWithIdOnly = await prisma.epiEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpiEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EpiEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EpiEntry.
     * @param {EpiEntryUpsertArgs} args - Arguments to update or create a EpiEntry.
     * @example
     * // Update or create a EpiEntry
     * const epiEntry = await prisma.epiEntry.upsert({
     *   create: {
     *     // ... data to create a EpiEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EpiEntry we want to update
     *   }
     * })
     */
    upsert<T extends EpiEntryUpsertArgs>(args: SelectSubset<T, EpiEntryUpsertArgs<ExtArgs>>): Prisma__EpiEntryClient<$Result.GetResult<Prisma.$EpiEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EpiEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEntryCountArgs} args - Arguments to filter EpiEntries to count.
     * @example
     * // Count the number of EpiEntries
     * const count = await prisma.epiEntry.count({
     *   where: {
     *     // ... the filter for the EpiEntries we want to count
     *   }
     * })
    **/
    count<T extends EpiEntryCountArgs>(
      args?: Subset<T, EpiEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpiEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EpiEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpiEntryAggregateArgs>(args: Subset<T, EpiEntryAggregateArgs>): Prisma.PrismaPromise<GetEpiEntryAggregateType<T>>

    /**
     * Group by EpiEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiEntryGroupByArgs} args - Group by arguments.
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
      T extends EpiEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpiEntryGroupByArgs['orderBy'] }
        : { orderBy?: EpiEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpiEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpiEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EpiEntry model
   */
  readonly fields: EpiEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EpiEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpiEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    epi<T extends EpiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpiDefaultArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EpiEntry model
   */ 
  interface EpiEntryFieldRefs {
    readonly id: FieldRef<"EpiEntry", 'Int'>
    readonly epiId: FieldRef<"EpiEntry", 'Int'>
    readonly quantity: FieldRef<"EpiEntry", 'Int'>
    readonly date: FieldRef<"EpiEntry", 'DateTime'>
    readonly note: FieldRef<"EpiEntry", 'String'>
    readonly supplier: FieldRef<"EpiEntry", 'String'>
    readonly userId: FieldRef<"EpiEntry", 'String'>
    readonly createdAt: FieldRef<"EpiEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"EpiEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EpiEntry findUnique
   */
  export type EpiEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * Filter, which EpiEntry to fetch.
     */
    where: EpiEntryWhereUniqueInput
  }

  /**
   * EpiEntry findUniqueOrThrow
   */
  export type EpiEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * Filter, which EpiEntry to fetch.
     */
    where: EpiEntryWhereUniqueInput
  }

  /**
   * EpiEntry findFirst
   */
  export type EpiEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * Filter, which EpiEntry to fetch.
     */
    where?: EpiEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEntries to fetch.
     */
    orderBy?: EpiEntryOrderByWithRelationInput | EpiEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpiEntries.
     */
    cursor?: EpiEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpiEntries.
     */
    distinct?: EpiEntryScalarFieldEnum | EpiEntryScalarFieldEnum[]
  }

  /**
   * EpiEntry findFirstOrThrow
   */
  export type EpiEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * Filter, which EpiEntry to fetch.
     */
    where?: EpiEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEntries to fetch.
     */
    orderBy?: EpiEntryOrderByWithRelationInput | EpiEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpiEntries.
     */
    cursor?: EpiEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpiEntries.
     */
    distinct?: EpiEntryScalarFieldEnum | EpiEntryScalarFieldEnum[]
  }

  /**
   * EpiEntry findMany
   */
  export type EpiEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * Filter, which EpiEntries to fetch.
     */
    where?: EpiEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiEntries to fetch.
     */
    orderBy?: EpiEntryOrderByWithRelationInput | EpiEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EpiEntries.
     */
    cursor?: EpiEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiEntries.
     */
    skip?: number
    distinct?: EpiEntryScalarFieldEnum | EpiEntryScalarFieldEnum[]
  }

  /**
   * EpiEntry create
   */
  export type EpiEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a EpiEntry.
     */
    data: XOR<EpiEntryCreateInput, EpiEntryUncheckedCreateInput>
  }

  /**
   * EpiEntry createMany
   */
  export type EpiEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EpiEntries.
     */
    data: EpiEntryCreateManyInput | EpiEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EpiEntry createManyAndReturn
   */
  export type EpiEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * The data used to create many EpiEntries.
     */
    data: EpiEntryCreateManyInput | EpiEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EpiEntry update
   */
  export type EpiEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a EpiEntry.
     */
    data: XOR<EpiEntryUpdateInput, EpiEntryUncheckedUpdateInput>
    /**
     * Choose, which EpiEntry to update.
     */
    where: EpiEntryWhereUniqueInput
  }

  /**
   * EpiEntry updateMany
   */
  export type EpiEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EpiEntries.
     */
    data: XOR<EpiEntryUpdateManyMutationInput, EpiEntryUncheckedUpdateManyInput>
    /**
     * Filter which EpiEntries to update
     */
    where?: EpiEntryWhereInput
    /**
     * Limit how many EpiEntries to update.
     */
    limit?: number
  }

  /**
   * EpiEntry updateManyAndReturn
   */
  export type EpiEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * The data used to update EpiEntries.
     */
    data: XOR<EpiEntryUpdateManyMutationInput, EpiEntryUncheckedUpdateManyInput>
    /**
     * Filter which EpiEntries to update
     */
    where?: EpiEntryWhereInput
    /**
     * Limit how many EpiEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EpiEntry upsert
   */
  export type EpiEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the EpiEntry to update in case it exists.
     */
    where: EpiEntryWhereUniqueInput
    /**
     * In case the EpiEntry found by the `where` argument doesn't exist, create a new EpiEntry with this data.
     */
    create: XOR<EpiEntryCreateInput, EpiEntryUncheckedCreateInput>
    /**
     * In case the EpiEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpiEntryUpdateInput, EpiEntryUncheckedUpdateInput>
  }

  /**
   * EpiEntry delete
   */
  export type EpiEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
    /**
     * Filter which EpiEntry to delete.
     */
    where: EpiEntryWhereUniqueInput
  }

  /**
   * EpiEntry deleteMany
   */
  export type EpiEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpiEntries to delete
     */
    where?: EpiEntryWhereInput
    /**
     * Limit how many EpiEntries to delete.
     */
    limit?: number
  }

  /**
   * EpiEntry without action
   */
  export type EpiEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiEntry
     */
    select?: EpiEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiEntry
     */
    omit?: EpiEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiEntryInclude<ExtArgs> | null
  }


  /**
   * Model EpiExit
   */

  export type AggregateEpiExit = {
    _count: EpiExitCountAggregateOutputType | null
    _avg: EpiExitAvgAggregateOutputType | null
    _sum: EpiExitSumAggregateOutputType | null
    _min: EpiExitMinAggregateOutputType | null
    _max: EpiExitMaxAggregateOutputType | null
  }

  export type EpiExitAvgAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
  }

  export type EpiExitSumAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
  }

  export type EpiExitMinAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
    userId: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type EpiExitMaxAggregateOutputType = {
    id: number | null
    epiId: number | null
    employeeId: number | null
    quantity: number | null
    userId: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type EpiExitCountAggregateOutputType = {
    id: number
    epiId: number
    employeeId: number
    quantity: number
    userId: number
    date: number
    createdAt: number
    _all: number
  }


  export type EpiExitAvgAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
  }

  export type EpiExitSumAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
  }

  export type EpiExitMinAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
    userId?: true
    date?: true
    createdAt?: true
  }

  export type EpiExitMaxAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
    userId?: true
    date?: true
    createdAt?: true
  }

  export type EpiExitCountAggregateInputType = {
    id?: true
    epiId?: true
    employeeId?: true
    quantity?: true
    userId?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type EpiExitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpiExit to aggregate.
     */
    where?: EpiExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiExits to fetch.
     */
    orderBy?: EpiExitOrderByWithRelationInput | EpiExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpiExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EpiExits
    **/
    _count?: true | EpiExitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpiExitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpiExitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpiExitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpiExitMaxAggregateInputType
  }

  export type GetEpiExitAggregateType<T extends EpiExitAggregateArgs> = {
        [P in keyof T & keyof AggregateEpiExit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpiExit[P]>
      : GetScalarType<T[P], AggregateEpiExit[P]>
  }




  export type EpiExitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpiExitWhereInput
    orderBy?: EpiExitOrderByWithAggregationInput | EpiExitOrderByWithAggregationInput[]
    by: EpiExitScalarFieldEnum[] | EpiExitScalarFieldEnum
    having?: EpiExitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpiExitCountAggregateInputType | true
    _avg?: EpiExitAvgAggregateInputType
    _sum?: EpiExitSumAggregateInputType
    _min?: EpiExitMinAggregateInputType
    _max?: EpiExitMaxAggregateInputType
  }

  export type EpiExitGroupByOutputType = {
    id: number
    epiId: number
    employeeId: number
    quantity: number
    userId: string | null
    date: Date
    createdAt: Date
    _count: EpiExitCountAggregateOutputType | null
    _avg: EpiExitAvgAggregateOutputType | null
    _sum: EpiExitSumAggregateOutputType | null
    _min: EpiExitMinAggregateOutputType | null
    _max: EpiExitMaxAggregateOutputType | null
  }

  type GetEpiExitGroupByPayload<T extends EpiExitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpiExitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpiExitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpiExitGroupByOutputType[P]>
            : GetScalarType<T[P], EpiExitGroupByOutputType[P]>
        }
      >
    >


  export type EpiExitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiExit"]>

  export type EpiExitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiExit"]>

  export type EpiExitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiExit"]>

  export type EpiExitSelectScalar = {
    id?: boolean
    epiId?: boolean
    employeeId?: boolean
    quantity?: boolean
    userId?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type EpiExitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "epiId" | "employeeId" | "quantity" | "userId" | "date" | "createdAt", ExtArgs["result"]["epiExit"]>
  export type EpiExitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EpiExitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EpiExitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epi?: boolean | EpiDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EpiExitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EpiExit"
    objects: {
      epi: Prisma.$EpiPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      epiId: number
      employeeId: number
      quantity: number
      userId: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["epiExit"]>
    composites: {}
  }

  type EpiExitGetPayload<S extends boolean | null | undefined | EpiExitDefaultArgs> = $Result.GetResult<Prisma.$EpiExitPayload, S>

  type EpiExitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpiExitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpiExitCountAggregateInputType | true
    }

  export interface EpiExitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EpiExit'], meta: { name: 'EpiExit' } }
    /**
     * Find zero or one EpiExit that matches the filter.
     * @param {EpiExitFindUniqueArgs} args - Arguments to find a EpiExit
     * @example
     * // Get one EpiExit
     * const epiExit = await prisma.epiExit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpiExitFindUniqueArgs>(args: SelectSubset<T, EpiExitFindUniqueArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EpiExit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpiExitFindUniqueOrThrowArgs} args - Arguments to find a EpiExit
     * @example
     * // Get one EpiExit
     * const epiExit = await prisma.epiExit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpiExitFindUniqueOrThrowArgs>(args: SelectSubset<T, EpiExitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpiExit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiExitFindFirstArgs} args - Arguments to find a EpiExit
     * @example
     * // Get one EpiExit
     * const epiExit = await prisma.epiExit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpiExitFindFirstArgs>(args?: SelectSubset<T, EpiExitFindFirstArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpiExit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiExitFindFirstOrThrowArgs} args - Arguments to find a EpiExit
     * @example
     * // Get one EpiExit
     * const epiExit = await prisma.epiExit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpiExitFindFirstOrThrowArgs>(args?: SelectSubset<T, EpiExitFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EpiExits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiExitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EpiExits
     * const epiExits = await prisma.epiExit.findMany()
     * 
     * // Get first 10 EpiExits
     * const epiExits = await prisma.epiExit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epiExitWithIdOnly = await prisma.epiExit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpiExitFindManyArgs>(args?: SelectSubset<T, EpiExitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EpiExit.
     * @param {EpiExitCreateArgs} args - Arguments to create a EpiExit.
     * @example
     * // Create one EpiExit
     * const EpiExit = await prisma.epiExit.create({
     *   data: {
     *     // ... data to create a EpiExit
     *   }
     * })
     * 
     */
    create<T extends EpiExitCreateArgs>(args: SelectSubset<T, EpiExitCreateArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EpiExits.
     * @param {EpiExitCreateManyArgs} args - Arguments to create many EpiExits.
     * @example
     * // Create many EpiExits
     * const epiExit = await prisma.epiExit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpiExitCreateManyArgs>(args?: SelectSubset<T, EpiExitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EpiExits and returns the data saved in the database.
     * @param {EpiExitCreateManyAndReturnArgs} args - Arguments to create many EpiExits.
     * @example
     * // Create many EpiExits
     * const epiExit = await prisma.epiExit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EpiExits and only return the `id`
     * const epiExitWithIdOnly = await prisma.epiExit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpiExitCreateManyAndReturnArgs>(args?: SelectSubset<T, EpiExitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EpiExit.
     * @param {EpiExitDeleteArgs} args - Arguments to delete one EpiExit.
     * @example
     * // Delete one EpiExit
     * const EpiExit = await prisma.epiExit.delete({
     *   where: {
     *     // ... filter to delete one EpiExit
     *   }
     * })
     * 
     */
    delete<T extends EpiExitDeleteArgs>(args: SelectSubset<T, EpiExitDeleteArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EpiExit.
     * @param {EpiExitUpdateArgs} args - Arguments to update one EpiExit.
     * @example
     * // Update one EpiExit
     * const epiExit = await prisma.epiExit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpiExitUpdateArgs>(args: SelectSubset<T, EpiExitUpdateArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EpiExits.
     * @param {EpiExitDeleteManyArgs} args - Arguments to filter EpiExits to delete.
     * @example
     * // Delete a few EpiExits
     * const { count } = await prisma.epiExit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpiExitDeleteManyArgs>(args?: SelectSubset<T, EpiExitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpiExits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiExitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EpiExits
     * const epiExit = await prisma.epiExit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpiExitUpdateManyArgs>(args: SelectSubset<T, EpiExitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpiExits and returns the data updated in the database.
     * @param {EpiExitUpdateManyAndReturnArgs} args - Arguments to update many EpiExits.
     * @example
     * // Update many EpiExits
     * const epiExit = await prisma.epiExit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EpiExits and only return the `id`
     * const epiExitWithIdOnly = await prisma.epiExit.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpiExitUpdateManyAndReturnArgs>(args: SelectSubset<T, EpiExitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EpiExit.
     * @param {EpiExitUpsertArgs} args - Arguments to update or create a EpiExit.
     * @example
     * // Update or create a EpiExit
     * const epiExit = await prisma.epiExit.upsert({
     *   create: {
     *     // ... data to create a EpiExit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EpiExit we want to update
     *   }
     * })
     */
    upsert<T extends EpiExitUpsertArgs>(args: SelectSubset<T, EpiExitUpsertArgs<ExtArgs>>): Prisma__EpiExitClient<$Result.GetResult<Prisma.$EpiExitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EpiExits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiExitCountArgs} args - Arguments to filter EpiExits to count.
     * @example
     * // Count the number of EpiExits
     * const count = await prisma.epiExit.count({
     *   where: {
     *     // ... the filter for the EpiExits we want to count
     *   }
     * })
    **/
    count<T extends EpiExitCountArgs>(
      args?: Subset<T, EpiExitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpiExitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EpiExit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiExitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpiExitAggregateArgs>(args: Subset<T, EpiExitAggregateArgs>): Prisma.PrismaPromise<GetEpiExitAggregateType<T>>

    /**
     * Group by EpiExit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpiExitGroupByArgs} args - Group by arguments.
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
      T extends EpiExitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpiExitGroupByArgs['orderBy'] }
        : { orderBy?: EpiExitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpiExitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpiExitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EpiExit model
   */
  readonly fields: EpiExitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EpiExit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpiExitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    epi<T extends EpiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpiDefaultArgs<ExtArgs>>): Prisma__EpiClient<$Result.GetResult<Prisma.$EpiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EpiExit model
   */ 
  interface EpiExitFieldRefs {
    readonly id: FieldRef<"EpiExit", 'Int'>
    readonly epiId: FieldRef<"EpiExit", 'Int'>
    readonly employeeId: FieldRef<"EpiExit", 'Int'>
    readonly quantity: FieldRef<"EpiExit", 'Int'>
    readonly userId: FieldRef<"EpiExit", 'String'>
    readonly date: FieldRef<"EpiExit", 'DateTime'>
    readonly createdAt: FieldRef<"EpiExit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EpiExit findUnique
   */
  export type EpiExitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * Filter, which EpiExit to fetch.
     */
    where: EpiExitWhereUniqueInput
  }

  /**
   * EpiExit findUniqueOrThrow
   */
  export type EpiExitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * Filter, which EpiExit to fetch.
     */
    where: EpiExitWhereUniqueInput
  }

  /**
   * EpiExit findFirst
   */
  export type EpiExitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * Filter, which EpiExit to fetch.
     */
    where?: EpiExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiExits to fetch.
     */
    orderBy?: EpiExitOrderByWithRelationInput | EpiExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpiExits.
     */
    cursor?: EpiExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpiExits.
     */
    distinct?: EpiExitScalarFieldEnum | EpiExitScalarFieldEnum[]
  }

  /**
   * EpiExit findFirstOrThrow
   */
  export type EpiExitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * Filter, which EpiExit to fetch.
     */
    where?: EpiExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiExits to fetch.
     */
    orderBy?: EpiExitOrderByWithRelationInput | EpiExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpiExits.
     */
    cursor?: EpiExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpiExits.
     */
    distinct?: EpiExitScalarFieldEnum | EpiExitScalarFieldEnum[]
  }

  /**
   * EpiExit findMany
   */
  export type EpiExitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * Filter, which EpiExits to fetch.
     */
    where?: EpiExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpiExits to fetch.
     */
    orderBy?: EpiExitOrderByWithRelationInput | EpiExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EpiExits.
     */
    cursor?: EpiExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpiExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpiExits.
     */
    skip?: number
    distinct?: EpiExitScalarFieldEnum | EpiExitScalarFieldEnum[]
  }

  /**
   * EpiExit create
   */
  export type EpiExitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * The data needed to create a EpiExit.
     */
    data: XOR<EpiExitCreateInput, EpiExitUncheckedCreateInput>
  }

  /**
   * EpiExit createMany
   */
  export type EpiExitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EpiExits.
     */
    data: EpiExitCreateManyInput | EpiExitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EpiExit createManyAndReturn
   */
  export type EpiExitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * The data used to create many EpiExits.
     */
    data: EpiExitCreateManyInput | EpiExitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EpiExit update
   */
  export type EpiExitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * The data needed to update a EpiExit.
     */
    data: XOR<EpiExitUpdateInput, EpiExitUncheckedUpdateInput>
    /**
     * Choose, which EpiExit to update.
     */
    where: EpiExitWhereUniqueInput
  }

  /**
   * EpiExit updateMany
   */
  export type EpiExitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EpiExits.
     */
    data: XOR<EpiExitUpdateManyMutationInput, EpiExitUncheckedUpdateManyInput>
    /**
     * Filter which EpiExits to update
     */
    where?: EpiExitWhereInput
    /**
     * Limit how many EpiExits to update.
     */
    limit?: number
  }

  /**
   * EpiExit updateManyAndReturn
   */
  export type EpiExitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * The data used to update EpiExits.
     */
    data: XOR<EpiExitUpdateManyMutationInput, EpiExitUncheckedUpdateManyInput>
    /**
     * Filter which EpiExits to update
     */
    where?: EpiExitWhereInput
    /**
     * Limit how many EpiExits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EpiExit upsert
   */
  export type EpiExitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * The filter to search for the EpiExit to update in case it exists.
     */
    where: EpiExitWhereUniqueInput
    /**
     * In case the EpiExit found by the `where` argument doesn't exist, create a new EpiExit with this data.
     */
    create: XOR<EpiExitCreateInput, EpiExitUncheckedCreateInput>
    /**
     * In case the EpiExit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpiExitUpdateInput, EpiExitUncheckedUpdateInput>
  }

  /**
   * EpiExit delete
   */
  export type EpiExitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
    /**
     * Filter which EpiExit to delete.
     */
    where: EpiExitWhereUniqueInput
  }

  /**
   * EpiExit deleteMany
   */
  export type EpiExitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpiExits to delete
     */
    where?: EpiExitWhereInput
    /**
     * Limit how many EpiExits to delete.
     */
    limit?: number
  }

  /**
   * EpiExit without action
   */
  export type EpiExitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpiExit
     */
    select?: EpiExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpiExit
     */
    omit?: EpiExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpiExitInclude<ExtArgs> | null
  }


  /**
   * Model MedicalExam
   */

  export type AggregateMedicalExam = {
    _count: MedicalExamCountAggregateOutputType | null
    _avg: MedicalExamAvgAggregateOutputType | null
    _sum: MedicalExamSumAggregateOutputType | null
    _min: MedicalExamMinAggregateOutputType | null
    _max: MedicalExamMaxAggregateOutputType | null
  }

  export type MedicalExamAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type MedicalExamSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type MedicalExamMinAggregateOutputType = {
    id: number | null
    date: Date | null
    type: string | null
    result: string | null
    expiration: Date | null
    employeeId: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalExamMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    type: string | null
    result: string | null
    expiration: Date | null
    employeeId: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalExamCountAggregateOutputType = {
    id: number
    date: number
    type: number
    result: number
    expiration: number
    employeeId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalExamAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type MedicalExamSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type MedicalExamMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    result?: true
    expiration?: true
    employeeId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalExamMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    result?: true
    expiration?: true
    employeeId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalExamCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    result?: true
    expiration?: true
    employeeId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalExam to aggregate.
     */
    where?: MedicalExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalExams to fetch.
     */
    orderBy?: MedicalExamOrderByWithRelationInput | MedicalExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalExams
    **/
    _count?: true | MedicalExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalExamMaxAggregateInputType
  }

  export type GetMedicalExamAggregateType<T extends MedicalExamAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalExam[P]>
      : GetScalarType<T[P], AggregateMedicalExam[P]>
  }




  export type MedicalExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalExamWhereInput
    orderBy?: MedicalExamOrderByWithAggregationInput | MedicalExamOrderByWithAggregationInput[]
    by: MedicalExamScalarFieldEnum[] | MedicalExamScalarFieldEnum
    having?: MedicalExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalExamCountAggregateInputType | true
    _avg?: MedicalExamAvgAggregateInputType
    _sum?: MedicalExamSumAggregateInputType
    _min?: MedicalExamMinAggregateInputType
    _max?: MedicalExamMaxAggregateInputType
  }

  export type MedicalExamGroupByOutputType = {
    id: number
    date: Date
    type: string
    result: string | null
    expiration: Date
    employeeId: number
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicalExamCountAggregateOutputType | null
    _avg: MedicalExamAvgAggregateOutputType | null
    _sum: MedicalExamSumAggregateOutputType | null
    _min: MedicalExamMinAggregateOutputType | null
    _max: MedicalExamMaxAggregateOutputType | null
  }

  type GetMedicalExamGroupByPayload<T extends MedicalExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalExamGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalExamGroupByOutputType[P]>
        }
      >
    >


  export type MedicalExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    result?: boolean
    expiration?: boolean
    employeeId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalExam"]>

  export type MedicalExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    result?: boolean
    expiration?: boolean
    employeeId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalExam"]>

  export type MedicalExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    result?: boolean
    expiration?: boolean
    employeeId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalExam"]>

  export type MedicalExamSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    result?: boolean
    expiration?: boolean
    employeeId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "type" | "result" | "expiration" | "employeeId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalExam"]>
  export type MedicalExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type MedicalExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type MedicalExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $MedicalExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalExam"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      type: string
      result: string | null
      expiration: Date
      employeeId: number
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalExam"]>
    composites: {}
  }

  type MedicalExamGetPayload<S extends boolean | null | undefined | MedicalExamDefaultArgs> = $Result.GetResult<Prisma.$MedicalExamPayload, S>

  type MedicalExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalExamCountAggregateInputType | true
    }

  export interface MedicalExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalExam'], meta: { name: 'MedicalExam' } }
    /**
     * Find zero or one MedicalExam that matches the filter.
     * @param {MedicalExamFindUniqueArgs} args - Arguments to find a MedicalExam
     * @example
     * // Get one MedicalExam
     * const medicalExam = await prisma.medicalExam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalExamFindUniqueArgs>(args: SelectSubset<T, MedicalExamFindUniqueArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalExam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalExamFindUniqueOrThrowArgs} args - Arguments to find a MedicalExam
     * @example
     * // Get one MedicalExam
     * const medicalExam = await prisma.medicalExam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalExamFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalExam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalExamFindFirstArgs} args - Arguments to find a MedicalExam
     * @example
     * // Get one MedicalExam
     * const medicalExam = await prisma.medicalExam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalExamFindFirstArgs>(args?: SelectSubset<T, MedicalExamFindFirstArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalExam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalExamFindFirstOrThrowArgs} args - Arguments to find a MedicalExam
     * @example
     * // Get one MedicalExam
     * const medicalExam = await prisma.medicalExam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalExamFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalExams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalExams
     * const medicalExams = await prisma.medicalExam.findMany()
     * 
     * // Get first 10 MedicalExams
     * const medicalExams = await prisma.medicalExam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalExamWithIdOnly = await prisma.medicalExam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalExamFindManyArgs>(args?: SelectSubset<T, MedicalExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalExam.
     * @param {MedicalExamCreateArgs} args - Arguments to create a MedicalExam.
     * @example
     * // Create one MedicalExam
     * const MedicalExam = await prisma.medicalExam.create({
     *   data: {
     *     // ... data to create a MedicalExam
     *   }
     * })
     * 
     */
    create<T extends MedicalExamCreateArgs>(args: SelectSubset<T, MedicalExamCreateArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalExams.
     * @param {MedicalExamCreateManyArgs} args - Arguments to create many MedicalExams.
     * @example
     * // Create many MedicalExams
     * const medicalExam = await prisma.medicalExam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalExamCreateManyArgs>(args?: SelectSubset<T, MedicalExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalExams and returns the data saved in the database.
     * @param {MedicalExamCreateManyAndReturnArgs} args - Arguments to create many MedicalExams.
     * @example
     * // Create many MedicalExams
     * const medicalExam = await prisma.medicalExam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalExams and only return the `id`
     * const medicalExamWithIdOnly = await prisma.medicalExam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalExamCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalExam.
     * @param {MedicalExamDeleteArgs} args - Arguments to delete one MedicalExam.
     * @example
     * // Delete one MedicalExam
     * const MedicalExam = await prisma.medicalExam.delete({
     *   where: {
     *     // ... filter to delete one MedicalExam
     *   }
     * })
     * 
     */
    delete<T extends MedicalExamDeleteArgs>(args: SelectSubset<T, MedicalExamDeleteArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalExam.
     * @param {MedicalExamUpdateArgs} args - Arguments to update one MedicalExam.
     * @example
     * // Update one MedicalExam
     * const medicalExam = await prisma.medicalExam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalExamUpdateArgs>(args: SelectSubset<T, MedicalExamUpdateArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalExams.
     * @param {MedicalExamDeleteManyArgs} args - Arguments to filter MedicalExams to delete.
     * @example
     * // Delete a few MedicalExams
     * const { count } = await prisma.medicalExam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalExamDeleteManyArgs>(args?: SelectSubset<T, MedicalExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalExams
     * const medicalExam = await prisma.medicalExam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalExamUpdateManyArgs>(args: SelectSubset<T, MedicalExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalExams and returns the data updated in the database.
     * @param {MedicalExamUpdateManyAndReturnArgs} args - Arguments to update many MedicalExams.
     * @example
     * // Update many MedicalExams
     * const medicalExam = await prisma.medicalExam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalExams and only return the `id`
     * const medicalExamWithIdOnly = await prisma.medicalExam.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicalExamUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalExam.
     * @param {MedicalExamUpsertArgs} args - Arguments to update or create a MedicalExam.
     * @example
     * // Update or create a MedicalExam
     * const medicalExam = await prisma.medicalExam.upsert({
     *   create: {
     *     // ... data to create a MedicalExam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalExam we want to update
     *   }
     * })
     */
    upsert<T extends MedicalExamUpsertArgs>(args: SelectSubset<T, MedicalExamUpsertArgs<ExtArgs>>): Prisma__MedicalExamClient<$Result.GetResult<Prisma.$MedicalExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalExamCountArgs} args - Arguments to filter MedicalExams to count.
     * @example
     * // Count the number of MedicalExams
     * const count = await prisma.medicalExam.count({
     *   where: {
     *     // ... the filter for the MedicalExams we want to count
     *   }
     * })
    **/
    count<T extends MedicalExamCountArgs>(
      args?: Subset<T, MedicalExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalExamAggregateArgs>(args: Subset<T, MedicalExamAggregateArgs>): Prisma.PrismaPromise<GetMedicalExamAggregateType<T>>

    /**
     * Group by MedicalExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalExamGroupByArgs} args - Group by arguments.
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
      T extends MedicalExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalExamGroupByArgs['orderBy'] }
        : { orderBy?: MedicalExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalExam model
   */
  readonly fields: MedicalExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalExam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalExam model
   */ 
  interface MedicalExamFieldRefs {
    readonly id: FieldRef<"MedicalExam", 'Int'>
    readonly date: FieldRef<"MedicalExam", 'DateTime'>
    readonly type: FieldRef<"MedicalExam", 'String'>
    readonly result: FieldRef<"MedicalExam", 'String'>
    readonly expiration: FieldRef<"MedicalExam", 'DateTime'>
    readonly employeeId: FieldRef<"MedicalExam", 'Int'>
    readonly userId: FieldRef<"MedicalExam", 'String'>
    readonly createdAt: FieldRef<"MedicalExam", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalExam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalExam findUnique
   */
  export type MedicalExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * Filter, which MedicalExam to fetch.
     */
    where: MedicalExamWhereUniqueInput
  }

  /**
   * MedicalExam findUniqueOrThrow
   */
  export type MedicalExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * Filter, which MedicalExam to fetch.
     */
    where: MedicalExamWhereUniqueInput
  }

  /**
   * MedicalExam findFirst
   */
  export type MedicalExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * Filter, which MedicalExam to fetch.
     */
    where?: MedicalExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalExams to fetch.
     */
    orderBy?: MedicalExamOrderByWithRelationInput | MedicalExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalExams.
     */
    cursor?: MedicalExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalExams.
     */
    distinct?: MedicalExamScalarFieldEnum | MedicalExamScalarFieldEnum[]
  }

  /**
   * MedicalExam findFirstOrThrow
   */
  export type MedicalExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * Filter, which MedicalExam to fetch.
     */
    where?: MedicalExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalExams to fetch.
     */
    orderBy?: MedicalExamOrderByWithRelationInput | MedicalExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalExams.
     */
    cursor?: MedicalExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalExams.
     */
    distinct?: MedicalExamScalarFieldEnum | MedicalExamScalarFieldEnum[]
  }

  /**
   * MedicalExam findMany
   */
  export type MedicalExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * Filter, which MedicalExams to fetch.
     */
    where?: MedicalExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalExams to fetch.
     */
    orderBy?: MedicalExamOrderByWithRelationInput | MedicalExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalExams.
     */
    cursor?: MedicalExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalExams.
     */
    skip?: number
    distinct?: MedicalExamScalarFieldEnum | MedicalExamScalarFieldEnum[]
  }

  /**
   * MedicalExam create
   */
  export type MedicalExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalExam.
     */
    data: XOR<MedicalExamCreateInput, MedicalExamUncheckedCreateInput>
  }

  /**
   * MedicalExam createMany
   */
  export type MedicalExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalExams.
     */
    data: MedicalExamCreateManyInput | MedicalExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalExam createManyAndReturn
   */
  export type MedicalExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalExams.
     */
    data: MedicalExamCreateManyInput | MedicalExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalExam update
   */
  export type MedicalExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalExam.
     */
    data: XOR<MedicalExamUpdateInput, MedicalExamUncheckedUpdateInput>
    /**
     * Choose, which MedicalExam to update.
     */
    where: MedicalExamWhereUniqueInput
  }

  /**
   * MedicalExam updateMany
   */
  export type MedicalExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalExams.
     */
    data: XOR<MedicalExamUpdateManyMutationInput, MedicalExamUncheckedUpdateManyInput>
    /**
     * Filter which MedicalExams to update
     */
    where?: MedicalExamWhereInput
    /**
     * Limit how many MedicalExams to update.
     */
    limit?: number
  }

  /**
   * MedicalExam updateManyAndReturn
   */
  export type MedicalExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * The data used to update MedicalExams.
     */
    data: XOR<MedicalExamUpdateManyMutationInput, MedicalExamUncheckedUpdateManyInput>
    /**
     * Filter which MedicalExams to update
     */
    where?: MedicalExamWhereInput
    /**
     * Limit how many MedicalExams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalExam upsert
   */
  export type MedicalExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalExam to update in case it exists.
     */
    where: MedicalExamWhereUniqueInput
    /**
     * In case the MedicalExam found by the `where` argument doesn't exist, create a new MedicalExam with this data.
     */
    create: XOR<MedicalExamCreateInput, MedicalExamUncheckedCreateInput>
    /**
     * In case the MedicalExam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalExamUpdateInput, MedicalExamUncheckedUpdateInput>
  }

  /**
   * MedicalExam delete
   */
  export type MedicalExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
    /**
     * Filter which MedicalExam to delete.
     */
    where: MedicalExamWhereUniqueInput
  }

  /**
   * MedicalExam deleteMany
   */
  export type MedicalExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalExams to delete
     */
    where?: MedicalExamWhereInput
    /**
     * Limit how many MedicalExams to delete.
     */
    limit?: number
  }

  /**
   * MedicalExam without action
   */
  export type MedicalExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalExam
     */
    select?: MedicalExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalExam
     */
    omit?: MedicalExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalExamInclude<ExtArgs> | null
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


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    adress: 'adress',
    city: 'city',
    email: 'email',
    phone: 'phone',
    birthDate: 'birthDate',
    admission: 'admission',
    cpf: 'cpf',
    rg: 'rg',
    employer: 'employer',
    department: 'department',
    function: 'function',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EpiScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    certification: 'certification',
    supplier: 'supplier',
    expiration: 'expiration',
    quantity: 'quantity',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpiScalarFieldEnum = (typeof EpiScalarFieldEnum)[keyof typeof EpiScalarFieldEnum]


  export const EpiEmployeeScalarFieldEnum: {
    id: 'id',
    epiId: 'epiId',
    employeeId: 'employeeId',
    quantity: 'quantity',
    deliveryDate: 'deliveryDate',
    userId: 'userId'
  };

  export type EpiEmployeeScalarFieldEnum = (typeof EpiEmployeeScalarFieldEnum)[keyof typeof EpiEmployeeScalarFieldEnum]


  export const EpiEntryScalarFieldEnum: {
    id: 'id',
    epiId: 'epiId',
    quantity: 'quantity',
    date: 'date',
    note: 'note',
    supplier: 'supplier',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpiEntryScalarFieldEnum = (typeof EpiEntryScalarFieldEnum)[keyof typeof EpiEntryScalarFieldEnum]


  export const EpiExitScalarFieldEnum: {
    id: 'id',
    epiId: 'epiId',
    employeeId: 'employeeId',
    quantity: 'quantity',
    userId: 'userId',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type EpiExitScalarFieldEnum = (typeof EpiExitScalarFieldEnum)[keyof typeof EpiExitScalarFieldEnum]


  export const MedicalExamScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    result: 'result',
    expiration: 'expiration',
    employeeId: 'employeeId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalExamScalarFieldEnum = (typeof MedicalExamScalarFieldEnum)[keyof typeof MedicalExamScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Employer'
   */
  export type EnumEmployerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Employer'>
    


  /**
   * Reference to a field of type 'Employer[]'
   */
  export type ListEnumEmployerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Employer[]'>
    


  /**
   * Reference to a field of type 'Department'
   */
  export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>
    


  /**
   * Reference to a field of type 'Department[]'
   */
  export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>
    


  /**
   * Reference to a field of type 'Function'
   */
  export type EnumFunctionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Function'>
    


  /**
   * Reference to a field of type 'Function[]'
   */
  export type ListEnumFunctionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Function[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


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


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    adress?: StringFilter<"Employee"> | string
    city?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phone?: StringFilter<"Employee"> | string
    birthDate?: DateTimeFilter<"Employee"> | Date | string
    admission?: DateTimeFilter<"Employee"> | Date | string
    cpf?: StringFilter<"Employee"> | string
    rg?: StringFilter<"Employee"> | string
    employer?: EnumEmployerFilter<"Employee"> | $Enums.Employer
    department?: EnumDepartmentFilter<"Employee"> | $Enums.Department
    function?: EnumFunctionFilter<"Employee"> | $Enums.Function
    status?: EnumStatusFilter<"Employee"> | $Enums.Status
    userId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    epies?: EpiEmployeeListRelationFilter
    exits?: EpiExitListRelationFilter
    medicalExams?: MedicalExamListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    adress?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    admission?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    employer?: SortOrder
    department?: SortOrder
    function?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    epies?: EpiEmployeeOrderByRelationAggregateInput
    exits?: EpiExitOrderByRelationAggregateInput
    medicalExams?: MedicalExamOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    cpf?: string
    rg?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    adress?: StringFilter<"Employee"> | string
    city?: StringFilter<"Employee"> | string
    birthDate?: DateTimeFilter<"Employee"> | Date | string
    admission?: DateTimeFilter<"Employee"> | Date | string
    employer?: EnumEmployerFilter<"Employee"> | $Enums.Employer
    department?: EnumDepartmentFilter<"Employee"> | $Enums.Department
    function?: EnumFunctionFilter<"Employee"> | $Enums.Function
    status?: EnumStatusFilter<"Employee"> | $Enums.Status
    userId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    epies?: EpiEmployeeListRelationFilter
    exits?: EpiExitListRelationFilter
    medicalExams?: MedicalExamListRelationFilter
  }, "id" | "email" | "phone" | "cpf" | "rg">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    adress?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    admission?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    employer?: SortOrder
    department?: SortOrder
    function?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    adress?: StringWithAggregatesFilter<"Employee"> | string
    city?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringWithAggregatesFilter<"Employee"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    admission?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    cpf?: StringWithAggregatesFilter<"Employee"> | string
    rg?: StringWithAggregatesFilter<"Employee"> | string
    employer?: EnumEmployerWithAggregatesFilter<"Employee"> | $Enums.Employer
    department?: EnumDepartmentWithAggregatesFilter<"Employee"> | $Enums.Department
    function?: EnumFunctionWithAggregatesFilter<"Employee"> | $Enums.Function
    status?: EnumStatusWithAggregatesFilter<"Employee"> | $Enums.Status
    userId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type EpiWhereInput = {
    AND?: EpiWhereInput | EpiWhereInput[]
    OR?: EpiWhereInput[]
    NOT?: EpiWhereInput | EpiWhereInput[]
    id?: IntFilter<"Epi"> | number
    name?: StringFilter<"Epi"> | string
    description?: StringFilter<"Epi"> | string
    certification?: StringFilter<"Epi"> | string
    supplier?: StringFilter<"Epi"> | string
    expiration?: DateTimeFilter<"Epi"> | Date | string
    quantity?: IntFilter<"Epi"> | number
    userId?: StringNullableFilter<"Epi"> | string | null
    createdAt?: DateTimeFilter<"Epi"> | Date | string
    updatedAt?: DateTimeFilter<"Epi"> | Date | string
    employees?: EpiEmployeeListRelationFilter
    entries?: EpiEntryListRelationFilter
    exits?: EpiExitListRelationFilter
  }

  export type EpiOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    certification?: SortOrder
    supplier?: SortOrder
    expiration?: SortOrder
    quantity?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EpiEmployeeOrderByRelationAggregateInput
    entries?: EpiEntryOrderByRelationAggregateInput
    exits?: EpiExitOrderByRelationAggregateInput
  }

  export type EpiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpiWhereInput | EpiWhereInput[]
    OR?: EpiWhereInput[]
    NOT?: EpiWhereInput | EpiWhereInput[]
    name?: StringFilter<"Epi"> | string
    description?: StringFilter<"Epi"> | string
    certification?: StringFilter<"Epi"> | string
    supplier?: StringFilter<"Epi"> | string
    expiration?: DateTimeFilter<"Epi"> | Date | string
    quantity?: IntFilter<"Epi"> | number
    userId?: StringNullableFilter<"Epi"> | string | null
    createdAt?: DateTimeFilter<"Epi"> | Date | string
    updatedAt?: DateTimeFilter<"Epi"> | Date | string
    employees?: EpiEmployeeListRelationFilter
    entries?: EpiEntryListRelationFilter
    exits?: EpiExitListRelationFilter
  }, "id">

  export type EpiOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    certification?: SortOrder
    supplier?: SortOrder
    expiration?: SortOrder
    quantity?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpiCountOrderByAggregateInput
    _avg?: EpiAvgOrderByAggregateInput
    _max?: EpiMaxOrderByAggregateInput
    _min?: EpiMinOrderByAggregateInput
    _sum?: EpiSumOrderByAggregateInput
  }

  export type EpiScalarWhereWithAggregatesInput = {
    AND?: EpiScalarWhereWithAggregatesInput | EpiScalarWhereWithAggregatesInput[]
    OR?: EpiScalarWhereWithAggregatesInput[]
    NOT?: EpiScalarWhereWithAggregatesInput | EpiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Epi"> | number
    name?: StringWithAggregatesFilter<"Epi"> | string
    description?: StringWithAggregatesFilter<"Epi"> | string
    certification?: StringWithAggregatesFilter<"Epi"> | string
    supplier?: StringWithAggregatesFilter<"Epi"> | string
    expiration?: DateTimeWithAggregatesFilter<"Epi"> | Date | string
    quantity?: IntWithAggregatesFilter<"Epi"> | number
    userId?: StringNullableWithAggregatesFilter<"Epi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Epi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Epi"> | Date | string
  }

  export type EpiEmployeeWhereInput = {
    AND?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    OR?: EpiEmployeeWhereInput[]
    NOT?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    id?: IntFilter<"EpiEmployee"> | number
    epiId?: IntFilter<"EpiEmployee"> | number
    employeeId?: IntFilter<"EpiEmployee"> | number
    quantity?: IntFilter<"EpiEmployee"> | number
    deliveryDate?: DateTimeFilter<"EpiEmployee"> | Date | string
    userId?: StringNullableFilter<"EpiEmployee"> | string | null
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EpiEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    userId?: SortOrderInput | SortOrder
    epi?: EpiOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type EpiEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    OR?: EpiEmployeeWhereInput[]
    NOT?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    epiId?: IntFilter<"EpiEmployee"> | number
    employeeId?: IntFilter<"EpiEmployee"> | number
    quantity?: IntFilter<"EpiEmployee"> | number
    deliveryDate?: DateTimeFilter<"EpiEmployee"> | Date | string
    userId?: StringNullableFilter<"EpiEmployee"> | string | null
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type EpiEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: EpiEmployeeCountOrderByAggregateInput
    _avg?: EpiEmployeeAvgOrderByAggregateInput
    _max?: EpiEmployeeMaxOrderByAggregateInput
    _min?: EpiEmployeeMinOrderByAggregateInput
    _sum?: EpiEmployeeSumOrderByAggregateInput
  }

  export type EpiEmployeeScalarWhereWithAggregatesInput = {
    AND?: EpiEmployeeScalarWhereWithAggregatesInput | EpiEmployeeScalarWhereWithAggregatesInput[]
    OR?: EpiEmployeeScalarWhereWithAggregatesInput[]
    NOT?: EpiEmployeeScalarWhereWithAggregatesInput | EpiEmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EpiEmployee"> | number
    epiId?: IntWithAggregatesFilter<"EpiEmployee"> | number
    employeeId?: IntWithAggregatesFilter<"EpiEmployee"> | number
    quantity?: IntWithAggregatesFilter<"EpiEmployee"> | number
    deliveryDate?: DateTimeWithAggregatesFilter<"EpiEmployee"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"EpiEmployee"> | string | null
  }

  export type EpiEntryWhereInput = {
    AND?: EpiEntryWhereInput | EpiEntryWhereInput[]
    OR?: EpiEntryWhereInput[]
    NOT?: EpiEntryWhereInput | EpiEntryWhereInput[]
    id?: IntFilter<"EpiEntry"> | number
    epiId?: IntFilter<"EpiEntry"> | number
    quantity?: IntFilter<"EpiEntry"> | number
    date?: DateTimeFilter<"EpiEntry"> | Date | string
    note?: StringNullableFilter<"EpiEntry"> | string | null
    supplier?: StringNullableFilter<"EpiEntry"> | string | null
    userId?: StringNullableFilter<"EpiEntry"> | string | null
    createdAt?: DateTimeFilter<"EpiEntry"> | Date | string
    updatedAt?: DateTimeFilter<"EpiEntry"> | Date | string
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
  }

  export type EpiEntryOrderByWithRelationInput = {
    id?: SortOrder
    epiId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    epi?: EpiOrderByWithRelationInput
  }

  export type EpiEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpiEntryWhereInput | EpiEntryWhereInput[]
    OR?: EpiEntryWhereInput[]
    NOT?: EpiEntryWhereInput | EpiEntryWhereInput[]
    epiId?: IntFilter<"EpiEntry"> | number
    quantity?: IntFilter<"EpiEntry"> | number
    date?: DateTimeFilter<"EpiEntry"> | Date | string
    note?: StringNullableFilter<"EpiEntry"> | string | null
    supplier?: StringNullableFilter<"EpiEntry"> | string | null
    userId?: StringNullableFilter<"EpiEntry"> | string | null
    createdAt?: DateTimeFilter<"EpiEntry"> | Date | string
    updatedAt?: DateTimeFilter<"EpiEntry"> | Date | string
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
  }, "id">

  export type EpiEntryOrderByWithAggregationInput = {
    id?: SortOrder
    epiId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpiEntryCountOrderByAggregateInput
    _avg?: EpiEntryAvgOrderByAggregateInput
    _max?: EpiEntryMaxOrderByAggregateInput
    _min?: EpiEntryMinOrderByAggregateInput
    _sum?: EpiEntrySumOrderByAggregateInput
  }

  export type EpiEntryScalarWhereWithAggregatesInput = {
    AND?: EpiEntryScalarWhereWithAggregatesInput | EpiEntryScalarWhereWithAggregatesInput[]
    OR?: EpiEntryScalarWhereWithAggregatesInput[]
    NOT?: EpiEntryScalarWhereWithAggregatesInput | EpiEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EpiEntry"> | number
    epiId?: IntWithAggregatesFilter<"EpiEntry"> | number
    quantity?: IntWithAggregatesFilter<"EpiEntry"> | number
    date?: DateTimeWithAggregatesFilter<"EpiEntry"> | Date | string
    note?: StringNullableWithAggregatesFilter<"EpiEntry"> | string | null
    supplier?: StringNullableWithAggregatesFilter<"EpiEntry"> | string | null
    userId?: StringNullableWithAggregatesFilter<"EpiEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EpiEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EpiEntry"> | Date | string
  }

  export type EpiExitWhereInput = {
    AND?: EpiExitWhereInput | EpiExitWhereInput[]
    OR?: EpiExitWhereInput[]
    NOT?: EpiExitWhereInput | EpiExitWhereInput[]
    id?: IntFilter<"EpiExit"> | number
    epiId?: IntFilter<"EpiExit"> | number
    employeeId?: IntFilter<"EpiExit"> | number
    quantity?: IntFilter<"EpiExit"> | number
    userId?: StringNullableFilter<"EpiExit"> | string | null
    date?: DateTimeFilter<"EpiExit"> | Date | string
    createdAt?: DateTimeFilter<"EpiExit"> | Date | string
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EpiExitOrderByWithRelationInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    epi?: EpiOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type EpiExitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpiExitWhereInput | EpiExitWhereInput[]
    OR?: EpiExitWhereInput[]
    NOT?: EpiExitWhereInput | EpiExitWhereInput[]
    epiId?: IntFilter<"EpiExit"> | number
    employeeId?: IntFilter<"EpiExit"> | number
    quantity?: IntFilter<"EpiExit"> | number
    userId?: StringNullableFilter<"EpiExit"> | string | null
    date?: DateTimeFilter<"EpiExit"> | Date | string
    createdAt?: DateTimeFilter<"EpiExit"> | Date | string
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type EpiExitOrderByWithAggregationInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: EpiExitCountOrderByAggregateInput
    _avg?: EpiExitAvgOrderByAggregateInput
    _max?: EpiExitMaxOrderByAggregateInput
    _min?: EpiExitMinOrderByAggregateInput
    _sum?: EpiExitSumOrderByAggregateInput
  }

  export type EpiExitScalarWhereWithAggregatesInput = {
    AND?: EpiExitScalarWhereWithAggregatesInput | EpiExitScalarWhereWithAggregatesInput[]
    OR?: EpiExitScalarWhereWithAggregatesInput[]
    NOT?: EpiExitScalarWhereWithAggregatesInput | EpiExitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EpiExit"> | number
    epiId?: IntWithAggregatesFilter<"EpiExit"> | number
    employeeId?: IntWithAggregatesFilter<"EpiExit"> | number
    quantity?: IntWithAggregatesFilter<"EpiExit"> | number
    userId?: StringNullableWithAggregatesFilter<"EpiExit"> | string | null
    date?: DateTimeWithAggregatesFilter<"EpiExit"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EpiExit"> | Date | string
  }

  export type MedicalExamWhereInput = {
    AND?: MedicalExamWhereInput | MedicalExamWhereInput[]
    OR?: MedicalExamWhereInput[]
    NOT?: MedicalExamWhereInput | MedicalExamWhereInput[]
    id?: IntFilter<"MedicalExam"> | number
    date?: DateTimeFilter<"MedicalExam"> | Date | string
    type?: StringFilter<"MedicalExam"> | string
    result?: StringNullableFilter<"MedicalExam"> | string | null
    expiration?: DateTimeFilter<"MedicalExam"> | Date | string
    employeeId?: IntFilter<"MedicalExam"> | number
    userId?: StringNullableFilter<"MedicalExam"> | string | null
    createdAt?: DateTimeFilter<"MedicalExam"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalExam"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type MedicalExamOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    result?: SortOrderInput | SortOrder
    expiration?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type MedicalExamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalExamWhereInput | MedicalExamWhereInput[]
    OR?: MedicalExamWhereInput[]
    NOT?: MedicalExamWhereInput | MedicalExamWhereInput[]
    date?: DateTimeFilter<"MedicalExam"> | Date | string
    type?: StringFilter<"MedicalExam"> | string
    result?: StringNullableFilter<"MedicalExam"> | string | null
    expiration?: DateTimeFilter<"MedicalExam"> | Date | string
    employeeId?: IntFilter<"MedicalExam"> | number
    userId?: StringNullableFilter<"MedicalExam"> | string | null
    createdAt?: DateTimeFilter<"MedicalExam"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalExam"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type MedicalExamOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    result?: SortOrderInput | SortOrder
    expiration?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalExamCountOrderByAggregateInput
    _avg?: MedicalExamAvgOrderByAggregateInput
    _max?: MedicalExamMaxOrderByAggregateInput
    _min?: MedicalExamMinOrderByAggregateInput
    _sum?: MedicalExamSumOrderByAggregateInput
  }

  export type MedicalExamScalarWhereWithAggregatesInput = {
    AND?: MedicalExamScalarWhereWithAggregatesInput | MedicalExamScalarWhereWithAggregatesInput[]
    OR?: MedicalExamScalarWhereWithAggregatesInput[]
    NOT?: MedicalExamScalarWhereWithAggregatesInput | MedicalExamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalExam"> | number
    date?: DateTimeWithAggregatesFilter<"MedicalExam"> | Date | string
    type?: StringWithAggregatesFilter<"MedicalExam"> | string
    result?: StringNullableWithAggregatesFilter<"MedicalExam"> | string | null
    expiration?: DateTimeWithAggregatesFilter<"MedicalExam"> | Date | string
    employeeId?: IntWithAggregatesFilter<"MedicalExam"> | number
    userId?: StringNullableWithAggregatesFilter<"MedicalExam"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicalExam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalExam"> | Date | string
  }

  export type EmployeeCreateInput = {
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeCreateNestedManyWithoutEmployeeInput
    exits?: EpiExitCreateNestedManyWithoutEmployeeInput
    medicalExams?: MedicalExamCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    exits?: EpiExitUncheckedCreateNestedManyWithoutEmployeeInput
    medicalExams?: MedicalExamUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUpdateManyWithoutEmployeeNestedInput
    exits?: EpiExitUpdateManyWithoutEmployeeNestedInput
    medicalExams?: MedicalExamUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    exits?: EpiExitUncheckedUpdateManyWithoutEmployeeNestedInput
    medicalExams?: MedicalExamUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiCreateInput = {
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeCreateNestedManyWithoutEpiInput
    entries?: EpiEntryCreateNestedManyWithoutEpiInput
    exits?: EpiExitCreateNestedManyWithoutEpiInput
  }

  export type EpiUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeUncheckedCreateNestedManyWithoutEpiInput
    entries?: EpiEntryUncheckedCreateNestedManyWithoutEpiInput
    exits?: EpiExitUncheckedCreateNestedManyWithoutEpiInput
  }

  export type EpiUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUpdateManyWithoutEpiNestedInput
    entries?: EpiEntryUpdateManyWithoutEpiNestedInput
    exits?: EpiExitUpdateManyWithoutEpiNestedInput
  }

  export type EpiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUncheckedUpdateManyWithoutEpiNestedInput
    entries?: EpiEntryUncheckedUpdateManyWithoutEpiNestedInput
    exits?: EpiExitUncheckedUpdateManyWithoutEpiNestedInput
  }

  export type EpiCreateManyInput = {
    id?: number
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeCreateInput = {
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
    epi: EpiCreateNestedOneWithoutEmployeesInput
    employee: EmployeeCreateNestedOneWithoutEpiesInput
  }

  export type EpiEmployeeUncheckedCreateInput = {
    id?: number
    epiId: number
    employeeId: number
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
  }

  export type EpiEmployeeUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    epi?: EpiUpdateOneRequiredWithoutEmployeesNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutEpiesNestedInput
  }

  export type EpiEmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpiEmployeeCreateManyInput = {
    id?: number
    epiId: number
    employeeId: number
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
  }

  export type EpiEmployeeUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpiEmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpiEntryCreateInput = {
    quantity: number
    date?: Date | string
    note?: string | null
    supplier?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    epi: EpiCreateNestedOneWithoutEntriesInput
  }

  export type EpiEntryUncheckedCreateInput = {
    id?: number
    epiId: number
    quantity: number
    date?: Date | string
    note?: string | null
    supplier?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEntryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epi?: EpiUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type EpiEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEntryCreateManyInput = {
    id?: number
    epiId: number
    quantity: number
    date?: Date | string
    note?: string | null
    supplier?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEntryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiExitCreateInput = {
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
    epi: EpiCreateNestedOneWithoutExitsInput
    employee: EmployeeCreateNestedOneWithoutExitsInput
  }

  export type EpiExitUncheckedCreateInput = {
    id?: number
    epiId: number
    employeeId: number
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type EpiExitUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epi?: EpiUpdateOneRequiredWithoutExitsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutExitsNestedInput
  }

  export type EpiExitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiExitCreateManyInput = {
    id?: number
    epiId: number
    employeeId: number
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type EpiExitUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiExitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalExamCreateInput = {
    date: Date | string
    type: string
    result?: string | null
    expiration: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutMedicalExamsInput
  }

  export type MedicalExamUncheckedCreateInput = {
    id?: number
    date: Date | string
    type: string
    result?: string | null
    expiration: Date | string
    employeeId: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalExamUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutMedicalExamsNestedInput
  }

  export type MedicalExamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalExamCreateManyInput = {
    id?: number
    date: Date | string
    type: string
    result?: string | null
    expiration: Date | string
    employeeId: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalExamUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalExamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumEmployerFilter<$PrismaModel = never> = {
    equals?: $Enums.Employer | EnumEmployerFieldRefInput<$PrismaModel>
    in?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployerFilter<$PrismaModel> | $Enums.Employer
  }

  export type EnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type EnumFunctionFilter<$PrismaModel = never> = {
    equals?: $Enums.Function | EnumFunctionFieldRefInput<$PrismaModel>
    in?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    not?: NestedEnumFunctionFilter<$PrismaModel> | $Enums.Function
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type EpiEmployeeListRelationFilter = {
    every?: EpiEmployeeWhereInput
    some?: EpiEmployeeWhereInput
    none?: EpiEmployeeWhereInput
  }

  export type EpiExitListRelationFilter = {
    every?: EpiExitWhereInput
    some?: EpiExitWhereInput
    none?: EpiExitWhereInput
  }

  export type MedicalExamListRelationFilter = {
    every?: MedicalExamWhereInput
    some?: MedicalExamWhereInput
    none?: MedicalExamWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EpiEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpiExitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adress?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    admission?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    employer?: SortOrder
    department?: SortOrder
    function?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adress?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    admission?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    employer?: SortOrder
    department?: SortOrder
    function?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adress?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    admission?: SortOrder
    cpf?: SortOrder
    rg?: SortOrder
    employer?: SortOrder
    department?: SortOrder
    function?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEmployerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Employer | EnumEmployerFieldRefInput<$PrismaModel>
    in?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployerWithAggregatesFilter<$PrismaModel> | $Enums.Employer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployerFilter<$PrismaModel>
    _max?: NestedEnumEmployerFilter<$PrismaModel>
  }

  export type EnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type EnumFunctionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Function | EnumFunctionFieldRefInput<$PrismaModel>
    in?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    not?: NestedEnumFunctionWithAggregatesFilter<$PrismaModel> | $Enums.Function
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFunctionFilter<$PrismaModel>
    _max?: NestedEnumFunctionFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type EpiEntryListRelationFilter = {
    every?: EpiEntryWhereInput
    some?: EpiEntryWhereInput
    none?: EpiEntryWhereInput
  }

  export type EpiEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpiCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    certification?: SortOrder
    supplier?: SortOrder
    expiration?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type EpiMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    certification?: SortOrder
    supplier?: SortOrder
    expiration?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    certification?: SortOrder
    supplier?: SortOrder
    expiration?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type EpiScalarRelationFilter = {
    is?: EpiWhereInput
    isNot?: EpiWhereInput
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type EpiEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    userId?: SortOrder
  }

  export type EpiEmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
  }

  export type EpiEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    userId?: SortOrder
  }

  export type EpiEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    deliveryDate?: SortOrder
    userId?: SortOrder
  }

  export type EpiEmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
  }

  export type EpiEntryCountOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
    note?: SortOrder
    supplier?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    quantity?: SortOrder
  }

  export type EpiEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
    note?: SortOrder
    supplier?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiEntryMinOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    quantity?: SortOrder
    date?: SortOrder
    note?: SortOrder
    supplier?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiEntrySumOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    quantity?: SortOrder
  }

  export type EpiExitCountOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EpiExitAvgOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
  }

  export type EpiExitMaxOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EpiExitMinOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EpiExitSumOrderByAggregateInput = {
    id?: SortOrder
    epiId?: SortOrder
    employeeId?: SortOrder
    quantity?: SortOrder
  }

  export type MedicalExamCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    result?: SortOrder
    expiration?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalExamAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type MedicalExamMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    result?: SortOrder
    expiration?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalExamMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    result?: SortOrder
    expiration?: SortOrder
    employeeId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalExamSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EpiEmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput> | EpiEmployeeCreateWithoutEmployeeInput[] | EpiEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEmployeeInput | EpiEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EpiEmployeeCreateManyEmployeeInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
  }

  export type EpiExitCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EpiExitCreateWithoutEmployeeInput, EpiExitUncheckedCreateWithoutEmployeeInput> | EpiExitCreateWithoutEmployeeInput[] | EpiExitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEmployeeInput | EpiExitCreateOrConnectWithoutEmployeeInput[]
    createMany?: EpiExitCreateManyEmployeeInputEnvelope
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
  }

  export type MedicalExamCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<MedicalExamCreateWithoutEmployeeInput, MedicalExamUncheckedCreateWithoutEmployeeInput> | MedicalExamCreateWithoutEmployeeInput[] | MedicalExamUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: MedicalExamCreateOrConnectWithoutEmployeeInput | MedicalExamCreateOrConnectWithoutEmployeeInput[]
    createMany?: MedicalExamCreateManyEmployeeInputEnvelope
    connect?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
  }

  export type EpiEmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput> | EpiEmployeeCreateWithoutEmployeeInput[] | EpiEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEmployeeInput | EpiEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EpiEmployeeCreateManyEmployeeInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
  }

  export type EpiExitUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EpiExitCreateWithoutEmployeeInput, EpiExitUncheckedCreateWithoutEmployeeInput> | EpiExitCreateWithoutEmployeeInput[] | EpiExitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEmployeeInput | EpiExitCreateOrConnectWithoutEmployeeInput[]
    createMany?: EpiExitCreateManyEmployeeInputEnvelope
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
  }

  export type MedicalExamUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<MedicalExamCreateWithoutEmployeeInput, MedicalExamUncheckedCreateWithoutEmployeeInput> | MedicalExamCreateWithoutEmployeeInput[] | MedicalExamUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: MedicalExamCreateOrConnectWithoutEmployeeInput | MedicalExamCreateOrConnectWithoutEmployeeInput[]
    createMany?: MedicalExamCreateManyEmployeeInputEnvelope
    connect?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEmployerFieldUpdateOperationsInput = {
    set?: $Enums.Employer
  }

  export type EnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department
  }

  export type EnumFunctionFieldUpdateOperationsInput = {
    set?: $Enums.Function
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EpiEmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput> | EpiEmployeeCreateWithoutEmployeeInput[] | EpiEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEmployeeInput | EpiEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: EpiEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | EpiEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EpiEmployeeCreateManyEmployeeInputEnvelope
    set?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    disconnect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    delete?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    update?: EpiEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | EpiEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EpiEmployeeUpdateManyWithWhereWithoutEmployeeInput | EpiEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EpiEmployeeScalarWhereInput | EpiEmployeeScalarWhereInput[]
  }

  export type EpiExitUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EpiExitCreateWithoutEmployeeInput, EpiExitUncheckedCreateWithoutEmployeeInput> | EpiExitCreateWithoutEmployeeInput[] | EpiExitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEmployeeInput | EpiExitCreateOrConnectWithoutEmployeeInput[]
    upsert?: EpiExitUpsertWithWhereUniqueWithoutEmployeeInput | EpiExitUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EpiExitCreateManyEmployeeInputEnvelope
    set?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    disconnect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    delete?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    update?: EpiExitUpdateWithWhereUniqueWithoutEmployeeInput | EpiExitUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EpiExitUpdateManyWithWhereWithoutEmployeeInput | EpiExitUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EpiExitScalarWhereInput | EpiExitScalarWhereInput[]
  }

  export type MedicalExamUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<MedicalExamCreateWithoutEmployeeInput, MedicalExamUncheckedCreateWithoutEmployeeInput> | MedicalExamCreateWithoutEmployeeInput[] | MedicalExamUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: MedicalExamCreateOrConnectWithoutEmployeeInput | MedicalExamCreateOrConnectWithoutEmployeeInput[]
    upsert?: MedicalExamUpsertWithWhereUniqueWithoutEmployeeInput | MedicalExamUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: MedicalExamCreateManyEmployeeInputEnvelope
    set?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    disconnect?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    delete?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    connect?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    update?: MedicalExamUpdateWithWhereUniqueWithoutEmployeeInput | MedicalExamUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: MedicalExamUpdateManyWithWhereWithoutEmployeeInput | MedicalExamUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: MedicalExamScalarWhereInput | MedicalExamScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EpiEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput> | EpiEmployeeCreateWithoutEmployeeInput[] | EpiEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEmployeeInput | EpiEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: EpiEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | EpiEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EpiEmployeeCreateManyEmployeeInputEnvelope
    set?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    disconnect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    delete?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    update?: EpiEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | EpiEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EpiEmployeeUpdateManyWithWhereWithoutEmployeeInput | EpiEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EpiEmployeeScalarWhereInput | EpiEmployeeScalarWhereInput[]
  }

  export type EpiExitUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EpiExitCreateWithoutEmployeeInput, EpiExitUncheckedCreateWithoutEmployeeInput> | EpiExitCreateWithoutEmployeeInput[] | EpiExitUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEmployeeInput | EpiExitCreateOrConnectWithoutEmployeeInput[]
    upsert?: EpiExitUpsertWithWhereUniqueWithoutEmployeeInput | EpiExitUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EpiExitCreateManyEmployeeInputEnvelope
    set?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    disconnect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    delete?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    update?: EpiExitUpdateWithWhereUniqueWithoutEmployeeInput | EpiExitUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EpiExitUpdateManyWithWhereWithoutEmployeeInput | EpiExitUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EpiExitScalarWhereInput | EpiExitScalarWhereInput[]
  }

  export type MedicalExamUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<MedicalExamCreateWithoutEmployeeInput, MedicalExamUncheckedCreateWithoutEmployeeInput> | MedicalExamCreateWithoutEmployeeInput[] | MedicalExamUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: MedicalExamCreateOrConnectWithoutEmployeeInput | MedicalExamCreateOrConnectWithoutEmployeeInput[]
    upsert?: MedicalExamUpsertWithWhereUniqueWithoutEmployeeInput | MedicalExamUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: MedicalExamCreateManyEmployeeInputEnvelope
    set?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    disconnect?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    delete?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    connect?: MedicalExamWhereUniqueInput | MedicalExamWhereUniqueInput[]
    update?: MedicalExamUpdateWithWhereUniqueWithoutEmployeeInput | MedicalExamUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: MedicalExamUpdateManyWithWhereWithoutEmployeeInput | MedicalExamUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: MedicalExamScalarWhereInput | MedicalExamScalarWhereInput[]
  }

  export type EpiEmployeeCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput> | EpiEmployeeCreateWithoutEpiInput[] | EpiEmployeeUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEpiInput | EpiEmployeeCreateOrConnectWithoutEpiInput[]
    createMany?: EpiEmployeeCreateManyEpiInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
  }

  export type EpiEntryCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiEntryCreateWithoutEpiInput, EpiEntryUncheckedCreateWithoutEpiInput> | EpiEntryCreateWithoutEpiInput[] | EpiEntryUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEntryCreateOrConnectWithoutEpiInput | EpiEntryCreateOrConnectWithoutEpiInput[]
    createMany?: EpiEntryCreateManyEpiInputEnvelope
    connect?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
  }

  export type EpiExitCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiExitCreateWithoutEpiInput, EpiExitUncheckedCreateWithoutEpiInput> | EpiExitCreateWithoutEpiInput[] | EpiExitUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEpiInput | EpiExitCreateOrConnectWithoutEpiInput[]
    createMany?: EpiExitCreateManyEpiInputEnvelope
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
  }

  export type EpiEmployeeUncheckedCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput> | EpiEmployeeCreateWithoutEpiInput[] | EpiEmployeeUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEpiInput | EpiEmployeeCreateOrConnectWithoutEpiInput[]
    createMany?: EpiEmployeeCreateManyEpiInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
  }

  export type EpiEntryUncheckedCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiEntryCreateWithoutEpiInput, EpiEntryUncheckedCreateWithoutEpiInput> | EpiEntryCreateWithoutEpiInput[] | EpiEntryUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEntryCreateOrConnectWithoutEpiInput | EpiEntryCreateOrConnectWithoutEpiInput[]
    createMany?: EpiEntryCreateManyEpiInputEnvelope
    connect?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
  }

  export type EpiExitUncheckedCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiExitCreateWithoutEpiInput, EpiExitUncheckedCreateWithoutEpiInput> | EpiExitCreateWithoutEpiInput[] | EpiExitUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEpiInput | EpiExitCreateOrConnectWithoutEpiInput[]
    createMany?: EpiExitCreateManyEpiInputEnvelope
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
  }

  export type EpiEmployeeUpdateManyWithoutEpiNestedInput = {
    create?: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput> | EpiEmployeeCreateWithoutEpiInput[] | EpiEmployeeUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEpiInput | EpiEmployeeCreateOrConnectWithoutEpiInput[]
    upsert?: EpiEmployeeUpsertWithWhereUniqueWithoutEpiInput | EpiEmployeeUpsertWithWhereUniqueWithoutEpiInput[]
    createMany?: EpiEmployeeCreateManyEpiInputEnvelope
    set?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    disconnect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    delete?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    update?: EpiEmployeeUpdateWithWhereUniqueWithoutEpiInput | EpiEmployeeUpdateWithWhereUniqueWithoutEpiInput[]
    updateMany?: EpiEmployeeUpdateManyWithWhereWithoutEpiInput | EpiEmployeeUpdateManyWithWhereWithoutEpiInput[]
    deleteMany?: EpiEmployeeScalarWhereInput | EpiEmployeeScalarWhereInput[]
  }

  export type EpiEntryUpdateManyWithoutEpiNestedInput = {
    create?: XOR<EpiEntryCreateWithoutEpiInput, EpiEntryUncheckedCreateWithoutEpiInput> | EpiEntryCreateWithoutEpiInput[] | EpiEntryUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEntryCreateOrConnectWithoutEpiInput | EpiEntryCreateOrConnectWithoutEpiInput[]
    upsert?: EpiEntryUpsertWithWhereUniqueWithoutEpiInput | EpiEntryUpsertWithWhereUniqueWithoutEpiInput[]
    createMany?: EpiEntryCreateManyEpiInputEnvelope
    set?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    disconnect?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    delete?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    connect?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    update?: EpiEntryUpdateWithWhereUniqueWithoutEpiInput | EpiEntryUpdateWithWhereUniqueWithoutEpiInput[]
    updateMany?: EpiEntryUpdateManyWithWhereWithoutEpiInput | EpiEntryUpdateManyWithWhereWithoutEpiInput[]
    deleteMany?: EpiEntryScalarWhereInput | EpiEntryScalarWhereInput[]
  }

  export type EpiExitUpdateManyWithoutEpiNestedInput = {
    create?: XOR<EpiExitCreateWithoutEpiInput, EpiExitUncheckedCreateWithoutEpiInput> | EpiExitCreateWithoutEpiInput[] | EpiExitUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEpiInput | EpiExitCreateOrConnectWithoutEpiInput[]
    upsert?: EpiExitUpsertWithWhereUniqueWithoutEpiInput | EpiExitUpsertWithWhereUniqueWithoutEpiInput[]
    createMany?: EpiExitCreateManyEpiInputEnvelope
    set?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    disconnect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    delete?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    update?: EpiExitUpdateWithWhereUniqueWithoutEpiInput | EpiExitUpdateWithWhereUniqueWithoutEpiInput[]
    updateMany?: EpiExitUpdateManyWithWhereWithoutEpiInput | EpiExitUpdateManyWithWhereWithoutEpiInput[]
    deleteMany?: EpiExitScalarWhereInput | EpiExitScalarWhereInput[]
  }

  export type EpiEmployeeUncheckedUpdateManyWithoutEpiNestedInput = {
    create?: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput> | EpiEmployeeCreateWithoutEpiInput[] | EpiEmployeeUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEpiInput | EpiEmployeeCreateOrConnectWithoutEpiInput[]
    upsert?: EpiEmployeeUpsertWithWhereUniqueWithoutEpiInput | EpiEmployeeUpsertWithWhereUniqueWithoutEpiInput[]
    createMany?: EpiEmployeeCreateManyEpiInputEnvelope
    set?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    disconnect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    delete?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
    update?: EpiEmployeeUpdateWithWhereUniqueWithoutEpiInput | EpiEmployeeUpdateWithWhereUniqueWithoutEpiInput[]
    updateMany?: EpiEmployeeUpdateManyWithWhereWithoutEpiInput | EpiEmployeeUpdateManyWithWhereWithoutEpiInput[]
    deleteMany?: EpiEmployeeScalarWhereInput | EpiEmployeeScalarWhereInput[]
  }

  export type EpiEntryUncheckedUpdateManyWithoutEpiNestedInput = {
    create?: XOR<EpiEntryCreateWithoutEpiInput, EpiEntryUncheckedCreateWithoutEpiInput> | EpiEntryCreateWithoutEpiInput[] | EpiEntryUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEntryCreateOrConnectWithoutEpiInput | EpiEntryCreateOrConnectWithoutEpiInput[]
    upsert?: EpiEntryUpsertWithWhereUniqueWithoutEpiInput | EpiEntryUpsertWithWhereUniqueWithoutEpiInput[]
    createMany?: EpiEntryCreateManyEpiInputEnvelope
    set?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    disconnect?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    delete?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    connect?: EpiEntryWhereUniqueInput | EpiEntryWhereUniqueInput[]
    update?: EpiEntryUpdateWithWhereUniqueWithoutEpiInput | EpiEntryUpdateWithWhereUniqueWithoutEpiInput[]
    updateMany?: EpiEntryUpdateManyWithWhereWithoutEpiInput | EpiEntryUpdateManyWithWhereWithoutEpiInput[]
    deleteMany?: EpiEntryScalarWhereInput | EpiEntryScalarWhereInput[]
  }

  export type EpiExitUncheckedUpdateManyWithoutEpiNestedInput = {
    create?: XOR<EpiExitCreateWithoutEpiInput, EpiExitUncheckedCreateWithoutEpiInput> | EpiExitCreateWithoutEpiInput[] | EpiExitUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiExitCreateOrConnectWithoutEpiInput | EpiExitCreateOrConnectWithoutEpiInput[]
    upsert?: EpiExitUpsertWithWhereUniqueWithoutEpiInput | EpiExitUpsertWithWhereUniqueWithoutEpiInput[]
    createMany?: EpiExitCreateManyEpiInputEnvelope
    set?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    disconnect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    delete?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    connect?: EpiExitWhereUniqueInput | EpiExitWhereUniqueInput[]
    update?: EpiExitUpdateWithWhereUniqueWithoutEpiInput | EpiExitUpdateWithWhereUniqueWithoutEpiInput[]
    updateMany?: EpiExitUpdateManyWithWhereWithoutEpiInput | EpiExitUpdateManyWithWhereWithoutEpiInput[]
    deleteMany?: EpiExitScalarWhereInput | EpiExitScalarWhereInput[]
  }

  export type EpiCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<EpiCreateWithoutEmployeesInput, EpiUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EpiCreateOrConnectWithoutEmployeesInput
    connect?: EpiWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutEpiesInput = {
    create?: XOR<EmployeeCreateWithoutEpiesInput, EmployeeUncheckedCreateWithoutEpiesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEpiesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EpiUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<EpiCreateWithoutEmployeesInput, EpiUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EpiCreateOrConnectWithoutEmployeesInput
    upsert?: EpiUpsertWithoutEmployeesInput
    connect?: EpiWhereUniqueInput
    update?: XOR<XOR<EpiUpdateToOneWithWhereWithoutEmployeesInput, EpiUpdateWithoutEmployeesInput>, EpiUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeUpdateOneRequiredWithoutEpiesNestedInput = {
    create?: XOR<EmployeeCreateWithoutEpiesInput, EmployeeUncheckedCreateWithoutEpiesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEpiesInput
    upsert?: EmployeeUpsertWithoutEpiesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEpiesInput, EmployeeUpdateWithoutEpiesInput>, EmployeeUncheckedUpdateWithoutEpiesInput>
  }

  export type EpiCreateNestedOneWithoutEntriesInput = {
    create?: XOR<EpiCreateWithoutEntriesInput, EpiUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: EpiCreateOrConnectWithoutEntriesInput
    connect?: EpiWhereUniqueInput
  }

  export type EpiUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<EpiCreateWithoutEntriesInput, EpiUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: EpiCreateOrConnectWithoutEntriesInput
    upsert?: EpiUpsertWithoutEntriesInput
    connect?: EpiWhereUniqueInput
    update?: XOR<XOR<EpiUpdateToOneWithWhereWithoutEntriesInput, EpiUpdateWithoutEntriesInput>, EpiUncheckedUpdateWithoutEntriesInput>
  }

  export type EpiCreateNestedOneWithoutExitsInput = {
    create?: XOR<EpiCreateWithoutExitsInput, EpiUncheckedCreateWithoutExitsInput>
    connectOrCreate?: EpiCreateOrConnectWithoutExitsInput
    connect?: EpiWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutExitsInput = {
    create?: XOR<EmployeeCreateWithoutExitsInput, EmployeeUncheckedCreateWithoutExitsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutExitsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EpiUpdateOneRequiredWithoutExitsNestedInput = {
    create?: XOR<EpiCreateWithoutExitsInput, EpiUncheckedCreateWithoutExitsInput>
    connectOrCreate?: EpiCreateOrConnectWithoutExitsInput
    upsert?: EpiUpsertWithoutExitsInput
    connect?: EpiWhereUniqueInput
    update?: XOR<XOR<EpiUpdateToOneWithWhereWithoutExitsInput, EpiUpdateWithoutExitsInput>, EpiUncheckedUpdateWithoutExitsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutExitsNestedInput = {
    create?: XOR<EmployeeCreateWithoutExitsInput, EmployeeUncheckedCreateWithoutExitsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutExitsInput
    upsert?: EmployeeUpsertWithoutExitsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutExitsInput, EmployeeUpdateWithoutExitsInput>, EmployeeUncheckedUpdateWithoutExitsInput>
  }

  export type EmployeeCreateNestedOneWithoutMedicalExamsInput = {
    create?: XOR<EmployeeCreateWithoutMedicalExamsInput, EmployeeUncheckedCreateWithoutMedicalExamsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMedicalExamsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutMedicalExamsNestedInput = {
    create?: XOR<EmployeeCreateWithoutMedicalExamsInput, EmployeeUncheckedCreateWithoutMedicalExamsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutMedicalExamsInput
    upsert?: EmployeeUpsertWithoutMedicalExamsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutMedicalExamsInput, EmployeeUpdateWithoutMedicalExamsInput>, EmployeeUncheckedUpdateWithoutMedicalExamsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEmployerFilter<$PrismaModel = never> = {
    equals?: $Enums.Employer | EnumEmployerFieldRefInput<$PrismaModel>
    in?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployerFilter<$PrismaModel> | $Enums.Employer
  }

  export type NestedEnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department
  }

  export type NestedEnumFunctionFilter<$PrismaModel = never> = {
    equals?: $Enums.Function | EnumFunctionFieldRefInput<$PrismaModel>
    in?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    not?: NestedEnumFunctionFilter<$PrismaModel> | $Enums.Function
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEmployerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Employer | EnumEmployerFieldRefInput<$PrismaModel>
    in?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    notIn?: $Enums.Employer[] | ListEnumEmployerFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployerWithAggregatesFilter<$PrismaModel> | $Enums.Employer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployerFilter<$PrismaModel>
    _max?: NestedEnumEmployerFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel>
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentFilter<$PrismaModel>
    _max?: NestedEnumDepartmentFilter<$PrismaModel>
  }

  export type NestedEnumFunctionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Function | EnumFunctionFieldRefInput<$PrismaModel>
    in?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Function[] | ListEnumFunctionFieldRefInput<$PrismaModel>
    not?: NestedEnumFunctionWithAggregatesFilter<$PrismaModel> | $Enums.Function
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFunctionFilter<$PrismaModel>
    _max?: NestedEnumFunctionFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type EpiEmployeeCreateWithoutEmployeeInput = {
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
    epi: EpiCreateNestedOneWithoutEmployeesInput
  }

  export type EpiEmployeeUncheckedCreateWithoutEmployeeInput = {
    id?: number
    epiId: number
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
  }

  export type EpiEmployeeCreateOrConnectWithoutEmployeeInput = {
    where: EpiEmployeeWhereUniqueInput
    create: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type EpiEmployeeCreateManyEmployeeInputEnvelope = {
    data: EpiEmployeeCreateManyEmployeeInput | EpiEmployeeCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EpiExitCreateWithoutEmployeeInput = {
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
    epi: EpiCreateNestedOneWithoutExitsInput
  }

  export type EpiExitUncheckedCreateWithoutEmployeeInput = {
    id?: number
    epiId: number
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type EpiExitCreateOrConnectWithoutEmployeeInput = {
    where: EpiExitWhereUniqueInput
    create: XOR<EpiExitCreateWithoutEmployeeInput, EpiExitUncheckedCreateWithoutEmployeeInput>
  }

  export type EpiExitCreateManyEmployeeInputEnvelope = {
    data: EpiExitCreateManyEmployeeInput | EpiExitCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type MedicalExamCreateWithoutEmployeeInput = {
    date: Date | string
    type: string
    result?: string | null
    expiration: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalExamUncheckedCreateWithoutEmployeeInput = {
    id?: number
    date: Date | string
    type: string
    result?: string | null
    expiration: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalExamCreateOrConnectWithoutEmployeeInput = {
    where: MedicalExamWhereUniqueInput
    create: XOR<MedicalExamCreateWithoutEmployeeInput, MedicalExamUncheckedCreateWithoutEmployeeInput>
  }

  export type MedicalExamCreateManyEmployeeInputEnvelope = {
    data: MedicalExamCreateManyEmployeeInput | MedicalExamCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EpiEmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EpiEmployeeWhereUniqueInput
    update: XOR<EpiEmployeeUpdateWithoutEmployeeInput, EpiEmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type EpiEmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EpiEmployeeWhereUniqueInput
    data: XOR<EpiEmployeeUpdateWithoutEmployeeInput, EpiEmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type EpiEmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: EpiEmployeeScalarWhereInput
    data: XOR<EpiEmployeeUpdateManyMutationInput, EpiEmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EpiEmployeeScalarWhereInput = {
    AND?: EpiEmployeeScalarWhereInput | EpiEmployeeScalarWhereInput[]
    OR?: EpiEmployeeScalarWhereInput[]
    NOT?: EpiEmployeeScalarWhereInput | EpiEmployeeScalarWhereInput[]
    id?: IntFilter<"EpiEmployee"> | number
    epiId?: IntFilter<"EpiEmployee"> | number
    employeeId?: IntFilter<"EpiEmployee"> | number
    quantity?: IntFilter<"EpiEmployee"> | number
    deliveryDate?: DateTimeFilter<"EpiEmployee"> | Date | string
    userId?: StringNullableFilter<"EpiEmployee"> | string | null
  }

  export type EpiExitUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EpiExitWhereUniqueInput
    update: XOR<EpiExitUpdateWithoutEmployeeInput, EpiExitUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EpiExitCreateWithoutEmployeeInput, EpiExitUncheckedCreateWithoutEmployeeInput>
  }

  export type EpiExitUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EpiExitWhereUniqueInput
    data: XOR<EpiExitUpdateWithoutEmployeeInput, EpiExitUncheckedUpdateWithoutEmployeeInput>
  }

  export type EpiExitUpdateManyWithWhereWithoutEmployeeInput = {
    where: EpiExitScalarWhereInput
    data: XOR<EpiExitUpdateManyMutationInput, EpiExitUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EpiExitScalarWhereInput = {
    AND?: EpiExitScalarWhereInput | EpiExitScalarWhereInput[]
    OR?: EpiExitScalarWhereInput[]
    NOT?: EpiExitScalarWhereInput | EpiExitScalarWhereInput[]
    id?: IntFilter<"EpiExit"> | number
    epiId?: IntFilter<"EpiExit"> | number
    employeeId?: IntFilter<"EpiExit"> | number
    quantity?: IntFilter<"EpiExit"> | number
    userId?: StringNullableFilter<"EpiExit"> | string | null
    date?: DateTimeFilter<"EpiExit"> | Date | string
    createdAt?: DateTimeFilter<"EpiExit"> | Date | string
  }

  export type MedicalExamUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: MedicalExamWhereUniqueInput
    update: XOR<MedicalExamUpdateWithoutEmployeeInput, MedicalExamUncheckedUpdateWithoutEmployeeInput>
    create: XOR<MedicalExamCreateWithoutEmployeeInput, MedicalExamUncheckedCreateWithoutEmployeeInput>
  }

  export type MedicalExamUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: MedicalExamWhereUniqueInput
    data: XOR<MedicalExamUpdateWithoutEmployeeInput, MedicalExamUncheckedUpdateWithoutEmployeeInput>
  }

  export type MedicalExamUpdateManyWithWhereWithoutEmployeeInput = {
    where: MedicalExamScalarWhereInput
    data: XOR<MedicalExamUpdateManyMutationInput, MedicalExamUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type MedicalExamScalarWhereInput = {
    AND?: MedicalExamScalarWhereInput | MedicalExamScalarWhereInput[]
    OR?: MedicalExamScalarWhereInput[]
    NOT?: MedicalExamScalarWhereInput | MedicalExamScalarWhereInput[]
    id?: IntFilter<"MedicalExam"> | number
    date?: DateTimeFilter<"MedicalExam"> | Date | string
    type?: StringFilter<"MedicalExam"> | string
    result?: StringNullableFilter<"MedicalExam"> | string | null
    expiration?: DateTimeFilter<"MedicalExam"> | Date | string
    employeeId?: IntFilter<"MedicalExam"> | number
    userId?: StringNullableFilter<"MedicalExam"> | string | null
    createdAt?: DateTimeFilter<"MedicalExam"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalExam"> | Date | string
  }

  export type EpiEmployeeCreateWithoutEpiInput = {
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
    employee: EmployeeCreateNestedOneWithoutEpiesInput
  }

  export type EpiEmployeeUncheckedCreateWithoutEpiInput = {
    id?: number
    employeeId: number
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
  }

  export type EpiEmployeeCreateOrConnectWithoutEpiInput = {
    where: EpiEmployeeWhereUniqueInput
    create: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput>
  }

  export type EpiEmployeeCreateManyEpiInputEnvelope = {
    data: EpiEmployeeCreateManyEpiInput | EpiEmployeeCreateManyEpiInput[]
    skipDuplicates?: boolean
  }

  export type EpiEntryCreateWithoutEpiInput = {
    quantity: number
    date?: Date | string
    note?: string | null
    supplier?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEntryUncheckedCreateWithoutEpiInput = {
    id?: number
    quantity: number
    date?: Date | string
    note?: string | null
    supplier?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEntryCreateOrConnectWithoutEpiInput = {
    where: EpiEntryWhereUniqueInput
    create: XOR<EpiEntryCreateWithoutEpiInput, EpiEntryUncheckedCreateWithoutEpiInput>
  }

  export type EpiEntryCreateManyEpiInputEnvelope = {
    data: EpiEntryCreateManyEpiInput | EpiEntryCreateManyEpiInput[]
    skipDuplicates?: boolean
  }

  export type EpiExitCreateWithoutEpiInput = {
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutExitsInput
  }

  export type EpiExitUncheckedCreateWithoutEpiInput = {
    id?: number
    employeeId: number
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type EpiExitCreateOrConnectWithoutEpiInput = {
    where: EpiExitWhereUniqueInput
    create: XOR<EpiExitCreateWithoutEpiInput, EpiExitUncheckedCreateWithoutEpiInput>
  }

  export type EpiExitCreateManyEpiInputEnvelope = {
    data: EpiExitCreateManyEpiInput | EpiExitCreateManyEpiInput[]
    skipDuplicates?: boolean
  }

  export type EpiEmployeeUpsertWithWhereUniqueWithoutEpiInput = {
    where: EpiEmployeeWhereUniqueInput
    update: XOR<EpiEmployeeUpdateWithoutEpiInput, EpiEmployeeUncheckedUpdateWithoutEpiInput>
    create: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput>
  }

  export type EpiEmployeeUpdateWithWhereUniqueWithoutEpiInput = {
    where: EpiEmployeeWhereUniqueInput
    data: XOR<EpiEmployeeUpdateWithoutEpiInput, EpiEmployeeUncheckedUpdateWithoutEpiInput>
  }

  export type EpiEmployeeUpdateManyWithWhereWithoutEpiInput = {
    where: EpiEmployeeScalarWhereInput
    data: XOR<EpiEmployeeUpdateManyMutationInput, EpiEmployeeUncheckedUpdateManyWithoutEpiInput>
  }

  export type EpiEntryUpsertWithWhereUniqueWithoutEpiInput = {
    where: EpiEntryWhereUniqueInput
    update: XOR<EpiEntryUpdateWithoutEpiInput, EpiEntryUncheckedUpdateWithoutEpiInput>
    create: XOR<EpiEntryCreateWithoutEpiInput, EpiEntryUncheckedCreateWithoutEpiInput>
  }

  export type EpiEntryUpdateWithWhereUniqueWithoutEpiInput = {
    where: EpiEntryWhereUniqueInput
    data: XOR<EpiEntryUpdateWithoutEpiInput, EpiEntryUncheckedUpdateWithoutEpiInput>
  }

  export type EpiEntryUpdateManyWithWhereWithoutEpiInput = {
    where: EpiEntryScalarWhereInput
    data: XOR<EpiEntryUpdateManyMutationInput, EpiEntryUncheckedUpdateManyWithoutEpiInput>
  }

  export type EpiEntryScalarWhereInput = {
    AND?: EpiEntryScalarWhereInput | EpiEntryScalarWhereInput[]
    OR?: EpiEntryScalarWhereInput[]
    NOT?: EpiEntryScalarWhereInput | EpiEntryScalarWhereInput[]
    id?: IntFilter<"EpiEntry"> | number
    epiId?: IntFilter<"EpiEntry"> | number
    quantity?: IntFilter<"EpiEntry"> | number
    date?: DateTimeFilter<"EpiEntry"> | Date | string
    note?: StringNullableFilter<"EpiEntry"> | string | null
    supplier?: StringNullableFilter<"EpiEntry"> | string | null
    userId?: StringNullableFilter<"EpiEntry"> | string | null
    createdAt?: DateTimeFilter<"EpiEntry"> | Date | string
    updatedAt?: DateTimeFilter<"EpiEntry"> | Date | string
  }

  export type EpiExitUpsertWithWhereUniqueWithoutEpiInput = {
    where: EpiExitWhereUniqueInput
    update: XOR<EpiExitUpdateWithoutEpiInput, EpiExitUncheckedUpdateWithoutEpiInput>
    create: XOR<EpiExitCreateWithoutEpiInput, EpiExitUncheckedCreateWithoutEpiInput>
  }

  export type EpiExitUpdateWithWhereUniqueWithoutEpiInput = {
    where: EpiExitWhereUniqueInput
    data: XOR<EpiExitUpdateWithoutEpiInput, EpiExitUncheckedUpdateWithoutEpiInput>
  }

  export type EpiExitUpdateManyWithWhereWithoutEpiInput = {
    where: EpiExitScalarWhereInput
    data: XOR<EpiExitUpdateManyMutationInput, EpiExitUncheckedUpdateManyWithoutEpiInput>
  }

  export type EpiCreateWithoutEmployeesInput = {
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EpiEntryCreateNestedManyWithoutEpiInput
    exits?: EpiExitCreateNestedManyWithoutEpiInput
  }

  export type EpiUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EpiEntryUncheckedCreateNestedManyWithoutEpiInput
    exits?: EpiExitUncheckedCreateNestedManyWithoutEpiInput
  }

  export type EpiCreateOrConnectWithoutEmployeesInput = {
    where: EpiWhereUniqueInput
    create: XOR<EpiCreateWithoutEmployeesInput, EpiUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeCreateWithoutEpiesInput = {
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exits?: EpiExitCreateNestedManyWithoutEmployeeInput
    medicalExams?: MedicalExamCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutEpiesInput = {
    id?: number
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exits?: EpiExitUncheckedCreateNestedManyWithoutEmployeeInput
    medicalExams?: MedicalExamUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutEpiesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEpiesInput, EmployeeUncheckedCreateWithoutEpiesInput>
  }

  export type EpiUpsertWithoutEmployeesInput = {
    update: XOR<EpiUpdateWithoutEmployeesInput, EpiUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EpiCreateWithoutEmployeesInput, EpiUncheckedCreateWithoutEmployeesInput>
    where?: EpiWhereInput
  }

  export type EpiUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: EpiWhereInput
    data: XOR<EpiUpdateWithoutEmployeesInput, EpiUncheckedUpdateWithoutEmployeesInput>
  }

  export type EpiUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EpiEntryUpdateManyWithoutEpiNestedInput
    exits?: EpiExitUpdateManyWithoutEpiNestedInput
  }

  export type EpiUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EpiEntryUncheckedUpdateManyWithoutEpiNestedInput
    exits?: EpiExitUncheckedUpdateManyWithoutEpiNestedInput
  }

  export type EmployeeUpsertWithoutEpiesInput = {
    update: XOR<EmployeeUpdateWithoutEpiesInput, EmployeeUncheckedUpdateWithoutEpiesInput>
    create: XOR<EmployeeCreateWithoutEpiesInput, EmployeeUncheckedCreateWithoutEpiesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutEpiesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutEpiesInput, EmployeeUncheckedUpdateWithoutEpiesInput>
  }

  export type EmployeeUpdateWithoutEpiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exits?: EpiExitUpdateManyWithoutEmployeeNestedInput
    medicalExams?: MedicalExamUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEpiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exits?: EpiExitUncheckedUpdateManyWithoutEmployeeNestedInput
    medicalExams?: MedicalExamUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EpiCreateWithoutEntriesInput = {
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeCreateNestedManyWithoutEpiInput
    exits?: EpiExitCreateNestedManyWithoutEpiInput
  }

  export type EpiUncheckedCreateWithoutEntriesInput = {
    id?: number
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeUncheckedCreateNestedManyWithoutEpiInput
    exits?: EpiExitUncheckedCreateNestedManyWithoutEpiInput
  }

  export type EpiCreateOrConnectWithoutEntriesInput = {
    where: EpiWhereUniqueInput
    create: XOR<EpiCreateWithoutEntriesInput, EpiUncheckedCreateWithoutEntriesInput>
  }

  export type EpiUpsertWithoutEntriesInput = {
    update: XOR<EpiUpdateWithoutEntriesInput, EpiUncheckedUpdateWithoutEntriesInput>
    create: XOR<EpiCreateWithoutEntriesInput, EpiUncheckedCreateWithoutEntriesInput>
    where?: EpiWhereInput
  }

  export type EpiUpdateToOneWithWhereWithoutEntriesInput = {
    where?: EpiWhereInput
    data: XOR<EpiUpdateWithoutEntriesInput, EpiUncheckedUpdateWithoutEntriesInput>
  }

  export type EpiUpdateWithoutEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUpdateManyWithoutEpiNestedInput
    exits?: EpiExitUpdateManyWithoutEpiNestedInput
  }

  export type EpiUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUncheckedUpdateManyWithoutEpiNestedInput
    exits?: EpiExitUncheckedUpdateManyWithoutEpiNestedInput
  }

  export type EpiCreateWithoutExitsInput = {
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeCreateNestedManyWithoutEpiInput
    entries?: EpiEntryCreateNestedManyWithoutEpiInput
  }

  export type EpiUncheckedCreateWithoutExitsInput = {
    id?: number
    name: string
    description: string
    certification: string
    supplier: string
    expiration: Date | string
    quantity: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeUncheckedCreateNestedManyWithoutEpiInput
    entries?: EpiEntryUncheckedCreateNestedManyWithoutEpiInput
  }

  export type EpiCreateOrConnectWithoutExitsInput = {
    where: EpiWhereUniqueInput
    create: XOR<EpiCreateWithoutExitsInput, EpiUncheckedCreateWithoutExitsInput>
  }

  export type EmployeeCreateWithoutExitsInput = {
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeCreateNestedManyWithoutEmployeeInput
    medicalExams?: MedicalExamCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutExitsInput = {
    id?: number
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    medicalExams?: MedicalExamUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutExitsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutExitsInput, EmployeeUncheckedCreateWithoutExitsInput>
  }

  export type EpiUpsertWithoutExitsInput = {
    update: XOR<EpiUpdateWithoutExitsInput, EpiUncheckedUpdateWithoutExitsInput>
    create: XOR<EpiCreateWithoutExitsInput, EpiUncheckedCreateWithoutExitsInput>
    where?: EpiWhereInput
  }

  export type EpiUpdateToOneWithWhereWithoutExitsInput = {
    where?: EpiWhereInput
    data: XOR<EpiUpdateWithoutExitsInput, EpiUncheckedUpdateWithoutExitsInput>
  }

  export type EpiUpdateWithoutExitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUpdateManyWithoutEpiNestedInput
    entries?: EpiEntryUpdateManyWithoutEpiNestedInput
  }

  export type EpiUncheckedUpdateWithoutExitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUncheckedUpdateManyWithoutEpiNestedInput
    entries?: EpiEntryUncheckedUpdateManyWithoutEpiNestedInput
  }

  export type EmployeeUpsertWithoutExitsInput = {
    update: XOR<EmployeeUpdateWithoutExitsInput, EmployeeUncheckedUpdateWithoutExitsInput>
    create: XOR<EmployeeCreateWithoutExitsInput, EmployeeUncheckedCreateWithoutExitsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutExitsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutExitsInput, EmployeeUncheckedUpdateWithoutExitsInput>
  }

  export type EmployeeUpdateWithoutExitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUpdateManyWithoutEmployeeNestedInput
    medicalExams?: MedicalExamUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutExitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    medicalExams?: MedicalExamUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutMedicalExamsInput = {
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeCreateNestedManyWithoutEmployeeInput
    exits?: EpiExitCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutMedicalExamsInput = {
    id?: number
    name: string
    adress: string
    city: string
    email: string
    phone: string
    birthDate: Date | string
    admission: Date | string
    cpf: string
    rg: string
    employer: $Enums.Employer
    department: $Enums.Department
    function: $Enums.Function
    status: $Enums.Status
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    exits?: EpiExitUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutMedicalExamsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutMedicalExamsInput, EmployeeUncheckedCreateWithoutMedicalExamsInput>
  }

  export type EmployeeUpsertWithoutMedicalExamsInput = {
    update: XOR<EmployeeUpdateWithoutMedicalExamsInput, EmployeeUncheckedUpdateWithoutMedicalExamsInput>
    create: XOR<EmployeeCreateWithoutMedicalExamsInput, EmployeeUncheckedCreateWithoutMedicalExamsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutMedicalExamsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutMedicalExamsInput, EmployeeUncheckedUpdateWithoutMedicalExamsInput>
  }

  export type EmployeeUpdateWithoutMedicalExamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUpdateManyWithoutEmployeeNestedInput
    exits?: EpiExitUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutMedicalExamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    employer?: EnumEmployerFieldUpdateOperationsInput | $Enums.Employer
    department?: EnumDepartmentFieldUpdateOperationsInput | $Enums.Department
    function?: EnumFunctionFieldUpdateOperationsInput | $Enums.Function
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    exits?: EpiExitUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EpiEmployeeCreateManyEmployeeInput = {
    id?: number
    epiId: number
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
  }

  export type EpiExitCreateManyEmployeeInput = {
    id?: number
    epiId: number
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type MedicalExamCreateManyEmployeeInput = {
    id?: number
    date: Date | string
    type: string
    result?: string | null
    expiration: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEmployeeUpdateWithoutEmployeeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    epi?: EpiUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EpiEmployeeUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpiEmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpiExitUpdateWithoutEmployeeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epi?: EpiUpdateOneRequiredWithoutExitsNestedInput
  }

  export type EpiExitUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiExitUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalExamUpdateWithoutEmployeeInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalExamUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalExamUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    result?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeCreateManyEpiInput = {
    id?: number
    employeeId: number
    quantity: number
    deliveryDate?: Date | string
    userId?: string | null
  }

  export type EpiEntryCreateManyEpiInput = {
    id?: number
    quantity: number
    date?: Date | string
    note?: string | null
    supplier?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiExitCreateManyEpiInput = {
    id?: number
    employeeId: number
    quantity: number
    userId?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type EpiEmployeeUpdateWithoutEpiInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutEpiesNestedInput
  }

  export type EpiEmployeeUncheckedUpdateWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpiEmployeeUncheckedUpdateManyWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpiEntryUpdateWithoutEpiInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEntryUncheckedUpdateWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEntryUncheckedUpdateManyWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiExitUpdateWithoutEpiInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutExitsNestedInput
  }

  export type EpiExitUncheckedUpdateWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiExitUncheckedUpdateManyWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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