export async function getServerSession() {
  // In a real app, this would verify the session cookie and fetch user data
  // For demo purposes, we'll return a mock admin user

  return {
    user: {
      id: "1",
      name: "Admin User",
      email: "admin@arcadeportal.com",
      isAdmin: true,
    },
  }
}

