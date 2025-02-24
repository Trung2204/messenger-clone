import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // Redirect to the sign-in page if not authenticated
  },
});

export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"], // Protect the routes
};
