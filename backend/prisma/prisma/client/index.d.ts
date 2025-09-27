
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
 * Model entities
 * 
 */
export type entities = $Result.DefaultSelection<Prisma.$entitiesPayload>
/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model refresh_tokens
 * 
 */
export type refresh_tokens = $Result.DefaultSelection<Prisma.$refresh_tokensPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model spots
 * 
 */
export type spots = $Result.DefaultSelection<Prisma.$spotsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entities
 * const entities = await prisma.entities.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Entities
   * const entities = await prisma.entities.findMany()
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
   * `prisma.entities`: Exposes CRUD operations for the **entities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entities.findMany()
    * ```
    */
  get entities(): Prisma.entitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refresh_tokens`: Exposes CRUD operations for the **refresh_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refresh_tokens
    * const refresh_tokens = await prisma.refresh_tokens.findMany()
    * ```
    */
  get refresh_tokens(): Prisma.refresh_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spots`: Exposes CRUD operations for the **spots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spots
    * const spots = await prisma.spots.findMany()
    * ```
    */
  get spots(): Prisma.spotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    entities: 'entities',
    profiles: 'profiles',
    refresh_tokens: 'refresh_tokens',
    roles: 'roles',
    spots: 'spots',
    users: 'users'
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
      modelProps: "entities" | "profiles" | "refresh_tokens" | "roles" | "spots" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      entities: {
        payload: Prisma.$entitiesPayload<ExtArgs>
        fields: Prisma.entitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          findFirst: {
            args: Prisma.entitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          findMany: {
            args: Prisma.entitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>[]
          }
          create: {
            args: Prisma.entitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          createMany: {
            args: Prisma.entitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.entitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          update: {
            args: Prisma.entitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          deleteMany: {
            args: Prisma.entitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entitiesPayload>
          }
          aggregate: {
            args: Prisma.EntitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntities>
          }
          groupBy: {
            args: Prisma.entitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.entitiesCountArgs<ExtArgs>
            result: $Utils.Optional<EntitiesCountAggregateOutputType> | number
          }
        }
      }
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      refresh_tokens: {
        payload: Prisma.$refresh_tokensPayload<ExtArgs>
        fields: Prisma.refresh_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refresh_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refresh_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          findFirst: {
            args: Prisma.refresh_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refresh_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          findMany: {
            args: Prisma.refresh_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[]
          }
          create: {
            args: Prisma.refresh_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          createMany: {
            args: Prisma.refresh_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.refresh_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          update: {
            args: Prisma.refresh_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          deleteMany: {
            args: Prisma.refresh_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refresh_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refresh_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          aggregate: {
            args: Prisma.Refresh_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefresh_tokens>
          }
          groupBy: {
            args: Prisma.refresh_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.refresh_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokensCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      spots: {
        payload: Prisma.$spotsPayload<ExtArgs>
        fields: Prisma.spotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          findFirst: {
            args: Prisma.spotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          findMany: {
            args: Prisma.spotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>[]
          }
          create: {
            args: Prisma.spotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          createMany: {
            args: Prisma.spotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.spotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          update: {
            args: Prisma.spotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          deleteMany: {
            args: Prisma.spotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.spotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spotsPayload>
          }
          aggregate: {
            args: Prisma.SpotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpots>
          }
          groupBy: {
            args: Prisma.spotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.spotsCountArgs<ExtArgs>
            result: $Utils.Optional<SpotsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    entities?: entitiesOmit
    profiles?: profilesOmit
    refresh_tokens?: refresh_tokensOmit
    roles?: rolesOmit
    spots?: spotsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EntitiesCountOutputType
   */

  export type EntitiesCountOutputType = {
    spots: number
    users: number
  }

  export type EntitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | EntitiesCountOutputTypeCountSpotsArgs
    users?: boolean | EntitiesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * EntitiesCountOutputType without action
   */
  export type EntitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntitiesCountOutputType
     */
    select?: EntitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntitiesCountOutputType without action
   */
  export type EntitiesCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spotsWhereInput
  }

  /**
   * EntitiesCountOutputType without action
   */
  export type EntitiesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type ProfilesCountOutputType
   */

  export type ProfilesCountOutputType = {
    users: number
  }

  export type ProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ProfilesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type SpotsCountOutputType
   */

  export type SpotsCountOutputType = {
    users: number
  }

  export type SpotsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SpotsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SpotsCountOutputType without action
   */
  export type SpotsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotsCountOutputType
     */
    select?: SpotsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpotsCountOutputType without action
   */
  export type SpotsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    refresh_tokens: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refresh_tokens?: boolean | UsersCountOutputTypeCountRefresh_tokensArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRefresh_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokensWhereInput
  }


  /**
   * Models
   */

  /**
   * Model entities
   */

  export type AggregateEntities = {
    _count: EntitiesCountAggregateOutputType | null
    _avg: EntitiesAvgAggregateOutputType | null
    _sum: EntitiesSumAggregateOutputType | null
    _min: EntitiesMinAggregateOutputType | null
    _max: EntitiesMaxAggregateOutputType | null
  }

  export type EntitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type EntitiesSumAggregateOutputType = {
    id: number | null
  }

  export type EntitiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    identifier: string | null
    address: string | null
    meta: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntitiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    identifier: string | null
    address: string | null
    meta: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntitiesCountAggregateOutputType = {
    id: number
    name: number
    identifier: number
    address: number
    meta: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EntitiesAvgAggregateInputType = {
    id?: true
  }

  export type EntitiesSumAggregateInputType = {
    id?: true
  }

  export type EntitiesMinAggregateInputType = {
    id?: true
    name?: true
    identifier?: true
    address?: true
    meta?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type EntitiesMaxAggregateInputType = {
    id?: true
    name?: true
    identifier?: true
    address?: true
    meta?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type EntitiesCountAggregateInputType = {
    id?: true
    name?: true
    identifier?: true
    address?: true
    meta?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EntitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entities to aggregate.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entities
    **/
    _count?: true | EntitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntitiesMaxAggregateInputType
  }

  export type GetEntitiesAggregateType<T extends EntitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateEntities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntities[P]>
      : GetScalarType<T[P], AggregateEntities[P]>
  }




  export type entitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entitiesWhereInput
    orderBy?: entitiesOrderByWithAggregationInput | entitiesOrderByWithAggregationInput[]
    by: EntitiesScalarFieldEnum[] | EntitiesScalarFieldEnum
    having?: entitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntitiesCountAggregateInputType | true
    _avg?: EntitiesAvgAggregateInputType
    _sum?: EntitiesSumAggregateInputType
    _min?: EntitiesMinAggregateInputType
    _max?: EntitiesMaxAggregateInputType
  }

  export type EntitiesGroupByOutputType = {
    id: number
    name: string
    identifier: string
    address: string | null
    meta: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: EntitiesCountAggregateOutputType | null
    _avg: EntitiesAvgAggregateOutputType | null
    _sum: EntitiesSumAggregateOutputType | null
    _min: EntitiesMinAggregateOutputType | null
    _max: EntitiesMaxAggregateOutputType | null
  }

  type GetEntitiesGroupByPayload<T extends entitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntitiesGroupByOutputType[P]>
            : GetScalarType<T[P], EntitiesGroupByOutputType[P]>
        }
      >
    >


  export type entitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    identifier?: boolean
    address?: boolean
    meta?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    spots?: boolean | entities$spotsArgs<ExtArgs>
    users?: boolean | entities$usersArgs<ExtArgs>
    _count?: boolean | EntitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entities"]>



  export type entitiesSelectScalar = {
    id?: boolean
    name?: boolean
    identifier?: boolean
    address?: boolean
    meta?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type entitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "identifier" | "address" | "meta" | "active" | "created_at" | "updated_at", ExtArgs["result"]["entities"]>
  export type entitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | entities$spotsArgs<ExtArgs>
    users?: boolean | entities$usersArgs<ExtArgs>
    _count?: boolean | EntitiesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $entitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entities"
    objects: {
      spots: Prisma.$spotsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      identifier: string
      address: string | null
      meta: string | null
      active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["entities"]>
    composites: {}
  }

  type entitiesGetPayload<S extends boolean | null | undefined | entitiesDefaultArgs> = $Result.GetResult<Prisma.$entitiesPayload, S>

  type entitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntitiesCountAggregateInputType | true
    }

  export interface entitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entities'], meta: { name: 'entities' } }
    /**
     * Find zero or one Entities that matches the filter.
     * @param {entitiesFindUniqueArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entitiesFindUniqueArgs>(args: SelectSubset<T, entitiesFindUniqueArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entitiesFindUniqueOrThrowArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, entitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesFindFirstArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entitiesFindFirstArgs>(args?: SelectSubset<T, entitiesFindFirstArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesFindFirstOrThrowArgs} args - Arguments to find a Entities
     * @example
     * // Get one Entities
     * const entities = await prisma.entities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, entitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entities.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entitiesWithIdOnly = await prisma.entities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entitiesFindManyArgs>(args?: SelectSubset<T, entitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entities.
     * @param {entitiesCreateArgs} args - Arguments to create a Entities.
     * @example
     * // Create one Entities
     * const Entities = await prisma.entities.create({
     *   data: {
     *     // ... data to create a Entities
     *   }
     * })
     * 
     */
    create<T extends entitiesCreateArgs>(args: SelectSubset<T, entitiesCreateArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entities.
     * @param {entitiesCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entities = await prisma.entities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entitiesCreateManyArgs>(args?: SelectSubset<T, entitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entities.
     * @param {entitiesDeleteArgs} args - Arguments to delete one Entities.
     * @example
     * // Delete one Entities
     * const Entities = await prisma.entities.delete({
     *   where: {
     *     // ... filter to delete one Entities
     *   }
     * })
     * 
     */
    delete<T extends entitiesDeleteArgs>(args: SelectSubset<T, entitiesDeleteArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entities.
     * @param {entitiesUpdateArgs} args - Arguments to update one Entities.
     * @example
     * // Update one Entities
     * const entities = await prisma.entities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entitiesUpdateArgs>(args: SelectSubset<T, entitiesUpdateArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entities.
     * @param {entitiesDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entitiesDeleteManyArgs>(args?: SelectSubset<T, entitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entities = await prisma.entities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entitiesUpdateManyArgs>(args: SelectSubset<T, entitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entities.
     * @param {entitiesUpsertArgs} args - Arguments to update or create a Entities.
     * @example
     * // Update or create a Entities
     * const entities = await prisma.entities.upsert({
     *   create: {
     *     // ... data to create a Entities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entities we want to update
     *   }
     * })
     */
    upsert<T extends entitiesUpsertArgs>(args: SelectSubset<T, entitiesUpsertArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entities.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends entitiesCountArgs>(
      args?: Subset<T, entitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntitiesAggregateArgs>(args: Subset<T, EntitiesAggregateArgs>): Prisma.PrismaPromise<GetEntitiesAggregateType<T>>

    /**
     * Group by Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entitiesGroupByArgs} args - Group by arguments.
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
      T extends entitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entitiesGroupByArgs['orderBy'] }
        : { orderBy?: entitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, entitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entities model
   */
  readonly fields: entitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spots<T extends entities$spotsArgs<ExtArgs> = {}>(args?: Subset<T, entities$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends entities$usersArgs<ExtArgs> = {}>(args?: Subset<T, entities$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the entities model
   */
  interface entitiesFieldRefs {
    readonly id: FieldRef<"entities", 'Int'>
    readonly name: FieldRef<"entities", 'String'>
    readonly identifier: FieldRef<"entities", 'String'>
    readonly address: FieldRef<"entities", 'String'>
    readonly meta: FieldRef<"entities", 'String'>
    readonly active: FieldRef<"entities", 'Boolean'>
    readonly created_at: FieldRef<"entities", 'DateTime'>
    readonly updated_at: FieldRef<"entities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entities findUnique
   */
  export type entitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities findUniqueOrThrow
   */
  export type entitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities findFirst
   */
  export type entitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entities.
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entities.
     */
    distinct?: EntitiesScalarFieldEnum | EntitiesScalarFieldEnum[]
  }

  /**
   * entities findFirstOrThrow
   */
  export type entitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entities.
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entities.
     */
    distinct?: EntitiesScalarFieldEnum | EntitiesScalarFieldEnum[]
  }

  /**
   * entities findMany
   */
  export type entitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter, which entities to fetch.
     */
    where?: entitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entities to fetch.
     */
    orderBy?: entitiesOrderByWithRelationInput | entitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entities.
     */
    cursor?: entitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entities.
     */
    skip?: number
    distinct?: EntitiesScalarFieldEnum | EntitiesScalarFieldEnum[]
  }

  /**
   * entities create
   */
  export type entitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a entities.
     */
    data: XOR<entitiesCreateInput, entitiesUncheckedCreateInput>
  }

  /**
   * entities createMany
   */
  export type entitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entities.
     */
    data: entitiesCreateManyInput | entitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entities update
   */
  export type entitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a entities.
     */
    data: XOR<entitiesUpdateInput, entitiesUncheckedUpdateInput>
    /**
     * Choose, which entities to update.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities updateMany
   */
  export type entitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entities.
     */
    data: XOR<entitiesUpdateManyMutationInput, entitiesUncheckedUpdateManyInput>
    /**
     * Filter which entities to update
     */
    where?: entitiesWhereInput
    /**
     * Limit how many entities to update.
     */
    limit?: number
  }

  /**
   * entities upsert
   */
  export type entitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the entities to update in case it exists.
     */
    where: entitiesWhereUniqueInput
    /**
     * In case the entities found by the `where` argument doesn't exist, create a new entities with this data.
     */
    create: XOR<entitiesCreateInput, entitiesUncheckedCreateInput>
    /**
     * In case the entities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entitiesUpdateInput, entitiesUncheckedUpdateInput>
  }

  /**
   * entities delete
   */
  export type entitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
    /**
     * Filter which entities to delete.
     */
    where: entitiesWhereUniqueInput
  }

  /**
   * entities deleteMany
   */
  export type entitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entities to delete
     */
    where?: entitiesWhereInput
    /**
     * Limit how many entities to delete.
     */
    limit?: number
  }

  /**
   * entities.spots
   */
  export type entities$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    where?: spotsWhereInput
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    cursor?: spotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * entities.users
   */
  export type entities$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * entities without action
   */
  export type entitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entities
     */
    select?: entitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entities
     */
    omit?: entitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entitiesInclude<ExtArgs> | null
  }


  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    id: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    phone: number
    avatar_url: number
    bio: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    id?: true
  }

  export type ProfilesSumAggregateInputType = {
    id?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    phone?: true
    avatar_url?: true
    bio?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: number
    first_name: string | null
    last_name: string | null
    phone: string | null
    avatar_url: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | profiles$usersArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>



  export type profilesSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    avatar_url?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "phone" | "avatar_url" | "bio" | "created_at" | "updated_at", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | profiles$usersArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string | null
      last_name: string | null
      phone: string | null
      avatar_url: string | null
      bio: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
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
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends profiles$usersArgs<ExtArgs> = {}>(args?: Subset<T, profiles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'Int'>
    readonly first_name: FieldRef<"profiles", 'String'>
    readonly last_name: FieldRef<"profiles", 'String'>
    readonly phone: FieldRef<"profiles", 'String'>
    readonly avatar_url: FieldRef<"profiles", 'String'>
    readonly bio: FieldRef<"profiles", 'String'>
    readonly created_at: FieldRef<"profiles", 'DateTime'>
    readonly updated_at: FieldRef<"profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data?: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles.users
   */
  export type profiles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
  }


  /**
   * Model refresh_tokens
   */

  export type AggregateRefresh_tokens = {
    _count: Refresh_tokensCountAggregateOutputType | null
    _avg: Refresh_tokensAvgAggregateOutputType | null
    _sum: Refresh_tokensSumAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  export type Refresh_tokensAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Refresh_tokensSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Refresh_tokensMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    token: string | null
    revoked: boolean | null
    expires_at: Date | null
    created_at: Date | null
    replaced_by_token: string | null
    ip: string | null
    user_agent: string | null
  }

  export type Refresh_tokensMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    token: string | null
    revoked: boolean | null
    expires_at: Date | null
    created_at: Date | null
    replaced_by_token: string | null
    ip: string | null
    user_agent: string | null
  }

  export type Refresh_tokensCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    revoked: number
    expires_at: number
    created_at: number
    replaced_by_token: number
    ip: number
    user_agent: number
    _all: number
  }


  export type Refresh_tokensAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Refresh_tokensSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Refresh_tokensMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    revoked?: true
    expires_at?: true
    created_at?: true
    replaced_by_token?: true
    ip?: true
    user_agent?: true
  }

  export type Refresh_tokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    revoked?: true
    expires_at?: true
    created_at?: true
    replaced_by_token?: true
    ip?: true
    user_agent?: true
  }

  export type Refresh_tokensCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    revoked?: true
    expires_at?: true
    created_at?: true
    replaced_by_token?: true
    ip?: true
    user_agent?: true
    _all?: true
  }

  export type Refresh_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to aggregate.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refresh_tokens
    **/
    _count?: true | Refresh_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Refresh_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Refresh_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Refresh_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Refresh_tokensMaxAggregateInputType
  }

  export type GetRefresh_tokensAggregateType<T extends Refresh_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateRefresh_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefresh_tokens[P]>
      : GetScalarType<T[P], AggregateRefresh_tokens[P]>
  }




  export type refresh_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokensWhereInput
    orderBy?: refresh_tokensOrderByWithAggregationInput | refresh_tokensOrderByWithAggregationInput[]
    by: Refresh_tokensScalarFieldEnum[] | Refresh_tokensScalarFieldEnum
    having?: refresh_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Refresh_tokensCountAggregateInputType | true
    _avg?: Refresh_tokensAvgAggregateInputType
    _sum?: Refresh_tokensSumAggregateInputType
    _min?: Refresh_tokensMinAggregateInputType
    _max?: Refresh_tokensMaxAggregateInputType
  }

  export type Refresh_tokensGroupByOutputType = {
    id: number
    user_id: number
    token: string
    revoked: boolean | null
    expires_at: Date
    created_at: Date | null
    replaced_by_token: string | null
    ip: string | null
    user_agent: string | null
    _count: Refresh_tokensCountAggregateOutputType | null
    _avg: Refresh_tokensAvgAggregateOutputType | null
    _sum: Refresh_tokensSumAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  type GetRefresh_tokensGroupByPayload<T extends refresh_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Refresh_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Refresh_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
        }
      >
    >


  export type refresh_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    revoked?: boolean
    expires_at?: boolean
    created_at?: boolean
    replaced_by_token?: boolean
    ip?: boolean
    user_agent?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refresh_tokens"]>



  export type refresh_tokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    revoked?: boolean
    expires_at?: boolean
    created_at?: boolean
    replaced_by_token?: boolean
    ip?: boolean
    user_agent?: boolean
  }

  export type refresh_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "revoked" | "expires_at" | "created_at" | "replaced_by_token" | "ip" | "user_agent", ExtArgs["result"]["refresh_tokens"]>
  export type refresh_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $refresh_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refresh_tokens"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      token: string
      revoked: boolean | null
      expires_at: Date
      created_at: Date | null
      replaced_by_token: string | null
      ip: string | null
      user_agent: string | null
    }, ExtArgs["result"]["refresh_tokens"]>
    composites: {}
  }

  type refresh_tokensGetPayload<S extends boolean | null | undefined | refresh_tokensDefaultArgs> = $Result.GetResult<Prisma.$refresh_tokensPayload, S>

  type refresh_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refresh_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Refresh_tokensCountAggregateInputType | true
    }

  export interface refresh_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refresh_tokens'], meta: { name: 'refresh_tokens' } }
    /**
     * Find zero or one Refresh_tokens that matches the filter.
     * @param {refresh_tokensFindUniqueArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refresh_tokensFindUniqueArgs>(args: SelectSubset<T, refresh_tokensFindUniqueArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refresh_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refresh_tokensFindUniqueOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refresh_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, refresh_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refresh_tokensFindFirstArgs>(args?: SelectSubset<T, refresh_tokensFindFirstArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refresh_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, refresh_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany()
     * 
     * // Get first 10 Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refresh_tokensWithIdOnly = await prisma.refresh_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends refresh_tokensFindManyArgs>(args?: SelectSubset<T, refresh_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refresh_tokens.
     * @param {refresh_tokensCreateArgs} args - Arguments to create a Refresh_tokens.
     * @example
     * // Create one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.create({
     *   data: {
     *     // ... data to create a Refresh_tokens
     *   }
     * })
     * 
     */
    create<T extends refresh_tokensCreateArgs>(args: SelectSubset<T, refresh_tokensCreateArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refresh_tokens.
     * @param {refresh_tokensCreateManyArgs} args - Arguments to create many Refresh_tokens.
     * @example
     * // Create many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refresh_tokensCreateManyArgs>(args?: SelectSubset<T, refresh_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refresh_tokens.
     * @param {refresh_tokensDeleteArgs} args - Arguments to delete one Refresh_tokens.
     * @example
     * // Delete one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.delete({
     *   where: {
     *     // ... filter to delete one Refresh_tokens
     *   }
     * })
     * 
     */
    delete<T extends refresh_tokensDeleteArgs>(args: SelectSubset<T, refresh_tokensDeleteArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refresh_tokens.
     * @param {refresh_tokensUpdateArgs} args - Arguments to update one Refresh_tokens.
     * @example
     * // Update one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refresh_tokensUpdateArgs>(args: SelectSubset<T, refresh_tokensUpdateArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refresh_tokens.
     * @param {refresh_tokensDeleteManyArgs} args - Arguments to filter Refresh_tokens to delete.
     * @example
     * // Delete a few Refresh_tokens
     * const { count } = await prisma.refresh_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refresh_tokensDeleteManyArgs>(args?: SelectSubset<T, refresh_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refresh_tokensUpdateManyArgs>(args: SelectSubset<T, refresh_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refresh_tokens.
     * @param {refresh_tokensUpsertArgs} args - Arguments to update or create a Refresh_tokens.
     * @example
     * // Update or create a Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.upsert({
     *   create: {
     *     // ... data to create a Refresh_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to update
     *   }
     * })
     */
    upsert<T extends refresh_tokensUpsertArgs>(args: SelectSubset<T, refresh_tokensUpsertArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensCountArgs} args - Arguments to filter Refresh_tokens to count.
     * @example
     * // Count the number of Refresh_tokens
     * const count = await prisma.refresh_tokens.count({
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to count
     *   }
     * })
    **/
    count<T extends refresh_tokensCountArgs>(
      args?: Subset<T, refresh_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Refresh_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Refresh_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Refresh_tokensAggregateArgs>(args: Subset<T, Refresh_tokensAggregateArgs>): Prisma.PrismaPromise<GetRefresh_tokensAggregateType<T>>

    /**
     * Group by Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensGroupByArgs} args - Group by arguments.
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
      T extends refresh_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refresh_tokensGroupByArgs['orderBy'] }
        : { orderBy?: refresh_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, refresh_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefresh_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refresh_tokens model
   */
  readonly fields: refresh_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refresh_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refresh_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the refresh_tokens model
   */
  interface refresh_tokensFieldRefs {
    readonly id: FieldRef<"refresh_tokens", 'Int'>
    readonly user_id: FieldRef<"refresh_tokens", 'Int'>
    readonly token: FieldRef<"refresh_tokens", 'String'>
    readonly revoked: FieldRef<"refresh_tokens", 'Boolean'>
    readonly expires_at: FieldRef<"refresh_tokens", 'DateTime'>
    readonly created_at: FieldRef<"refresh_tokens", 'DateTime'>
    readonly replaced_by_token: FieldRef<"refresh_tokens", 'String'>
    readonly ip: FieldRef<"refresh_tokens", 'String'>
    readonly user_agent: FieldRef<"refresh_tokens", 'String'>
  }
    

  // Custom InputTypes
  /**
   * refresh_tokens findUnique
   */
  export type refresh_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens findUniqueOrThrow
   */
  export type refresh_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens findFirst
   */
  export type refresh_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens findFirstOrThrow
   */
  export type refresh_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens findMany
   */
  export type refresh_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens create
   */
  export type refresh_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a refresh_tokens.
     */
    data: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
  }

  /**
   * refresh_tokens createMany
   */
  export type refresh_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refresh_tokens.
     */
    data: refresh_tokensCreateManyInput | refresh_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refresh_tokens update
   */
  export type refresh_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
    /**
     * Choose, which refresh_tokens to update.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens updateMany
   */
  export type refresh_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyInput>
    /**
     * Filter which refresh_tokens to update
     */
    where?: refresh_tokensWhereInput
    /**
     * Limit how many refresh_tokens to update.
     */
    limit?: number
  }

  /**
   * refresh_tokens upsert
   */
  export type refresh_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the refresh_tokens to update in case it exists.
     */
    where: refresh_tokensWhereUniqueInput
    /**
     * In case the refresh_tokens found by the `where` argument doesn't exist, create a new refresh_tokens with this data.
     */
    create: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
    /**
     * In case the refresh_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
  }

  /**
   * refresh_tokens delete
   */
  export type refresh_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter which refresh_tokens to delete.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens deleteMany
   */
  export type refresh_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to delete
     */
    where?: refresh_tokensWhereInput
    /**
     * Limit how many refresh_tokens to delete.
     */
    limit?: number
  }

  /**
   * refresh_tokens without action
   */
  export type refresh_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
    readonly description: FieldRef<"roles", 'String'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model spots
   */

  export type AggregateSpots = {
    _count: SpotsCountAggregateOutputType | null
    _avg: SpotsAvgAggregateOutputType | null
    _sum: SpotsSumAggregateOutputType | null
    _min: SpotsMinAggregateOutputType | null
    _max: SpotsMaxAggregateOutputType | null
  }

  export type SpotsAvgAggregateOutputType = {
    id: number | null
    entity_id: number | null
  }

  export type SpotsSumAggregateOutputType = {
    id: number | null
    entity_id: number | null
  }

  export type SpotsMinAggregateOutputType = {
    id: number | null
    entity_id: number | null
    name: string | null
    description: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpotsMaxAggregateOutputType = {
    id: number | null
    entity_id: number | null
    name: string | null
    description: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpotsCountAggregateOutputType = {
    id: number
    entity_id: number
    name: number
    description: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SpotsAvgAggregateInputType = {
    id?: true
    entity_id?: true
  }

  export type SpotsSumAggregateInputType = {
    id?: true
    entity_id?: true
  }

  export type SpotsMinAggregateInputType = {
    id?: true
    entity_id?: true
    name?: true
    description?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type SpotsMaxAggregateInputType = {
    id?: true
    entity_id?: true
    name?: true
    description?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type SpotsCountAggregateInputType = {
    id?: true
    entity_id?: true
    name?: true
    description?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SpotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spots to aggregate.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spots
    **/
    _count?: true | SpotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotsMaxAggregateInputType
  }

  export type GetSpotsAggregateType<T extends SpotsAggregateArgs> = {
        [P in keyof T & keyof AggregateSpots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpots[P]>
      : GetScalarType<T[P], AggregateSpots[P]>
  }




  export type spotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spotsWhereInput
    orderBy?: spotsOrderByWithAggregationInput | spotsOrderByWithAggregationInput[]
    by: SpotsScalarFieldEnum[] | SpotsScalarFieldEnum
    having?: spotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotsCountAggregateInputType | true
    _avg?: SpotsAvgAggregateInputType
    _sum?: SpotsSumAggregateInputType
    _min?: SpotsMinAggregateInputType
    _max?: SpotsMaxAggregateInputType
  }

  export type SpotsGroupByOutputType = {
    id: number
    entity_id: number
    name: string
    description: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: SpotsCountAggregateOutputType | null
    _avg: SpotsAvgAggregateOutputType | null
    _sum: SpotsSumAggregateOutputType | null
    _min: SpotsMinAggregateOutputType | null
    _max: SpotsMaxAggregateOutputType | null
  }

  type GetSpotsGroupByPayload<T extends spotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotsGroupByOutputType[P]>
            : GetScalarType<T[P], SpotsGroupByOutputType[P]>
        }
      >
    >


  export type spotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity_id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    users?: boolean | spots$usersArgs<ExtArgs>
    _count?: boolean | SpotsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spots"]>



  export type spotsSelectScalar = {
    id?: boolean
    entity_id?: boolean
    name?: boolean
    description?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type spotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entity_id" | "name" | "description" | "active" | "created_at" | "updated_at", ExtArgs["result"]["spots"]>
  export type spotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    users?: boolean | spots$usersArgs<ExtArgs>
    _count?: boolean | SpotsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $spotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spots"
    objects: {
      entities: Prisma.$entitiesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entity_id: number
      name: string
      description: string | null
      active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["spots"]>
    composites: {}
  }

  type spotsGetPayload<S extends boolean | null | undefined | spotsDefaultArgs> = $Result.GetResult<Prisma.$spotsPayload, S>

  type spotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpotsCountAggregateInputType | true
    }

  export interface spotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spots'], meta: { name: 'spots' } }
    /**
     * Find zero or one Spots that matches the filter.
     * @param {spotsFindUniqueArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spotsFindUniqueArgs>(args: SelectSubset<T, spotsFindUniqueArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spotsFindUniqueOrThrowArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spotsFindUniqueOrThrowArgs>(args: SelectSubset<T, spotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsFindFirstArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spotsFindFirstArgs>(args?: SelectSubset<T, spotsFindFirstArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsFindFirstOrThrowArgs} args - Arguments to find a Spots
     * @example
     * // Get one Spots
     * const spots = await prisma.spots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spotsFindFirstOrThrowArgs>(args?: SelectSubset<T, spotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spots
     * const spots = await prisma.spots.findMany()
     * 
     * // Get first 10 Spots
     * const spots = await prisma.spots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotsWithIdOnly = await prisma.spots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends spotsFindManyArgs>(args?: SelectSubset<T, spotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spots.
     * @param {spotsCreateArgs} args - Arguments to create a Spots.
     * @example
     * // Create one Spots
     * const Spots = await prisma.spots.create({
     *   data: {
     *     // ... data to create a Spots
     *   }
     * })
     * 
     */
    create<T extends spotsCreateArgs>(args: SelectSubset<T, spotsCreateArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spots.
     * @param {spotsCreateManyArgs} args - Arguments to create many Spots.
     * @example
     * // Create many Spots
     * const spots = await prisma.spots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spotsCreateManyArgs>(args?: SelectSubset<T, spotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spots.
     * @param {spotsDeleteArgs} args - Arguments to delete one Spots.
     * @example
     * // Delete one Spots
     * const Spots = await prisma.spots.delete({
     *   where: {
     *     // ... filter to delete one Spots
     *   }
     * })
     * 
     */
    delete<T extends spotsDeleteArgs>(args: SelectSubset<T, spotsDeleteArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spots.
     * @param {spotsUpdateArgs} args - Arguments to update one Spots.
     * @example
     * // Update one Spots
     * const spots = await prisma.spots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spotsUpdateArgs>(args: SelectSubset<T, spotsUpdateArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spots.
     * @param {spotsDeleteManyArgs} args - Arguments to filter Spots to delete.
     * @example
     * // Delete a few Spots
     * const { count } = await prisma.spots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spotsDeleteManyArgs>(args?: SelectSubset<T, spotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spots
     * const spots = await prisma.spots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spotsUpdateManyArgs>(args: SelectSubset<T, spotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spots.
     * @param {spotsUpsertArgs} args - Arguments to update or create a Spots.
     * @example
     * // Update or create a Spots
     * const spots = await prisma.spots.upsert({
     *   create: {
     *     // ... data to create a Spots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spots we want to update
     *   }
     * })
     */
    upsert<T extends spotsUpsertArgs>(args: SelectSubset<T, spotsUpsertArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsCountArgs} args - Arguments to filter Spots to count.
     * @example
     * // Count the number of Spots
     * const count = await prisma.spots.count({
     *   where: {
     *     // ... the filter for the Spots we want to count
     *   }
     * })
    **/
    count<T extends spotsCountArgs>(
      args?: Subset<T, spotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotsAggregateArgs>(args: Subset<T, SpotsAggregateArgs>): Prisma.PrismaPromise<GetSpotsAggregateType<T>>

    /**
     * Group by Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spotsGroupByArgs} args - Group by arguments.
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
      T extends spotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spotsGroupByArgs['orderBy'] }
        : { orderBy?: spotsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spots model
   */
  readonly fields: spotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entities<T extends entitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entitiesDefaultArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends spots$usersArgs<ExtArgs> = {}>(args?: Subset<T, spots$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the spots model
   */
  interface spotsFieldRefs {
    readonly id: FieldRef<"spots", 'Int'>
    readonly entity_id: FieldRef<"spots", 'Int'>
    readonly name: FieldRef<"spots", 'String'>
    readonly description: FieldRef<"spots", 'String'>
    readonly active: FieldRef<"spots", 'Boolean'>
    readonly created_at: FieldRef<"spots", 'DateTime'>
    readonly updated_at: FieldRef<"spots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * spots findUnique
   */
  export type spotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots findUniqueOrThrow
   */
  export type spotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots findFirst
   */
  export type spotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spots.
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spots.
     */
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * spots findFirstOrThrow
   */
  export type spotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spots.
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spots.
     */
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * spots findMany
   */
  export type spotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter, which spots to fetch.
     */
    where?: spotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spots to fetch.
     */
    orderBy?: spotsOrderByWithRelationInput | spotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spots.
     */
    cursor?: spotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spots.
     */
    skip?: number
    distinct?: SpotsScalarFieldEnum | SpotsScalarFieldEnum[]
  }

  /**
   * spots create
   */
  export type spotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * The data needed to create a spots.
     */
    data: XOR<spotsCreateInput, spotsUncheckedCreateInput>
  }

  /**
   * spots createMany
   */
  export type spotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spots.
     */
    data: spotsCreateManyInput | spotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spots update
   */
  export type spotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * The data needed to update a spots.
     */
    data: XOR<spotsUpdateInput, spotsUncheckedUpdateInput>
    /**
     * Choose, which spots to update.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots updateMany
   */
  export type spotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spots.
     */
    data: XOR<spotsUpdateManyMutationInput, spotsUncheckedUpdateManyInput>
    /**
     * Filter which spots to update
     */
    where?: spotsWhereInput
    /**
     * Limit how many spots to update.
     */
    limit?: number
  }

  /**
   * spots upsert
   */
  export type spotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * The filter to search for the spots to update in case it exists.
     */
    where: spotsWhereUniqueInput
    /**
     * In case the spots found by the `where` argument doesn't exist, create a new spots with this data.
     */
    create: XOR<spotsCreateInput, spotsUncheckedCreateInput>
    /**
     * In case the spots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spotsUpdateInput, spotsUncheckedUpdateInput>
  }

  /**
   * spots delete
   */
  export type spotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    /**
     * Filter which spots to delete.
     */
    where: spotsWhereUniqueInput
  }

  /**
   * spots deleteMany
   */
  export type spotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spots to delete
     */
    where?: spotsWhereInput
    /**
     * Limit how many spots to delete.
     */
    limit?: number
  }

  /**
   * spots.users
   */
  export type spots$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * spots without action
   */
  export type spotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
    is_active: boolean | null
    is_email_confirmed: boolean | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role_id: number | null
    entity_id: number | null
    spot_id: number | null
    profile_id: number | null
    is_active: boolean | null
    is_email_confirmed: boolean | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role_id: number
    entity_id: number
    spot_id: number
    profile_id: number
    is_active: number
    is_email_confirmed: number
    last_login_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
    is_active?: true
    is_email_confirmed?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
    is_active?: true
    is_email_confirmed?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role_id?: true
    entity_id?: true
    spot_id?: true
    profile_id?: true
    is_active?: true
    is_email_confirmed?: true
    last_login_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id: number | null
    profile_id: number | null
    is_active: boolean | null
    is_email_confirmed: boolean | null
    last_login_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    entity_id?: boolean
    spot_id?: boolean
    profile_id?: boolean
    is_active?: boolean
    is_email_confirmed?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    refresh_tokens?: boolean | users$refresh_tokensArgs<ExtArgs>
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    profiles?: boolean | users$profilesArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    spots?: boolean | users$spotsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    entity_id?: boolean
    spot_id?: boolean
    profile_id?: boolean
    is_active?: boolean
    is_email_confirmed?: boolean
    last_login_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role_id" | "entity_id" | "spot_id" | "profile_id" | "is_active" | "is_email_confirmed" | "last_login_at" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refresh_tokens?: boolean | users$refresh_tokensArgs<ExtArgs>
    entities?: boolean | entitiesDefaultArgs<ExtArgs>
    profiles?: boolean | users$profilesArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    spots?: boolean | users$spotsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      refresh_tokens: Prisma.$refresh_tokensPayload<ExtArgs>[]
      entities: Prisma.$entitiesPayload<ExtArgs>
      profiles: Prisma.$profilesPayload<ExtArgs> | null
      roles: Prisma.$rolesPayload<ExtArgs>
      spots: Prisma.$spotsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role_id: number
      entity_id: number
      spot_id: number | null
      profile_id: number | null
      is_active: boolean | null
      is_email_confirmed: boolean | null
      last_login_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refresh_tokens<T extends users$refresh_tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$refresh_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entities<T extends entitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entitiesDefaultArgs<ExtArgs>>): Prisma__entitiesClient<$Result.GetResult<Prisma.$entitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profiles<T extends users$profilesArgs<ExtArgs> = {}>(args?: Subset<T, users$profilesArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spots<T extends users$spotsArgs<ExtArgs> = {}>(args?: Subset<T, users$spotsArgs<ExtArgs>>): Prisma__spotsClient<$Result.GetResult<Prisma.$spotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role_id: FieldRef<"users", 'Int'>
    readonly entity_id: FieldRef<"users", 'Int'>
    readonly spot_id: FieldRef<"users", 'Int'>
    readonly profile_id: FieldRef<"users", 'Int'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly is_email_confirmed: FieldRef<"users", 'Boolean'>
    readonly last_login_at: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.refresh_tokens
   */
  export type users$refresh_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    where?: refresh_tokensWhereInput
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    cursor?: refresh_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * users.profiles
   */
  export type users$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    where?: profilesWhereInput
  }

  /**
   * users.spots
   */
  export type users$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spots
     */
    select?: spotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spots
     */
    omit?: spotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: spotsInclude<ExtArgs> | null
    where?: spotsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const EntitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    identifier: 'identifier',
    address: 'address',
    meta: 'meta',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EntitiesScalarFieldEnum = (typeof EntitiesScalarFieldEnum)[keyof typeof EntitiesScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    avatar_url: 'avatar_url',
    bio: 'bio',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const Refresh_tokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    revoked: 'revoked',
    expires_at: 'expires_at',
    created_at: 'created_at',
    replaced_by_token: 'replaced_by_token',
    ip: 'ip',
    user_agent: 'user_agent'
  };

  export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const SpotsScalarFieldEnum: {
    id: 'id',
    entity_id: 'entity_id',
    name: 'name',
    description: 'description',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SpotsScalarFieldEnum = (typeof SpotsScalarFieldEnum)[keyof typeof SpotsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role_id: 'role_id',
    entity_id: 'entity_id',
    spot_id: 'spot_id',
    profile_id: 'profile_id',
    is_active: 'is_active',
    is_email_confirmed: 'is_email_confirmed',
    last_login_at: 'last_login_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const entitiesOrderByRelevanceFieldEnum: {
    name: 'name',
    identifier: 'identifier',
    address: 'address',
    meta: 'meta'
  };

  export type entitiesOrderByRelevanceFieldEnum = (typeof entitiesOrderByRelevanceFieldEnum)[keyof typeof entitiesOrderByRelevanceFieldEnum]


  export const profilesOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    avatar_url: 'avatar_url',
    bio: 'bio'
  };

  export type profilesOrderByRelevanceFieldEnum = (typeof profilesOrderByRelevanceFieldEnum)[keyof typeof profilesOrderByRelevanceFieldEnum]


  export const refresh_tokensOrderByRelevanceFieldEnum: {
    token: 'token',
    replaced_by_token: 'replaced_by_token',
    ip: 'ip',
    user_agent: 'user_agent'
  };

  export type refresh_tokensOrderByRelevanceFieldEnum = (typeof refresh_tokensOrderByRelevanceFieldEnum)[keyof typeof refresh_tokensOrderByRelevanceFieldEnum]


  export const rolesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum]


  export const spotsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type spotsOrderByRelevanceFieldEnum = (typeof spotsOrderByRelevanceFieldEnum)[keyof typeof spotsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type entitiesWhereInput = {
    AND?: entitiesWhereInput | entitiesWhereInput[]
    OR?: entitiesWhereInput[]
    NOT?: entitiesWhereInput | entitiesWhereInput[]
    id?: IntFilter<"entities"> | number
    name?: StringFilter<"entities"> | string
    identifier?: StringFilter<"entities"> | string
    address?: StringNullableFilter<"entities"> | string | null
    meta?: StringNullableFilter<"entities"> | string | null
    active?: BoolNullableFilter<"entities"> | boolean | null
    created_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    spots?: SpotsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type entitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    address?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    spots?: spotsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
    _relevance?: entitiesOrderByRelevanceInput
  }

  export type entitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identifier?: string
    AND?: entitiesWhereInput | entitiesWhereInput[]
    OR?: entitiesWhereInput[]
    NOT?: entitiesWhereInput | entitiesWhereInput[]
    name?: StringFilter<"entities"> | string
    address?: StringNullableFilter<"entities"> | string | null
    meta?: StringNullableFilter<"entities"> | string | null
    active?: BoolNullableFilter<"entities"> | boolean | null
    created_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"entities"> | Date | string | null
    spots?: SpotsListRelationFilter
    users?: UsersListRelationFilter
  }, "id" | "identifier">

  export type entitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    address?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: entitiesCountOrderByAggregateInput
    _avg?: entitiesAvgOrderByAggregateInput
    _max?: entitiesMaxOrderByAggregateInput
    _min?: entitiesMinOrderByAggregateInput
    _sum?: entitiesSumOrderByAggregateInput
  }

  export type entitiesScalarWhereWithAggregatesInput = {
    AND?: entitiesScalarWhereWithAggregatesInput | entitiesScalarWhereWithAggregatesInput[]
    OR?: entitiesScalarWhereWithAggregatesInput[]
    NOT?: entitiesScalarWhereWithAggregatesInput | entitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"entities"> | number
    name?: StringWithAggregatesFilter<"entities"> | string
    identifier?: StringWithAggregatesFilter<"entities"> | string
    address?: StringNullableWithAggregatesFilter<"entities"> | string | null
    meta?: StringNullableWithAggregatesFilter<"entities"> | string | null
    active?: BoolNullableWithAggregatesFilter<"entities"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"entities"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"entities"> | Date | string | null
  }

  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: IntFilter<"profiles"> | number
    first_name?: StringNullableFilter<"profiles"> | string | null
    last_name?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    avatar_url?: StringNullableFilter<"profiles"> | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    users?: UsersListRelationFilter
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
    _relevance?: profilesOrderByRelevanceInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    first_name?: StringNullableFilter<"profiles"> | string | null
    last_name?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    avatar_url?: StringNullableFilter<"profiles"> | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    users?: UsersListRelationFilter
  }, "id">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: profilesCountOrderByAggregateInput
    _avg?: profilesAvgOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
    _sum?: profilesSumOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profiles"> | number
    first_name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    phone?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    bio?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
  }

  export type refresh_tokensWhereInput = {
    AND?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    OR?: refresh_tokensWhereInput[]
    NOT?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    id?: IntFilter<"refresh_tokens"> | number
    user_id?: IntFilter<"refresh_tokens"> | number
    token?: StringFilter<"refresh_tokens"> | string
    revoked?: BoolNullableFilter<"refresh_tokens"> | boolean | null
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    replaced_by_token?: StringNullableFilter<"refresh_tokens"> | string | null
    ip?: StringNullableFilter<"refresh_tokens"> | string | null
    user_agent?: StringNullableFilter<"refresh_tokens"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type refresh_tokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    revoked?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    replaced_by_token?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: refresh_tokensOrderByRelevanceInput
  }

  export type refresh_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    OR?: refresh_tokensWhereInput[]
    NOT?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    user_id?: IntFilter<"refresh_tokens"> | number
    token?: StringFilter<"refresh_tokens"> | string
    revoked?: BoolNullableFilter<"refresh_tokens"> | boolean | null
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    replaced_by_token?: StringNullableFilter<"refresh_tokens"> | string | null
    ip?: StringNullableFilter<"refresh_tokens"> | string | null
    user_agent?: StringNullableFilter<"refresh_tokens"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type refresh_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    revoked?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    replaced_by_token?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    _count?: refresh_tokensCountOrderByAggregateInput
    _avg?: refresh_tokensAvgOrderByAggregateInput
    _max?: refresh_tokensMaxOrderByAggregateInput
    _min?: refresh_tokensMinOrderByAggregateInput
    _sum?: refresh_tokensSumOrderByAggregateInput
  }

  export type refresh_tokensScalarWhereWithAggregatesInput = {
    AND?: refresh_tokensScalarWhereWithAggregatesInput | refresh_tokensScalarWhereWithAggregatesInput[]
    OR?: refresh_tokensScalarWhereWithAggregatesInput[]
    NOT?: refresh_tokensScalarWhereWithAggregatesInput | refresh_tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"refresh_tokens"> | number
    user_id?: IntWithAggregatesFilter<"refresh_tokens"> | number
    token?: StringWithAggregatesFilter<"refresh_tokens"> | string
    revoked?: BoolNullableWithAggregatesFilter<"refresh_tokens"> | boolean | null
    expires_at?: DateTimeWithAggregatesFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"refresh_tokens"> | Date | string | null
    replaced_by_token?: StringNullableWithAggregatesFilter<"refresh_tokens"> | string | null
    ip?: StringNullableWithAggregatesFilter<"refresh_tokens"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"refresh_tokens"> | string | null
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    description?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
    _relevance?: rolesOrderByRelevanceInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    description?: StringNullableFilter<"roles"> | string | null
    created_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"roles"> | Date | string | null
    users?: UsersListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
    description?: StringNullableWithAggregatesFilter<"roles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null
  }

  export type spotsWhereInput = {
    AND?: spotsWhereInput | spotsWhereInput[]
    OR?: spotsWhereInput[]
    NOT?: spotsWhereInput | spotsWhereInput[]
    id?: IntFilter<"spots"> | number
    entity_id?: IntFilter<"spots"> | number
    name?: StringFilter<"spots"> | string
    description?: StringNullableFilter<"spots"> | string | null
    active?: BoolNullableFilter<"spots"> | boolean | null
    created_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    users?: UsersListRelationFilter
  }

  export type spotsOrderByWithRelationInput = {
    id?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    entities?: entitiesOrderByWithRelationInput
    users?: usersOrderByRelationAggregateInput
    _relevance?: spotsOrderByRelevanceInput
  }

  export type spotsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: spotsWhereInput | spotsWhereInput[]
    OR?: spotsWhereInput[]
    NOT?: spotsWhereInput | spotsWhereInput[]
    entity_id?: IntFilter<"spots"> | number
    name?: StringFilter<"spots"> | string
    description?: StringNullableFilter<"spots"> | string | null
    active?: BoolNullableFilter<"spots"> | boolean | null
    created_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    users?: UsersListRelationFilter
  }, "id">

  export type spotsOrderByWithAggregationInput = {
    id?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: spotsCountOrderByAggregateInput
    _avg?: spotsAvgOrderByAggregateInput
    _max?: spotsMaxOrderByAggregateInput
    _min?: spotsMinOrderByAggregateInput
    _sum?: spotsSumOrderByAggregateInput
  }

  export type spotsScalarWhereWithAggregatesInput = {
    AND?: spotsScalarWhereWithAggregatesInput | spotsScalarWhereWithAggregatesInput[]
    OR?: spotsScalarWhereWithAggregatesInput[]
    NOT?: spotsScalarWhereWithAggregatesInput | spotsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"spots"> | number
    entity_id?: IntWithAggregatesFilter<"spots"> | number
    name?: StringWithAggregatesFilter<"spots"> | string
    description?: StringNullableWithAggregatesFilter<"spots"> | string | null
    active?: BoolNullableWithAggregatesFilter<"spots"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"spots"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    entity_id?: IntFilter<"users"> | number
    spot_id?: IntNullableFilter<"users"> | number | null
    profile_id?: IntNullableFilter<"users"> | number | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    is_email_confirmed?: BoolNullableFilter<"users"> | boolean | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    refresh_tokens?: Refresh_tokensListRelationFilter
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    spots?: XOR<SpotsNullableScalarRelationFilter, spotsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    is_email_confirmed?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    refresh_tokens?: refresh_tokensOrderByRelationAggregateInput
    entities?: entitiesOrderByWithRelationInput
    profiles?: profilesOrderByWithRelationInput
    roles?: rolesOrderByWithRelationInput
    spots?: spotsOrderByWithRelationInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    entity_id?: IntFilter<"users"> | number
    spot_id?: IntNullableFilter<"users"> | number | null
    profile_id?: IntNullableFilter<"users"> | number | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    is_email_confirmed?: BoolNullableFilter<"users"> | boolean | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    refresh_tokens?: Refresh_tokensListRelationFilter
    entities?: XOR<EntitiesScalarRelationFilter, entitiesWhereInput>
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    spots?: XOR<SpotsNullableScalarRelationFilter, spotsWhereInput> | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    is_email_confirmed?: SortOrderInput | SortOrder
    last_login_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role_id?: IntWithAggregatesFilter<"users"> | number
    entity_id?: IntWithAggregatesFilter<"users"> | number
    spot_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    profile_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    is_email_confirmed?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    last_login_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type entitiesCreateInput = {
    name: string
    identifier: string
    address?: string | null
    meta?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsCreateNestedManyWithoutEntitiesInput
    users?: usersCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUncheckedCreateInput = {
    id?: number
    name: string
    identifier: string
    address?: string | null
    meta?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsUncheckedCreateNestedManyWithoutEntitiesInput
    users?: usersUncheckedCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUpdateManyWithoutEntitiesNestedInput
    users?: usersUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUncheckedUpdateManyWithoutEntitiesNestedInput
    users?: usersUncheckedUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesCreateManyInput = {
    id?: number
    name: string
    identifier: string
    address?: string | null
    meta?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type entitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesCreateInput = {
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateInput = {
    id?: number
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesUpdateInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type profilesCreateManyInput = {
    id?: number
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profilesUpdateManyMutationInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensCreateInput = {
    token: string
    revoked?: boolean | null
    expires_at: Date | string
    created_at?: Date | string | null
    replaced_by_token?: string | null
    ip?: string | null
    user_agent?: string | null
    users: usersCreateNestedOneWithoutRefresh_tokensInput
  }

  export type refresh_tokensUncheckedCreateInput = {
    id?: number
    user_id: number
    token: string
    revoked?: boolean | null
    expires_at: Date | string
    created_at?: Date | string | null
    replaced_by_token?: string | null
    ip?: string | null
    user_agent?: string | null
  }

  export type refresh_tokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replaced_by_token?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutRefresh_tokensNestedInput
  }

  export type refresh_tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replaced_by_token?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensCreateManyInput = {
    id?: number
    user_id: number
    token: string
    revoked?: boolean | null
    expires_at: Date | string
    created_at?: Date | string | null
    replaced_by_token?: string | null
    ip?: string | null
    user_agent?: string | null
  }

  export type refresh_tokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replaced_by_token?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replaced_by_token?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rolesCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsCreateInput = {
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entities: entitiesCreateNestedOneWithoutSpotsInput
    users?: usersCreateNestedManyWithoutSpotsInput
  }

  export type spotsUncheckedCreateInput = {
    id?: number
    entity_id: number
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutSpotsInput
  }

  export type spotsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entities?: entitiesUpdateOneRequiredWithoutSpotsNestedInput
    users?: usersUpdateManyWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutSpotsNestedInput
  }

  export type spotsCreateManyInput = {
    id?: number
    entity_id: number
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type spotsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SpotsListRelationFilter = {
    every?: spotsWhereInput
    some?: spotsWhereInput
    none?: spotsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type spotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entitiesOrderByRelevanceInput = {
    fields: entitiesOrderByRelevanceFieldEnum | entitiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type entitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    address?: SortOrder
    meta?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entitiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type entitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    address?: SortOrder
    meta?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    identifier?: SortOrder
    address?: SortOrder
    meta?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entitiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type profilesOrderByRelevanceInput = {
    fields: profilesOrderByRelevanceFieldEnum | profilesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    avatar_url?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type refresh_tokensOrderByRelevanceInput = {
    fields: refresh_tokensOrderByRelevanceFieldEnum | refresh_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type refresh_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    revoked?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    replaced_by_token?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
  }

  export type refresh_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type refresh_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    revoked?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    replaced_by_token?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
  }

  export type refresh_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    revoked?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    replaced_by_token?: SortOrder
    ip?: SortOrder
    user_agent?: SortOrder
  }

  export type refresh_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type rolesOrderByRelevanceInput = {
    fields: rolesOrderByRelevanceFieldEnum | rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntitiesScalarRelationFilter = {
    is?: entitiesWhereInput
    isNot?: entitiesWhereInput
  }

  export type spotsOrderByRelevanceInput = {
    fields: spotsOrderByRelevanceFieldEnum | spotsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type spotsCountOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type spotsAvgOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
  }

  export type spotsMaxOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type spotsMinOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type spotsSumOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Refresh_tokensListRelationFilter = {
    every?: refresh_tokensWhereInput
    some?: refresh_tokensWhereInput
    none?: refresh_tokensWhereInput
  }

  export type ProfilesNullableScalarRelationFilter = {
    is?: profilesWhereInput | null
    isNot?: profilesWhereInput | null
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type SpotsNullableScalarRelationFilter = {
    is?: spotsWhereInput | null
    isNot?: spotsWhereInput | null
  }

  export type refresh_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
    is_active?: SortOrder
    is_email_confirmed?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
    is_active?: SortOrder
    is_email_confirmed?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
    is_active?: SortOrder
    is_email_confirmed?: SortOrder
    last_login_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    entity_id?: SortOrder
    spot_id?: SortOrder
    profile_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type spotsCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type spotsUncheckedCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutEntitiesInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type spotsUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    upsert?: spotsUpsertWithWhereUniqueWithoutEntitiesInput | spotsUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    set?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    disconnect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    delete?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    update?: spotsUpdateWithWhereUniqueWithoutEntitiesInput | spotsUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: spotsUpdateManyWithWhereWithoutEntitiesInput | spotsUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: spotsScalarWhereInput | spotsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutEntitiesInput | usersUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutEntitiesInput | usersUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutEntitiesInput | usersUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type spotsUncheckedUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput> | spotsCreateWithoutEntitiesInput[] | spotsUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: spotsCreateOrConnectWithoutEntitiesInput | spotsCreateOrConnectWithoutEntitiesInput[]
    upsert?: spotsUpsertWithWhereUniqueWithoutEntitiesInput | spotsUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: spotsCreateManyEntitiesInputEnvelope
    set?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    disconnect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    delete?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    connect?: spotsWhereUniqueInput | spotsWhereUniqueInput[]
    update?: spotsUpdateWithWhereUniqueWithoutEntitiesInput | spotsUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: spotsUpdateManyWithWhereWithoutEntitiesInput | spotsUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: spotsScalarWhereInput | spotsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutEntitiesNestedInput = {
    create?: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput> | usersCreateWithoutEntitiesInput[] | usersUncheckedCreateWithoutEntitiesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutEntitiesInput | usersCreateOrConnectWithoutEntitiesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutEntitiesInput | usersUpsertWithWhereUniqueWithoutEntitiesInput[]
    createMany?: usersCreateManyEntitiesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutEntitiesInput | usersUpdateWithWhereUniqueWithoutEntitiesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutEntitiesInput | usersUpdateManyWithWhereWithoutEntitiesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutProfilesInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProfilesInput | usersUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProfilesInput | usersUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProfilesInput | usersUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput> | usersCreateWithoutProfilesInput[] | usersUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput | usersCreateOrConnectWithoutProfilesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutProfilesInput | usersUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: usersCreateManyProfilesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutProfilesInput | usersUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutProfilesInput | usersUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutRefresh_tokensInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutRefresh_tokensNestedInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    upsert?: usersUpsertWithoutRefresh_tokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRefresh_tokensInput, usersUpdateWithoutRefresh_tokensInput>, usersUncheckedUpdateWithoutRefresh_tokensInput>
  }

  export type usersCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type entitiesCreateNestedOneWithoutSpotsInput = {
    create?: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutSpotsInput
    connect?: entitiesWhereUniqueInput
  }

  export type usersCreateNestedManyWithoutSpotsInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutSpotsInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type entitiesUpdateOneRequiredWithoutSpotsNestedInput = {
    create?: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutSpotsInput
    upsert?: entitiesUpsertWithoutSpotsInput
    connect?: entitiesWhereUniqueInput
    update?: XOR<XOR<entitiesUpdateToOneWithWhereWithoutSpotsInput, entitiesUpdateWithoutSpotsInput>, entitiesUncheckedUpdateWithoutSpotsInput>
  }

  export type usersUpdateManyWithoutSpotsNestedInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSpotsInput | usersUpsertWithWhereUniqueWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSpotsInput | usersUpdateWithWhereUniqueWithoutSpotsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSpotsInput | usersUpdateManyWithWhereWithoutSpotsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutSpotsNestedInput = {
    create?: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput> | usersCreateWithoutSpotsInput[] | usersUncheckedCreateWithoutSpotsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutSpotsInput | usersCreateOrConnectWithoutSpotsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutSpotsInput | usersUpsertWithWhereUniqueWithoutSpotsInput[]
    createMany?: usersCreateManySpotsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutSpotsInput | usersUpdateWithWhereUniqueWithoutSpotsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutSpotsInput | usersUpdateManyWithWhereWithoutSpotsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type refresh_tokensCreateNestedManyWithoutUsersInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
  }

  export type entitiesCreateNestedOneWithoutUsersInput = {
    create?: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutUsersInput
    connect?: entitiesWhereUniqueInput
  }

  export type profilesCreateNestedOneWithoutUsersInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    connect?: profilesWhereUniqueInput
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type spotsCreateNestedOneWithoutUsersInput = {
    create?: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: spotsCreateOrConnectWithoutUsersInput
    connect?: spotsWhereUniqueInput
  }

  export type refresh_tokensUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
  }

  export type refresh_tokensUpdateManyWithoutUsersNestedInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: refresh_tokensUpsertWithWhereUniqueWithoutUsersInput | refresh_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    disconnect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    delete?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    update?: refresh_tokensUpdateWithWhereUniqueWithoutUsersInput | refresh_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: refresh_tokensUpdateManyWithWhereWithoutUsersInput | refresh_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
  }

  export type entitiesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: entitiesCreateOrConnectWithoutUsersInput
    upsert?: entitiesUpsertWithoutUsersInput
    connect?: entitiesWhereUniqueInput
    update?: XOR<XOR<entitiesUpdateToOneWithWhereWithoutUsersInput, entitiesUpdateWithoutUsersInput>, entitiesUncheckedUpdateWithoutUsersInput>
  }

  export type profilesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    upsert?: profilesUpsertWithoutUsersInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutUsersInput, profilesUpdateWithoutUsersInput>, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type spotsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: spotsCreateOrConnectWithoutUsersInput
    upsert?: spotsUpsertWithoutUsersInput
    disconnect?: spotsWhereInput | boolean
    delete?: spotsWhereInput | boolean
    connect?: spotsWhereUniqueInput
    update?: XOR<XOR<spotsUpdateToOneWithWhereWithoutUsersInput, spotsUpdateWithoutUsersInput>, spotsUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: refresh_tokensUpsertWithWhereUniqueWithoutUsersInput | refresh_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    disconnect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    delete?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    update?: refresh_tokensUpdateWithWhereUniqueWithoutUsersInput | refresh_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: refresh_tokensUpdateManyWithWhereWithoutUsersInput | refresh_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type spotsCreateWithoutEntitiesInput = {
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutSpotsInput
  }

  export type spotsUncheckedCreateWithoutEntitiesInput = {
    id?: number
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutSpotsInput
  }

  export type spotsCreateOrConnectWithoutEntitiesInput = {
    where: spotsWhereUniqueInput
    create: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput>
  }

  export type spotsCreateManyEntitiesInputEnvelope = {
    data: spotsCreateManyEntitiesInput | spotsCreateManyEntitiesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutEntitiesInput = {
    email: string
    password: string
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEntitiesInput = {
    id?: number
    email: string
    password: string
    role_id: number
    spot_id?: number | null
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEntitiesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput>
  }

  export type usersCreateManyEntitiesInputEnvelope = {
    data: usersCreateManyEntitiesInput | usersCreateManyEntitiesInput[]
    skipDuplicates?: boolean
  }

  export type spotsUpsertWithWhereUniqueWithoutEntitiesInput = {
    where: spotsWhereUniqueInput
    update: XOR<spotsUpdateWithoutEntitiesInput, spotsUncheckedUpdateWithoutEntitiesInput>
    create: XOR<spotsCreateWithoutEntitiesInput, spotsUncheckedCreateWithoutEntitiesInput>
  }

  export type spotsUpdateWithWhereUniqueWithoutEntitiesInput = {
    where: spotsWhereUniqueInput
    data: XOR<spotsUpdateWithoutEntitiesInput, spotsUncheckedUpdateWithoutEntitiesInput>
  }

  export type spotsUpdateManyWithWhereWithoutEntitiesInput = {
    where: spotsScalarWhereInput
    data: XOR<spotsUpdateManyMutationInput, spotsUncheckedUpdateManyWithoutEntitiesInput>
  }

  export type spotsScalarWhereInput = {
    AND?: spotsScalarWhereInput | spotsScalarWhereInput[]
    OR?: spotsScalarWhereInput[]
    NOT?: spotsScalarWhereInput | spotsScalarWhereInput[]
    id?: IntFilter<"spots"> | number
    entity_id?: IntFilter<"spots"> | number
    name?: StringFilter<"spots"> | string
    description?: StringNullableFilter<"spots"> | string | null
    active?: BoolNullableFilter<"spots"> | boolean | null
    created_at?: DateTimeNullableFilter<"spots"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"spots"> | Date | string | null
  }

  export type usersUpsertWithWhereUniqueWithoutEntitiesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutEntitiesInput, usersUncheckedUpdateWithoutEntitiesInput>
    create: XOR<usersCreateWithoutEntitiesInput, usersUncheckedCreateWithoutEntitiesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutEntitiesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutEntitiesInput, usersUncheckedUpdateWithoutEntitiesInput>
  }

  export type usersUpdateManyWithWhereWithoutEntitiesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutEntitiesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    entity_id?: IntFilter<"users"> | number
    spot_id?: IntNullableFilter<"users"> | number | null
    profile_id?: IntNullableFilter<"users"> | number | null
    is_active?: BoolNullableFilter<"users"> | boolean | null
    is_email_confirmed?: BoolNullableFilter<"users"> | boolean | null
    last_login_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersCreateWithoutProfilesInput = {
    email: string
    password: string
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProfilesInput = {
    id?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProfilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
  }

  export type usersCreateManyProfilesInputEnvelope = {
    data: usersCreateManyProfilesInput | usersCreateManyProfilesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutProfilesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutProfilesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
  }

  export type usersUpdateManyWithWhereWithoutProfilesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutProfilesInput>
  }

  export type usersCreateWithoutRefresh_tokensInput = {
    email: string
    password: string
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRefresh_tokensInput = {
    id?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutRefresh_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
  }

  export type usersUpsertWithoutRefresh_tokensInput = {
    update: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRefresh_tokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
  }

  export type usersUpdateWithoutRefresh_tokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRefresh_tokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutRolesInput = {
    email: string
    password: string
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    spots?: spotsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRolesInput = {
    id?: number
    email: string
    password: string
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersCreateManyRolesInputEnvelope = {
    data: usersCreateManyRolesInput | usersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRolesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export type usersUpdateManyWithWhereWithoutRolesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export type entitiesCreateWithoutSpotsInput = {
    name: string
    identifier: string
    address?: string | null
    meta?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUncheckedCreateWithoutSpotsInput = {
    id?: number
    name: string
    identifier: string
    address?: string | null
    meta?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesCreateOrConnectWithoutSpotsInput = {
    where: entitiesWhereUniqueInput
    create: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
  }

  export type usersCreateWithoutSpotsInput = {
    email: string
    password: string
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    entities: entitiesCreateNestedOneWithoutUsersInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    roles: rolesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSpotsInput = {
    id?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSpotsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput>
  }

  export type usersCreateManySpotsInputEnvelope = {
    data: usersCreateManySpotsInput | usersCreateManySpotsInput[]
    skipDuplicates?: boolean
  }

  export type entitiesUpsertWithoutSpotsInput = {
    update: XOR<entitiesUpdateWithoutSpotsInput, entitiesUncheckedUpdateWithoutSpotsInput>
    create: XOR<entitiesCreateWithoutSpotsInput, entitiesUncheckedCreateWithoutSpotsInput>
    where?: entitiesWhereInput
  }

  export type entitiesUpdateToOneWithWhereWithoutSpotsInput = {
    where?: entitiesWhereInput
    data: XOR<entitiesUpdateWithoutSpotsInput, entitiesUncheckedUpdateWithoutSpotsInput>
  }

  export type entitiesUpdateWithoutSpotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesUncheckedUpdateWithoutSpotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutEntitiesNestedInput
  }

  export type usersUpsertWithWhereUniqueWithoutSpotsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutSpotsInput, usersUncheckedUpdateWithoutSpotsInput>
    create: XOR<usersCreateWithoutSpotsInput, usersUncheckedCreateWithoutSpotsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutSpotsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutSpotsInput, usersUncheckedUpdateWithoutSpotsInput>
  }

  export type usersUpdateManyWithWhereWithoutSpotsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutSpotsInput>
  }

  export type refresh_tokensCreateWithoutUsersInput = {
    token: string
    revoked?: boolean | null
    expires_at: Date | string
    created_at?: Date | string | null
    replaced_by_token?: string | null
    ip?: string | null
    user_agent?: string | null
  }

  export type refresh_tokensUncheckedCreateWithoutUsersInput = {
    id?: number
    token: string
    revoked?: boolean | null
    expires_at: Date | string
    created_at?: Date | string | null
    replaced_by_token?: string | null
    ip?: string | null
    user_agent?: string | null
  }

  export type refresh_tokensCreateOrConnectWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensCreateManyUsersInputEnvelope = {
    data: refresh_tokensCreateManyUsersInput | refresh_tokensCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type entitiesCreateWithoutUsersInput = {
    name: string
    identifier: string
    address?: string | null
    meta?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    identifier: string
    address?: string | null
    meta?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    spots?: spotsUncheckedCreateNestedManyWithoutEntitiesInput
  }

  export type entitiesCreateOrConnectWithoutUsersInput = {
    where: entitiesWhereUniqueInput
    create: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
  }

  export type profilesCreateWithoutUsersInput = {
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profilesUncheckedCreateWithoutUsersInput = {
    id?: number
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    avatar_url?: string | null
    bio?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profilesCreateOrConnectWithoutUsersInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
  }

  export type rolesCreateWithoutUsersInput = {
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type spotsCreateWithoutUsersInput = {
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entities: entitiesCreateNestedOneWithoutSpotsInput
  }

  export type spotsUncheckedCreateWithoutUsersInput = {
    id?: number
    entity_id: number
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type spotsCreateOrConnectWithoutUsersInput = {
    where: spotsWhereUniqueInput
    create: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensUpsertWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    update: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensUpdateWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    data: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
  }

  export type refresh_tokensUpdateManyWithWhereWithoutUsersInput = {
    where: refresh_tokensScalarWhereInput
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyWithoutUsersInput>
  }

  export type refresh_tokensScalarWhereInput = {
    AND?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
    OR?: refresh_tokensScalarWhereInput[]
    NOT?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
    id?: IntFilter<"refresh_tokens"> | number
    user_id?: IntFilter<"refresh_tokens"> | number
    token?: StringFilter<"refresh_tokens"> | string
    revoked?: BoolNullableFilter<"refresh_tokens"> | boolean | null
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    replaced_by_token?: StringNullableFilter<"refresh_tokens"> | string | null
    ip?: StringNullableFilter<"refresh_tokens"> | string | null
    user_agent?: StringNullableFilter<"refresh_tokens"> | string | null
  }

  export type entitiesUpsertWithoutUsersInput = {
    update: XOR<entitiesUpdateWithoutUsersInput, entitiesUncheckedUpdateWithoutUsersInput>
    create: XOR<entitiesCreateWithoutUsersInput, entitiesUncheckedCreateWithoutUsersInput>
    where?: entitiesWhereInput
  }

  export type entitiesUpdateToOneWithWhereWithoutUsersInput = {
    where?: entitiesWhereInput
    data: XOR<entitiesUpdateWithoutUsersInput, entitiesUncheckedUpdateWithoutUsersInput>
  }

  export type entitiesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUpdateManyWithoutEntitiesNestedInput
  }

  export type entitiesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spots?: spotsUncheckedUpdateManyWithoutEntitiesNestedInput
  }

  export type profilesUpsertWithoutUsersInput = {
    update: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type profilesUpdateWithoutUsersInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profilesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsUpsertWithoutUsersInput = {
    update: XOR<spotsUpdateWithoutUsersInput, spotsUncheckedUpdateWithoutUsersInput>
    create: XOR<spotsCreateWithoutUsersInput, spotsUncheckedCreateWithoutUsersInput>
    where?: spotsWhereInput
  }

  export type spotsUpdateToOneWithWhereWithoutUsersInput = {
    where?: spotsWhereInput
    data: XOR<spotsUpdateWithoutUsersInput, spotsUncheckedUpdateWithoutUsersInput>
  }

  export type spotsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entities?: entitiesUpdateOneRequiredWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type spotsCreateManyEntitiesInput = {
    id?: number
    name: string
    description?: string | null
    active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersCreateManyEntitiesInput = {
    id?: number
    email: string
    password: string
    role_id: number
    spot_id?: number | null
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type spotsUpdateWithoutEntitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateWithoutEntitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutSpotsNestedInput
  }

  export type spotsUncheckedUpdateManyWithoutEntitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpdateWithoutEntitiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEntitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutEntitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyProfilesInput = {
    id?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    spot_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateWithoutProfilesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyRolesInput = {
    id?: number
    email: string
    password: string
    entity_id: number
    spot_id?: number | null
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    spots?: spotsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    spot_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManySpotsInput = {
    id?: number
    email: string
    password: string
    role_id: number
    entity_id: number
    profile_id?: number | null
    is_active?: boolean | null
    is_email_confirmed?: boolean | null
    last_login_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateWithoutSpotsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    entities?: entitiesUpdateOneRequiredWithoutUsersNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSpotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutSpotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    entity_id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_email_confirmed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensCreateManyUsersInput = {
    id?: number
    token: string
    revoked?: boolean | null
    expires_at: Date | string
    created_at?: Date | string | null
    replaced_by_token?: string | null
    ip?: string | null
    user_agent?: string | null
  }

  export type refresh_tokensUpdateWithoutUsersInput = {
    token?: StringFieldUpdateOperationsInput | string
    revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replaced_by_token?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replaced_by_token?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refresh_tokensUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    revoked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replaced_by_token?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
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