<?php
namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Policy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PolicyController extends Controller
{
    public function index(Request $request)
    {
        $query = Policy::query()->where('status', '!=', 0);

        // Lọc theo tên chính sách
        if ($request->has('policy_name') && !empty($request->policy_name)) {
            $query->where('policy_name', 'like', '%' . $request->policy_name . '%');
        }

        // Lọc theo mô tả chính sách
        if ($request->has('policy_description') && !empty($request->policy_description)) {
            $query->where('policy_description', 'like', '%' . $request->policy_description . '%');
        }

        // Lọc theo từ khóa
        if ($request->has('keywords') && !empty($request->keywords)) {
            $query->where('keywords', 'like', '%' . $request->keywords . '%');
        }

        $list = $query->paginate(3); // Thay đổi số lượng trang theo nhu cầu

        return view('backend.policy.index', compact('list'));
    }





    public function create()
    {
        // Hiển thị form tạo mới chính sách
        return view("backend.policy.create");
    }

    public function store(Request $request)
    {
        // Xác thực dữ liệu
        $request->validate([
            'policy_name' => 'required|string|max:255',
            'policy_description' => 'required|string',
            'keywords' => 'nullable|string',
        ]);

        // Logic để lưu chính sách mới
        $policy = new Policy();
        $policy->policy_name = $request->policy_name;
        $policy->policy_description = $request->policy_description;
        $policy->keywords = $request->keywords;
        $policy->status = $request->status ?? 1; // Nếu không có giá trị status, mặc định là 1
        $policy->created_by = Auth::id(); // Lấy ID người dùng hiện tại
        $policy->save();

        return redirect()->route('admin.policy.index')->with('success', 'Chính sách đã được thêm.');
    }

    public function show(string $id)
    {
        $policy = Policy::find($id);
        if ($policy == null) {
            return redirect()->route('admin.policy.index');
        }

        return view("backend.policy.show", compact('policy'));
    }


    public function edit($id)
    {
        $policy = Policy::find($id);
        if ($policy == null) {
            return redirect()->route('admin.policy.index');
        }
        return view('backend.policy.edit', compact('policy'));
    }

    public function update(Request $request, $id)
    {
        $policy = Policy::find($id);
        if ($policy == null) {
            return redirect()->route('admin.policy.index');
        }

        // Xác thực dữ liệu
        $request->validate([
            'policy_name' => 'required|string|max:255',
            'policy_description' => 'required|string',
            'keywords' => 'nullable|string',
        ]);
        $policy->policy_name = $request->policy_name;
        $policy->policy_description = $request->policy_description;
        $policy->keywords = $request->keywords;
        $policy->save();


        return redirect()->route('admin.policy.index')->with('success', 'Chính sách đã được cập nhật.');
    }

    public function status(string $id)
    {
        $policy = Policy::find($id);
        if ($policy == null) {
            return redirect()->route('admin.policy.index');
        }

        // Toggle status between 1 and 2
        $policy->status = ($policy->status == 1) ? 2 : 1;
        $policy->save();

        return redirect()->route('admin.policy.index')->with('success', 'Trạng thái chính sách đã được cập nhật.');
    }


    public function delete(string $id)
    {
        $policy = Policy::find($id);
        if ($policy == null) {
            return redirect()->route('admin.policy.index');
        }

        // Set status to 0 (trash)
        $policy->status = 0;
        $policy->save();

        return redirect()->route('admin.policy.index')->with('success', 'Chính sách đã được chuyển vào thùng rác.');
    }


    public function trash()
    {
        $list = Policy::where('status', '=', 0)
            ->orderBy('created_at', 'DESC')
            ->get();

        return view("backend.policy.trash", compact('list'));
    }

    public function destroy(string $id)
    {
        $policy = Policy::find($id);
        if ($policy == null) {
            return redirect()->route('admin.policy.index');
        }

        $policy->delete();

        return redirect()->route('admin.policy.trash');
    }

    public function restore(string $id)
    {
        $policy = Policy::find($id);
        if ($policy == null) {
            return redirect()->route('admin.policy.index');
        }

        // Restore by setting status to 1
        $policy->status = 1;
        $policy->save();

        return redirect()->route('admin.policy.index')->with('success', 'Chính sách đã được phục hồi.');
    }

}
