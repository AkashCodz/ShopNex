const computers_data = [
  { name: "Acer Nitro 5 Gaming Laptop", price: 126, url: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_1_9.png" },
  { name: "Dell XPS 15", price: 234, url: "https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200" },
  { name: "ASUS VivoBook S15", price: 562, url: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg" },
  { name: "HP Spectre x360", price: 124, url: "https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/pass/How-to-Choose-a-Laptop-August-2023-Gear.jpg" },
  { name: "Lenovo Legion 5 Gaming Laptop", price: 238, url: "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg" },
  { name: "Razer Blade 15 Gaming Laptop", price: 457, url: "https://assets2.razerzone.com/images/pnx.assets/7fb8deac5d3c73e360bc687ed62be6cf/gaming-laptops-og-image.webp" },
  { name: "Dell Inspiron 14", price: 235, url: "https://images.news18.com/ibnlive/uploads/2021/07/1627314288_dell-inspiron-5410-best-budget-laptops-amazon-prime-day-sale-1600x1200.jpg" },
  { name: "Microsoft Surface Laptop Studio", price: 765, url: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Surfcae-laptops-models-hero-poster?scl=1" },
  { name: "Apple MacBook Pro", price: 123, url: "https://www.pcworld.com/wp-content/uploads/2024/05/bf-laptop-deals-pcw.jpg?quality=50&strip=all" },
  { name: "HP Envy 16", price: 432, url: "https://media.wired.com/photos/64c4456bda92561daff93d40/master/w_320%2Cc_limit/HP-Envy-16-back-SOURCE%2520HP-Gear.jpg" },
  { name: "Lenovo ThinkPad X1 Carbon", price: 543, url: "https://i.pcmag.com/imagery/roundups/0067KVthfOytnra14VzQ5PK-41..v1700163487.jpg" },
  { name: "Microsoft Surface Laptop 9 Pro", price: 231, url: "https://images.moneycontrol.com/static-mcnews/2023/12/Best-laptops-under-Rs-1-lakh-Microsoft-Surface-9-Pro-770x433.jpg?impolicy=website&width=770&height=431" },
  // { name: "", price: "", url: "" },
];

const fashion = [
  { name: "Lace Allure Bralette", price: 250, url: "https://raw.githubusercontent.com/AkashCodz/Images/main/bra/0%20(39).jpg" },
  { name: "Satin Elegance Bralette", price: 250, url: "https://raw.githubusercontent.com/AkashCodz/Images/main/bra/1%20(3).jpg" },
  { name: "Rainbow Hues Maxi Dress", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/colourful/0%20(15).jpg?raw=true" },
  { name: "Pastel Paradise Midi Dress", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/colourful/0%20(18).jpg?raw=true" },
  { name: "Neon Splash Shift Dress", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/colourful/0%20(19).jpg?raw=true" },
  { name: "Vibrant Vibes A-Line Dress", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/colourful/0%20(28).jpg?raw=true" },
  { name: "Floral Fantasy Sun Hat", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/hat%20carfs/0%20(42).jpg?raw=true" },
  { name: "Cozy Cable Knit Scarf", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/hat%20carfs/0%20(23).jpg?raw=true" },
  { name: "Chic Fedora Hat", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/hat%20carfs/0%20(30).jpg?raw=true" },
  { name: "Ocean Blue Chiffon Dress", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/colourful/0%20(3).jpg?raw=true" },
  { name: "Sunset Boulevard Wrap Dress", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/colourful/0%20(33).jpg?raw=true" },
  { name: "Minty Fresh Bodycon Dress", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/colourful/0%20(5).jpg?raw=true" },
  { name: "Plaid Perfection Wool Hat", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/hat%20carfs/0%20(37).jpg?raw=true" },
  { name: "Boho Fringe Scarf", price: 250, url: "https://github.com/AkashCodz/Images/blob/main/hat%20carfs/0%20(44).jpg?raw=true" },
  // { name: "", price: "", url: "" },
];

const homeKitchen = [
  { name: "Sharp Cutter", price: 23, url: "https://static.javatpoint.com/list/images/list-of-kitchen-items13.png" },
  { name: "Gas Stove", price: 76, url: "https://static.javatpoint.com/list/images/list-of-kitchen-items1.png" },
  { name: "Egg Boiler", price: 12, url: "https://images.herzindagi.info/image/2022/Apr/onlin-egg-boiler-fruits-juice-maker-milk-frother.jpg" },
  { name: "Juicer", price: 43, url: "https://www.allrecipes.com/thmb/qv-5nBVYOhQ6tN5Y_kbXEsaSW4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/allrecipes-13-kitchen-items-you-should-own-by-30-adobe-stock-4x3-60841f931f434c9281953d3abbf3d5a6.jpg" },
  { name: "Oven", price: 23, url: "https://shop.panasonic.com/cdn/shop/files/NB-G110P_WHITE_0003_copy.jpg?v=1689175543&width=2000" },
  { name: "Oven Classical", price: 23, url: "https://www.hindustantimes.com/ht-img/img/2023/10/08/550x309/home_and_kitchen_items_and_gadgets_1696776866613_1696776877387.jpg" },
  { name: "Mixer", price: 23, url: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/01/13225019/Kitchen-Appliances-Mixie.jpg" },
  { name: "Small Juicer", price: 23, url: "https://www.kent.co.in/images/kitchen-appliances/mobile-banner-kent-multi-cooker.png" },
  { name: "Mixer Container", price: 23, url: "https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/digital-assets/pages/countertop-appliances/CSHP_open.jpg?wid=1200&fmt=webp" },
  { name: "Gas Stove Classical", price: 23, url: "https://www.butterflyindia.com/wp-content/uploads/2022/01/1aa-300x300.jpg" },
  { name: "Toaster", price: 23, url: "https://shop.ttkprestige.com/media/catalog/product/4/2/42286-IMG1_2.jpg?optimize=high&fit=bounds&height=500&width=500" },
  { name: "Heater", price: 23, url: "https://sathya.in/media/89059/catalog/kitchen-app-icons-induction.jpg?size=256" },
  // { name: "", price: "", url: "" },
];

const mobiles = [
  { name: "Vivo T2 5G", price: 457, url: "https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg" },
  { name: "iPhone 14 Pro Max", price: 235, url: "https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/400x400" },
  { name: "iPhone 13 Pro Max", price: 765, url: "https://grademobile.co.uk/cdn/shop/files/iphone-13-pro-max-silver-select_1024x_493f72b8-4fc3-4ef5-a696-09b67ba64a76_400x400.png?v=1700834400" },
  { name: "iPhone 12", price: 123, url: "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg" },
  { name: "Oppo Reno series", price: 432, url: "https://5.imimg.com/data5/SELLER/Default/2021/12/SR/BW/WT/25006117/oppo-mobiles-phones.jpeg" },
  { name: "Micromax IN 1", price: 543, url: "https://micromaxinfo.com/pub/media/catalog/product/cache/b914b0fdeb014670f9973a1e4ad19126/i/n/in-1-1000x1000-min.png" },
  { name: "Redmi A2 Plus", price: 231, url: "https://www.reliancedigital.in/medias/Redmi-A2-Plus-493838651-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODAwM3xpbWFnZS9qcGVnfGltYWdlcy9oY2UvaGNiLzEwMDU4OTU0MjQ0MTI2LmpwZ3w1OTVmNzU2MTMzNmE0Njg2NzM0YTY3YzA3MWNiZGMzNDkwZjJlMjc2ZTA4MmM4NmMxMjYwNTgyMjdiMjNlYzc5" },
  // { name: "", price: "", url: "" },
];
const Watches = [
  { name: "Jacket", price: 231, url: "https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_DpWeblab_.jpg" },
  { name: "Apple Watch", price: 231, url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML733_VW_34FR+watch-case-41-stainless-gold-s9_VW_34FR+watch-face-41-stainless-gold-s9_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507905569" },
  { name: "Sunglasses", price: 231, url: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Backpack", price: 231, url: "https://images-cdn.ubuy.co.in/633af453c2e1602a257ef5c7-ubuy-online-shopping.jpg" },
  { name: "Military Watch", price: 231, url: "https://images-cdn.ubuy.co.in/65487090c761180592382d4a-men-watches-military-black-steel.jpg" },
  { name: "Apple Watch", price: 231, url: "https://media.wired.com/photos/6511aab1189c419c40374c92/4:3/w_1803,h_1352,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg" },
  { name: "Waterproof Watch", price: 231, url: "https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg" },
  { name: "Fastrack Watch", price: 231, url: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800" },
  { name: "Watch", price: 231, url: "https://cdn.shopify.com/s/files/1/0047/1947/6825/files/small_watch_001.png" },
  { name: "Original Watch", price: 231, url: "https://rukminim2.flixcart.com/image/450/500/xif0q/watch/g/p/a/-original-imagrdzfhmhggmbz.jpeg?q=90&crop=false" },
  { name: "Sunglasses", price: 231, url: "https://m.media-amazon.com/images/I/71TFyRJ+MqL._AC_UF894,1000_QL80_DpWeblab_.jpg" },
  // { name: "", price: "", url: "" },
];
const EarBuds = [
  { name: "Bluetooth Earbuds", price: 231, url: "https://m.media-amazon.com/images/I/61P2W6vblIL._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
  { name: "Wireless Earphones", price: 231, url: "https://www.leafstudios.in/cdn/shop/files/1_cf6da32c-5eee-4729-8d73-757591c65609_600x.png?v=1704709247" },
  { name: "Wireless Earbuds", price: 231, url: "https://cdn.thewirecutter.com/wp-content/media/2022/11/wirelessearbuds-2048px-8829.jpg" },
  { name: "Wireless Earbuds", price: 231, url: "https://cdn.thewirecutter.com/wp-content/media/2022/11/wirelessearbuds-2048px-8831.jpg" },
  { name: "Bluetooth Earbuds", price: 231, url: "https://m.media-amazon.com/images/I/61dGwBIwaDL._AC_UF1000,1000_QL80_DpWeblab_.jpg" },
  { name: "Wireless Earphones", price: 231, url: "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/20240430-104004.jpg?v=1714465062" },
  { name: "Earbuds", price: 231, url: "https://fox59.com/wp-content/uploads/sites/21/2024/02/electronics-best-earbuds-for-taking-phone-calls.jpg" },
  { name: "Bluetooth Earbuds", price: 231, url: "https://images.squarespace-cdn.com/content/v1/5beb251ab40b9dd2724c2f46/157f07dd-ea7d-4589-9645-9858c60882d7/OnePlus+Buds+3+review+features+and+codecs.jpeg" },
  { name: "True Wireless Earbuds", price: 231, url: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NjY4MzZ8aW1hZ2UvanBnfGhiZS9oZWIvMTIwODg3NjM2MTMyMTQuanBnfDZhNjlmM2JjN2E4ODU3N2JjOGU5MmI2MjgyNzg4ZmNiMDUzODc4Y2E0NTEzMjFlNGJmZGQ0MWU0NDMwNDcxOTY/lenovo-smart-audio-smart-wireless-earbuds-gallery-2.jpg" },
  { name: "Earbuds", price: 231, url: "https://www.livemint.com/lm-img/img/2023/12/11/600x338/best_earbuds_under_rs_1500_1702296699280_1702296699492.jpg" },
  { name: "Wireless Earbuds", price: 231, url: "https://audionic.co/cdn/shop/files/audionic-the-sound-master-black-airbud-425-tws-earbuds-35775640731804.png?v=1693986141" },
  { name: "Headphones", price: 231, url: "https://images.thdstatic.com/productImages/cd8b25bf-44a0-473d-aeff-9b52ca1c7d6d/svn/proht-headphones-87079-64_600.jpg" },
  { name: "Noise Cancelling Earbuds", price: 231, url: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/accessories/headphones/qc_earbuds_ii_slugger/silo/CTP-36783_SLUGGER_SILICONE-B_ECOM-1.png/jcr:content/renditions/cq5dam.web.320.320.png" },
  { name: "JLab JBuds Mini", price: 231, url: "https://media.wired.com/photos/654d086a517719196e5e6a1b/master/w_320%2Cc_limit/JLab-JBuds-Mini-Featured-Gear.jpg" },
  { name: "Modern Wears", price: 231, url: "https://modernwears.pk/wp-content/uploads/2023/06/01.jpg" },
  { name: "Creative Aurvana Ace 2", price: 231, url: "https://www.cnet.com/a/img/resize/26e381e4f5f8e246d3567ea285fa2a0a2f54cc3c/hub/2024/04/05/9221994a-c071-4987-8da8-1860f7e3828c/creative-aurvana-ace-2-blue-background.jpg?auto=webp&height=500" },
  // { name: "", price: "", url: "" },
];
const PowerBank = [
  { name: "Intex Power Bank", price: 231, url: "https://m.media-amazon.com/images/I/31dxqKcCvSL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Mi Power Bank 3i 10000mAh", price: 231, url: "https://m.media-amazon.com/images/I/71GfLIrtFUL._AC_UF1000,1000_QL80_.jpg" },
  { name: "20000mAh Solar Powerbank", price: 231, url: "https://www.sbsmobile.com/dan/242739-thickbox_default/20000mah-solar-powerbank.jpg" },
  { name: "Sandberg Powerbank 420-75", price: 231, url: "https://cdn.sandberg.world/products/images/rt/420-75_rt.jpg" },
  { name: "Vincosy Power Bank 50000mAh", price: 231, url: "https://images-cdn.ubuy.co.in/639cdb596e37676d405b51a4-vincosy-power-bank-50000mah-mobile.jpg" },
  { name: "Ambrane Power Bank 10000mAh", price: 231, url: "https://m.media-amazon.com/images/I/81rbcL+nL7L._AC_UF1000,1000_QL80_.jpg" },
  { name: "Mini Power Bank 10000mAh", price: 231, url: "https://5.imimg.com/data5/SELLER/Default/2023/4/298383257/MP/YZ/NQ/128786604/minipower-bank10000mahportable-battery-double-usb-powerbank-10000-mah-creditcard-size-battery.jpg" },
  { name: "Portronics Power Bank", price: 231, url: "https://www.synhead.in/cdn/shop/files/3_ac43eb87-b5a9-4ac7-a56a-b65d6fdc1ac2.png?v=1704017568" },
  { name: "Lenovo Power Bank 10000mAh", price: 231, url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/power-bank/0/j/r/lm-pb436-battery-capacity-10000mah-2-usb-ports-4-in-1-cable-ios-original-imagk34um6npezdh.jpeg?q=90&crop=false" },
  { name: "PhoneKart Power Bank", price: 231, url: "https://phonokart.com/cdn/shop/files/PowerBank3.jpg?v=1693999419" },
  { name: "1000mAh Power Bank", price: 231, url: "https://5.imimg.com/data5/GW/UA/SG/SELLER-14201254/1000mah-power-bank.jpg" },
  { name: "Anker Power Bank PowerCore 24K", price: 231, url: "https://images-cdn.ubuy.co.in/633a9f5545671029020ca682-anker-737-power-bank-powercore-24k.jpg" },
  { name: "Philips Power Bank", price: 231, url: "https://images.philips.com/is/image/philipsconsumer/26935b6c517041128eccb0bd009b382a?$jpglarge$&wid=1250" },
  { name: "Boat Power Bank", price: 231, url: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_1d6fc688-0209-4ae3-beb8-1732bff17de0.png?v=1704271431https://www.mytrendyphone.eu/images/Cyke-P1-Plus-Wireless-Power-Bank-20000mAh-Green-15092020-01-p.webp" },
  { name: "Cyke P1 Plus Wireless Power Bank 20000mAh", price: 231, url: "https://media.assettype.com/digitalterminal%2F2023-02%2F5805da5c-5885-4ffc-957d-f13b11235896%2FUBON_PB_X35_Powerbank___1_.png" },
  { name: "Ubon Powerbank X35", price: 231, url: "https://www.poojaratele.com/media/catalog/product/cache/28b568fbf82d79c53c9eab7361be58d0/s/t/stuffcool-10000-mah-type-c-pd-20w-usb-a-fast-charger-powerbank-thum1.jpg" },
  { name: "Stuffcool Power Bank 10000mAh", price: 231, url: "https://www.stuffcool.com/cdn/shop/files/PBPALMBLUSC1_400x.jpg?v=1710569856" },
  { name: "Stuffcool Power Bank", price: 231, url: "https://images.samsung.com/is/image/samsung/in-wireless-powerbank-eb-u1200-eb-u1200cpngin-frontpink-160992531?$650_519_PNG$" },
  { name: "Samsung Wireless Powerbank EB-U1200", price: 231, url: "https://cdn.sandberg.world/products/images/lg/320-42_lg.jpg" },
  { name: "Sandberg Powerbank 320-42", price: 231, url: "https://cdn.sandberg.world/products/images/lg/320-42_lg.jpg" },
  { name: "Sandberg Powerbank 320-42", price: 231, url: "https://realike.in/cdn/shop/products/realike-powerbank-20000-mah-3-usb-power-bank-lcd-display-battery-for-huawei-xiaomi-iphone-samsung-lg-sony-htc-bluetooth-speaker-etc-31686477578392_1024x1024.jpg?v=1627982578" },
  { name: "Realike Power Bank 20000mAh", price: 231, url: "https://cdn.sandberg.world/products/images/lg/420-64_lg.jpg" },
  { name: "Sandberg Powerbank 420-64", price: 231, url: "https://m.media-amazon.com/images/I/51lKFPIfKjL._AC_UF1000,1000_QL80_.jpg" },
  { name: "Aukey Power Bank 10000mAh", price: 231, url: "https://assets.katogroup.eu/i/katogroup/NCNPB2_01_nitecore?%24product-image%24=&fmt=auto&h=434&w=652" },
  // { name: "", price: "", url: "" },
];


  module.exports = { computers_data ,fashion ,homeKitchen ,mobiles ,Watches ,EarBuds ,PowerBank };