@extends('layouts.admin')
@section('title', 'Khuyến mãi')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>QUẢN LÍ KHUYẾN MÃI</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Quản lí khuyến mãi</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-12">
                        <form action="{{ route('admin.promotion.index') }}" method="GET" class="form-inline d-flex align-items-center">
                            <input type="text" name="promotion_name" value="{{ request('promotion_name') }}" class="form-control mr-2" placeholder="Tìm kiếm khuyến mãi (chữ cái đầu)">
                            <select name="promotion_type" class="form-control mr-2">
                                <option value="">Tất cả loại khuyến mãi</option>
                                <!-- Thay thế với các loại khuyến mãi thực tế của bạn -->
                                <option value="discount" {{ request('promotion_type') == 'discount' ? 'selected' : '' }}>Giảm giá</option>
                                <option value="voucher" {{ request('promotion_type') == 'voucher' ? 'selected' : '' }}>Voucher</option>
                            </select>
                            <select name="discount_type" class="form-control mr-2">
                                <option value="">Tất cả loại giảm giá</option>
                                <!-- Thay thế với các loại giảm giá thực tế của bạn -->
                                <option value="percentage" {{ request('discount_type') == 'percentage' ? 'selected' : '' }}>Phần trăm</option>
                                <option value="fixed" {{ request('discount_type') == 'fixed' ? 'selected' : '' }}>Cố định</option>
                            </select>
                            <input type="date" name="start_date" value="{{ request('start_date') }}" class="form-control mr-2" placeholder="Ngày bắt đầu">
                            <input type="date" name="end_date" value="{{ request('end_date') }}" class="form-control mr-2" placeholder="Ngày kết thúc">
                            <button type="submit" class="btn btn-primary">Tìm kiếm</button>
                        </form>
                    </div>
                    <div class="col-md-12 text-right mt-2">
                        <a class="btn btn-sm btn-success" href="{{ route('admin.promotion.create') }}">
                            <i class="fas fa-plus"></i> Thêm
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                @if($list->isEmpty())
                    <div class="alert alert-info text-center" role="alert">
                        Không có khuyến mãi nào phù hợp với tiêu chí lọc.
                    </div>
                @else
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" style="width:30px">#</th>
                                <th style="width:200px">Tên khuyến mãi</th>
                                <th class="text-center" style="width:100px">Hình</th>
                                <th style="width:150px">Loại giảm giá</th>
                                <th style="width:150px">Giá khuyến mãi</th>
                                <th style="width:150px">Thời gian bắt đầu</th>
                                <th style="width:150px">Thời gian kết thúc</th>
                                <th class="text-center" style="width:200px">Chức năng</th>
                                <th class="text-center" style="width:30px">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($list as $row)
                                <tr>
                                    <td class="text-center">
                                        <input type="checkbox" value="{{ $row->id }}" name="checkId[]">
                                    </td>
                                    <td>{{ $row->promotion_name }}</td>
                                    <td class="text-center">
                                        @if ($row->image)
                                            <img src="{{ asset('images/promotions/' . $row->image) }}" class="img-fluid" alt="{{ $row->promotion_name }}" width="100">
                                        @else
                                            <span>Không có ảnh</span>
                                        @endif
                                    </td>
                                    <td>{{ $row->discount_type == 'percentage' ? 'Phần trăm' : 'Cố định' }}</td>
                                    <td>{{ $row->discount_value }}</td>
                                    <td>{{ $row->start_date }}</td>
                                    <td>{{ $row->end_date }}</td>
                                    <td class="text-center">
                                        <a href="{{ route('admin.promotion.show', $row->id) }}" class="btn btn-sm btn-info">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <a href="{{ route('admin.promotion.edit', $row->id) }}" class="btn btn-sm btn-primary">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="{{ route('admin.promotion.delete', $row->id) }}" class="btn btn-sm btn-danger" onclick="return confirm('Bạn có chắc chắn muốn xóa?')">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                    <td class="text-center">{{ $row->id }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <div class="pagination-wrapper">
                        {{ $list->links('vendor.pagination.custom') }}
                    </div>
                @endif
            </div>
        </div>
    </section>
@endsection
