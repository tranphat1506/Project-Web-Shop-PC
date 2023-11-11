import { Nums2MoneyString, ReducePercentFrom2Nums } from '../utils/formatV1.js';
import { MostSale, ScreenMostSale } from './productApi.js';
export const initSlider = () => {
    const path = window.location.pathname.split('.html')[0];
    switch (path) {
        case '/index':
            new Swiper('.main-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
            });

            new Swiper('.sales-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
                spaceBetween: 10,
                breakpoints: {
                    480: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                },
            });
            return;
        case '/':
            new Swiper('.main-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
            });

            new Swiper('.sales-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
                spaceBetween: 10,
                breakpoints: {
                    480: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                },
            });
            return;
        default:
            throw new Error('Invalid location!');
    }
};
const ProductDetailComponentV1 = {
    chip: '<i class="bi bi-cpu-fill mr-1 leading-none"></i>',
    card: '<i class="bi bi-gpu-card mr-1 leading-none"></i>',
    mainboard: `<img class="mr-1 leading-none h-3" src="/assets/img/motherboard.png" alt="Mainboard icon image" />`,
    memory: '<i class="bi bi-memory mr-1 leading-none"></i>',
    hz: `<svg class="h-[14px] mr-1 leading-none rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-radar" viewBox="0 0 16 16"><path d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847Z"/></svg>`,
    storage: '<i class="bi bi-hdd mr-1 leading-none"></i>',
    screen: '<i class="bi bi-tv mr-1 leading-none"></i>',
    screenResolution: '<i class="bi bi-aspect-ratio mr-1 leading-none"></i>',
    panelType: '<i class="bi bi-stack mr-1 leading-none"></i>',
    mouseBattery: '<i class="bi bi-battery-charging mr-1 leading-none"></i>',
    mouseLED: '<i class="bi bi-lightbulb mr-1 leading-none"></i>',
    mouseDPI: '<i class="bi bi-mouse-fill mr-1 leading-none"></i>',
    deviceConnect: '<i class="bi bi-usb-symbol mr-1 leading-none"></i>',
    kbSize: '<i class="bi bi-keyboard mr-1 leading-none"></i>',
    kbSwitch: '<i class="bi bi-usb-mini-fill mr-1 leading-none"></i>',
};
const DealsDetail = {
    'tra-gop-0%': {
        text: 'Trả góp 0%',
        className: 'bg-blue-500 text-white',
    },
    'pre-order': {
        text: 'Pre-Order',
        className: 'bg-gray-200 text-black',
    },
    'qua-tang-hot': {
        text: 'Quà tặng HOT',
        className: 'bg-red-500 text-white',
        icon: {
            isFontIcon: true,
            value: 'bi bi-fire',
            className: 'text-yellow-300',
        },
    },
    'sale-sap-san': {
        text: 'Sale sập sàn',
        className: 'bg-red-500 text-white',
        icon: {
            isFontIcon: true,
            value: 'bi bi-fire',
            className: 'text-yellow-300',
        },
    },
};
const StatusDetail = {
    'new-product': {
        text: 'Sản phẩm mới',
        className: 'bg-blue-500 text-white',
    },
    'best-seller': {
        text: 'Bán chạy',
        className: 'bg-red-500 text-white',
        icon: {
            isFontIcon: true,
            value: 'bi bi-fire',
            className: 'text-yellow-300',
        },
    },
};
class ProductCard {
    constructor(
        params = {
            prodName: 'Product name',
            prodHref: '#',
            prodImg: '#',
            oPrice: undefined,
            sPrice: undefined,
            countSold: undefined,
            isSales: false,
            prodDetail: {
                show: false,
                details: {
                    chip: undefined,
                    card: undefined,
                    memory: undefined,
                    storage: undefined,
                    screen: undefined,
                    panelType: undefined,
                    screenResolution: undefined,
                    hz: undefined,
                    mainboard: undefined,
                    mouseBattery: undefined,
                    mouseDPI: undefined,
                    mouseLED: undefined,
                    deviceConnect: undefined,
                    kbSize: undefined,
                    kbSwitch: undefined,
                    gift: [],
                    prodDeal: undefined,
                    prodStatus: undefined,
                },
            },
            voteRate: {
                show: false,
                total: 0,
                star: 0,
            },
        },
    ) {
        this.prodName = params.prodName || 'Product name';
        this.prodHref = params.prodHref || '#';
        this.prodImg = params.prodImg || '#';
        this.isSales = params.isSales || false;
        this.oPrice = params.oPrice || undefined; // Original Price
        this.sPrice = params.sPrice || undefined; // Sale Price
        this.countSold = params.countSold || undefined;
        this.prodDetail = params.prodDetail || {
            show: false,
            details: {
                chip: undefined,
                card: undefined,
                memory: undefined,
                storage: undefined,
                screen: undefined,
                panelType: undefined,
                screenResolution: undefined,
                hz: undefined,
                mainboard: undefined,
                mouseBattery: undefined,
                mouseDPI: undefined,
                mouseLED: undefined,
                deviceConnect: undefined,
                kbSize: undefined,
                kbSwitch: undefined,
                gift: [],
                prodDeal: undefined,
                prodStatus: undefined,
            },
        };
        this.voteRate = params.voteRate || {
            show: false,
            total: 0,
            star: 0,
        };
    }
    #createTitleElement() {
        const el = document.createElement('a');
        el.className = 'text-base font-medium leading-none line-clamp-2';
        el.href = this.prodHref;
        el.textContent = this.prodName;
        return el;
    }
    #createPriceElement() {
        const contEl = document.createElement('div');
        if (this.isSales) {
            const oPriceEl = document.createElement('p');
            oPriceEl.className = 'text-sm line-through text-[#676767] leading-none mt-1';
            oPriceEl.textContent = Nums2MoneyString(this.oPrice);
            const sPriceEl = document.createElement('div');
            sPriceEl.className = 'flex gap-2 items-center mt-2';
            sPriceEl.innerHTML = `<p class="text-base font-medium text-red-500 leading-none">${Nums2MoneyString(
                this.sPrice,
            )}</p>
            <span
                class="text-xs leading-none border-red-700 border-[1px] bg-red-200 rounded text-red-500 p-[2px]"
                >-${Math.round(ReducePercentFrom2Nums(this.oPrice, this.sPrice) * 100)}%</span
            >`;
            contEl.appendChild(oPriceEl);
            contEl.appendChild(sPriceEl);
        } else {
            const sPriceEl = document.createElement('div');
            sPriceEl.className = 'flex gap-2 items-center mt-2';
            sPriceEl.innerHTML = `<p class="text-base font-medium text-red-500 leading-none">${Nums2MoneyString(
                this.sPrice,
            )}</p>`;
            contEl.appendChild(sPriceEl);
        }
        return contEl;
    }
    #createRatingElement() {
        const RatingContainerEl = document.createElement('div');
        if (this.voteRate.show) {
            RatingContainerEl.className = 'py-2 inline-flex text-xs gap-1 text-yellow-400';
            RatingContainerEl.innerHTML = `<p class="font-medium">${this.voteRate.total}</p>
            <i class="bi bi-star-fill"></i>
            <p class="text-[#888]">(${this.voteRate.total} đánh giá)</p>`;
        }
        return RatingContainerEl;
    }
    #createDetailElement() {
        const createDetail = (type, value) => {
            if (!ProductDetailComponentV1[type]) return false; // check
            const el = document.createElement('span');
            switch (type) {
                case 'chip':
                case 'card':
                case 'memory':
                case 'storage':
                case 'screen':
                case 'screenResolution':
                case 'panelType':
                case 'mouseBattery':
                case 'mouseLED':
                case 'mouseDPI':
                case 'deviceConnect':
                case 'kbSize':
                case 'kbSwitch':
                    el.className = 'text-xs text-[#444]';
                    break;
                default:
                    el.className = 'text-xs text-[#444] inline-flex items-center';
                    break;
            }
            el.innerHTML = ProductDetailComponentV1[type] + value;
            return el;
        };
        const detailContainerEl = document.createElement('div');
        if (this.prodDetail.show) {
            detailContainerEl.className = 'px-2 py-1 rounded-md bg-gray-200 mt-2 flex gap-x-2 gap-y-1 flex-wrap';
            Object.keys(this.prodDetail.details).map((key) => {
                const value = this.prodDetail.details[key];
                if (value === undefined) return false;
                const elDetail = createDetail(key, value);
                !!elDetail && detailContainerEl.appendChild(elDetail);
                return true;
            });
        }
        return detailContainerEl;
    }
    #createTotalSoldProgressElement() {
        const contEl = document.createElement('div');
        if (this.countSold === undefined) return contEl;
        contEl.className = 'mt-1 h-6 w-full bg-red-200 rounded-3xl flex';
        const statusText = this.countSold === 0 ? 'Vừa mở bán' : `Đã bán: ${this.countSold}`;
        contEl.innerHTML += `<i class="bi bi-fire text-base rounded-l-3xl text-yellow-300 bg-red-500 px-2"></i>
        <span class="min-w-[50%] text-xs text-white bg-red-500 px-2 h-full inline-flex items-center rounded-r-3xl leading-none">${statusText}</span>`;
        return contEl;
    }
    #createMainCard() {
        const el = document.createElement('div');
        el.className = 'p-2 font-WorkSans w-full';
        el.appendChild(this.#createTitleElement());
        el.appendChild(this.#createDetailElement());
        el.appendChild(this.#createPriceElement());
        el.appendChild(this.#createTotalSoldProgressElement());
        el.appendChild(this.#createRatingElement());
        return el;
    }

    #createGift() {
        const contEl = document.createElement('span');
        if (this.prodDetail.details.gift.length <= 0) return contEl;
        contEl.innerHTML += '<i class="bi bi-gift-fill text-xl px-2 leading-none"></i>';
        const giftDisplayEl = document.createElement('div');
        giftDisplayEl.className = 'gift-display hidden absolute w-full left-0 top-0 border-red-200 rounded-md border';
        giftDisplayEl.innerHTML += `<div class="rounded-t-sm bg-red-200">
            <h1 class="text-red-500 font-medium text-center">
                Quà tặng khuyến mãi
            </h1>
            <ol class="bg-white p-2 rounded-b-md w-full flex flex-col gap-1">
                ${this.prodDetail.details.gift
                    .map((gift, index) => {
                        return `<li class="text-xs font-medium flex items-center gap-2">
                        <span
                            class="rounded-full leading-none inline-block px-2 py-1 bg-red-500 text-white"
                            >${index}
                        </span>
                        <p>
                            ${gift}
                        </p>
                    </li>`;
                    })
                    .join('')}
            </ol>
        </div>`;
        contEl.appendChild(giftDisplayEl);
        return contEl;
    }
    #createTagV2 = ({ text = '', icon = { isFontIcon: false, value: undefined, className: '' }, className = '' }) => {
        const iconEl = document.createElement('span');
        iconEl.className = 'py-1 px-2 text-xs font-medium rounded-3xl leading-none items-center' + ` ${className}`;
        if (icon.value === undefined) {
            iconEl.textContent = text;
            return iconEl;
        }
        iconEl.className += ' inline-flex';
        if (!icon.isFontIcon) {
            iconEl.innerHTML += `${icon.value}${text}`;
            return iconEl;
        }
        iconEl.innerHTML += `<i class="text-base mr-2 leading-none ${icon.value} ${icon.className}"></i>${text}`;
        return iconEl;
    };
    #createDealsElement() {
        const contEl = document.createElement('div');
        contEl.className = 'inline-flex gap-1';
        if (DealsDetail[this.prodDetail.details.prodDeal] === undefined) return contEl;
        const tagEl = this.#createTagV2(DealsDetail[this.prodDetail.details.prodDeal]);
        contEl.appendChild(tagEl);
        return contEl;
    }
    #createTagsElement() {
        const contEl = document.createElement('div');
        contEl.className = 'h-full py-3 w-full flex justify-between items-center flex-wrap gap-1';
        if (StatusDetail[this.prodDetail.details.prodStatus] === undefined) return contEl;
        const tagEl = this.#createTagV2(StatusDetail[this.prodDetail.details.prodStatus]);
        contEl.appendChild(tagEl);
        return contEl;
    }
    #createImageElement() {
        const imgEl = document.createElement('a');
        imgEl.href = this.prodHref;
        imgEl.innerHTML += `<img
            class="max-h-[200px] w-full object-contain object-center"
            src="${this.prodImg}"
            alt="${this.prodName}"
        />`;
        return imgEl;
    }
    #createContainerImage() {
        const contEl = document.createElement('div');
        contEl.className = 'p-2';

        const contTopEl = document.createElement('div');
        contTopEl.className = 'h-8 pb-3 w-full flex justify-between text-red-500 relative items-center';
        contTopEl.appendChild(this.#createDealsElement());
        contTopEl.appendChild(this.#createGift());

        const contBottomEl = document.createElement('div');
        contBottomEl.className = 'h-full py-3 w-full flex justify-between items-center flex-wrap gap-1';
        contBottomEl.appendChild(this.#createTagsElement());

        contEl.appendChild(contTopEl);
        contEl.appendChild(this.#createImageElement());
        contEl.appendChild(contBottomEl);
        return contEl;
    }
    #createProductCard(className = '') {
        const contEl = document.createElement('div');
        contEl.className = 'swiper-slide rounded-md block h-full' + ` ${className}`;
        contEl.appendChild(this.#createContainerImage());
        contEl.appendChild(this.#createMainCard());
        return contEl;
    }
    appendTo(query = '', className = 'bg-white border border-[#ccc]') {
        document.querySelector(query).appendChild(this.#createProductCard(className));
    }
}
const fakeProduct = {
    prodName: 'Test',
    prodHref: '#test',
    prodImg: '/assets/img/img_pc/Gearvn_Gaming_2.png',
    isSales: true,
    oPrice: 100000000,
    sPrice: 85000000,
    countSold: undefined,
    prodDetail: {
        show: true,
        details: {
            chip: 'i9 19KF',
            card: 'RTX 4090',
            memory: undefined,
            storage: '1TB (SSD)',
            screen: undefined,
            panelType: undefined,
            screenResolution: undefined,
            hz: undefined,
            mainboard: undefined,
            mouseBattery: undefined,
            mouseDPI: undefined,
            mouseLED: undefined,
            deviceConnect: 'test',
            kbSize: 'test',
            kbSwitch: 'test',
            gift: ['asdasd', 'adsasd'],
            prodDeal: 'qua-tang-hot',
            prodStatus: 'best-seller',
        },
    },
    voteRate: {
        show: true,
        total: 10,
        star: 5,
    },
};
const prods = Object.keys(MostSale).map((key) => {
    const data = MostSale[key];
    const prodApi = {
        prodName: data.name,
        prodHref: data.href,
        prodImg: data.img,
        isSales: data.origin_price !== 0,
        oPrice: data.origin_price,
        sPrice: data.reduce_price,
        countSold: data.selling,
    };
    const prodCard = new ProductCard(prodApi);
    prodCard.appendTo('body');
    return prodCard;
});
console.log(prods);
