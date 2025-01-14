let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 12_000_000
    },
    {
        "name": 'Feb',
        "Sale": 70_000_000
    },
    {
        "name": 'Mar',
        "Sale": 22_090_000
    },
    {
        "name": 'Apr',
        "Sale": 99_000_000
    },
    {
        "name": 'May',
        "Sale": 75_000_000
    },
    {
        "name": 'Jun',
        "Sale": 130_000_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000_000
    },
    {
        "name": 'Agu',
        "Sale": 88_598_000
    },
    {
        "name": 'Sep',
        "Sale": 58_000_000
    },
    {
        "name": 'Oct',
        "Sale": 123_078_000
    },
    {
        "name": 'Nov',
        "Sale": 12_900_000
    },
    {
        "name": 'Dev',
        "Sale": 97_000_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'رضا آزاد',
        title: 'طراح سایت',
        img: 'images/amin.jpg'
    },
    {
        id: 2,
        username: 'سامان گلریز',
        title: 'مهندس برق',
        img: 'images/sasan.jpg'
    },
    {
        id: 3,
        username: 'سحر گلستانی',
        title: 'عکاس',
        img: 'images/zahra.jpg'
    },
    {
        id: 4,
        username: 'ابراهیم صادقی',
        title: 'مدیر شبکه',
        img: 'images/qadir.jpg'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'ابراهیم صادقی',
        date: '22/aug/2023',
        amount: 123,
        status: 'تایید شده',
        img: 'images/qadir.jpg'
    },
    {
        id: 2,
        customer: 'رضا آزاد',
        date: '23/feb/2023',
        amount: 123,
        status: 'تایید نشده',
        img: 'images/amin.jpg'
    },
    {
        id: 3,
        customer: 'آراز زارع',
        date: '19/dec/2023',
        amount: 123,
        status: 'در حال بررسی',
        img: 'images/mmd.jpg'
    },
    {
        id: 4,
        customer: 'سامان گلریز',
        date: '11/may/2023',
        amount: 123,
        status: 'تایید شده',
        img: 'images/sasan.jpg'
    },
]

let userRows = [
    {
        id: 1,
        user: 'ابراهیم صادقی',
        avatar: 'images/qadir.jpg',
        status: 'فعال',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        user: 'رضا آزاد',
        avatar: 'images/amin.jpg',
        status: 'غیر فعال',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        user: 'سامان گلریز',
        avatar: 'images/sasan.jpg',
        status: 'فعال',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        user: 'سحر گلستانی',
        avatar: 'images/zahra.jpg',
        status: 'فعال',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        user: 'بهرام آقایی',
        avatar: 'images/hamze.jpg',
        status: 'فعال',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'لپتاپ ایسوس',
        avatar: 'images/asus.jpeg',
        price: Number(31000000).toLocaleString()
    },
    {
        id: 2,
        title: 'لپتاپ لنوو',
        avatar: 'images/acer.jpg',
        price: Number(17600000).toLocaleString()
    },
    {
        id: 3,
        title: 'کابل تایپ C',
        avatar: 'images/hp.jpg',
        price: Number(345000).toLocaleString()
    },
    {
        id: 4,
        title: 'آیفون 13 پرو',
        avatar: 'images/dell.jpg',
        price: Number(57000000).toLocaleString()
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export { xAxisData, newMembers, transactions, userRows, products, productsData }