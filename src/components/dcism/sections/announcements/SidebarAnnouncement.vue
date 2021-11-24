<template>
    <div class="page-sidebar-content-wrapper page-sidebar-right small-mt__40 tablet-mt__40">
        <!--=== Sidebar Widget Start ===-->
        <div class="sidebar-widget search-post wow move-up">
            <form>
                <div class="widget-search">
                    <input type="text" placeholder="Enter search keyword…">
                    <button type="submit" class="search-submit">
                        <span class="search-btn-icon far fa-search"></span>
                    </button>
                </div>
            </form>
        </div>
        <!--=== Sidebar Widget End ===-->

        <!-- === Sidebar Widget Start ===-->
        <div class="sidebar-widget widget-categories wow move-up">
            <h5 class="widget-title font-weight--light">Quick Links</h5>
            <ul>
                <li class="cat-item">
                    <router-link to="/blog-list-large-image">News Page<span class="count">9+</span>
                </router-link>
                </li>
                <li class="cat-item">
                    <router-link to="/blog-list-large-image">Events Page<span class="count">1</span>
                </router-link>
                </li>
                <li class="cat-item">
                    <router-link to="/blog-list-large-image">FAQs Page
                </router-link>
                </li>
                <li class="cat-item">
                    <router-link to="/blog-list-large-image">About the Department
                </router-link>
                </li>
            </ul>
        </div>
        <!-- === Sidebar Widget End === -->

        <!-- === Sidebar Widget Start === -->
        <div class="sidebar-widget widget-blog-post wow move-up">
            <h5 class="widget-title font-weight--light">Popular posts</h5>
            <div class="post-item">
                <div class="post-info">
                    <div class="post-categories">
                        <router-link to="/blog-list-large-image">App Release</router-link>
                    </div>
                    <h6 class="post-title">
                        <router-link to="/blog-details">Specialized Design Tools for 2019</router-link>
                    </h6>
                </div>
            </div>
            <div class="post-item">
                <div class="post-info">
                    <div class="post-categories">
                        <router-link to="/blog-list-large-image">App Release</router-link>
                    </div>
                    <h6 class="post-title">
                        <router-link to="/blog-details">Foundation 3 – the Truly Great Move</router-link>
                    </h6>
                </div>
            </div>
            <div class="post-item">
                <div class="post-info">
                    <div class="post-categories">
                        <router-link to="/blog-list-large-image">App Release</router-link>
                    </div>
                    <h6 class="post-title">
                        <router-link to="/blog-details">Creativity Boosting App is Here</router-link>
                    </h6>
                </div>
            </div>
            <div class="post-item">
                <div class="post-info">
                    <div class="post-categories">
                        <router-link to="/blog-list-large-image">App Release</router-link>
                    </div>
                    <h6 class="post-title">
                        <router-link to="/blog-details">D&amp;AD Festival 2019’s Brand Identity</router-link>
                    </h6>
                </div>
            </div>
        </div>
        <!-- === Sidebar Widget End === -->

        <!-- === Sidebar Widget Start === -->
        <div class="sidebar-widget widget-tag wow move-up">
            <h5 class="widget-title font-weight--light">Social</h5>
            <ul class="list ht-social-networks solid-rounded-icon">
                            <li class="item d-flex justify-content-between" style="gap: 0.5rem;">
                               <a target="_blank" href="https://www.facebook.com/uscdcism/" class="social-link hint--bounce hint--top  hint--primary" aria-label="@uscdcism" style="flex: 0 0 15%;"><i class="fab fa-facebook"></i> </a>
                               <span style="flex: 0 0 85%;">Department of Computer, Information Sciences, and Mathematics</span>
                            </li>
                        </ul>
        </div>
        <!-- === Sidebar Widget End === -->
    </div>
</template>