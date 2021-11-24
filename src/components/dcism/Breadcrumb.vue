<template>
    <!-- breadcrumb-area start -->
    <div class="breadcrumb-area gradient--secondary pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <slot name="breadcrumb"></slot>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb-area end -->
</template>

<script>
    export default {
        name: 'Breadcrumb'
    }
</script>