import React from 'react';

export default class IranCitiesProvincesSelect extends React.Component{

    constructor(props){
        super(props);
        this.handleChangeProvince = this.handleChangeProvince.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.citySelectLoader = this.citySelectLoader.bind(this);
        this.state = {selectedProvince: '', selectedCity: ''};
    }

    componentWillMount(){
          if(typeof this.props.defaultProvince != 'undefined' && this.props.defaultProvince != '0' && this.props.defaultProvince != '' && this.props.defaultProvince.length < 3 ){
               this.setState({selectedProvince: this.props.defaultProvince});
               if(typeof this.props.defaultCity != 'undefined' && this.props.defaultCity != '0' && this.props.defaultCity != '' && this.props.defaultCity.length < 3 ){
                    this.setState({selectedCity: this.props.defaultCity});
               }
          }
    }
    citySelectLoader(){ 
        if(this.state.selectedProvince != '' && this.state.selectedProvince != '0'){
            var eastazarbaijan1 = ['آذرشهر' ,'اسکو' ,'اهر' ,'بستان‌آباد' ,'بناب' ,'تبریز' ,'جلفا' ,'چاراویماق' ,'سراب' ,'شبستر', 'مراغه', 'ملکان'];
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
            var khoozestan12 = ['آبادان' ,'امیدیه' ,'اندیمشک' ,'اهواز' ,'ایذه' ,'باغ‌ملک' ,'بندر ماهشهر' ,'بهبهان' ,'خرمشهر' ,'دزفول' ,'دشت آزادگان' ,'رامشیر' ,'رامهرمز' ,'شادگان' ,'شوش' ,'شوشتر' ,'گتوند' ,'لالی' ,'مسجد سلیمان','هندیجان'];
            var zanjan13 = ['ابهر' ,'ایجرود' ,'خدابنده' ,'خرمدره' ,'زنجان' ,'طارم' ,'ماه‌نشان'];
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
            
            if(this.state.selectedProvince != ''){
                switch(this.state.selectedProvince){
                    case '1':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {eastazarbaijan1.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '2':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                    {westazarbaijan2.map((singlecity, index) =>
                                        <option key={index+1} value={index+1}>{singlecity}</option>
                                    )}
                                </select>
                            </div>
                        );
                        break;
                    case '3':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {ardabil3.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '4':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {esfahan4.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '5':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {ilam5.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '6':
                        return(
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {booshehr6.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '7':
                        return(
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {tehran7.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '8':
                        return(
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {chaharmahalobakhtiari8.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '9':
                        return(
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {khorasanjonoobi9.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '10':
                        return(
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {khorasanrazavi10.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '11':
                        return(
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {khoozestan12.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '12':
                        return(
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {khoozestan12.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '13':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {zanjan13.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '14':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {semnan14.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '15':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {sistanobaloochestan15.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '16':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {fars16.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '17':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {qazvin17.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '18':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {qom18.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '19':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {kordestan19.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '20':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {kerman20.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '21':
                        return (                        
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {kermanshah21.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '22':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {kohkilooyevaboyrahmad22.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '23':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {golestan23.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '24':
                        return (
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {gilan24.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '25':
                        return (                      
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {lorestan25.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '26':
                        return (                      
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {markazi27.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '27':
                        return (                      
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {markazi27.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '28':
                        return (                      
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {hormozgan28.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '29':
                        return (                      
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {hamedan29.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '30':
                        return (                      
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {yazd30.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    case '31':
                        return (                      
                            <div className="city-select-container">
                                <label>انتخاب شهر:‌</label>
                                <select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
                                    <option value="">انتخاب کنید</option>
                                {alborz31.map((singlecity, index) =>
                                    <option key={index+1} value={index+1}>{singlecity}</option>
                                )}
                                </select>
                            </div>
                        );
                        break;
                    default:
                        return;
                }
            }
        }
        else{
            return;
        }
    }


     handleChangeProvince(event) {
          this.setState({selectedProvince: event.target.value, selectedCity: ''});
     }

     handleChangeCity(event) {
          this.setState({selectedCity: event.target.value});
     }
    render(){
          return(
               <div className="Provinces-cities-component-container">
                    <div className="city-select-container">
                         <label>انتخاب استان:</label>
                         <select name="province" value={this.state.selectedProvince} className="province-form-select" onChange={this.handleChangeProvince} required>
                              <option value="">انتخاب کنید</option>
                              <option value="1">آذربایجان شرقی</option>
                              <option value="2">آذربایجان غربی</option>
                              <option value="3">اردبیل</option>
                              <option value="4">اصفهان</option>
                              <option value="5">ایلام</option>
                              <option value="6">بوشهر</option>
                              <option value="7">تهران</option>
                              <option value="8">چهارمحال و بختیاری</option>
                              <option value="9">خراسان جنوبی</option>
                              <option value="10">خراسان رضوی</option>
                              <option value="11">خراسان شمالی</option>
                              <option value="12">خوزستان</option>
                              <option value="13">زنجان</option>
                              <option value="14">سمنان</option>
                              <option value="15">سیستان و بلوچستان</option>
                              <option value="16">فارس</option>
                              <option value="17">قزوین</option>
                              <option value="18">قم</option>
                              <option value="19">کردستان</option>
                              <option value="20">کرمان</option>
                              <option value="21">کرمانشاه</option>
                              <option value="22">کهگیلویه و بویراحمد</option>
                              <option value="23">گلستان</option>
                              <option value="24">گیلان</option>
                              <option value="25">لرستان</option>
                              <option value="26">مازندران</option>
                              <option value="27">مرکزی</option>
                              <option value="28">هرمزگان</option>
                              <option value="29">همدان</option>
                              <option value="30">یزد</option>
                              <option value="31">البرز</option>
                         </select>
                    </div>
                    {this.citySelectLoader()}
               </div>
          );
    }
}

