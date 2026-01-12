import { NextRequest, NextResponse } from 'next/server';
import axiosInstance from '@/utils/axiosInstance';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await axiosInstance.post('/api/leads/supplier', body);
  return NextResponse.json(response.data, { status: response.status });
}
