"""
Main GraphQL schema - combines all app schemas.
"""

import graphene
from onesignal.schema import schema as onesignal_schema

class Query(onesignal_schema.Query, graphene.ObjectType):
    pass

class Mutation(onesignal_schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)