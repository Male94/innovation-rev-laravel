<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\MainCat;
use App\Models\SubCat;
use App\Models\Product;
use App\Models\ProductSize;

class ShopSeeder extends Seeder
{
    public function run(): void
    {
        $batik = MainCat::create(['main_cat_name' => 'Batik']);
        $shirts = MainCat::create(['main_cat_name' => 'Shirts']);

        $menBatik = SubCat::create(['sub_cat_name' => 'Men Batik', 'main_cat_id' => $batik->main_cat_id]);
        $womenBatik = SubCat::create(['sub_cat_name' => 'Women Batik', 'main_cat_id' => $batik->main_cat_id]);

        $sizeM = ProductSize::create(['product_size' => 'M']);
        $sizeL = ProductSize::create(['product_size' => 'L']);
        $sizeXL = ProductSize::create(['product_size' => 'XL']);

        $p1 = Product::create([
            'product_name' => 'Classic Blue Batik Shirt',
            'product_description' => 'A beautiful hand-crafted batik shirt with traditional motifs.',
            'lkr_price' => 4500,
            'discount_product' => 10,
            'sub_cat_id' => $menBatik->sub_cat_id,
            'main_cat_id' => $batik->main_cat_id,
            'status' => 1,
        ]);
        $p1->sizes()->attach([$sizeM->product_size_id, $sizeL->product_size_id]);

        $p2 = Product::create([
            'product_name' => 'Floral Summer Batik Dress',
            'product_description' => 'Lightweight and elegant dress for summer outings.',
            'lkr_price' => 6800,
            'discount_product' => 0,
            'sub_cat_id' => $womenBatik->sub_cat_id,
            'main_cat_id' => $batik->main_cat_id,
            'status' => 1,
        ]);
        $p2->sizes()->attach([$sizeM->product_size_id, $sizeL->product_size_id, $sizeXL->product_size_id]);
    }
}
