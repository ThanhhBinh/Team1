@extends('layouts.admin')
@section('title', 'Thêm chính sách')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Thêm chính sách</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('admin.policy.index') }}">Home</a></li>
                    <li class="breadcrumb-item active">Thêm chính sách</li>
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
                    <a class="btn btn-sm btn-danger" href="{{ route('admin.policy.trash') }}">
                        <i class="fas fa-trash"></i> Thùng rác
                    </a>
                    <a class="btn btn-sm btn-info" href="{{ route('admin.policy.index') }}">
                        <i class="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.policy.store') }}" method="post" enctype="multipart/form-data">
                @csrf
                
                <div class="mb-3">
                    <label for="policy_name">Tên chính sách</label>
                    <input type="text" value="{{ old('policy_name') }}" name="policy_name" id="policy_name" class="form-control">
                    @error('policy_name')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="policy_description">Mô tả chính sách</label>
                    <textarea name="policy_description" id="policy_description" class="form-control">{{ old('policy_description') }}</textarea>
                    @error('policy_description')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="keywords">Key word</label>
                    <textarea name="keywords" id="keywords" class="form-control">{{ old('keywords') }}</textarea>
                    @error('keywords')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-success">Thêm chính sách</button>
                </div>
            </form>
        </div>
    </div>
</section>
@endsection
