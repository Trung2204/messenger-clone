import { NextRequest, NextResponse } from "next/server";
import { pusherServer } from "@/app/libs/pusher";
import { getSession } from "next-auth/react";

export async function POST(request: NextRequest) {
  const session = await getSession();

  if (!session?.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
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
