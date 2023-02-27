module.exports = ({ env }) => ({
  // ...

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  settings: {
    cors: {
      enabled: true,
      headers: "*",
      origin: ["http://localhost", "https://foo.example"],
    },
  },
  name: "strapi::body",
  config: {
    formLimit: "256mb", // modify form body
    jsonLimit: "256mb", // modify JSON body
    textLimit: "256mb", // modify text body
    formidable: {
      maxFileSize: 200 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
    },
  },
  // ...
});
