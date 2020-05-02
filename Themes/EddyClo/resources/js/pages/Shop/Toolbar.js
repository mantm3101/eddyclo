import React from "react";

const Toolbar = () => (
    <section class="module-small">
        <div class="container">
            <form class="row">
                <div class="col-sm-4 mb-sm-20">
                    <select class="form-control">
                        <option selected="selected">Default Sorting</option>
                        <option>Popular</option>
                        <option>Latest</option>
                        <option>Average Price</option>
                        <option>High Price</option>
                        <option>Low Price</option>
                    </select>
                </div>
                <div class="col-sm-2 mb-sm-20">
                    <select class="form-control">
                        <option selected="selected">Woman</option>
                        <option>Man</option>
                    </select>
                </div>
                <div class="col-sm-3 mb-sm-20">
                    <select class="form-control">
                        <option selected="selected">All</option>
                        <option>Coats</option>
                        <option>Jackets</option>
                        <option>Dresses</option>
                        <option>Jumpsuits</option>
                        <option>Tops</option>
                        <option>Trousers</option>
                    </select>
                </div>
                <div class="col-sm-3">
                    <button class="btn btn-block btn-round btn-g" type="submit">Apply</button>
                </div>
            </form>
        </div>
    </section>
);

export default Toolbar;