"""
GraphQL schema for todos - defines queries and mutations.
This will be our API interface for the Next.js frontend.
"""

import graphene
from graphene_django import DjangoObjectType
from .models import Todo

class TodoType(DjangoObjectType):
    """GraphQL type for Todo model"""
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed', 'created_at', 'updated_at')

class Query(graphene.ObjectType):
    """Root query for all todo-related data fetching"""
    todos = graphene.List(TodoType)
    todo = graphene.Field(TodoType, id=graphene.Int())
    
    def resolve_todos(self, info):
        """Fetch all todos for authenticated user"""
        if info.context.user.is_authenticated:
            return Todo.objects.filter(user=info.context.user)
        return Todo.objects.none()
    
    def resolve_todo(self, info, id):
        """Fetch specific todo by ID"""
        if info.context.user.is_authenticated:
            try:
                return Todo.objects.get(id=id, user=info.context.user)
            except Todo.DoesNotExist:
                return None
        return None

class CreateTodo(graphene.Mutation):
    """Mutation to create a new todo"""
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String()
    
    todo = graphene.Field(TodoType)
    
    def mutate(self, info, title, description=""):
        if not info.context.user.is_authenticated:
            raise Exception("Authentication required")
        
        todo = Todo.objects.create(
            title=title,
            description=description,
            user=info.context.user
        )
        return CreateTodo(todo=todo)

class Mutation(graphene.ObjectType):
    """Root mutation for all todo-related data modifications"""
    create_todo = CreateTodo.Field()

# Export schema for Django settings
schema = graphene.Schema(query=Query, mutation=Mutation)