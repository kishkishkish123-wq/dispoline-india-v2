/* ============================================================
   DISPOLINE INDIA — PRODUCT DATA + CART ENGINE
   Shared across every page via <script src="assets/js/data.js">
   ============================================================ */

const DISPOLINE_PRODUCTS = [
  {
    id: "turp-kit",
    img: "assets/img/turp-procedure-kit.jpg",
    name: "TURP Procedure Kit",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Urology", "Custom Pack", "EO Sterile"],
    price: 1450,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "medical_services",
    short: "Customised surgery-specific pre-sterile kit for Trans-Urethral Resection of the Prostate, assembled to your OT protocol.",
    desc: "The TURP Procedure Kit is engineered specifically for Trans-Urethral Resection of the Prostate cases, combining drapes, gowns, instrument covers and disposables into a single validated pack. Every configuration is built around your surgical team's exact protocol, reducing OT set-up time and eliminating tray-assembly errors.",
    specs: [
      ["Fabric", "SMS non-woven, fluid-repellent"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per hospital protocol"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "urology-pack",
    name: "Urology Surgical Kit & Drape",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Urology", "Custom Pack"],
    price: 1290,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "medical_services",
    short: "General urology procedure pack with fenestrated drape, gown and basin set for routine urological interventions.",
    desc: "A general-purpose urology pack designed for routine urological procedures, combining a fenestrated drape, reinforced gown, basin set and instrument covers. Each pack is assembled in a controlled environment and sealed with full batch traceability.",
    specs: [
      ["Fabric", "SMMS non-woven, reinforced zones"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per hospital protocol"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "cabg-kit",
    img: "assets/img/cabg-drape-kit.jpg",
    name: "CABG Drape Kit",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Cardiology", "Custom Pack", "EO Sterile"],
    price: 2650,
    packs: ["1 Kit", "5 Kits"],
    icon: "cardiology",
    short: "Customised surgery-specific pre-sterile procedure kit for Coronary Artery Bypass Grafting, assembled with full traceability.",
    desc: "Customised surgery-specific pre-sterile procedure kit for Coronary Artery Bypass Grafting. Assembled in a controlled environment with all traceability protocols applied, combining reinforced cardiovascular drapes, gowns and instrument covers built for extended-duration cardiac procedures.",
    specs: [
      ["Fabric", "SMMS non-woven, reinforced viral-barrier zones"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per cardiac surgery protocol"],
      ["Pack sizes", "1 / 5 kits per carton"]
    ]
  },
  {
    id: "ortho-kit",
    img: "assets/img/ortho-surgery-pack.jpg",
    name: "Orthopaedic Procedure Kit",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Orthopaedic", "Custom Pack"],
    price: 1780,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "orthopedics",
    short: "Custom orthopaedic kit with impervious drapes and reinforced gowns for joint replacement and trauma procedures.",
    desc: "Built for orthopaedic theatres, this kit includes impervious extremity drapes, reinforced gowns and instrument tray covers rated for high-fluid, high-friction procedures such as joint replacements and trauma fixation.",
    specs: [
      ["Fabric", "SMMS non-woven, reinforced impervious zones"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per procedure type"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "angiogram-kit",
    img: "assets/img/angiogram-angioplasty-kit.jpg",
    name: "Angiogram / Angioplasty Kit",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Cardiology", "Cath Lab", "EO Sterile"],
    price: 1980,
    packs: ["1 Kit", "5 Kits"],
    icon: "monitor_heart",
    short: "Pre-sterile cath-lab procedure kit for angiogram and angioplasty procedures with reinforced cardiovascular drapes.",
    desc: "Purpose-built for catheterisation laboratory use, this kit combines reinforced cardiovascular drapes, sterile field covers, gown and accessories for angiogram and angioplasty procedures. Assembled under controlled-environment conditions with full batch traceability for cath-lab infection control compliance.",
    specs: [
      ["Fabric", "SMMS non-woven, reinforced viral-barrier zones"],
      ["Application", "Catheterisation lab — angiogram, angioplasty, stenting"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per cath-lab protocol"],
      ["Pack sizes", "1 / 5 kits per carton"]
    ]
  },
  {
    id: "ortho-surgical-hood",
    img: "assets/img/ortho-surgical-hood.jpg",
    name: "Orthopaedic Surgical Hood",
    category: "gowns",
    catLabel: "Surgeon Gowns",
    tags: ["Orthopaedic", "Body Exhaust", "HEPA"],
    price: 620,
    packs: ["1 Unit", "Pack of 5", "Pack of 10"],
    icon: "checkroom",
    short: "Full-head body-exhaust surgical hood for orthopaedic joint replacement procedures requiring HEPA-filtered air supply.",
    desc: "Designed for joint replacement theatres operating with laminar-flow HEPA ventilation, this body-exhaust surgical hood provides a fully enclosed sterile head-covering that connects to the theatre's filtered air supply. Reduces particulate contamination risk in high-stakes arthroplasty environments.",
    specs: [
      ["Fabric", "SMMS non-woven, anti-static, fluid-repellent"],
      ["Application", "Orthopaedic joint replacement, body-exhaust theatre systems"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Pack sizes", "1 / 5 / 10 units per carton"]
    ]
  },
  {
    id: "general-surgery-pack",
    name: "General Surgery Pack",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["General Surgery", "Custom Pack"],
    price: 1120,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "medical_services",
    short: "Versatile general surgery pack for laparotomy and abdominal procedures with fluid-managing drapes.",
    desc: "A versatile procedure pack for general and abdominal surgery, including a fenestrated laparotomy drape, gown, and instrument covers. Assembled to standard hospital protocol with the option for full customisation.",
    specs: [
      ["Fabric", "SMS non-woven, fluid-repellent"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per hospital protocol"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "gynae-kit",
    name: "Gynaecology Kit",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Gynaecology", "Custom Pack"],
    price: 1340,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "medical_services",
    short: "Pre-sterile procedure kit for gynaecological surgery with lithotomy drape and fluid collection pouch.",
    desc: "Designed for gynaecological procedures, this kit includes a lithotomy drape with integrated fluid collection pouch, gown and instrument covers, assembled under controlled-environment conditions.",
    specs: [
      ["Fabric", "SMS non-woven, fluid-repellent"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per hospital protocol"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "major-surgery-pack",
    img: "assets/img/major-surgery-pack.jpg",
    name: "Major Surgery Pack",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["General Surgery", "Custom Pack", "EO Sterile"],
    price: 1650,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "medical_services",
    short: "Comprehensive pre-sterile major surgery pack with full-field drapes, gowns and instrument covers for extended open procedures.",
    desc: "A comprehensive procedure pack for major open surgery, combining full-field patient drapes, reinforced surgeon gowns, instrument tray covers and sterile accessories — all assembled in a controlled environment and sealed with full batch traceability. Configurable to your hospital's protocol for laparotomy, bowel resection and other extended general surgery procedures.",
    specs: [
      ["Fabric", "SMS/SMMS non-woven, reinforced critical zones"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per hospital protocol"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "laparoscopy-kit",
    img: "assets/img/laparoscopy-surgical-kit.jpg",
    name: "Laparoscopy Surgical Kit",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Laparoscopy", "Minimal Access", "EO Sterile"],
    price: 1380,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "medical_services",
    short: "Pre-sterile procedure kit for laparoscopic and minimal-access surgery with port-site drape and fluid-managing accessories.",
    desc: "Engineered for laparoscopic and minimal-access surgical procedures, this kit includes a port-site fenestrated drape, reinforced gown, instrument covers and sterile field accessories — assembled in a controlled environment for immediate theatre-ready use across general, bariatric, gynaecological and urological laparoscopy.",
    specs: [
      ["Fabric", "SMS non-woven, fluid-repellent"],
      ["Application", "Laparoscopic / minimal-access surgery"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per surgical team protocol"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "cataract-pack",
    img: "assets/img/cataract-surgery-pack.jpg",
    name: "Cataract Surgery Pack",
    category: "kits",
    catLabel: "Procedure Kits",
    tags: ["Ophthalmology", "Custom Pack", "EO Sterile"],
    price: 980,
    packs: ["1 Kit", "5 Kits", "10 Kits"],
    icon: "visibility",
    short: "Custom pre-sterile procedure kit for cataract and anterior segment surgery, with fenestrated ophthalmic drape and aperture cover.",
    desc: "A surgery-specific pre-sterile kit for cataract and anterior segment procedures. Includes a fenestrated ophthalmic drape with self-adhesive aperture, instrument covers and sterile field components — all assembled and sealed under validated controlled-environment conditions for immediate theatre-ready use.",
    specs: [
      ["Fabric", "SMS non-woven, fluid-repellent"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Packaging", "Peel-pouch, validated to EN ISO 11607-2"],
      ["Shelf life", "36 months from date of manufacture"],
      ["Customisation", "Pack contents configurable per hospital protocol"],
      ["Pack sizes", "1 / 5 / 10 kits per carton"]
    ]
  },
  {
    id: "sms-gown",
    img: "assets/img/aras-surgeon-gown.jpg",
    name: "Surgical Gown ARAS",
    category: "gowns",
    catLabel: "Surgeon Gowns",
    tags: ["AAMI Level 3", "Reinforced"],
    price: 340,
    packs: ["Pack of 10", "Pack of 25", "Pack of 50"],
    icon: "checkroom",
    short: "Reinforced SMS surgeon gown with sealed seams for standard-duration surgical procedures.",
    desc: "A reinforced SMS (Spunbond-Meltblown-Spunbond) surgeon gown offering AAMI Level 3 fluid barrier protection with sealed seams at critical zones. Designed for breathability across standard-duration procedures while maintaining consistent barrier performance.",
    specs: [
      ["Fabric", "SMS non-woven, reinforced chest & sleeve"],
      ["Barrier rating", "AAMI Level 3"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Closure", "Back-tie, knitted cuffs"],
      ["Sizes", "M / L / XL / XXL"],
      ["Pack sizes", "10 / 25 / 50 gowns per carton"]
    ]
  },
  {
    id: "smms-gown",
    img: "assets/img/hybreathe-surgeon-gown.jpg",
    name: "Hybreathe Surgeon Gown (BVB Sleeve)",
    category: "gowns",
    catLabel: "Surgeon Gowns",
    tags: ["AAMI Level 4", "Viral Barrier"],
    price: 480,
    packs: ["Pack of 10", "Pack of 25", "Pack of 50"],
    icon: "checkroom",
    short: "High-barrier SMMS gown rated AAMI Level 4 for long-duration and high-fluid procedures.",
    desc: "Our premium SMMS (Spunbond-Meltblown-Meltblown-Spunbond) gown provides AAMI Level 4 viral barrier protection, purpose-built for long-duration, high-fluid-exposure procedures such as cardiac and orthopaedic surgery, while remaining breathable for surgeon comfort.",
    specs: [
      ["Fabric", "SMMS non-woven, viral-barrier laminate"],
      ["Barrier rating", "AAMI Level 4"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Closure", "Back-tie, knitted cuffs, thumb loops"],
      ["Sizes", "M / L / XL / XXL"],
      ["Pack sizes", "10 / 25 / 50 gowns per carton"]
    ]
  },
  {
    id: "breathable-gown",
    img: "assets/img/isolation-gown.jpg",
    name: "Breathable Comfort Gown",
    category: "gowns",
    catLabel: "Surgeon Gowns",
    tags: ["AAMI Level 2", "Breathable"],
    price: 260,
    packs: ["Pack of 10", "Pack of 25", "Pack of 50"],
    icon: "checkroom",
    short: "Lightweight, breathable gown for minimal-fluid-exposure procedures and extended theatre shifts.",
    desc: "Engineered for surgeon comfort during extended theatre shifts, this lightweight gown balances breathability with AAMI Level 2 protection, suited to minimal-fluid-exposure procedures.",
    specs: [
      ["Fabric", "SMS non-woven, lightweight breathable zones"],
      ["Barrier rating", "AAMI Level 2"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Closure", "Back-tie, knitted cuffs"],
      ["Sizes", "M / L / XL / XXL"],
      ["Pack sizes", "10 / 25 / 50 gowns per carton"]
    ]
  },
  {
    id: "3ply-mask",
    img: "assets/img/surgical-face-mask.jpg",
    name: "3-Ply Surgical Face Mask",
    category: "masks",
    catLabel: "Masks & Caps",
    tags: ["Type IIR", "Fluid Resistant"],
    price: 45,
    packs: ["Box of 50", "Carton of 500", "Carton of 2000"],
    icon: "masks",
    short: "Type IIR fluid-resistant 3-ply surgical mask with adjustable nose clip and soft ear loops.",
    desc: "A Type IIR fluid-resistant surgical face mask with three-layer filtration, an adjustable nose clip and soft, skin-friendly ear loops. Suitable for general OT use and clinical settings requiring splash protection.",
    specs: [
      ["Layers", "3-ply non-woven with melt-blown filter core"],
      ["Rating", "Type IIR, fluid resistant"],
      ["Sterilization", "Ethylene Oxide (EO) — sterile variant available"],
      ["Fit", "Adjustable nose clip, pleated design"],
      ["Pack sizes", "Box of 50 / carton of 500 / carton of 2000"]
    ]
  },
  {
    id: "surgeon-cap",
    name: "Surgeon Bouffant Cap",
    category: "masks",
    catLabel: "Masks & Caps",
    tags: ["Latex-Free", "Elasticated"],
    price: 18,
    packs: ["Box of 100", "Carton of 1000"],
    icon: "face",
    short: "Latex-free bouffant surgical cap with elasticated edge for full hair coverage.",
    desc: "A lightweight, latex-free bouffant cap providing full hair coverage with a soft elasticated edge for comfortable, secure fit through long theatre sessions.",
    specs: [
      ["Fabric", "Non-woven polypropylene"],
      ["Fit", "Elasticated edge, one-size bouffant"],
      ["Latex", "Latex-free"],
      ["Pack sizes", "Box of 100 / carton of 1000"]
    ]
  },
  {
    id: "shoe-cover",
    img: "assets/img/shoe-cover-nonwoven.jpg",
    name: "Shoe Cover Non-Woven",
    category: "masks",
    catLabel: "Masks & Caps",
    tags: ["Anti-Skid", "Fluid Resistant"],
    price: 22,
    packs: ["Box of 100", "Carton of 1000"],
    icon: "footprint",
    short: "Fluid-resistant, anti-skid shoe cover for OT and cleanroom traffic control.",
    desc: "A fluid-resistant shoe cover with an anti-skid sole texture, designed for OT corridors and cleanroom traffic control zones where slip resistance is critical.",
    specs: [
      ["Fabric", "Non-woven polypropylene, PE sole"],
      ["Fit", "Elasticated ankle opening"],
      ["Sole", "Anti-skid textured coating"],
      ["Pack sizes", "Box of 100 / carton of 1000"]
    ]
  },
  {
    id: "boot-cover",
    img: "assets/img/boot-cover-knee-length.jpg",
    name: "Surgical Boot Cover Knee-Length",
    category: "masks",
    catLabel: "Masks & Caps",
    tags: ["Anti-Skid", "Knee-Length", "Fluid Resistant"],
    price: 38,
    packs: ["Box of 50", "Carton of 500"],
    icon: "footprint",
    short: "Knee-length fluid-resistant surgical boot cover for OT and cleanroom environments requiring full lower-leg protection.",
    desc: "A knee-length boot cover providing full lower-leg and foot protection from fluid splash, dust and contamination in OT corridors and cleanroom environments. Fitted with elasticated top and ankle for secure, comfortable wear.",
    specs: [
      ["Fabric", "Non-woven polypropylene, fluid-resistant coating"],
      ["Height", "Knee-length (approx. 40 cm)"],
      ["Fit", "Elasticated top and ankle openings"],
      ["Sole", "Anti-skid textured base"],
      ["Pack sizes", "Box of 50 / carton of 500"]
    ]
  },
  {
    id: "fenestrated-drape",
    name: "Fenestrated General Drape",
    category: "drapes",
    catLabel: "Patient Drapes",
    tags: ["Fluid Managing", "Adhesive Edge"],
    price: 210,
    packs: ["Pack of 10", "Pack of 25"],
    icon: "layers",
    short: "Fluid-managing fenestrated drape with adhesive aperture edge for general surgical procedures.",
    desc: "A fenestrated drape with an adhesive-bordered aperture and integrated fluid-collection pouch, suited to a wide range of general surgical procedures across specialties.",
    specs: [
      ["Fabric", "SMS non-woven, reinforced fenestration"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Feature", "Adhesive aperture edge, fluid pouch"],
      ["Pack sizes", "10 / 25 drapes per carton"]
    ]
  },
  {
    id: "ot-table-cover",
    name: "OT Table Cover",
    category: "drapes",
    catLabel: "Patient Drapes",
    tags: ["Impervious", "Fitted"],
    price: 165,
    packs: ["Pack of 10", "Pack of 25"],
    icon: "layers",
    short: "Impervious fitted cover for OT tables with reinforced fluid-repellent underside.",
    desc: "An impervious, fitted OT table cover with a fluid-repellent underside layer, designed to maintain a sterile field boundary throughout extended procedures.",
    specs: [
      ["Fabric", "PE-laminated non-woven"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Fit", "Elasticated fitted corners"],
      ["Pack sizes", "10 / 25 covers per carton"]
    ]
  },
  {
    id: "instrument-tray-cover",
    name: "Instrument Tray Cover",
    category: "drapes",
    catLabel: "Instrument Covers",
    tags: ["Sterile Barrier", "EN ISO 11607-2"],
    price: 95,
    packs: ["Pack of 25", "Pack of 50"],
    icon: "layers",
    short: "Sterile barrier instrument tray cover validated to EN ISO 11607-2 packaging standards.",
    desc: "A sterile barrier system cover for instrument trays, validated to EN ISO 11607-2 for packaging and sealing integrity, maintaining sterility until point of use.",
    specs: [
      ["Fabric", "Sterilization wrap-grade non-woven"],
      ["Packaging validation", "EN ISO 11607-2"],
      ["Sterilization", "Ethylene Oxide (EO), validated to ISO 11135"],
      ["Pack sizes", "25 / 50 covers per carton"]
    ]
  },
  {
    id: "sterilization-wrap",
    name: "Sterilization Wrap Sheet",
    category: "drapes",
    catLabel: "Sterile Barrier Systems",
    tags: ["Sterile Barrier", "Batch Tested"],
    price: 60,
    packs: ["Pack of 50", "Pack of 100"],
    icon: "layers",
    short: "Batch-tested sterilization wrap sheet for CSSD instrument packaging.",
    desc: "A CSSD-grade sterilization wrap sheet, batch-tested for bio-burden, sterility and ETO residuals, providing a validated sterile barrier for instrument packaging.",
    specs: [
      ["Fabric", "SMS non-woven, medical grade"],
      ["Testing", "Batch-wise bio-burden, sterility, ETO residual"],
      ["Packaging validation", "EN ISO 11607-2"],
      ["Pack sizes", "50 / 100 sheets per carton"]
    ]
  },
  {
    id: "laminate-apron",
    img: "assets/img/disposable-gown.jpg",
    name: "Disposable Isolation Gown",
    category: "drapes",
    catLabel: "Patient Care",
    tags: ["Impervious", "Disposable"],
    price: 35,
    packs: ["Pack of 25", "Pack of 100"],
    icon: "layers",
    short: "Impervious disposable laminate apron for staff and patient-care protection.",
    desc: "A fully impervious, disposable laminate apron providing splash and fluid protection for clinical and patient-care staff during routine procedures.",
    specs: [
      ["Fabric", "PE laminate"],
      ["Fit", "Tie-back, one size"],
      ["Pack sizes", "25 / 100 aprons per carton"]
    ]
  }
];

/* ---------------- Cart engine (localStorage, shared across pages) ---------------- */
const CART_KEY = "dispoline_cart_v1";

const Cart = {
  read(){
    try{
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  },
  write(items){
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("cart:updated", { detail: items }));
  },
  add(productId, pack, qty){
    const items = this.read();
    const existing = items.find(i => i.id === productId && i.pack === pack);
    if(existing){
      existing.qty += qty;
    }else{
      items.push({ id: productId, pack: pack, qty: qty });
    }
    this.write(items);
  },
  updateQty(index, qty){
    const items = this.read();
    if(!items[index]) return;
    if(qty <= 0){
      items.splice(index,1);
    }else{
      items[index].qty = qty;
    }
    this.write(items);
  },
  remove(index){
    const items = this.read();
    items.splice(index,1);
    this.write(items);
  },
  clear(){
    this.write([]);
  },
  count(){
    return this.read().reduce((sum,i) => sum + i.qty, 0);
  },
  lines(){
    return this.read().map(item => {
      const p = DISPOLINE_PRODUCTS.find(pr => pr.id === item.id);
      return { ...item, product: p, lineTotal: p ? p.price * item.qty : 0 };
    }).filter(l => l.product);
  },
  subtotal(){
    return this.lines().reduce((sum,l) => sum + l.lineTotal, 0);
  }
};

function getProduct(id){
  return DISPOLINE_PRODUCTS.find(p => p.id === id);
}
function productsByCategory(cat){
  if(!cat || cat === "all") return DISPOLINE_PRODUCTS;
  return DISPOLINE_PRODUCTS.filter(p => p.category === cat);
}
function formatINR(n){
  return "₹" + n.toLocaleString("en-IN");
}
