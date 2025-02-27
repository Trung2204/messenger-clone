import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { pusherServer } from "@/app/libs/pusher";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const textBody = await request.text();
    const params = new URLSearchParams(textBody);
    const socketId = params.get("socket_id");
    const channel = params.get("channel_name");

    if (!socketId || !channel) {
      return NextResponse.json(
        { error: "Missing socket_id or channel_name" },
        { status: 400 }
      );
    }

    const data = {
      user_id: session.user.email,
    };

    const authResponse = pusherServer.authorizeChannel(socketId, channel, data);

    return NextResponse.json(authResponse);
  } catch (error) {
    console.log("Error parsing form data:", error);
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }
}
