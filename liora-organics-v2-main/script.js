const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const i18n = {
  vi: {
    'promo.bar':'Ưu đãi mở bán: chat Zalo để nhận tư vấn nhanh & báo giá đại lý',
    'nav.products':'Sản phẩm','nav.trust':'Cam kết','nav.factory':'Nhà máy','nav.reviews':'Đánh giá','nav.blog':'Blog','nav.contact':'Liên hệ',
    'hero.eyebrow':'🌿 Thương hiệu sạch cho căn bếp Việt','hero.title':'Nước rửa chén sinh học <span>dịu da tay</span>, an toàn cho gia đình','hero.lead':'Liora Organics mang đến giải pháp làm sạch dầu mỡ hiệu quả, công thức sinh học lành tính, không hóa chất mạnh, phù hợp gia đình có trẻ nhỏ.','hero.floatTitle':'Sạch dịu mỗi ngày','hero.floatDesc':'Hương chanh nhẹ • dễ xả • thân thiện da tay',
    'cta.consult':'Nhận tư vấn','cta.viewProducts':'Xem sản phẩm','cta.askPrice':'Hỏi giá ngay →','proof.concentrated':'Công thức đậm đặc','proof.harsh':'Hóa chất mạnh','proof.factory':'Sản xuất tại Việt Nam',
    'trust.eyebrow':'Cam kết Liora','trust.title':'Sạch nhưng vẫn an tâm cho cả nhà','trust.desc':'Tập trung vào trải nghiệm rửa chén hằng ngày: sạch dầu mỡ, dịu nhẹ da tay và cảm giác an toàn khi dùng trong căn bếp gia đình.',
    'trust.items.0.t':'Dịu nhẹ da tay','trust.items.0.d':'Công thức lành tính, giảm cảm giác khô ráp khi sử dụng thường xuyên.','trust.items.1.t':'Nguồn gốc sinh học','trust.items.1.d':'Ưu tiên thành phần thân thiện, phù hợp lối sống xanh và căn bếp hiện đại.','trust.items.2.t':'An toàn gia đình','trust.items.2.d':'Phù hợp gia đình có trẻ nhỏ khi dùng đúng hướng dẫn và xả sạch với nước.','trust.items.3.t':'Uy tín nhà máy','trust.items.3.d':'Hỗ trợ mua lẻ, bán sỉ, đại lý và định hướng OEM cho đối tác.',
    'products.eyebrow':'Dòng sản phẩm','products.title':'Limo Clean cho nhiều nhu cầu sử dụng','products.desc':'Ba dung tích phù hợp dùng thử, dùng gia đình và dùng cho quán ăn/nhà hàng.','products.small.tag':'Dùng thử','products.small.desc':'Gọn nhẹ, phù hợp dùng thử, du lịch hoặc tặng mẫu.','products.mid.tag':'Phổ biến','products.mid.desc':'Dung tích gia đình, tiết kiệm và dễ sử dụng hằng ngày.','products.big.tag':'Tiết kiệm','products.big.desc':'Dung tích lớn, phù hợp gia đình dùng nhiều, quán ăn và nhà hàng.',
    'factory.eyebrow':'Từ nhà máy đến căn bếp','factory.title':'Xây dựng niềm tin bằng chất lượng ổn định','factory.desc':'Liora Organics theo đuổi sản phẩm làm sạch an toàn, dễ dùng, phù hợp gia đình Việt và có khả năng đồng hành cùng đại lý, nhà phân phối.','factory.items.0':'Nguyên liệu chọn lọc, mùi hương dễ chịu','factory.items.1':'Công thức đậm đặc, bọt mịn, dễ xả','factory.items.2':'Hỗ trợ bán sỉ, đại lý và OEM','factory.items.3':'Tư vấn nhanh qua Zalo/Facebook',
    'reviews.eyebrow':'Cảm nhận khách hàng','reviews.title':'Những điều khách hàng tìm kiếm ở Liora','reviews.items.0':'“Mùi chanh nhẹ, rửa xong không bị nồng. Da tay dễ chịu hơn loại cũ.”','reviews.items.1':'“Bọt vừa đủ, dễ xả nước, phù hợp dùng hằng ngày trong bếp.”','reviews.items.2':'“Tôi quan tâm sản phẩm an toàn hơn cho nhà có trẻ nhỏ, Liora tạo cảm giác yên tâm.”',
    'blog.eyebrow':'Blog sống xanh','blog.title':'Kiến thức cho căn bếp an toàn hơn','blog.items.0.t':'Nước rửa chén sinh học là gì?','blog.items.0.d':'Hiểu đúng về sản phẩm làm sạch sinh học và cách chọn cho gia đình.','blog.items.1.t':'Vì sao da tay dễ khô khi rửa chén?','blog.items.1.d':'Những yếu tố thường gặp và cách giảm cảm giác khô ráp.','blog.items.2.t':'Chọn nước rửa chén cho nhà có trẻ nhỏ','blog.items.2.d':'Các tiêu chí nên cân nhắc khi mua sản phẩm dùng hằng ngày.',
    'ctaBox.eyebrow':'Bạn muốn mua lẻ, bán sỉ hoặc làm đại lý?','ctaBox.title':'Để lại thông tin, Liora sẽ tư vấn sản phẩm phù hợp','ctaBox.button':'Liên hệ ngay',
    'contact.eyebrow':'Liên hệ Liora','contact.title':'Tư vấn nhanh qua Zalo, Facebook hoặc form','contact.desc':'Gửi nhu cầu của bạn: mua lẻ, bán sỉ, đại lý, nhà hàng hoặc OEM. Liora sẽ phản hồi sớm nhất.','contact.addr':'📍 Ấp An Hoà, Xã An Nhơn, Huyện Châu Thành, Tỉnh Đồng Tháp',
    'form.name':'Họ tên','form.phone':'Số điện thoại','form.need':'Nhu cầu','form.message':'Nội dung','form.submit':'Gửi thông tin','form.note':'* Cần thay FORM_ID_CUA_BAN bằng Formspree ID thật để nhận form qua email.',
    'popup.eyebrow':'Ưu đãi tư vấn','popup.title':'Nhận báo giá nhanh cho mua lẻ, đại lý và nhà hàng','popup.desc':'Chat Zalo để được tư vấn sản phẩm phù hợp và chính sách giá tốt.','popup.button':'Chat Zalo ngay','footer.desc':'Sạch từ Tâm – An từ chất lượng.'
  },
  en: {
    'promo.bar':'Launch offer: chat on Zalo for fast consultation and distributor pricing',
    'nav.products':'Products','nav.trust':'Commitment','nav.factory':'Factory','nav.reviews':'Reviews','nav.blog':'Blog','nav.contact':'Contact',
    'hero.eyebrow':'🌿 A clean brand for modern kitchens','hero.title':'Bio dish soap that is <span>gentle on hands</span> and family-safe','hero.lead':'Liora Organics delivers effective grease cleaning with a bio-based, gentle formula without harsh chemicals, suitable for families with young children.','hero.floatTitle':'Gentle clean daily','hero.floatDesc':'Light citrus scent • easy rinse • hand-friendly',
    'cta.consult':'Get consultation','cta.viewProducts':'View products','cta.askPrice':'Ask for pricing →','proof.concentrated':'Concentrated formula','proof.harsh':'Harsh chemicals','proof.factory':'Made in Vietnam',
    'trust.eyebrow':'Liora commitment','trust.title':'Clean dishes with peace of mind','trust.desc':'Focused on everyday dishwashing: effective grease removal, gentle feel on hands, and confidence for family kitchens.',
    'trust.items.0.t':'Gentle on hands','trust.items.0.d':'A mild formula designed to reduce dryness from frequent use.','trust.items.1.t':'Bio-based origin','trust.items.1.d':'Friendly ingredients for green living and modern kitchens.','trust.items.2.t':'Family-safe','trust.items.2.d':'Suitable for homes with young children when used as directed and rinsed well.','trust.items.3.t':'Factory credibility','trust.items.3.d':'Available for retail, wholesale, distributors and OEM partnership.',
    'products.eyebrow':'Product line','products.title':'Limo Clean for different needs','products.desc':'Three sizes for trial, family use, restaurants and cafés.','products.small.tag':'Trial','products.small.desc':'Compact size for trials, travel or sampling.','products.mid.tag':'Popular','products.mid.desc':'Family-friendly size, economical for daily use.','products.big.tag':'Value','products.big.desc':'Large size for frequent family use, cafés and restaurants.',
    'factory.eyebrow':'From factory to kitchen','factory.title':'Building trust through consistent quality','factory.desc':'Liora Organics pursues safe, easy-to-use cleaning products for Vietnamese families and distributor partners.','factory.items.0':'Selected ingredients and pleasant scent','factory.items.1':'Concentrated formula, fine foam, easy rinse','factory.items.2':'Wholesale, distributor and OEM support','factory.items.3':'Fast consultation via Zalo/Facebook',
    'reviews.eyebrow':'Customer impressions','reviews.title':'What customers look for in Liora','reviews.items.0':'“The citrus scent is light, not overpowering. My hands feel better than with my old soap.”','reviews.items.1':'“Foam is just right, easy to rinse, and good for everyday kitchen use.”','reviews.items.2':'“I care about safer products for homes with kids. Liora feels reassuring.”',
    'blog.eyebrow':'Green living blog','blog.title':'Knowledge for safer kitchens','blog.items.0.t':'What is bio dish soap?','blog.items.0.d':'Understand bio-based cleaners and how to choose one for your family.','blog.items.1.t':'Why do hands get dry after dishwashing?','blog.items.1.d':'Common causes and ways to reduce dryness.','blog.items.2.t':'Choosing dish soap for families with kids','blog.items.2.d':'Criteria to consider for daily-use products.',
    'ctaBox.eyebrow':'Retail, wholesale or distributor?','ctaBox.title':'Leave your information and Liora will recommend the right product','ctaBox.button':'Contact now',
    'contact.eyebrow':'Contact Liora','contact.title':'Fast consultation via Zalo, Facebook or form','contact.desc':'Send your request: retail, wholesale, distributor, restaurant or OEM. Liora will respond as soon as possible.','contact.addr':'📍 An Hoa Hamlet, An Nhon Commune, Chau Thanh District, Dong Thap Province',
    'form.name':'Full name','form.phone':'Phone number','form.need':'Need','form.message':'Message','form.submit':'Send information','form.note':'* Replace FORM_ID_CUA_BAN with your real Formspree ID to receive submissions by email.',
    'popup.eyebrow':'Consultation offer','popup.title':'Get fast pricing for retail, distributors and restaurants','popup.desc':'Chat on Zalo for product advice and pricing policy.','popup.button':'Chat on Zalo','footer.desc':'Clean with care – quality with peace.'
  }
};

let lang = localStorage.getItem('lioraLang') || 'vi';
function applyLang(){
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(i18n[lang]?.[key]) el.innerHTML = i18n[lang][key];
  });
  document.documentElement.lang = lang;
}
applyLang();

$('#langToggle')?.addEventListener('click', () => {
  lang = lang === 'vi' ? 'en' : 'vi';
  localStorage.setItem('lioraLang', lang);
  applyLang();
});

$('#menuBtn')?.addEventListener('click', () => $('#menu')?.classList.toggle('open'));
$$('#menu a').forEach(a => a.addEventListener('click', () => $('#menu')?.classList.remove('open')));

const savedTheme = localStorage.getItem('lioraTheme');
if(savedTheme) document.documentElement.dataset.theme = savedTheme;
$('#themeToggle')?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('lioraTheme', next);
});

$('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => observer.observe(el));

const popup = $('#promoPopup');
const popupSeen = sessionStorage.getItem('lioraPopupSeen');
if(!popupSeen){
  setTimeout(() => popup?.classList.add('show'), 1800);
}
$('#popupClose')?.addEventListener('click', () => {
  popup?.classList.remove('show');
  sessionStorage.setItem('lioraPopupSeen', '1');
});
popup?.addEventListener('click', e => {
  if(e.target === popup){ popup.classList.remove('show'); sessionStorage.setItem('lioraPopupSeen', '1'); }
});

$('#contactForm')?.addEventListener('submit', () => {
  if(window.fbq) fbq('track', 'Lead');
  if(window.gtag) gtag('event', 'generate_lead', { event_category: 'contact_form' });
});
