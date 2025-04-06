
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
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model ExamEmployee
 * 
 */
export type ExamEmployee = $Result.DefaultSelection<Prisma.$ExamEmployeePayload>

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
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examEmployee`: Exposes CRUD operations for the **ExamEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamEmployees
    * const examEmployees = await prisma.examEmployee.findMany()
    * ```
    */
  get examEmployee(): Prisma.ExamEmployeeDelegate<ExtArgs, ClientOptions>;
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
    Exam: 'Exam',
    ExamEmployee: 'ExamEmployee'
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
      modelProps: "employee" | "epi" | "epiEmployee" | "exam" | "examEmployee"
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
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      ExamEmployee: {
        payload: Prisma.$ExamEmployeePayload<ExtArgs>
        fields: Prisma.ExamEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>
          }
          findFirst: {
            args: Prisma.ExamEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>
          }
          findMany: {
            args: Prisma.ExamEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>[]
          }
          create: {
            args: Prisma.ExamEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>
          }
          createMany: {
            args: Prisma.ExamEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamEmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>[]
          }
          delete: {
            args: Prisma.ExamEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>
          }
          update: {
            args: Prisma.ExamEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>
          }
          deleteMany: {
            args: Prisma.ExamEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamEmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>[]
          }
          upsert: {
            args: Prisma.ExamEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamEmployeePayload>
          }
          aggregate: {
            args: Prisma.ExamEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamEmployee>
          }
          groupBy: {
            args: Prisma.ExamEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<ExamEmployeeCountAggregateOutputType> | number
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
    exam?: ExamOmit
    examEmployee?: ExamEmployeeOmit
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
    exams: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epies?: boolean | EmployeeCountOutputTypeCountEpiesArgs
    exams?: boolean | EmployeeCountOutputTypeCountExamsArgs
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
  export type EmployeeCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamEmployeeWhereInput
  }


  /**
   * Count Type EpiCountOutputType
   */

  export type EpiCountOutputType = {
    employees: number
  }

  export type EpiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | EpiCountOutputTypeCountEmployeesArgs
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
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    employees: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | ExamCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamEmployeeWhereInput
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
    createdAt?: boolean
    updatedAt?: boolean
    epies?: boolean | Employee$epiesArgs<ExtArgs>
    exams?: boolean | Employee$examsArgs<ExtArgs>
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "adress" | "city" | "email" | "phone" | "birthDate" | "admission" | "cpf" | "rg" | "employer" | "department" | "function" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    epies?: boolean | Employee$epiesArgs<ExtArgs>
    exams?: boolean | Employee$examsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      epies: Prisma.$EpiEmployeePayload<ExtArgs>[]
      exams: Prisma.$ExamEmployeePayload<ExtArgs>[]
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
    exams<T extends Employee$examsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Employee.exams
   */
  export type Employee$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    where?: ExamEmployeeWhereInput
    orderBy?: ExamEmployeeOrderByWithRelationInput | ExamEmployeeOrderByWithRelationInput[]
    cursor?: ExamEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamEmployeeScalarFieldEnum | ExamEmployeeScalarFieldEnum[]
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
    type: string | null
    brand: string | null
    model: string | null
    size: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    brand: string | null
    model: string | null
    size: string | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    brand: number
    model: number
    size: number
    quantity: number
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
    type?: true
    brand?: true
    model?: true
    size?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    brand?: true
    model?: true
    size?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    brand?: true
    model?: true
    size?: true
    quantity?: true
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
    type: string
    brand: string
    model: string
    size: string
    quantity: number
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
    type?: boolean
    brand?: boolean
    model?: boolean
    size?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Epi$employeesArgs<ExtArgs>
    _count?: boolean | EpiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    brand?: boolean
    model?: boolean
    size?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    brand?: boolean
    model?: boolean
    size?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["epi"]>

  export type EpiSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    brand?: boolean
    model?: boolean
    size?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "brand" | "model" | "size" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["epi"]>
  export type EpiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Epi$employeesArgs<ExtArgs>
    _count?: boolean | EpiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EpiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EpiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Epi"
    objects: {
      employees: Prisma.$EpiEmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      type: string
      brand: string
      model: string
      size: string
      quantity: number
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
    readonly type: FieldRef<"Epi", 'String'>
    readonly brand: FieldRef<"Epi", 'String'>
    readonly model: FieldRef<"Epi", 'String'>
    readonly size: FieldRef<"Epi", 'String'>
    readonly quantity: FieldRef<"Epi", 'Int'>
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
    employeeId: number | null
    epiId: number | null
  }

  export type EpiEmployeeSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    epiId: number | null
  }

  export type EpiEmployeeMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    epiId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiEmployeeMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    epiId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpiEmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    epiId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpiEmployeeAvgAggregateInputType = {
    id?: true
    employeeId?: true
    epiId?: true
  }

  export type EpiEmployeeSumAggregateInputType = {
    id?: true
    employeeId?: true
    epiId?: true
  }

  export type EpiEmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    epiId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiEmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    epiId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpiEmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    epiId?: true
    createdAt?: true
    updatedAt?: true
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
    employeeId: number
    epiId: number
    createdAt: Date
    updatedAt: Date
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
    employeeId?: boolean
    epiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEmployee"]>

  export type EpiEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    epiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEmployee"]>

  export type EpiEmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    epiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["epiEmployee"]>

  export type EpiEmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    epiId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpiEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "epiId" | "createdAt" | "updatedAt", ExtArgs["result"]["epiEmployee"]>
  export type EpiEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }
  export type EpiEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }
  export type EpiEmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    epi?: boolean | EpiDefaultArgs<ExtArgs>
  }

  export type $EpiEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EpiEmployee"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      epi: Prisma.$EpiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      epiId: number
      createdAt: Date
      updatedAt: Date
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
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EpiEmployee model
   */ 
  interface EpiEmployeeFieldRefs {
    readonly id: FieldRef<"EpiEmployee", 'Int'>
    readonly employeeId: FieldRef<"EpiEmployee", 'Int'>
    readonly epiId: FieldRef<"EpiEmployee", 'Int'>
    readonly createdAt: FieldRef<"EpiEmployee", 'DateTime'>
    readonly updatedAt: FieldRef<"EpiEmployee", 'DateTime'>
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
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    id: number | null
  }

  export type ExamSumAggregateOutputType = {
    id: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    id?: true
  }

  export type ExamSumAggregateInputType = {
    id?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: number
    name: string
    description: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Exam$employeesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Exam$employeesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      employees: Prisma.$ExamEmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams and returns the data updated in the database.
     * @param {ExamUpdateManyAndReturnArgs} args - Arguments to update many Exams.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Exam$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Exam$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exam model
   */ 
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'Int'>
    readonly name: FieldRef<"Exam", 'String'>
    readonly description: FieldRef<"Exam", 'String'>
    readonly type: FieldRef<"Exam", 'String'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
    readonly updatedAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam updateManyAndReturn
   */
  export type ExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.employees
   */
  export type Exam$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    where?: ExamEmployeeWhereInput
    orderBy?: ExamEmployeeOrderByWithRelationInput | ExamEmployeeOrderByWithRelationInput[]
    cursor?: ExamEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamEmployeeScalarFieldEnum | ExamEmployeeScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model ExamEmployee
   */

  export type AggregateExamEmployee = {
    _count: ExamEmployeeCountAggregateOutputType | null
    _avg: ExamEmployeeAvgAggregateOutputType | null
    _sum: ExamEmployeeSumAggregateOutputType | null
    _min: ExamEmployeeMinAggregateOutputType | null
    _max: ExamEmployeeMaxAggregateOutputType | null
  }

  export type ExamEmployeeAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    examId: number | null
  }

  export type ExamEmployeeSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    examId: number | null
  }

  export type ExamEmployeeMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    examId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamEmployeeMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    examId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamEmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    examId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamEmployeeAvgAggregateInputType = {
    id?: true
    employeeId?: true
    examId?: true
  }

  export type ExamEmployeeSumAggregateInputType = {
    id?: true
    employeeId?: true
    examId?: true
  }

  export type ExamEmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamEmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamEmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamEmployee to aggregate.
     */
    where?: ExamEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEmployees to fetch.
     */
    orderBy?: ExamEmployeeOrderByWithRelationInput | ExamEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamEmployees
    **/
    _count?: true | ExamEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamEmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamEmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamEmployeeMaxAggregateInputType
  }

  export type GetExamEmployeeAggregateType<T extends ExamEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateExamEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamEmployee[P]>
      : GetScalarType<T[P], AggregateExamEmployee[P]>
  }




  export type ExamEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamEmployeeWhereInput
    orderBy?: ExamEmployeeOrderByWithAggregationInput | ExamEmployeeOrderByWithAggregationInput[]
    by: ExamEmployeeScalarFieldEnum[] | ExamEmployeeScalarFieldEnum
    having?: ExamEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamEmployeeCountAggregateInputType | true
    _avg?: ExamEmployeeAvgAggregateInputType
    _sum?: ExamEmployeeSumAggregateInputType
    _min?: ExamEmployeeMinAggregateInputType
    _max?: ExamEmployeeMaxAggregateInputType
  }

  export type ExamEmployeeGroupByOutputType = {
    id: number
    employeeId: number
    examId: number
    createdAt: Date
    updatedAt: Date
    _count: ExamEmployeeCountAggregateOutputType | null
    _avg: ExamEmployeeAvgAggregateOutputType | null
    _sum: ExamEmployeeSumAggregateOutputType | null
    _min: ExamEmployeeMinAggregateOutputType | null
    _max: ExamEmployeeMaxAggregateOutputType | null
  }

  type GetExamEmployeeGroupByPayload<T extends ExamEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], ExamEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type ExamEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examEmployee"]>

  export type ExamEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examEmployee"]>

  export type ExamEmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examEmployee"]>

  export type ExamEmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExamEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "examId" | "createdAt" | "updatedAt", ExtArgs["result"]["examEmployee"]>
  export type ExamEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type ExamEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type ExamEmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $ExamEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamEmployee"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      examId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["examEmployee"]>
    composites: {}
  }

  type ExamEmployeeGetPayload<S extends boolean | null | undefined | ExamEmployeeDefaultArgs> = $Result.GetResult<Prisma.$ExamEmployeePayload, S>

  type ExamEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamEmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamEmployeeCountAggregateInputType | true
    }

  export interface ExamEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamEmployee'], meta: { name: 'ExamEmployee' } }
    /**
     * Find zero or one ExamEmployee that matches the filter.
     * @param {ExamEmployeeFindUniqueArgs} args - Arguments to find a ExamEmployee
     * @example
     * // Get one ExamEmployee
     * const examEmployee = await prisma.examEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamEmployeeFindUniqueArgs>(args: SelectSubset<T, ExamEmployeeFindUniqueArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamEmployee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamEmployeeFindUniqueOrThrowArgs} args - Arguments to find a ExamEmployee
     * @example
     * // Get one ExamEmployee
     * const examEmployee = await prisma.examEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEmployeeFindFirstArgs} args - Arguments to find a ExamEmployee
     * @example
     * // Get one ExamEmployee
     * const examEmployee = await prisma.examEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamEmployeeFindFirstArgs>(args?: SelectSubset<T, ExamEmployeeFindFirstArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEmployeeFindFirstOrThrowArgs} args - Arguments to find a ExamEmployee
     * @example
     * // Get one ExamEmployee
     * const examEmployee = await prisma.examEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamEmployees
     * const examEmployees = await prisma.examEmployee.findMany()
     * 
     * // Get first 10 ExamEmployees
     * const examEmployees = await prisma.examEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examEmployeeWithIdOnly = await prisma.examEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamEmployeeFindManyArgs>(args?: SelectSubset<T, ExamEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamEmployee.
     * @param {ExamEmployeeCreateArgs} args - Arguments to create a ExamEmployee.
     * @example
     * // Create one ExamEmployee
     * const ExamEmployee = await prisma.examEmployee.create({
     *   data: {
     *     // ... data to create a ExamEmployee
     *   }
     * })
     * 
     */
    create<T extends ExamEmployeeCreateArgs>(args: SelectSubset<T, ExamEmployeeCreateArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamEmployees.
     * @param {ExamEmployeeCreateManyArgs} args - Arguments to create many ExamEmployees.
     * @example
     * // Create many ExamEmployees
     * const examEmployee = await prisma.examEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamEmployeeCreateManyArgs>(args?: SelectSubset<T, ExamEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamEmployees and returns the data saved in the database.
     * @param {ExamEmployeeCreateManyAndReturnArgs} args - Arguments to create many ExamEmployees.
     * @example
     * // Create many ExamEmployees
     * const examEmployee = await prisma.examEmployee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamEmployees and only return the `id`
     * const examEmployeeWithIdOnly = await prisma.examEmployee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamEmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamEmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamEmployee.
     * @param {ExamEmployeeDeleteArgs} args - Arguments to delete one ExamEmployee.
     * @example
     * // Delete one ExamEmployee
     * const ExamEmployee = await prisma.examEmployee.delete({
     *   where: {
     *     // ... filter to delete one ExamEmployee
     *   }
     * })
     * 
     */
    delete<T extends ExamEmployeeDeleteArgs>(args: SelectSubset<T, ExamEmployeeDeleteArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamEmployee.
     * @param {ExamEmployeeUpdateArgs} args - Arguments to update one ExamEmployee.
     * @example
     * // Update one ExamEmployee
     * const examEmployee = await prisma.examEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamEmployeeUpdateArgs>(args: SelectSubset<T, ExamEmployeeUpdateArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamEmployees.
     * @param {ExamEmployeeDeleteManyArgs} args - Arguments to filter ExamEmployees to delete.
     * @example
     * // Delete a few ExamEmployees
     * const { count } = await prisma.examEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamEmployeeDeleteManyArgs>(args?: SelectSubset<T, ExamEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamEmployees
     * const examEmployee = await prisma.examEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamEmployeeUpdateManyArgs>(args: SelectSubset<T, ExamEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamEmployees and returns the data updated in the database.
     * @param {ExamEmployeeUpdateManyAndReturnArgs} args - Arguments to update many ExamEmployees.
     * @example
     * // Update many ExamEmployees
     * const examEmployee = await prisma.examEmployee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamEmployees and only return the `id`
     * const examEmployeeWithIdOnly = await prisma.examEmployee.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamEmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamEmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamEmployee.
     * @param {ExamEmployeeUpsertArgs} args - Arguments to update or create a ExamEmployee.
     * @example
     * // Update or create a ExamEmployee
     * const examEmployee = await prisma.examEmployee.upsert({
     *   create: {
     *     // ... data to create a ExamEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamEmployee we want to update
     *   }
     * })
     */
    upsert<T extends ExamEmployeeUpsertArgs>(args: SelectSubset<T, ExamEmployeeUpsertArgs<ExtArgs>>): Prisma__ExamEmployeeClient<$Result.GetResult<Prisma.$ExamEmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEmployeeCountArgs} args - Arguments to filter ExamEmployees to count.
     * @example
     * // Count the number of ExamEmployees
     * const count = await prisma.examEmployee.count({
     *   where: {
     *     // ... the filter for the ExamEmployees we want to count
     *   }
     * })
    **/
    count<T extends ExamEmployeeCountArgs>(
      args?: Subset<T, ExamEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamEmployeeAggregateArgs>(args: Subset<T, ExamEmployeeAggregateArgs>): Prisma.PrismaPromise<GetExamEmployeeAggregateType<T>>

    /**
     * Group by ExamEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamEmployeeGroupByArgs} args - Group by arguments.
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
      T extends ExamEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: ExamEmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamEmployee model
   */
  readonly fields: ExamEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExamEmployee model
   */ 
  interface ExamEmployeeFieldRefs {
    readonly id: FieldRef<"ExamEmployee", 'Int'>
    readonly employeeId: FieldRef<"ExamEmployee", 'Int'>
    readonly examId: FieldRef<"ExamEmployee", 'Int'>
    readonly createdAt: FieldRef<"ExamEmployee", 'DateTime'>
    readonly updatedAt: FieldRef<"ExamEmployee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamEmployee findUnique
   */
  export type ExamEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which ExamEmployee to fetch.
     */
    where: ExamEmployeeWhereUniqueInput
  }

  /**
   * ExamEmployee findUniqueOrThrow
   */
  export type ExamEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which ExamEmployee to fetch.
     */
    where: ExamEmployeeWhereUniqueInput
  }

  /**
   * ExamEmployee findFirst
   */
  export type ExamEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which ExamEmployee to fetch.
     */
    where?: ExamEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEmployees to fetch.
     */
    orderBy?: ExamEmployeeOrderByWithRelationInput | ExamEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamEmployees.
     */
    cursor?: ExamEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamEmployees.
     */
    distinct?: ExamEmployeeScalarFieldEnum | ExamEmployeeScalarFieldEnum[]
  }

  /**
   * ExamEmployee findFirstOrThrow
   */
  export type ExamEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which ExamEmployee to fetch.
     */
    where?: ExamEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEmployees to fetch.
     */
    orderBy?: ExamEmployeeOrderByWithRelationInput | ExamEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamEmployees.
     */
    cursor?: ExamEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamEmployees.
     */
    distinct?: ExamEmployeeScalarFieldEnum | ExamEmployeeScalarFieldEnum[]
  }

  /**
   * ExamEmployee findMany
   */
  export type ExamEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which ExamEmployees to fetch.
     */
    where?: ExamEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamEmployees to fetch.
     */
    orderBy?: ExamEmployeeOrderByWithRelationInput | ExamEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamEmployees.
     */
    cursor?: ExamEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamEmployees.
     */
    skip?: number
    distinct?: ExamEmployeeScalarFieldEnum | ExamEmployeeScalarFieldEnum[]
  }

  /**
   * ExamEmployee create
   */
  export type ExamEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamEmployee.
     */
    data: XOR<ExamEmployeeCreateInput, ExamEmployeeUncheckedCreateInput>
  }

  /**
   * ExamEmployee createMany
   */
  export type ExamEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamEmployees.
     */
    data: ExamEmployeeCreateManyInput | ExamEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamEmployee createManyAndReturn
   */
  export type ExamEmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many ExamEmployees.
     */
    data: ExamEmployeeCreateManyInput | ExamEmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamEmployee update
   */
  export type ExamEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamEmployee.
     */
    data: XOR<ExamEmployeeUpdateInput, ExamEmployeeUncheckedUpdateInput>
    /**
     * Choose, which ExamEmployee to update.
     */
    where: ExamEmployeeWhereUniqueInput
  }

  /**
   * ExamEmployee updateMany
   */
  export type ExamEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamEmployees.
     */
    data: XOR<ExamEmployeeUpdateManyMutationInput, ExamEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which ExamEmployees to update
     */
    where?: ExamEmployeeWhereInput
    /**
     * Limit how many ExamEmployees to update.
     */
    limit?: number
  }

  /**
   * ExamEmployee updateManyAndReturn
   */
  export type ExamEmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * The data used to update ExamEmployees.
     */
    data: XOR<ExamEmployeeUpdateManyMutationInput, ExamEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which ExamEmployees to update
     */
    where?: ExamEmployeeWhereInput
    /**
     * Limit how many ExamEmployees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamEmployee upsert
   */
  export type ExamEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamEmployee to update in case it exists.
     */
    where: ExamEmployeeWhereUniqueInput
    /**
     * In case the ExamEmployee found by the `where` argument doesn't exist, create a new ExamEmployee with this data.
     */
    create: XOR<ExamEmployeeCreateInput, ExamEmployeeUncheckedCreateInput>
    /**
     * In case the ExamEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamEmployeeUpdateInput, ExamEmployeeUncheckedUpdateInput>
  }

  /**
   * ExamEmployee delete
   */
  export type ExamEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
    /**
     * Filter which ExamEmployee to delete.
     */
    where: ExamEmployeeWhereUniqueInput
  }

  /**
   * ExamEmployee deleteMany
   */
  export type ExamEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamEmployees to delete
     */
    where?: ExamEmployeeWhereInput
    /**
     * Limit how many ExamEmployees to delete.
     */
    limit?: number
  }

  /**
   * ExamEmployee without action
   */
  export type ExamEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamEmployee
     */
    select?: ExamEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamEmployee
     */
    omit?: ExamEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamEmployeeInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EpiScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    brand: 'brand',
    model: 'model',
    size: 'size',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpiScalarFieldEnum = (typeof EpiScalarFieldEnum)[keyof typeof EpiScalarFieldEnum]


  export const EpiEmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    epiId: 'epiId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpiEmployeeScalarFieldEnum = (typeof EpiEmployeeScalarFieldEnum)[keyof typeof EpiEmployeeScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const ExamEmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    examId: 'examId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamEmployeeScalarFieldEnum = (typeof ExamEmployeeScalarFieldEnum)[keyof typeof ExamEmployeeScalarFieldEnum]


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
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    epies?: EpiEmployeeListRelationFilter
    exams?: ExamEmployeeListRelationFilter
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    epies?: EpiEmployeeOrderByRelationAggregateInput
    exams?: ExamEmployeeOrderByRelationAggregateInput
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
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    epies?: EpiEmployeeListRelationFilter
    exams?: ExamEmployeeListRelationFilter
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
    type?: StringFilter<"Epi"> | string
    brand?: StringFilter<"Epi"> | string
    model?: StringFilter<"Epi"> | string
    size?: StringFilter<"Epi"> | string
    quantity?: IntFilter<"Epi"> | number
    createdAt?: DateTimeFilter<"Epi"> | Date | string
    updatedAt?: DateTimeFilter<"Epi"> | Date | string
    employees?: EpiEmployeeListRelationFilter
  }

  export type EpiOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EpiEmployeeOrderByRelationAggregateInput
  }

  export type EpiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpiWhereInput | EpiWhereInput[]
    OR?: EpiWhereInput[]
    NOT?: EpiWhereInput | EpiWhereInput[]
    name?: StringFilter<"Epi"> | string
    description?: StringFilter<"Epi"> | string
    type?: StringFilter<"Epi"> | string
    brand?: StringFilter<"Epi"> | string
    model?: StringFilter<"Epi"> | string
    size?: StringFilter<"Epi"> | string
    quantity?: IntFilter<"Epi"> | number
    createdAt?: DateTimeFilter<"Epi"> | Date | string
    updatedAt?: DateTimeFilter<"Epi"> | Date | string
    employees?: EpiEmployeeListRelationFilter
  }, "id">

  export type EpiOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
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
    type?: StringWithAggregatesFilter<"Epi"> | string
    brand?: StringWithAggregatesFilter<"Epi"> | string
    model?: StringWithAggregatesFilter<"Epi"> | string
    size?: StringWithAggregatesFilter<"Epi"> | string
    quantity?: IntWithAggregatesFilter<"Epi"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Epi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Epi"> | Date | string
  }

  export type EpiEmployeeWhereInput = {
    AND?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    OR?: EpiEmployeeWhereInput[]
    NOT?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    id?: IntFilter<"EpiEmployee"> | number
    employeeId?: IntFilter<"EpiEmployee"> | number
    epiId?: IntFilter<"EpiEmployee"> | number
    createdAt?: DateTimeFilter<"EpiEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"EpiEmployee"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
  }

  export type EpiEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    epiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    epi?: EpiOrderByWithRelationInput
  }

  export type EpiEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    OR?: EpiEmployeeWhereInput[]
    NOT?: EpiEmployeeWhereInput | EpiEmployeeWhereInput[]
    employeeId?: IntFilter<"EpiEmployee"> | number
    epiId?: IntFilter<"EpiEmployee"> | number
    createdAt?: DateTimeFilter<"EpiEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"EpiEmployee"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    epi?: XOR<EpiScalarRelationFilter, EpiWhereInput>
  }, "id">

  export type EpiEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    epiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    employeeId?: IntWithAggregatesFilter<"EpiEmployee"> | number
    epiId?: IntWithAggregatesFilter<"EpiEmployee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EpiEmployee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EpiEmployee"> | Date | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: IntFilter<"Exam"> | number
    name?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    type?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    updatedAt?: DateTimeFilter<"Exam"> | Date | string
    employees?: ExamEmployeeListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: ExamEmployeeOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    name?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    type?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    updatedAt?: DateTimeFilter<"Exam"> | Date | string
    employees?: ExamEmployeeListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exam"> | number
    name?: StringWithAggregatesFilter<"Exam"> | string
    description?: StringWithAggregatesFilter<"Exam"> | string
    type?: StringWithAggregatesFilter<"Exam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type ExamEmployeeWhereInput = {
    AND?: ExamEmployeeWhereInput | ExamEmployeeWhereInput[]
    OR?: ExamEmployeeWhereInput[]
    NOT?: ExamEmployeeWhereInput | ExamEmployeeWhereInput[]
    id?: IntFilter<"ExamEmployee"> | number
    employeeId?: IntFilter<"ExamEmployee"> | number
    examId?: IntFilter<"ExamEmployee"> | number
    createdAt?: DateTimeFilter<"ExamEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"ExamEmployee"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }

  export type ExamEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
  }

  export type ExamEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamEmployeeWhereInput | ExamEmployeeWhereInput[]
    OR?: ExamEmployeeWhereInput[]
    NOT?: ExamEmployeeWhereInput | ExamEmployeeWhereInput[]
    employeeId?: IntFilter<"ExamEmployee"> | number
    examId?: IntFilter<"ExamEmployee"> | number
    createdAt?: DateTimeFilter<"ExamEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"ExamEmployee"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }, "id">

  export type ExamEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExamEmployeeCountOrderByAggregateInput
    _avg?: ExamEmployeeAvgOrderByAggregateInput
    _max?: ExamEmployeeMaxOrderByAggregateInput
    _min?: ExamEmployeeMinOrderByAggregateInput
    _sum?: ExamEmployeeSumOrderByAggregateInput
  }

  export type ExamEmployeeScalarWhereWithAggregatesInput = {
    AND?: ExamEmployeeScalarWhereWithAggregatesInput | ExamEmployeeScalarWhereWithAggregatesInput[]
    OR?: ExamEmployeeScalarWhereWithAggregatesInput[]
    NOT?: ExamEmployeeScalarWhereWithAggregatesInput | ExamEmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExamEmployee"> | number
    employeeId?: IntWithAggregatesFilter<"ExamEmployee"> | number
    examId?: IntWithAggregatesFilter<"ExamEmployee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ExamEmployee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExamEmployee"> | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeCreateNestedManyWithoutEmployeeInput
    exams?: ExamEmployeeCreateNestedManyWithoutEmployeeInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    exams?: ExamEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUpdateManyWithoutEmployeeNestedInput
    exams?: ExamEmployeeUpdateManyWithoutEmployeeNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    exams?: ExamEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiCreateInput = {
    name: string
    description: string
    type: string
    brand: string
    model: string
    size: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeCreateNestedManyWithoutEpiInput
  }

  export type EpiUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    type: string
    brand: string
    model: string
    size: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EpiEmployeeUncheckedCreateNestedManyWithoutEpiInput
  }

  export type EpiUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUpdateManyWithoutEpiNestedInput
  }

  export type EpiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EpiEmployeeUncheckedUpdateManyWithoutEpiNestedInput
  }

  export type EpiCreateManyInput = {
    id?: number
    name: string
    description: string
    type: string
    brand: string
    model: string
    size: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutEpiesInput
    epi: EpiCreateNestedOneWithoutEmployeesInput
  }

  export type EpiEmployeeUncheckedCreateInput = {
    id?: number
    employeeId: number
    epiId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEmployeeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutEpiesNestedInput
    epi?: EpiUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EpiEmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeCreateManyInput = {
    id?: number
    employeeId: number
    epiId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEmployeeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateInput = {
    name: string
    description: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: ExamEmployeeCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: ExamEmployeeUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: ExamEmployeeUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: ExamEmployeeUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: number
    name: string
    description: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutExamsInput
    exam: ExamCreateNestedOneWithoutEmployeesInput
  }

  export type ExamEmployeeUncheckedCreateInput = {
    id?: number
    employeeId: number
    examId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamEmployeeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutExamsNestedInput
    exam?: ExamUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type ExamEmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeCreateManyInput = {
    id?: number
    employeeId: number
    examId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamEmployeeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
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

  export type EpiEmployeeListRelationFilter = {
    every?: EpiEmployeeWhereInput
    some?: EpiEmployeeWhereInput
    none?: EpiEmployeeWhereInput
  }

  export type ExamEmployeeListRelationFilter = {
    every?: ExamEmployeeWhereInput
    some?: ExamEmployeeWhereInput
    none?: ExamEmployeeWhereInput
  }

  export type EpiEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamEmployeeOrderByRelationAggregateInput = {
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

  export type EpiCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
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
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type EpiScalarRelationFilter = {
    is?: EpiWhereInput
    isNot?: EpiWhereInput
  }

  export type EpiEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    epiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiEmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    epiId?: SortOrder
  }

  export type EpiEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    epiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    epiId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpiEmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    epiId?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type ExamEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamEmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    examId?: SortOrder
  }

  export type ExamEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamEmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    examId?: SortOrder
  }

  export type EpiEmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput> | EpiEmployeeCreateWithoutEmployeeInput[] | EpiEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEmployeeInput | EpiEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EpiEmployeeCreateManyEmployeeInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
  }

  export type ExamEmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ExamEmployeeCreateWithoutEmployeeInput, ExamEmployeeUncheckedCreateWithoutEmployeeInput> | ExamEmployeeCreateWithoutEmployeeInput[] | ExamEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutEmployeeInput | ExamEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: ExamEmployeeCreateManyEmployeeInputEnvelope
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
  }

  export type EpiEmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput> | EpiEmployeeCreateWithoutEmployeeInput[] | EpiEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEmployeeInput | EpiEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: EpiEmployeeCreateManyEmployeeInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
  }

  export type ExamEmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ExamEmployeeCreateWithoutEmployeeInput, ExamEmployeeUncheckedCreateWithoutEmployeeInput> | ExamEmployeeCreateWithoutEmployeeInput[] | ExamEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutEmployeeInput | ExamEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: ExamEmployeeCreateManyEmployeeInputEnvelope
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
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

  export type ExamEmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ExamEmployeeCreateWithoutEmployeeInput, ExamEmployeeUncheckedCreateWithoutEmployeeInput> | ExamEmployeeCreateWithoutEmployeeInput[] | ExamEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutEmployeeInput | ExamEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: ExamEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | ExamEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ExamEmployeeCreateManyEmployeeInputEnvelope
    set?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    disconnect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    delete?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    update?: ExamEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | ExamEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ExamEmployeeUpdateManyWithWhereWithoutEmployeeInput | ExamEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ExamEmployeeScalarWhereInput | ExamEmployeeScalarWhereInput[]
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

  export type ExamEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ExamEmployeeCreateWithoutEmployeeInput, ExamEmployeeUncheckedCreateWithoutEmployeeInput> | ExamEmployeeCreateWithoutEmployeeInput[] | ExamEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutEmployeeInput | ExamEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: ExamEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | ExamEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ExamEmployeeCreateManyEmployeeInputEnvelope
    set?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    disconnect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    delete?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    update?: ExamEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | ExamEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ExamEmployeeUpdateManyWithWhereWithoutEmployeeInput | ExamEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ExamEmployeeScalarWhereInput | ExamEmployeeScalarWhereInput[]
  }

  export type EpiEmployeeCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput> | EpiEmployeeCreateWithoutEpiInput[] | EpiEmployeeUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEpiInput | EpiEmployeeCreateOrConnectWithoutEpiInput[]
    createMany?: EpiEmployeeCreateManyEpiInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
  }

  export type EpiEmployeeUncheckedCreateNestedManyWithoutEpiInput = {
    create?: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput> | EpiEmployeeCreateWithoutEpiInput[] | EpiEmployeeUncheckedCreateWithoutEpiInput[]
    connectOrCreate?: EpiEmployeeCreateOrConnectWithoutEpiInput | EpiEmployeeCreateOrConnectWithoutEpiInput[]
    createMany?: EpiEmployeeCreateManyEpiInputEnvelope
    connect?: EpiEmployeeWhereUniqueInput | EpiEmployeeWhereUniqueInput[]
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

  export type EmployeeCreateNestedOneWithoutEpiesInput = {
    create?: XOR<EmployeeCreateWithoutEpiesInput, EmployeeUncheckedCreateWithoutEpiesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEpiesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EpiCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<EpiCreateWithoutEmployeesInput, EpiUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EpiCreateOrConnectWithoutEmployeesInput
    connect?: EpiWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutEpiesNestedInput = {
    create?: XOR<EmployeeCreateWithoutEpiesInput, EmployeeUncheckedCreateWithoutEpiesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEpiesInput
    upsert?: EmployeeUpsertWithoutEpiesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEpiesInput, EmployeeUpdateWithoutEpiesInput>, EmployeeUncheckedUpdateWithoutEpiesInput>
  }

  export type EpiUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<EpiCreateWithoutEmployeesInput, EpiUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EpiCreateOrConnectWithoutEmployeesInput
    upsert?: EpiUpsertWithoutEmployeesInput
    connect?: EpiWhereUniqueInput
    update?: XOR<XOR<EpiUpdateToOneWithWhereWithoutEmployeesInput, EpiUpdateWithoutEmployeesInput>, EpiUncheckedUpdateWithoutEmployeesInput>
  }

  export type ExamEmployeeCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamEmployeeCreateWithoutExamInput, ExamEmployeeUncheckedCreateWithoutExamInput> | ExamEmployeeCreateWithoutExamInput[] | ExamEmployeeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutExamInput | ExamEmployeeCreateOrConnectWithoutExamInput[]
    createMany?: ExamEmployeeCreateManyExamInputEnvelope
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
  }

  export type ExamEmployeeUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamEmployeeCreateWithoutExamInput, ExamEmployeeUncheckedCreateWithoutExamInput> | ExamEmployeeCreateWithoutExamInput[] | ExamEmployeeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutExamInput | ExamEmployeeCreateOrConnectWithoutExamInput[]
    createMany?: ExamEmployeeCreateManyExamInputEnvelope
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
  }

  export type ExamEmployeeUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamEmployeeCreateWithoutExamInput, ExamEmployeeUncheckedCreateWithoutExamInput> | ExamEmployeeCreateWithoutExamInput[] | ExamEmployeeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutExamInput | ExamEmployeeCreateOrConnectWithoutExamInput[]
    upsert?: ExamEmployeeUpsertWithWhereUniqueWithoutExamInput | ExamEmployeeUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamEmployeeCreateManyExamInputEnvelope
    set?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    disconnect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    delete?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    update?: ExamEmployeeUpdateWithWhereUniqueWithoutExamInput | ExamEmployeeUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamEmployeeUpdateManyWithWhereWithoutExamInput | ExamEmployeeUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamEmployeeScalarWhereInput | ExamEmployeeScalarWhereInput[]
  }

  export type ExamEmployeeUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamEmployeeCreateWithoutExamInput, ExamEmployeeUncheckedCreateWithoutExamInput> | ExamEmployeeCreateWithoutExamInput[] | ExamEmployeeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamEmployeeCreateOrConnectWithoutExamInput | ExamEmployeeCreateOrConnectWithoutExamInput[]
    upsert?: ExamEmployeeUpsertWithWhereUniqueWithoutExamInput | ExamEmployeeUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamEmployeeCreateManyExamInputEnvelope
    set?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    disconnect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    delete?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    connect?: ExamEmployeeWhereUniqueInput | ExamEmployeeWhereUniqueInput[]
    update?: ExamEmployeeUpdateWithWhereUniqueWithoutExamInput | ExamEmployeeUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamEmployeeUpdateManyWithWhereWithoutExamInput | ExamEmployeeUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamEmployeeScalarWhereInput | ExamEmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutExamsInput = {
    create?: XOR<EmployeeCreateWithoutExamsInput, EmployeeUncheckedCreateWithoutExamsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutExamsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<ExamCreateWithoutEmployeesInput, ExamUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ExamCreateOrConnectWithoutEmployeesInput
    connect?: ExamWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<EmployeeCreateWithoutExamsInput, EmployeeUncheckedCreateWithoutExamsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutExamsInput
    upsert?: EmployeeUpsertWithoutExamsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutExamsInput, EmployeeUpdateWithoutExamsInput>, EmployeeUncheckedUpdateWithoutExamsInput>
  }

  export type ExamUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<ExamCreateWithoutEmployeesInput, ExamUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: ExamCreateOrConnectWithoutEmployeesInput
    upsert?: ExamUpsertWithoutEmployeesInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutEmployeesInput, ExamUpdateWithoutEmployeesInput>, ExamUncheckedUpdateWithoutEmployeesInput>
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

  export type EpiEmployeeCreateWithoutEmployeeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    epi: EpiCreateNestedOneWithoutEmployeesInput
  }

  export type EpiEmployeeUncheckedCreateWithoutEmployeeInput = {
    id?: number
    epiId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEmployeeCreateOrConnectWithoutEmployeeInput = {
    where: EpiEmployeeWhereUniqueInput
    create: XOR<EpiEmployeeCreateWithoutEmployeeInput, EpiEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type EpiEmployeeCreateManyEmployeeInputEnvelope = {
    data: EpiEmployeeCreateManyEmployeeInput | EpiEmployeeCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ExamEmployeeCreateWithoutEmployeeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    exam: ExamCreateNestedOneWithoutEmployeesInput
  }

  export type ExamEmployeeUncheckedCreateWithoutEmployeeInput = {
    id?: number
    examId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamEmployeeCreateOrConnectWithoutEmployeeInput = {
    where: ExamEmployeeWhereUniqueInput
    create: XOR<ExamEmployeeCreateWithoutEmployeeInput, ExamEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type ExamEmployeeCreateManyEmployeeInputEnvelope = {
    data: ExamEmployeeCreateManyEmployeeInput | ExamEmployeeCreateManyEmployeeInput[]
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
    employeeId?: IntFilter<"EpiEmployee"> | number
    epiId?: IntFilter<"EpiEmployee"> | number
    createdAt?: DateTimeFilter<"EpiEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"EpiEmployee"> | Date | string
  }

  export type ExamEmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ExamEmployeeWhereUniqueInput
    update: XOR<ExamEmployeeUpdateWithoutEmployeeInput, ExamEmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ExamEmployeeCreateWithoutEmployeeInput, ExamEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type ExamEmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ExamEmployeeWhereUniqueInput
    data: XOR<ExamEmployeeUpdateWithoutEmployeeInput, ExamEmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type ExamEmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: ExamEmployeeScalarWhereInput
    data: XOR<ExamEmployeeUpdateManyMutationInput, ExamEmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ExamEmployeeScalarWhereInput = {
    AND?: ExamEmployeeScalarWhereInput | ExamEmployeeScalarWhereInput[]
    OR?: ExamEmployeeScalarWhereInput[]
    NOT?: ExamEmployeeScalarWhereInput | ExamEmployeeScalarWhereInput[]
    id?: IntFilter<"ExamEmployee"> | number
    employeeId?: IntFilter<"ExamEmployee"> | number
    examId?: IntFilter<"ExamEmployee"> | number
    createdAt?: DateTimeFilter<"ExamEmployee"> | Date | string
    updatedAt?: DateTimeFilter<"ExamEmployee"> | Date | string
  }

  export type EpiEmployeeCreateWithoutEpiInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutEpiesInput
  }

  export type EpiEmployeeUncheckedCreateWithoutEpiInput = {
    id?: number
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEmployeeCreateOrConnectWithoutEpiInput = {
    where: EpiEmployeeWhereUniqueInput
    create: XOR<EpiEmployeeCreateWithoutEpiInput, EpiEmployeeUncheckedCreateWithoutEpiInput>
  }

  export type EpiEmployeeCreateManyEpiInputEnvelope = {
    data: EpiEmployeeCreateManyEpiInput | EpiEmployeeCreateManyEpiInput[]
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
    createdAt?: Date | string
    updatedAt?: Date | string
    exams?: ExamEmployeeCreateNestedManyWithoutEmployeeInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    exams?: ExamEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutEpiesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEpiesInput, EmployeeUncheckedCreateWithoutEpiesInput>
  }

  export type EpiCreateWithoutEmployeesInput = {
    name: string
    description: string
    type: string
    brand: string
    model: string
    size: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    description: string
    type: string
    brand: string
    model: string
    size: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiCreateOrConnectWithoutEmployeesInput = {
    where: EpiWhereUniqueInput
    create: XOR<EpiCreateWithoutEmployeesInput, EpiUncheckedCreateWithoutEmployeesInput>
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exams?: ExamEmployeeUpdateManyWithoutEmployeeNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exams?: ExamEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
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
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeCreateWithoutExamInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutExamsInput
  }

  export type ExamEmployeeUncheckedCreateWithoutExamInput = {
    id?: number
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamEmployeeCreateOrConnectWithoutExamInput = {
    where: ExamEmployeeWhereUniqueInput
    create: XOR<ExamEmployeeCreateWithoutExamInput, ExamEmployeeUncheckedCreateWithoutExamInput>
  }

  export type ExamEmployeeCreateManyExamInputEnvelope = {
    data: ExamEmployeeCreateManyExamInput | ExamEmployeeCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExamEmployeeUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamEmployeeWhereUniqueInput
    update: XOR<ExamEmployeeUpdateWithoutExamInput, ExamEmployeeUncheckedUpdateWithoutExamInput>
    create: XOR<ExamEmployeeCreateWithoutExamInput, ExamEmployeeUncheckedCreateWithoutExamInput>
  }

  export type ExamEmployeeUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamEmployeeWhereUniqueInput
    data: XOR<ExamEmployeeUpdateWithoutExamInput, ExamEmployeeUncheckedUpdateWithoutExamInput>
  }

  export type ExamEmployeeUpdateManyWithWhereWithoutExamInput = {
    where: ExamEmployeeScalarWhereInput
    data: XOR<ExamEmployeeUpdateManyMutationInput, ExamEmployeeUncheckedUpdateManyWithoutExamInput>
  }

  export type EmployeeCreateWithoutExamsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutExamsInput = {
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
    createdAt?: Date | string
    updatedAt?: Date | string
    epies?: EpiEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutExamsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutExamsInput, EmployeeUncheckedCreateWithoutExamsInput>
  }

  export type ExamCreateWithoutEmployeesInput = {
    name: string
    description: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    description: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamCreateOrConnectWithoutEmployeesInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutEmployeesInput, ExamUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeUpsertWithoutExamsInput = {
    update: XOR<EmployeeUpdateWithoutExamsInput, EmployeeUncheckedUpdateWithoutExamsInput>
    create: XOR<EmployeeCreateWithoutExamsInput, EmployeeUncheckedCreateWithoutExamsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutExamsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutExamsInput, EmployeeUncheckedUpdateWithoutExamsInput>
  }

  export type EmployeeUpdateWithoutExamsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutExamsInput = {
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epies?: EpiEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ExamUpsertWithoutEmployeesInput = {
    update: XOR<ExamUpdateWithoutEmployeesInput, ExamUncheckedUpdateWithoutEmployeesInput>
    create: XOR<ExamCreateWithoutEmployeesInput, ExamUncheckedCreateWithoutEmployeesInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutEmployeesInput, ExamUncheckedUpdateWithoutEmployeesInput>
  }

  export type ExamUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeCreateManyEmployeeInput = {
    id?: number
    epiId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamEmployeeCreateManyEmployeeInput = {
    id?: number
    examId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEmployeeUpdateWithoutEmployeeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    epi?: EpiUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EpiEmployeeUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    epiId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeUpdateWithoutEmployeeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type ExamEmployeeUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeCreateManyEpiInput = {
    id?: number
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpiEmployeeUpdateWithoutEpiInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutEpiesNestedInput
  }

  export type EpiEmployeeUncheckedUpdateWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpiEmployeeUncheckedUpdateManyWithoutEpiInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeCreateManyExamInput = {
    id?: number
    employeeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamEmployeeUpdateWithoutExamInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutExamsNestedInput
  }

  export type ExamEmployeeUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamEmployeeUncheckedUpdateManyWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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