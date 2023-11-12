const CategoryMenuApi = [
    {
        title: 'Laptop',
        icon: {
            isFontIcon: true,
            value: 'bi bi-laptop text-xl',
        },
        href: '/laptop',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Laptop Gaming',
        icon: {
            isFontIcon: false,
            value: `<svg
        class="w-5 h-7"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
    >
        <g>
            <path
                style="fill: #38454f"
                d="M185.379,384v17.655h141.241V384H476.69V101.517c0-9.754-7.901-17.655-17.655-17.655H52.966
c-9.754,0-17.655,7.901-17.655,17.655V384H185.379z"
            />
            <path
                style="fill: #b0b6bb"
                d="M326.621,384v17.655H185.379V384H0v26.483c0,9.754,7.901,17.655,17.655,17.655h476.69
c9.754,0,17.655-7.901,17.655-17.655V384H326.621z"
            />
            <polygon
                style="fill: #546a79"
                points="52.966,366.345 459.034,366.345 459.034,101.517 52.966,101.517 	"
            />
            <g>
                <path
                    style="fill: #ea6148"
                    d="M432.552,348.69H300.138c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828S437.433,348.69,432.552,348.69"
                />
                <path
                    style="fill: #ea6148"
                    d="M167.724,295.724H79.448c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h88.276
c4.882,0,8.828,3.955,8.828,8.828S172.606,295.724,167.724,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M388.414,295.724H256c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828S393.295,295.724,388.414,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M211.862,295.724c-2.295,0-4.599-0.971-6.268-2.56c-1.598-1.677-2.56-3.972-2.56-6.268
c0-1.148,0.265-2.295,0.706-3.354c0.441-1.148,1.059-2.119,1.854-2.913c3.266-3.266,9.181-3.266,12.535,0
c1.589,1.677,2.56,3.972,2.56,6.268s-0.971,4.59-2.56,6.268c-0.441,0.353-0.892,0.794-1.412,1.059
c-0.441,0.353-0.98,0.618-1.501,0.794c-0.538,0.265-1.059,0.441-1.686,0.53C213.01,295.636,212.392,295.724,211.862,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M256,348.69H123.586c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828H256
c4.882,0,8.828,3.955,8.828,8.828S260.882,348.69,256,348.69"
                />
                <path
                    style="fill: #ea6148"
                    d="M79.448,348.69c-1.148,0-2.295-0.265-3.354-0.706c-1.059-0.441-2.03-1.059-2.913-1.854
c-1.598-1.677-2.56-3.884-2.56-6.268c0-1.148,0.265-2.295,0.706-3.354c0.441-1.148,1.059-2.03,1.854-2.913
c2.119-2.03,5.12-2.913,7.936-2.383c0.627,0.088,1.148,0.265,1.686,0.53c0.521,0.177,1.059,0.441,1.501,0.794
c0.521,0.353,0.971,0.706,1.412,1.059c0.794,0.883,1.412,1.766,1.854,2.913c0.441,1.059,0.706,2.207,0.706,3.354
c0,2.383-0.971,4.59-2.56,6.268c-0.441,0.353-0.892,0.706-1.412,1.059c-0.441,0.353-0.98,0.618-1.501,0.794
c-0.538,0.265-1.059,0.441-1.686,0.53C80.596,348.601,79.978,348.69,79.448,348.69"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,295.724c-0.538,0-1.148-0.088-1.677-0.177c-0.618-0.088-1.148-0.265-1.677-0.53
c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.972-2.56-6.268
s0.962-4.59,2.56-6.268l1.315-1.059c0.539-0.353,1.068-0.618,1.598-0.794c0.53-0.265,1.059-0.441,1.677-0.53
c2.825-0.618,5.906,0.353,7.945,2.383c0.353,0.441,0.706,0.883,1.059,1.412c0.353,0.441,0.609,0.971,0.794,1.501
c0.265,0.53,0.441,1.059,0.521,1.677c0.097,0.53,0.185,1.148,0.185,1.677c0,0.53-0.088,1.148-0.185,1.766
c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589c-0.353,0.441-0.706,0.883-1.059,1.324
c-0.441,0.353-0.892,0.706-1.324,1.059c-0.53,0.353-1.068,0.618-1.589,0.794c-0.538,0.265-1.059,0.441-1.686,0.53
C433.699,295.636,433.081,295.724,432.552,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,189.793H300.138c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828S437.433,189.793,432.552,189.793"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,242.759h-88.276c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828
h88.276c4.882,0,8.828,3.955,8.828,8.828C441.379,238.804,437.433,242.759,432.552,242.759"
                />
                <path
                    style="fill: #ea6148"
                    d="M273.655,242.759H256c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828h17.655
c4.882,0,8.828,3.955,8.828,8.828C282.483,238.804,278.537,242.759,273.655,242.759"
                />
                <path
                    style="fill: #ea6148"
                    d="M388.414,136.828H256c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828C397.241,132.873,393.295,136.828,388.414,136.828"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,136.828c-0.538,0-1.148-0.088-1.677-0.177c-0.618-0.088-1.148-0.265-1.677-0.53
c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.972-2.56-6.268
c0-2.295,0.962-4.59,2.56-6.268l1.315-1.059c0.539-0.353,1.068-0.618,1.598-0.794c0.53-0.265,1.059-0.441,1.677-0.53
c2.825-0.618,5.906,0.353,7.945,2.383c0.353,0.441,0.706,0.883,1.059,1.412c0.353,0.441,0.609,0.971,0.794,1.501
c0.265,0.53,0.441,1.059,0.521,1.677c0.097,0.53,0.185,1.148,0.185,1.677c0,0.53-0.088,1.148-0.185,1.766
c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589c-0.353,0.441-0.706,0.883-1.059,1.324
c-0.441,0.353-0.892,0.706-1.324,1.059c-0.53,0.353-1.068,0.618-1.589,0.794c-0.538,0.265-1.059,0.441-1.686,0.53
C433.699,136.739,433.081,136.828,432.552,136.828"
                />
                <path
                    style="fill: #ea6148"
                    d="M264.828,189.793c-2.392,0-4.599-0.971-6.268-2.56c-1.598-1.677-2.56-3.884-2.56-6.268
c0-2.295,0.962-4.59,2.56-6.268c2.03-2.03,5.12-3.001,7.936-2.383c0.627,0.088,1.148,0.265,1.686,0.53
c0.521,0.177,1.059,0.441,1.501,0.794c0.521,0.265,0.971,0.706,1.324,1.059c1.677,1.677,2.648,3.972,2.648,6.268
c0,2.383-0.971,4.59-2.648,6.268C269.418,188.822,267.211,189.793,264.828,189.793"
                />
                <path
                    style="fill: #ea6148"
                    d="M308.966,242.759c-0.618,0-1.148-0.088-1.766-0.177c-0.53-0.088-1.059-0.265-1.589-0.53
c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.884-2.56-6.268
c0-2.295,0.962-4.59,2.56-6.268c3.266-3.266,9.269-3.266,12.535,0c1.589,1.677,2.56,3.972,2.56,6.268
c0,0.618-0.088,1.148-0.185,1.766c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589
c-0.353,0.441-0.706,0.883-1.059,1.324C313.556,241.788,311.261,242.759,308.966,242.759"
                />
            </g>
            <polygon
                style="fill: #ecba16"
                points="79.448,242.759 203.034,242.759 203.034,119.172 79.448,119.172 	"
            />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
                    </svg>`,
        },
        href: '/laptop-gaming',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'PC Gaming',
        icon: {
            isFontIcon: true,
            value: 'bi bi-pc-display',
        },
        href: '/pc-gaming',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'PC Văn phòng',
        icon: {
            isFontIcon: true,
            value: 'bi bi-pc-display',
        },
        href: '/pc-vp',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Bộ nhớ lưu trữ',
        icon: {
            isFontIcon: true,
            value: 'bi bi-memory',
        },
        href: '/linhkien/hdd&ssd',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Linh kiện máy tính',
        icon: {
            isFontIcon: true,
            value: 'bi bi-cpu text-xl',
        },
        href: '/linhkien',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Card màn hình',
        icon: {
            isFontIcon: true,
            value: 'bi bi-pci-card text-xl',
        },
        href: '/linhkien/card-mh',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Apple',
        icon: {
            isFontIcon: true,
            value: 'bi bi-apple text-xl',
        },
        href: '/apple',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Màn hình',
        icon: {
            isFontIcon: true,
            value: 'bi bi-tv text-xl',
        },
        href: '/man-hinh',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Chuột - Lót chuột',
        icon: {
            isFontIcon: true,
            value: 'bi bi-mouse text-xl',
        },
        href: '/mouse',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Bàn phím',
        icon: {
            isFontIcon: true,
            value: 'bi bi-keyboard text-xl',
        },
        href: '/keyboard',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Tai nghe - Loa',
        icon: {
            isFontIcon: true,
            value: 'bi bi-headphones text-xl',
        },
        href: '/sound-device',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Bàn - Ghế',
        icon: {
            isFontIcon: false,
            value: `<svg
            class="w-5 h-7"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 252.6988 208.1012"
            enable-background="new 0 0 252.6988 208.1012"
            xml:space="preserve"
        >
            <g>
                <path
                    d="M201.1827,108.1703c3.626,0.7328,7.3503,1.1917,11.0161,1.1917c1.5391,0,3.0957-0.0068,4.6563-0.0137
c13.6543-0.0654,27.7725-0.1235,32.3672,4.4502c0.6619,0.6595,1.0767,1.4061,1.2935,2.2415
c-0.4495,2.5465-1.7388,4.9383-3.3091,7.8137c-3.5898,6.5747-8.5078,15.5791-8.5078,34.8057
c0,16.6144-1.6434,25.4975-5.1494,30.1025v-61.6166h5.417v-8.8333h7.333v-5H117.8729v5h7.3335v8.8333h5.4165V207.44h6.5v-12.17
h9.4572v-55.4442h81.333v52.7911c-0.9359,0.2788-1.9337,0.4703-2.9999,0.5867v-50.3778h-75.3333v64.6666h75.3333v-7.3022
c1.0618-0.1169,2.0638-0.2938,2.9999-0.5449v7.7948h5.6364v-10.8251c5.2793-4.8951,7.1494-15.1229,7.1494-33.7529
c0-19.1445,4.7783-28.0898,8.2676-34.6221c2.085-3.9033,3.7324-6.9863,3.7324-10.8779c0-0.4944-0.0464-0.9711-0.1362-1.4302
c0.0801-0.5784,0.1362-1.1658,0.1362-1.7787c0-1.8784-0.6768-3.5044-2.0107-4.833c-5.1299-5.1084-19.0752-5.0469-33.8418-4.9839
c-1.5576,0.0068-3.1113,0.0137-4.6475,0.0137c-4.3789,0-8.8907-0.6821-13.2173-1.7116l-17.2529-43.3597l8.2837-45.8003
l-6.3962-1.1569l-16.196,89.5471l6.3962,1.1569l0.8513-4.7076c3.052,1.6314,9.3293,4.7581,16.9155,7.2723h-27.5337v4h37.6982
L201.1827,108.1703z M187.9966,165.1969c1.2767,0.095,2.4833,0.43,3.5817,0.9595l-3.5817,6.2036V165.1969z M186.4966,172.3599
l-3.5817-6.2036c1.0984-0.5295,2.3049-0.8645,3.5817-0.9595V172.3599z M184.4476,175.909l-6.2036,3.5816
c-0.5295-1.0983-0.8645-2.3049-0.9595-3.5816H184.4476z M177.2845,174.409c0.095-1.2767,0.4299-2.4833,0.9595-3.5816l6.2036,3.5816
H177.2845z M185.1975,177.2081l-3.5856,6.2104c-1.0299-0.7039-1.9209-1.595-2.6249-2.6249L185.1975,177.2081z M186.4966,177.9581
v7.163c-1.2767-0.095-2.4833-0.43-3.5817-0.9595L186.4966,177.9581z M187.9966,177.9581l3.5817,6.2036
c-1.0984,0.5295-2.3049,0.8645-3.5817,0.9595V177.9581z M192.8812,183.4186l-3.5856-6.2105l6.2106,3.5856
C194.8022,181.8236,193.9111,182.7147,192.8812,183.4186z M196.2491,179.4906l-6.2035-3.5816h7.163
C197.1136,177.1857,196.7787,178.3923,196.2491,179.4906z M190.0456,174.409l6.2035-3.5816
c0.5295,1.0983,0.8645,2.3049,0.9595,3.5816H190.0456z M195.5062,169.5243l-6.2106,3.5856l3.5856-6.2105
C193.9111,167.6033,194.8022,168.4945,195.5062,169.5243z M181.6119,166.8994l3.5856,6.2104l-6.2104-3.5856
C179.691,168.4945,180.582,167.6033,181.6119,166.8994z M224.9132,198.1875v-2.9937c1.0618-0.1144,2.0638-0.2875,2.9999-0.5333
v2.8922C226.9754,197.8536,225.977,198.0608,224.9132,198.1875z M233.5494,193.4546v-1.76
c0.8428-0.7648,1.5977-1.6656,2.2727-2.7089C235.1756,190.7815,234.4185,192.2548,233.5494,193.4546z M212.1988,106.3497
c1.5391,0,3.0957-0.0068,4.6563-0.0137c13.707-0.0605,27.8799-0.1211,32.4219,4.4014c0.3917,0.39,0.6802,0.8156,0.9088,1.2651
c-5.4858-4.7635-19.0134-4.7175-33.3395-4.6542c-1.5576,0.0068-3.1113,0.0137-4.6475,0.0137c-3.9395,0-7.988-0.5621-11.9114-1.4416
l-0.3984-1.0013C203.9181,105.7917,208.0959,106.3497,212.1988,106.3497z M194.1576,101.3339
c-8.3704-2.5245-15.4695-5.9656-18.657-7.6211l4.8826-26.996L194.1576,101.3339z M175.1261,95.7831
c3.703,1.9101,11.2292,5.4852,19.9841,7.9445l0.3783,0.951c-9.3796-2.7318-17.3816-6.7873-20.4452-8.4382L175.1261,95.7831z"
                />
                <path
                    d="M140.936,109.59h16.3634v-4h-13.3572C143.2805,107.1592,142.2393,108.5294,140.936,109.59z"
                />
                <path
                    d="M50.8924,141.0946c1.0375,0.3346,2.136,0.5267,3.2722,0.5776c1.9258,0.226,3.8558,0.2779,5.7095,0.2542
c1.6772-0.0211,3.1824-0.0723,4.5205-0.2256H91.941l4.3984,54.8979c0.5244,6.5425,5.9951,11.5029,12.4463,11.5024
c0.335,0,0.6729-0.0132,1.0117-0.0405c6.8818-0.5513,12.0137-6.5767,11.4619-13.458l-5.3193-66.3999
c-0.5205-6.4956-5.9434-11.502-12.46-11.502H71.7035c0.0386-6.4716,0.7739-13.0898,1.7744-19.4437L55.0077,76.8074
c-1.8438-2.0415-2.7832-4.6792-2.6426-7.4272c0.1396-2.7476,1.3408-5.2764,3.3818-7.1201
c1.8975-1.7129,4.3477-2.6563,6.9023-2.6563c2.9102,0,5.6963,1.2378,7.6455,3.396l8.0541,8.9172
c1.1301-9.0093-2.6761-18.4288-10.174-20.2972c-8.5371-2.129-20.9121,2.5078-25.9473,17.1503
c-6.8047,20.1739-8.2676,33.3047-5.6816,55.5196C38.6815,135.2787,44.4998,139.5352,50.8924,141.0946z"
                />
                <path
                    d="M1.6217,92.6329c-1.2925,0.4854-1.9468,1.9268-1.4614,3.2192l20.8574,55.5464c0.0571,0.1521,0.1312,0.2919,0.213,0.4255
c1.9545,4.2905,12.3107,7.7271,25.6613,8.6071v1.77h4.2498v21.0529l-29.25,9v3.684c-1.874,0.9244-3.1665,2.8486-3.1665,5.0795
c0,3.1296,2.5371,5.6666,5.6667,5.6666s5.6666-2.537,5.6666-5.6666c0-2.2266-1.2872-4.1478-3.1554-5.0742l24.2385-7.4579v7.4526
c-1.874,0.9244-3.1665,2.8486-3.1665,5.0795c0,3.1296,2.5371,5.6666,5.6667,5.6666s5.6666-2.537,5.6666-5.6666
c0-2.2309-1.2924-4.1551-3.1664-5.0795v-7.4521l24.2378,7.4577c-1.8677,0.9266-3.1548,2.8475-3.1548,5.0739
c0,3.1296,2.5371,5.6666,5.6667,5.6666s5.6666-2.537,5.6666-5.6666c0-2.2309-1.2924-4.1551-3.1664-5.0795v-3.6841l-29.25-8.9997
v-21.0532h4.2498v-1.77c14.8481-0.9787,26-5.1194,26-10.0803c0-4.8072-46.7695-5.5518-61.266-2.2346l-11.2106-29.8555
c4.78,7.4578,9.7061,11.6867,13.0234,10.441c5.3257-1.9998-17.6995-63.3193-23.0251-61.3196
c-4.3408,1.6299-4.5863,12.128-1.0864,25.1235C2.4322,92.4529,2.0211,92.4827,1.6217,92.6329z"
                />
                <path
                    d="M57.2889,63.9666c-3.2783,2.9614-3.5361,8.0205-0.5742,11.2993l28.6289,31.6973c1.5166,1.6792,3.6738,2.6377,5.9365,2.6377
h43.167c4.418,0,8-3.5815,8-8s-3.582-8-8-8H94.8348L68.5877,64.5413C65.6278,61.2635,60.5682,61.0057,57.2889,63.9666z"
                />
                <path
                    d="M75.7616,35.3033c0,4.5339-2.2244,8.4835-5.4897,10.4999c4.0836,4.1651,9.7708,6.7521,16.0642,6.7521
c12.4277,0,22.5-10.0733,22.5-22.5c0-12.4268-10.0723-22.5-22.5-22.5c-10.1116,0-18.665,6.671-21.5006,15.8522
c0.1674-0.0092,0.3322-0.0291,0.5013-0.0291C71.0848,23.3785,75.7616,28.7281,75.7616,35.3033z M103.2237,35.322
c0,0-7.979,18.9366-22.3441,3.985C80.8796,39.307,94.8568,41.2409,103.2237,35.322z"
                />
                <path
                    d="M63.3109,23.6085c0.359-2.4274,1.0956-4.8062,2.2389-7.0552c0.0262-0.0516,0.0453-0.1057,0.0719-0.1572
c2.8184-5.4424,7.5869-9.4619,13.4277-11.3174c9.2061-2.9258,18.9141,0.2892,24.6982,7.3378
c4.5574,4.4993,7.3879,10.7437,7.3879,17.6387c0,0.6739-0.0347,1.3395-0.0876,2c2.6863-1.5704,4.5388-4.8383,4.5388-8.627
c0-4.3839-2.4766-8.0764-5.8608-9.2386C103.7132,2.9962,90.379-2.7165,77.8385,1.2662c-6.8594,2.1792-12.46,6.8994-15.7686,13.291
c-1.8357,3.545-2.8411,7.3691-3.0037,11.2424C60.2992,24.7324,61.739,23.9643,63.3109,23.6085z"
                />
                <path
                    d="M65.3368,44.9283c4.4873,0,8.125-4.3093,8.125-9.625s-3.6377-9.625-8.125-9.625s-8.125,4.3093-8.125,9.625
S60.8495,44.9283,65.3368,44.9283z M64.9618,30.1783c2.2782,0,4.125,2.0987,4.125,4.6875c0,2.5889-1.8468,4.6875-4.125,4.6875
c-2.2781,0-4.125-2.0986-4.125-4.6875C60.8368,32.277,62.6837,30.1783,64.9618,30.1783z"
                />
            </g>
                    </svg>`,
        },
        href: '/ban&ghe',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Phụ kiện',
        icon: {
            isFontIcon: true,
            value: 'bi bi-controller text-xl',
        },
        href: '/phukien',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/collection/tren-20',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/collection/tren-50',
                            },
                        ],
                    },
                },
            ],
        },
    },
];

class DropDownMenu {
    // title: string
    // class: string
    // id: string
    // icon: {isFontIcon: boolean, value: string}
    // dropMenu : {isOtherDDMenu: boolean, value: []}
    // parentEl: Node | Element
    #isAlreadySet = false;
    #idMenu = Math.random();
    constructor(
        params = {
            containerClassName: undefined,
            title: '',
            icon: { isFontIcon: false, value: '' },
            href: undefined,
            className: undefined,
            id: undefined,
            dropMenu: { isOtherDDMenu: false, value: [] },
        },
    ) {
        this.title = params.title;
        this.icon = params.icon;
        this.href = params.href;
        this.className = params.className;
        this.id = params.id;
        this.dropMenu = params.dropMenu;
        this.containerClassName = params.containerClassName;
    }

    #createDDMenu() {
        if (this.dropMenu?.isOtherDDMenu) {
            const dropMenu = document.createElement('ul');
            dropMenu.className = 'ddmenu__drop-menu my-2 ml-4 hidden flex-col justify-between';
            document
                .querySelector(`.${this.#getMenuIdCSS('cont')}`)
                .insertAdjacentHTML('beforeend', dropMenu.outerHTML);
            this.dropMenu.value.map((menu) => {
                const newDDMenu = new DropDownMenu(menu);
                newDDMenu.setContainerClassName = `.${this.#getMenuIdCSS('cont')} .ddmenu__drop-menu`;
                newDDMenu.appendMenu();
            });
        } else
            return document.querySelector(`.${this.#getMenuIdCSS('cont')}`).insertAdjacentHTML(
                'beforeend',
                `<ul class="ddmenu__drop-menu my-2 ml-4 hidden flex-col justify-between">
            
            ${this.dropMenu.value
                .map((menu, index) => {
                    return `<a aria-label="${index}" href="${
                        menu.href || '#'
                    }" class="ddmenu__item ml-4 leading-none py-2 text-sm">${menu.title}</a>`;
                })
                .join('')}
        </ul>`,
            );
    }

    #createTitleComponent() {
        const iconEl = this.icon
            ? this.icon.isFontIcon
                ? `<i class="${this.icon.value} text-xl ddmenu__title__icon"></i>`
                : this.icon.value
            : '';
        return `<a href="${this.href || '#'}" class="ddmenu__title inline-flex gap-4 items-center">
            ${iconEl}
            <p class="ddmenu__title__text leading-none text-sm">${this.title}</p>
        </a>`;
    }

    #createMenu() {
        const ddmenuContainerClassname = 'ddmenu__container flex flex-col' + (` ${this.className}` || '');
        return `<div data-ddmenuId="${this.#idMenu}" ${
            this.id ? `id="${this.id}"` : ''
        } class="${ddmenuContainerClassname}">
            <div class="ddmenu__titleContainer flex items-center justify-between">
                ${this.#createTitleComponent()}
                <i class="ddmenu__titleContainer__right-caret bi bi-caret-right-fill text-xs cursor-pointer leading-none px-2 py-2"></i>
            </div>
        </div>`;
    }

    #getMenuIdCSS(type) {
        switch (type) {
            case 'cont':
                return `ddmenu__container[data-ddmenuId="${this.#idMenu}"]`;
            default:
                return `data-ddmenuId="${this.#idMenu}"`;
        }
    }

    #startEventOpenMenu() {
        const el = document.querySelector(`.${this.#getMenuIdCSS('cont')} .ddmenu__titleContainer`);
        el.addEventListener('click', (e) => {
            document
                .querySelector(`${this.containerClassName} .${this.#getMenuIdCSS('cont')}`)
                .classList.toggle('ddmenu--open');
        });
    }

    set setContainerClassName(className) {
        this.containerClassName = className;
    }

    get getMenu() {
        return this.#createMenu();
    }

    appendMenu() {
        if (this.#isAlreadySet) return false;
        this.#isAlreadySet = true;
        try {
            document.querySelector(`${this.containerClassName}`).insertAdjacentHTML('beforeend', this.#createMenu());
            this.appendDropMenu();
            this.#startEventOpenMenu();
            return true;
        } catch (error) {
            console.error(error);
            this.#isAlreadySet = false;
            return false;
        }
    }

    appendDropMenu() {
        this.#createDDMenu();
    }
}

const renderCategoryMenu = (contEl, menuArr = []) => {
    if (!contEl || contEl === '') throw new Error('Container element invalid!');
    return menuArr.map((menu) => {
        return new DropDownMenu({ ...menu, containerClassName: contEl }).appendMenu();
    });
};

const handleOpenMainMenu = () => {
    const mainMenu = document.querySelector('.top-menu__container') || undefined;
    if (!mainMenu) return -1;
    if (mainMenu.classList.contains('top-menu--open')) {
        document.body.style.overflow = 'auto';
        mainMenu.classList.remove('top-menu--open');
    } else {
        document.body.style.overflow = 'hidden';
        mainMenu.classList.add('top-menu--open');
    }
};

const App = () => {
    initSlider(); //Start
    renderCategoryMenu('.category-container', CategoryMenuApi);
};
App();
