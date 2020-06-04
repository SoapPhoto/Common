import { SchemaDirectiveVisitor } from 'graphql-tools';
import { GraphQLField } from 'graphql';
export declare class LimitDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: GraphQLField<any, any>): void;
}
