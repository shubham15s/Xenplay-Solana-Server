import { makePrediction } from "../make";
import { NextResponse, NextRequest } from "next/server";

// Define a type for the expected request body
interface PredicitonRequestBody {
  id: number;
  eventId: string;
  prediction_choice: string;
  amount: number;
  escrowAccount: string;
  predictedUserAccount: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const data: PredicitonRequestBody = await request.json();

    // Call the createEvent function and await the response
    const res = await makePrediction(
      data.id,
      data.eventId,
      data.prediction_choice,
      data.amount,
      data.escrowAccount,
      data.predictedUserAccount
    );

    // Log the response data for debugging
    console.log("Transaction signature:", res.signature);
    console.log("Prediction account:", res.predictionAccount);

    // Return a successful JSON response
    return NextResponse.json({
      status: "success",
      signature: res.signature,
      predictionAccount: res.predictionAccount,
    });
  } catch (error) {
    // Handle any errors that occur during the request processing
    console.error("Error creating prediction:", error);

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
