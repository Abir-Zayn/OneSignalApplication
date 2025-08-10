import { ArrowLeft, Calendar, CheckCircle2, Circle } from 'lucide-react';
import Link from 'next/link';

export default async function TodoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // In later modules, we'll fetch from Django GraphQL API
  const todo = {
    id: params.id,
    title: 'Learn Next.js Framework',
    description:
      'Master the fundamentals of Next.js including App Router, Server Components, and API routes. Build a complete understanding of modern React development patterns.',
    completed: false,
    createdAt: new Date().toISOString(),
    priority: 'High',
    category: 'Learning',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Navigation */}
        <Link
          href="/todos"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Todos
        </Link>

        {/* Todo Detail Card */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
                {todo.title}
              </h1>
              <div className="flex items-center ml-4">
                {todo.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center space-x-3">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  todo.completed
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {todo.completed ? 'Completed' : 'In Progress'}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {todo.priority} Priority
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {todo.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {todo.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              Created on{' '}
              {new Date(todo.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
              </button>
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                Edit
              </button>
              <button className="px-4 py-2 text-red-600 border border-red-300 rounded-xl hover:bg-red-50 transition-colors font-medium">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
