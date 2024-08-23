@extends('layouts.admin')
@section('title', 'Đánh giá sản phẩm')
@section('content')
<section class="content">
    <div class="card">
        <div class="card-header">
            <form action="{{ route('admin.productreview.index') }}" method="GET" class="form-inline">
                <div class="form-group mr-2">
                    <input type="text" name="product_name" class="form-control" placeholder="Tên sản phẩm" value="{{ request('product_name') }}">
                </div>
                <div class="form-group mr-2">
                    <input type="number" name="review_count" class="form-control" placeholder="Số lượng đánh giá" value="{{ request('review_count') }}">
                </div>
                <div class="form-group mr-2">
                    <select name="has_reviews" class="form-control">
                        <option value="">-- Chọn --</option>
                        <option value="yes" {{ request('has_reviews') == 'yes' ? 'selected' : '' }}>Có đánh giá</option>
                        <option value="no" {{ request('has_reviews') == 'no' ? 'selected' : '' }}>Không có đánh giá</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-sm btn-primary">Lọc</button>
            </form>
        </div>
        <div class="card-body">
            @if($products->isEmpty())
                <div class="alert alert-warning">
                    Không có sản phẩm phù hợp với tiêu chí tìm kiếm.
                </div>
            @else
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="text-center" style="width:70px">Hình</th>
                            <th style="max-width:150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Tên sản phẩm</th>
                            <th class="text-center" style="width:100px; white-space: nowrap;">Số đánh giá</th>
                            <th style="width:250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Nội dung đánh giá</th>
                            <th class="text-center" style="width:180px">Chức năng</th>
                            <th class="text-center" style="width:50px">ID</th>
                        </tr>                        
                    </thead>
                    
                    <tbody>
                        @foreach ($products as $product)
                            <tr>
                                <td class="text-center">
                                    <img src="{{ asset('images/products/' . $product->image) }}" class="img-fluid" alt="{{ $product->product_name }}" width="60">
                                </td>
                                <td>{{ $product->product_name }}</td>
                                <td>{{ $product->reviews->count() }}</td>
                                <td>
                                    @foreach ($product->reviews as $review)
                                        <div class="{{ $review->is_violation ? 'bg-danger text-white p-2' : '' }}">
                                            <p>{{ $review->review_text }}</p>
                                        </div>
                                    @endforeach
                                </td>                                
                                <td class="text-center">
                                    @if ($product->reviews->count() > 0)
                                        <a href="{{ route('admin.productreview.show', ['review_id' => $product->reviews->first()->review_id]) }}" class="btn btn-sm btn-info">
                                            <i class="fas fa-eye"></i> Xem
                                        </a>
                                    @else
                                        <span>Không có đánh giá</span>
                                    @endif
                                </td>
                                <td class="text-center">{{ $product->product_id }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            @endif
        </div>
    </div>
</section>
@endsection
