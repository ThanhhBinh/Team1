@extends('layouts.admin')

@section('title', 'Chỉnh Sửa Chính Sách')

@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Chỉnh Sửa Chính Sách</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Chỉnh Sửa Chính Sách</li>
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
                        <i class="fas fa-arrow-left"></i> Quay về danh sách chính sách
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.policy.update', $policy->id) }}" method="post">
                @csrf
                @method('put')
                <div class="form-group">
                    <label for="policy_name">Tên Chính Sách</label>
                    <input type="text" name="policy_name" id="policy_name" class="form-control" value="{{ old('policy_name', $policy->policy_name) }}" required>
                </div>
                <div class="form-group">
                    <label for="policy_description">Mô tả Chính Sách</label>
                    <textarea name="policy_description" id="policy_description" class="form-control" required>{{ old('policy_description', $policy->policy_description) }}</textarea>
                </div>
                <div class="form-group">
                    <label for="keywords">Key word</label>
                    <input type="text" name="keywords" id="keywords" class="form-control" value="{{ old('keywords', $policy->keywords) }}">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Cập nhật</button>
                </div>
            </form>
            <form action="{{ route('admin.policy.status', $policy->id) }}" method="post" class="d-inline">
                @csrf
                @method('post')
                
            </form>
        </div>
    </div>
</section>
@endsection
