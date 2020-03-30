<?php

namespace Modules\Product\Repositories\Cache;

use Modules\Product\Repositories\ProductCategoryRepository;
use Modules\Core\Repositories\Cache\BaseCacheDecorator;

class CacheProductCategoryDecorator extends BaseCacheDecorator implements ProductCategoryRepository
{
    public function __construct(ProductCategoryRepository $productcategory)
    {
        parent::__construct();
        $this->entityName = 'product.productcategories';
        $this->repository = $productcategory;
    }
}
