/**
 * Based on ReflectionKind.
 *
 * https://github.com/TypeStrong/typedoc/blob/master/src/lib/models/reflections/abstract.ts
 */
export enum ManualElementKind {
    Global = 0,
    ExternalModule = 1 << 0,
    Module = 1 << 1,
    Enum = 1 << 2,
    EnumMember = 1 << 4,
    Variable = 1 << 5,
    Function = 1 << 6,
    Class = 1 << 7,
    Interface = 1 << 8,
    Constructor = 1 << 9,
    Property = 1 << 10,
    Method = 1 << 11,
    CallSignature = 1 << 12,
    IndexSignature = 1 << 13,
    ConstructorSignature = 1 << 14,
    Parameter = 1 << 15,
    TypeLiteral = 1 << 16,
    TypeParameter = 1 << 17,
    Accessor = 1 << 18,
    GetSignature = 1 << 19,
    SetSignature = 1 << 20,
    ObjectLiteral = 1 << 21,
    TypeAlias = 1 << 22,
    Event = 1 << 23,
    Reference = 1 << 24,

    ClassOrInterface = Class | Interface,
    VariableOrProperty = Variable | Property,
    FunctionOrMethod = ManualElementKind.Function | Method,
    ClassMember = Accessor | Constructor | Method | Property | Event,

    SomeSignature = CallSignature | IndexSignature | ConstructorSignature | GetSignature | SetSignature,
    SomeModule = Module | ExternalModule,
    SomeType = Interface | TypeLiteral | TypeParameter | TypeAlias,
    SomeValue = Variable | Function | ObjectLiteral,
}
