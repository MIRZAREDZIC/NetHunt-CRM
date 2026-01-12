import { NextRequest, NextResponse } from 'next/server';
import axiosInstance from '@/utils/axiosInstance';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const response = await axiosInstance.get(`/api/leads/${id}`);
    return NextResponse.json(response.data, { status: 200 });
  } else {
    const queryString = searchParams.toString();
    const url = queryString ? `/api/leads?${queryString}` : '/api/leads';
    const response = await axiosInstance.get(url);
    return NextResponse.json(response.data, { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const contactType = body.contact_type?.toLowerCase();
  
  let endpoint = '/api/leads';
  if (contactType === 'buyer') {
    endpoint = '/api/leads/buyer';
  } else if (contactType === 'supplier') {
    endpoint = '/api/leads/supplier';
  }

  const response = await axiosInstance.post(endpoint, body);
  return NextResponse.json(response.data, { status: 200 });
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { error: 'Lead ID is required for update' },
      { status: 400 }
    );
  }

  const body = await request.json();
  const response = await axiosInstance.put(`/api/leads/${id}`, body);
  return NextResponse.json(response.data, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { error: 'Lead ID is required for deletion' },
      { status: 400 }
    );
  }

  const response = await axiosInstance.delete(`/api/leads/${id}`);
  return NextResponse.json(response.data, { status: 200 });
}
