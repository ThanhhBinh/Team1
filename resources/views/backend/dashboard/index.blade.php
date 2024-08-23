@extends('layouts.admin')
@section('title', 'Bảng điều khiển')
@section('content')
    <section class="content" style="padding-left: 0;">
        <div class="container-fluid" style="padding-left: 0;">
            <div class="content-wrapper" style="margin-left: 0;">
                <!-- Content Header (Page header) -->
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">Bảng điều khiển</h1>
                            </div><!-- /.col -->
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Bảng điều khiển</li>
                                </ol>
                            </div><!-- /.col -->
                        </div><!-- /.row -->
                    </div><!-- /.container-fluid -->
                </div>
                <!-- /.content-header -->

                <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card card-primary card-outline configuration-steps collapsed-card"
                                                id="configuration-steps-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title"> <i class="far fa-star"></i>Bắt đầu chấp nhận đơn hàng </h3>
                                                    <div class="card-tools float-right">
                                                        <button type="button" class="btn btn-tool"
                                                            data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i> 
                                                        </button>
                                                        <button type="button" class="btn btn-tool"
                                                            data-card-widget="remove">
                                                            <text><i class="fas fa-times"></i></text>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body" style="display: none;">
                                                    <div class="row">
                                                        <div class="col-12 text-center">
                                                            <h4>Chào mừng đến với cửa hàng của bạn!</h4>
                                                            <p class="intro">
                                                                Bạn không thể chờ để bắt đầu nhận đơn hàng? Hãy để chúng tôi chỉ cho bạn cách thiết lập cửa hàng của bạn nhanh chóng và dễ dàng. Các bước dưới đây mô tả các thiết lập quan trọng nhất cho cửa hàng trực tuyến. Với các mẹo của chúng tôi trên mỗi trang, bạn sẽ thấy quy trình này rõ ràng như thế nào. Bạn sẽ sẵn sàng bắt đầu bán ngay sau khi thực hiện các bước này. Chúc may mắn!
                                                            </p>
                                                        </div>
                                                    </div>
                                                    

                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="row mb-2">
                                                                <div class="col-4">
                                                                    <a class="configuration-step-link theme-step"
                                                                        href="/Admin/Setting/GeneralCommon?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="fas fa-pencil-alt"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    1. &nbsp; Cá nhân hóa cửa hàng của bạn
                                                                                    <small class="text-muted">
                                                                                        Chọn một chủ đề đẹp cho cửa hàng của bạn và thêm logo của bạn
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>

                                                                <div class="col-4">
                                                                    <a class="configuration-step-link store-info-step"
                                                                        href="/Admin/Store/Edit/1?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="fas fa-globe"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    2. &nbsp; Thêm thông tin cửa hàng của bạn
                                                                                    <small class="text-muted">
                                                                                        Nhập thông tin chi tiết về cửa hàng của bạn và bảo vệ khách hàng của bạn bằng SSL
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>

                                                                <div class="col-4">
                                                                    <a class="configuration-step-link shipping-step"
                                                                        href="/Admin/Shipping/Providers?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="fas fa-truck"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    3. &nbsp; Thiết lập vận chuyển
                                                                                    <small class="text-muted">
                                                                                        Thiết lập phương thức vận chuyển để giao đơn hàng cho khách hàng
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div class="row mb-2">
                                                                <div class="col-4">
                                                                    <a class="configuration-step-link payments-step"
                                                                        href="/Admin/Payment/Methods?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="far fa-credit-card"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    4. &nbsp; Thiết lập thanh toán
                                                                                    <small class="text-muted">
                                                                                        Chọn cách khách hàng của bạn sẽ thanh toán cho đơn hàng của họ
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>

                                                                <div class="col-4">
                                                                    <a class="configuration-step-link taxes-step"
                                                                        href="/Admin/Tax/Providers?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="fas fa-percent"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    5. &nbsp; Thiết lập thuế
                                                                                    <small class="text-muted">
                                                                                        Cấu hình tỷ lệ thủ công hoặc chọn dịch vụ thuế để tự động hóa mọi thứ về thuế
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>

                                                                <div class="col-4">
                                                                    <a class="configuration-step-link products-step"
                                                                        href="/Admin/Product/Create?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="fas fa-shopping-cart "></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    6. &nbsp; Tạo sản phẩm
                                                                                    <small class="text-muted">
                                                                                        Xây dựng một danh mục với hình ảnh và mô tả sản phẩm hấp dẫn
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="row mb-4">
                                                                <div class="col-4">
                                                                    <a class="configuration-step-link email-step"
                                                                        href="/Admin/EmailAccount/List?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="far fa-envelope"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    7. &nbsp; Thiết lập tài khoản email
                                                                                    <small class="text-muted">
                                                                                        Nó cho phép bạn gửi thông báo đến khách hàng của bạn
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>

                                                                <div class="col-4">
                                                                    <a class="configuration-step-link service-step"
                                                                        href="/Admin/Topic/List?showtour=True">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="fas fa-info"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    8. &nbsp; Chỉnh sửa thông tin dịch vụ
                                                                                    <small class="text-muted">
                                                                                        Thêm các trang thông tin mô tả về vận chuyển, chính sách trả hàng và nhiều thông tin khác
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>

                                                                <div class="col-4">
                                                                    <a class="configuration-step-link copyright-step"
                                                                        href="https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&amp;utm_medium=tour&amp;utm_campaign=powered_by_nopcommerce&amp;utm_content=dashboard"
                                                                        target="_blank">
                                                                        <div class="row">
                                                                            <div class="col-12 col-xl-3">
                                                                                <div class="configuration-step-icon">
                                                                                    <i class="far fa-copyright"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-12 col-xl-9">
                                                                                <h5>
                                                                                    9. &nbsp; Liên kết “Được cung cấp bởi”
                                                                                    <small class="text-muted">
                                                                                        Xóa liên kết “Powered by nopCommerce” khỏi chân trang
                                                                                    </small>
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-md-12">


                                            <div class="card card-primary card-outline collapsed-card"
                                                id="nopcommerce-news-box">
                                                <div class="card-header with-border clearfix">
                                                    <div class="card-title">
                                                        <i class="far fa-newspaper"></i>
                                                        Tin tức NopCommerce
                                                    </div>
                                                    <div class="card-tools float-right">
                                                        <button type="button" class="btn btn-tool"
                                                            data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i> </button>
                                                    </div>
                                                </div>
                                                <div class="card-body" style="display: none;">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="card card-info">
                                                                <div class="card-header clearfix">
                                                                    <a class="float-left"
                                                                        href="https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&amp;utm_medium=dashboard&amp;utm_campaign=powered_by_nopcommerce">Liên kết "Được cung cấp bởi nopCommerce"</a>
                                                                </div>
                                                                <div class="card-body">
                                                                    Bạn có muốn xóa liên kết "Powered by nopCommerce" ở cuối chân trang không? Nhấp vào đây để biết <a
                                                                        href="https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&amp;utm_medium=dashboard&amp;utm_campaign=powered_by_nopcommerce">thêm</a>
                                                                        thông tin.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="card card-info">
                                                                <div class="card-header clearfix">
                                                                    <a class="float-left"
                                                                        href="https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&amp;utm_medium=dashboard&amp;utm_campaign=paypal">Thương mại PayPal</a>
                                                                </div>
                                                                <div class="card-body">
                                                                    PayPal Commerce cung cấp nền tảng thanh toán hoàn chỉnh với quy mô toàn cầu và tính linh hoạt mà doanh nghiệp của bạn cần để duy trì khả năng cạnh tranh. <a
                                                                        href="https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&amp;utm_medium=dashboard&amp;utm_campaign=paypal">Tải xuống</a>
                                                                    plugin.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="card card-info">
                                                                <div class="card-header clearfix">
                                                                    <a class="float-left"
                                                                        href="https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&amp;utm_medium=TXT&amp;utm_content=PREMCP&amp;utm_campaign=MIG30DYS">Lưu trữ được đề xuất cho cửa hàng của bạn</a>
                                                                </div>
                                                                <div class="card-body">
                                                                    Everleap cloud hosting mở rộng quy mô trang web một cách dễ dàng và họ di chuyển các cửa hàng miễn phí. <a
                                                                        href="https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&amp;utm_medium=TXT&amp;utm_content=PREMCP&amp;utm_campaign=MIG30DYS"
                                                                        target="_blank">Tìm hiểu thêm</a> và nhận bản dùng thử miễn phí 30 ngày.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-md-12">

                                            <div class="card card-primary card-outline collapsed-card"
                                                id="nopcommerce-common-statistics-card">
                                                <div class="card-header with-border clearfix">
                                                    <div class="card-title">
                                                        <i class="far fa-chart-bar"></i>
                                                        Thống kê chung
                                                    </div>
                                                    <div class="card-tools float-right">
                                                        <button type="button" class="btn btn-tool"
                                                            data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i> </button>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-lg-3 col-6">
                                                            <div class="small-box bg-info">
                                                                <div class="inner">
                                                                    <h3>5</h3>
                                                                    <p>Đơn hàng</p>
                                                                </div>
                                                                <div class="icon">
                                                                    <i class="ion ion-bag"></i>
                                                                </div>
                                                                <a class="small-box-footer" href="/Admin/Order/List">
                                                                    Thông tin thêm 
                                                                    <i class="fas fa-arrow-circle-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-6">
                                                            <div class="small-box bg-yellow">
                                                                <div class="inner">
                                                                    <h3>0</h3>
                                                                    <p>Yêu cầu trả lại đang chờ xử lý</p>
                                                                </div>
                                                                <div class="icon">
                                                                    <i class="ion ion-refresh"></i>
                                                                </div>
                                                                <a class="small-box-footer"
                                                                    href="/Admin/ReturnRequest/List">
                                                                    Thông tin thêm 
                                                                    <i class="fas fa-arrow-circle-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-6">
                                                            <div class="small-box bg-green">
                                                                <div class="inner">
                                                                    <h3>7</h3>
                                                                    <p>Khách hàng đã đăng ký</p>
                                                                </div>
                                                                <div class="icon">
                                                                    <i class="ion ion-person-add"></i>
                                                                </div>
                                                                <a class="small-box-footer" href="/Admin/Customer/List">
                                                                    Thông tin thêm 
                                                                    <i class="fas fa-arrow-circle-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-3 col-6">
                                                            <div class="small-box bg-red">
                                                                <div class="inner">
                                                                    <h3>0</h3>
                                                                    <p>Sản phẩm còn ít</p>
                                                                </div>
                                                                <div class="icon">
                                                                    <i class="ion ion-pie-graph"></i>
                                                                </div>
                                                                <a class="small-box-footer" href="/Admin/Report/LowStock">
                                                                    Thông tin thêm 
                                                                    <i class="fas fa-arrow-circle-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card card-primary card-outline collapsed-card" id="order-statistics-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title">
                                                        <i class="fas fa-shopping-cart"></i>
                                                        Đơn hàng
                                                    </h3>
                                                    <div class="card-tools float-right">
                                                        <button class="btn btn-xs btn-info btn-flat margin-r-5" disabled="disabled" data-chart-role="toggle-chart" data-chart-period="year">Năm</button>
                                                        <button class="btn btn-xs btn-info btn-flat margin-r-5" disabled="disabled" data-chart-role="toggle-chart" data-chart-period="month">Tháng</button>
                                                        <button class="btn btn-xs btn-info btn-flat" disabled="disabled" data-chart-role="toggle-chart" data-chart-period="week">Tuần</button>
                                                        <button type="button" class="btn btn-tool margin-l-10" data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="chart" style="height: 300px;">
                                                        <canvas id="order-statistics-chart" height="150"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                                        <script>
                                            document.addEventListener('DOMContentLoaded', function () {
                                                var ctx = document.getElementById('order-statistics-chart').getContext('2d');
                                        
                                                var orderStatisticsChart = new Chart(ctx, {
                                                    type: 'line', // Change the type as needed
                                                    data: {
                                                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
                                                        datasets: [{
                                                            label: 'Đơn hàng',
                                                            data: [12, 19, 3, 5, 2, 3, 7], // Data points
                                                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                                            borderColor: 'rgba(75, 192, 192, 1)',
                                                            borderWidth: 1,
                                                            fill: true
                                                        }]
                                                    },
                                                    options: {
                                                        scales: {
                                                            y: {
                                                                beginAtZero: true
                                                            }
                                                        },
                                                        responsive: true,
                                                        plugins: {
                                                            legend: {
                                                                position: 'top',
                                                            },
                                                            tooltip: {
                                                                callbacks: {
                                                                    label: function(context) {
                                                                        let label = context.dataset.label || '';
                                                                        if (label) {
                                                                            label += ': ';
                                                                        }
                                                                        if (context.parsed.y !== null) {
                                                                            label += new Intl.NumberFormat().format(context.parsed.y);
                                                                        }
                                                                        return label;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                });
                                            });
                                        </script>
                                     <div class="col-md-6">
                                        <div class="card card-primary card-outline collapsed-card" id="customer-statistics-card">
                                            <div class="card-header with-border">
                                                <h3 class="card-title">
                                                    <i class="far fa-user"></i>
                                                    Khách hàng mới
                                                </h3>
                                                <div class="card-tools float-right">
                                                    <button class="btn btn-xs btn-info btn-flat margin-r-5" disabled="disabled" data-chart-role="toggle-chart" data-chart-period="year">Năm</button>
                                                    <button class="btn btn-xs btn-info btn-flat margin-r-5" disabled="disabled" data-chart-role="toggle-chart" data-chart-period="month">Tháng</button>
                                                    <button class="btn btn-xs btn-info btn-flat" disabled="disabled" data-chart-role="toggle-chart" data-chart-period="week">Tuần</button>
                                                    <button type="button" class="btn btn-tool margin-l-10" data-card-widget="collapse">
                                                        <i class="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="chart" style="height: 300px;">
                                                    <canvas id="customer-statistics-chart" height="150"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                                    <script>
                                        document.addEventListener('DOMContentLoaded', function () {
                                            var ctx = document.getElementById('customer-statistics-chart').getContext('2d');
                                    
                                            var customerStatisticsChart = new Chart(ctx, {
                                                type: 'line', // Change this to another chart type if needed
                                                data: {
                                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
                                                    datasets: [{
                                                        label: 'Khách hàng mới',
                                                        data: [30, 45, 20, 55, 60, 40, 70], // Data points
                                                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                                        borderColor: 'rgba(54, 162, 235, 1)',
                                                        borderWidth: 1,
                                                        fill: true
                                                    }]
                                                },
                                                options: {
                                                    scales: {
                                                        y: {
                                                            beginAtZero: true
                                                        }
                                                    },
                                                    responsive: true,
                                                    plugins: {
                                                        legend: {
                                                            position: 'top',
                                                        },
                                                        tooltip: {
                                                            callbacks: {
                                                                label: function(context) {
                                                                    let label = context.dataset.label || '';
                                                                    if (label) {
                                                                        label += ': ';
                                                                    }
                                                                    if (context.parsed.y !== null) {
                                                                        label += new Intl.NumberFormat().format(context.parsed.y);
                                                                    }
                                                                    return label;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            });
                                        });
                                    </script>
                                    
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="card card-primary card-outline collapsed-card" id="order-average-report-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title">
                                                        <i class="far fa-money-bill-alt"></i>
                                                        Tổng số đơn hàng
                                                    </h3>
                                                    <div class="card-tools float-right">
                                                        <button class="btn btn-tool" data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i> 
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body" style="padding-bottom: 22px;">
                                                    <div id="orderAverageReport">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Trạng thái đơn hàng</th>
                                                                    <th>Hôm nay</th>
                                                                    <th>Tuần này</th>
                                                                    <th>Tháng này</th>
                                                                    <th>Năm nay</th>
                                                                    <th>Mọi thời gian</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Chưa giải quyết</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$2,468.80</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Xử lý</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$1,957.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Hoàn thành</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$43.50</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Đã hủy</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                    <td>$0.00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-4">
                                            <div class="card card-primary card-outline collapsed-card" id="order-incomplete-report-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title">
                                                        <i class="fas fa-hourglass-start"></i>
                                                        Đơn hàng chưa hoàn thành
                                                    </h3>
                                                    <div class="card-tools float-right">
                                                        <button class="btn btn-tool" data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div id="orderIncompleteReport">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Mục</th>
                                                                    <th>Tổng cộng</th>
                                                                    <th>Đếm</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Tổng số đơn hàng chưa thanh toán (trạng thái đang chờ thanh toán)</td>
                                                                    <td>$2,468.80</td>
                                                                    <td><a href="/Admin/Order/View/3" class="btn btn-xs btn-info">2-Xem tất cả</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Tổng số đơn hàng chưa được giao</td>
                                                                    <td>$4,315.00</td>
                                                                    <td><a href="/Admin/Order/View/2" class="btn btn-xs btn-info">2-Xem tất cả</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Tổng số đơn hàng chưa hoàn thành (trạng thái đơn hàng đang chờ xử lý)</td>
                                                                    <td>$2,468.80</td>
                                                                    <td><a href="/Admin/Order/View/1" class="btn btn-xs btn-info">2-Xem tất cả</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="card card-primary card-outline collapsed-card" id="latest-orders-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title">
                                                        <i class="fas fa-cart-plus"></i>
                                                        Đơn hàng mới nhất
                                                        <a class="btn btn-xs btn-info btn-flat margin-l-10" href="/Admin/Order/List">Xem tất cả đơn hàng</a>
                                                    </h3>
                                                    <div class="card-tools float-right">
                                                        <button class="btn btn-tool" data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div id="latestOrdersReport">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Đặt hàng #</th>
                                                                    <th>Trạng thái đơn hàng</th>
                                                                    <th>Khách hàng</th>
                                                                    <th>Được tạo ra vào</th>
                                                                    <th>Xem</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td><a class="btn-success">Hoàn thành</a></td>
                                                                    <td>Victoria Terces (victoria_victoria@nopCommerce.com)</td>
                                                                    <td>03/13/2017 4:20:10 AM</td>
                                                                    <td><a href="/Admin/Order/View/5" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td><a class="btn-primary">Xử lý</a></td>
                                                                    <td>Brenda Lindgren (brenda_lindgren@nopCommerce.com)</td>
                                                                    <td>03/13/2017 4:20:09 AM</td>
                                                                    <td><a href="/Admin/Order/View/4" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td><a class="btn-warning">Chưa giải quyết</a></td>
                                                                    <td>James Pan (james_pan@nopCommerce.com)</td>
                                                                    <td>03/13/2017 4:20:09 AM</td>
                                                                    <td><a href="/Admin/Order/View/3" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td><a class="btn-warning">Chưa giải quyết</a></td>
                                                                    <td>Arthur Holmes (arthur_holmes@nopCommerce.com)</td>
                                                                    <td>03/13/2017 4:20:09 AM</td>
                                                                    <td><a href="/Admin/Order/View/2" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td><a class="btn-primary">Xử lý</a></td>
                                                                    <td>Steve Gates (steve_gates@nopCommerce.com)</td>
                                                                    <td>03/13/2017 4:20:09 AM</td>
                                                                    <td><a href="/Admin/Order/View/1" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div class="pagination">
                                                            <ul class="pagination">
                                                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-4">
                                            <div class="card card-primary card-outline collapsed-card" id="popular-search-terms-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title">
                                                        <i class="fas fa-search"></i>
                                                        Từ khóa tìm kiếm phổ biến
                                                    </h3>
                                                    <div class="card-tools float-right">
                                                        <button class="btn btn-tool" data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div id="popularSearchTermsReport">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Từ khóa</th>
                                                                    <th>Đếm</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Máy tính</td>
                                                                    <td>34</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Máy ảnh</td>
                                                                    <td>30</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Trang sức</td>
                                                                    <td>27</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Đôi giày</td>
                                                                    <td>26</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Quần Jean</td>
                                                                    <td>19</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div class="pagination">
                                                            <ul class="pagination">
                                                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card card-primary card-outline collapsed-card" id="bestsellers-report-quantity-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title">
                                                        <i class="fas fa-star"></i>
                                                        Bán chạy nhất theo số lượng
                                                    </h3>
                                                    <div class="card-tools float-right">
                                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div id="bestsellersBriefReportByQuantity">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Tên</th>
                                                                    <th>Tổng số lượng</th>
                                                                    <th>Tổng số tiền (chưa bao gồm thuế)</th>
                                                                    <th>Xem</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Máy ảnh kỹ thuật số không gương lật Leica T</td>
                                                                    <td>1</td>
                                                                    <td>$530.00</td>
                                                                    <td><a href="/Admin/Product/View/1" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Máy ảnh Apple iCam</td>
                                                                    <td>1</td>
                                                                    <td>$1,300.00</td>
                                                                    <td><a href="/Admin/Product/View/2" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Quần Jeans Levi's 511</td>
                                                                    <td>1</td>
                                                                    <td>$43.50</td>
                                                                    <td><a href="/Admin/Product/View/3" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Tầm nhìn ban đêm</td>
                                                                    <td>1</td>
                                                                    <td>$2.80</td>
                                                                    <td><a href="/Admin/Product/View/4" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Nếu bạn chờ đợi (quyên góp)</td>
                                                                    <td>1</td>
                                                                    <td>$3.00</td>
                                                                    <td><a href="/Admin/Product/View/5" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div class="pagination">
                                                            <ul class="pagination">
                                                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="card card-primary card-outline collapsed-card" id="bestsellers-report-amount-card">
                                                <div class="card-header with-border">
                                                    <h3 class="card-title">
                                                        <i class="far fa-star"></i>
                                                        Bán chạy nhất theo số lượng
                                                    </h3>
                                                    <div class="card-tools float-right">
                                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div id="bestsellersBriefReportByAmount">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Tên</th>
                                                                    <th>Tổng số lượng</th>
                                                                    <th>Tổng số tiền (chưa bao gồm thuế)</th>
                                                                    <th>Xem</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Nhẫn đính hôn phong cách cổ điển</td>
                                                                    <td>1</td>
                                                                    <td>$2,100.00</td>
                                                                    <td><a href="/Admin/Product/View/1" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Máy ảnh Apple iCam</td>
                                                                    <td>1</td>
                                                                    <td>$1,300.00</td>
                                                                    <td><a href="/Admin/Product/View/2" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Máy ảnh kỹ thuật số không gương lật Leica T</td>
                                                                    <td>1</td>
                                                                    <td>$530.00</td>
                                                                    <td><a href="/Admin/Product/View/3" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Vòng tay cô gái bán hoa</td>
                                                                    <td>1</td>
                                                                    <td>$360.00</td>
                                                                    <td><a href="/Admin/Product/View/4" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Bánh nướng giải nhất</td>
                                                                    <td>1</td>
                                                                    <td>$51.00</td>
                                                                    <td><a href="/Admin/Product/View/5" class="btn btn-xs btn-info">Xem</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div class="pagination">
                                                            <ul class="pagination">
                                                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /.content -->
            </div>
        </div>
    </section>
    <style>
        .configuration-step-link {
    display: block;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ed3737;
    background-color: #ffffff;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
}

.configuration-step-link:hover {
    background-color: #a3eff2;
}

.configuration-step-icon {
    font-size: 24px;
    color: #495057;
    margin-bottom: 10px;
}

.configuration-step-link h5 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #343a40;
}

.configuration-step-link small {
    font-size: 14px;
    color: #6c757d;
}
#orderAverageReport table {
        width: 100%;
        border-collapse: collapse;
    }
    #orderAverageReport th, #orderAverageReport td {
        padding: 8px;
        text-align: center;
        border: 1px solid #ddd;
    }
    #orderAverageReport th {
        background-color: #f4f4f4;
    }
    #orderIncompleteReport table {
        width: 100%;
        border-collapse: collapse;
    }
    #orderIncompleteReport th, #orderIncompleteReport td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ddd;
    }
    #orderIncompleteReport th {
        background-color: #f8f9fa;
    }
    #orderIncompleteReport tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    #latestOrdersReport table {
        width: 100%;
        border-collapse: collapse;
    }
    #latestOrdersReport th, #latestOrdersReport td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ddd;
    }
    #latestOrdersReport th {
        background-color: #f8f9fa;
    }
    #latestOrdersReport tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    .pagination {
        margin-top: 15px;
        text-align: center;
    }
    .pagination .page-link {
        padding: 8px 12px;
        margin: 0 2px;
    }
    #bestsellersBriefReportByQuantity table {
        width: 100%;
        border-collapse: collapse;
    }
    #bestsellersBriefReportByQuantity th, #bestsellersBriefReportByQuantity td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ddd;
    }
    #bestsellersBriefReportByQuantity th {
        background-color: #f8f9fa;
    }
    #bestsellersBriefReportByQuantity tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    .pagination {
        margin-top: 15px;
        text-align: center;
    }
    .pagination .page-link {
        padding: 8px 12px;
        margin: 0 2px;
    }
    </style>
@endsection

@push('scripts')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-mapael@2.2.0/jquery.mapael.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-mapael@2.2.0/maps/world_countries.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
@endpush
