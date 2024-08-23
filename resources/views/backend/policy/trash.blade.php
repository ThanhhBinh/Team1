@extends('layouts.admin')

@section('title', 'Thùng Rác Chính Sách')

@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Thùng Rác Chính Sách</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Thùng Rác Chính Sách</li>
                </ol>
            </div>
        </div>
    </div>
</section>
<section class="content">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-12 text-right">
                    <a class="btn btn-sm btn-info" href="{{ route('admin.policy.index') }}">
                        <i class="fas fa-arrow-left"></i> Quay về trang chính
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" style="width:30px">#</th>
                                <th>Tên Chính Sách</th>
                                <th>Mô tả Chính Sách</th>
                                <th>Key word</th>
                                <th class="text-center" style="width:200px">Chức năng</th>
                                <th class="text-center" style="width:30px">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($list as $policy)
                            <tr>
                                <td class="text-center">
                                    <input type="checkbox" id="checkId" value="{{ $policy->id }}" name="checkId[]">
                                </td>
                                <td>{{ $policy->policy_name }}</td>
                                <td>{{ $policy->policy_description }}</td>
                                <td>{{ $policy->keywords }}</td>
                                <td class="text-center">
                                    <!-- Nút chi tiết -->
                                    <a href="{{ route('admin.policy.show', $policy->id) }}" class="btn btn-sm btn-info">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <!-- Nút khôi phục -->
                                    <form action="{{ route('admin.policy.restore', $policy->id) }}" method="post" class="d-inline">
                                        @csrf
                                        @method('get') <!-- Hoặc 'post' nếu bạn muốn thay đổi phương thức -->
                                        <button type="submit" class="btn btn-sm btn-primary">
                                            <i class="fas fa-undo"></i>
                                        </button>
                                    </form>
                                    <!-- Nút xóa -->
                                    <form action="{{ route('admin.policy.destroy', $policy->id) }}" method="post" class="d-inline">
                                        @csrf
                                        @method('delete')
                                        <button type="submit" class="btn btn-sm btn-danger">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </form>
                                </td>
                                <td class="text-center">{{ $policy->id }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
