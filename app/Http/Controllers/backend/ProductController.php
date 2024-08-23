<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Http\Requests\StoreProductRequest;

class ProductController extends Controller
{
    public function getProductsByBrand($id)
{
    $product = Product::find($id);
    
    if (!$product) {
        return response()->json(['message' => 'Sản phẩm không tìm thấy.'], 404);
    }

    $brandId = $product->brand_id;

    try {
        $relatedProducts = Product::where('brand_id', $brandId)
            ->where('status', '1')
            ->where('product_id', '!=', $id)
            ->get();

        return response()->json($relatedProducts);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Đã xảy ra lỗi: ' . $e->getMessage()], 500);
    }
}

    public function getByCategory($categoryId)
    {
        $list = Product::where('products.status', '!=', 0)
            ->where('products.category_id', $categoryId)
            ->join('categories', 'products.category_id', 'categories.id')
            ->join('brands', 'products.brand_id', 'brands.id')
            ->orderBy('products.created_at', 'DESC')
            ->select("products.product_id", "products.image", "products.product_name", "categories.name as categoryname", "brands.name as brandname","products.description","products.price","products.discount","products.product_stock","products.rating","products.created_at",)
            ->get();

        return response()->json($list);
    }


    public function product()
    {
        $products = Product::where('status', '!=', 0)
                            ->orderBy('created_at', 'desc')
                            ->get();
        return response()->json($products);
    }

    public function productdetail($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        return response()->json($product);
    }
    public function index(Request $request)
    {
        $categories = Category::all();
        $brands = Brand::all();
        
        // Khởi tạo query với các điều kiện lọc
        $query = Product::where('products.status', '!=', 0)
            ->join('categories', 'products.category_id', 'categories.id')
            ->join('brands', 'products.brand_id', 'brands.id')
            ->select(
                'products.price',
                'products.discount',
                'products.product_stock',
                'products.product_id',
                'products.image',
                'products.product_name',
                'categories.name as categoryname',
                'brands.name as brandname'
            );
    
        // Áp dụng bộ lọc dựa trên các tiêu chí từ request
        if ($request->filled('product_name')) {
            $query->where('products.product_name', 'like', $request->input('product_name') . '%');
        }
    
        if ($request->filled('price_min')) {
            $query->where('products.price', '>=', $request->input('price_min'));
        }
    
        if ($request->filled('price_max')) {
            $query->where('products.price', '<=', $request->input('price_max'));
        }
    
        if ($request->filled('category_id')) {
            $query->where('products.category_id', $request->input('category_id'));
        }
    
        if ($request->filled('brand_id')) {
            $query->where('products.brand_id', $request->input('brand_id'));
        }
    
        // Lấy kết quả phân trang
        $list = $query->orderBy('products.created_at', 'DESC')
            ->paginate(10)
            ->appends($request->query()); // Để duy trì các tham số lọc trong phân trang
    
        // Tạo HTML cho danh mục và thương hiệu
        $htmlcategory = $categories->map(function ($category) {
            return "<option value='" . $category->id . "'>" . $category->name . "</option>";
        })->implode('');
    
        $htmlbrand = $brands->map(function ($brand) {
            return "<option value='" . $brand->id . "'>" . $brand->name . "</option>";
        })->implode('');
    
        // Kiểm tra nếu không có sản phẩm nào sau khi lọc
        $message = null;
        if ($list->isEmpty()) {
            $message = 'Không có sản phẩm nào phù hợp với tiêu chí lọc.';
        }

        return view("backend.product.index", compact('list', 'htmlcategory', 'htmlbrand', 'categories', 'brands', 'message'));
    }
    
    
    
    public function create()
    {
        $categories = Category::all();
        $brands = Brand::all();

        $htmlcategoryid = '';
        $htmlbrandid = '';

        foreach ($categories as $category) {
            $htmlcategoryid .= "<option value='" . $category->id . "'>" . $category->name . '</option>';
        }

        foreach ($brands as $brand) {
            $htmlbrandid .= "<option value='" . $brand->id . "'>" . $brand->name . '</option>';
        }

        return view('backend.product.create', compact('htmlcategoryid', 'htmlbrandid'));
    }

    public function edit($product_id)
    {
        $product = Product::where('product_id', $product_id)->first();
        if ($product == null) {
            return redirect()->route('admin.product.index');
        }

        $categories = Category::all();
        $brands = Brand::all();


        $htmlcategoryid = '';
        $htmlbrandid = '';

        foreach ($categories as $category) {
            $htmlcategoryid .= "<option value='" . $category->id . "'" . ($product->category_id == $category->id ? ' selected' : '') . '>' . $category->name . '</option>';
        }

        foreach ($brands as $brand) {
            $htmlbrandid .= "<option value='" . $brand->id . "'" . ($product->brand_id == $brand->id ? ' selected' : '') . '>' . $brand->name . '</option>';
        }

        return view('backend.product.edit', compact('product', 'htmlcategoryid', 'htmlbrandid'));
    }
    public function store(StoreProductRequest $request)
    {
        $product = new Product();
    
        // Cập nhật thông tin sản phẩm
        $product->product_name = $request->product_name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->rating = $request->rating;
        $product->product_stock = $request->product_stock;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
    
        // Xử lý ảnh
        if ($request->hasFile('image')) {
            $exten = $request->file('image')->extension();
            if (in_array($exten, ['png', 'jpg', 'jpeg', 'gif', 'webp'])) {
                $filename = Str::of($request->product_name)->slug('-') . '-' . time() . '.' . $exten;
                $request->image->move(public_path('images/products'), $filename);
                $product->image = $filename;
            }
        }
    
        // Cập nhật trạng thái, ngày cập nhật và người cập nhật
        $product->status = $request->status;
        $product->updated_at = now();
        $product->updated_by = Auth::id() ?? 1;
        
        // Lưu sản phẩm
        $product->save();
    
        // Chuyển hướng về trang danh sách sản phẩm
        return redirect()->route('admin.product.index');
    }
    

    public function update(Request $request, string $product_id)
    {
        $product = Product::where('product_id', $product_id)->first();
        
        if ($product == null) {
            return redirect()->route('admin.product.index');
        }

        $price = $request->price; // Giá nhập
        $priceSale = $price * (1 + rand(1, 20) / 100); // Tính giá bán từ giá nhập

        $product->product_name = $request->product_name;
        $product->description = $request->description;
        $product->price = $price; // Giá nhập
        $product->discount = $request->discount;
        $product->rating = $request->rating;
        $product->product_stock = $request->product_stock;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;

        if ($request->hasFile('image')) {
            $exten = $request->file('image')->extension();
            if (in_array($exten, ['png', 'jpg', 'jpeg', 'gif', 'webp'])) {
                $filename = Str::of($request->product_name)->slug('-') . '.' . $exten;
                $request->image->move(public_path('images/products'), $filename);
                $product->image = $filename;
            }
        }

        $product->status = $request->status;
        $product->updated_at = now();
        $product->updated_by = Auth::id() ?? 1;
        $product->save();

        return redirect()->route('admin.product.index');
    }



    public function delete(string $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return redirect()->route('admin.product.index')->with('error', 'Sản phẩm không tồn tại.');
        }
    
        // Cập nhật trạng thái và thông tin khác
        $product->status = 0;
        $product->updated_at = now();
        $product->updated_by = Auth::id() ?? 1;
        $product->save();
    
        return redirect()->route('admin.product.index')->with('success', 'Sản phẩm đã được xóa.');
    }
    
        public function show(string $product_id)
    {
        $product = Product::with('user')->where('product_id', $product_id)->first();

        if ($product == null) {
            return redirect()->route('admin.product.index');
        }

        return view("backend.product.show", [
            'product' => $product,
            'userName' => $product->user ? $product->user->name : 'Không có người dùng'
        ]);
    }

    public function trash()
    {
        $list = Product::where('status', '=', 0)
            ->select("product_id", "product_name","category_id", "brand_id", "image", "status")
            ->orderBy('created_at', 'DESC')
            ->get();
    
        return view("backend.product.trash", compact('list'));
    }
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if ($product == null) {
        return redirect()->route('admin.product.index');
        }
        $product->delete();
        return redirect()->route('admin.product.trash');
    }
    public function restore(string $id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return redirect()->route('admin.product.index');
        }
    $product->status = 2;
    $product->updated_at = date('Y-m-d H:i:s');
    $product->updated_by = Auth::id() ?? 1;
    $product->save();
    return redirect()->route('admin.product.index');
    }
    public function clone($product_id)
    {
        $product = Product::findOrFail($product_id);
        $newProduct = $product->replicate();
        $newProduct->product_name = $newProduct->product_name . ' (Sao chép)';
        $newProduct->status = 2; // Chưa xuất bản, để bạn có thể chỉnh sửa trước khi xuất bản
        $newProduct->save();

        return redirect()->route('admin.product.edit', $newProduct->product_id)
            ->with('success', 'Sản phẩm đã được sao chép thành công.');
    }
    public function delete_multiple(Request $request)
    {
        $ids = explode(',', $request->input('ids'));
    
        Product::whereIn('product_id', $ids)->update([
            'status' => 0, // Cập nhật trạng thái thành 0 để đưa vào thùng rác
            'updated_by' => Auth::id() ?? 1,
        ]);
    
        return redirect()->route('admin.product.index')->with('success', 'Các sản phẩm đã được xóa.');
    }
    
}
