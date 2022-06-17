/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'jwellery-pattern': "url('https://media.istockphoto.com/photos/details-of-jwellery-picture-id1372933788?b=1&k=20&m=1372933788&s=170667a&w=0&h=0HPZ7Qs59Qts6bp0bX9dNF9HzGSC7mB1Njz-lLyWBmk=')",
        'women-pattern': "url('https://media.istockphoto.com/photos/asian-chinese-female-boutique-shop-clothing-store-owner-checking-picture-id1307512096?b=1&k=20&m=1307512096&s=170667a&w=0&h=ooUd9gy8VPs6U5WR_EwH9SqtPG1drP7AidYY-f5BSwU=')",
        'men-pattern': "url('https://media.istockphoto.com/photos/clothing-store-male-visual-merchandising-professional-uses-tablet-to-picture-id1347626118?b=1&k=20&m=1347626118&s=170667a&w=0&h=1ugWUJJMZeMQ1RRjVnHAL2aoif3GXex-B4DCDRY0BIQ=')",
      }
    },
  },
  plugins: [],
}
