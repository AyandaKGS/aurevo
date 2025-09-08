
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
 * Model AvailabilityStatus
 * 
 */
export type AvailabilityStatus = $Result.DefaultSelection<Prisma.$AvailabilityStatusPayload>
/**
 * Model booking
 * 
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>
/**
 * Model experience
 * 
 */
export type experience = $Result.DefaultSelection<Prisma.$experiencePayload>
/**
 * Model service
 * 
 */
export type service = $Result.DefaultSelection<Prisma.$servicePayload>
/**
 * Model availability
 * 
 */
export type availability = $Result.DefaultSelection<Prisma.$availabilityPayload>
/**
 * Model room
 * 
 */
export type room = $Result.DefaultSelection<Prisma.$roomPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  active: 'active',
  archived: 'archived',
  draft: 'draft'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Availability: {
  available: 'available',
  limited: 'limited',
  exclusive: 'exclusive',
  booked: 'booked'
};

export type Availability = (typeof Availability)[keyof typeof Availability]


export const BookingStatus: {
  Pending: 'Pending',
  Confirmed: 'Confirmed',
  Cancelled: 'Cancelled'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Availability = $Enums.Availability

export const Availability: typeof $Enums.Availability

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
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
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.experienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.serviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.availabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    booking: 'booking',
    experience: 'experience',
    service: 'service',
    availability: 'availability',
    room: 'room',
    user: 'user',
    review: 'review'
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
      modelProps: "booking" | "experience" | "service" | "availability" | "room" | "user" | "review"
      txIsolationLevel: never
    }
    model: {
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>
        fields: Prisma.bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.bookingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.bookingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      experience: {
        payload: Prisma.$experiencePayload<ExtArgs>
        fields: Prisma.experienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.experienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.experienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findFirst: {
            args: Prisma.experienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.experienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          findMany: {
            args: Prisma.experienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>[]
          }
          create: {
            args: Prisma.experienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          createMany: {
            args: Prisma.experienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.experienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          update: {
            args: Prisma.experienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          deleteMany: {
            args: Prisma.experienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.experienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.experienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$experiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.experienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.experienceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.experienceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.experienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      service: {
        payload: Prisma.$servicePayload<ExtArgs>
        fields: Prisma.serviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          findFirst: {
            args: Prisma.serviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          findMany: {
            args: Prisma.serviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[]
          }
          create: {
            args: Prisma.serviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          createMany: {
            args: Prisma.serviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.serviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          update: {
            args: Prisma.serviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          deleteMany: {
            args: Prisma.serviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.serviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.serviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.serviceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.serviceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.serviceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      availability: {
        payload: Prisma.$availabilityPayload<ExtArgs>
        fields: Prisma.availabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.availabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.availabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload>
          }
          findFirst: {
            args: Prisma.availabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.availabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload>
          }
          findMany: {
            args: Prisma.availabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload>[]
          }
          create: {
            args: Prisma.availabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload>
          }
          createMany: {
            args: Prisma.availabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.availabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload>
          }
          update: {
            args: Prisma.availabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload>
          }
          deleteMany: {
            args: Prisma.availabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.availabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.availabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$availabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.availabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.availabilityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.availabilityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.availabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      room: {
        payload: Prisma.$roomPayload<ExtArgs>
        fields: Prisma.roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findFirst: {
            args: Prisma.roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findMany: {
            args: Prisma.roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          create: {
            args: Prisma.roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          createMany: {
            args: Prisma.roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          update: {
            args: Prisma.roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          deleteMany: {
            args: Prisma.roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.roomFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.roomAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.roomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.userFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.userAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.reviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.reviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    booking?: bookingOmit
    experience?: experienceOmit
    service?: serviceOmit
    availability?: availabilityOmit
    room?: roomOmit
    user?: userOmit
    review?: reviewOmit
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
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    review: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | BookingCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type ExperienceCountOutputType
   */

  export type ExperienceCountOutputType = {
    bookings: number
    review: number
  }

  export type ExperienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ExperienceCountOutputTypeCountBookingsArgs
    review?: boolean | ExperienceCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceCountOutputType
     */
    select?: ExperienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * ExperienceCountOutputType without action
   */
  export type ExperienceCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    bookings: number
    review: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
    review?: boolean | ServiceCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    bookings: number
    review: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
    review?: boolean | RoomCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    review: number
    booking: number
    room: number
    experience: number
    service: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | UserCountOutputTypeCountReviewArgs
    booking?: boolean | UserCountOutputTypeCountBookingArgs
    room?: boolean | UserCountOutputTypeCountRoomArgs
    experience?: boolean | UserCountOutputTypeCountExperienceArgs
    service?: boolean | UserCountOutputTypeCountServiceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AvailabilityStatus
   */





  export type AvailabilityStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    availability?: boolean
    dates?: boolean
  }, ExtArgs["result"]["availabilityStatus"]>



  export type AvailabilityStatusSelectScalar = {
    availability?: boolean
    dates?: boolean
  }

  export type AvailabilityStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"availability" | "dates", ExtArgs["result"]["availabilityStatus"]>

  export type $AvailabilityStatusPayload = {
    name: "AvailabilityStatus"
    objects: {}
    scalars: {
      availability: string
      dates: string[]
    }
    composites: {}
  }

  type AvailabilityStatusGetPayload<S extends boolean | null | undefined | AvailabilityStatusDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityStatusPayload, S>





  /**
   * Fields of the AvailabilityStatus model
   */
  interface AvailabilityStatusFieldRefs {
    readonly availability: FieldRef<"AvailabilityStatus", 'String'>
    readonly dates: FieldRef<"AvailabilityStatus", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilityStatus without action
   */
  export type AvailabilityStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityStatus
     */
    select?: AvailabilityStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilityStatus
     */
    omit?: AvailabilityStatusOmit<ExtArgs> | null
  }


  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    guests: number | null
    price: number | null
  }

  export type BookingSumAggregateOutputType = {
    guests: number | null
    price: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    experienceId: string | null
    serviceId: string | null
    userId: string | null
    status: $Enums.BookingStatus | null
    checkedStatus: boolean | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    price: number | null
    name: string | null
    email: string | null
    phone: string | null
    notes: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    experienceId: string | null
    serviceId: string | null
    userId: string | null
    status: $Enums.BookingStatus | null
    checkedStatus: boolean | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    price: number | null
    name: string | null
    email: string | null
    phone: string | null
    notes: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    roomId: number
    experienceId: number
    serviceId: number
    userId: number
    status: number
    checkedStatus: number
    checkIn: number
    checkOut: number
    guests: number
    price: number
    name: number
    email: number
    phone: number
    notes: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    guests?: true
    price?: true
  }

  export type BookingSumAggregateInputType = {
    guests?: true
    price?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    roomId?: true
    experienceId?: true
    serviceId?: true
    userId?: true
    status?: true
    checkedStatus?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    price?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    roomId?: true
    experienceId?: true
    serviceId?: true
    userId?: true
    status?: true
    checkedStatus?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    price?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    roomId?: true
    experienceId?: true
    serviceId?: true
    userId?: true
    status?: true
    checkedStatus?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    price?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    roomId: string | null
    experienceId: string | null
    serviceId: string | null
    userId: string | null
    status: $Enums.BookingStatus
    checkedStatus: boolean | null
    checkIn: Date
    checkOut: Date
    guests: number
    price: number | null
    name: string
    email: string
    phone: string | null
    notes: string | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    experienceId?: boolean
    serviceId?: boolean
    userId?: boolean
    status?: boolean
    checkedStatus?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    price?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    room?: boolean | booking$roomArgs<ExtArgs>
    experience?: boolean | booking$experienceArgs<ExtArgs>
    service?: boolean | booking$serviceArgs<ExtArgs>
    user?: boolean | booking$userArgs<ExtArgs>
    review?: boolean | booking$reviewArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type bookingSelectScalar = {
    id?: boolean
    roomId?: boolean
    experienceId?: boolean
    serviceId?: boolean
    userId?: boolean
    status?: boolean
    checkedStatus?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    price?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
  }

  export type bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "experienceId" | "serviceId" | "userId" | "status" | "checkedStatus" | "checkIn" | "checkOut" | "guests" | "price" | "name" | "email" | "phone" | "notes", ExtArgs["result"]["booking"]>
  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | booking$roomArgs<ExtArgs>
    experience?: boolean | booking$experienceArgs<ExtArgs>
    service?: boolean | booking$serviceArgs<ExtArgs>
    user?: boolean | booking$userArgs<ExtArgs>
    review?: boolean | booking$reviewArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking"
    objects: {
      room: Prisma.$roomPayload<ExtArgs> | null
      experience: Prisma.$experiencePayload<ExtArgs> | null
      service: Prisma.$servicePayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string | null
      experienceId: string | null
      serviceId: string | null
      userId: string | null
      status: $Enums.BookingStatus
      checkedStatus: boolean | null
      checkIn: Date
      checkOut: Date
      guests: number
      price: number | null
      name: string
      email: string
      phone: string | null
      notes: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<Prisma.$bookingPayload, S>

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking'], meta: { name: 'booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingFindUniqueArgs>(args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingFindFirstArgs>(args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingFindManyArgs>(args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends bookingCreateArgs>(args: SelectSubset<T, bookingCreateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingCreateManyArgs>(args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends bookingDeleteArgs>(args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingUpdateArgs>(args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingDeleteManyArgs>(args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingUpdateManyArgs>(args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends bookingUpsertArgs>(args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * @param {bookingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const booking = await prisma.booking.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: bookingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Booking.
     * @param {bookingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const booking = await prisma.booking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: bookingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
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
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking model
   */
  readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends booking$roomArgs<ExtArgs> = {}>(args?: Subset<T, booking$roomArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    experience<T extends booking$experienceArgs<ExtArgs> = {}>(args?: Subset<T, booking$experienceArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends booking$serviceArgs<ExtArgs> = {}>(args?: Subset<T, booking$serviceArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends booking$userArgs<ExtArgs> = {}>(args?: Subset<T, booking$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, booking$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<"booking", 'String'>
    readonly roomId: FieldRef<"booking", 'String'>
    readonly experienceId: FieldRef<"booking", 'String'>
    readonly serviceId: FieldRef<"booking", 'String'>
    readonly userId: FieldRef<"booking", 'String'>
    readonly status: FieldRef<"booking", 'BookingStatus'>
    readonly checkedStatus: FieldRef<"booking", 'Boolean'>
    readonly checkIn: FieldRef<"booking", 'DateTime'>
    readonly checkOut: FieldRef<"booking", 'DateTime'>
    readonly guests: FieldRef<"booking", 'Int'>
    readonly price: FieldRef<"booking", 'Int'>
    readonly name: FieldRef<"booking", 'String'>
    readonly email: FieldRef<"booking", 'String'>
    readonly phone: FieldRef<"booking", 'String'>
    readonly notes: FieldRef<"booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
  }

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * booking findRaw
   */
  export type bookingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * booking aggregateRaw
   */
  export type bookingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * booking.room
   */
  export type booking$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    where?: roomWhereInput
  }

  /**
   * booking.experience
   */
  export type booking$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    where?: experienceWhereInput
  }

  /**
   * booking.service
   */
  export type booking$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    where?: serviceWhereInput
  }

  /**
   * booking.user
   */
  export type booking$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * booking.review
   */
  export type booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
  }


  /**
   * Model experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    maxPax: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    maxPax: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    featured: boolean | null
    location: string | null
    price: number | null
    originalPrice: number | null
    maxPax: number | null
    description: string | null
    status: $Enums.Status | null
    availability: $Enums.Availability | null
    popular: boolean | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    featured: boolean | null
    location: string | null
    price: number | null
    originalPrice: number | null
    maxPax: number | null
    description: string | null
    status: $Enums.Status | null
    availability: $Enums.Availability | null
    popular: boolean | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    featured: number
    location: number
    price: number
    originalPrice: number
    maxPax: number
    description: number
    images: number
    amenities: number
    features: number
    status: number
    availability: number
    popular: number
    address: number
    cancellationPolicy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    price?: true
    originalPrice?: true
    maxPax?: true
  }

  export type ExperienceSumAggregateInputType = {
    price?: true
    originalPrice?: true
    maxPax?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    featured?: true
    location?: true
    price?: true
    originalPrice?: true
    maxPax?: true
    description?: true
    status?: true
    availability?: true
    popular?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    featured?: true
    location?: true
    price?: true
    originalPrice?: true
    maxPax?: true
    description?: true
    status?: true
    availability?: true
    popular?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    featured?: true
    location?: true
    price?: true
    originalPrice?: true
    maxPax?: true
    description?: true
    images?: true
    amenities?: true
    features?: true
    status?: true
    availability?: true
    popular?: true
    address?: true
    cancellationPolicy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experience to aggregate.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type experienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithAggregationInput | experienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: experienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    featured: boolean | null
    location: string
    price: number
    originalPrice: number | null
    maxPax: number
    description: string
    images: string[]
    amenities: string[]
    features: string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular: boolean | null
    address: string | null
    cancellationPolicy: string[]
    createdAt: Date
    updatedAt: Date
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends experienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type experienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    featured?: boolean
    location?: boolean
    price?: boolean
    originalPrice?: boolean
    maxPax?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    features?: boolean
    status?: boolean
    availability?: boolean
    popular?: boolean
    address?: boolean
    availabilityStatus?: boolean | AvailabilityStatusDefaultArgs<ExtArgs>
    cancellationPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | experience$userArgs<ExtArgs>
    bookings?: boolean | experience$bookingsArgs<ExtArgs>
    review?: boolean | experience$reviewArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>



  export type experienceSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    featured?: boolean
    location?: boolean
    price?: boolean
    originalPrice?: boolean
    maxPax?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    features?: boolean
    status?: boolean
    availability?: boolean
    popular?: boolean
    address?: boolean
    cancellationPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type experienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "featured" | "location" | "price" | "originalPrice" | "maxPax" | "description" | "images" | "amenities" | "features" | "status" | "availability" | "popular" | "address" | "availabilityStatus" | "cancellationPolicy" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>
  export type experienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | experience$userArgs<ExtArgs>
    bookings?: boolean | experience$bookingsArgs<ExtArgs>
    review?: boolean | experience$reviewArgs<ExtArgs>
    _count?: boolean | ExperienceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $experiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "experience"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      bookings: Prisma.$bookingPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      featured: boolean | null
      location: string
      price: number
      originalPrice: number | null
      maxPax: number
      description: string
      images: string[]
      amenities: string[]
      features: string[]
      status: $Enums.Status
      availability: $Enums.Availability
      popular: boolean | null
      address: string | null
      cancellationPolicy: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience"]>
    composites: {
      availabilityStatus: Prisma.$AvailabilityStatusPayload[]
    }
  }

  type experienceGetPayload<S extends boolean | null | undefined | experienceDefaultArgs> = $Result.GetResult<Prisma.$experiencePayload, S>

  type experienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<experienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface experienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['experience'], meta: { name: 'experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {experienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends experienceFindUniqueArgs>(args: SelectSubset<T, experienceFindUniqueArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {experienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends experienceFindUniqueOrThrowArgs>(args: SelectSubset<T, experienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends experienceFindFirstArgs>(args?: SelectSubset<T, experienceFindFirstArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends experienceFindFirstOrThrowArgs>(args?: SelectSubset<T, experienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends experienceFindManyArgs>(args?: SelectSubset<T, experienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {experienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends experienceCreateArgs>(args: SelectSubset<T, experienceCreateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {experienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends experienceCreateManyArgs>(args?: SelectSubset<T, experienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {experienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends experienceDeleteArgs>(args: SelectSubset<T, experienceDeleteArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {experienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends experienceUpdateArgs>(args: SelectSubset<T, experienceUpdateArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {experienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends experienceDeleteManyArgs>(args?: SelectSubset<T, experienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends experienceUpdateManyArgs>(args: SelectSubset<T, experienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {experienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends experienceUpsertArgs>(args: SelectSubset<T, experienceUpsertArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * @param {experienceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const experience = await prisma.experience.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: experienceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Experience.
     * @param {experienceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const experience = await prisma.experience.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: experienceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends experienceCountArgs>(
      args?: Subset<T, experienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {experienceGroupByArgs} args - Group by arguments.
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
      T extends experienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: experienceGroupByArgs['orderBy'] }
        : { orderBy?: experienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, experienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the experience model
   */
  readonly fields: experienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__experienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends experience$userArgs<ExtArgs> = {}>(args?: Subset<T, experience$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends experience$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, experience$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends experience$reviewArgs<ExtArgs> = {}>(args?: Subset<T, experience$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the experience model
   */
  interface experienceFieldRefs {
    readonly id: FieldRef<"experience", 'String'>
    readonly userId: FieldRef<"experience", 'String'>
    readonly name: FieldRef<"experience", 'String'>
    readonly featured: FieldRef<"experience", 'Boolean'>
    readonly location: FieldRef<"experience", 'String'>
    readonly price: FieldRef<"experience", 'Int'>
    readonly originalPrice: FieldRef<"experience", 'Int'>
    readonly maxPax: FieldRef<"experience", 'Int'>
    readonly description: FieldRef<"experience", 'String'>
    readonly images: FieldRef<"experience", 'String[]'>
    readonly amenities: FieldRef<"experience", 'String[]'>
    readonly features: FieldRef<"experience", 'String[]'>
    readonly status: FieldRef<"experience", 'Status'>
    readonly availability: FieldRef<"experience", 'Availability'>
    readonly popular: FieldRef<"experience", 'Boolean'>
    readonly address: FieldRef<"experience", 'String'>
    readonly cancellationPolicy: FieldRef<"experience", 'String[]'>
    readonly createdAt: FieldRef<"experience", 'DateTime'>
    readonly updatedAt: FieldRef<"experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * experience findUnique
   */
  export type experienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findUniqueOrThrow
   */
  export type experienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience findFirst
   */
  export type experienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findFirstOrThrow
   */
  export type experienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experience to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience findMany
   */
  export type experienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter, which experiences to fetch.
     */
    where?: experienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of experiences to fetch.
     */
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing experiences.
     */
    cursor?: experienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * experience create
   */
  export type experienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to create a experience.
     */
    data: XOR<experienceCreateInput, experienceUncheckedCreateInput>
  }

  /**
   * experience createMany
   */
  export type experienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many experiences.
     */
    data: experienceCreateManyInput | experienceCreateManyInput[]
  }

  /**
   * experience update
   */
  export type experienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The data needed to update a experience.
     */
    data: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
    /**
     * Choose, which experience to update.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience updateMany
   */
  export type experienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update experiences.
     */
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyInput>
    /**
     * Filter which experiences to update
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to update.
     */
    limit?: number
  }

  /**
   * experience upsert
   */
  export type experienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * The filter to search for the experience to update in case it exists.
     */
    where: experienceWhereUniqueInput
    /**
     * In case the experience found by the `where` argument doesn't exist, create a new experience with this data.
     */
    create: XOR<experienceCreateInput, experienceUncheckedCreateInput>
    /**
     * In case the experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<experienceUpdateInput, experienceUncheckedUpdateInput>
  }

  /**
   * experience delete
   */
  export type experienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    /**
     * Filter which experience to delete.
     */
    where: experienceWhereUniqueInput
  }

  /**
   * experience deleteMany
   */
  export type experienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which experiences to delete
     */
    where?: experienceWhereInput
    /**
     * Limit how many experiences to delete.
     */
    limit?: number
  }

  /**
   * experience findRaw
   */
  export type experienceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * experience aggregateRaw
   */
  export type experienceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * experience.user
   */
  export type experience$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * experience.bookings
   */
  export type experience$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * experience.review
   */
  export type experience$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * experience without action
   */
  export type experienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
  }


  /**
   * Model service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    maxPax: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    maxPax: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    featured: boolean | null
    location: string | null
    price: number | null
    originalPrice: number | null
    maxPax: number | null
    description: string | null
    status: $Enums.Status | null
    availability: $Enums.Availability | null
    popular: boolean | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    featured: boolean | null
    location: string | null
    price: number | null
    originalPrice: number | null
    maxPax: number | null
    description: string | null
    status: $Enums.Status | null
    availability: $Enums.Availability | null
    popular: boolean | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    featured: number
    location: number
    price: number
    originalPrice: number
    maxPax: number
    description: number
    images: number
    amenities: number
    features: number
    status: number
    availability: number
    popular: number
    address: number
    cancellationPolicy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
    originalPrice?: true
    maxPax?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
    originalPrice?: true
    maxPax?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    featured?: true
    location?: true
    price?: true
    originalPrice?: true
    maxPax?: true
    description?: true
    status?: true
    availability?: true
    popular?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    featured?: true
    location?: true
    price?: true
    originalPrice?: true
    maxPax?: true
    description?: true
    status?: true
    availability?: true
    popular?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    featured?: true
    location?: true
    price?: true
    originalPrice?: true
    maxPax?: true
    description?: true
    images?: true
    amenities?: true
    features?: true
    status?: true
    availability?: true
    popular?: true
    address?: true
    cancellationPolicy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service to aggregate.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type serviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceWhereInput
    orderBy?: serviceOrderByWithAggregationInput | serviceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: serviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    featured: boolean | null
    location: string
    price: number
    originalPrice: number | null
    maxPax: number
    description: string
    images: string[]
    amenities: string[]
    features: string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular: boolean | null
    address: string | null
    cancellationPolicy: string[]
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends serviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type serviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    featured?: boolean
    location?: boolean
    price?: boolean
    originalPrice?: boolean
    maxPax?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    features?: boolean
    status?: boolean
    availability?: boolean
    popular?: boolean
    address?: boolean
    availabilityStatus?: boolean | AvailabilityStatusDefaultArgs<ExtArgs>
    cancellationPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | service$userArgs<ExtArgs>
    bookings?: boolean | service$bookingsArgs<ExtArgs>
    review?: boolean | service$reviewArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type serviceSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    featured?: boolean
    location?: boolean
    price?: boolean
    originalPrice?: boolean
    maxPax?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    features?: boolean
    status?: boolean
    availability?: boolean
    popular?: boolean
    address?: boolean
    cancellationPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type serviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "featured" | "location" | "price" | "originalPrice" | "maxPax" | "description" | "images" | "amenities" | "features" | "status" | "availability" | "popular" | "address" | "availabilityStatus" | "cancellationPolicy" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type serviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | service$userArgs<ExtArgs>
    bookings?: boolean | service$bookingsArgs<ExtArgs>
    review?: boolean | service$reviewArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $servicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "service"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      bookings: Prisma.$bookingPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      featured: boolean | null
      location: string
      price: number
      originalPrice: number | null
      maxPax: number
      description: string
      images: string[]
      amenities: string[]
      features: string[]
      status: $Enums.Status
      availability: $Enums.Availability
      popular: boolean | null
      address: string | null
      cancellationPolicy: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {
      availabilityStatus: Prisma.$AvailabilityStatusPayload[]
    }
  }

  type serviceGetPayload<S extends boolean | null | undefined | serviceDefaultArgs> = $Result.GetResult<Prisma.$servicePayload, S>

  type serviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface serviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['service'], meta: { name: 'service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {serviceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serviceFindUniqueArgs>(args: SelectSubset<T, serviceFindUniqueArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serviceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serviceFindUniqueOrThrowArgs>(args: SelectSubset<T, serviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serviceFindFirstArgs>(args?: SelectSubset<T, serviceFindFirstArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serviceFindFirstOrThrowArgs>(args?: SelectSubset<T, serviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serviceFindManyArgs>(args?: SelectSubset<T, serviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {serviceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends serviceCreateArgs>(args: SelectSubset<T, serviceCreateArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {serviceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serviceCreateManyArgs>(args?: SelectSubset<T, serviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {serviceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends serviceDeleteArgs>(args: SelectSubset<T, serviceDeleteArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {serviceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serviceUpdateArgs>(args: SelectSubset<T, serviceUpdateArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {serviceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serviceDeleteManyArgs>(args?: SelectSubset<T, serviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serviceUpdateManyArgs>(args: SelectSubset<T, serviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {serviceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends serviceUpsertArgs>(args: SelectSubset<T, serviceUpsertArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * @param {serviceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const service = await prisma.service.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: serviceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Service.
     * @param {serviceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const service = await prisma.service.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: serviceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends serviceCountArgs>(
      args?: Subset<T, serviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceGroupByArgs} args - Group by arguments.
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
      T extends serviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviceGroupByArgs['orderBy'] }
        : { orderBy?: serviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, serviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the service model
   */
  readonly fields: serviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends service$userArgs<ExtArgs> = {}>(args?: Subset<T, service$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends service$reviewArgs<ExtArgs> = {}>(args?: Subset<T, service$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the service model
   */
  interface serviceFieldRefs {
    readonly id: FieldRef<"service", 'String'>
    readonly userId: FieldRef<"service", 'String'>
    readonly name: FieldRef<"service", 'String'>
    readonly featured: FieldRef<"service", 'Boolean'>
    readonly location: FieldRef<"service", 'String'>
    readonly price: FieldRef<"service", 'Int'>
    readonly originalPrice: FieldRef<"service", 'Int'>
    readonly maxPax: FieldRef<"service", 'Int'>
    readonly description: FieldRef<"service", 'String'>
    readonly images: FieldRef<"service", 'String[]'>
    readonly amenities: FieldRef<"service", 'String[]'>
    readonly features: FieldRef<"service", 'String[]'>
    readonly status: FieldRef<"service", 'Status'>
    readonly availability: FieldRef<"service", 'Availability'>
    readonly popular: FieldRef<"service", 'Boolean'>
    readonly address: FieldRef<"service", 'String'>
    readonly cancellationPolicy: FieldRef<"service", 'String[]'>
    readonly createdAt: FieldRef<"service", 'DateTime'>
    readonly updatedAt: FieldRef<"service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * service findUnique
   */
  export type serviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service findUniqueOrThrow
   */
  export type serviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service findFirst
   */
  export type serviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service findFirstOrThrow
   */
  export type serviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service findMany
   */
  export type serviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service create
   */
  export type serviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The data needed to create a service.
     */
    data: XOR<serviceCreateInput, serviceUncheckedCreateInput>
  }

  /**
   * service createMany
   */
  export type serviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: serviceCreateManyInput | serviceCreateManyInput[]
  }

  /**
   * service update
   */
  export type serviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The data needed to update a service.
     */
    data: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
    /**
     * Choose, which service to update.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service updateMany
   */
  export type serviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * service upsert
   */
  export type serviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The filter to search for the service to update in case it exists.
     */
    where: serviceWhereUniqueInput
    /**
     * In case the service found by the `where` argument doesn't exist, create a new service with this data.
     */
    create: XOR<serviceCreateInput, serviceUncheckedCreateInput>
    /**
     * In case the service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
  }

  /**
   * service delete
   */
  export type serviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter which service to delete.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service deleteMany
   */
  export type serviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * service findRaw
   */
  export type serviceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * service aggregateRaw
   */
  export type serviceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * service.user
   */
  export type service$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * service.bookings
   */
  export type service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * service.review
   */
  export type service$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * service without action
   */
  export type serviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
  }


  /**
   * Model availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    guests: number | null
    rooms: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    guests: number | null
    rooms: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    guests: number | null
    rooms: number | null
    maxCheckIn: Date | null
    maxCheckOut: Date | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    guests: number | null
    rooms: number | null
    maxCheckIn: Date | null
    maxCheckOut: Date | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    guests: number
    rooms: number
    maxCheckIn: number
    maxCheckOut: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    guests?: true
    rooms?: true
  }

  export type AvailabilitySumAggregateInputType = {
    guests?: true
    rooms?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    guests?: true
    rooms?: true
    maxCheckIn?: true
    maxCheckOut?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    guests?: true
    rooms?: true
    maxCheckIn?: true
    maxCheckOut?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    guests?: true
    rooms?: true
    maxCheckIn?: true
    maxCheckOut?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which availability to aggregate.
     */
    where?: availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilityOrderByWithRelationInput | availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type availabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: availabilityWhereInput
    orderBy?: availabilityOrderByWithAggregationInput | availabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: availabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    guests: number
    rooms: number
    maxCheckIn: Date | null
    maxCheckOut: Date | null
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends availabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type availabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guests?: boolean
    rooms?: boolean
    maxCheckIn?: boolean
    maxCheckOut?: boolean
  }, ExtArgs["result"]["availability"]>



  export type availabilitySelectScalar = {
    id?: boolean
    guests?: boolean
    rooms?: boolean
    maxCheckIn?: boolean
    maxCheckOut?: boolean
  }

  export type availabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guests" | "rooms" | "maxCheckIn" | "maxCheckOut", ExtArgs["result"]["availability"]>

  export type $availabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "availability"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guests: number
      rooms: number
      maxCheckIn: Date | null
      maxCheckOut: Date | null
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type availabilityGetPayload<S extends boolean | null | undefined | availabilityDefaultArgs> = $Result.GetResult<Prisma.$availabilityPayload, S>

  type availabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<availabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface availabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['availability'], meta: { name: 'availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {availabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends availabilityFindUniqueArgs>(args: SelectSubset<T, availabilityFindUniqueArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {availabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends availabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, availabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends availabilityFindFirstArgs>(args?: SelectSubset<T, availabilityFindFirstArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends availabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, availabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends availabilityFindManyArgs>(args?: SelectSubset<T, availabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {availabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends availabilityCreateArgs>(args: SelectSubset<T, availabilityCreateArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {availabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends availabilityCreateManyArgs>(args?: SelectSubset<T, availabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Availability.
     * @param {availabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends availabilityDeleteArgs>(args: SelectSubset<T, availabilityDeleteArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {availabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends availabilityUpdateArgs>(args: SelectSubset<T, availabilityUpdateArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {availabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends availabilityDeleteManyArgs>(args?: SelectSubset<T, availabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends availabilityUpdateManyArgs>(args: SelectSubset<T, availabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Availability.
     * @param {availabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends availabilityUpsertArgs>(args: SelectSubset<T, availabilityUpsertArgs<ExtArgs>>): Prisma__availabilityClient<$Result.GetResult<Prisma.$availabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * @param {availabilityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const availability = await prisma.availability.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: availabilityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Availability.
     * @param {availabilityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const availability = await prisma.availability.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: availabilityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends availabilityCountArgs>(
      args?: Subset<T, availabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {availabilityGroupByArgs} args - Group by arguments.
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
      T extends availabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: availabilityGroupByArgs['orderBy'] }
        : { orderBy?: availabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, availabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the availability model
   */
  readonly fields: availabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__availabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the availability model
   */
  interface availabilityFieldRefs {
    readonly id: FieldRef<"availability", 'String'>
    readonly guests: FieldRef<"availability", 'Int'>
    readonly rooms: FieldRef<"availability", 'Int'>
    readonly maxCheckIn: FieldRef<"availability", 'DateTime'>
    readonly maxCheckOut: FieldRef<"availability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * availability findUnique
   */
  export type availabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * Filter, which availability to fetch.
     */
    where: availabilityWhereUniqueInput
  }

  /**
   * availability findUniqueOrThrow
   */
  export type availabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * Filter, which availability to fetch.
     */
    where: availabilityWhereUniqueInput
  }

  /**
   * availability findFirst
   */
  export type availabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * Filter, which availability to fetch.
     */
    where?: availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilityOrderByWithRelationInput | availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for availabilities.
     */
    cursor?: availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * availability findFirstOrThrow
   */
  export type availabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * Filter, which availability to fetch.
     */
    where?: availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilityOrderByWithRelationInput | availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for availabilities.
     */
    cursor?: availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * availability findMany
   */
  export type availabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * Filter, which availabilities to fetch.
     */
    where?: availabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of availabilities to fetch.
     */
    orderBy?: availabilityOrderByWithRelationInput | availabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing availabilities.
     */
    cursor?: availabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * availability create
   */
  export type availabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * The data needed to create a availability.
     */
    data?: XOR<availabilityCreateInput, availabilityUncheckedCreateInput>
  }

  /**
   * availability createMany
   */
  export type availabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many availabilities.
     */
    data: availabilityCreateManyInput | availabilityCreateManyInput[]
  }

  /**
   * availability update
   */
  export type availabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * The data needed to update a availability.
     */
    data: XOR<availabilityUpdateInput, availabilityUncheckedUpdateInput>
    /**
     * Choose, which availability to update.
     */
    where: availabilityWhereUniqueInput
  }

  /**
   * availability updateMany
   */
  export type availabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update availabilities.
     */
    data: XOR<availabilityUpdateManyMutationInput, availabilityUncheckedUpdateManyInput>
    /**
     * Filter which availabilities to update
     */
    where?: availabilityWhereInput
    /**
     * Limit how many availabilities to update.
     */
    limit?: number
  }

  /**
   * availability upsert
   */
  export type availabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * The filter to search for the availability to update in case it exists.
     */
    where: availabilityWhereUniqueInput
    /**
     * In case the availability found by the `where` argument doesn't exist, create a new availability with this data.
     */
    create: XOR<availabilityCreateInput, availabilityUncheckedCreateInput>
    /**
     * In case the availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<availabilityUpdateInput, availabilityUncheckedUpdateInput>
  }

  /**
   * availability delete
   */
  export type availabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
    /**
     * Filter which availability to delete.
     */
    where: availabilityWhereUniqueInput
  }

  /**
   * availability deleteMany
   */
  export type availabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which availabilities to delete
     */
    where?: availabilityWhereInput
    /**
     * Limit how many availabilities to delete.
     */
    limit?: number
  }

  /**
   * availability findRaw
   */
  export type availabilityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * availability aggregateRaw
   */
  export type availabilityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * availability without action
   */
  export type availabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the availability
     */
    select?: availabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the availability
     */
    omit?: availabilityOmit<ExtArgs> | null
  }


  /**
   * Model room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    size: number | null
    maxGuests: number | null
  }

  export type RoomSumAggregateOutputType = {
    price: number | null
    originalPrice: number | null
    size: number | null
    maxGuests: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ngoziId: string | null
    name: string | null
    category: string | null
    featured: boolean | null
    location: string | null
    country: string | null
    price: number | null
    originalPrice: number | null
    size: number | null
    maxGuests: number | null
    bedType: string | null
    view: string | null
    description: string | null
    status: $Enums.Status | null
    availability: $Enums.Availability | null
    popular: boolean | null
    newlyRenovated: boolean | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ngoziId: string | null
    name: string | null
    category: string | null
    featured: boolean | null
    location: string | null
    country: string | null
    price: number | null
    originalPrice: number | null
    size: number | null
    maxGuests: number | null
    bedType: string | null
    view: string | null
    description: string | null
    status: $Enums.Status | null
    availability: $Enums.Availability | null
    popular: boolean | null
    newlyRenovated: boolean | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    userId: number
    ngoziId: number
    name: number
    category: number
    featured: number
    location: number
    country: number
    price: number
    originalPrice: number
    size: number
    maxGuests: number
    bedType: number
    view: number
    description: number
    images: number
    amenities: number
    features: number
    services: number
    status: number
    availability: number
    popular: number
    newlyRenovated: number
    address: number
    cancellationPolicy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    price?: true
    originalPrice?: true
    size?: true
    maxGuests?: true
  }

  export type RoomSumAggregateInputType = {
    price?: true
    originalPrice?: true
    size?: true
    maxGuests?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    userId?: true
    ngoziId?: true
    name?: true
    category?: true
    featured?: true
    location?: true
    country?: true
    price?: true
    originalPrice?: true
    size?: true
    maxGuests?: true
    bedType?: true
    view?: true
    description?: true
    status?: true
    availability?: true
    popular?: true
    newlyRenovated?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    userId?: true
    ngoziId?: true
    name?: true
    category?: true
    featured?: true
    location?: true
    country?: true
    price?: true
    originalPrice?: true
    size?: true
    maxGuests?: true
    bedType?: true
    view?: true
    description?: true
    status?: true
    availability?: true
    popular?: true
    newlyRenovated?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    userId?: true
    ngoziId?: true
    name?: true
    category?: true
    featured?: true
    location?: true
    country?: true
    price?: true
    originalPrice?: true
    size?: true
    maxGuests?: true
    bedType?: true
    view?: true
    description?: true
    images?: true
    amenities?: true
    features?: true
    services?: true
    status?: true
    availability?: true
    popular?: true
    newlyRenovated?: true
    address?: true
    cancellationPolicy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room to aggregate.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomWhereInput
    orderBy?: roomOrderByWithAggregationInput | roomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    userId: string | null
    ngoziId: string | null
    name: string
    category: string
    featured: boolean | null
    location: string | null
    country: string | null
    price: number
    originalPrice: number | null
    size: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images: string[]
    amenities: string[]
    features: string[]
    services: string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular: boolean | null
    newlyRenovated: boolean | null
    address: string | null
    cancellationPolicy: string[]
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ngoziId?: boolean
    name?: boolean
    category?: boolean
    featured?: boolean
    location?: boolean
    country?: boolean
    price?: boolean
    originalPrice?: boolean
    size?: boolean
    maxGuests?: boolean
    bedType?: boolean
    view?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    features?: boolean
    services?: boolean
    status?: boolean
    availability?: boolean
    popular?: boolean
    newlyRenovated?: boolean
    address?: boolean
    availabilityStatus?: boolean | AvailabilityStatusDefaultArgs<ExtArgs>
    cancellationPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | room$userArgs<ExtArgs>
    bookings?: boolean | room$bookingsArgs<ExtArgs>
    review?: boolean | room$reviewArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type roomSelectScalar = {
    id?: boolean
    userId?: boolean
    ngoziId?: boolean
    name?: boolean
    category?: boolean
    featured?: boolean
    location?: boolean
    country?: boolean
    price?: boolean
    originalPrice?: boolean
    size?: boolean
    maxGuests?: boolean
    bedType?: boolean
    view?: boolean
    description?: boolean
    images?: boolean
    amenities?: boolean
    features?: boolean
    services?: boolean
    status?: boolean
    availability?: boolean
    popular?: boolean
    newlyRenovated?: boolean
    address?: boolean
    cancellationPolicy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ngoziId" | "name" | "category" | "featured" | "location" | "country" | "price" | "originalPrice" | "size" | "maxGuests" | "bedType" | "view" | "description" | "images" | "amenities" | "features" | "services" | "status" | "availability" | "popular" | "newlyRenovated" | "address" | "availabilityStatus" | "cancellationPolicy" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | room$userArgs<ExtArgs>
    bookings?: boolean | room$bookingsArgs<ExtArgs>
    review?: boolean | room$reviewArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      bookings: Prisma.$bookingPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      ngoziId: string | null
      name: string
      category: string
      featured: boolean | null
      location: string | null
      country: string | null
      price: number
      originalPrice: number | null
      size: number | null
      maxGuests: number
      bedType: string
      view: string
      description: string
      images: string[]
      amenities: string[]
      features: string[]
      services: string[]
      status: $Enums.Status
      availability: $Enums.Availability
      popular: boolean | null
      newlyRenovated: boolean | null
      address: string | null
      cancellationPolicy: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {
      availabilityStatus: Prisma.$AvailabilityStatusPayload[]
    }
  }

  type roomGetPayload<S extends boolean | null | undefined | roomDefaultArgs> = $Result.GetResult<Prisma.$roomPayload, S>

  type roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room'], meta: { name: 'room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {roomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomFindUniqueArgs>(args: SelectSubset<T, roomFindUniqueArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomFindUniqueOrThrowArgs>(args: SelectSubset<T, roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomFindFirstArgs>(args?: SelectSubset<T, roomFindFirstArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomFindFirstOrThrowArgs>(args?: SelectSubset<T, roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roomFindManyArgs>(args?: SelectSubset<T, roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {roomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends roomCreateArgs>(args: SelectSubset<T, roomCreateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomCreateManyArgs>(args?: SelectSubset<T, roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {roomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends roomDeleteArgs>(args: SelectSubset<T, roomDeleteArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {roomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomUpdateArgs>(args: SelectSubset<T, roomUpdateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomDeleteManyArgs>(args?: SelectSubset<T, roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomUpdateManyArgs>(args: SelectSubset<T, roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {roomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends roomUpsertArgs>(args: SelectSubset<T, roomUpsertArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * @param {roomFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const room = await prisma.room.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: roomFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Room.
     * @param {roomAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const room = await prisma.room.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: roomAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomCountArgs>(
      args?: Subset<T, roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomGroupByArgs} args - Group by arguments.
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
      T extends roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomGroupByArgs['orderBy'] }
        : { orderBy?: roomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room model
   */
  readonly fields: roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends room$userArgs<ExtArgs> = {}>(args?: Subset<T, room$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends room$reviewArgs<ExtArgs> = {}>(args?: Subset<T, room$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the room model
   */
  interface roomFieldRefs {
    readonly id: FieldRef<"room", 'String'>
    readonly userId: FieldRef<"room", 'String'>
    readonly ngoziId: FieldRef<"room", 'String'>
    readonly name: FieldRef<"room", 'String'>
    readonly category: FieldRef<"room", 'String'>
    readonly featured: FieldRef<"room", 'Boolean'>
    readonly location: FieldRef<"room", 'String'>
    readonly country: FieldRef<"room", 'String'>
    readonly price: FieldRef<"room", 'Int'>
    readonly originalPrice: FieldRef<"room", 'Int'>
    readonly size: FieldRef<"room", 'Int'>
    readonly maxGuests: FieldRef<"room", 'Int'>
    readonly bedType: FieldRef<"room", 'String'>
    readonly view: FieldRef<"room", 'String'>
    readonly description: FieldRef<"room", 'String'>
    readonly images: FieldRef<"room", 'String[]'>
    readonly amenities: FieldRef<"room", 'String[]'>
    readonly features: FieldRef<"room", 'String[]'>
    readonly services: FieldRef<"room", 'String[]'>
    readonly status: FieldRef<"room", 'Status'>
    readonly availability: FieldRef<"room", 'Availability'>
    readonly popular: FieldRef<"room", 'Boolean'>
    readonly newlyRenovated: FieldRef<"room", 'Boolean'>
    readonly address: FieldRef<"room", 'String'>
    readonly cancellationPolicy: FieldRef<"room", 'String[]'>
    readonly createdAt: FieldRef<"room", 'DateTime'>
    readonly updatedAt: FieldRef<"room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * room findUnique
   */
  export type roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findUniqueOrThrow
   */
  export type roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findFirst
   */
  export type roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findFirstOrThrow
   */
  export type roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findMany
   */
  export type roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room create
   */
  export type roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to create a room.
     */
    data: XOR<roomCreateInput, roomUncheckedCreateInput>
  }

  /**
   * room createMany
   */
  export type roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
  }

  /**
   * room update
   */
  export type roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to update a room.
     */
    data: XOR<roomUpdateInput, roomUncheckedUpdateInput>
    /**
     * Choose, which room to update.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room updateMany
   */
  export type roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * room upsert
   */
  export type roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The filter to search for the room to update in case it exists.
     */
    where: roomWhereUniqueInput
    /**
     * In case the room found by the `where` argument doesn't exist, create a new room with this data.
     */
    create: XOR<roomCreateInput, roomUncheckedCreateInput>
    /**
     * In case the room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomUpdateInput, roomUncheckedUpdateInput>
  }

  /**
   * room delete
   */
  export type roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter which room to delete.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room deleteMany
   */
  export type roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * room findRaw
   */
  export type roomFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * room aggregateRaw
   */
  export type roomAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * room.user
   */
  export type room$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * room.bookings
   */
  export type room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * room.review
   */
  export type room$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * room without action
   */
  export type roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    imageUrl: string | null
    role: string | null
    receiveMarketing: boolean | null
    stripeAccountId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    imageUrl: string | null
    role: string | null
    receiveMarketing: boolean | null
    stripeAccountId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    email: number
    firstName: number
    lastName: number
    imageUrl: number
    role: number
    receiveMarketing: number
    stripeAccountId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    role?: true
    receiveMarketing?: true
    stripeAccountId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    role?: true
    receiveMarketing?: true
    stripeAccountId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    role?: true
    receiveMarketing?: true
    stripeAccountId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing: boolean | null
    stripeAccountId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    role?: boolean
    receiveMarketing?: boolean
    stripeAccountId?: boolean
    review?: boolean | user$reviewArgs<ExtArgs>
    booking?: boolean | user$bookingArgs<ExtArgs>
    room?: boolean | user$roomArgs<ExtArgs>
    experience?: boolean | user$experienceArgs<ExtArgs>
    service?: boolean | user$serviceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    userId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    role?: boolean
    receiveMarketing?: boolean
    stripeAccountId?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "email" | "firstName" | "lastName" | "imageUrl" | "role" | "receiveMarketing" | "stripeAccountId", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | user$reviewArgs<ExtArgs>
    booking?: boolean | user$bookingArgs<ExtArgs>
    room?: boolean | user$roomArgs<ExtArgs>
    experience?: boolean | user$experienceArgs<ExtArgs>
    service?: boolean | user$serviceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      review: Prisma.$reviewPayload<ExtArgs>[]
      booking: Prisma.$bookingPayload<ExtArgs>[]
      room: Prisma.$roomPayload<ExtArgs>[]
      experience: Prisma.$experiencePayload<ExtArgs>[]
      service: Prisma.$servicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      email: string
      firstName: string
      lastName: string
      imageUrl: string
      role: string
      receiveMarketing: boolean | null
      stripeAccountId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: userFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: userAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends user$reviewArgs<ExtArgs> = {}>(args?: Subset<T, user$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking<T extends user$bookingArgs<ExtArgs> = {}>(args?: Subset<T, user$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room<T extends user$roomArgs<ExtArgs> = {}>(args?: Subset<T, user$roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experience<T extends user$experienceArgs<ExtArgs> = {}>(args?: Subset<T, user$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    service<T extends user$serviceArgs<ExtArgs> = {}>(args?: Subset<T, user$serviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly userId: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly firstName: FieldRef<"user", 'String'>
    readonly lastName: FieldRef<"user", 'String'>
    readonly imageUrl: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
    readonly receiveMarketing: FieldRef<"user", 'Boolean'>
    readonly stripeAccountId: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user findRaw
   */
  export type userFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user aggregateRaw
   */
  export type userAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user.booking
   */
  export type user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * user.room
   */
  export type user$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    where?: roomWhereInput
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    cursor?: roomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * user.experience
   */
  export type user$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    where?: experienceWhereInput
    orderBy?: experienceOrderByWithRelationInput | experienceOrderByWithRelationInput[]
    cursor?: experienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * user.service
   */
  export type user$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    where?: serviceWhereInput
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    cursor?: serviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    experienceId: string | null
    serviceId: string | null
    bookingId: string | null
    review: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    experienceId: string | null
    serviceId: string | null
    bookingId: string | null
    review: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    experienceId: number
    serviceId: number
    bookingId: number
    review: number
    rating: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    experienceId?: true
    serviceId?: true
    bookingId?: true
    review?: true
    rating?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    experienceId?: true
    serviceId?: true
    bookingId?: true
    review?: true
    rating?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    experienceId?: true
    serviceId?: true
    bookingId?: true
    review?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userId: string | null
    roomId: string | null
    experienceId: string | null
    serviceId: string | null
    bookingId: string
    review: string
    rating: number
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    experienceId?: boolean
    serviceId?: boolean
    bookingId?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    user?: boolean | review$userArgs<ExtArgs>
    room?: boolean | review$roomArgs<ExtArgs>
    experience?: boolean | review$experienceArgs<ExtArgs>
    service?: boolean | review$serviceArgs<ExtArgs>
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type reviewSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    experienceId?: boolean
    serviceId?: boolean
    bookingId?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "experienceId" | "serviceId" | "bookingId" | "review" | "rating" | "createdAt", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | review$userArgs<ExtArgs>
    room?: boolean | review$roomArgs<ExtArgs>
    experience?: boolean | review$experienceArgs<ExtArgs>
    service?: boolean | review$serviceArgs<ExtArgs>
    booking?: boolean | bookingDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      room: Prisma.$roomPayload<ExtArgs> | null
      experience: Prisma.$experiencePayload<ExtArgs> | null
      service: Prisma.$servicePayload<ExtArgs> | null
      booking: Prisma.$bookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      roomId: string | null
      experienceId: string | null
      serviceId: string | null
      bookingId: string
      review: string
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {reviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: reviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {reviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: reviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends review$userArgs<ExtArgs> = {}>(args?: Subset<T, review$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    room<T extends review$roomArgs<ExtArgs> = {}>(args?: Subset<T, review$roomArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    experience<T extends review$experienceArgs<ExtArgs> = {}>(args?: Subset<T, review$experienceArgs<ExtArgs>>): Prisma__experienceClient<$Result.GetResult<Prisma.$experiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends review$serviceArgs<ExtArgs> = {}>(args?: Subset<T, review$serviceArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    booking<T extends bookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookingDefaultArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'String'>
    readonly userId: FieldRef<"review", 'String'>
    readonly roomId: FieldRef<"review", 'String'>
    readonly experienceId: FieldRef<"review", 'String'>
    readonly serviceId: FieldRef<"review", 'String'>
    readonly bookingId: FieldRef<"review", 'String'>
    readonly review: FieldRef<"review", 'String'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly createdAt: FieldRef<"review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review findRaw
   */
  export type reviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * review aggregateRaw
   */
  export type reviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * review.user
   */
  export type review$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * review.room
   */
  export type review$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    where?: roomWhereInput
  }

  /**
   * review.experience
   */
  export type review$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the experience
     */
    select?: experienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the experience
     */
    omit?: experienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: experienceInclude<ExtArgs> | null
    where?: experienceWhereInput
  }

  /**
   * review.service
   */
  export type review$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    where?: serviceWhereInput
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BookingScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    experienceId: 'experienceId',
    serviceId: 'serviceId',
    userId: 'userId',
    status: 'status',
    checkedStatus: 'checkedStatus',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    guests: 'guests',
    price: 'price',
    name: 'name',
    email: 'email',
    phone: 'phone',
    notes: 'notes'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    featured: 'featured',
    location: 'location',
    price: 'price',
    originalPrice: 'originalPrice',
    maxPax: 'maxPax',
    description: 'description',
    images: 'images',
    amenities: 'amenities',
    features: 'features',
    status: 'status',
    availability: 'availability',
    popular: 'popular',
    address: 'address',
    cancellationPolicy: 'cancellationPolicy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    featured: 'featured',
    location: 'location',
    price: 'price',
    originalPrice: 'originalPrice',
    maxPax: 'maxPax',
    description: 'description',
    images: 'images',
    amenities: 'amenities',
    features: 'features',
    status: 'status',
    availability: 'availability',
    popular: 'popular',
    address: 'address',
    cancellationPolicy: 'cancellationPolicy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    guests: 'guests',
    rooms: 'rooms',
    maxCheckIn: 'maxCheckIn',
    maxCheckOut: 'maxCheckOut'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ngoziId: 'ngoziId',
    name: 'name',
    category: 'category',
    featured: 'featured',
    location: 'location',
    country: 'country',
    price: 'price',
    originalPrice: 'originalPrice',
    size: 'size',
    maxGuests: 'maxGuests',
    bedType: 'bedType',
    view: 'view',
    description: 'description',
    images: 'images',
    amenities: 'amenities',
    features: 'features',
    services: 'services',
    status: 'status',
    availability: 'availability',
    popular: 'popular',
    newlyRenovated: 'newlyRenovated',
    address: 'address',
    cancellationPolicy: 'cancellationPolicy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    imageUrl: 'imageUrl',
    role: 'role',
    receiveMarketing: 'receiveMarketing',
    stripeAccountId: 'stripeAccountId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    experienceId: 'experienceId',
    serviceId: 'serviceId',
    bookingId: 'bookingId',
    review: 'review',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Availability'
   */
  export type EnumAvailabilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Availability'>
    


  /**
   * Reference to a field of type 'Availability[]'
   */
  export type ListEnumAvailabilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Availability[]'>
    


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


  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    id?: StringFilter<"booking"> | string
    roomId?: StringNullableFilter<"booking"> | string | null
    experienceId?: StringNullableFilter<"booking"> | string | null
    serviceId?: StringNullableFilter<"booking"> | string | null
    userId?: StringNullableFilter<"booking"> | string | null
    status?: EnumBookingStatusFilter<"booking"> | $Enums.BookingStatus
    checkedStatus?: BoolNullableFilter<"booking"> | boolean | null
    checkIn?: DateTimeFilter<"booking"> | Date | string
    checkOut?: DateTimeFilter<"booking"> | Date | string
    guests?: IntFilter<"booking"> | number
    price?: IntNullableFilter<"booking"> | number | null
    name?: StringFilter<"booking"> | string
    email?: StringFilter<"booking"> | string
    phone?: StringNullableFilter<"booking"> | string | null
    notes?: StringNullableFilter<"booking"> | string | null
    room?: XOR<RoomNullableScalarRelationFilter, roomWhereInput> | null
    experience?: XOR<ExperienceNullableScalarRelationFilter, experienceWhereInput> | null
    service?: XOR<ServiceNullableScalarRelationFilter, serviceWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    review?: ReviewListRelationFilter
  }

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    checkedStatus?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    price?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    room?: roomOrderByWithRelationInput
    experience?: experienceOrderByWithRelationInput
    service?: serviceOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    roomId?: StringNullableFilter<"booking"> | string | null
    experienceId?: StringNullableFilter<"booking"> | string | null
    serviceId?: StringNullableFilter<"booking"> | string | null
    userId?: StringNullableFilter<"booking"> | string | null
    status?: EnumBookingStatusFilter<"booking"> | $Enums.BookingStatus
    checkedStatus?: BoolNullableFilter<"booking"> | boolean | null
    checkIn?: DateTimeFilter<"booking"> | Date | string
    checkOut?: DateTimeFilter<"booking"> | Date | string
    guests?: IntFilter<"booking"> | number
    price?: IntNullableFilter<"booking"> | number | null
    name?: StringFilter<"booking"> | string
    email?: StringFilter<"booking"> | string
    phone?: StringNullableFilter<"booking"> | string | null
    notes?: StringNullableFilter<"booking"> | string | null
    room?: XOR<RoomNullableScalarRelationFilter, roomWhereInput> | null
    experience?: XOR<ExperienceNullableScalarRelationFilter, experienceWhereInput> | null
    service?: XOR<ServiceNullableScalarRelationFilter, serviceWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    review?: ReviewListRelationFilter
  }, "id">

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    checkedStatus?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    price?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    _count?: bookingCountOrderByAggregateInput
    _avg?: bookingAvgOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
    _sum?: bookingSumOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    OR?: bookingScalarWhereWithAggregatesInput[]
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"booking"> | string
    roomId?: StringNullableWithAggregatesFilter<"booking"> | string | null
    experienceId?: StringNullableWithAggregatesFilter<"booking"> | string | null
    serviceId?: StringNullableWithAggregatesFilter<"booking"> | string | null
    userId?: StringNullableWithAggregatesFilter<"booking"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"booking"> | $Enums.BookingStatus
    checkedStatus?: BoolNullableWithAggregatesFilter<"booking"> | boolean | null
    checkIn?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    guests?: IntWithAggregatesFilter<"booking"> | number
    price?: IntNullableWithAggregatesFilter<"booking"> | number | null
    name?: StringWithAggregatesFilter<"booking"> | string
    email?: StringWithAggregatesFilter<"booking"> | string
    phone?: StringNullableWithAggregatesFilter<"booking"> | string | null
    notes?: StringNullableWithAggregatesFilter<"booking"> | string | null
  }

  export type experienceWhereInput = {
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    id?: StringFilter<"experience"> | string
    userId?: StringNullableFilter<"experience"> | string | null
    name?: StringFilter<"experience"> | string
    featured?: BoolNullableFilter<"experience"> | boolean | null
    location?: StringFilter<"experience"> | string
    price?: IntFilter<"experience"> | number
    originalPrice?: IntNullableFilter<"experience"> | number | null
    maxPax?: IntFilter<"experience"> | number
    description?: StringFilter<"experience"> | string
    images?: StringNullableListFilter<"experience">
    amenities?: StringNullableListFilter<"experience">
    features?: StringNullableListFilter<"experience">
    status?: EnumStatusFilter<"experience"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"experience"> | $Enums.Availability
    popular?: BoolNullableFilter<"experience"> | boolean | null
    address?: StringNullableFilter<"experience"> | string | null
    availabilityStatus?: AvailabilityStatusCompositeListFilter | AvailabilityStatusObjectEqualityInput[]
    cancellationPolicy?: StringNullableListFilter<"experience">
    createdAt?: DateTimeFilter<"experience"> | Date | string
    updatedAt?: DateTimeFilter<"experience"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    bookings?: BookingListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type experienceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    availabilityStatus?: AvailabilityStatusOrderByCompositeAggregateInput
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    bookings?: bookingOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type experienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: experienceWhereInput | experienceWhereInput[]
    OR?: experienceWhereInput[]
    NOT?: experienceWhereInput | experienceWhereInput[]
    userId?: StringNullableFilter<"experience"> | string | null
    name?: StringFilter<"experience"> | string
    featured?: BoolNullableFilter<"experience"> | boolean | null
    location?: StringFilter<"experience"> | string
    price?: IntFilter<"experience"> | number
    originalPrice?: IntNullableFilter<"experience"> | number | null
    maxPax?: IntFilter<"experience"> | number
    description?: StringFilter<"experience"> | string
    images?: StringNullableListFilter<"experience">
    amenities?: StringNullableListFilter<"experience">
    features?: StringNullableListFilter<"experience">
    status?: EnumStatusFilter<"experience"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"experience"> | $Enums.Availability
    popular?: BoolNullableFilter<"experience"> | boolean | null
    address?: StringNullableFilter<"experience"> | string | null
    availabilityStatus?: AvailabilityStatusCompositeListFilter | AvailabilityStatusObjectEqualityInput[]
    cancellationPolicy?: StringNullableListFilter<"experience">
    createdAt?: DateTimeFilter<"experience"> | Date | string
    updatedAt?: DateTimeFilter<"experience"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    bookings?: BookingListRelationFilter
    review?: ReviewListRelationFilter
  }, "id">

  export type experienceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: experienceCountOrderByAggregateInput
    _avg?: experienceAvgOrderByAggregateInput
    _max?: experienceMaxOrderByAggregateInput
    _min?: experienceMinOrderByAggregateInput
    _sum?: experienceSumOrderByAggregateInput
  }

  export type experienceScalarWhereWithAggregatesInput = {
    AND?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    OR?: experienceScalarWhereWithAggregatesInput[]
    NOT?: experienceScalarWhereWithAggregatesInput | experienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"experience"> | string
    userId?: StringNullableWithAggregatesFilter<"experience"> | string | null
    name?: StringWithAggregatesFilter<"experience"> | string
    featured?: BoolNullableWithAggregatesFilter<"experience"> | boolean | null
    location?: StringWithAggregatesFilter<"experience"> | string
    price?: IntWithAggregatesFilter<"experience"> | number
    originalPrice?: IntNullableWithAggregatesFilter<"experience"> | number | null
    maxPax?: IntWithAggregatesFilter<"experience"> | number
    description?: StringWithAggregatesFilter<"experience"> | string
    images?: StringNullableListFilter<"experience">
    amenities?: StringNullableListFilter<"experience">
    features?: StringNullableListFilter<"experience">
    status?: EnumStatusWithAggregatesFilter<"experience"> | $Enums.Status
    availability?: EnumAvailabilityWithAggregatesFilter<"experience"> | $Enums.Availability
    popular?: BoolNullableWithAggregatesFilter<"experience"> | boolean | null
    address?: StringNullableWithAggregatesFilter<"experience"> | string | null
    cancellationPolicy?: StringNullableListFilter<"experience">
    createdAt?: DateTimeWithAggregatesFilter<"experience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"experience"> | Date | string
  }

  export type serviceWhereInput = {
    AND?: serviceWhereInput | serviceWhereInput[]
    OR?: serviceWhereInput[]
    NOT?: serviceWhereInput | serviceWhereInput[]
    id?: StringFilter<"service"> | string
    userId?: StringNullableFilter<"service"> | string | null
    name?: StringFilter<"service"> | string
    featured?: BoolNullableFilter<"service"> | boolean | null
    location?: StringFilter<"service"> | string
    price?: IntFilter<"service"> | number
    originalPrice?: IntNullableFilter<"service"> | number | null
    maxPax?: IntFilter<"service"> | number
    description?: StringFilter<"service"> | string
    images?: StringNullableListFilter<"service">
    amenities?: StringNullableListFilter<"service">
    features?: StringNullableListFilter<"service">
    status?: EnumStatusFilter<"service"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"service"> | $Enums.Availability
    popular?: BoolNullableFilter<"service"> | boolean | null
    address?: StringNullableFilter<"service"> | string | null
    availabilityStatus?: AvailabilityStatusCompositeListFilter | AvailabilityStatusObjectEqualityInput[]
    cancellationPolicy?: StringNullableListFilter<"service">
    createdAt?: DateTimeFilter<"service"> | Date | string
    updatedAt?: DateTimeFilter<"service"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    bookings?: BookingListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type serviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    availabilityStatus?: AvailabilityStatusOrderByCompositeAggregateInput
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    bookings?: bookingOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type serviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: serviceWhereInput | serviceWhereInput[]
    OR?: serviceWhereInput[]
    NOT?: serviceWhereInput | serviceWhereInput[]
    userId?: StringNullableFilter<"service"> | string | null
    name?: StringFilter<"service"> | string
    featured?: BoolNullableFilter<"service"> | boolean | null
    location?: StringFilter<"service"> | string
    price?: IntFilter<"service"> | number
    originalPrice?: IntNullableFilter<"service"> | number | null
    maxPax?: IntFilter<"service"> | number
    description?: StringFilter<"service"> | string
    images?: StringNullableListFilter<"service">
    amenities?: StringNullableListFilter<"service">
    features?: StringNullableListFilter<"service">
    status?: EnumStatusFilter<"service"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"service"> | $Enums.Availability
    popular?: BoolNullableFilter<"service"> | boolean | null
    address?: StringNullableFilter<"service"> | string | null
    availabilityStatus?: AvailabilityStatusCompositeListFilter | AvailabilityStatusObjectEqualityInput[]
    cancellationPolicy?: StringNullableListFilter<"service">
    createdAt?: DateTimeFilter<"service"> | Date | string
    updatedAt?: DateTimeFilter<"service"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    bookings?: BookingListRelationFilter
    review?: ReviewListRelationFilter
  }, "id">

  export type serviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: serviceCountOrderByAggregateInput
    _avg?: serviceAvgOrderByAggregateInput
    _max?: serviceMaxOrderByAggregateInput
    _min?: serviceMinOrderByAggregateInput
    _sum?: serviceSumOrderByAggregateInput
  }

  export type serviceScalarWhereWithAggregatesInput = {
    AND?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[]
    OR?: serviceScalarWhereWithAggregatesInput[]
    NOT?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"service"> | string
    userId?: StringNullableWithAggregatesFilter<"service"> | string | null
    name?: StringWithAggregatesFilter<"service"> | string
    featured?: BoolNullableWithAggregatesFilter<"service"> | boolean | null
    location?: StringWithAggregatesFilter<"service"> | string
    price?: IntWithAggregatesFilter<"service"> | number
    originalPrice?: IntNullableWithAggregatesFilter<"service"> | number | null
    maxPax?: IntWithAggregatesFilter<"service"> | number
    description?: StringWithAggregatesFilter<"service"> | string
    images?: StringNullableListFilter<"service">
    amenities?: StringNullableListFilter<"service">
    features?: StringNullableListFilter<"service">
    status?: EnumStatusWithAggregatesFilter<"service"> | $Enums.Status
    availability?: EnumAvailabilityWithAggregatesFilter<"service"> | $Enums.Availability
    popular?: BoolNullableWithAggregatesFilter<"service"> | boolean | null
    address?: StringNullableWithAggregatesFilter<"service"> | string | null
    cancellationPolicy?: StringNullableListFilter<"service">
    createdAt?: DateTimeWithAggregatesFilter<"service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"service"> | Date | string
  }

  export type availabilityWhereInput = {
    AND?: availabilityWhereInput | availabilityWhereInput[]
    OR?: availabilityWhereInput[]
    NOT?: availabilityWhereInput | availabilityWhereInput[]
    id?: StringFilter<"availability"> | string
    guests?: IntFilter<"availability"> | number
    rooms?: IntFilter<"availability"> | number
    maxCheckIn?: DateTimeNullableFilter<"availability"> | Date | string | null
    maxCheckOut?: DateTimeNullableFilter<"availability"> | Date | string | null
  }

  export type availabilityOrderByWithRelationInput = {
    id?: SortOrder
    guests?: SortOrder
    rooms?: SortOrder
    maxCheckIn?: SortOrder
    maxCheckOut?: SortOrder
  }

  export type availabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: availabilityWhereInput | availabilityWhereInput[]
    OR?: availabilityWhereInput[]
    NOT?: availabilityWhereInput | availabilityWhereInput[]
    guests?: IntFilter<"availability"> | number
    rooms?: IntFilter<"availability"> | number
    maxCheckIn?: DateTimeNullableFilter<"availability"> | Date | string | null
    maxCheckOut?: DateTimeNullableFilter<"availability"> | Date | string | null
  }, "id">

  export type availabilityOrderByWithAggregationInput = {
    id?: SortOrder
    guests?: SortOrder
    rooms?: SortOrder
    maxCheckIn?: SortOrder
    maxCheckOut?: SortOrder
    _count?: availabilityCountOrderByAggregateInput
    _avg?: availabilityAvgOrderByAggregateInput
    _max?: availabilityMaxOrderByAggregateInput
    _min?: availabilityMinOrderByAggregateInput
    _sum?: availabilitySumOrderByAggregateInput
  }

  export type availabilityScalarWhereWithAggregatesInput = {
    AND?: availabilityScalarWhereWithAggregatesInput | availabilityScalarWhereWithAggregatesInput[]
    OR?: availabilityScalarWhereWithAggregatesInput[]
    NOT?: availabilityScalarWhereWithAggregatesInput | availabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"availability"> | string
    guests?: IntWithAggregatesFilter<"availability"> | number
    rooms?: IntWithAggregatesFilter<"availability"> | number
    maxCheckIn?: DateTimeNullableWithAggregatesFilter<"availability"> | Date | string | null
    maxCheckOut?: DateTimeNullableWithAggregatesFilter<"availability"> | Date | string | null
  }

  export type roomWhereInput = {
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    id?: StringFilter<"room"> | string
    userId?: StringNullableFilter<"room"> | string | null
    ngoziId?: StringNullableFilter<"room"> | string | null
    name?: StringFilter<"room"> | string
    category?: StringFilter<"room"> | string
    featured?: BoolNullableFilter<"room"> | boolean | null
    location?: StringNullableFilter<"room"> | string | null
    country?: StringNullableFilter<"room"> | string | null
    price?: IntFilter<"room"> | number
    originalPrice?: IntNullableFilter<"room"> | number | null
    size?: IntNullableFilter<"room"> | number | null
    maxGuests?: IntFilter<"room"> | number
    bedType?: StringFilter<"room"> | string
    view?: StringFilter<"room"> | string
    description?: StringFilter<"room"> | string
    images?: StringNullableListFilter<"room">
    amenities?: StringNullableListFilter<"room">
    features?: StringNullableListFilter<"room">
    services?: StringNullableListFilter<"room">
    status?: EnumStatusFilter<"room"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"room"> | $Enums.Availability
    popular?: BoolNullableFilter<"room"> | boolean | null
    newlyRenovated?: BoolNullableFilter<"room"> | boolean | null
    address?: StringNullableFilter<"room"> | string | null
    availabilityStatus?: AvailabilityStatusCompositeListFilter | AvailabilityStatusObjectEqualityInput[]
    cancellationPolicy?: StringNullableListFilter<"room">
    createdAt?: DateTimeFilter<"room"> | Date | string
    updatedAt?: DateTimeFilter<"room"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    bookings?: BookingListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type roomOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ngoziId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    country?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    size?: SortOrder
    maxGuests?: SortOrder
    bedType?: SortOrder
    view?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    services?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    newlyRenovated?: SortOrder
    address?: SortOrder
    availabilityStatus?: AvailabilityStatusOrderByCompositeAggregateInput
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    bookings?: bookingOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type roomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ngoziId_name?: roomNgoziIdNameCompoundUniqueInput
    id_userId?: roomIdUserIdCompoundUniqueInput
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    userId?: StringNullableFilter<"room"> | string | null
    ngoziId?: StringNullableFilter<"room"> | string | null
    name?: StringFilter<"room"> | string
    category?: StringFilter<"room"> | string
    featured?: BoolNullableFilter<"room"> | boolean | null
    location?: StringNullableFilter<"room"> | string | null
    country?: StringNullableFilter<"room"> | string | null
    price?: IntFilter<"room"> | number
    originalPrice?: IntNullableFilter<"room"> | number | null
    size?: IntNullableFilter<"room"> | number | null
    maxGuests?: IntFilter<"room"> | number
    bedType?: StringFilter<"room"> | string
    view?: StringFilter<"room"> | string
    description?: StringFilter<"room"> | string
    images?: StringNullableListFilter<"room">
    amenities?: StringNullableListFilter<"room">
    features?: StringNullableListFilter<"room">
    services?: StringNullableListFilter<"room">
    status?: EnumStatusFilter<"room"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"room"> | $Enums.Availability
    popular?: BoolNullableFilter<"room"> | boolean | null
    newlyRenovated?: BoolNullableFilter<"room"> | boolean | null
    address?: StringNullableFilter<"room"> | string | null
    availabilityStatus?: AvailabilityStatusCompositeListFilter | AvailabilityStatusObjectEqualityInput[]
    cancellationPolicy?: StringNullableListFilter<"room">
    createdAt?: DateTimeFilter<"room"> | Date | string
    updatedAt?: DateTimeFilter<"room"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    bookings?: BookingListRelationFilter
    review?: ReviewListRelationFilter
  }, "id" | "ngoziId_name" | "id_userId">

  export type roomOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ngoziId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    country?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    size?: SortOrder
    maxGuests?: SortOrder
    bedType?: SortOrder
    view?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    services?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    newlyRenovated?: SortOrder
    address?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: roomCountOrderByAggregateInput
    _avg?: roomAvgOrderByAggregateInput
    _max?: roomMaxOrderByAggregateInput
    _min?: roomMinOrderByAggregateInput
    _sum?: roomSumOrderByAggregateInput
  }

  export type roomScalarWhereWithAggregatesInput = {
    AND?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    OR?: roomScalarWhereWithAggregatesInput[]
    NOT?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"room"> | string
    userId?: StringNullableWithAggregatesFilter<"room"> | string | null
    ngoziId?: StringNullableWithAggregatesFilter<"room"> | string | null
    name?: StringWithAggregatesFilter<"room"> | string
    category?: StringWithAggregatesFilter<"room"> | string
    featured?: BoolNullableWithAggregatesFilter<"room"> | boolean | null
    location?: StringNullableWithAggregatesFilter<"room"> | string | null
    country?: StringNullableWithAggregatesFilter<"room"> | string | null
    price?: IntWithAggregatesFilter<"room"> | number
    originalPrice?: IntNullableWithAggregatesFilter<"room"> | number | null
    size?: IntNullableWithAggregatesFilter<"room"> | number | null
    maxGuests?: IntWithAggregatesFilter<"room"> | number
    bedType?: StringWithAggregatesFilter<"room"> | string
    view?: StringWithAggregatesFilter<"room"> | string
    description?: StringWithAggregatesFilter<"room"> | string
    images?: StringNullableListFilter<"room">
    amenities?: StringNullableListFilter<"room">
    features?: StringNullableListFilter<"room">
    services?: StringNullableListFilter<"room">
    status?: EnumStatusWithAggregatesFilter<"room"> | $Enums.Status
    availability?: EnumAvailabilityWithAggregatesFilter<"room"> | $Enums.Availability
    popular?: BoolNullableWithAggregatesFilter<"room"> | boolean | null
    newlyRenovated?: BoolNullableWithAggregatesFilter<"room"> | boolean | null
    address?: StringNullableWithAggregatesFilter<"room"> | string | null
    cancellationPolicy?: StringNullableListFilter<"room">
    createdAt?: DateTimeWithAggregatesFilter<"room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"room"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    userId?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    firstName?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    imageUrl?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    receiveMarketing?: BoolNullableFilter<"user"> | boolean | null
    stripeAccountId?: StringNullableFilter<"user"> | string | null
    review?: ReviewListRelationFilter
    booking?: BookingListRelationFilter
    room?: RoomListRelationFilter
    experience?: ExperienceListRelationFilter
    service?: ServiceListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    receiveMarketing?: SortOrder
    stripeAccountId?: SortOrder
    review?: reviewOrderByRelationAggregateInput
    booking?: bookingOrderByRelationAggregateInput
    room?: roomOrderByRelationAggregateInput
    experience?: experienceOrderByRelationAggregateInput
    service?: serviceOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    firstName?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    imageUrl?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    receiveMarketing?: BoolNullableFilter<"user"> | boolean | null
    stripeAccountId?: StringNullableFilter<"user"> | string | null
    review?: ReviewListRelationFilter
    booking?: BookingListRelationFilter
    room?: RoomListRelationFilter
    experience?: ExperienceListRelationFilter
    service?: ServiceListRelationFilter
  }, "id" | "userId" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    receiveMarketing?: SortOrder
    stripeAccountId?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    userId?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    firstName?: StringWithAggregatesFilter<"user"> | string
    lastName?: StringWithAggregatesFilter<"user"> | string
    imageUrl?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
    receiveMarketing?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    stripeAccountId?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: StringFilter<"review"> | string
    userId?: StringNullableFilter<"review"> | string | null
    roomId?: StringNullableFilter<"review"> | string | null
    experienceId?: StringNullableFilter<"review"> | string | null
    serviceId?: StringNullableFilter<"review"> | string | null
    bookingId?: StringFilter<"review"> | string
    review?: StringFilter<"review"> | string
    rating?: IntFilter<"review"> | number
    createdAt?: DateTimeFilter<"review"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, roomWhereInput> | null
    experience?: XOR<ExperienceNullableScalarRelationFilter, experienceWhereInput> | null
    service?: XOR<ServiceNullableScalarRelationFilter, serviceWhereInput> | null
    booking?: XOR<BookingScalarRelationFilter, bookingWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    bookingId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
    room?: roomOrderByWithRelationInput
    experience?: experienceOrderByWithRelationInput
    service?: serviceOrderByWithRelationInput
    booking?: bookingOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    userId?: StringNullableFilter<"review"> | string | null
    roomId?: StringNullableFilter<"review"> | string | null
    experienceId?: StringNullableFilter<"review"> | string | null
    serviceId?: StringNullableFilter<"review"> | string | null
    review?: StringFilter<"review"> | string
    rating?: IntFilter<"review"> | number
    createdAt?: DateTimeFilter<"review"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, roomWhereInput> | null
    experience?: XOR<ExperienceNullableScalarRelationFilter, experienceWhereInput> | null
    service?: XOR<ServiceNullableScalarRelationFilter, serviceWhereInput> | null
    booking?: XOR<BookingScalarRelationFilter, bookingWhereInput>
  }, "id" | "bookingId">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    bookingId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"review"> | string
    userId?: StringNullableWithAggregatesFilter<"review"> | string | null
    roomId?: StringNullableWithAggregatesFilter<"review"> | string | null
    experienceId?: StringNullableWithAggregatesFilter<"review"> | string | null
    serviceId?: StringNullableWithAggregatesFilter<"review"> | string | null
    bookingId?: StringWithAggregatesFilter<"review"> | string
    review?: StringWithAggregatesFilter<"review"> | string
    rating?: IntWithAggregatesFilter<"review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"review"> | Date | string
  }

  export type bookingCreateInput = {
    id?: string
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    room?: roomCreateNestedOneWithoutBookingsInput
    experience?: experienceCreateNestedOneWithoutBookingsInput
    service?: serviceCreateNestedOneWithoutBookingsInput
    user?: userCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingUpdateInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    room?: roomUpdateOneWithoutBookingsNestedInput
    experience?: experienceUpdateOneWithoutBookingsNestedInput
    service?: serviceUpdateOneWithoutBookingsNestedInput
    user?: userUpdateOneWithoutBookingNestedInput
    review?: reviewUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingCreateManyInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
  }

  export type bookingUpdateManyMutationInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookingUncheckedUpdateManyInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type experienceCreateInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutExperienceInput
    bookings?: bookingCreateNestedManyWithoutExperienceInput
    review?: reviewCreateNestedManyWithoutExperienceInput
  }

  export type experienceUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutExperienceInput
    review?: reviewUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type experienceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutExperienceNestedInput
    bookings?: bookingUpdateManyWithoutExperienceNestedInput
    review?: reviewUpdateManyWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutExperienceNestedInput
    review?: reviewUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type experienceCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviceCreateInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutServiceInput
    bookings?: bookingCreateNestedManyWithoutServiceInput
    review?: reviewCreateNestedManyWithoutServiceInput
  }

  export type serviceUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutServiceInput
    review?: reviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type serviceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutServiceNestedInput
    bookings?: bookingUpdateManyWithoutServiceNestedInput
    review?: reviewUpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutServiceNestedInput
    review?: reviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type serviceCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type serviceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviceUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type availabilityCreateInput = {
    id?: string
    guests?: number
    rooms?: number
    maxCheckIn?: Date | string | null
    maxCheckOut?: Date | string | null
  }

  export type availabilityUncheckedCreateInput = {
    id?: string
    guests?: number
    rooms?: number
    maxCheckIn?: Date | string | null
    maxCheckOut?: Date | string | null
  }

  export type availabilityUpdateInput = {
    guests?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    maxCheckIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type availabilityUncheckedUpdateInput = {
    guests?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    maxCheckIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type availabilityCreateManyInput = {
    id?: string
    guests?: number
    rooms?: number
    maxCheckIn?: Date | string | null
    maxCheckOut?: Date | string | null
  }

  export type availabilityUpdateManyMutationInput = {
    guests?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    maxCheckIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type availabilityUncheckedUpdateManyInput = {
    guests?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    maxCheckIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxCheckOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomCreateInput = {
    id?: string
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutRoomInput
    bookings?: bookingCreateNestedManyWithoutRoomInput
    review?: reviewCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateInput = {
    id?: string
    userId?: string | null
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutRoomInput
    review?: reviewUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomUpdateInput = {
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutRoomNestedInput
    bookings?: bookingUpdateManyWithoutRoomNestedInput
    review?: reviewUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutRoomNestedInput
    review?: reviewUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomCreateManyInput = {
    id?: string
    userId?: string | null
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type roomUpdateManyMutationInput = {
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    room?: roomCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    service?: serviceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    room?: roomUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    service?: serviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    room?: roomUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    service?: serviceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    room?: roomUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    service?: serviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
  }

  export type userUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewCreateInput = {
    id?: string
    review: string
    rating: number
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutReviewInput
    room?: roomCreateNestedOneWithoutReviewInput
    experience?: experienceCreateNestedOneWithoutReviewInput
    service?: serviceCreateNestedOneWithoutReviewInput
    booking: bookingCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewUpdateInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutReviewNestedInput
    room?: roomUpdateOneWithoutReviewNestedInput
    experience?: experienceUpdateOneWithoutReviewNestedInput
    service?: serviceUpdateOneWithoutReviewNestedInput
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateManyInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewUpdateManyMutationInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type RoomNullableScalarRelationFilter = {
    is?: roomWhereInput | null
    isNot?: roomWhereInput | null
  }

  export type ExperienceNullableScalarRelationFilter = {
    is?: experienceWhereInput | null
    isNot?: experienceWhereInput | null
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: serviceWhereInput | null
    isNot?: serviceWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    checkedStatus?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    price?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
  }

  export type bookingAvgOrderByAggregateInput = {
    guests?: SortOrder
    price?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    checkedStatus?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    price?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    checkedStatus?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    price?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
  }

  export type bookingSumOrderByAggregateInput = {
    guests?: SortOrder
    price?: SortOrder
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
    isSet?: boolean
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumAvailabilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityFilter<$PrismaModel> | $Enums.Availability
  }

  export type AvailabilityStatusCompositeListFilter = {
    equals?: AvailabilityStatusObjectEqualityInput[]
    every?: AvailabilityStatusWhereInput
    some?: AvailabilityStatusWhereInput
    none?: AvailabilityStatusWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type AvailabilityStatusObjectEqualityInput = {
    availability: string
    dates?: string[]
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type AvailabilityStatusOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type experienceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceAvgOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
  }

  export type experienceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type experienceSumOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
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

  export type EnumAvailabilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityWithAggregatesFilter<$PrismaModel> | $Enums.Availability
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvailabilityFilter<$PrismaModel>
    _max?: NestedEnumAvailabilityFilter<$PrismaModel>
  }

  export type serviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type serviceAvgOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
  }

  export type serviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type serviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
    description?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type serviceSumOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    maxPax?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type availabilityCountOrderByAggregateInput = {
    id?: SortOrder
    guests?: SortOrder
    rooms?: SortOrder
    maxCheckIn?: SortOrder
    maxCheckOut?: SortOrder
  }

  export type availabilityAvgOrderByAggregateInput = {
    guests?: SortOrder
    rooms?: SortOrder
  }

  export type availabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    guests?: SortOrder
    rooms?: SortOrder
    maxCheckIn?: SortOrder
    maxCheckOut?: SortOrder
  }

  export type availabilityMinOrderByAggregateInput = {
    id?: SortOrder
    guests?: SortOrder
    rooms?: SortOrder
    maxCheckIn?: SortOrder
    maxCheckOut?: SortOrder
  }

  export type availabilitySumOrderByAggregateInput = {
    guests?: SortOrder
    rooms?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type roomNgoziIdNameCompoundUniqueInput = {
    ngoziId: string
    name: string
  }

  export type roomIdUserIdCompoundUniqueInput = {
    id: string
    userId: string
  }

  export type roomCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ngoziId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    country?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    size?: SortOrder
    maxGuests?: SortOrder
    bedType?: SortOrder
    view?: SortOrder
    description?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    features?: SortOrder
    services?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    newlyRenovated?: SortOrder
    address?: SortOrder
    cancellationPolicy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type roomAvgOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    size?: SortOrder
    maxGuests?: SortOrder
  }

  export type roomMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ngoziId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    country?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    size?: SortOrder
    maxGuests?: SortOrder
    bedType?: SortOrder
    view?: SortOrder
    description?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    newlyRenovated?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type roomMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ngoziId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    location?: SortOrder
    country?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    size?: SortOrder
    maxGuests?: SortOrder
    bedType?: SortOrder
    view?: SortOrder
    description?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    popular?: SortOrder
    newlyRenovated?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type roomSumOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    size?: SortOrder
    maxGuests?: SortOrder
  }

  export type RoomListRelationFilter = {
    every?: roomWhereInput
    some?: roomWhereInput
    none?: roomWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: experienceWhereInput
    some?: experienceWhereInput
    none?: experienceWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: serviceWhereInput
    some?: serviceWhereInput
    none?: serviceWhereInput
  }

  export type roomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type experienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type serviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    receiveMarketing?: SortOrder
    stripeAccountId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    receiveMarketing?: SortOrder
    stripeAccountId?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    receiveMarketing?: SortOrder
    stripeAccountId?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: bookingWhereInput
    isNot?: bookingWhereInput
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    bookingId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    bookingId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    experienceId?: SortOrder
    serviceId?: SortOrder
    bookingId?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type roomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: roomCreateOrConnectWithoutBookingsInput
    connect?: roomWhereUniqueInput
  }

  export type experienceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<experienceCreateWithoutBookingsInput, experienceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: experienceCreateOrConnectWithoutBookingsInput
    connect?: experienceWhereUniqueInput
  }

  export type serviceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<serviceCreateWithoutBookingsInput, serviceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBookingsInput
    connect?: serviceWhereUniqueInput
  }

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingInput
    connect?: userWhereUniqueInput
  }

  export type reviewCreateNestedManyWithoutBookingInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput> | reviewCreateWithoutBookingInput[] | reviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[]
    createMany?: reviewCreateManyBookingInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput> | reviewCreateWithoutBookingInput[] | reviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[]
    createMany?: reviewCreateManyBookingInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type roomUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: roomCreateOrConnectWithoutBookingsInput
    upsert?: roomUpsertWithoutBookingsInput
    disconnect?: boolean
    delete?: roomWhereInput | boolean
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutBookingsInput, roomUpdateWithoutBookingsInput>, roomUncheckedUpdateWithoutBookingsInput>
  }

  export type experienceUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<experienceCreateWithoutBookingsInput, experienceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: experienceCreateOrConnectWithoutBookingsInput
    upsert?: experienceUpsertWithoutBookingsInput
    disconnect?: boolean
    delete?: experienceWhereInput | boolean
    connect?: experienceWhereUniqueInput
    update?: XOR<XOR<experienceUpdateToOneWithWhereWithoutBookingsInput, experienceUpdateWithoutBookingsInput>, experienceUncheckedUpdateWithoutBookingsInput>
  }

  export type serviceUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<serviceCreateWithoutBookingsInput, serviceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBookingsInput
    upsert?: serviceUpsertWithoutBookingsInput
    disconnect?: boolean
    delete?: serviceWhereInput | boolean
    connect?: serviceWhereUniqueInput
    update?: XOR<XOR<serviceUpdateToOneWithWhereWithoutBookingsInput, serviceUpdateWithoutBookingsInput>, serviceUncheckedUpdateWithoutBookingsInput>
  }

  export type userUpdateOneWithoutBookingNestedInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingInput
    upsert?: userUpsertWithoutBookingInput
    disconnect?: boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBookingInput, userUpdateWithoutBookingInput>, userUncheckedUpdateWithoutBookingInput>
  }

  export type reviewUpdateManyWithoutBookingNestedInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput> | reviewCreateWithoutBookingInput[] | reviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutBookingInput | reviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: reviewCreateManyBookingInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutBookingInput | reviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutBookingInput | reviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput> | reviewCreateWithoutBookingInput[] | reviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutBookingInput | reviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: reviewCreateManyBookingInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutBookingInput | reviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutBookingInput | reviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type experienceCreateimagesInput = {
    set: string[]
  }

  export type experienceCreateamenitiesInput = {
    set: string[]
  }

  export type experienceCreatefeaturesInput = {
    set: string[]
  }

  export type AvailabilityStatusListCreateEnvelopeInput = {
    set?: AvailabilityStatusCreateInput | AvailabilityStatusCreateInput[]
  }

  export type AvailabilityStatusCreateInput = {
    availability: string
    dates?: AvailabilityStatusCreatedatesInput | string[]
  }

  export type experienceCreatecancellationPolicyInput = {
    set: string[]
  }

  export type userCreateNestedOneWithoutExperienceInput = {
    create?: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: userCreateOrConnectWithoutExperienceInput
    connect?: userWhereUniqueInput
  }

  export type bookingCreateNestedManyWithoutExperienceInput = {
    create?: XOR<bookingCreateWithoutExperienceInput, bookingUncheckedCreateWithoutExperienceInput> | bookingCreateWithoutExperienceInput[] | bookingUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutExperienceInput | bookingCreateOrConnectWithoutExperienceInput[]
    createMany?: bookingCreateManyExperienceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutExperienceInput = {
    create?: XOR<reviewCreateWithoutExperienceInput, reviewUncheckedCreateWithoutExperienceInput> | reviewCreateWithoutExperienceInput[] | reviewUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutExperienceInput | reviewCreateOrConnectWithoutExperienceInput[]
    createMany?: reviewCreateManyExperienceInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<bookingCreateWithoutExperienceInput, bookingUncheckedCreateWithoutExperienceInput> | bookingCreateWithoutExperienceInput[] | bookingUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutExperienceInput | bookingCreateOrConnectWithoutExperienceInput[]
    createMany?: bookingCreateManyExperienceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutExperienceInput = {
    create?: XOR<reviewCreateWithoutExperienceInput, reviewUncheckedCreateWithoutExperienceInput> | reviewCreateWithoutExperienceInput[] | reviewUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutExperienceInput | reviewCreateOrConnectWithoutExperienceInput[]
    createMany?: reviewCreateManyExperienceInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type experienceUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type experienceUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type experienceUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumAvailabilityFieldUpdateOperationsInput = {
    set?: $Enums.Availability
  }

  export type AvailabilityStatusListUpdateEnvelopeInput = {
    set?: AvailabilityStatusCreateInput | AvailabilityStatusCreateInput[]
    push?: AvailabilityStatusCreateInput | AvailabilityStatusCreateInput[]
    updateMany?: AvailabilityStatusUpdateManyInput
    deleteMany?: AvailabilityStatusDeleteManyInput
  }

  export type experienceUpdatecancellationPolicyInput = {
    set?: string[]
    push?: string | string[]
  }

  export type userUpdateOneWithoutExperienceNestedInput = {
    create?: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: userCreateOrConnectWithoutExperienceInput
    upsert?: userUpsertWithoutExperienceInput
    disconnect?: boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutExperienceInput, userUpdateWithoutExperienceInput>, userUncheckedUpdateWithoutExperienceInput>
  }

  export type bookingUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<bookingCreateWithoutExperienceInput, bookingUncheckedCreateWithoutExperienceInput> | bookingCreateWithoutExperienceInput[] | bookingUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutExperienceInput | bookingCreateOrConnectWithoutExperienceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutExperienceInput | bookingUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: bookingCreateManyExperienceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutExperienceInput | bookingUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutExperienceInput | bookingUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<reviewCreateWithoutExperienceInput, reviewUncheckedCreateWithoutExperienceInput> | reviewCreateWithoutExperienceInput[] | reviewUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutExperienceInput | reviewCreateOrConnectWithoutExperienceInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutExperienceInput | reviewUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: reviewCreateManyExperienceInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutExperienceInput | reviewUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutExperienceInput | reviewUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<bookingCreateWithoutExperienceInput, bookingUncheckedCreateWithoutExperienceInput> | bookingCreateWithoutExperienceInput[] | bookingUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutExperienceInput | bookingCreateOrConnectWithoutExperienceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutExperienceInput | bookingUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: bookingCreateManyExperienceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutExperienceInput | bookingUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutExperienceInput | bookingUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutExperienceNestedInput = {
    create?: XOR<reviewCreateWithoutExperienceInput, reviewUncheckedCreateWithoutExperienceInput> | reviewCreateWithoutExperienceInput[] | reviewUncheckedCreateWithoutExperienceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutExperienceInput | reviewCreateOrConnectWithoutExperienceInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutExperienceInput | reviewUpsertWithWhereUniqueWithoutExperienceInput[]
    createMany?: reviewCreateManyExperienceInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutExperienceInput | reviewUpdateWithWhereUniqueWithoutExperienceInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutExperienceInput | reviewUpdateManyWithWhereWithoutExperienceInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type serviceCreateimagesInput = {
    set: string[]
  }

  export type serviceCreateamenitiesInput = {
    set: string[]
  }

  export type serviceCreatefeaturesInput = {
    set: string[]
  }

  export type serviceCreatecancellationPolicyInput = {
    set: string[]
  }

  export type userCreateNestedOneWithoutServiceInput = {
    create?: XOR<userCreateWithoutServiceInput, userUncheckedCreateWithoutServiceInput>
    connectOrCreate?: userCreateOrConnectWithoutServiceInput
    connect?: userWhereUniqueInput
  }

  export type bookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutServiceInput = {
    create?: XOR<reviewCreateWithoutServiceInput, reviewUncheckedCreateWithoutServiceInput> | reviewCreateWithoutServiceInput[] | reviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutServiceInput | reviewCreateOrConnectWithoutServiceInput[]
    createMany?: reviewCreateManyServiceInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<reviewCreateWithoutServiceInput, reviewUncheckedCreateWithoutServiceInput> | reviewCreateWithoutServiceInput[] | reviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutServiceInput | reviewCreateOrConnectWithoutServiceInput[]
    createMany?: reviewCreateManyServiceInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type serviceUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type serviceUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type serviceUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type serviceUpdatecancellationPolicyInput = {
    set?: string[]
    push?: string | string[]
  }

  export type userUpdateOneWithoutServiceNestedInput = {
    create?: XOR<userCreateWithoutServiceInput, userUncheckedCreateWithoutServiceInput>
    connectOrCreate?: userCreateOrConnectWithoutServiceInput
    upsert?: userUpsertWithoutServiceInput
    disconnect?: boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutServiceInput, userUpdateWithoutServiceInput>, userUncheckedUpdateWithoutServiceInput>
  }

  export type bookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutServiceInput | bookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutServiceInput | bookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutServiceInput | bookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutServiceNestedInput = {
    create?: XOR<reviewCreateWithoutServiceInput, reviewUncheckedCreateWithoutServiceInput> | reviewCreateWithoutServiceInput[] | reviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutServiceInput | reviewCreateOrConnectWithoutServiceInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutServiceInput | reviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: reviewCreateManyServiceInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutServiceInput | reviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutServiceInput | reviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutServiceInput | bookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutServiceInput | bookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutServiceInput | bookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<reviewCreateWithoutServiceInput, reviewUncheckedCreateWithoutServiceInput> | reviewCreateWithoutServiceInput[] | reviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutServiceInput | reviewCreateOrConnectWithoutServiceInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutServiceInput | reviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: reviewCreateManyServiceInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutServiceInput | reviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutServiceInput | reviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type roomCreateimagesInput = {
    set: string[]
  }

  export type roomCreateamenitiesInput = {
    set: string[]
  }

  export type roomCreatefeaturesInput = {
    set: string[]
  }

  export type roomCreateservicesInput = {
    set: string[]
  }

  export type roomCreatecancellationPolicyInput = {
    set: string[]
  }

  export type userCreateNestedOneWithoutRoomInput = {
    create?: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
    connectOrCreate?: userCreateOrConnectWithoutRoomInput
    connect?: userWhereUniqueInput
  }

  export type bookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<bookingCreateWithoutRoomInput, bookingUncheckedCreateWithoutRoomInput> | bookingCreateWithoutRoomInput[] | bookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutRoomInput | bookingCreateOrConnectWithoutRoomInput[]
    createMany?: bookingCreateManyRoomInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutRoomInput = {
    create?: XOR<reviewCreateWithoutRoomInput, reviewUncheckedCreateWithoutRoomInput> | reviewCreateWithoutRoomInput[] | reviewUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRoomInput | reviewCreateOrConnectWithoutRoomInput[]
    createMany?: reviewCreateManyRoomInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<bookingCreateWithoutRoomInput, bookingUncheckedCreateWithoutRoomInput> | bookingCreateWithoutRoomInput[] | bookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutRoomInput | bookingCreateOrConnectWithoutRoomInput[]
    createMany?: bookingCreateManyRoomInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<reviewCreateWithoutRoomInput, reviewUncheckedCreateWithoutRoomInput> | reviewCreateWithoutRoomInput[] | reviewUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRoomInput | reviewCreateOrConnectWithoutRoomInput[]
    createMany?: reviewCreateManyRoomInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type roomUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type roomUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type roomUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type roomUpdateservicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type roomUpdatecancellationPolicyInput = {
    set?: string[]
    push?: string | string[]
  }

  export type userUpdateOneWithoutRoomNestedInput = {
    create?: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
    connectOrCreate?: userCreateOrConnectWithoutRoomInput
    upsert?: userUpsertWithoutRoomInput
    disconnect?: boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRoomInput, userUpdateWithoutRoomInput>, userUncheckedUpdateWithoutRoomInput>
  }

  export type bookingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<bookingCreateWithoutRoomInput, bookingUncheckedCreateWithoutRoomInput> | bookingCreateWithoutRoomInput[] | bookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutRoomInput | bookingCreateOrConnectWithoutRoomInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutRoomInput | bookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: bookingCreateManyRoomInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutRoomInput | bookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutRoomInput | bookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutRoomNestedInput = {
    create?: XOR<reviewCreateWithoutRoomInput, reviewUncheckedCreateWithoutRoomInput> | reviewCreateWithoutRoomInput[] | reviewUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRoomInput | reviewCreateOrConnectWithoutRoomInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutRoomInput | reviewUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: reviewCreateManyRoomInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutRoomInput | reviewUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutRoomInput | reviewUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<bookingCreateWithoutRoomInput, bookingUncheckedCreateWithoutRoomInput> | bookingCreateWithoutRoomInput[] | bookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutRoomInput | bookingCreateOrConnectWithoutRoomInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutRoomInput | bookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: bookingCreateManyRoomInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutRoomInput | bookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutRoomInput | bookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<reviewCreateWithoutRoomInput, reviewUncheckedCreateWithoutRoomInput> | reviewCreateWithoutRoomInput[] | reviewUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutRoomInput | reviewCreateOrConnectWithoutRoomInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutRoomInput | reviewUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: reviewCreateManyRoomInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutRoomInput | reviewUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutRoomInput | reviewUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type reviewCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookingCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type roomCreateNestedManyWithoutUserInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
  }

  export type experienceCreateNestedManyWithoutUserInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
  }

  export type serviceCreateNestedManyWithoutUserInput = {
    create?: XOR<serviceCreateWithoutUserInput, serviceUncheckedCreateWithoutUserInput> | serviceCreateWithoutUserInput[] | serviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: serviceCreateOrConnectWithoutUserInput | serviceCreateOrConnectWithoutUserInput[]
    createMany?: serviceCreateManyUserInputEnvelope
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type roomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
  }

  export type experienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
  }

  export type serviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<serviceCreateWithoutUserInput, serviceUncheckedCreateWithoutUserInput> | serviceCreateWithoutUserInput[] | serviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: serviceCreateOrConnectWithoutUserInput | serviceCreateOrConnectWithoutUserInput[]
    createMany?: serviceCreateManyUserInputEnvelope
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
  }

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type roomUpdateManyWithoutUserNestedInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    upsert?: roomUpsertWithWhereUniqueWithoutUserInput | roomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    set?: roomWhereUniqueInput | roomWhereUniqueInput[]
    disconnect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    delete?: roomWhereUniqueInput | roomWhereUniqueInput[]
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    update?: roomUpdateWithWhereUniqueWithoutUserInput | roomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: roomUpdateManyWithWhereWithoutUserInput | roomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: roomScalarWhereInput | roomScalarWhereInput[]
  }

  export type experienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    upsert?: experienceUpsertWithWhereUniqueWithoutUserInput | experienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    update?: experienceUpdateWithWhereUniqueWithoutUserInput | experienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: experienceUpdateManyWithWhereWithoutUserInput | experienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[]
  }

  export type serviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<serviceCreateWithoutUserInput, serviceUncheckedCreateWithoutUserInput> | serviceCreateWithoutUserInput[] | serviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: serviceCreateOrConnectWithoutUserInput | serviceCreateOrConnectWithoutUserInput[]
    upsert?: serviceUpsertWithWhereUniqueWithoutUserInput | serviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: serviceCreateManyUserInputEnvelope
    set?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    disconnect?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    delete?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    update?: serviceUpdateWithWhereUniqueWithoutUserInput | serviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: serviceUpdateManyWithWhereWithoutUserInput | serviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: serviceScalarWhereInput | serviceScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput> | reviewCreateWithoutUserInput[] | reviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reviewCreateManyUserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type roomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput> | roomCreateWithoutUserInput[] | roomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: roomCreateOrConnectWithoutUserInput | roomCreateOrConnectWithoutUserInput[]
    upsert?: roomUpsertWithWhereUniqueWithoutUserInput | roomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: roomCreateManyUserInputEnvelope
    set?: roomWhereUniqueInput | roomWhereUniqueInput[]
    disconnect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    delete?: roomWhereUniqueInput | roomWhereUniqueInput[]
    connect?: roomWhereUniqueInput | roomWhereUniqueInput[]
    update?: roomUpdateWithWhereUniqueWithoutUserInput | roomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: roomUpdateManyWithWhereWithoutUserInput | roomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: roomScalarWhereInput | roomScalarWhereInput[]
  }

  export type experienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput> | experienceCreateWithoutUserInput[] | experienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: experienceCreateOrConnectWithoutUserInput | experienceCreateOrConnectWithoutUserInput[]
    upsert?: experienceUpsertWithWhereUniqueWithoutUserInput | experienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: experienceCreateManyUserInputEnvelope
    set?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    disconnect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    delete?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    connect?: experienceWhereUniqueInput | experienceWhereUniqueInput[]
    update?: experienceUpdateWithWhereUniqueWithoutUserInput | experienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: experienceUpdateManyWithWhereWithoutUserInput | experienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: experienceScalarWhereInput | experienceScalarWhereInput[]
  }

  export type serviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<serviceCreateWithoutUserInput, serviceUncheckedCreateWithoutUserInput> | serviceCreateWithoutUserInput[] | serviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: serviceCreateOrConnectWithoutUserInput | serviceCreateOrConnectWithoutUserInput[]
    upsert?: serviceUpsertWithWhereUniqueWithoutUserInput | serviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: serviceCreateManyUserInputEnvelope
    set?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    disconnect?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    delete?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    connect?: serviceWhereUniqueInput | serviceWhereUniqueInput[]
    update?: serviceUpdateWithWhereUniqueWithoutUserInput | serviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: serviceUpdateManyWithWhereWithoutUserInput | serviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: serviceScalarWhereInput | serviceScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    connect?: userWhereUniqueInput
  }

  export type roomCreateNestedOneWithoutReviewInput = {
    create?: XOR<roomCreateWithoutReviewInput, roomUncheckedCreateWithoutReviewInput>
    connectOrCreate?: roomCreateOrConnectWithoutReviewInput
    connect?: roomWhereUniqueInput
  }

  export type experienceCreateNestedOneWithoutReviewInput = {
    create?: XOR<experienceCreateWithoutReviewInput, experienceUncheckedCreateWithoutReviewInput>
    connectOrCreate?: experienceCreateOrConnectWithoutReviewInput
    connect?: experienceWhereUniqueInput
  }

  export type serviceCreateNestedOneWithoutReviewInput = {
    create?: XOR<serviceCreateWithoutReviewInput, serviceUncheckedCreateWithoutReviewInput>
    connectOrCreate?: serviceCreateOrConnectWithoutReviewInput
    connect?: serviceWhereUniqueInput
  }

  export type bookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookingCreateOrConnectWithoutReviewInput
    connect?: bookingWhereUniqueInput
  }

  export type userUpdateOneWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    connectOrCreate?: userCreateOrConnectWithoutReviewInput
    upsert?: userUpsertWithoutReviewInput
    disconnect?: boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>, userUncheckedUpdateWithoutReviewInput>
  }

  export type roomUpdateOneWithoutReviewNestedInput = {
    create?: XOR<roomCreateWithoutReviewInput, roomUncheckedCreateWithoutReviewInput>
    connectOrCreate?: roomCreateOrConnectWithoutReviewInput
    upsert?: roomUpsertWithoutReviewInput
    disconnect?: boolean
    delete?: roomWhereInput | boolean
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutReviewInput, roomUpdateWithoutReviewInput>, roomUncheckedUpdateWithoutReviewInput>
  }

  export type experienceUpdateOneWithoutReviewNestedInput = {
    create?: XOR<experienceCreateWithoutReviewInput, experienceUncheckedCreateWithoutReviewInput>
    connectOrCreate?: experienceCreateOrConnectWithoutReviewInput
    upsert?: experienceUpsertWithoutReviewInput
    disconnect?: boolean
    delete?: experienceWhereInput | boolean
    connect?: experienceWhereUniqueInput
    update?: XOR<XOR<experienceUpdateToOneWithWhereWithoutReviewInput, experienceUpdateWithoutReviewInput>, experienceUncheckedUpdateWithoutReviewInput>
  }

  export type serviceUpdateOneWithoutReviewNestedInput = {
    create?: XOR<serviceCreateWithoutReviewInput, serviceUncheckedCreateWithoutReviewInput>
    connectOrCreate?: serviceCreateOrConnectWithoutReviewInput
    upsert?: serviceUpsertWithoutReviewInput
    disconnect?: boolean
    delete?: serviceWhereInput | boolean
    connect?: serviceWhereUniqueInput
    update?: XOR<XOR<serviceUpdateToOneWithWhereWithoutReviewInput, serviceUpdateWithoutReviewInput>, serviceUncheckedUpdateWithoutReviewInput>
  }

  export type bookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: bookingCreateOrConnectWithoutReviewInput
    upsert?: bookingUpsertWithoutReviewInput
    connect?: bookingWhereUniqueInput
    update?: XOR<XOR<bookingUpdateToOneWithWhereWithoutReviewInput, bookingUpdateWithoutReviewInput>, bookingUncheckedUpdateWithoutReviewInput>
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
    isSet?: boolean
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumAvailabilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityFilter<$PrismaModel> | $Enums.Availability
  }

  export type AvailabilityStatusWhereInput = {
    AND?: AvailabilityStatusWhereInput | AvailabilityStatusWhereInput[]
    OR?: AvailabilityStatusWhereInput[]
    NOT?: AvailabilityStatusWhereInput | AvailabilityStatusWhereInput[]
    availability?: StringFilter<"AvailabilityStatus"> | string
    dates?: StringNullableListFilter<"AvailabilityStatus">
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

  export type NestedEnumAvailabilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityWithAggregatesFilter<$PrismaModel> | $Enums.Availability
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvailabilityFilter<$PrismaModel>
    _max?: NestedEnumAvailabilityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type roomCreateWithoutBookingsInput = {
    id?: string
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutRoomInput
    review?: reviewCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId?: string | null
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: reviewUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutBookingsInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
  }

  export type experienceCreateWithoutBookingsInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutExperienceInput
    review?: reviewCreateNestedManyWithoutExperienceInput
  }

  export type experienceUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: reviewUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type experienceCreateOrConnectWithoutBookingsInput = {
    where: experienceWhereUniqueInput
    create: XOR<experienceCreateWithoutBookingsInput, experienceUncheckedCreateWithoutBookingsInput>
  }

  export type serviceCreateWithoutBookingsInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutServiceInput
    review?: reviewCreateNestedManyWithoutServiceInput
  }

  export type serviceUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: reviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type serviceCreateOrConnectWithoutBookingsInput = {
    where: serviceWhereUniqueInput
    create: XOR<serviceCreateWithoutBookingsInput, serviceUncheckedCreateWithoutBookingsInput>
  }

  export type userCreateWithoutBookingInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewCreateNestedManyWithoutUserInput
    room?: roomCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    service?: serviceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutBookingInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    room?: roomUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    service?: serviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
  }

  export type reviewCreateWithoutBookingInput = {
    id?: string
    review: string
    rating: number
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutReviewInput
    room?: roomCreateNestedOneWithoutReviewInput
    experience?: experienceCreateNestedOneWithoutReviewInput
    service?: serviceCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutBookingInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewCreateOrConnectWithoutBookingInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
  }

  export type reviewCreateManyBookingInputEnvelope = {
    data: reviewCreateManyBookingInput | reviewCreateManyBookingInput[]
  }

  export type roomUpsertWithoutBookingsInput = {
    update: XOR<roomUpdateWithoutBookingsInput, roomUncheckedUpdateWithoutBookingsInput>
    create: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutBookingsInput, roomUncheckedUpdateWithoutBookingsInput>
  }

  export type roomUpdateWithoutBookingsInput = {
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutRoomNestedInput
    review?: reviewUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutBookingsInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type experienceUpsertWithoutBookingsInput = {
    update: XOR<experienceUpdateWithoutBookingsInput, experienceUncheckedUpdateWithoutBookingsInput>
    create: XOR<experienceCreateWithoutBookingsInput, experienceUncheckedCreateWithoutBookingsInput>
    where?: experienceWhereInput
  }

  export type experienceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: experienceWhereInput
    data: XOR<experienceUpdateWithoutBookingsInput, experienceUncheckedUpdateWithoutBookingsInput>
  }

  export type experienceUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutExperienceNestedInput
    review?: reviewUpdateManyWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateWithoutBookingsInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type serviceUpsertWithoutBookingsInput = {
    update: XOR<serviceUpdateWithoutBookingsInput, serviceUncheckedUpdateWithoutBookingsInput>
    create: XOR<serviceCreateWithoutBookingsInput, serviceUncheckedCreateWithoutBookingsInput>
    where?: serviceWhereInput
  }

  export type serviceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: serviceWhereInput
    data: XOR<serviceUpdateWithoutBookingsInput, serviceUncheckedUpdateWithoutBookingsInput>
  }

  export type serviceUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutServiceNestedInput
    review?: reviewUpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateWithoutBookingsInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: reviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBookingInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>
  }

  export type userUpdateWithoutBookingInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUpdateManyWithoutUserNestedInput
    room?: roomUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    service?: serviceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBookingInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    room?: roomUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    service?: serviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type reviewUpsertWithWhereUniqueWithoutBookingInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutBookingInput, reviewUncheckedUpdateWithoutBookingInput>
    create: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutBookingInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutBookingInput, reviewUncheckedUpdateWithoutBookingInput>
  }

  export type reviewUpdateManyWithWhereWithoutBookingInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutBookingInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: StringFilter<"review"> | string
    userId?: StringNullableFilter<"review"> | string | null
    roomId?: StringNullableFilter<"review"> | string | null
    experienceId?: StringNullableFilter<"review"> | string | null
    serviceId?: StringNullableFilter<"review"> | string | null
    bookingId?: StringFilter<"review"> | string
    review?: StringFilter<"review"> | string
    rating?: IntFilter<"review"> | number
    createdAt?: DateTimeFilter<"review"> | Date | string
  }

  export type AvailabilityStatusCreatedatesInput = {
    set: string[]
  }

  export type userCreateWithoutExperienceInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    room?: roomCreateNestedManyWithoutUserInput
    service?: serviceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutExperienceInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    room?: roomUncheckedCreateNestedManyWithoutUserInput
    service?: serviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutExperienceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
  }

  export type bookingCreateWithoutExperienceInput = {
    id?: string
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    room?: roomCreateNestedOneWithoutBookingsInput
    service?: serviceCreateNestedOneWithoutBookingsInput
    user?: userCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutExperienceInput = {
    id?: string
    roomId?: string | null
    serviceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutExperienceInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutExperienceInput, bookingUncheckedCreateWithoutExperienceInput>
  }

  export type bookingCreateManyExperienceInputEnvelope = {
    data: bookingCreateManyExperienceInput | bookingCreateManyExperienceInput[]
  }

  export type reviewCreateWithoutExperienceInput = {
    id?: string
    review: string
    rating: number
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutReviewInput
    room?: roomCreateNestedOneWithoutReviewInput
    service?: serviceCreateNestedOneWithoutReviewInput
    booking: bookingCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutExperienceInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewCreateOrConnectWithoutExperienceInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutExperienceInput, reviewUncheckedCreateWithoutExperienceInput>
  }

  export type reviewCreateManyExperienceInputEnvelope = {
    data: reviewCreateManyExperienceInput | reviewCreateManyExperienceInput[]
  }

  export type AvailabilityStatusUpdateManyInput = {
    where: AvailabilityStatusWhereInput
    data: AvailabilityStatusUpdateInput
  }

  export type AvailabilityStatusDeleteManyInput = {
    where: AvailabilityStatusWhereInput
  }

  export type userUpsertWithoutExperienceInput = {
    update: XOR<userUpdateWithoutExperienceInput, userUncheckedUpdateWithoutExperienceInput>
    create: XOR<userCreateWithoutExperienceInput, userUncheckedCreateWithoutExperienceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutExperienceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutExperienceInput, userUncheckedUpdateWithoutExperienceInput>
  }

  export type userUpdateWithoutExperienceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    room?: roomUpdateManyWithoutUserNestedInput
    service?: serviceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutExperienceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    room?: roomUncheckedUpdateManyWithoutUserNestedInput
    service?: serviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type bookingUpsertWithWhereUniqueWithoutExperienceInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutExperienceInput, bookingUncheckedUpdateWithoutExperienceInput>
    create: XOR<bookingCreateWithoutExperienceInput, bookingUncheckedCreateWithoutExperienceInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutExperienceInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutExperienceInput, bookingUncheckedUpdateWithoutExperienceInput>
  }

  export type bookingUpdateManyWithWhereWithoutExperienceInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutExperienceInput>
  }

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[]
    OR?: bookingScalarWhereInput[]
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[]
    id?: StringFilter<"booking"> | string
    roomId?: StringNullableFilter<"booking"> | string | null
    experienceId?: StringNullableFilter<"booking"> | string | null
    serviceId?: StringNullableFilter<"booking"> | string | null
    userId?: StringNullableFilter<"booking"> | string | null
    status?: EnumBookingStatusFilter<"booking"> | $Enums.BookingStatus
    checkedStatus?: BoolNullableFilter<"booking"> | boolean | null
    checkIn?: DateTimeFilter<"booking"> | Date | string
    checkOut?: DateTimeFilter<"booking"> | Date | string
    guests?: IntFilter<"booking"> | number
    price?: IntNullableFilter<"booking"> | number | null
    name?: StringFilter<"booking"> | string
    email?: StringFilter<"booking"> | string
    phone?: StringNullableFilter<"booking"> | string | null
    notes?: StringNullableFilter<"booking"> | string | null
  }

  export type reviewUpsertWithWhereUniqueWithoutExperienceInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutExperienceInput, reviewUncheckedUpdateWithoutExperienceInput>
    create: XOR<reviewCreateWithoutExperienceInput, reviewUncheckedCreateWithoutExperienceInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutExperienceInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutExperienceInput, reviewUncheckedUpdateWithoutExperienceInput>
  }

  export type reviewUpdateManyWithWhereWithoutExperienceInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutExperienceInput>
  }

  export type userCreateWithoutServiceInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    room?: roomCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutServiceInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    room?: roomUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutServiceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutServiceInput, userUncheckedCreateWithoutServiceInput>
  }

  export type bookingCreateWithoutServiceInput = {
    id?: string
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    room?: roomCreateNestedOneWithoutBookingsInput
    experience?: experienceCreateNestedOneWithoutBookingsInput
    user?: userCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutServiceInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutServiceInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput>
  }

  export type bookingCreateManyServiceInputEnvelope = {
    data: bookingCreateManyServiceInput | bookingCreateManyServiceInput[]
  }

  export type reviewCreateWithoutServiceInput = {
    id?: string
    review: string
    rating: number
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutReviewInput
    room?: roomCreateNestedOneWithoutReviewInput
    experience?: experienceCreateNestedOneWithoutReviewInput
    booking: bookingCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutServiceInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    experienceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewCreateOrConnectWithoutServiceInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutServiceInput, reviewUncheckedCreateWithoutServiceInput>
  }

  export type reviewCreateManyServiceInputEnvelope = {
    data: reviewCreateManyServiceInput | reviewCreateManyServiceInput[]
  }

  export type userUpsertWithoutServiceInput = {
    update: XOR<userUpdateWithoutServiceInput, userUncheckedUpdateWithoutServiceInput>
    create: XOR<userCreateWithoutServiceInput, userUncheckedCreateWithoutServiceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutServiceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutServiceInput, userUncheckedUpdateWithoutServiceInput>
  }

  export type userUpdateWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    room?: roomUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    room?: roomUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type bookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutServiceInput, bookingUncheckedUpdateWithoutServiceInput>
    create: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutServiceInput, bookingUncheckedUpdateWithoutServiceInput>
  }

  export type bookingUpdateManyWithWhereWithoutServiceInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutServiceInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutServiceInput, reviewUncheckedUpdateWithoutServiceInput>
    create: XOR<reviewCreateWithoutServiceInput, reviewUncheckedCreateWithoutServiceInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutServiceInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutServiceInput, reviewUncheckedUpdateWithoutServiceInput>
  }

  export type reviewUpdateManyWithWhereWithoutServiceInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutServiceInput>
  }

  export type userCreateWithoutRoomInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewCreateNestedManyWithoutUserInput
    booking?: bookingCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    service?: serviceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutUserInput
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    service?: serviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRoomInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
  }

  export type bookingCreateWithoutRoomInput = {
    id?: string
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    experience?: experienceCreateNestedOneWithoutBookingsInput
    service?: serviceCreateNestedOneWithoutBookingsInput
    user?: userCreateNestedOneWithoutBookingInput
    review?: reviewCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutRoomInput = {
    id?: string
    experienceId?: string | null
    serviceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutRoomInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutRoomInput, bookingUncheckedCreateWithoutRoomInput>
  }

  export type bookingCreateManyRoomInputEnvelope = {
    data: bookingCreateManyRoomInput | bookingCreateManyRoomInput[]
  }

  export type reviewCreateWithoutRoomInput = {
    id?: string
    review: string
    rating: number
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutReviewInput
    experience?: experienceCreateNestedOneWithoutReviewInput
    service?: serviceCreateNestedOneWithoutReviewInput
    booking: bookingCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutRoomInput = {
    id?: string
    userId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewCreateOrConnectWithoutRoomInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutRoomInput, reviewUncheckedCreateWithoutRoomInput>
  }

  export type reviewCreateManyRoomInputEnvelope = {
    data: reviewCreateManyRoomInput | reviewCreateManyRoomInput[]
  }

  export type userUpsertWithoutRoomInput = {
    update: XOR<userUpdateWithoutRoomInput, userUncheckedUpdateWithoutRoomInput>
    create: XOR<userCreateWithoutRoomInput, userUncheckedCreateWithoutRoomInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRoomInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRoomInput, userUncheckedUpdateWithoutRoomInput>
  }

  export type userUpdateWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUpdateManyWithoutUserNestedInput
    booking?: bookingUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    service?: serviceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    service?: serviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type bookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutRoomInput, bookingUncheckedUpdateWithoutRoomInput>
    create: XOR<bookingCreateWithoutRoomInput, bookingUncheckedCreateWithoutRoomInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutRoomInput, bookingUncheckedUpdateWithoutRoomInput>
  }

  export type bookingUpdateManyWithWhereWithoutRoomInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutRoomInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutRoomInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutRoomInput, reviewUncheckedUpdateWithoutRoomInput>
    create: XOR<reviewCreateWithoutRoomInput, reviewUncheckedCreateWithoutRoomInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutRoomInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutRoomInput, reviewUncheckedUpdateWithoutRoomInput>
  }

  export type reviewUpdateManyWithWhereWithoutRoomInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutRoomInput>
  }

  export type reviewCreateWithoutUserInput = {
    id?: string
    review: string
    rating: number
    createdAt?: Date | string
    room?: roomCreateNestedOneWithoutReviewInput
    experience?: experienceCreateNestedOneWithoutReviewInput
    service?: serviceCreateNestedOneWithoutReviewInput
    booking: bookingCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[]
  }

  export type bookingCreateWithoutUserInput = {
    id?: string
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    room?: roomCreateNestedOneWithoutBookingsInput
    experience?: experienceCreateNestedOneWithoutBookingsInput
    service?: serviceCreateNestedOneWithoutBookingsInput
    review?: reviewCreateNestedManyWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[]
  }

  export type roomCreateWithoutUserInput = {
    id?: string
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingCreateNestedManyWithoutRoomInput
    review?: reviewCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutUserInput = {
    id?: string
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutRoomInput
    review?: reviewUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutUserInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput>
  }

  export type roomCreateManyUserInputEnvelope = {
    data: roomCreateManyUserInput | roomCreateManyUserInput[]
  }

  export type experienceCreateWithoutUserInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingCreateNestedManyWithoutExperienceInput
    review?: reviewCreateNestedManyWithoutExperienceInput
  }

  export type experienceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutExperienceInput
    review?: reviewUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type experienceCreateOrConnectWithoutUserInput = {
    where: experienceWhereUniqueInput
    create: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput>
  }

  export type experienceCreateManyUserInputEnvelope = {
    data: experienceCreateManyUserInput | experienceCreateManyUserInput[]
  }

  export type serviceCreateWithoutUserInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingCreateNestedManyWithoutServiceInput
    review?: reviewCreateNestedManyWithoutServiceInput
  }

  export type serviceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutServiceInput
    review?: reviewUncheckedCreateNestedManyWithoutServiceInput
  }

  export type serviceCreateOrConnectWithoutUserInput = {
    where: serviceWhereUniqueInput
    create: XOR<serviceCreateWithoutUserInput, serviceUncheckedCreateWithoutUserInput>
  }

  export type serviceCreateManyUserInputEnvelope = {
    data: serviceCreateManyUserInput | serviceCreateManyUserInput[]
  }

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>
  }

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
  }

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>
  }

  export type roomUpsertWithWhereUniqueWithoutUserInput = {
    where: roomWhereUniqueInput
    update: XOR<roomUpdateWithoutUserInput, roomUncheckedUpdateWithoutUserInput>
    create: XOR<roomCreateWithoutUserInput, roomUncheckedCreateWithoutUserInput>
  }

  export type roomUpdateWithWhereUniqueWithoutUserInput = {
    where: roomWhereUniqueInput
    data: XOR<roomUpdateWithoutUserInput, roomUncheckedUpdateWithoutUserInput>
  }

  export type roomUpdateManyWithWhereWithoutUserInput = {
    where: roomScalarWhereInput
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyWithoutUserInput>
  }

  export type roomScalarWhereInput = {
    AND?: roomScalarWhereInput | roomScalarWhereInput[]
    OR?: roomScalarWhereInput[]
    NOT?: roomScalarWhereInput | roomScalarWhereInput[]
    id?: StringFilter<"room"> | string
    userId?: StringNullableFilter<"room"> | string | null
    ngoziId?: StringNullableFilter<"room"> | string | null
    name?: StringFilter<"room"> | string
    category?: StringFilter<"room"> | string
    featured?: BoolNullableFilter<"room"> | boolean | null
    location?: StringNullableFilter<"room"> | string | null
    country?: StringNullableFilter<"room"> | string | null
    price?: IntFilter<"room"> | number
    originalPrice?: IntNullableFilter<"room"> | number | null
    size?: IntNullableFilter<"room"> | number | null
    maxGuests?: IntFilter<"room"> | number
    bedType?: StringFilter<"room"> | string
    view?: StringFilter<"room"> | string
    description?: StringFilter<"room"> | string
    images?: StringNullableListFilter<"room">
    amenities?: StringNullableListFilter<"room">
    features?: StringNullableListFilter<"room">
    services?: StringNullableListFilter<"room">
    status?: EnumStatusFilter<"room"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"room"> | $Enums.Availability
    popular?: BoolNullableFilter<"room"> | boolean | null
    newlyRenovated?: BoolNullableFilter<"room"> | boolean | null
    address?: StringNullableFilter<"room"> | string | null
    cancellationPolicy?: StringNullableListFilter<"room">
    createdAt?: DateTimeFilter<"room"> | Date | string
    updatedAt?: DateTimeFilter<"room"> | Date | string
  }

  export type experienceUpsertWithWhereUniqueWithoutUserInput = {
    where: experienceWhereUniqueInput
    update: XOR<experienceUpdateWithoutUserInput, experienceUncheckedUpdateWithoutUserInput>
    create: XOR<experienceCreateWithoutUserInput, experienceUncheckedCreateWithoutUserInput>
  }

  export type experienceUpdateWithWhereUniqueWithoutUserInput = {
    where: experienceWhereUniqueInput
    data: XOR<experienceUpdateWithoutUserInput, experienceUncheckedUpdateWithoutUserInput>
  }

  export type experienceUpdateManyWithWhereWithoutUserInput = {
    where: experienceScalarWhereInput
    data: XOR<experienceUpdateManyMutationInput, experienceUncheckedUpdateManyWithoutUserInput>
  }

  export type experienceScalarWhereInput = {
    AND?: experienceScalarWhereInput | experienceScalarWhereInput[]
    OR?: experienceScalarWhereInput[]
    NOT?: experienceScalarWhereInput | experienceScalarWhereInput[]
    id?: StringFilter<"experience"> | string
    userId?: StringNullableFilter<"experience"> | string | null
    name?: StringFilter<"experience"> | string
    featured?: BoolNullableFilter<"experience"> | boolean | null
    location?: StringFilter<"experience"> | string
    price?: IntFilter<"experience"> | number
    originalPrice?: IntNullableFilter<"experience"> | number | null
    maxPax?: IntFilter<"experience"> | number
    description?: StringFilter<"experience"> | string
    images?: StringNullableListFilter<"experience">
    amenities?: StringNullableListFilter<"experience">
    features?: StringNullableListFilter<"experience">
    status?: EnumStatusFilter<"experience"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"experience"> | $Enums.Availability
    popular?: BoolNullableFilter<"experience"> | boolean | null
    address?: StringNullableFilter<"experience"> | string | null
    cancellationPolicy?: StringNullableListFilter<"experience">
    createdAt?: DateTimeFilter<"experience"> | Date | string
    updatedAt?: DateTimeFilter<"experience"> | Date | string
  }

  export type serviceUpsertWithWhereUniqueWithoutUserInput = {
    where: serviceWhereUniqueInput
    update: XOR<serviceUpdateWithoutUserInput, serviceUncheckedUpdateWithoutUserInput>
    create: XOR<serviceCreateWithoutUserInput, serviceUncheckedCreateWithoutUserInput>
  }

  export type serviceUpdateWithWhereUniqueWithoutUserInput = {
    where: serviceWhereUniqueInput
    data: XOR<serviceUpdateWithoutUserInput, serviceUncheckedUpdateWithoutUserInput>
  }

  export type serviceUpdateManyWithWhereWithoutUserInput = {
    where: serviceScalarWhereInput
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyWithoutUserInput>
  }

  export type serviceScalarWhereInput = {
    AND?: serviceScalarWhereInput | serviceScalarWhereInput[]
    OR?: serviceScalarWhereInput[]
    NOT?: serviceScalarWhereInput | serviceScalarWhereInput[]
    id?: StringFilter<"service"> | string
    userId?: StringNullableFilter<"service"> | string | null
    name?: StringFilter<"service"> | string
    featured?: BoolNullableFilter<"service"> | boolean | null
    location?: StringFilter<"service"> | string
    price?: IntFilter<"service"> | number
    originalPrice?: IntNullableFilter<"service"> | number | null
    maxPax?: IntFilter<"service"> | number
    description?: StringFilter<"service"> | string
    images?: StringNullableListFilter<"service">
    amenities?: StringNullableListFilter<"service">
    features?: StringNullableListFilter<"service">
    status?: EnumStatusFilter<"service"> | $Enums.Status
    availability?: EnumAvailabilityFilter<"service"> | $Enums.Availability
    popular?: BoolNullableFilter<"service"> | boolean | null
    address?: StringNullableFilter<"service"> | string | null
    cancellationPolicy?: StringNullableListFilter<"service">
    createdAt?: DateTimeFilter<"service"> | Date | string
    updatedAt?: DateTimeFilter<"service"> | Date | string
  }

  export type userCreateWithoutReviewInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    booking?: bookingCreateNestedManyWithoutUserInput
    room?: roomCreateNestedManyWithoutUserInput
    experience?: experienceCreateNestedManyWithoutUserInput
    service?: serviceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string
    role: string
    receiveMarketing?: boolean | null
    stripeAccountId?: string | null
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
    room?: roomUncheckedCreateNestedManyWithoutUserInput
    experience?: experienceUncheckedCreateNestedManyWithoutUserInput
    service?: serviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
  }

  export type roomCreateWithoutReviewInput = {
    id?: string
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutRoomInput
    bookings?: bookingCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutReviewInput = {
    id?: string
    userId?: string | null
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutReviewInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutReviewInput, roomUncheckedCreateWithoutReviewInput>
  }

  export type experienceCreateWithoutReviewInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutExperienceInput
    bookings?: bookingCreateNestedManyWithoutExperienceInput
  }

  export type experienceUncheckedCreateWithoutReviewInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutExperienceInput
  }

  export type experienceCreateOrConnectWithoutReviewInput = {
    where: experienceWhereUniqueInput
    create: XOR<experienceCreateWithoutReviewInput, experienceUncheckedCreateWithoutReviewInput>
  }

  export type serviceCreateWithoutReviewInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userCreateNestedOneWithoutServiceInput
    bookings?: bookingCreateNestedManyWithoutServiceInput
  }

  export type serviceUncheckedCreateWithoutReviewInput = {
    id?: string
    userId?: string | null
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: bookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type serviceCreateOrConnectWithoutReviewInput = {
    where: serviceWhereUniqueInput
    create: XOR<serviceCreateWithoutReviewInput, serviceUncheckedCreateWithoutReviewInput>
  }

  export type bookingCreateWithoutReviewInput = {
    id?: string
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
    room?: roomCreateNestedOneWithoutBookingsInput
    experience?: experienceCreateNestedOneWithoutBookingsInput
    service?: serviceCreateNestedOneWithoutBookingsInput
    user?: userCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutReviewInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
  }

  export type bookingCreateOrConnectWithoutReviewInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
  }

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>
  }

  export type userUpdateWithoutReviewInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    booking?: bookingUpdateManyWithoutUserNestedInput
    room?: roomUpdateManyWithoutUserNestedInput
    experience?: experienceUpdateManyWithoutUserNestedInput
    service?: serviceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutReviewInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    receiveMarketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    stripeAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
    room?: roomUncheckedUpdateManyWithoutUserNestedInput
    experience?: experienceUncheckedUpdateManyWithoutUserNestedInput
    service?: serviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type roomUpsertWithoutReviewInput = {
    update: XOR<roomUpdateWithoutReviewInput, roomUncheckedUpdateWithoutReviewInput>
    create: XOR<roomCreateWithoutReviewInput, roomUncheckedCreateWithoutReviewInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutReviewInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutReviewInput, roomUncheckedUpdateWithoutReviewInput>
  }

  export type roomUpdateWithoutReviewInput = {
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutRoomNestedInput
    bookings?: bookingUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutReviewInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type experienceUpsertWithoutReviewInput = {
    update: XOR<experienceUpdateWithoutReviewInput, experienceUncheckedUpdateWithoutReviewInput>
    create: XOR<experienceCreateWithoutReviewInput, experienceUncheckedCreateWithoutReviewInput>
    where?: experienceWhereInput
  }

  export type experienceUpdateToOneWithWhereWithoutReviewInput = {
    where?: experienceWhereInput
    data: XOR<experienceUpdateWithoutReviewInput, experienceUncheckedUpdateWithoutReviewInput>
  }

  export type experienceUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutExperienceNestedInput
    bookings?: bookingUpdateManyWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateWithoutReviewInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type serviceUpsertWithoutReviewInput = {
    update: XOR<serviceUpdateWithoutReviewInput, serviceUncheckedUpdateWithoutReviewInput>
    create: XOR<serviceCreateWithoutReviewInput, serviceUncheckedCreateWithoutReviewInput>
    where?: serviceWhereInput
  }

  export type serviceUpdateToOneWithWhereWithoutReviewInput = {
    where?: serviceWhereInput
    data: XOR<serviceUpdateWithoutReviewInput, serviceUncheckedUpdateWithoutReviewInput>
  }

  export type serviceUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutServiceNestedInput
    bookings?: bookingUpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateWithoutReviewInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type bookingUpsertWithoutReviewInput = {
    update: XOR<bookingUpdateWithoutReviewInput, bookingUncheckedUpdateWithoutReviewInput>
    create: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>
    where?: bookingWhereInput
  }

  export type bookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: bookingWhereInput
    data: XOR<bookingUpdateWithoutReviewInput, bookingUncheckedUpdateWithoutReviewInput>
  }

  export type bookingUpdateWithoutReviewInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    room?: roomUpdateOneWithoutBookingsNestedInput
    experience?: experienceUpdateOneWithoutBookingsNestedInput
    service?: serviceUpdateOneWithoutBookingsNestedInput
    user?: userUpdateOneWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutReviewInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewCreateManyBookingInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type reviewUpdateWithoutBookingInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutReviewNestedInput
    room?: roomUpdateOneWithoutReviewNestedInput
    experience?: experienceUpdateOneWithoutReviewNestedInput
    service?: serviceUpdateOneWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutBookingInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutBookingInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyExperienceInput = {
    id?: string
    roomId?: string | null
    serviceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
  }

  export type reviewCreateManyExperienceInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type AvailabilityStatusUpdateInput = {
    availability?: StringFieldUpdateOperationsInput | string
    dates?: AvailabilityStatusUpdatedatesInput | string[]
  }

  export type bookingUpdateWithoutExperienceInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    room?: roomUpdateOneWithoutBookingsNestedInput
    service?: serviceUpdateOneWithoutBookingsNestedInput
    user?: userUpdateOneWithoutBookingNestedInput
    review?: reviewUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutExperienceInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutExperienceInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUpdateWithoutExperienceInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutReviewNestedInput
    room?: roomUpdateOneWithoutReviewNestedInput
    service?: serviceUpdateOneWithoutReviewNestedInput
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutExperienceInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutExperienceInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyServiceInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
  }

  export type reviewCreateManyServiceInput = {
    id?: string
    userId?: string | null
    roomId?: string | null
    experienceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type bookingUpdateWithoutServiceInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    room?: roomUpdateOneWithoutBookingsNestedInput
    experience?: experienceUpdateOneWithoutBookingsNestedInput
    user?: userUpdateOneWithoutBookingNestedInput
    review?: reviewUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutServiceInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutServiceInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUpdateWithoutServiceInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutReviewNestedInput
    room?: roomUpdateOneWithoutReviewNestedInput
    experience?: experienceUpdateOneWithoutReviewNestedInput
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutServiceInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutServiceInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyRoomInput = {
    id?: string
    experienceId?: string | null
    serviceId?: string | null
    userId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
  }

  export type reviewCreateManyRoomInput = {
    id?: string
    userId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type bookingUpdateWithoutRoomInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: experienceUpdateOneWithoutBookingsNestedInput
    service?: serviceUpdateOneWithoutBookingsNestedInput
    user?: userUpdateOneWithoutBookingNestedInput
    review?: reviewUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutRoomInput = {
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutRoomInput = {
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reviewUpdateWithoutRoomInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutReviewNestedInput
    experience?: experienceUpdateOneWithoutReviewNestedInput
    service?: serviceUpdateOneWithoutReviewNestedInput
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutRoomInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutRoomInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewCreateManyUserInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    bookingId: string
    review: string
    rating: number
    createdAt?: Date | string
  }

  export type bookingCreateManyUserInput = {
    id?: string
    roomId?: string | null
    experienceId?: string | null
    serviceId?: string | null
    status: $Enums.BookingStatus
    checkedStatus?: boolean | null
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    price?: number | null
    name: string
    email: string
    phone?: string | null
    notes?: string | null
  }

  export type roomCreateManyUserInput = {
    id?: string
    ngoziId?: string | null
    name: string
    category: string
    featured?: boolean | null
    location?: string | null
    country?: string | null
    price: number
    originalPrice?: number | null
    size?: number | null
    maxGuests: number
    bedType: string
    view: string
    description: string
    images?: roomCreateimagesInput | string[]
    amenities?: roomCreateamenitiesInput | string[]
    features?: roomCreatefeaturesInput | string[]
    services?: roomCreateservicesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    newlyRenovated?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type experienceCreateManyUserInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: experienceCreateimagesInput | string[]
    amenities?: experienceCreateamenitiesInput | string[]
    features?: experienceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type serviceCreateManyUserInput = {
    id?: string
    name: string
    featured?: boolean | null
    location: string
    price: number
    originalPrice?: number | null
    maxPax: number
    description: string
    images?: serviceCreateimagesInput | string[]
    amenities?: serviceCreateamenitiesInput | string[]
    features?: serviceCreatefeaturesInput | string[]
    status: $Enums.Status
    availability: $Enums.Availability
    popular?: boolean | null
    address?: string | null
    availabilityStatus?: XOR<AvailabilityStatusListCreateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceCreatecancellationPolicyInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reviewUpdateWithoutUserInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: roomUpdateOneWithoutReviewNestedInput
    experience?: experienceUpdateOneWithoutReviewNestedInput
    service?: serviceUpdateOneWithoutReviewNestedInput
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUserInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUpdateWithoutUserInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    room?: roomUpdateOneWithoutBookingsNestedInput
    experience?: experienceUpdateOneWithoutBookingsNestedInput
    service?: serviceUpdateOneWithoutBookingsNestedInput
    review?: reviewUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutUserInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    experienceId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    checkedStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roomUpdateWithoutUserInput = {
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUpdateManyWithoutRoomNestedInput
    review?: reviewUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutUserInput = {
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutRoomNestedInput
    review?: reviewUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateManyWithoutUserInput = {
    ngoziId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    bedType?: StringFieldUpdateOperationsInput | string
    view?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: roomUpdateimagesInput | string[]
    amenities?: roomUpdateamenitiesInput | string[]
    features?: roomUpdatefeaturesInput | string[]
    services?: roomUpdateservicesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    newlyRenovated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: roomUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type experienceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUpdateManyWithoutExperienceNestedInput
    review?: reviewUpdateManyWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutExperienceNestedInput
    review?: reviewUncheckedUpdateManyWithoutExperienceNestedInput
  }

  export type experienceUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: experienceUpdateimagesInput | string[]
    amenities?: experienceUpdateamenitiesInput | string[]
    features?: experienceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: experienceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUpdateManyWithoutServiceNestedInput
    review?: reviewUpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: bookingUncheckedUpdateManyWithoutServiceNestedInput
    review?: reviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    originalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    maxPax?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: serviceUpdateimagesInput | string[]
    amenities?: serviceUpdateamenitiesInput | string[]
    features?: serviceUpdatefeaturesInput | string[]
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    popular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityStatus?: XOR<AvailabilityStatusListUpdateEnvelopeInput, AvailabilityStatusCreateInput> | AvailabilityStatusCreateInput[]
    cancellationPolicy?: serviceUpdatecancellationPolicyInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityStatusUpdatedatesInput = {
    set?: string[]
    push?: string | string[]
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