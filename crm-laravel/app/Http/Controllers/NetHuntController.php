<?php

namespace App\Http\Controllers;

use App\Services\NetHuntService;
use App\Http\Requests\BuyerCreateRequest;
use App\Http\Requests\SupplierCreateRequest;

class NetHuntController extends Controller
{
    protected $netHuntService;

    public function __construct(NetHuntService $netHuntService)
    {
        $this->netHuntService = $netHuntService;
    }

    /**
     * Create buyer lead in NetHunt CRM
     */
    public function createBuyerLead(BuyerCreateRequest $request)
    {
        $result = $this->netHuntService->processBuyerLead($request->validated());
        
        return response()->json($result, $result['success'] ? 201 : 500);
    }

    /**
     * Create supplier lead in NetHunt CRM
     */
    public function createSupplierLead(SupplierCreateRequest $request)
    {
        $result = $this->netHuntService->processSupplierLead($request->validated());
        
        return response()->json($result, $result['success'] ? 201 : 500);
    }
} 