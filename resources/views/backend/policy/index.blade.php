@extends('layouts.admin')
@section('title', 'Chính Sách')
@section('content')
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Chính Sách</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Quản lí chính sách</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-12">
                       <form action="{{ route('admin.policy.index') }}" method="GET" class="form-inline d-flex justify-content-between" autocomplete="off">
                            <div class="d-flex flex-wrap">
                                <!-- Tìm kiếm theo tên chính sách -->
                                <input type="text" name="policy_name" value="{{ request('policy_name') }}" class="form-control mb-2 mr-2" placeholder="Tên chính sách" style="max-width: 150px;">
                                
                                <!-- Tìm kiếm theo mô tả chính sách -->
                                <input type="text" name="policy_description" value="{{ request('policy_description') }}" class="form-control mb-2 mr-2" placeholder="Mô tả chính sách" style="max-width: 150px;">
                                
                                <!-- Tìm kiếm theo từ khóa -->
                                <input type="text" name="keywords" value="{{ request('keywords') }}" class="form-control mb-2 mr-2" placeholder="Từ khóa" style="max-width: 150px;">
                                
                                <button type="submit" class="btn btn-primary mb-2">Tìm kiếm</button>
                            </div>
                            <div class="ml-auto d-flex">
                                <a class="btn btn-sm btn-success mr-2" href="{{ route('admin.policy.create') }}">
                                    <i class="fas fa-plus"></i> Thêm chính sách
                                </a>
                                <a class="btn btn-sm btn-danger" href="{{ route('admin.policy.trash') }}">
                                    <i class="fas fa-trash"></i> Thùng rác
                                </a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Tên chính sách</th>
                            <th>Mô tả chính sách</th>
                            <th>Key word</th>
                            <th class="text-center" style="width:200px">Chức năng</th>
                            <th class="text-center" style="width:30px">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($list as $row)
                            @php
                                $args = ['id' => $row->id];
                            @endphp
                            <tr>
                                <td>{{ $row->policy_name }}</td>
                                <td>{{ $row->policy_description }}</td>
                                <td>{{ $row->keywords }}</td>
                                <td class="text-center" style="width:220px">
                                    @if ($row->status == 1)
                                            <a href="{{ route('admin.policy.status', $args ) }}" class="btn btn-sm btn-success">
                                                <i class="fas fa-toggle-on"></i>
                                            </a>
                                        @else
                                            <a href="{{ route('admin.policy.status', $args ) }}" class="btn btn-sm btn-danger">
                                                <i class="fas fa-toggle-off"></i>
                                            </a>
                                        @endif
                                    <a href="{{ route('admin.policy.show', $args) }}" class="btn btn-sm btn-info">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <a href="{{ route('admin.policy.edit', $args) }}" class="btn btn-sm btn-primary">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <a href="{{ route('admin.policy.delete', $args) }}" class="btn btn-sm btn-danger">
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
            </div>
        </div>
    </section>
@endsection
