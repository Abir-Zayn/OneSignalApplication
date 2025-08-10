import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';

export default async function TodosPage() {
  // Demo Todos
  const todos = [
    {
      id: 1,
      title: 'Learn Next.js',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn React',
      completed: true,
    },
    {
      id: 3,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 4,
      title: 'Learn JavaScript',
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Your Todos
              </h1>
              <p className="text-gray-600 mt-1">
                {todos.filter((todo) => !todo.completed).length} of{' '}
                {todos.length} tasks remaining
              </p>
            </div>
            <Link href="/todos/new">
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                <Plus className="w-4 h-4 mr-2" />
                Add Todo
              </button>
            </Link>
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 mr-4"
                    readOnly
                  />
                  <span
                    className={`text-lg ${
                      todo.completed
                        ? 'line-through text-gray-500'
                        : 'text-gray-900'
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>
                <Link
                  href={`/todos/${todo.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No todos yet
            </h3>
            <p className="text-gray-600">
              Create your first todo to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
