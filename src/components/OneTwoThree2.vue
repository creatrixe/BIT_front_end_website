<template>
    <div class="cb-view" data-controller="homeController" id="view-main"><canvas class="cb-scene"></canvas>
        <div class="cb-layout" style="overflow:hidden"  role="main">
            <section class="cb-featured">
                <div class="cb-featured-content">
                    <div class="cb-featured-container">

                        <div class="cb-featured-items">
                            <!-- <div class="cb-featured-item" data-project="slot1" data-project-bg="red"
                                data-cursor="-color-genesis">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right"><a class="cb-featured-item-img"
                                            href="genesis.html" aria-label="Genesis Vision">
                                            <picture>
                                                <source srcset="images/slot1.png, images/slot1.png 2x"
                                                    media="(max-width:1199px)"><img src="images/slot1.png"
                                                    srcset="images/slot1.png 2x" loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <div class="cb-featured-item-text">
                                            <p>Shop local,</p>
                                            <p>support <span class="text-red">small</span></p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p>Receive rewards, loyalty points and special offers</p>
                                            <p>from your favourite brands.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="cb-featured-item" data-project="slot2" data-project-bg="linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(46,46,46,1) 32%, rgba(64,63,63,1) 100%)"
                                data-cursor="-color-genesis">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right " ><a class="cb-featured-item-img"
                                            href="genesis.html" aria-label="Genesis Vision">
                                            <picture>
                                                <source srcset="images/slot2.png, images/slot2.png "
                                                    media="(max-width:1199px)"><img src="images/slot2.png"
                                                    srcset="images/slot2.png " loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <div class="cb-featured-item-header text-white">
                                            <h1 class="archivo-font display-4 text-white">As easy as one, <br> two and three!</h1>
                                        </div>
                                        <div class="cb-featured-item-text">
                                            <p class="text-red my-0">Download the app and sign up</p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p class="text-white">and receive your very own, unique QR code.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cb-featured-item" data-project="slot3" data-project-bg="linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(46,46,46,1) 32%, rgba(64,63,63,1) 100%)"
                                data-cursor="-color-sigma">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right"><a class="cb-featured-item-img"
                                            href="sigma.html" aria-label="ATOL Sigma">
                                            <picture>
                                                <source srcset="images/slot3.png, images/slot3.png 2x"
                                                    media="(max-width:1199px)"><img src="images/slot3.png"
                                                    srcset="images/slot3.png 2x" loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <div class="cb-featured-item-text">
                                            <p class="text-red my-0">Visit the store of your choice</p>
                                            <p class="text-red my-0">and scan your QR code</p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p class="text-white">when you make a purchase.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cb-featured-item" data-project="slot4" data-project-bg="linear-gradient(0deg, rgba(23,23,23,1) 0%, rgba(46,46,46,1) 32%, rgba(64,63,63,1) 100%)"
                                data-cursor="-color-sleepiest">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right"><a class="cb-featured-item-img"
                                            href="sleepiest.html" aria-label="Sleepiest">
                                            <picture>
                                                <source srcset="images/slot4.png, images/slot4.png 2x"
                                                    media="(max-width:1199px)"><img src="images/slot4.png"
                                                    srcset="images/slot4.png 2x" loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <!-- <div class="cb-featured-item-header">
                        <h3>Sleepiest</h3>
                    </div> -->
                                        <div class="cb-featured-item-text">
                                            <p class="text-red my-0">Track your loyalty points</p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p class="text-white">once you have racked up the required number:</p>
                                            <p class="text-white">claim your reward!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cb-featured-item" data-project="slot5" data-project-bg="white"
                                data-cursor="-color-nana">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right"><a class="cb-featured-item-img"
                                            href="nana.html" aria-label="Nana Asia">
                                            <picture>
                                                <source srcset="images/slot5.png, images/slot5.png 2x"
                                                    media="(max-width:1199px)"><img src="images/slot5.png"
                                                    srcset="images/slot5.png 2x" loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <div class="cb-featured-item-header text-black">
                                            <h1 class="archivo-font display-4 text-black">All good things <br> in one place</h1>
                                        </div>
                                        <div class="cb-featured-item-text">
                                            <p class="text-red my-0">Your favorite brands, on one app</p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p class="text-black">Open the app to be greeted by all your favourite stores and see.</p>
                                            <p class="text-black">what exciting offers they have in store for you.</p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            <div class="cb-featured-item" data-project="slot6" data-project-bg="white"
                                data-cursor="-color-sleepiest">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right"><a class="cb-featured-item-img"
                                            href="sleepiest.html" aria-label="Sleepiest">
                                            <picture>
                                                <source srcset="images/slot6.png, images/slot6.png 2x"
                                                    media="(max-width:1199px)"><img src="images/slot6.png"
                                                    srcset="images/slot6.png 2x" loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <!-- <div class="cb-featured-item-header">
                        <h3>Sleepiest</h3>
                    </div> -->
                                        <div class="cb-featured-item-text">
                                            <p class="text-red">Curated flash offers, just for you</p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p>Expect surprise discounts, rewards, offers, limited-time deals and </p>
                                            <p>more from your favourite stores.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cb-featured-item" data-project="slot7" data-project-bg="white"
                                data-cursor="-color-sleepiest">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right"><a class="cb-featured-item-img"
                                            href="sleepiest.html" aria-label="Sleepiest">
                                            <picture>
                                                <source srcset="images/slot7.png, images/slot7.png 2x"
                                                    media="(max-width:1199px)"><img src="images/slot7.png"
                                                    srcset="images/slot7.png 2x" loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <!-- <div class="cb-featured-item-header">
                        <h3>Sleepiest</h3>
                    </div> -->
                                        <div class="cb-featured-item-text">
                                            <p class="text-red">Absolute privacy, guaranteed</p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p>We never sell or share your data to third parties. For more</p>
                                            <p>details, read our privacy policy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cb-featured-item" data-project="slot8" data-project-bg="white"
                                data-cursor="-color-sleepiest">
                                <div class="cb-featured-item-grid">
                                    <div class="cb-featured-item-grid-col -right"><a class="cb-featured-item-img"
                                            href="sleepiest.html" aria-label="Sleepiest">
                                            <picture>
                                                <source srcset="images/slot8.png, images/slot8.png 2x"
                                                    media="(max-width:1199px)"><img src="images/slot8.png"
                                                    srcset="images/slot8.png 2x" loading="lazy" alt />
                                            </picture>
                                        </a></div>
                                    <div class="cb-featured-item-grid-col -left">
                                        <!-- <div class="cb-featured-item-header">
                            <h3>Sleepiest</h3>
                        </div> -->
                                        <div class="cb-featured-item-text">
                                            <p class="text-red">Your info is safe with us</p>
                                        </div>
                                        <div class="cb-featured-item-tags">
                                            <p>No need to worry about your personal information being</p>
                                            <p>compromised. Data security is our highest priority.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<script>
export default {
    mounted() {

        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', './js/js-bundle.js')
        document.head.appendChild(recaptchaScript)             
    }
}
</script>

<style>

</style>