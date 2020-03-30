<?php

namespace Modules\Product\Repositories\Cache;

use Modules\Product\Repositories\ProductDetailRepository;
use Modules\Core\Repositories\Cache\BaseCacheDecorator;

class CacheProductDetailDecorator extends BaseCacheDecorator implements ProductDetailRepository
{
    public function __construct(ProductDetailRepository $productdetail)
    {
        parent::__construct();
        $this->entityName = 'product.productdetails';
        $this->repository = $productdetail;
    }
}
