@extends('layouts.admin')
@section('title','Đánh giá sản phẩm')
@section('content')
<section class="content">
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-12 text-right">
                    <a class="btn btn-sm btn-info" href="{{ route('admin.productreview.index') }}">
                        <i class="fa fa-arrow-left"></i> Về danh sách
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            @foreach ($reviews as $review)
                <h4>Đánh giá cho sản phẩm: {{ $review->product->product_name ?? 'N/A' }}</h4>
                <table class="table table-bordered table-striped table-hover">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{{ $review->review_id }}</td>
                        </tr>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <td>{{ $review->product->product_name }}</td>
                        </tr>
                        <tr>
                            <th>Hình sản phẩm</th>
                            <td><img src="{{ asset('images/products/' . $review->product->image) }}" alt="{{ $review->product->product_name }}" width="100"></td>
                        </tr>
                        <tr>
                            <td>Đánh giá</td>
                            <td>{{ $review->rating }}</td>
                        </tr>
                        <tr>
                            <td>Văn bản đánh giá</td>
                            <td>{{ $review->review_text }}</td>
                        </tr>
                        <tr>
                            <td>Ngày tạo</td>
                            <td>{{ $review->created_at }}</td>
                        </tr>
                        <tr>
                            <td>Người tạo</td>
                            <td>{{ $review->created_by }}</td>
                        </tr>
                        <tr>
                            <td>Ngày cập nhật</td>
                            <td>{{ $review->updated_at }}</td>
                        </tr>
                        <tr>
                            <td>Người cập nhật</td>
                            <td>{{ $review->updated_by }}</td>
                        </tr>
                        <tr>
                            <td>Trạng thái</td>
                            <td>{{ $review->status }}</td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
            @endforeach
        </div>
    </div>
</section>
@endsection
