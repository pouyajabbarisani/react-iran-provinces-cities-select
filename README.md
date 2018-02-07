# react-iran-provinces-cities-select
`react-iran-provinces-cities-select` is an easy to use and simple react component for adding an interactive Iran provinces and cities select to your application's form.

### **Installation And Usage**
1. run `npm install react-iran-provinces-cities-select --save` command in your Terminal or Command Prompt.
2. import package in everywhere you want to use: 
 ```js
 import IranCitiesProvincesSelect form 'react-iran-provinces-cities-select';
 ```
3. Use `<IranCitiesProvincesSelect/>` everyplace you want to put.

**Provinces and cities data-type in this component is Number.**
For *example* `1` in Peovince is `East-Azarbaijan` alias.
and if the province is selected as `1` and if the city is `6` then city is `Tabriz`.

For **getting selected Pronince and city** you must add a ref property to component on usage
`eg: <IranCitiesProvincesSelect ref="citystate"/>` and access to it from `this.refs.citystate.state.selectedProvince` *for selected province number* and `this.refs.citystate.state.selectedCity` *for selected city number*.

you can also push default province and city number as props to component. eg:
```js
<IranCitiesProvincesSelect ref="citystate" defaultProvince="1" defaultCity="6"/>
```
=> selects East-Azarbaijan and Tabriz as default.

You can see a full list of provinces array down below:
```js

var eastazarbaijan1 = ['آذرشهر' ,'اسکو' ,'اهر' ,'بستان‌آباد' ,'بناب' ,'تبریز' ,'جلفا' ,'چاراویماق' ,'سراب' ,'شبستر', 'مراغه'];
var westazarbaijan2 = ['ارومیه' ,'اشنویه' ,'بوکان' ,'پیرانشهر' ,'تکاب' ,'چالدران' ,'خوی' ,'سردشت' ,'سلماس' ,'شاهین‌دژ' ,'ماکو' ,'مهاباد' ,'میاندوآب' ,'نقده'];
var ardabil3 = ['اردبیل' ,'بیله‌سوار' ,'پارس‌آباد' ,'خلخال' ,'کوثر' ,'گِرمی' ,'مِشگین‌شهر' ,'نَمین' ,'نیر'];
var esfahan4 = ['آران و بیدگل' ,'اردستان' ,'اصفهان' ,'برخوار و میمه' ,'تیران و کرون' ,'چادگان' ,'خمینی‌شهر' ,'خوانسار' ,'سمیرم' ,'شهرضا' ,'سمیرم سفلی' ,'فریدن' ,'فریدون‌شهر' ,'فلاورجان' ,'کاشان' ,'گلپایگان' ,'لنجان' ,'مبارکه' ,'نائین' ,'نجف‌آباد' ,'نطنز'];
var ilam5 = ['آبدانان' ,'ایلام' ,'ایوان' ,'دره‌شهر' ,'دهلران' ,'شیروان و چرداول' ,'مهران'];
var booshehr6 = ['بوشهر' ,'تنگستان' ,'جم' ,'دشتستان' ,'دشتی','دیر' ,'دیلم' ,'کنگان' ,'گناوه'];
var tehran7 = ['اسلام‌شهر' ,'پاکدشت' ,'تهران' ,'دماوند' ,'رباط‌کریم' ,'ری' ,'ساوجبلاغ' ,'شمیرانات' ,'شهریار' ,'فیروزکوه' ,'ورامین'];
var chaharmahalobakhtiari8 = ['اردل' ,'بروجن' ,'شهرکرد' ,'فارسان' ,'کوهرنگ' ,'لردگان'];
var khorasanjonoobi9 = ['بیرجند' ,'درمیان' ,'سرایان' ,'سربیشه' ,'فردوس' ,'قائنات','نهبندان'];
var khorasanrazavi10 = ['بردسکن' ,'تایباد' ,'تربت جام' ,'تربت حیدریه' ,'چناران' ,'خلیل‌آباد' ,'خواف' ,'درگز' ,'رشتخوار' ,'سبزوار' ,'سرخس' ,'فریمان' ,'قوچان' ,'کاشمر' ,'کلات' ,'گناباد' ,'مشهد' ,'مه ولات' ,'نیشابور'];
var khorasanshomali11 = ['اسفراین' ,'بجنورد' ,'جاجرم' ,'شیروان' ,'فاروج' ,'مانه و سملقان'];
var khoozestan12 = ['آبادان' ,'امیدیه' ,'اندیمشک' ,'اهواز' ,'ایذه' ,'باغ‌ملک' ,'بندر ماهشهر' ,'بهبهان' ,'خرمشهر' ,'دزفول' ,'دشت آزادگان' ,'رامشیر' ,'رامهرمز' ,'شادگان' ,'شوش' ,'شوشتر' var zanjan13 = ['ابهر' ,'ایجرود' ,'خدابنده' ,'خرمدره' ,'زنجان' ,'طارم' ,'ماه‌نشان'];
var semnan14 = ['دامغان' ,'سمنان' ,'شاهرود' ,'گرمسار' ,'مهدی‌شهر'];
var sistanobaloochestan15 = ['ایرانشهر' ,'چابهار' ,'خاش' ,'دلگان' ,'زابل' ,'زاهدان' ,'زهک' ,'سراوان' ,'سرباز' ,'کنارک' ,'نیک‌شهر'];
var fars16 = ['آباده' ,'ارسنجان' ,'استهبان' ,'اقلید' ,'بوانات' ,'پاسارگاد' ,'جهرم' ,'خرم‌بید' ,'خنج' ,'داراب' ,'زرین‌دشت' ,'سپیدان' ,'شیراز' ,'فراشبند' ,'فسا' ,'فیروزآباد' ,'قیر و کارزین' ,'کازرون' ,'لارستان' ,'لامِرد' ,'مرودشت' ,'ممسنی' ,'مهر' ,'نی‌ریز'];
var qazvin17 = ['آبیک' ,'البرز' ,'بوئین‌زهرا' ,'تاکستان' ,'قزوین'];
var qom18 = ['قم'];
var kordestan19 = ['بانه' ,'بیجار' ,'دیواندره' ,'سروآباد' ,'سقز' ,'سنندج' ,'قروه' ,'کامیاران' ,'مریوان'];
var kerman20 = ['بافت' ,'بردسیر' ,'بم' ,'جیرفت' ,'راور' ,'رفسنجان' ,'رودبار جنوب' ,'زرند' ,'سیرجان' ,'شهر بابک' ,'عنبرآباد' ,'قلعه گنج' ,'کرمان' ,'کوهبنان' ,'کهنوج' ,'منوجان'];
var kermanshah21 = ['اسلام‌آباد غرب' ,'پاوه' ,'ثلاث باباجانی' ,'جوانرود' ,'دالاهو' ,'روانسر' ,'سرپل ذهاب' ,'سنقر' ,'صحنه' ,'قصر شیرین' ,'کرمانشاه' ,'کنگاور' ,'گیلان غرب' ,'هرسین'];
var kohkilooyevaboyrahmad22 = ['بویراحمد' ,'بهمئی' ,'دنا' ,'کهگیلویه' ,'گچساران'];
var golestan23 = ['آزادشهر' ,'آق‌قلا' ,'بندر گز' ,'ترکمن' ,'رامیان' ,'علی‌آباد' ,'کردکوی' ,'کلاله' ,'گرگان' ,'گنبد کاووس' ,'مراوه‌تپه' ,'مینودشت'];
var gilan24 = ['آستارا' ,'آستانه اشرفیه' ,'اَملَش' ,'بندر انزلی' ,'رشت' ,'رضوانشهر' ,'رودبار' ,'رودسر' ,'سیاهکل' ,'شَفت' ,'صومعه‌سرا' ,'طوالش' ,'فومَن' ,'لاهیجان' ,'لنگرود' ,'ماسال'];
var lorestan25 = ['ازنا' ,'الیگودرز' ,'بروجرد' ,'پل‌دختر' ,'خرم‌آباد' ,'دورود' ,'دلفان' ,'سلسله ,کوهدشت'];
var mazandaran26 = ['آمل' ,'بابل' ,'بابلسر' ,'بهشهر' ,'تنکابن' ,'جویبار' ,'چالوس' ,'رامسر' ,'ساری' ,'سوادکوه' ,'قائم‌شهر' ,'گلوگاه' ,'محمودآباد' ,'نکا' ,'نور' ,'نوشهر'];
var markazi27 = ['آشتیان' ,'اراک' ,'تفرش' ,'خمین' ,'دلیجان' ,'زرندیه' ,'ساوه' ,'شازند' ,'کمیجان' ,'محلات'];
var hormozgan28 = ['ابوموسی' ,'بستک' ,'بندر عباس' ,'بندر لنگه' ,'جاسک' ,'حاجی‌آباد' ,'شهرستان خمیر' ,'رودان'  ,'قشم' ,'گاوبندی' ,'میناب'];
var hamedan29 = ['اسدآباد' ,'بهار' ,'تویسرکان' ,'رزن' ,'کبودرآهنگ' ,'ملایر' ,'نهاوند' ,'همدان'];
var yazd30 = ['ابرکوه' ,'اردکان' ,'بافق' ,'تفت' ,'خاتم' ,'صدوق' ,'طبس' ,'مهریز' ,'مِیبُد' ,'یزد'];
var alborz31 = ['کرج', 'نظرآباد', 'فردیس', 'اشتهارد', 'هشتگرد', 'طالقان'];
```
 

**Any question? Ask it in my Twitter or in my website:**
[Pouya Jabbarisani's Twitter](https://twitter.com/pouyajabbari)
[Pouya Jabbarisani's website](http://pouyajabbarisani.com/)

Thank you for watching and using. =)


