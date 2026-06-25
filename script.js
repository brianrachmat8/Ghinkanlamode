/* =========================================================
   GHINKAN LA MODE - FULL SCRIPT.JS
   Versi: Katalog + Varian Warna + Keranjang + Checkout WA
   + Preview gambar full + Lightbox + Scroll Zoom
   ========================================================= */

/* =========================
   1. PENGATURAN UTAMA
   ========================= */

// Ganti nomor ini dengan nomor WhatsApp admin Ghinkan La Mode.
// Format: 62 + nomor tanpa angka 0 di depan.
// Contoh: 081234567890 menjadi 6281234567890
const ADMIN_WHATSAPP_NUMBER = "6281234567890";

// Ongkir manual. Angka ditulis tanpa Rp dan tanpa titik.
// Contoh Rp20.000 ditulis 20000.
const SHIPPING_COST = 20000;


/* =========================
   2. DATA PRODUK
   =========================
   Catatan:
   - price ditulis angka saja.
   - image diarahkan ke folder images/products/
   - Jika file gambar kamu .png tapi di sini tertulis .jpg,
     script akan mencoba otomatis mencari .png, .jpeg, dan .webp.
   - Untuk paling aman, samakan nama file di folder dengan path di sini.
*/

const products = [
  {
    id: 1,
    name: "Gamis Premium Daily Wear",
    price: 185000,
    category: "Pakaian & Fashion",
    label: "Elegant Pick",
    icon: "👗",
    visualClass: "visual-fashion",
    description: "Gamis cantik untuk aktivitas harian, acara keluarga, dan tampilan muslimah yang anggun.",
    variants: [
      {
        name: "Pink Dusty",
        swatch: "#d98da8",
        image: "images/products/gamis-pink-dusty.webp"
      },
      {
        name: "Cream",
        swatch: "#ead7bd",
        image: "images/products/gamis-cream.webp"
      },
      {
        name: "Sage Green",
        swatch: "#9caf88",
        image: "images/products/gamis-sage-green.webp"
      },
      {
        name: "Maroon",
        swatch: "#7a263a",
        image: "images/products/gamis-maroon.webp"
      },
      {
        name: "Hitam",
        swatch: "#222222",
        image: "images/products/gamis-hitam.webp"
      }
    ]
  },

  {
    id: 2,
    name: "Hijab Voal Polos",
    price: 45000,
    category: "Pakaian & Fashion",
    label: "Best Seller",
    icon: "🧕",
    visualClass: "visual-fashion",
    description: "Hijab voal ringan, mudah dibentuk, dan cocok untuk gaya kasual maupun formal.",
    variants: [
      {
        name: "Mocca",
        swatch: "#a47764",
        image: "images/products/hijab-mocca.webp"
      },
      {
        name: "Nude",
        swatch: "#d9b6a3",
        image: "images/products/hijab-nude.webp"
      },
      {
        name: "Hitam",
        swatch: "#222222",
        image: "images/products/hijab-hitam.webp"
      }
    ]
  },

  {
    id: 3,
    name: "Blazer Wanita Kantor",
    price: 175000,
    category: "Pakaian & Fashion",
    label: "Office Look",
    icon: "🧥",
    visualClass: "visual-fashion",
    description: "Blazer wanita dengan potongan rapi untuk tampilan profesional dan feminin.",
    variants: [
      {
        name: "Cream",
        swatch: "#ead7bd",
        image: "images/products/blazer-cream.webp"
      },
      {
        name: "Hitam",
        swatch: "#222222",
        image: "images/products/blazer-hitam.webp"
      },
      {
        name: "Abu Muda",
        swatch: "#cfcfcf",
        image: "images/products/blazer-abu-muda.webp"
      }
    ]
  },

  {
    id: 4,
    name: "Facial Wash Gentle Cleanser",
    price: 65000,
    category: "Skincare",
    label: "Daily Care",
    icon: "🫧",
    visualClass: "visual-skincare",
    description: "Pembersih wajah lembut untuk membantu membersihkan kulit dari minyak dan kotoran.",
    variants: [
      {
        name: "Original",
        swatch: "#bff6ef",
        image: "images/products/facial-wash-original.webp"
      }
    ]
  },

  {
    id: 5,
    name: "Hydrating Toner",
    price: 79000,
    category: "Skincare",
    label: "Fresh Skin",
    icon: "💧",
    visualClass: "visual-skincare",
    description: "Toner yang membantu menjaga kelembapan kulit agar terasa lebih segar.",
    variants: [
      {
        name: "Original",
        swatch: "#9bd5f5",
        image: "images/products/toner-original.webp"
      }
    ]
  },

  {
    id: 6,
    name: "Serum Brightening",
    price: 99000,
    category: "Skincare",
    label: "Glow Up",
    icon: "✨",
    visualClass: "visual-skincare",
    description: "Serum wajah untuk membantu tampilan kulit terlihat lebih cerah dan sehat.",
    variants: [
      {
        name: "Original",
        swatch: "#f9d177",
        image: "images/products/serum-original.webp"
      }
    ]
  },

  {
    id: 7,
    name: "Lip Cream Matte",
    price: 59000,
    category: "Makeup",
    label: "Beauty Must Have",
    icon: "💄",
    visualClass: "visual-makeup",
    description: "Pewarna bibir dengan hasil matte yang cocok untuk makeup natural sehari-hari.",
    variants: [
      {
        name: "Nude Pink",
        swatch: "#d98da8",
        image: "images/products/lipcream-nude-pink.webp"
      },
      {
        name: "Rose",
        swatch: "#b94b62",
        image: "images/products/lipcream-rose.webp"
      },
      {
        name: "Brick Red",
        swatch: "#9f3f35",
        image: "images/products/lipcream-brick-red.webp"
      }
    ]
  },

  {
    id: 8,
    name: "Cushion Foundation",
    price: 115000,
    category: "Makeup",
    label: "Flawless Look",
    icon: "🪞",
    visualClass: "visual-makeup",
    description: "Base makeup praktis untuk membantu meratakan tampilan warna kulit.",
    variants: [
      {
        name: "Light Beige",
        swatch: "#f0cfad",
        image: "images/products/cushion-light-beige.webp"
      },
      {
        name: "Natural Beige",
        swatch: "#d8ad82",
        image: "images/products/cushion-natural-beige.webp"
      }
    ]
  },

  {
    id: 9,
    name: "Tas Selempang Wanita",
    price: 125000,
    category: "Aksesori & Tas",
    label: "Chic Style",
    icon: "👜",
    visualClass: "visual-accessory",
    description: "Tas selempang feminin untuk jalan santai, kuliah, kerja, atau hangout.",
    variants: [
      {
        name: "Cream",
        swatch: "#ead7bd",
        image: "images/products/tas-cream.webp"
      },
      {
        name: "Pink",
        swatch: "#f2a7bd",
        image: "images/products/tas-pink.webp"
      },
      {
        name: "Hitam",
        swatch: "#222222",
        image: "images/products/tas-hitam.webp"
      }
    ]
  },

  {
    id: 10,
    name: "Kacamata Hitam Fashion",
    price: 69000,
    category: "Aksesori & Tas",
    label: "Trendy",
    icon: "🕶️",
    visualClass: "visual-accessory",
    description: "Kacamata hitam stylish sebagai pelengkap outfit agar terlihat lebih fashionable.",
    variants: [
      {
        name: "Black",
        swatch: "#222222",
        image: "images/products/kacamata-black.webp"
      },
      {
        name: "Brown",
        swatch: "#6f4e37",
        image: "images/products/kacamata-brown.webp"
      }
    ]
  },

  {
    id: 11,
    name: "Body Lotion Moisturizing",
    price: 55000,
    category: "Rambut & Tubuh",
    label: "Soft Skin",
    icon: "🧴",
    visualClass: "visual-body",
    description: "Losion tubuh untuk membantu menjaga kulit tetap lembap dan terasa halus.",
    variants: [
      {
        name: "Original",
        swatch: "#f8df8a",
        image: "images/products/body-lotion-original.webp"
      }
    ]
  },

  {
    id: 12,
    name: "Parfum Wanita Floral",
    price: 89000,
    category: "Rambut & Tubuh",
    label: "Feminine Scent",
    icon: "🌸",
    visualClass: "visual-body",
    description: "Parfum dengan aroma floral feminin yang cocok untuk aktivitas harian.",
    variants: [
      {
        name: "Floral Pink",
        swatch: "#f2a7bd",
        image: "images/products/parfum-floral-pink.webp"
      },
      {
        name: "Vanilla Soft",
        swatch: "#ead7bd",
        image: "images/products/parfum-vanilla-soft.webp"
      }
    ]
  }
];


/* =========================
   3. AMBIL ELEMEN HTML
   ========================= */

const productGrid = document.getElementById("productGrid");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

const cartDrawer = document.getElementById("cartDrawer");
const openCartButton = document.getElementById("openCartButton");
const heroCartButton = document.getElementById("heroCartButton");
const closeCartButton = document.getElementById("closeCartButton");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const checkoutTotal = document.getElementById("checkoutTotal");
const openCheckoutButton = document.getElementById("openCheckoutButton");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutButton = document.getElementById("closeCheckoutButton");
const checkoutForm = document.getElementById("checkoutForm");

const productDetailModal = document.getElementById("productDetailModal");
const closeDetailButton = document.getElementById("closeDetailButton");
const detailMainImageWrap = document.getElementById("detailMainImageWrap");
const detailThumbnails = document.getElementById("detailThumbnails");
const detailCategory = document.getElementById("detailCategory");
const detailName = document.getElementById("detailName");
const detailPrice = document.getElementById("detailPrice");
const detailDescription = document.getElementById("detailDescription");
const variantOptions = document.getElementById("variantOptions");
const selectedVariantName = document.getElementById("selectedVariantName");
const detailQty = document.getElementById("detailQty");
const decreaseDetailQty = document.getElementById("decreaseDetailQty");
const increaseDetailQty = document.getElementById("increaseDetailQty");
const addDetailToCartButton = document.getElementById("addDetailToCartButton");

const imageLightbox = document.getElementById("imageLightbox");
const closeLightboxButton = document.getElementById("closeLightboxButton");
const lightboxStage = document.getElementById("lightboxStage");
const lightboxFigure = document.getElementById("lightboxFigure");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxZoomOut = document.getElementById("lightboxZoomOut");
const lightboxZoomIn = document.getElementById("lightboxZoomIn");
const lightboxReset = document.getElementById("lightboxReset");
const lightboxZoomLabel = document.getElementById("lightboxZoomLabel");


/* =========================
   4. STATE / DATA SEMENTARA
   ========================= */

let selectedCategory = "Semua";
let cart = JSON.parse(localStorage.getItem("ghinkanCart")) || [];

let activeProduct = null;
let activeVariant = null;
let activeQuantity = 1;
let activeZoom = 1;
let activeLightboxZoom = 1;


/* =========================
   5. HELPER UMUM
   ========================= */

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

function saveCart() {
  localStorage.setItem("ghinkanCart", JSON.stringify(cart));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeCssUrl(value) {
  return String(value).replaceAll("'", "\\'");
}

function getProductCover(product) {
  if (product.variants && product.variants.length > 0) {
    return product.variants[0].image;
  }

  return "";
}


/* =========================
   6. GAMBAR PRODUK
   ========================= */

function renderFallbackVisual(product, variant = null) {
  const swatch = variant?.swatch || "#f8c8dc";

  return `
    <div class="product-visual-fallback">
      <div>
        <div class="product-icon">${product.icon}</div>
        <div class="product-visual-title">${escapeHtml(product.name)}</div>

        ${
          variant
            ? `
              <div class="fallback-color-name" style="--swatch:${swatch};">
                <span></span>${escapeHtml(variant.name)}
              </div>
            `
            : ""
        }
      </div>
    </div>
  `;
}

function renderImageOrFallback(product, image, variant = null, className = "") {
  if (!image) {
    return renderFallbackVisual(product, variant);
  }

  const safeAlt = `${product.name}${variant ? " - " + variant.name : ""}`;
  const safeImage = escapeHtml(image);
  const cssImage = escapeCssUrl(image);

  return `
    <div class="fit-image-shell" style="--fit-img:url('${cssImage}')">
      <div class="fit-image-bg"></div>

      <img
        src="${safeImage}"
        alt="${escapeHtml(safeAlt)}"
        class="${className} fit-image-main"
        data-original-src="${safeImage}"
        data-try-index="0"
        onerror="handleImageError(this)"
      >
    </div>

    <div class="product-visual-fallback" style="display:none;">
      <div>
        <div class="product-icon">${product.icon}</div>
        <div class="product-visual-title">${escapeHtml(product.name)}</div>

        ${
          variant
            ? `
              <div class="fallback-color-name" style="--swatch:${variant.swatch};">
                <span></span>${escapeHtml(variant.name)}
              </div>
            `
            : ""
        }
      </div>
    </div>
  `;
}

/*
  Fungsi ini membantu kalau ekstensi gambar berbeda.
  Contoh:
  - script.js mencari gamis-hitam.jpg
  - file asli ternyata gamis-hitam.png
  Maka script akan mencoba .png otomatis.
*/
function handleImageError(imageElement) {
  const originalSrc = imageElement.dataset.originalSrc || imageElement.getAttribute("src");
  const tryIndex = Number(imageElement.dataset.tryIndex || "0");

  const extensionMatch = originalSrc.match(/\.(jpg|jpeg|png|webp)$/i);
  const currentExtension = extensionMatch ? extensionMatch[0].toLowerCase() : "";
  const basePath = extensionMatch ? originalSrc.replace(/\.(jpg|jpeg|png|webp)$/i, "") : originalSrc;

  const extensionOptions = [".jpg", ".png", ".jpeg", ".webp"].filter(
    (extension) => extension !== currentExtension
  );

  if (tryIndex < extensionOptions.length) {
    imageElement.dataset.tryIndex = String(tryIndex + 1);
    imageElement.src = basePath + extensionOptions[tryIndex];
    return;
  }

  const shell = imageElement.closest(".fit-image-shell");
  const fallback = shell ? shell.nextElementSibling : imageElement.nextElementSibling;

  if (shell) {
    shell.style.display = "none";
  }

  if (fallback) {
    fallback.style.display = "grid";
  }
}


/* =========================
   7. RENDER PRODUK
   ========================= */

function renderProducts() {
  const searchKeyword = searchInput ? searchInput.value.toLowerCase() : "";

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "Semua" || product.category === selectedCategory;

    const matchSearch =
      product.name.toLowerCase().includes(searchKeyword) ||
      product.category.toLowerCase().includes(searchKeyword) ||
      product.description.toLowerCase().includes(searchKeyword);

    return matchCategory && matchSearch;
  });

  if (!productGrid) return;

  productGrid.innerHTML = "";

  filteredProducts.forEach((product) => {
    const coverImage = getProductCover(product);
    const variantCount = product.variants ? product.variants.length : 0;

    productGrid.innerHTML += `
      <article class="product-card">
        <div class="product-image-wrap ${product.visualClass}">
          ${renderImageOrFallback(product, coverImage, product.variants?.[0], "product-photo")}
        </div>

        <div class="product-content">
          <div class="product-meta">
            <span class="product-category">${escapeHtml(product.category)}</span>
            <span class="product-label">${escapeHtml(product.label)}</span>
          </div>

          <h3>${escapeHtml(product.name)}</h3>
          <p class="product-price">${formatRupiah(product.price)}</p>
          <p class="variant-count">${variantCount} pilihan warna/varian</p>
          <p class="product-description">${escapeHtml(product.description)}</p>

          <button class="detail-button" onclick="openProductDetail(${product.id})">
            Lihat Detail & Pilih Warna
          </button>
        </div>
      </article>
    `;
  });

  if (emptyMessage) {
    emptyMessage.style.display = filteredProducts.length === 0 ? "block" : "none";
  }
}


/* =========================
   8. DETAIL PRODUK
   ========================= */

function openProductDetail(productId) {
  activeProduct = products.find((product) => product.id === productId);

  if (!activeProduct) return;

  activeVariant = activeProduct.variants?.[0] || {
    name: "Default",
    swatch: "#f8c8dc",
    image: ""
  };

  activeQuantity = 1;
  activeZoom = 1;

  detailCategory.textContent = activeProduct.category;
  detailName.textContent = activeProduct.name;
  detailPrice.textContent = formatRupiah(activeProduct.price);
  detailDescription.textContent = activeProduct.description;
  detailQty.textContent = activeQuantity;

  renderDetailGallery();
  renderVariantOptions();

  productDetailModal.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeProductDetail() {
  productDetailModal.classList.remove("active");

  if (
    !imageLightbox?.classList.contains("active") &&
    !checkoutModal?.classList.contains("active") &&
    !cartDrawer?.classList.contains("active")
  ) {
    document.body.classList.remove("no-scroll");
  }
}

function renderDetailGallery() {
  if (!activeProduct || !activeVariant) return;

  detailMainImageWrap.className = `detail-main-image-wrap ${activeProduct.visualClass}`;

  detailMainImageWrap.innerHTML = `
    <div class="zoom-toolbar">
      <button type="button" onclick="changeZoom(-0.25)">−</button>
      <span id="zoomLabel">${Math.round(activeZoom * 100)}%</span>
      <button type="button" onclick="changeZoom(0.25)">+</button>
      <button type="button" onclick="resetZoom()">Reset</button>
    </div>

    <div class="zoom-stage" style="--zoom:${activeZoom};" onclick="openImageLightbox()">
      ${renderImageOrFallback(activeProduct, activeVariant.image, activeVariant, "detail-main-image")}
    </div>

    <p class="zoom-click-hint">Klik gambar untuk preview full • Scroll hanya opsional</p>
  `;

  detailThumbnails.innerHTML = "";

  activeProduct.variants.forEach((variant, index) => {
    const isActive = variant.name === activeVariant.name ? "active" : "";

    detailThumbnails.innerHTML += `
      <button class="detail-thumb ${isActive}" onclick="selectVariant(${index})" title="${escapeHtml(variant.name)}">
        <span class="thumb-swatch" style="background:${variant.swatch};"></span>

        ${
          variant.image
            ? `
              <img
                src="${escapeHtml(variant.image)}"
                alt="${escapeHtml(variant.name)}"
                data-original-src="${escapeHtml(variant.image)}"
                data-try-index="0"
                onerror="this.style.display='none';"
              >
            `
            : ""
        }

        <small>${escapeHtml(variant.name)}</small>
      </button>
    `;
  });

  selectedVariantName.textContent = activeVariant.name;
}

function renderVariantOptions() {
  variantOptions.innerHTML = "";

  activeProduct.variants.forEach((variant, index) => {
    const isActive = variant.name === activeVariant.name ? "active" : "";

    variantOptions.innerHTML += `
      <button class="variant-option ${isActive}" onclick="selectVariant(${index})">
        <span style="background:${variant.swatch};"></span>
        ${escapeHtml(variant.name)}
      </button>
    `;
  });
}

function selectVariant(index) {
  activeVariant = activeProduct.variants[index];
  activeZoom = 1;

  renderDetailGallery();
  renderVariantOptions();

  if (imageLightbox?.classList.contains("active")) {
    renderLightbox();
  }
}

function increaseDetailQuantity() {
  activeQuantity += 1;
  detailQty.textContent = activeQuantity;
}

function decreaseDetailQuantity() {
  if (activeQuantity > 1) {
    activeQuantity -= 1;
    detailQty.textContent = activeQuantity;
  }
}


/* =========================
   9. ZOOM DETAIL PRODUK
   ========================= */

function updateZoomView() {
  const zoomStage = document.querySelector(".zoom-stage");
  const zoomLabel = document.getElementById("zoomLabel");

  if (zoomStage) {
    zoomStage.style.setProperty("--zoom", activeZoom);
  }

  if (zoomLabel) {
    zoomLabel.textContent = `${Math.round(activeZoom * 100)}%`;
  }
}

function changeZoom(step) {
  activeZoom = Math.max(1, Math.min(3, activeZoom + step));
  updateZoomView();
}

function resetZoom() {
  activeZoom = 1;
  updateZoomView();
}


/* =========================
   10. LIGHTBOX / PREVIEW BESAR
   ========================= */

function renderLightbox() {
  if (!activeProduct || !activeVariant) return;

  lightboxTitle.textContent = `${activeProduct.name} • ${activeVariant.name}`;

  lightboxFigure.innerHTML = `
    <div class="lightbox-image-shell ${activeProduct.visualClass}" style="--lb-zoom:${activeLightboxZoom};">
      ${renderImageOrFallback(activeProduct, activeVariant.image, activeVariant, "lightbox-image")}
    </div>
  `;

  updateLightboxZoom();
}

function openImageLightbox() {
  if (!activeProduct || !activeVariant) return;

  activeLightboxZoom = 1;
  renderLightbox();

  imageLightbox.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeImageLightbox() {
  imageLightbox.classList.remove("active");

  if (
    !productDetailModal?.classList.contains("active") &&
    !checkoutModal?.classList.contains("active") &&
    !cartDrawer?.classList.contains("active")
  ) {
    document.body.classList.remove("no-scroll");
  }
}

function updateLightboxZoom() {
  const shell = lightboxFigure.querySelector(".lightbox-image-shell");

  if (shell) {
    shell.style.setProperty("--lb-zoom", activeLightboxZoom);
  }

  if (lightboxZoomLabel) {
    lightboxZoomLabel.textContent = `${Math.round(activeLightboxZoom * 100)}%`;
  }
}

function changeLightboxZoom(step) {
  activeLightboxZoom = Math.max(1, Math.min(4, activeLightboxZoom + step));
  updateLightboxZoom();
}

function resetLightboxZoom() {
  activeLightboxZoom = 1;
  updateLightboxZoom();
}


/* =========================
   11. KERANJANG
   ========================= */

function addDetailToCart() {
  if (!activeProduct || !activeVariant) return;

  const cartKey = `${activeProduct.id}-${activeVariant.name}`;
  const existingItem = cart.find((item) => item.cartKey === cartKey);

  if (existingItem) {
    existingItem.quantity += activeQuantity;
  } else {
    cart.push({
      cartKey,
      id: activeProduct.id,
      name: activeProduct.name,
      price: activeProduct.price,
      icon: activeProduct.icon,
      variant: activeVariant.name,
      swatch: activeVariant.swatch,
      image: activeVariant.image,
      quantity: activeQuantity
    });
  }

  saveCart();
  renderCart();
  closeProductDetail();
  openCart();
}

function increaseQuantity(cartKey) {
  const item = cart.find((product) => product.cartKey === cartKey);

  if (item) {
    item.quantity += 1;
    saveCart();
    renderCart();
  }
}

function decreaseQuantity(cartKey) {
  const item = cart.find((product) => product.cartKey === cartKey);

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cart = cart.filter((product) => product.cartKey !== cartKey);
  }

  saveCart();
  renderCart();
}

function removeFromCart(cartKey) {
  cart = cart.filter((product) => product.cartKey !== cartKey);
  saveCart();
  renderCart();
}

function getSubtotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function getTotal() {
  if (cart.length === 0) return 0;
  return getSubtotal() + SHIPPING_COST;
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  if (cartCount) {
    cartCount.textContent = totalQuantity;
  }

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty">Keranjang masih kosong.</div>`;
    cartSubtotal.textContent = formatRupiah(0);
    cartTotal.textContent = formatRupiah(0);
    checkoutTotal.textContent = formatRupiah(0);
    openCheckoutButton.disabled = true;
    return;
  }

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="cart-thumb" style="--cart-swatch:${item.swatch || "#f8c8dc"};">
          ${
            item.image
              ? `
                <img
                  src="${escapeHtml(item.image)}"
                  alt="${escapeHtml(item.name)} - ${escapeHtml(item.variant)}"
                  data-original-src="${escapeHtml(item.image)}"
                  data-try-index="0"
                  onerror="this.style.display='none'; this.parentElement.classList.add('show-icon');"
                >
              `
              : ""
          }

          <span>${item.icon || "🛍️"}</span>
        </div>

        <div>
          <h4>${escapeHtml(item.name)}</h4>
          <p class="cart-variant">Warna: ${escapeHtml(item.variant || "-")}</p>
          <p>${formatRupiah(item.price)}</p>

          <div class="cart-item-actions">
            <div class="quantity-control">
              <button onclick="decreaseQuantity('${escapeHtml(item.cartKey)}')">-</button>
              <span>${item.quantity}</span>
              <button onclick="increaseQuantity('${escapeHtml(item.cartKey)}')">+</button>
            </div>

            <button class="remove-item" onclick="removeFromCart('${escapeHtml(item.cartKey)}')">
              Hapus
            </button>
          </div>
        </div>
      </div>
    `;
  });

  cartSubtotal.textContent = formatRupiah(getSubtotal());
  cartTotal.textContent = formatRupiah(getTotal());
  checkoutTotal.textContent = formatRupiah(getTotal());
  openCheckoutButton.disabled = false;
}

function openCart() {
  cartDrawer.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cartDrawer.classList.remove("active");

  if (
    !productDetailModal?.classList.contains("active") &&
    !imageLightbox?.classList.contains("active") &&
    !checkoutModal?.classList.contains("active")
  ) {
    document.body.classList.remove("no-scroll");
  }
}


/* =========================
   12. CHECKOUT VIA WHATSAPP
   ========================= */

function openCheckout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong.");
    return;
  }

  checkoutModal.classList.add("active");
  document.body.classList.add("no-scroll");
}

function closeCheckout() {
  checkoutModal.classList.remove("active");

  if (
    !productDetailModal?.classList.contains("active") &&
    !imageLightbox?.classList.contains("active") &&
    !cartDrawer?.classList.contains("active")
  ) {
    document.body.classList.remove("no-scroll");
  }
}

function createOrderNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);

  return `GLM-${year}-${random}`;
}

function createWhatsappMessage(orderData) {
  const productList = cart
    .map((item, index) => {
      const itemTotal = item.price * item.quantity;

      return `${index + 1}. ${item.name}
   Warna/Varian: ${item.variant || "-"}
   Qty: ${item.quantity}
   Harga: ${formatRupiah(item.price)}
   Total: ${formatRupiah(itemTotal)}`;
    })
    .join("\n\n");

  return `Halo Admin Ghinkan La Mode, saya ingin membuat pesanan.

Nomor Order: ${orderData.orderNumber}

Data Pembeli:
Nama: ${orderData.name}
WhatsApp: ${orderData.phone}
Alamat: ${orderData.address}

Produk:
${productList}

Subtotal: ${formatRupiah(getSubtotal())}
Estimasi Ongkir: ${formatRupiah(SHIPPING_COST)}
Total Pesanan: ${formatRupiah(getTotal())}

Metode Pembayaran: ${orderData.paymentMethod}
Catatan: ${orderData.note || "-"}

Mohon konfirmasi ketersediaan produk dan instruksi pembayaran.`;
}


/* =========================
   13. EVENT LISTENER
   ========================= */

if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const orderData = {
      orderNumber: createOrderNumber(),
      name: document.getElementById("customerName").value.trim(),
      phone: document.getElementById("customerPhone").value.trim(),
      address: document.getElementById("customerAddress").value.trim(),
      paymentMethod: document.getElementById("paymentMethod").value,
      note: document.getElementById("orderNote").value.trim()
    };

    const message = createWhatsappMessage(orderData);
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const orderHistory = JSON.parse(localStorage.getItem("ghinkanOrders")) || [];

    orderHistory.push({
      ...orderData,
      items: cart,
      subtotal: getSubtotal(),
      shipping: SHIPPING_COST,
      total: getTotal(),
      createdAt: new Date().toISOString()
    });

    localStorage.setItem("ghinkanOrders", JSON.stringify(orderHistory));

    cart = [];
    saveCart();
    renderCart();
    checkoutForm.reset();
    closeCheckout();
    closeCart();

    window.open(whatsappUrl, "_blank");
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    selectedCategory = button.dataset.category;
    renderProducts();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

if (openCartButton) openCartButton.addEventListener("click", openCart);
if (heroCartButton) heroCartButton.addEventListener("click", openCart);
if (closeCartButton) closeCartButton.addEventListener("click", closeCart);
if (openCheckoutButton) openCheckoutButton.addEventListener("click", openCheckout);
if (closeCheckoutButton) closeCheckoutButton.addEventListener("click", closeCheckout);

if (closeDetailButton) closeDetailButton.addEventListener("click", closeProductDetail);
if (increaseDetailQty) increaseDetailQty.addEventListener("click", increaseDetailQuantity);
if (decreaseDetailQty) decreaseDetailQty.addEventListener("click", decreaseDetailQuantity);
if (addDetailToCartButton) addDetailToCartButton.addEventListener("click", addDetailToCart);

if (cartDrawer) {
  cartDrawer.addEventListener("click", (event) => {
    if (event.target === cartDrawer) closeCart();
  });
}

if (checkoutModal) {
  checkoutModal.addEventListener("click", (event) => {
    if (event.target === checkoutModal) closeCheckout();
  });
}

if (productDetailModal) {
  productDetailModal.addEventListener("click", (event) => {
    if (event.target === productDetailModal) closeProductDetail();
  });
}

if (closeLightboxButton) closeLightboxButton.addEventListener("click", closeImageLightbox);
if (lightboxZoomOut) lightboxZoomOut.addEventListener("click", () => changeLightboxZoom(-0.2));
if (lightboxZoomIn) lightboxZoomIn.addEventListener("click", () => changeLightboxZoom(0.2));
if (lightboxReset) lightboxReset.addEventListener("click", resetLightboxZoom);

if (imageLightbox) {
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) closeImageLightbox();
  });
}

if (lightboxStage) {
  lightboxStage.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      changeLightboxZoom(event.deltaY < 0 ? 0.12 : -0.12);
    },
    { passive: false }
  );
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (imageLightbox?.classList.contains("active")) {
      closeImageLightbox();
    } else if (productDetailModal?.classList.contains("active")) {
      closeProductDetail();
    } else if (checkoutModal?.classList.contains("active")) {
      closeCheckout();
    } else if (cartDrawer?.classList.contains("active")) {
      closeCart();
    }
  }
});


/* =========================
   14. JALANKAN WEBSITE
   ========================= */

renderProducts();
renderCart();
