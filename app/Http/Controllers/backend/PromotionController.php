<?php 

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePromotionRequest;
use App\Models\Promotion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;

class PromotionController extends Controller
{
    public function index(Request $request)
    {
        $query = Promotion::query();

        if ($request->filled('promotion_name')) {
            $query->where('promotion_name', 'LIKE', '%' . $request->promotion_name . '%');
        }

        if ($request->filled('promotion_type')) {
            $query->where('promotion_type', $request->promotion_type);
        }

        if ($request->filled('discount_type')) {
            $query->where('discount_type', $request->discount_type);
        }

        if ($request->filled('start_date')) {
            $query->whereDate('start_date', '>=', $request->start_date);
        }

        if ($request->filled('end_date')) {
            $query->whereDate('end_date', '<=', $request->end_date);
        }

        $list = $query->paginate(5);

        return view('backend.promotion.index', compact('list'));
    }



    public function update(Request $request, string $id)
    {
        $promotion = Promotion::findOrFail($id);

        // Cập nhật các trường khác
        $promotion->promotion_name = $request->promotion_name;
        $promotion->discount_type = $request->discount_type;
        $promotion->discount_value = $request->discount_value;
        $promotion->start_date = $request->start_date;
        $promotion->end_date = $request->end_date;

        // Xử lý hình ảnh nếu có
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/images/promotions', $imageName);
            
            // Xóa hình ảnh cũ nếu cần
            if ($promotion->image && file_exists(storage_path('app/public/images/promotions/' . $promotion->image))) {
                unlink(storage_path('app/public/images/promotions/' . $promotion->image));
            }
            
            // Cập nhật tên hình ảnh mới
            $promotion->image = $imageName;
        }

        // Cập nhật thông tin khác
        $promotion->updated_at = Carbon::now();
        $promotion->updated_by = Auth::id() ?? 1;
        $promotion->save();

        return redirect()->route('admin.promotion.index');
    }

    public function store(StorePromotionRequest $request)
    {
        $promotion = new Promotion();
        $promotion->promotion_name = $request->promotion_name;
        $promotion->discount_type = $request->discount_type;
        $promotion->discount_value = $request->discount_value;
        $promotion->start_date = $request->start_date;
        $promotion->end_date = $request->end_date;
        $promotion->created_at = Carbon::now();
        $promotion->created_by = Auth::id() ?? 1;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->extension(); // hoặc $image->getClientOriginalExtension()
        
            // Kiểm tra loại hình ảnh
            if (in_array($extension, ['png', 'jpg', 'jpeg', 'gif', 'webp'])) {
                // Tạo tên file mới từ tên sản phẩm
                $filename = Str::slug($request->promotion_name, '-') . '.' . $extension;
        
                // Di chuyển file đến thư mục lưu trữ
                $image->move(public_path('images/promotions'), $filename);
        
                // Lưu tên file vào cơ sở dữ liệu
                $promotion->image = $filename;
            }
        }        

        $promotion->save();

        return redirect()->route('admin.promotion.index');
    }

    public function show(string $id)
    {
        $promotion = Promotion::findOrFail($id);
        return view("backend.promotion.show", compact('promotion'));
    }

    public function delete(string $id)
    {
        $promotion = Promotion::find($id);
        if ($promotion == null) {
            return redirect()->route('admin.promotion.index');
        }
        $promotion->delete(); // Xóa mềm
        return redirect()->route('admin.promotion.index');
    }

    public function trash()
    {
        $list = Promotion::onlyTrashed()->orderBy('created_at', 'DESC')->get();
        return view('backend.promotion.trash', compact('list'));
    }

    public function restore(string $id)
    {
        $promotion = Promotion::withTrashed()->find($id);
        if ($promotion == null) {
            return redirect()->route('admin.promotion.index');
        }
        $promotion->restore(); // Phục hồi
        return redirect()->route('admin.promotion.index');
    }

    public function destroy(string $id)
    {
        $promotion = Promotion::withTrashed()->find($id);
        if ($promotion == null) {
            return redirect()->route('admin.promotion.index');
        }
        $promotion->forceDelete(); // Xóa vĩnh viễn
        return redirect()->route('admin.promotion.trash');
    }
    public function create()
    {
        return view('backend.promotion.create'); // Đảm bảo rằng view 'create' tồn tại trong thư mục 'backend/promotion'
    }
    public function edit(string $id)
    {
        $promotion = Promotion::find($id);
        if($promotion ==  null)
        {
            return redirect()->route('admin.promotion.index');
        }
        $list=Promotion::orderBy('created_at','DESC')
        ->get();

       
        return view("backend.promotion.edit",compact('list','promotion'));
    }
}
