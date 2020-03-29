<div class="modal fade" tabindex="-1" id="product-detail-modal" role="dialog" aria-labelledby="delete-confirmation-title" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="delete-confirmation-title">{{ trans('core::core.modal.title') }}</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Size</label>
                    @if($product->size_type == \Modules\Product\Entities\Product::SIZE_TYPE_TEXT)
                    {!! Form::select('size', Modules\Product\Entities\Product::getTextSizes(), old('size'), ['class' => 'form-control', 'required' => 'required']) !!}
                    @else($product->size_type == \Modules\Product\Entities\Product::SIZE_TYPE_NUMBER)
                    <input class="form-control" type="number" name="size">
                    @endif
                </div>

                <div class="form-group">
                    <label>Quantity</label>
                    <input class="form-control" type="text" name="quantity">
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-">Create detail</button>
                <button type="button" class="btn btn-flat" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="box box-primary">
    <div class="tab-content">
        <div class="box-body">
            <div class="col-lg-12">
                <div class="row" style="margin-bottom:10px">

                    <a href="{{ route('admin.product.productdetail.create', $product->id) }}" class="btn btn-primary btn-flat pull-right">Create detail</a>
                </div>
                <div class="row">
                    <div class="table-responsive">
                        <table class="data-table table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th data-sortable="false">{{ trans('core::core.table.actions') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($product->details as $detail)
                                <tr>
                                    <td> {{ $detail->sizeToText() }} </td>
                                    <td> {{ $detail->quantity }} </td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="{{ route('admin.product.productdetail.edit', [$product->id, $detail->id]) }}" class="btn btn-default btn-flat"><i class="fa fa-pencil"></i></a>
                                            <button class="btn btn-danger btn-flat" data-toggle="modal" data-target="#modal-delete-confirmation" data-action-target="{{ route('admin.product.productdetail.destroy', [$product->id, $detail->id]) }}"><i class="fa fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </div>

    </div>
</div>

@push('js-stack')
<script>
    $(function() {
        $('.data-table').dataTable({
            "paginate": true,
            "lengthChange": true,
            "filter": true,
            "sort": true,
            "info": true,
            "autoWidth": true,
            "order": [
                [0, "desc"]
            ],
            "language": {
                "url": '<?php echo Module::asset("core:js/vendor/datatables/{$locale}.json") ?>'
            }
        });
    });
</script>
@endpush