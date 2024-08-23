<?php 

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Promotion;
use Carbon\Carbon;

class CleanExpiredPromotions extends Command
{
    protected $signature = 'promotions:cleanup';
    protected $description = 'Xóa các khuyến mãi đã hết hạn';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $now = Carbon::now();
        $expiredPromotions = Promotion::where('end_date', '<', $now)->get();

        foreach ($expiredPromotions as $promotion) {
            $promotion->delete(); // Xóa các khuyến mãi hết hạn
        }

        $this->info('Đã xóa các khuyến mãi hết hạn.');
    }
}
