<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // return component view('dashboard.index');
        return view('layouts.admin_master');
    }

    public function store(Request $request)
    {
        //
        $this->formValidation($request);
        $cat_info = new Category;
        $cat_info->cat_name = $request->cat_name;
        $cat_info->save();

        return ['status'=>'success'];
    }

    public function formValidation($request){
        $this->validate($request,[
            'cat_name' =>'required',
        ]);
    }
}
