@extends('layouts.admin')
@section('title', 'Tài khoản')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Người dùng</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Người dùng</li>
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
                    <form action="{{ route('admin.user.index') }}" method="GET" class="form-inline d-flex justify-content-between">
                        <div class="d-flex flex-wrap">
                            <!-- Tìm kiếm theo tên tài khoản -->
                            <input type="text" name="username" value="{{ request('username') }}" class="form-control mb-2 mr-2" placeholder="Tên tài khoản" style="max-width: 150px;">
                            <!-- Tìm kiếm theo email -->
                            <input type="text" name="email" value="{{ request('email') }}" class="form-control mb-2 mr-2" placeholder="Email" style="max-width: 150px;">
                            <!-- Tìm kiếm theo giới tính -->
                            <select name="gender" class="form-control mb-2 mr-2" style="max-width: 150px;">
                                <option value="">Giới tính</option>
                                <option value="male" {{ request('gender') == 'nam' ? 'selected' : '' }}>Nam</option>
                                <option value="female" {{ request('gender') == 'nu' ? 'selected' : '' }}>Nữ</option>
                                <option value="other" {{ request('gender') == 'khac' ? 'selected' : '' }}>Khác</option>
                            </select>
                            <!-- Tìm kiếm theo địa chỉ -->
                            <input type="text" name="address" value="{{ request('address') }}" class="form-control mb-2 mr-2" placeholder="Địa chỉ" style="max-width: 150px;">
                            <!-- Tìm kiếm theo phone -->
                            <input type="text" name="phone" value="{{ request('phone') }}" class="form-control mb-2 mr-2" placeholder="Phone" style="max-width: 150px;">
                            <!-- Tìm kiếm theo quyền -->
                            <select name="roles" class="form-control mb-2 mr-2" style="max-width: 150px;">
                                <option value="">Quyền</option>
                                <option value="admin" {{ request('roles') == 'admin' ? 'selected' : '' }}>Admin</option>
                                <option value="user" {{ request('roles') == 'user' ? 'selected' : '' }}>Người dùng</option>
                            </select>
                            <button type="submit" class="btn btn-primary mb-2">Tìm kiếm</button>
                        </div>
                        <div class="ml-auto d-flex">
                            <a class="btn btn-sm btn-success mr-2" href="{{ route('admin.user.create') }}">
                                <i class="fas fa-plus"></i>
                                Thêm
                            </a>
                            <a class="btn btn-sm btn-danger" href="{{ route('admin.user.trash') }}">
                                <i class="fas fa-trash-alt"></i>
                                Thùng rác
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="card-body">
            @if ($list->isEmpty())
                <div class="alert alert-warning" role="alert">
                    Không tìm thấy người dùng nào.
                </div>
            @else
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" style="width:30px">#</th>
                                <th class="text-center" style="width:90px">Hình</th>
                                <th>Tài khoản</th>
                                <th>Tên tài khoản</th>
                                <th style="white-space: nowrap;">Giới tính</th>
                                <th>Địa chỉ</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Quyền</th>
                                <th class="text-center" style="width:200px">Chức năng</th>
                                <th class="text-center" style="width:30px">ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($list as $row)
                            @php
                              $args = ['user_id' => $row->user_id];
                            @endphp
                            <tr>
                                <td class="text-center">
                                    <input type="checkbox" id="checkId" value="{{ $row->user_id }}" name="checkId[]">
                                </td>
                                <td class="text-center">
                                    <img src="{{ asset('images/users/' . $row->image) }}" class="img-fluid" alt="{{ $row->image }}" style="max-width: 80px; max-height: 80px;">
                                </td>
                                <td>{{ $row->name }}</td>
                                <td>{{ $row->username }}</td>
                                <td>{{ $row->gender }}</td>
                                <td>{{ $row->address }}</td>
                                <td>{{ $row->phone }}</td>
                                <td>{{ $row->email }}</td>
                                <td>{{ $row->roles }}</td>
                                <td class="text-center">
                                    @if ($row->status == 1)
                                    <a href="{{ route('admin.user.status', $args) }}" class="btn btn-sm btn-success">
                                        <i class="fas fa-toggle-on"></i>
                                    </a>
                                    @else
                                    <a href="{{ route('admin.user.status', $args) }}" class="btn btn-sm btn-danger">
                                        <i class="fas fa-toggle-off"></i>
                                    </a>
                                    @endif
                                    <a href="{{ route('admin.user.show', $args) }}" class="btn btn-sm btn-info">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <a href="{{ route('admin.user.edit', $args) }}" class="btn btn-sm btn-primary">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <a href="{{ route('admin.user.delete', $args) }}" class="btn btn-sm btn-danger">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                                <td class="text-center">{{ $row->user_id }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <div class="pagination-wrapper">
                        {{ $list->links('vendor.pagination.custom') }}
                    </div>
                </div>
            @endif
        </div>
    </div>
</section>
@endsection
