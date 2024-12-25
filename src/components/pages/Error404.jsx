import React from 'react'

const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
    <div className="max-w-md p-6">
        <div className="text-red-500 text-9xl">❓</div>
        <h1 className="text-6xl font-bold text-red-500 mt-4">404</h1>
        <p className="text-lg mt-2">Oops! The page you are looking for doesn't exist.</p>
        <p className="text-base mt-1">But don't worry, you can head back to the fun quizzes after some time!</p>
        <a 
            href="/" 
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Take Me Home
        </a>
    </div>
</div>
  )
}

export default Error404