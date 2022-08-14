<?php

namespace App\Http\Controllers;

use App\Acme\Repositories\FlowRepository;
use App\Http\Resources\RodentCollection;
use App\Http\Resources\RodentResource;
use App\Models\Rodent;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class FLowsController extends Controller
{
    private FlowRepository $flowRepository;

    public function __construct()
    {
        $this->flowRepository = new FlowRepository();
    }

    /**
     * Show Homepage view
     */
    public function index()
    {
        $rodents = Cache::rememberForever('rodents:all', function () {
            return RodentResource::collection(
                        Rodent::with('excavationField')
                        ->with('rodentType.rodentAttributes')
                        ->orderBy('rodent_id')
                        ->get()

                    )->keyBy->rodent_id;
        });

        $panelFlows = $this->flowRepository->getPanelData();

        $graphData = $this->flowRepository->getPanelGraphData();

        //
        // Get cached flows and statuses if any
        //
        $currentFlows = [];
        $statuses = [];
        
        foreach ($rodents as $rodentId => $rodent) {
            if ($cachedRodent = Cache::get("rodents:$rodentId")) {
                $currentFlows[$rodentId] = Arr::get($cachedRodent, 'current_flow', 0);
                $statuses[$rodentId] = array_map(
                    function ($status) {
                        return $status == 1;
                    },
                    str_split(
                        Arr::get($cachedRodent,'status', [0,0,0,0,0,0,0,0])
                    ));
            }
        }

        return Inertia::render('Homepage/Index', compact(
            'panelFlows',
            'graphData',
            'currentFlows',
            'statuses',
            'rodents'
        ));
    }
}
