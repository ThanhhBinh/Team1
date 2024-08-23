@extends('layouts.admin')
@section('title','Topic')
@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Chi tiết chủ đề</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Chi tiết chủ đề</li>
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
                    <a href="{{ route('admin.topic.edit', $topic->topic_id) }}" class="btn btn-sm btn-primary">
                        <i class="far fa-edit"></i> Sửa
                    </a>
                    <form action="{{ route('admin.topic.destroy', $topic->topic_id) }}" method="post" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-danger">
                            <i class="fas fa-trash"></i> Xóa
                        </button>
                    </form>
                    <a class="btn btn-sm btn-info" href="{{ route('admin.topic.index')}}">
                        <i class="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th class="text-center" style="width:30%;"><strong>Tên trường</strong></th>
                        <th class="text-center" style="width:70%;">Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{{ $topic->topic_id }}</td>
                    </tr>
                    <tr>
                        <td>Tên</td>
                        <td>{{ $topic->name }}</td>
                    </tr>
                    <tr>
                        <td>Slug</td>
                        <td>{{ $topic->slug }}</td>
                    </tr>
                    <tr>
                        <td>Sự miêu tả</td>
                        <td>{!! $topic->description !!}</td>
                    </tr>
                    <tr>
                        <td>Trạng thái</td>
                        <td>{{ $topic->status == 1 ? 'Xuất bản' : 'Chưa xuất bản' }}</td>
                    </tr>
                    <tr>
                        <td>Ngày tạo</td>
                        <td>{{ $topic->created_at }}</td>
                    </tr>
                    <tr>
                        <td>Người tạo</td>
                        <td>{{ $topic->created_by }}</td>
                    </tr>
                    <tr>
                        <td>Ngày cập nhật</td>
                        <td>{{ $topic->updated_at }}</td>
                    </tr>
                    <tr>
                        <td>Người cập nhật</td>
                        <td>{{ $topic->updated_by }}</td>
                    </tr>
                    <tr>
                        <td>Thứ tự sắp xếp</td>
                        <td>{{ $topic->sort_order }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
@endsection
