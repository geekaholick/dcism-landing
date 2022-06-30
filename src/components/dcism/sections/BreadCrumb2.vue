<template slot="breadcrumb">
    <div class="breadcrumb_box text-center">
    <ul class="breadcrumb-list">
        <li class="breadcrumb-item active" style="font-size: 15px">
        Department of Computer, Information Sciences, and Mathematics
        </li>
    </ul>
    <h2 class="breadcrumb-title">Faculty</h2>
    <!-- breadcrumb-list start -->
    <ul class="breadcrumb-list">
        <li class="breadcrumb-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="breadcrumb-item active">Faculty</li>
    </ul>
    <!-- breadcrumb-list end -->
    </div>
</template>