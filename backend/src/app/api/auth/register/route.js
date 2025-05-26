import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/db/connection";
import SessionStartedOrder from "@/models/SessionStartedOrder";
import fetchFirstDocuments from "@/utils/fetchFirstDocuments/fetchFirst";
import sendToken from "../../utils/sendToken";

export async function POST(request) {
  try {
    await dbConnect();
    fetchFirstDocuments();
    
    const { name, email, password } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 }
      );
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    // Optional: Fetch session started orders (like in your login route)
    const fetchSessionStartedOrdersPromise = SessionStartedOrder.find()
      .then((sessionOrders) => {
        console.log(`Found ${sessionOrders.length} session started orders`);
      })
      .catch((err) => {
        console.error(`Error fetching session started orders:`, err);
      });

    // Create and return response with token
    const response = sendToken(user, 201);
    
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
    return response;
  } catch (error) {
    console.error("Registration error:", error);
    const errorResponse = NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
    
    // Set CORS headers on error response too
    errorResponse.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    errorResponse.headers.set('Access-Control-Allow-Credentials', 'true');
    
    return errorResponse;
  }
}

// Add OPTIONS handler for CORS preflight
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}