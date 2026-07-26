/* ============================================================
   DISPOLINE INDIA — SHARED UI BEHAVIOR
   Header cart count, mini-cart drawer, mobile nav, toast, add-to-cart
   ============================================================ */

document.addEventListener("DOMContentLoaded", function(){
  renderCartCount();
  renderMiniCart();
  bindDrawerEvents();
  bindMobileNav();
  bindAddToCartButtons();
});

document.addEventListener("cart:updated", function(){
  renderCartCount();
  renderMiniCart();
});

function renderCartCount(){
  const count = Cart.count();
  document.querySelectorAll(".js-cart-count").forEach(el=>{
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function openDrawer(){
  document.querySelector(".drawer-overlay")?.classList.add("open");
  document.querySelector(".drawer")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawer(){
  document.querySelector(".drawer-overlay")?.classList.remove("open");
  document.querySelector(".drawer")?.classList.remove("open");
  document.body.style.overflow = "";
}

function bindDrawerEvents(){
  document.querySelectorAll(".js-open-cart").forEach(btn=>{
    btn.addEventListener("click", (e)=>{ e.preventDefault(); openDrawer(); });
  });
  document.querySelector(".js-close-drawer")?.addEventListener("click", closeDrawer);
  document.querySelector(".drawer-overlay")?.addEventListener("click", closeDrawer);
}

function bindMobileNav(){
  const burger = document.querySelector(".burger");
  const mnav = document.querySelector(".mobile-nav");
  if(!burger || !mnav) return;
  burger.addEventListener("click", ()=>{
    mnav.classList.toggle("open");
  });
}

function renderMiniCart(){
  const body = document.querySelector(".js-drawer-body");
  const footTotal = document.querySelector(".js-drawer-subtotal");
  if(!body) return;
  const lines = Cart.lines();
  if(lines.length === 0){
    body.innerHTML = '<p class="empty-note">Your cart is empty. Browse the catalog to add sterile procedure kits, gowns and drapes.</p>';
  }else{
    body.innerHTML = lines.map((l, idx)=>`
      <div class="mini-item" data-idx="${idx}">
        <img src="${productImageSVG(l.product)}" alt="${l.product.name}">
        <div style="flex:1;">
          <div class="mi-name">${l.product.name}</div>
          <div class="mi-meta">${l.pack}</div>
          <div class="mi-row">
            <div class="qty-stepper" data-idx="${idx}">
              <button class="js-dec" type="button">−</button>
              <span>${l.qty}</span>
              <button class="js-inc" type="button">+</button>
            </div>
            <div class="prod-price">${formatINR(l.lineTotal)}</div>
          </div>
          <button class="mi-remove js-remove" data-idx="${idx}" type="button">Remove</button>
        </div>
      </div>
    `).join("");
  }
  if(footTotal) footTotal.textContent = formatINR(Cart.subtotal());

  body.querySelectorAll(".js-inc").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const idx = parseInt(btn.closest(".mini-item").dataset.idx,10);
      const lines2 = Cart.lines();
      Cart.updateQty(idx, lines2[idx].qty + 1);
    });
  });
  body.querySelectorAll(".js-dec").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const idx = parseInt(btn.closest(".mini-item").dataset.idx,10);
      const lines2 = Cart.lines();
      Cart.updateQty(idx, lines2[idx].qty - 1);
    });
  });
  body.querySelectorAll(".js-remove").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      Cart.remove(parseInt(btn.dataset.idx,10));
    });
  });
}

function bindAddToCartButtons(){
  document.querySelectorAll(".js-add-to-cart:not([data-bound])").forEach(btn=>{
    btn.dataset.bound = "1";
    btn.addEventListener("click", (e)=>{
      e.preventDefault();
      const id = btn.dataset.id;
      const product = getProduct(id);
      if(!product) return;
      const pack = product.packs[0];
      Cart.add(id, pack, 1);
      showToast(`${product.name} added to cart`);
      openDrawer();
    });
  });
}

function showToast(msg){
  let toast = document.querySelector(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="material-symbols-outlined">check_circle</span><span class="js-toast-msg"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector(".js-toast-msg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> toast.classList.remove("show"), 2600);
}

/* Deterministic inline-SVG "photo" placeholder for a product — avoids
   using any external/copyrighted imagery while still giving each
   product a distinct, on-brand visual. Swap productImageSVG() for
   real photography URLs in production. */
function productImageSVG(product){
  const seedColors = ["#243033","#33454a","#2b6e6a","#1c2528","#3a4a4d"];
  const c = seedColors[Math.abs(hashStr(product.id)) % seedColors.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
    <rect width='400' height='400' fill='${c}'/>
    <circle cx='300' cy='90' r='120' fill='rgba(255,255,255,0.05)'/>
    <circle cx='60' cy='340' r='150' fill='rgba(255,255,255,0.04)'/>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
function hashStr(s){
  let h = 0;
  for(let i=0;i<s.length;i++){ h = (h<<5)-h + s.charCodeAt(i); h|=0; }
  return h;
}

function renderProductCard(p){
  const mediaContent = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;">`
    : `<span class="dp-icon"><span class="material-symbols-outlined">${p.icon}</span></span>`;
  return `
  <a href="product.html?id=${p.id}" class="prod-card fold">
    <div class="prod-media doc-photo" style="${p.img ? 'padding:0;overflow:hidden;' : ''}">
      ${mediaContent}
      <div class="prod-tags">
        ${p.tags.slice(0,2).map((t,i)=>`<span class="tag${i===0?' teal':''}">${t}</span>`).join("")}
      </div>
    </div>
    <div class="prod-body">
      <span class="prod-cat">${p.catLabel}</span>
      <h4>${p.name}</h4>
      <p class="prod-desc">${p.short}</p>
      <div class="prod-foot">
        <div class="prod-price">${formatINR(p.price)} <small>/ ${p.packs[0]}</small></div>
        <button class="add-btn js-add-to-cart" data-id="${p.id}" type="button" title="Add to cart" onclick="event.preventDefault()">
          <span class="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </div>
  </a>`;
}
