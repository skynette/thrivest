export default function TestAdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Admin Login Test</h1>
        <p>If you can see this, the route is working!</p>
        <form className="mt-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 border rounded mb-2"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 border rounded mb-2"
          />
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}