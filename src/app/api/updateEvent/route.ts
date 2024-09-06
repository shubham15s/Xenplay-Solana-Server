import { updateEvent } from "../create";
import { NextResponse, NextRequest } from "next/server";

// Define a type for the expected request body
interface EventRequestBody {
  isActive: boolean;
  event: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const data: EventRequestBody = await request.json();

    // Call the createEvent function and await the response
    const res = await updateEvent(data.isActive, data.event);

    // Log the response data for debugging
    console.log("Transaction signature:", res.signature);

    // Return a successful JSON response
    return NextResponse.json({
      status: "success",
      signature: res.signature,
    });
  } catch (error) {
    // Handle any errors that occur during the request processing
    console.error("Error creating event:", error);

    // Return an error response with status code 500
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to create event",
      },
      { status: 500 }
    );
  }
}
