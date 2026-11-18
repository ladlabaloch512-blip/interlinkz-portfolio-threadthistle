/* Thread and Thistle, demo store logic. One shared file for every page. */
(function () {
  'use strict';

  var SIZES = ['XS', 'S', 'M', 'L', 'XL'];

  var PRODUCTS = [
    { id: 1, slug: 'rose-wrap-dress', name: 'Rose Wrap Dress', price: 58, category: 'Dresses',
      collections: ['new-in', 'dresses'], colours: ['Dusty Rose', 'Sage Green'], sizes: SIZES,
      img: 'images/p-rose-wrap-dress.jpg', img2: 'images/p-rose-wrap-dress-2.jpg',
      blurb: 'Soft viscose wrap dress with a tie waist, in dusty rose.',
      fabric: 'Soft viscose', fit: 'True to size, adjustable wrap fit', care: 'Machine wash cold' },
    { id: 2, slug: 'ivory-linen-shirt', name: 'Ivory Linen Shirt', price: 42, category: 'Tops and Knitwear',
      collections: ['tops-knitwear'], colours: ['Ivory', 'Sage Green'], sizes: SIZES,
      img: 'images/p-ivory-linen-shirt.jpg', img2: 'images/p-ivory-linen-shirt-2.jpg',
      blurb: 'Relaxed fit pure linen shirt with shell buttons.',
      fabric: 'Pure linen', fit: 'Relaxed fit', care: 'Machine wash cold' },
    { id: 3, slug: 'sage-knit-cardigan', name: 'Sage Knit Cardigan', price: 54, category: 'Tops and Knitwear',
      collections: ['tops-knitwear'], colours: ['Sage Green', 'Warm Taupe'], sizes: SIZES,
      img: 'images/p-sage-knit-cardigan.jpg', img2: 'images/p-sage-knit-cardigan-2.jpg',
      blurb: 'Chunky knit long cardigan in sage green.',
      fabric: 'Chunky knit, wool blend', fit: 'Relaxed fit', care: 'Machine wash cold, gentle' },
    { id: 4, slug: 'thistle-print-midi-skirt', name: 'Thistle Print Midi Skirt', price: 46, category: 'Bottoms',
      collections: ['bottoms'], colours: ['Thistle Print'], sizes: SIZES,
      img: 'images/p-thistle-midi-skirt.jpg', img2: '',
      blurb: 'Flowing midi skirt with a small floral print.',
      fabric: 'Flowing viscose', fit: 'True to size', care: 'Machine wash cold' },
    { id: 5, slug: 'classic-white-tee', name: 'Classic White Tee', price: 24, category: 'Tops and Knitwear',
      collections: ['tops-knitwear'], colours: ['White', 'Ivory'], sizes: SIZES,
      img: 'images/p-classic-white-tee.jpg', img2: '',
      blurb: 'Heavy cotton tee with a clean round neck.',
      fabric: 'Heavy cotton jersey', fit: 'True to size', care: 'Machine wash cold' },
    { id: 6, slug: 'camel-wool-coat', name: 'Camel Wool Coat', price: 118, category: 'Tops and Knitwear',
      collections: ['new-in'], colours: ['Camel'], sizes: SIZES,
      img: 'images/p-camel-wool-coat.jpg', img2: '',
      blurb: 'Long line winter coat, fully lined.',
      fabric: 'Wool blend, fully lined', fit: 'True to size', care: 'Dry clean' },
    { id: 7, slug: 'pleated-evening-dress', name: 'Pleated Evening Dress', price: 76, category: 'Dresses',
      collections: ['dresses'], colours: ['Deep Plum'], sizes: SIZES,
      img: 'images/p-pleated-evening-dress.jpg', img2: '',
      blurb: 'Soft pleats, midi length, in deep plum.',
      fabric: 'Soft pleated crepe', fit: 'True to size', care: 'Dry clean' },
    { id: 8, slug: 'denim-mom-jeans', name: 'Denim Mom Jeans', price: 52, category: 'Bottoms',
      collections: ['bottoms'], colours: ['Mid Wash Denim'], sizes: SIZES,
      img: 'images/p-denim-mom-jeans.jpg', img2: '',
      blurb: 'High waist straight leg jeans in a mid wash.',
      fabric: 'Cotton denim', fit: 'High waist, true to size', care: 'Machine wash cold' },
    { id: 9, slug: 'silk-feel-scarf', name: 'Silk Feel Scarf', price: 22, category: 'Accessories',
      collections: ['accessories'], colours: ['Thistle Print', 'Dusty Rose'], sizes: ['One Size'],
      img: 'images/p-silk-feel-scarf.jpg', img2: '',
      blurb: 'Large square scarf with a thistle print border.',
      fabric: 'Silk feel satin', fit: 'One size, large square', care: 'Hand wash cold' },
    { id: 10, slug: 'gold-hoop-earrings', name: 'Gold Hoop Earrings', price: 16, category: 'Accessories',
      collections: ['accessories'], colours: ['Gold Tone'], sizes: ['One Size'],
      img: 'images/p-gold-hoop-earrings.jpg', img2: '',
      blurb: 'Small everyday hoops, gold tone finish.',
      fabric: 'Gold tone finish metal', fit: 'One size, small hoop', care: 'Wipe clean, keep dry' },
    { id: 11, slug: 'striped-breton-top', name: 'Striped Breton Top', price: 34, category: 'Tops and Knitwear',
      collections: ['tops-knitwear'], colours: ['Navy and Ivory'], sizes: SIZES,
      img: 'images/p-striped-breton-top.jpg', img2: '',
      blurb: 'Long sleeve striped top in navy and ivory.',
      fabric: 'Cotton jersey', fit: 'True to size', care: 'Machine wash cold' },
    { id: 12, slug: 'floral-summer-dress', name: 'Floral Summer Dress', price: 48, category: 'Dresses',
      collections: ['dresses'], colours: ['Floral Print', 'Dusty Rose'], sizes: SIZES,
      img: 'images/p-floral-summer-dress.jpg', img2: '',
      blurb: 'Light cotton sundress with adjustable straps.',
      fabric: 'Light cotton', fit: 'Relaxed fit', care: 'Machine wash cold' },
    { id: 13, slug: 'leather-look-tote-bag', name: 'Leather Look Tote Bag', price: 44, category: 'Accessories',
      collections: ['new-in', 'accessories'], colours: ['Tan', 'Warm Taupe'], sizes: ['One Size'],
      img: 'images/p-leather-look-tote.jpg', img2: '',
      blurb: 'Roomy everyday tote in tan.',
      fabric: 'Leather look finish', fit: 'One size, roomy everyday fit', care: 'Wipe clean' },
    { id: 14, slug: 'ribbed-knit-dress', name: 'Ribbed Knit Dress', price: 62, category: 'Dresses',
      collections: ['new-in', 'dresses'], colours: ['Warm Taupe', 'Dusty Rose'], sizes: SIZES,
      img: 'images/p-ribbed-knit-dress.jpg', img2: '',
      blurb: 'Body skimming knit dress in warm taupe.',
      fabric: 'Ribbed knit, wool blend', fit: 'Fitted, body skimming', care: 'Machine wash cold, gentle' }
  ];

  var COLLECTIONS = {
    'new-in': { name: 'New In', body: 'The newest pieces on the rail. Small batches in natural fabrics and gentle colours, added for the season.' },
    'dresses': { name: 'Dresses', body: 'Dresses for days that need a little more. Wrap styles, soft knits and light cotton, each with an honest fit note.' },
    'tops-knitwear': { name: 'Tops and Knitwear', body: 'Linen shirts, easy tees and chunky knits for slow weekends and busy weekdays alike.' },
    'bottoms': { name: 'Bottoms', body: 'Skirts and jeans that mix with every top on the rail. True to size, with the fit written plainly.' },
    'accessories': { name: 'Accessories', body: 'The finishing pieces. Scarves, hoops and roomy totes that complete any outfit.' }
  };

  var COLOUR_HEX = {
    'Dusty Rose': '#B76E79', 'Sage Green': '#8A9A5B', 'Ivory': '#F1EAD9', 'White': '#FFFFFF',
    'Warm Taupe': '#A08B78', 'Camel': '#C19A6B', 'Deep Plum': '#5C374C', 'Mid Wash Denim': '#6B84A3',
    'Thistle Print': '#B08CA6', 'Gold Tone': '#C9A227', 'Navy and Ivory': '#2E3A55',
    'Floral Print': '#C97B8A', 'Tan': '#B5854D'
  };

  var FREE_OVER = 75, DELIVERY_FEE = 5, CART_KEY = 'tt_cart_v1';

  function byId(id) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i]; return null; }
  function money(n) { return '$' + n; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* ---------- Cart ---------- */
  function getCart() {
    try { var c = JSON.parse(localStorage.getItem(CART_KEY)); return Array.isArray(c) ? c : []; }
    catch (e) { return []; }
  }
  function saveCart(cart) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
    updateCartCount();
  }
  function cartQty() { return getCart().reduce(function (s, l) { return s + l.qty; }, 0); }
  function cartSubtotal() {
    return getCart().reduce(function (s, l) { var p = byId(l.id); return s + (p ? p.price * l.qty : 0); }, 0);
  }
  function updateCartCount() {
    var n = cartQty();
    document.querySelectorAll('[data-cart-count]').forEach(function (el) { el.textContent = n; });
  }
  function addToCart(id, size, colour, qty) {
    var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id && cart[i].size === size && cart[i].colour === colour) {
        cart[i].qty += qty; saveCart(cart); return;
      }
    }
    cart.push({ id: id, size: size, colour: colour, qty: qty });
    saveCart(cart);
  }

  /* ---------- Product cards ---------- */
  function cardHTML(p) {
    var chips = p.sizes.map(function (s) {
      var sel = p.sizes.length === 1 ? ' selected' : '';
      return '<button type="button" class="size-chip' + sel + '" data-size="' + esc(s) + '">' + esc(s) + '</button>';
    }).join('');
    return '<article class="card" data-card="' + p.id + '">' +
      '<a class="card-media" href="product.html?id=' + p.id + '"><img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"></a>' +
      '<div class="card-body">' +
      '<h3 class="card-name"><a href="product.html?id=' + p.id + '">' + esc(p.name) + '</a></h3>' +
      '<p class="card-price">' + money(p.price) + '</p>' +
      '<p class="card-blurb">' + esc(p.blurb) + '</p>' +
      '<div class="size-row" role="group" aria-label="Choose a size for ' + esc(p.name) + '">' + chips + '</div>' +
      '<p class="msg" data-card-msg aria-live="polite"></p>' +
      '<button type="button" class="btn btn-outline card-add" data-add="' + p.id + '">Add to Cart</button>' +
      '</div></article>';
  }
  function renderGrid(el, list) {
    el.innerHTML = list.length ? list.map(cardHTML).join('') :
      '<p class="results-count">No pieces match those filters. Try clearing one filter.</p>';
  }
  function sortList(list, mode) {
    var out = list.slice();
    if (mode === 'price-asc') out.sort(function (a, b) { return a.price - b.price; });
    else if (mode === 'price-desc') out.sort(function (a, b) { return b.price - a.price; });
    else if (mode === 'name') out.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
    return out;
  }

  /* ---------- One delegated click listener, bound once ---------- */
  if (!window.__ttBound) {
    window.__ttBound = true;
    document.addEventListener('click', function (ev) {
      var chip = ev.target.closest('.size-chip');
      if (chip) {
        var row = chip.closest('.size-row');
        row.querySelectorAll('.size-chip').forEach(function (c) { c.classList.remove('selected'); });
        chip.classList.add('selected');
        var card = chip.closest('[data-card]');
        if (card) { var m = card.querySelector('[data-card-msg]'); if (m) { m.textContent = ''; m.className = 'msg'; } }
        var pi = document.getElementById('product-info');
        if (pi && chip.closest('#product-sizes')) { var pm = document.getElementById('product-msg'); if (pm) { pm.textContent = ''; pm.className = 'msg'; } }
        return;
      }
      var addBtn = ev.target.closest('[data-add]');
      if (addBtn) {
        var id = parseInt(addBtn.getAttribute('data-add'), 10);
        var p = byId(id);
        var scope = addBtn.closest('[data-card]');
        var sizeRow = scope ? scope.querySelector('.size-row') : null;
        var sel = sizeRow ? sizeRow.querySelector('.size-chip.selected') : null;
        var msg = scope ? scope.querySelector('[data-card-msg]') : null;
        if (!sel) {
          if (msg) { msg.textContent = 'Please choose a size first.'; msg.className = 'msg error'; }
          return;
        }
        addToCart(id, sel.getAttribute('data-size'), p.colours[0], 1);
        if (msg) { msg.textContent = 'Added to your cart.'; msg.className = 'msg ok'; }
        return;
      }
    });
  }

  /* ---------- Mobile nav ---------- */
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = document.querySelector('.mobile-nav');
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ---------- Newsletter + simple forms ---------- */
  document.querySelectorAll('.newsletter-form').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var msg = form.parentElement.querySelector('[data-news-msg]');
      if (!input.value || input.value.indexOf('@') < 1) {
        if (msg) { msg.textContent = 'Please enter a valid email address.'; msg.className = 'msg error'; }
        return;
      }
      form.reset();
      if (msg) { msg.textContent = 'Thank you, you are on the list. First look, every season.'; msg.className = 'msg ok'; }
    });
  });

  /* ---------- Page: Home ---------- */
  var homeNew = document.getElementById('home-newin');
  if (homeNew) renderGrid(homeNew, PRODUCTS.filter(function (p) { return p.collections.indexOf('new-in') > -1; }));
  var homeBest = document.getElementById('home-best');
  if (homeBest) renderGrid(homeBest, [byId(1), byId(2), byId(3), byId(4)]);

  /* ---------- Page: Shop ---------- */
  var shopGrid = document.getElementById('shop-grid');
  if (shopGrid) {
    var state = { cat: 'All', size: 'All', colour: 'All', sort: 'featured' };
    var colourSel = document.getElementById('filter-colour');
    var allColours = [];
    PRODUCTS.forEach(function (p) { p.colours.forEach(function (c) { if (allColours.indexOf(c) < 0) allColours.push(c); }); });
    allColours.sort().forEach(function (c) {
      var o = document.createElement('option'); o.value = c; o.textContent = c; colourSel.appendChild(o);
    });
    function applyShop() {
      var list = PRODUCTS.filter(function (p) {
        if (state.cat !== 'All' && p.category !== state.cat) return false;
        if (state.size !== 'All' && p.sizes.indexOf(state.size) < 0) return false;
        if (state.colour !== 'All' && p.colours.indexOf(state.colour) < 0) return false;
        return true;
      });
      list = sortList(list, state.sort);
      renderGrid(shopGrid, list);
      document.getElementById('shop-count').textContent =
        'Showing ' + list.length + ' of ' + PRODUCTS.length + ' pieces';
    }
    document.querySelectorAll('[data-cat-pill]').forEach(function (pill) {
      pill.addEventListener('click', function () {
        document.querySelectorAll('[data-cat-pill]').forEach(function (x) { x.classList.remove('selected'); });
        pill.classList.add('selected');
        state.cat = pill.getAttribute('data-cat-pill');
        applyShop();
      });
    });
    document.getElementById('filter-size').addEventListener('change', function (e) { state.size = e.target.value; applyShop(); });
    colourSel.addEventListener('change', function (e) { state.colour = e.target.value; applyShop(); });
    document.getElementById('sort-select').addEventListener('change', function (e) { state.sort = e.target.value; applyShop(); });
    applyShop();
  }

  /* ---------- Page: Collection ---------- */
  var colGrid = document.getElementById('collection-grid');
  if (colGrid) {
    var slug = new URLSearchParams(location.search).get('c') || 'new-in';
    var col = COLLECTIONS[slug] || COLLECTIONS['new-in'];
    document.getElementById('collection-name').textContent = col.name;
    document.getElementById('collection-body').textContent = col.body;
    document.title = col.name + ' | Thread and Thistle';
    var colList = PRODUCTS.filter(function (p) { return p.collections.indexOf(slug) > -1; });
    function applyCol(sortMode) {
      var list = sortList(colList, sortMode || 'featured');
      renderGrid(colGrid, list);
      document.getElementById('collection-count').textContent =
        'Showing ' + list.length + ' of ' + list.length + ' pieces';
    }
    document.getElementById('collection-sort').addEventListener('change', function (e) { applyCol(e.target.value); });
    applyCol('featured');
  }

  /* ---------- Page: Product ---------- */
  var productRoot = document.getElementById('product-root');
  if (productRoot) {
    var pid = parseInt(new URLSearchParams(location.search).get('id'), 10);
    var prod = byId(pid);
    if (!prod) {
      productRoot.innerHTML = '<div class="wrap section"><h1>Piece not found</h1><p>That product link does not match a piece in the store. <a href="shop.html">Browse all pieces</a>.</p></div>';
    } else {
      document.title = prod.name + ' | Thread and Thistle';
      document.getElementById('crumb-name').textContent = prod.name;
      var mainImg = document.getElementById('gallery-main-img');
      mainImg.src = prod.img; mainImg.alt = prod.name;
      var thumbs = document.getElementById('gallery-thumbs');
      var gallery = [prod.img]; if (prod.img2) gallery.push(prod.img2);
      if (gallery.length > 1) {
        thumbs.innerHTML = gallery.map(function (src, i) {
          return '<button type="button" class="' + (i === 0 ? 'selected' : '') + '" data-thumb="' + src + '"><img src="' + src + '" alt="' + esc(prod.name) + ' view ' + (i + 1) + '"></button>';
        }).join('');
        thumbs.addEventListener('click', function (ev) {
          var b = ev.target.closest('[data-thumb]');
          if (!b) return;
          mainImg.src = b.getAttribute('data-thumb');
          thumbs.querySelectorAll('button').forEach(function (x) { x.classList.remove('selected'); });
          b.classList.add('selected');
        });
      }
      document.getElementById('product-name').textContent = prod.name;
      document.getElementById('product-price').textContent = money(prod.price);
      document.getElementById('product-blurb').textContent = prod.blurb;
      document.getElementById('product-fabric').textContent = prod.fabric;
      document.getElementById('product-fit').textContent = prod.fit;
      document.getElementById('product-care').textContent = prod.care;

      var colourRow = document.getElementById('product-colours');
      colourRow.innerHTML = prod.colours.map(function (c, i) {
        return '<button type="button" class="colour-btn' + (i === 0 ? ' selected' : '') + '" data-colour="' + esc(c) + '">' +
          '<span class="colour-dot" style="background:' + (COLOUR_HEX[c] || '#ccc') + '"></span>' + esc(c) + '</button>';
      }).join('');
      var chosenColour = prod.colours[0];
      colourRow.addEventListener('click', function (ev) {
        var b = ev.target.closest('[data-colour]');
        if (!b) return;
        colourRow.querySelectorAll('.colour-btn').forEach(function (x) { x.classList.remove('selected'); });
        b.classList.add('selected');
        chosenColour = b.getAttribute('data-colour');
      });

      var sizeRow = document.getElementById('product-sizes');
      sizeRow.innerHTML = prod.sizes.map(function (s) {
        var sel = prod.sizes.length === 1 ? ' selected' : '';
        return '<button type="button" class="size-chip' + sel + '" data-size="' + esc(s) + '">' + esc(s) + '</button>';
      }).join('');

      var qty = 1;
      var qtyOut = document.getElementById('qty-out');
      document.getElementById('qty-minus').addEventListener('click', function () { if (qty > 1) { qty--; qtyOut.textContent = qty; } });
      document.getElementById('qty-plus').addEventListener('click', function () { if (qty < 9) { qty++; qtyOut.textContent = qty; } });

      document.getElementById('product-add').addEventListener('click', function () {
        var msg = document.getElementById('product-msg');
        var sel = sizeRow.querySelector('.size-chip.selected');
        if (!sel) {
          msg.textContent = 'Please choose a size before adding this piece to your cart.';
          msg.className = 'msg error';
          sizeRow.scrollIntoView({ block: 'center', behavior: 'smooth' });
          return;
        }
        addToCart(prod.id, sel.getAttribute('data-size'), chosenColour, qty);
        msg.textContent = 'Added to your cart: ' + prod.name + ', size ' + sel.getAttribute('data-size') + ', ' + chosenColour + '.';
        msg.className = 'msg ok';
      });

      var rel = PRODUCTS.filter(function (p) { return p.category === prod.category && p.id !== prod.id; }).slice(0, 4);
      renderGrid(document.getElementById('related-grid'), rel);
    }
  }

  /* ---------- Page: Cart ---------- */
  var cartRoot = document.getElementById('cart-root');
  if (cartRoot) {
    var linesEl = document.getElementById('cart-lines');
    function renderCart() {
      var cart = getCart();
      var emptyEl = document.getElementById('cart-empty');
      var mainEl = document.getElementById('cart-main');
      if (!cart.length) { emptyEl.style.display = 'block'; mainEl.style.display = 'none'; return; }
      emptyEl.style.display = 'none'; mainEl.style.display = 'grid';
      linesEl.innerHTML = cart.map(function (l, i) {
        var p = byId(l.id);
        return '<div class="cart-line">' +
          '<a href="product.html?id=' + p.id + '"><img src="' + p.img + '" alt="' + esc(p.name) + '"></a>' +
          '<div><h3><a href="product.html?id=' + p.id + '" style="color:inherit;text-decoration:none">' + esc(p.name) + '</a></h3>' +
          '<p class="meta">Size: ' + esc(l.size) + ' &nbsp;|&nbsp; Colour: ' + esc(l.colour) + '</p>' +
          '<p class="meta">' + money(p.price) + ' each</p>' +
          '<div class="qty-ctrl" style="display:inline-flex;margin-top:8px">' +
          '<button type="button" data-dec="' + i + '" aria-label="Decrease quantity">-</button>' +
          '<output>' + l.qty + '</output>' +
          '<button type="button" data-inc="' + i + '" aria-label="Increase quantity">+</button></div>' +
          '<br><button type="button" class="remove-btn" data-remove="' + i + '">Remove</button></div>' +
          '<div class="line-total">' + money(p.price * l.qty) + '</div></div>';
      }).join('');
      var sub = cartSubtotal();
      var free = sub > FREE_OVER;
      document.getElementById('cart-subtotal').textContent = money(sub);
      document.getElementById('cart-delivery').textContent = free ? 'Free' : money(DELIVERY_FEE);
      document.getElementById('cart-total').textContent = money(sub + (free ? 0 : DELIVERY_FEE));
      document.getElementById('free-note').innerHTML = free
        ? 'Good news. Your order passes ' + money(FREE_OVER) + ', so standard delivery is free.'
        : 'Standard delivery is ' + money(DELIVERY_FEE) + '. Add ' + money(FREE_OVER + 1 - sub) + ' more to pass ' + money(FREE_OVER) + ' and get free delivery.';
    }
    linesEl.addEventListener('click', function (ev) {
      var cart = getCart();
      var inc = ev.target.closest('[data-inc]'), dec = ev.target.closest('[data-dec]'), rem = ev.target.closest('[data-remove]');
      if (inc) { cart[+inc.getAttribute('data-inc')].qty++; }
      else if (dec) { var i = +dec.getAttribute('data-dec'); cart[i].qty--; if (cart[i].qty < 1) cart.splice(i, 1); }
      else if (rem) { cart.splice(+rem.getAttribute('data-remove'), 1); }
      else return;
      saveCart(cart); renderCart();
    });
    renderCart();
  }

  /* ---------- Page: Checkout ---------- */
  var checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    var sub = cartSubtotal();
    var free = sub > FREE_OVER;
    var fee = free ? 0 : DELIVERY_FEE;
    var sumEl = document.getElementById('summary-lines');
    sumEl.innerHTML = getCart().map(function (l) {
      var p = byId(l.id);
      return '<div class="row"><span>' + esc(p.name) + ' (' + esc(l.size) + ', ' + esc(l.colour) + ') x ' + l.qty + '</span><span>' + money(p.price * l.qty) + '</span></div>';
    }).join('');
    document.getElementById('co-subtotal').textContent = money(sub);
    document.getElementById('co-delivery').textContent = free ? 'Free' : money(fee);
    document.getElementById('co-total').textContent = money(sub + fee);
    document.getElementById('delivery-cost-note').textContent = free
      ? 'Free, because your order passes ' + money(FREE_OVER) + '.'
      : money(DELIVERY_FEE) + '. Free on orders over ' + money(FREE_OVER) + '.';
    if (!getCart().length) {
      document.getElementById('checkout-empty').style.display = 'block';
      document.getElementById('checkout-main').style.display = 'none';
    }
    checkoutForm.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = true;
      checkoutForm.querySelectorAll('[required]').forEach(function (input) {
        var field = input.closest('.field');
        var bad = !input.value.trim() || (input.type === 'email' && input.value.indexOf('@') < 1);
        if (field) field.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      var formMsg = document.getElementById('checkout-msg');
      if (!ok) {
        formMsg.textContent = 'Please fill in the marked fields so we can place your demo order.';
        formMsg.className = 'msg error';
        return;
      }
      var orderNo = 'TT-' + Math.floor(100000 + Math.random() * 900000);
      document.getElementById('order-number').textContent = orderNo;
      document.getElementById('checkout-main').style.display = 'none';
      document.getElementById('checkout-success').style.display = 'block';
      saveCart([]);
      window.scrollTo(0, 0);
    });
  }

  /* ---------- Page: Contact form ---------- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = true;
      contactForm.querySelectorAll('[required]').forEach(function (input) {
        var field = input.closest('.field');
        var bad = !input.value.trim() || (input.type === 'email' && input.value.indexOf('@') < 1);
        if (field) field.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      var msg = document.getElementById('contact-msg');
      if (!ok) { msg.textContent = 'Please fill in the marked fields.'; msg.className = 'msg error'; return; }
      contactForm.reset();
      msg.textContent = 'Thank you, your message has been received. We reply within 1 to 2 working days.';
      msg.className = 'msg ok';
    });
  }

  updateCartCount();
})();
