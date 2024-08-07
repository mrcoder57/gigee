import connectToDb from '@/dbConfig/dbCon';
import { CustomNextRequest, verifyToken } from '@/middleware/auth';
import { NextResponse, NextRequest } from 'next/server';
import Bid from '@/models/bidsModel';
import { z } from 'zod';


const paramsSchema = z.object({
  bidId: z.string().nonempty(),
});

export async function GET(req: CustomNextRequest, { params }: { params: { bidId: string } }) {
  await connectToDb();

  const tokenError = verifyToken(req);
  if (tokenError) {
    return tokenError;
  }

  const validation = paramsSchema.safeParse(params);
  if (!validation.success) {
    return NextResponse.json({ success: false, error: validation.error.errors });
  }

  const { bidId } = validation.data;

  try {
    const bid = await Bid.findById(bidId);

    if (!bid) {
      return NextResponse.json({ success: false, error: 'Bid not found' });
    }
   

    return NextResponse.json(
      { message: "Bid fetched successfully", bid },
      { status: 200 }
    );
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function DELETE(req: CustomNextRequest, { params }: { params: { bidId: string } }) {
    await connectToDb();
  
    const tokenError = verifyToken(req);
    if (tokenError) {
      return tokenError;
    }
  
    const validation = paramsSchema.safeParse(params);
    if (!validation.success) {
      return NextResponse.json({ success: false, error: validation.error.errors });
    }
  
    const { bidId } = validation.data;
    const userId = req.userId;
  
    try {
      const bid = await Bid.findById(bidId);
  
     
      if (!bid) {
        return NextResponse.json({ success: false, error: 'Bid not found' });
      }
      if ((bid as any).userId.toString() !== userId) {
        return NextResponse.json({ success: false, error: 'Not authorized to delete this bid' });
      }
  
      await Bid.findByIdAndDelete(bidId);
      return NextResponse.json({ success: true, message: 'Bid deleted successfully' });
    } catch (error:any) {
      return NextResponse.json({ success: false, error: error.message });
    }
  }
