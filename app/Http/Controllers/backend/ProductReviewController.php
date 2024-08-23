<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductReviewRequest;
use App\Models\Product;
use App\Models\ProductReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class ProductReviewController extends Controller
{
    public function getReviewCount($id)
    {
        if (!is_numeric($id)) {
            return response()->json(['error' => 'ID không hợp lệ'], 400);
        }
    
        $count = ProductReview::where('product_id', $id)
            ->count();
    
        return response()->json(['count' => $count]);
    }
    /**
     * Display a listing of the resource.
     */
public function index(Request $request)
{
    $query = Product::query();

    // Lọc theo tên sản phẩm
    if ($request->filled('product_name')) {
        $query->where('product_name', 'like', '%' . $request->product_name . '%');
    }

    // Lọc theo số lượng đánh giá
    if ($request->filled('review_count')) {
        $query->whereHas('reviews', function ($q) use ($request) {
            $q->select('product_id')
              ->groupBy('product_id')
              ->havingRaw('COUNT(*) >= ?', [$request->review_count]);
        });
    }

    // Lọc sản phẩm có hoặc không có đánh giá
    if ($request->filled('has_reviews')) {
        if ($request->has_reviews == 'yes') {
            $query->has('reviews');
        } elseif ($request->has_reviews == 'no') {
            $query->doesntHave('reviews');
        }
    }

    // Lấy danh sách sản phẩm
    $products = $query->with('reviews')->get();

    return view('backend.productreview.index', compact('products'));
}

    public function create()
    {
        return view("backend.productreview.create");
    }

    /**
     * Store a newly created resource in storage.
     */


    /**
     * Display the specified resource.
     */
    public function show(string $review_id)
    {
        // Lấy thông tin đánh giá dựa trên review_id
        $productreview = ProductReview::where('review_id', $review_id)->first();
        if ($productreview == null) {
            return redirect()->route('admin.productreview.index');
        }
    
        // Lấy user_id từ đánh giá hiện tại
        $user_id = $productreview->user_id;
    
        // Lấy tất cả các đánh giá của user_id này
        $reviews = ProductReview::where('user_id', $user_id)->get();
    
        // Lấy thông tin sản phẩm liên quan cho từng đánh giá
        foreach ($reviews as $review) {
            $review->product = Product::find($review->product_id);
        }
    
        return view("backend.productreview.show", compact('reviews'));
    }
    


    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */

    /**
     * Remove the specified resource from storage.
     */
    public function status (string $id)
    {
        $productreview = ProductReview::find($id);
        if ($productreview == null) {
            return redirect()->route('admin.productreview.index');
        }
        $productreview->status = ($productreview->status == 1) ? 2: 1;
        $productreview->updated_at = date('Y-m-d H:i:s');
        $productreview->save();
        return redirect()->route('admin.productreview.index');
    }
    public function delete(string $id)
    {
    $productreview = ProductReview::find($id);
        if ($productreview == null) {
            return redirect()->route('admin.productreview.index');
        }
    $productreview->status = 0;
    $productreview->updated_at = date('Y-m-d H:i:s');
    $productreview->updated_by = Auth::id() ?? 1;
    $productreview->save();
    return redirect()->route('admin.productreview.index');
    }
    public function trash()
    {
        $list=ProductReview::where('status','=',0)
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.productreview.trash",compact('list'));
    }
    public function restore(string $id)
    {
        $productreview = ProductReview::find($id);
        if ($productreview == null) {
            return redirect()->route('admin.productreview.index');
        }
    $productreview->status = 2;
    $productreview->updated_at = date('Y-m-d H:i:s');
    $productreview->updated_by = Auth::id() ?? 1;
    $productreview->save();
    return redirect()->route('admin.productreview.index');
    }
    public function destroy(string $id)
    {
        $productreview = ProductReview::find($id);
        if ($productreview == null) {
        return redirect()->route('admin.productreview.index');
        }
        $productreview->delete();
        return redirect()->route('admin.productreview.trash');
    }
}
