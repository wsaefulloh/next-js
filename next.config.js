/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    URL:"https://wahyu-nest-js.herokuapp.com/",
  },
}
